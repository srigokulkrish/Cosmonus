'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SOLUTIONS_MEGA, PRIMARY_NAV, COMPANY_MENU } from '../lib/nav'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('solutions')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    setActiveSection('solutions')
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.body.classList.add('cos-no-scroll')
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('cos-no-scroll')
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`cos-nav${scrolled ? ' cos-nav--scrolled' : ''}`}>
      <div className="container">
        <div className="cos-nav__inner">
          <Link href="/" className="cos-nav__brand" aria-label="Cosmonus home">
            <img src="/images/logo.png" alt="Cosmonus" />
          </Link>

          <nav className="cos-nav__links" aria-label="Primary">
            <div className="cos-dropdown cos-dropdown--mega">
              <button className="cos-nav__link" type="button">
                Solutions
              </button>
              <div className="cos-dropdown__menu cos-mega" role="menu">
                {SOLUTIONS_MEGA.map((col) => (
                  <div key={col.heading} className="cos-mega__col">
                    <span className="cos-mega__heading">{col.heading}</span>
                    {col.items.map((item) => (
                      <Link key={item.href} href={item.href} className="cos-dropdown__item">
                        <span>{item.label}</span>
                        <span className="cos-dropdown__item-desc">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {PRIMARY_NAV.slice(0, 1).map((l) => (
              <Link key={l.href} href={l.href} className="cos-nav__link">{l.label}</Link>
            ))}
            <div className="cos-dropdown">
              <button className="cos-nav__link" type="button">
                Company
              </button>
              <div className="cos-dropdown__menu" role="menu">
                {COMPANY_MENU.map((item) => (
                  <Link key={item.href} href={item.href} className="cos-dropdown__item">
                    <span>{item.label}</span>
                    <span className="cos-dropdown__item-desc">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
            {PRIMARY_NAV.slice(1).map((l) => (
              <Link key={l.href} href={l.href} className="cos-nav__link">{l.label}</Link>
            ))}
          </nav>

          <div className="cos-nav__cta">
            <ThemeToggle />
            <Link href="/contact" className="btn-cosmonus btn--sm btn-arrow">Contact us</Link>
            <button
              type="button"
              className="cos-nav__toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="cos-mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="cos-mobile-menu"
        className={`cos-mobile-menu${menuOpen ? ' cos-mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="cos-mobile-menu__head">
          <Link href="/" className="cos-nav__brand" onClick={close} aria-label="Cosmonus home">
            <img src="/images/logo.png" alt="Cosmonus" />
          </Link>
          <button
            type="button"
            className="cos-nav__toggle"
            aria-label="Close menu"
            onClick={close}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cos-mobile-menu__body">
          <div className={`cos-mobile-menu__group${activeSection === 'solutions' ? ' is-open' : ''}`}>
            <button
              type="button"
              className="cos-mobile-menu__group-summary"
              aria-expanded={activeSection === 'solutions'}
              aria-controls="cos-acc-solutions"
              onClick={() => setActiveSection('solutions')}
            >
              <span>Solutions</span>
              <span className="cos-mobile-menu__group-icon" aria-hidden="true" />
            </button>
            <div id="cos-acc-solutions" className="cos-mobile-menu__group-items" hidden={activeSection !== 'solutions'}>
              {SOLUTIONS_MEGA.flatMap((col) => col.items).map((item) => (
                <Link key={item.href} href={item.href} className="cos-mobile-menu__sublink" onClick={close}>
                  <span>{item.label}</span>
                  <small>{item.desc}</small>
                </Link>
              ))}
            </div>
          </div>

          {PRIMARY_NAV.slice(0, 1).map((l) => (
            <Link key={l.href} href={l.href} className="cos-mobile-menu__link" onClick={close}>
              {l.label}
            </Link>
          ))}

          <div className={`cos-mobile-menu__group${activeSection === 'company' ? ' is-open' : ''}`}>
            <button
              type="button"
              className="cos-mobile-menu__group-summary"
              aria-expanded={activeSection === 'company'}
              aria-controls="cos-acc-company"
              onClick={() => setActiveSection('company')}
            >
              <span>Company</span>
              <span className="cos-mobile-menu__group-icon" aria-hidden="true" />
            </button>
            <div id="cos-acc-company" className="cos-mobile-menu__group-items" hidden={activeSection !== 'company'}>
              {COMPANY_MENU.map((item) => (
                <Link key={item.href} href={item.href} className="cos-mobile-menu__sublink" onClick={close}>
                  <span>{item.label}</span>
                  <small>{item.desc}</small>
                </Link>
              ))}
            </div>
          </div>

          {PRIMARY_NAV.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="cos-mobile-menu__link" onClick={close}>
              {l.label}
            </Link>
          ))}

          <div className="cos-mobile-menu__cta">
            <Link href="/contact" className="btn-cosmonus btn-arrow" onClick={close}>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
