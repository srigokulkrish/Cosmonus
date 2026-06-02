'use client'

import { useState } from 'react'

const TAGS = ['All', 'Perspective', 'Guide', 'AI', 'Design', 'Business', 'Engineering', 'Strategy']

export default function BlogFilter({ posts }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <>
      <div className="blog-page-filters">
        <div className="container">
          <div className="blog-page-filters__pills">
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                className={`blog-tag${active === t ? ' blog-tag--active' : ''}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="blog-page-grid-section">
        <div className="container">
          <div className="blog-page-grid">
            {filtered.map((p) => (
              <a key={p.title} href="#" className="blog-card blog-card--page">
                <div className="blog-card__img">
                  <span className="blog-card__bg" style={{ backgroundImage: p.gradient }} />
                  <span className="blog-card__tag">{p.tag}</span>
                </div>
                <p className="blog-card__title">{p.title}</p>
                <p className="blog-card__excerpt">{p.excerpt}</p>
                <span className="blog-card__link">Read article ›</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
