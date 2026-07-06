'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function CxReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('cx-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('cx-in')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [pathname])

  return null
}
