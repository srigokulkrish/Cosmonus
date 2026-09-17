'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function SmoothScroll() {
  const lenisRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    let rafId = 0
    let cancelled = false

    // Smooth-scroll hijacking is exactly what reduced-motion asks us not to do,
    // and no CSS can opt out of it — so don't load Lenis at all.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function init() {
      const Lenis = (await import('lenis')).default
      if (cancelled) return

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      })
      lenisRef.current = lenis

      const raf = (time) => {
        if (cancelled) return
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    init()

    // `body { overflow: hidden }` doesn't stop Lenis — it drives scroll itself,
    // so the page still moves under an open mobile menu on touch.
    const lock = () => lenisRef.current?.stop()
    const unlock = () => lenisRef.current?.start()
    window.addEventListener('cx:scroll-lock', lock)
    window.addEventListener('cx:scroll-unlock', unlock)

    return () => {
      cancelled = true
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('cx:scroll-lock', lock)
      window.removeEventListener('cx:scroll-unlock', unlock)
      if (lenisRef.current) lenisRef.current.destroy()
      lenisRef.current = null
    }
  }, [])

  // Lenis owns the scroll position, so Next's own reset doesn't land — a new
  // page would otherwise open halfway down where the last one was left.
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return null
}
