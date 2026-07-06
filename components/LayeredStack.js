'use client'

import { useState } from 'react'

export default function LayeredStack({ layers }) {
  const [active, setActive] = useState(0)

  return (
    <div className="stack">
      {layers.map((layer, i) => {
        const isActive = active === i
        return (
          <div key={layer.name} className={`stack__layer${isActive ? ' is-active' : ''}`}>
            <button
              type="button"
              className="stack__layer-head"
              aria-expanded={isActive}
              onClick={() => setActive(isActive ? -1 : i)}
            >
              <span className="stack__layer-num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="stack__layer-name">{layer.name}</span>
              <span className="stack__layer-tag">{layer.tag}</span>
              <span className="stack__layer-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div className="stack__layer-body">
              <div className="stack__layer-body-inner">
                <p>{layer.body}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
