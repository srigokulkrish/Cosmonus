'use client'

import { useState } from 'react'

export default function CapabilitiesList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="capabilities">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className={`capabilities__item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="capabilities__item-head"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="capabilities__item-num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="capabilities__item-title">{item.title}</span>
              <span className="capabilities__item-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className="capabilities__item-body">
              <div className="capabilities__item-body-inner">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
