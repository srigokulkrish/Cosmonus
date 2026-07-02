'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function buildPalette(THREE, isDark) {
  if (isDark) {
    return {
      deep:  new THREE.Color(0x818CF8),  // periwinkle
      mid:   new THREE.Color(0xA5B4FC),  // lavender-blue
      light: new THREE.Color(0xC7D2FE),  // pale lavender
      glow: [
        [0,    'rgba(129,140,248,1)'],
        [0.1,  'rgba(165,180,252,0.85)'],
        [0.25, 'rgba(199,210,254,0.4)'],
        [0.5,  'rgba(199,210,254,0.1)'],
        [1,    'rgba(199,210,254,0)'],
      ],
    }
  }
  return {
    deep:  new THREE.Color(0x4338CA),  // deep violet
    mid:   new THREE.Color(0x635BFF),  // brand violet
    light: new THREE.Color(0x7C75FF),  // violet
    glow: [
      [0,    'rgba(67,56,202,1)'],
      [0.1,  'rgba(99,91,255,0.85)'],
      [0.25, 'rgba(124,117,255,0.4)'],
      [0.5,  'rgba(124,117,255,0.1)'],
      [1,    'rgba(124,117,255,0)'],
    ],
  }
}

function recomputeColors(THREE, palette, baseAngles, rayColors) {
  for (let i = 0; i < baseAngles.length; i++) {
    const t = baseAngles[i].phi / (Math.PI * 0.5)
    if (t < 0.5) {
      rayColors[i].lerpColors(palette.deep, palette.mid, t * 2)
    } else {
      rayColors[i].lerpColors(palette.mid, palette.light, (t - 0.5) * 2)
    }
  }
}

function drawGlowTexture(ctx, stops) {
  ctx.clearRect(0, 0, 64, 64)
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  for (const [stop, color] of stops) grad.addColorStop(stop, color)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 64, 64)
}

export default function RaycastVisual() {
  const containerRef = useRef(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      if (cancelled || !containerRef.current) return

      const container = containerRef.current
      const width  = container.clientWidth
      const height = container.clientHeight

      const isDark = () =>
        document.documentElement.getAttribute('data-theme') === 'dark'

      const scene    = new THREE.Scene()
      const camera   = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
      camera.position.set(0, 0.8, 6)
      camera.lookAt(0, 0.2, 0)

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      const RAY_COUNT = 400
      const ORIGIN    = new THREE.Vector3(0, -3, 0)

      const baseAngles  = []
      const rayLengths  = []
      const rayColors   = []
      const rayMeta     = []

      for (let i = 0; i < RAY_COUNT; i++) {
        const phi   = Math.acos(Math.random() * 0.92)
        const theta = Math.random() * Math.PI * 2
        baseAngles.push({ phi, theta })
        rayLengths.push(2.0 + Math.random() * 3.0)
        rayColors.push(new THREE.Color())
        rayMeta.push({
          swaySpeed:    0.6 + Math.random() * 1.0,
          swayAmount:   0.03 + Math.random() * 0.05,
          swayOffset:   Math.random() * Math.PI * 2,
          flickerSpeed: 0.15 + Math.random() * 0.4,
          flickerOffset: Math.random() * Math.PI * 2,
        })
      }

      let palette = buildPalette(THREE, isDark())
      recomputeColors(THREE, palette, baseAngles, rayColors)

      // Line geometry
      const positions = new Float32Array(RAY_COUNT * 6)
      const colors    = new Float32Array(RAY_COUNT * 6)
      const alphas    = new Float32Array(RAY_COUNT * 2)
      const geometry  = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('alpha',    new THREE.BufferAttribute(alphas, 1))

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite:  false,
        vertexShader: `
          attribute float alpha;
          attribute vec3 color;
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            vAlpha = alpha;
            vColor = color;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying float vAlpha;
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(vColor, vAlpha);
          }
        `,
      })
      const lines = new THREE.LineSegments(geometry, material)
      scene.add(lines)

      // Glow dots
      const glowCanvas = document.createElement('canvas')
      glowCanvas.width  = 64
      glowCanvas.height = 64
      const glowCtx = glowCanvas.getContext('2d')
      drawGlowTexture(glowCtx, palette.glow)
      const glowTexture = new THREE.CanvasTexture(glowCanvas)

      const dotPositions = new Float32Array(RAY_COUNT * 3)
      const dotColors    = new Float32Array(RAY_COUNT * 3)
      const dotGeometry  = new THREE.BufferGeometry()
      dotGeometry.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3))
      dotGeometry.setAttribute('color',    new THREE.BufferAttribute(dotColors, 3))

      const dotMaterial = new THREE.PointsMaterial({
        size: 0.18,
        map: glowTexture,
        transparent: true,
        opacity: 1.0,
        depthWrite: false,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      })
      const dotPoints = new THREE.Points(dotGeometry, dotMaterial)
      scene.add(dotPoints)

      // Mouse tracking
      const mouse       = new THREE.Vector2(9999, 9999)
      const mouse3D     = new THREE.Vector3()
      const raycaster   = new THREE.Raycaster()
      const mousePlane  = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      const smoothMouse3D = new THREE.Vector3(9999, 9999, 0)
      const prevMouse3D   = new THREE.Vector3(9999, 9999, 0)

      function onMouseMove(e) {
        const rect = container.getBoundingClientRect()
        mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1
        mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1
      }
      function onMouseLeave() { mouse.x = 9999; mouse.y = 9999 }
      container.addEventListener('mousemove', onMouseMove)
      container.addEventListener('mouseleave', onMouseLeave)

      // Theme observer — update colors without reinit
      function applyTheme() {
        palette = buildPalette(THREE, isDark())
        recomputeColors(THREE, palette, baseAngles, rayColors)
        drawGlowTexture(glowCtx, palette.glow)
        glowTexture.needsUpdate = true
      }

      const observer = new MutationObserver(applyTheme)
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      })

      const directions = baseAngles.map(({ phi, theta }) =>
        new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta),
          Math.cos(phi) * 0.85 + 0.15,
          Math.sin(phi) * Math.sin(theta) * 0.25
        ).normalize()
      )

      let time = 0

      function animate() {
        if (cancelled) return
        requestAnimationFrame(animate)
        time += 0.01

        const pos  = geometry.attributes.position.array
        const col  = geometry.attributes.color.array
        const dPos = dotGeometry.attributes.position.array
        const dCol = dotGeometry.attributes.color.array

        raycaster.setFromCamera(mouse, camera)
        raycaster.ray.intersectPlane(mousePlane, mouse3D)
        prevMouse3D.copy(smoothMouse3D)
        smoothMouse3D.lerp(mouse3D, 0.1)

        for (let i = 0; i < RAY_COUNT; i++) {
          const meta = rayMeta[i]
          const base = baseAngles[i]
          const rc   = rayColors[i]
          const len  = rayLengths[i]

          const sway        = Math.sin(time * meta.swaySpeed + meta.swayOffset) * meta.swayAmount
          const swayedTheta = base.theta + sway
          const dir         = directions[i]
          dir.x = Math.sin(base.phi) * Math.cos(swayedTheta)
          dir.y = Math.cos(base.phi) * 0.85 + 0.15
          dir.z = Math.sin(base.phi) * Math.sin(swayedTheta) * 0.25
          dir.normalize()

          pos[i * 6 + 0] = ORIGIN.x
          pos[i * 6 + 1] = ORIGIN.y
          pos[i * 6 + 2] = ORIGIN.z

          let tx = ORIGIN.x + dir.x * len
          let ty = ORIGIN.y + dir.y * len
          let tz = ORIGIN.z + dir.z * len

          if (mouse.x < 100) {
            const dx   = smoothMouse3D.x - tx
            const dy   = smoothMouse3D.y - ty
            const dist = Math.sqrt(dx * dx + dy * dy)
            const radius = 3.5
            if (dist < radius && dist > 0.01) {
              const falloff      = 1 - dist / radius
              const smooth       = falloff * falloff
              const attract      = 0.45 * smooth
              tx += dx * attract
              ty += dy * attract
              const orbitSpeed    = time * 2.5 + i * 0.05
              const orbitStrength = 0.2 * smooth
              tx += -dy / dist * Math.sin(orbitSpeed) * orbitStrength
              ty +=  dx / dist * Math.sin(orbitSpeed) * orbitStrength
            }
          }

          pos[i * 6 + 3] = tx
          pos[i * 6 + 4] = ty
          pos[i * 6 + 5] = tz

          const flicker    = Math.sin(time * meta.flickerSpeed + meta.flickerOffset)
          const visibility = Math.max(0, flicker)

          col[i * 6 + 0] = rc.r; col[i * 6 + 1] = rc.g; col[i * 6 + 2] = rc.b
          col[i * 6 + 3] = rc.r; col[i * 6 + 4] = rc.g; col[i * 6 + 5] = rc.b

          alphas[i * 2 + 0] = 0.15 * visibility
          alphas[i * 2 + 1] = 0.85 * visibility

          if (visibility > 0.15) {
            dPos[i * 3 + 0] = tx; dPos[i * 3 + 1] = ty; dPos[i * 3 + 2] = tz
            dCol[i * 3 + 0] = rc.r * visibility
            dCol[i * 3 + 1] = rc.g * visibility
            dCol[i * 3 + 2] = rc.b * visibility
          } else {
            dPos[i * 3 + 0] = 0; dPos[i * 3 + 1] = -999; dPos[i * 3 + 2] = 0
            dCol[i * 3 + 0] = 0; dCol[i * 3 + 1] = 0;    dCol[i * 3 + 2] = 0
          }
        }

        geometry.attributes.position.needsUpdate = true
        geometry.attributes.color.needsUpdate    = true
        geometry.attributes.alpha.needsUpdate    = true
        dotGeometry.attributes.position.needsUpdate = true
        dotGeometry.attributes.color.needsUpdate    = true

        camera.position.x = Math.sin(time * 0.08) * 0.1
        camera.position.y = 0.8 + Math.sin(time * 0.12) * 0.03
        camera.lookAt(0, 0.2, 0)

        renderer.render(scene, camera)
      }

      animate()

      function onResize() {
        if (!containerRef.current) return
        const w = containerRef.current.clientWidth
        const h = containerRef.current.clientHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }
      window.addEventListener('resize', onResize)

      cleanupRef.current = () => {
        cancelled = true
        observer.disconnect()
        window.removeEventListener('resize', onResize)
        container.removeEventListener('mousemove', onMouseMove)
        container.removeEventListener('mouseleave', onMouseLeave)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        dotGeometry.dispose()
        dotMaterial.dispose()
        glowTexture.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      }
    }

    init().catch(console.error)
    return () => { cancelled = true; if (cleanupRef.current) cleanupRef.current() }
  }, [])

  return <div ref={containerRef} className="stats-visual-canvas" />
}
