'use client'
import { useState } from 'react'

const SLIDES = [
  { id: 1, label: 'Studio · 01' },
  { id: 2, label: 'Studio · 02' },
  { id: 3, label: 'Studio · 03' },
  { id: 4, label: 'Studio · 04' },
  { id: 5, label: 'Studio · 05' },
]

export default function AboutImageCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length

  function prev() { setCurrent(c => (c - 1 + total) % total) }
  function next() { setCurrent(c => (c + 1) % total) }

  const visible = [
    SLIDES[current % total],
    SLIDES[(current + 1) % total],
    SLIDES[(current + 2) % total],
  ]

  return (
    <div className="about-carousel">
      <div className="about-carousel__track">
        {visible.map((s, i) => (
          <div key={`${s.id}-${i}`} className={`about-carousel__img${i === 0 ? ' about-carousel__img--active' : ''}`}>
            <span className="about-carousel__img-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="about-carousel__nav">
        <button className="bac__arrow" onClick={prev} aria-label="Previous">
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
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
        <button className="bac__arrow" onClick={next} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8 5.646 11.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
