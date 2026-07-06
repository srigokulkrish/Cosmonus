import Link from 'next/link'
import { FOOTER_COMPANY, FOOTER_PRODUCTS, FOOTER_LEGAL } from '../lib/nav'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>Have a decision worth engineering?</h2>
          <div className="footer-cta__actions">
            <Link href="/contact" className="btn btn--primary">
              <span>Start a conversation</span>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/technology" className="btn btn--ghost">How we build</Link>
          </div>
        </div>

        <div className="divider" />

        <div className="footer-grid">
          <div>
            <div className="footer-brand__word">
              <img src="/images/logo-white.png" alt="Cosmonus" width="231" height="30" className="brand-logo brand-logo--white" />
              <img src="/images/logo-dark.png" alt="Cosmonus" width="231" height="30" className="brand-logo brand-logo--dark" />
            </div>
            <p className="footer-brand__tagline">
              We engineer intelligent software systems from first principles — software that reads context, reasons over information, and improves with use.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/cosmonus"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social__link"
                aria-label="Cosmonus on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h6 className="footer-col-head">Product</h6>
            <ul className="footer-list">
              {FOOTER_PRODUCTS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="footer-col-head">Company</h6>
            <ul className="footer-list">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="footer-col-head">Legal &amp; Support</h6>
            <ul className="footer-list">
              {FOOTER_LEGAL.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="footer-bottom">
          <div className="mono">© {year} Cosmonus</div>
          <div className="footer-bottom__legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
