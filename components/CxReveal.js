'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Auto-revealed elements across pages; heroes animate via CSS entrance instead.
const AUTO_TARGETS = [
  '.stats-item', '.clients-acc-item', '.blog-header', '.blog-card',
  '.about-why__left', '.about-why__right',
  '.about-vibe__head', '.about-vibe__step', '.about-vibe__gain',
  '.about-founder__identity', '.about-founder__content',
  '.about-contrast__col', '.about-how__head', '.about-how__card',
  '.about-testimonials__head', '.about-tcard',
  '.about-disciplines__head', '.about-disciplines__item',
  '.about-values__head', '.about-values__card',
  '.products-built__head', '.products-built__visuals', '.products-built__desc',
  '.som-stat', '.som-problem__left', '.som-problem__right',
  '.som-section__head', '.som-screen', '.som-feature', '.som-hiw-col', '.som-stack-row',
  '.res-section__head', '.res-guide-card', '.res-checklist-card', '.res-tool', '.res-glossary__item',
  '.partners-types__head', '.partners-type-card', '.partners-benefits__head', '.partners-benefit',
  '.contact-form-wrap', '.contact-aside', '.contact-faq__head', '.cfaq__item',
  '.cx-section-head', '.footer-cta',
]

export default function CxReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const marked = Array.from(document.querySelectorAll('[data-cx-reveal]'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      marked.forEach((el) => el.classList.add('cx-in'))
      return
    }

    // Only elements below the fold — above-fold content is handled by the CSS
    // hero entrance, so nothing already visible flashes hidden after hydration.
    const auto = Array.from(document.querySelectorAll(AUTO_TARGETS.join(',')))
      .filter((el) => !el.hasAttribute('data-cx-reveal'))
      .filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.85)

    const siblingCount = new Map()
    auto.forEach((el) => {
      const i = siblingCount.get(el.parentElement) ?? 0
      siblingCount.set(el.parentElement, i + 1)
      el.style.setProperty('--rv-i', String(Math.min(i, 5)))
      el.classList.add('rv')
    })

    // Once revealed, strip the reveal styles so the stagger delay never
    // slows down the element's own hover transitions.
    const settle = (el) => (e) => {
      if (e.target !== el) return
      el.classList.remove('rv', 'rv-in')
      el.style.removeProperty('--rv-i')
    }
    auto.forEach((el) => el.addEventListener('transitionend', settle(el), { once: true }))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add(entry.target.classList.contains('rv') ? 'rv-in' : 'cx-in')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    marked.forEach((el) => io.observe(el))
    auto.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      auto.forEach((el) => {
        el.classList.remove('rv', 'rv-in')
        el.style.removeProperty('--rv-i')
      })
    }
  }, [pathname])

  return null
}
