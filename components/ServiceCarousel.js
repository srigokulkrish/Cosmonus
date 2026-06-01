'use client'

import { useRef } from 'react'
import Link from 'next/link'

export default function ServiceCarousel({ services }) {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    if (!sliderRef.current) return
    const card = sliderRef.current.querySelector('.svc-card')
    const amount = card ? card.offsetWidth + 16 : 300
    sliderRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const allItems = services.flatMap((s) =>
    s.items.map((item) => ({ ...item, category: s.category }))
  )

  return (
    <div className="svc-carousel-wrap">
      <div className="svc-carousel-nav">
        <button className="blog-slider-btn" onClick={() => scroll(-1)} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="blog-slider-btn" onClick={() => scroll(1)} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="svc-carousel" ref={sliderRef}>
        {allItems.map((item) => (
          <Link key={item.href} href={item.href} className="svc-card">
            <div className="svc-card__band" style={{ background: item.gradient }} />
            <div className="svc-card__content">
              <span className="svc-card__category">{item.category}</span>
              <h4 className="svc-card__label">{item.label}</h4>
              <p className="svc-card__desc">{item.desc}</p>
              <span className="svc-card__arrow">Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
