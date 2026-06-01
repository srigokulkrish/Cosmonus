'use client'

import { useState, useRef, useEffect } from 'react'

export default function CustomSelect({ id, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const onDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const onWheel = (e) => e.stopPropagation()
    panel.addEventListener('wheel', onWheel)
    return () => panel.removeEventListener('wheel', onWheel)
  }, [open])

  return (
    <div className={`c-select${open ? ' c-select--open' : ''}`} ref={containerRef}>
      <button
        type="button"
        id={id}
        className="c-select__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? 'c-select__value' : 'c-select__placeholder'}>
          {value || placeholder}
        </span>
        <svg className="c-select__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul ref={panelRef} className="c-select__panel" role="listbox" aria-label={placeholder}>
          {options.map((opt) => {
            const sel = opt === value
            return (
              <li
                key={opt}
                role="option"
                aria-selected={sel}
                className={`c-select__option${sel ? ' c-select__option--selected' : ''}`}
                onClick={() => {
                  onChange(opt)
                  setOpen(false)
                }}
              >
                <span>{opt}</span>
                {sel && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="var(--brand)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
