'use client'

import { useEffect, useRef } from 'react'

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function bez(p0, p1, p2, t) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  }
}

function ease(t) {
  return t * t * (3 - 2 * t)
}

function clamp01(t) {
  return Math.min(Math.max(t, 0), 1)
}

function dot(ctx, x, y, r, color, alpha = 1) {
  ctx.globalAlpha = alpha
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
  ctx.globalAlpha = 1
}

function tag(ctx, str, x, y, color, c, size = 8, align = 'left', alpha = 1) {
  ctx.font = `500 ${size}px ${c.mono}`
  ctx.letterSpacing = '0.08em'
  ctx.textAlign = align
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  ctx.fillText(str, x, y)
  ctx.globalAlpha = 1
  ctx.textAlign = 'left'
}

/* ---- map: schematic city grid, listings, one pulsing trust radius ---- */

function layoutMap(r) {
  const vx = [0.12, 0.26, 0.4, 0.55, 0.7, 0.84].map((x) => x + (r() - 0.5) * 0.05)
  const hy = [0.16, 0.36, 0.56, 0.76, 0.92].map((y) => y + (r() - 0.5) * 0.04)
  const markers = Array.from({ length: 11 }, () => ({
    x: vx[Math.floor(r() * vx.length)] + (r() - 0.5) * 0.07,
    y: hy[Math.floor(r() * hy.length)] + (r() - 0.5) * 0.09,
    p: r(),
  }))
  return { vx, hy, markers, focus: { x: 0.58, y: 0.46 } }
}

function drawMap(ctx, w, h, t, c, L) {
  ctx.lineWidth = 1
  ctx.strokeStyle = c.border
  ctx.globalAlpha = 0.7
  L.vx.forEach((x) => {
    ctx.beginPath()
    ctx.moveTo(x * w, h * 0.05)
    ctx.lineTo(x * w, h * 0.95)
    ctx.stroke()
  })
  L.hy.forEach((y) => {
    ctx.beginPath()
    ctx.moveTo(w * 0.05, y * h)
    ctx.lineTo(w * 0.95, y * h)
    ctx.stroke()
  })
  ctx.globalAlpha = 1

  L.markers.forEach((m, i) => {
    const a = 0.35 + 0.3 * (0.5 + 0.5 * Math.sin(t * 1.6 + m.p * Math.PI * 2))
    dot(ctx, m.x * w, m.y * h, 2, i < 2 ? c.accent : c.muted, i < 2 ? 0.9 : a)
  })

  const fx = L.focus.x * w
  const fy = L.focus.y * h
  const base = Math.min(w, h)
  for (let k = 0; k < 2; k++) {
    const prog = ((t / 2.8) + k * 0.5) % 1
    ctx.globalAlpha = (1 - prog) * 0.45
    ctx.strokeStyle = c.accent
    ctx.beginPath()
    ctx.arc(fx, fy, base * (0.05 + prog * 0.17), 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  dot(ctx, fx, fy, 3.5, c.accent)
  tag(ctx, 'TRUST 0.92', fx + 12, fy - 10, c.accent, c, 9, 'left', 0.9)
  tag(ctx, 'VERIFIED OWNER', fx + 12, fy + 2, c.muted, c, 8, 'left', 0.7)
}

/* ---- trace: evidence nodes converging into one decision ---- */

function layoutTrace(r) {
  const evidence = Array.from({ length: 5 }, (_, i) => ({
    x: 0.12 + (r() - 0.5) * 0.03,
    y: 0.14 + (i / 4) * 0.72 + (r() - 0.5) * 0.04,
  }))
  const mids = [{ x: 0.5, y: 0.32 }, { x: 0.5, y: 0.68 }]
  const decision = { x: 0.87, y: 0.5 }
  const edges = []
  evidence.forEach((e, i) => {
    const m = mids[i % 2]
    edges.push({ a: e, b: m, ctrl: { x: 0.32, y: (e.y + m.y) / 2 }, ph: r(), dur: 2.6 + r() * 1.4 })
  })
  mids.forEach((m) => {
    edges.push({ a: m, b: decision, ctrl: { x: 0.7, y: (m.y + decision.y) / 2 }, ph: r(), dur: 2.4 + r() })
  })
  return { evidence, mids, decision, edges }
}

function drawTrace(ctx, w, h, t, c, L) {
  ctx.lineWidth = 1
  ctx.strokeStyle = c.borderStrong
  ctx.globalAlpha = 0.8
  L.edges.forEach((e) => {
    ctx.beginPath()
    ctx.moveTo(e.a.x * w, e.a.y * h)
    ctx.quadraticCurveTo(e.ctrl.x * w, e.ctrl.y * h, e.b.x * w, e.b.y * h)
    ctx.stroke()
  })
  ctx.globalAlpha = 1

  L.evidence.forEach((e, i) => {
    dot(ctx, e.x * w, e.y * h, 2.2, c.muted, 0.8)
    tag(ctx, `E0${i + 1}`, e.x * w - 8, e.y * h - 8, c.faint, c, 8, 'left', 0.85)
  })
  L.mids.forEach((m) => dot(ctx, m.x * w, m.y * h, 2.6, c.muted))

  L.edges.forEach((e) => {
    const prog = ((t / e.dur) + e.ph) % 1
    const pos = bez(
      { x: e.a.x * w, y: e.a.y * h },
      { x: e.ctrl.x * w, y: e.ctrl.y * h },
      { x: e.b.x * w, y: e.b.y * h },
      ease(prog)
    )
    dot(ctx, pos.x, pos.y, 1.8, c.accent, Math.sin(prog * Math.PI))
  })

  const dx = L.decision.x * w
  const dy = L.decision.y * h
  ctx.globalAlpha = 0.35 + 0.2 * Math.sin(t * 2)
  ctx.strokeStyle = c.accent
  ctx.beginPath()
  ctx.arc(dx, dy, 9, 0, Math.PI * 2)
  ctx.stroke()
  ctx.globalAlpha = 1
  dot(ctx, dx, dy, 4, c.accent)
  tag(ctx, 'DECISION', dx, dy + 24, c.accent, c, 9, 'center', 0.9)
}

/* ---- orchestration: agent lanes, one task rerouted between lanes ---- */

function layoutOrch(r) {
  const lanes = [0.2, 0.4, 0.6, 0.8]
  const tasks = Array.from({ length: 6 }, (_, i) => ({
    lane: i % 4,
    off: r(),
    sp: 0.05 + r() * 0.045,
  }))
  return { lanes, tasks, reroute: { a: 1, b: 2, off: r(), sp: 0.06 } }
}

function drawOrch(ctx, w, h, t, c, L) {
  ctx.lineWidth = 1
  L.lanes.forEach((y, i) => {
    ctx.strokeStyle = c.border
    ctx.globalAlpha = 0.9
    ctx.beginPath()
    ctx.moveTo(w * 0.06, y * h)
    ctx.lineTo(w * 0.94, y * h)
    ctx.stroke()
    ctx.globalAlpha = 1
    ctx.strokeStyle = c.borderStrong
    ctx.beginPath()
    ctx.moveTo(w * 0.06, y * h - 5)
    ctx.lineTo(w * 0.06, y * h + 5)
    ctx.stroke()
    tag(ctx, `AGENT 0${i + 1}`, w * 0.06, y * h - 9, c.faint, c, 8, 'left', 0.85)
  })

  function fade(xu) {
    return Math.min(xu * 8, (1 - xu) * 8, 1)
  }

  L.tasks.forEach((task) => {
    const xu = (t * task.sp + task.off) % 1
    dot(ctx, (0.06 + xu * 0.88) * w, L.lanes[task.lane] * h, 2.4, c.muted, fade(xu) * 0.85)
  })

  const R = L.reroute
  const xu = (t * R.sp + R.off) % 1
  let y
  if (xu < 0.4) y = L.lanes[R.a]
  else if (xu > 0.62) y = L.lanes[R.b]
  else y = L.lanes[R.a] + (L.lanes[R.b] - L.lanes[R.a]) * ease((xu - 0.4) / 0.22)
  const rx = (0.06 + xu * 0.88) * w
  dot(ctx, rx, y * h, 2.8, c.accent, fade(xu))
  if (xu > 0.36 && xu < 0.68) {
    const a = Math.min((xu - 0.36) / 0.06, (0.68 - xu) / 0.06, 1)
    tag(ctx, 'EXCEPTION — REROUTED', rx + 8, y * h - 8, c.accent, c, 8, 'left', a * 0.9)
  }
}

/* ---- graph: scattered documents resolving into a knowledge graph ---- */

function layoutGraph(r) {
  const scatter = Array.from({ length: 13 }, () => ({
    x: 0.06 + r() * 0.3,
    y: 0.1 + r() * 0.8,
    p: r(),
  }))
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 + (r() - 0.5) * 0.3
    return { x: 0.72 + Math.cos(a) * 0.13, y: 0.5 + Math.sin(a) * 0.32 }
  })
  const edges = nodes.map((_, i) => [i, (i + 1) % 8])
  edges.push([0, 3], [2, 6], [1, 5])
  const travelers = Array.from({ length: 4 }, (_, i) => ({
    from: scatter[Math.floor(r() * scatter.length)],
    to: nodes[Math.floor(r() * nodes.length)],
    off: i * 1.7 + r(),
  }))
  return { scatter, nodes, edges, travelers }
}

function drawGraph(ctx, w, h, t, c, L) {
  L.scatter.forEach((s) => {
    dot(
      ctx,
      s.x * w + Math.sin(t * 1.8 + s.p * 9) * 1.2,
      s.y * h + Math.cos(t * 1.5 + s.p * 7) * 1.2,
      1.4,
      c.faint
    )
  })

  ctx.lineWidth = 1
  ctx.strokeStyle = c.borderStrong
  ctx.globalAlpha = 0.75
  L.edges.forEach(([a, b]) => {
    ctx.beginPath()
    ctx.moveTo(L.nodes[a].x * w, L.nodes[a].y * h)
    ctx.lineTo(L.nodes[b].x * w, L.nodes[b].y * h)
    ctx.stroke()
  })
  ctx.globalAlpha = 1

  L.nodes.forEach((n) => dot(ctx, n.x * w, n.y * h, 2.6, c.accent))

  L.travelers.forEach((tr) => {
    const prog = ((t + tr.off) / 4.4) % 1
    if (prog < 0.9) {
      const e = ease(clamp01(prog / 0.9))
      const pos = bez(
        { x: tr.from.x * w, y: tr.from.y * h },
        { x: w * 0.5, y: ((tr.from.y + tr.to.y) / 2) * h },
        { x: tr.to.x * w, y: tr.to.y * h },
        e
      )
      dot(ctx, pos.x, pos.y, 1.9, prog < 0.5 ? c.muted : c.accent, 0.9)
    } else {
      const k = (prog - 0.9) / 0.1
      ctx.globalAlpha = (1 - k) * 0.5
      ctx.strokeStyle = c.accent
      ctx.beginPath()
      ctx.arc(tr.to.x * w, tr.to.y * h, 4 + k * 7, 0, Math.PI * 2)
      ctx.stroke()
      ctx.globalAlpha = 1
    }
  })
}

/* ---- systems: layered blueprint, reasoning layer highlighted ---- */

function layoutSystems(r) {
  const gap = 0.035
  const top = 0.08
  const height = (0.84 - 3 * gap) / 4
  const layers = Array.from({ length: 4 }, (_, i) => ({
    y: top + i * (height + gap),
    h: height,
  }))
  const nodes = layers.flatMap((l, li) =>
    Array.from({ length: 5 }, (_, i) => ({
      x: 0.2 + (i / 4) * 0.6 + (r() - 0.5) * 0.03,
      y: l.y + l.h / 2 + (r() - 0.5) * l.h * 0.4,
      li,
      p: r(),
    }))
  )
  return {
    layers,
    nodes,
    connectors: [0.3, 0.5, 0.7],
    reasoning: 1,
    names: ['INTERFACE', 'REASONING', 'KNOWLEDGE', 'INFRASTRUCTURE'],
  }
}

function drawSystems(ctx, w, h, t, c, L) {
  ctx.lineWidth = 1
  L.connectors.forEach((x) => {
    ctx.strokeStyle = c.border
    ctx.globalAlpha = 0.6
    ctx.beginPath()
    ctx.moveTo(x * w, h * 0.08)
    ctx.lineTo(x * w, h * 0.92)
    ctx.stroke()
    ctx.globalAlpha = 1
  })

  L.layers.forEach((l, i) => {
    const x = w * 0.12
    const lw = w * 0.76
    if (i === L.reasoning) {
      ctx.globalAlpha = 0.07
      ctx.fillStyle = c.accent
      ctx.fillRect(x, l.y * h, lw, l.h * h)
      ctx.globalAlpha = 0.9
      ctx.strokeStyle = c.accent
    } else {
      ctx.fillStyle = c.panel
      ctx.fillRect(x, l.y * h, lw, l.h * h)
      ctx.strokeStyle = c.borderStrong
      ctx.globalAlpha = 0.9
    }
    ctx.strokeRect(x, l.y * h, lw, l.h * h)
    ctx.globalAlpha = 1
    tag(
      ctx,
      L.names[i],
      x + 10,
      l.y * h + 15,
      i === L.reasoning ? c.accent : c.faint,
      c,
      9,
      'left',
      i === L.reasoning ? 0.95 : 0.8
    )
  })

  L.nodes.forEach((n) => {
    const inReasoning = n.li === L.reasoning
    const a = 0.4 + 0.3 * (0.5 + 0.5 * Math.sin(t * 1.4 + n.p * Math.PI * 2))
    dot(ctx, n.x * w, n.y * h, inReasoning ? 2.4 : 2, inReasoning ? c.accent : c.muted, inReasoning ? 0.95 : a)
  })

  const rl = L.layers[L.reasoning]
  L.connectors.forEach((x, k) => {
    const prog = ((t / 3.6) + k * 0.33) % 1
    const y = 0.92 - prog * 0.84
    const inside = y > rl.y && y < rl.y + rl.h
    dot(ctx, x * w, y * h, 2, inside ? c.accent : c.muted, 0.9)
  })
}

/* ---- flow: nine-stage pipeline with feedback loops ---- */

const FLOW_STAGES = ['DISCOVERY', 'DATA MAPPING', 'ARCHITECTURE', 'REASONING', 'PROTOTYPE', 'EVALUATION', 'INTEGRATION', 'HARDENING', 'LEARNING']

function layoutFlow() {
  const nodes = FLOW_STAGES.map((name, i) => ({
    name,
    x: 0.06 + (i / (FLOW_STAGES.length - 1)) * 0.88,
    y: 0.44,
    above: i % 2 === 0,
  }))
  return { nodes, cycle: 9 }
}

function drawFlow(ctx, w, h, t, c, L) {
  const n = L.nodes
  const first = n[0]
  const last = n[n.length - 1]
  const py = L.nodes[0].y * h

  ctx.lineWidth = 1
  ctx.strokeStyle = c.borderStrong
  ctx.globalAlpha = 0.9
  ctx.beginPath()
  ctx.moveTo(first.x * w, py)
  ctx.lineTo(last.x * w, py)
  ctx.stroke()

  const evalN = n[5]
  const protoN = n[4]
  ctx.globalAlpha = 0.5
  ctx.beginPath()
  ctx.moveTo(evalN.x * w, py - 5)
  ctx.quadraticCurveTo(((evalN.x + protoN.x) / 2) * w, h * 0.14, protoN.x * w, py - 5)
  ctx.stroke()

  ctx.strokeStyle = c.accent
  ctx.globalAlpha = 0.3
  ctx.beginPath()
  ctx.moveTo(last.x * w, py + 5)
  ctx.quadraticCurveTo(w * 0.5, h * 0.97, first.x * w, py + 5)
  ctx.stroke()
  ctx.globalAlpha = 1

  const u = (t % L.cycle) / L.cycle
  let px = null
  let backPos = null
  if (u < 0.78) {
    px = first.x + (u / 0.78) * (last.x - first.x)
    dot(ctx, px * w, py, 2.6, c.accent)
  } else {
    const b = ease((u - 0.78) / 0.22)
    backPos = bez(
      { x: last.x * w, y: py + 5 },
      { x: w * 0.5, y: h * 0.97 },
      { x: first.x * w, y: py + 5 },
      b
    )
    dot(ctx, backPos.x, backPos.y, 2.2, c.accent, 0.9)
  }

  const rp = ((t + 1.2) % 3.8) / 3.8
  if (rp < 0.4) {
    const pos = bez(
      { x: evalN.x * w, y: py - 5 },
      { x: ((evalN.x + protoN.x) / 2) * w, y: h * 0.14 },
      { x: protoN.x * w, y: py - 5 },
      ease(rp / 0.4)
    )
    dot(ctx, pos.x, pos.y, 1.7, c.muted, 0.8)
  }

  const seg = (last.x - first.x) / (n.length - 1)
  n.forEach((node) => {
    const x = node.x * w
    const active = px !== null && Math.abs(px - node.x) < seg * 0.5
    ctx.fillStyle = c.bg
    ctx.strokeStyle = active ? c.accent : c.borderStrong
    ctx.globalAlpha = 1
    ctx.fillRect(x - 4, py - 4, 8, 8)
    ctx.strokeRect(x - 4, py - 4, 8, 8)
    if (active) {
      ctx.globalAlpha = 0.9
      ctx.fillStyle = c.accent
      ctx.fillRect(x - 2, py - 2, 4, 4)
      ctx.globalAlpha = 1
    }
    tag(
      ctx,
      node.name,
      x,
      node.above ? py - 16 : py + 24,
      active ? c.accent : c.faint,
      c,
      8,
      'center',
      active ? 1 : 0.85
    )
  })
}

const VARIANTS = {
  map: { seed: 7, layout: layoutMap, draw: drawMap, header: ['Listing map', 'Twelve signals', 'Trust score'] },
  trace: { seed: 11, layout: layoutTrace, draw: drawTrace, header: ['Evidence', 'Reasoning', 'Decision'] },
  orchestration: { seed: 5, layout: layoutOrch, draw: drawOrch, header: ['Incoming tasks', 'Agent lanes', 'Resolved'] },
  graph: { seed: 13, layout: layoutGraph, draw: drawGraph, header: ['Raw records', 'Resolution', 'Knowledge graph'] },
  systems: { seed: 3, layout: layoutSystems, draw: drawSystems, header: null },
  flow: { seed: 17, layout: layoutFlow, draw: drawFlow, header: ['Problem in', 'Nine stages', 'Production out'] },
}

export default function DiagramCanvas({ variant, ratio, className = '', label, caption }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const spec = VARIANTS[variant]

    let w = 0
    let h = 0
    let L = null
    let raf = 0
    let c = null

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = rect.width
      h = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      L = spec.layout(rng(spec.seed))
      if (reduced) draw(2.3)
    }

    function refreshColors() {
      const s = getComputedStyle(document.documentElement)
      c = {
        panel: s.getPropertyValue('--panel').trim(),
        border: s.getPropertyValue('--border').trim(),
        borderStrong: s.getPropertyValue('--border-strong').trim(),
        faint: s.getPropertyValue('--fg-faint').trim(),
        muted: s.getPropertyValue('--fg-muted').trim(),
        accent: s.getPropertyValue('--accent').trim(),
        bg: s.getPropertyValue('--bg').trim(),
        mono: s.getPropertyValue('--font-mono').trim() || 'ui-monospace, monospace',
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h)
      spec.draw(ctx, w, h, t, c, L)
    }

    function loop(now) {
      draw(now / 1000)
      raf = requestAnimationFrame(loop)
    }

    refreshColors()
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    const mo = new MutationObserver(() => {
      refreshColors()
      if (reduced) draw(2.3)
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    if (!reduced) raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mo.disconnect()
    }
  }, [variant])

  const header = VARIANTS[variant].header
  return (
    <div
      className={`diagram-frame ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label}
    >
      {header && (
        <div className="diagram-frame__label" aria-hidden="true">
          {header.map((t) => <span key={t}>{t}</span>)}
        </div>
      )}
      <div className="diagram-frame__canvas">
        <canvas ref={canvasRef} aria-hidden="true" />
      </div>
      {caption && <p className="diagram-frame__caption">{caption}</p>}
    </div>
  )
}
