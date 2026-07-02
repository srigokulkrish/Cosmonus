'use client'

import { useEffect } from 'react'

// Reveals [data-cx-reveal] elements on scroll; respects reduced-motion.
export default function CxReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-cx-reveal]'))
    if (!els.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('cx-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cx-in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
