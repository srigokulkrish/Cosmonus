'use client'
import { useState } from 'react'

const SLIDES = [
  { id: 1, label: 'Brand 01' },
  { id: 2, label: 'Brand 02' },
  { id: 3, label: 'Brand 03' },
]

const SOCIALS = ['Instagram Post', 'Instagram Story', 'LinkedIn', 'Banner Ad']

export default function BrandApplicationCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  function prev() { setCurrent(c => (c - 1 + total) % total) }
  function next() { setCurrent(c => (c + 1) % total) }

  return (
    <div className="bac">
      {/* Website — top */}
      <div className="bac__website">
        <div className="bac__browser-bar">
          <span className="bac__dot" />
          <span className="bac__dot" />
          <span className="bac__dot" />
        </div>
        <div className="bac__website-img">
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Website</span>
        </div>
      </div>

      {/* Social media — bottom strip */}
      <div className="bac__socials">
        {SOCIALS.map((label) => (
          <div key={label} className="bac__social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M3 17l5-4 4 3.5 3-3L21 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="bac__nav">
        <button className="bac__arrow" onClick={prev} aria-label="Previous brand">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M10.354 3.646a.5.5 0 0 1 0 .708L6.707 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        <div className="bac__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              className={`bac__dot-btn${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="bac__arrow" onClick={next} aria-label="Next brand">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8 5.646 11.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
