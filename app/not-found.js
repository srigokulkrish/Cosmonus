import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
  description: 'That page doesn’t exist on cosmonus.com. Head back to the work, the approach, or start a conversation.',
  robots: { index: false, follow: true },
}

const ROUTES = [
  { href: '/work', label: 'Work', desc: 'StayOnMap and Traffic Intelligence, in detail' },
  { href: '/approach', label: 'Approach', desc: 'How we build, and why each stage exists' },
  { href: '/research', label: 'Research', desc: 'The questions we haven’t settled' },
  { href: '/contact', label: 'Contact', desc: 'Bring us a decision worth engineering' },
]

export default function NotFound() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow"><span className="eyebrow__num mono">404</span> Not found</div>
          <h1 className="page-hero__title">That page isn&rsquo;t here.</h1>
          <p className="body-lg page-hero__lede">
            The address doesn&rsquo;t match anything we publish. If you followed a link from
            somewhere on this site, we&rsquo;d like to know — it means something we wrote is wrong.
          </p>
        </div>

        <div className="cap-groups" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {ROUTES.map((r, i) => (
            <div key={r.href} className="cap-group">
              <span className="cap-group__n mono">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="cap-group__title">
                <Link href={r.href}>{r.label}</Link>
              </h2>
              <p className="cap-group__body">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="hero__actions" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <Link href="/" className="btn btn--primary">
            <span>Back to the homepage</span>
            <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
