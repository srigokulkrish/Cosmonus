'use client'

import { useRef } from 'react'

const BLOGS = [
  {
    title: 'How AI Is Reshaping Brand Identity in 2026',
    tag: 'Branding',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #00D4FF 100%)',
  },
  {
    title: 'Building Scalable Products with AI-First Architecture',
    tag: 'Engineering',
    gradient: 'linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425466 100%)',
  },
  {
    title: 'From Idea to Launch: The Cosmonus Playbook',
    tag: 'Strategy',
    gradient: 'linear-gradient(135deg, #24B47E 0%, #0A2540 100%)',
  },
  {
    title: 'Automating Growth: Workflows That Scale Revenue',
    tag: 'Automation',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #FF80B5 100%)',
  },
  {
    title: 'Why Every Startup Needs an AI Operations Layer',
    tag: 'Ops',
    gradient: 'linear-gradient(135deg, #0A2540 0%, #635BFF 100%)',
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
            <h2 className="blog-header__title">Insights & ideas from the Cosmonus team</h2>
            <p className="blog-header__desc">
              Stories on AI, product building, automation, and growing smarter businesses.
            </p>
          </div>
          <a href="/blogs" className="btn-ghost btn--sm btn-arrow">All posts</a>
        </div>

        {/* Slider */}
        <div className="blog-slider-wrap">
          <div className="blog-slider-nav">
            <button className="blog-slider-btn" onClick={() => scroll(-1)} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="blog-slider-btn" onClick={() => scroll(1)} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <div className="blog-slider" ref={sliderRef}>
            {BLOGS.map((blog) => (
              <a key={blog.title} href="/blogs" className="blog-card">
                <div className="blog-card__img" style={{ background: blog.gradient }}>
                  <span className="blog-card__tag">{blog.tag}</span>
                </div>
                <p className="blog-card__title">{blog.title}</p>
                <span className="blog-card__link">Read article ›</span>
              </a>
            ))}
          </div>
        </div>

        {/* Two CTA banners */}
        <div className="blog-cta-row">
          <a href="/blogs" className="blog-cta-card blog-cta-card--learn">
            <div className="blog-cta-card__text">
              <p className="blog-cta-card__heading"><strong>Learn About AI.</strong> Explore how artificial intelligence is transforming brands, products, and business operations.</p>
              <span className="blog-cta-card__link">Explore now ›</span>
            </div>
            <div className="blog-cta-card__visual blog-cta-card__visual--learn" />
          </a>
          <a href="/contact" className="blog-cta-card blog-cta-card--build">
            <div className="blog-cta-card__text">
              <p className="blog-cta-card__heading"><strong>Build with AI.</strong> Start your next project with intelligent systems, modern design, and automation built in from day one.</p>
              <span className="blog-cta-card__link">Get started ›</span>
            </div>
            <div className="blog-cta-card__visual blog-cta-card__visual--build" />
          </a>
        </div>
      </div>
    </section>
  )
}
