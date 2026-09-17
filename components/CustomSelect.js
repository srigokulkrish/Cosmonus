'use client'

import { useState, useRef, useEffect, useId } from 'react'

export default function CustomSelect({ id, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const containerRef = useRef(null)
  const panelRef = useRef(null)
  const uid = useId()

  const listId = `${uid}-listbox`
  const optionId = (i) => `${uid}-option-${i}`

  useEffect(() => {
    const onDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const onWheel = (e) => e.stopPropagation()
    panel.addEventListener('wheel', onWheel)
    return () => panel.removeEventListener('wheel', onWheel)
  }, [open])

  // Focus stays on the trigger and aria-activedescendant moves, so the active
  // option has to be scrolled into view by hand.
  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector(`#${CSS.escape(`${uid}-option-${active}`)}`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [open, active, uid])

  const openAt = (i) => {
    setActive(Math.min(Math.max(i, 0), options.length - 1))
    setOpen(true)
  }

  const select = (i) => {
    onChange(options[i])
    setOpen(false)
  }

  const onKeyDown = (e) => {
    const current = options.indexOf(value)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!open) openAt(current >= 0 ? current : 0)
        else setActive((i) => Math.min(i + 1, options.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        if (!open) openAt(current >= 0 ? current : options.length - 1)
        else setActive((i) => Math.max(i - 1, 0))
        break
      case 'Home':
        if (open) { e.preventDefault(); setActive(0) }
        break
      case 'End':
        if (open) { e.preventDefault(); setActive(options.length - 1) }
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (open) select(active)
        else openAt(current >= 0 ? current : 0)
        break
      case 'Escape':
        if (open) { e.preventDefault(); setOpen(false) }
        break
      case 'Tab':
        setOpen(false)
        break
      default:
        break
    }
  }

  return (
    <div className={`c-select${open ? ' c-select--open' : ''}`} ref={containerRef}>
      <button
        type="button"
        id={id}
        className="c-select__trigger"
        onClick={() => (open ? setOpen(false) : openAt(Math.max(options.indexOf(value), 0)))}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open ? optionId(active) : undefined}
      >
        <span className={value ? 'c-select__value' : 'c-select__placeholder'}>
          {value || placeholder}
        </span>
        <svg className="c-select__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul ref={panelRef} id={listId} className="c-select__panel" role="listbox" aria-label={placeholder}>
          {options.map((opt, i) => {
            const sel = opt === value
            return (
              <li
                key={opt}
                id={optionId(i)}
                role="option"
                aria-selected={sel}
                className={`c-select__option${sel ? ' c-select__option--selected' : ''}${i === active ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => select(i)}
              >
                <span>{opt}</span>
                {sel && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
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
