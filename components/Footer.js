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
            <div className="footer-brand__word">Cosmonus</div>
            <p className="footer-brand__tagline">
              We engineer intelligent software systems from first principles — software that reads context, reasons over information, and improves with use.
            </p>
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
