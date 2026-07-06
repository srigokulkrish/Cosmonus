'use client'

import { useEffect, useRef } from 'react'

const COUNT = 60
const ROWS = 8

function rowY(r, h) {
  return h * 0.12 + (r / (ROWS - 1)) * (h * 0.76)
}

function rowSpeed(r, w) {
  return w * (0.0028 + ((r * 7) % 5) * 0.0005)
}

function toRaw(p, w, h) {
  p.phase = 'raw'
  p.x = w * 0.03 + Math.random() * w * 0.36
  p.y = h * 0.06 + Math.random() * h * 0.88
  p.t = Math.random() * -0.8
}

function toTravel(p, w, h) {
  const row = Math.floor(Math.random() * ROWS)
  p.phase = 'travel'
  p.from = { x: p.x, y: p.y }
  p.to = { x: w * 0.6, y: rowY(row, h) }
  p.ctrl = { x: w * 0.5, y: (p.from.y + p.to.y) / 2 }
  p.r = 1.6 + Math.random() * 1.7
  p.v = rowSpeed(row, w)
  p.t = 0
}

function bezier(p0, p1, p2, t) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  }
}

function ease(t) {
  return t * t * (3 - 2 * t)
}

export default function IntelligenceCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1
    let particles = []
    let raf = 0

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: COUNT }, () => {
        const p = {}
        toRaw(p, w, h)
        const roll = Math.random()
        if (roll < 0.4) {
          toTravel(p, w, h)
          p.t = 1
          p.x = w * (0.6 + Math.random() * 0.35)
          p.y = p.to.y
          p.phase = 'settled'
        } else if (roll < 0.62) {
          toTravel(p, w, h)
          p.t = Math.random()
        }
        return p
      })
    }

    let c = null
    function refreshColors() {
      const s = getComputedStyle(document.documentElement)
      c = {
        panel: s.getPropertyValue('--panel').trim(),
        border: s.getPropertyValue('--border-strong').trim(),
        faint: s.getPropertyValue('--fg-faint').trim(),
        muted: s.getPropertyValue('--fg-muted').trim(),
        accent: s.getPropertyValue('--accent').trim(),
      }
    }

    function draw(advance, dt = 1) {
      ctx.clearRect(0, 0, w, h)

      const bandX1 = w * 0.43
      const bandX2 = w * 0.57

      ctx.fillStyle = c.panel
      ctx.fillRect(bandX1, 0, bandX2 - bandX1, h)

      ctx.strokeStyle = c.muted
      ctx.globalAlpha = 0.45
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(w * 0.5, h * 0.08)
      ctx.lineTo(w * 0.5, h * 0.92)
      ctx.stroke()
      ctx.globalAlpha = 1

      const rows = Array.from({ length: ROWS }, () => [])

      particles.forEach((p) => {
        if (advance) p.t += 0.0095 * dt

        if (p.phase === 'raw') {
          if (advance && p.t > 0.55) toTravel(p, w, h)
        } else if (p.phase === 'travel') {
          if (p.t < 1) {
            const pos = bezier(p.from, p.ctrl, p.to, ease(Math.min(Math.max(p.t, 0), 1)))
            p.x = pos.x
            p.y = pos.y
          } else {
            p.x = p.to.x
            p.y = p.to.y
            p.phase = 'settled'
          }
        } else if (p.phase === 'settled') {
          if (advance) {
            p.x += p.v * dt
            if (p.x > w * 0.965) toRaw(p, w, h)
          }
        }

        if (p.phase === 'settled') {
          const r = Math.round(((p.y - h * 0.12) / (h * 0.76)) * (ROWS - 1))
          if (r >= 0 && r < ROWS) rows[r].push(p)
        }
      })

      rows.forEach((dots, r) => {
        if (!dots.length) return
        let maxX = 0
        for (const d of dots) if (d.x > maxX) maxX = d.x
        const y = rowY(r, h)
        ctx.strokeStyle = c.border
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(w * 0.6, y)
        ctx.lineTo(maxX, y)
        ctx.stroke()
      })

      particles.forEach((p) => {
        if (p.phase === 'raw') {
          if (p.t < 0) return
          ctx.beginPath()
          ctx.arc(p.x + Math.sin(p.t * 36) * 0.8, p.y + Math.cos(p.t * 29) * 0.8, 1.3, 0, Math.PI * 2)
          ctx.fillStyle = c.faint
          ctx.fill()
        } else if (p.phase === 'settled') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = c.accent
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = p.x > bandX2 ? c.accent : p.x > bandX1 ? c.muted : c.faint
          ctx.fill()
        }
      })
    }

    let last = 0
    function loop(now) {
      const dt = last ? Math.min((now - last) / 16.667, 3) : 1
      last = now
      draw(true, dt)
      raf = requestAnimationFrame(loop)
    }

    refreshColors()
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    const mo = new MutationObserver(() => {
      refreshColors()
      if (reduced) draw(false)
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    if (reduced) {
      draw(false)
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="intel-canvas" aria-hidden="true" />
}
