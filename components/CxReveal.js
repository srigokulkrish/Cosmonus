'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function CxReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]:not(.cx-in)'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('cx-in'))
      return
    }

    // Anything already on screen is shown at once. Waiting for the observer
    // costs a frame of blank content on every navigation, which reads as lag.
    const vh = window.innerHeight
    const pending = []
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.classList.add('cx-in')
      else pending.push(el)
    })

    if (!pending.length) return

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

    pending.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [pathname])

  return null
}
