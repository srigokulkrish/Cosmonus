'use client'

import { useRef } from 'react'

const BLOGS = [
  {
    title: 'What Makes a System Intelligent — and Why Most "AI Features" Aren\'t',
    tag: 'Foundations',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    title: 'How Software Reasons: Knowledge Systems, Explained for Operators',
    tag: 'Engineering',
    gradient: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
  },
  {
    title: 'From Data to Decision: The Cosmonus Playbook',
    tag: 'Strategy',
    gradient: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
  },
  {
    title: 'Autonomy Is Granted, Not Assumed: Oversight in Decision Systems',
    tag: 'Trust',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    title: 'Intelligence in Production: Lessons from StayOnMap',
    tag: 'Case Study',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
]

export default function BlogSection() {
  const sliderRef = useRef(null)

  const scroll = (dir) => {
    if (!sliderRef.current) return
    const card = sliderRef.current.querySelector('.blog-card')
    const amount = card ? card.offsetWidth + 16 : 320
    sliderRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="blog-section">
      <div className="container">
        {/* Header */}
        <div className="blog-header">
          <div className="blog-header__left">
            <h2 className="blog-header__title">Notes from the engineers</h2>
            <p className="blog-header__desc">
              How intelligent systems work, where they fail, and what we learn running them.
            </p>
          </div>
          <a href="/blogs" className="btn-ghost btn--sm btn-arrow">All posts</a>
        </div>

        {/* Slider */}
        <div className="blog-slider-wrap">
          <div className="blog-slider-nav">
            <button className="blog-slider-btn" onClick={() => scroll(-1)} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M10.354 3.646a.5.5 0 0 1 0 .708L6.707 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0z"/></svg>
            </button>
            <button className="blog-slider-btn" onClick={() => scroll(1)} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5.646 3.646a.5.5 0 0 0 0 .708L9.293 8 5.646 11.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0z"/></svg>
            </button>
          </div>
          <div className="blog-slider" ref={sliderRef}>
            {BLOGS.map((blog) => (
              <a key={blog.title} href="/blogs" className="blog-card">
                <div className="blog-card__img">
                  <span className="blog-card__bg" style={{ backgroundImage: blog.gradient }} />
                  <span className="blog-card__tag">{blog.tag}</span>
                </div>
                <p className="blog-card__title">{blog.title}</p>
                <span className="blog-card__link">Read article ›</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
