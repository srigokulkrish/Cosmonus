'use client'

import { useState } from 'react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="sol-faq">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`sol-faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="sol-faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="sol-faq__q-text">{f.q}</span>
              <svg
                className="sol-faq__chevron"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div className="sol-faq__body">
                <p className="sol-faq__a">{f.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
