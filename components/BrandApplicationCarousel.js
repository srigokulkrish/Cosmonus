'use client'
import { useState, useRef } from 'react'

const SLIDES = [
  { id: 1, label: 'Brand 01' },
  { id: 2, label: 'Brand 02' },
  { id: 3, label: 'Brand 03' },
]

const SOCIALS = [
  { src: '/images/assets/fluid/poster 8.png',  label: 'Poster 8'  },
  { src: '/images/assets/fluid/poster 9.png',  label: 'Poster 9'  },
  { src: '/images/assets/fluid/poster 10.png', label: 'Poster 10' },
  { src: '/images/assets/fluid/poster 11.png', label: 'Poster 11' },
  { src: '/images/assets/fluid/poster 12.png', label: 'Poster 12' },
  { src: '/images/assets/fluid/poster 13.png', label: 'Poster 13' },
  { src: '/images/assets/fluid/poster 14.png', label: 'Poster 14' },
  { src: '/images/assets/fluid/poster 15.png', label: 'Poster 15' },
]

export default function BrandApplicationCarousel() {
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length
  const socialsRef = useRef(null)

  function prev() { setCurrent(c => (c - 1 + total) % total) }
  function next() { setCurrent(c => (c + 1) % total) }

  function scrollSocials(dir) {
    if (!socialsRef.current) return
    const item = socialsRef.current.querySelector('.bac__social')
    const amount = item ? (item.offsetWidth + 8) * 4 : 300
    socialsRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

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
          <img src="/images/assets/project5.png" alt="Brand website — Astusx" className="bac__website-video" />
        </div>
      </div>

      {/* Social media — bottom strip */}
      <div className="bac__socials-wrap">
        <button className="bac__arrow bac__arrow--sm" onClick={() => scrollSocials(-1)} aria-label="Previous posters">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M10.354 3.646a.5.5 0 0 1 0 .708L6.707 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/></svg>
        </button>
        <div className="bac__socials" ref={socialsRef}>
          {SOCIALS.map((p) => (
            <div key={p.label} className="bac__social">
              <img src={p.src} alt={p.label} className="bac__social-img" />
            </div>
          ))}
        </div>
        <button className="bac__arrow bac__arrow--sm" onClick={() => scrollSocials(1)} aria-label="Next posters">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8 5.646 11.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0z"/></svg>
        </button>
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
