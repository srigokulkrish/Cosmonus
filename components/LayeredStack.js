'use client'

import { useId, useState } from 'react'

export default function LayeredStack({ layers }) {
  const [open, setOpen] = useState(null)
  const uid = useId()

  return (
    <div className="stack">
      {layers.map((layer, i) => {
        const isOpen = open === i
        const hasDetail = Boolean(layer.detail)
        const bodyId = `${uid}-layer-${i}`

        return (
          <div key={layer.name} className={`stack__layer${isOpen ? ' is-active' : ''}`}>
            {hasDetail ? (
              <button
                type="button"
                className="stack__layer-head"
                aria-expanded={isOpen}
                aria-controls={bodyId}
                onClick={() => setOpen(isOpen ? null : i)}
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
            ) : (
              <div className="stack__layer-head">
                <span className="stack__layer-num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="stack__layer-name">{layer.name}</span>
                <span className="stack__layer-tag">{layer.tag}</span>
              </div>
            )}

            <p className="stack__layer-summary">{layer.body}</p>

            {hasDetail && (
              <div className="stack__layer-body" id={bodyId} hidden={!isOpen}>
                <div className="stack__layer-body-inner">
                  <p>{layer.detail}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
