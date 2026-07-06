'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PRIMARY_NAV } from '../lib/nav'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" aria-label="Cosmonus home">
          <img src="/images/logo-white.png" alt="Cosmonus" width="231" height="30" className="brand-logo brand-logo--white" />
          <img src="/images/logo-dark.png" alt="Cosmonus" width="231" height="30" className="brand-logo brand-logo--dark" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {PRIMARY_NAV.map((l) => (
            <Link key={l.href} href={l.href} className={`nav__link${isActive(l.href) ? ' is-active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__right">
          <ThemeToggle />
          <Link href="/contact" className="btn btn--primary btn--sm">Contact</Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div id="nav-mobile" className={`nav-mobile${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav-mobile__body">
          {PRIMARY_NAV.map((l) => (
            <Link key={l.href} href={l.href} className="nav-mobile__link" onClick={() => setMenuOpen(false)}>
              {l.label}
              <span className="mono" style={{ color: 'var(--fg-faint)', fontSize: '0.8rem' }}>→</span>
            </Link>
          ))}
          <Link href="/contact" className="nav-mobile__link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="nav-mobile__cta">
            <Link href="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
