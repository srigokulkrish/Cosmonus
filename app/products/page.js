import Link from 'next/link'

const BUILT_PRODUCTS = [
  {
    name: 'StayOnMap',
    tagline: 'Intelligence applied to a broken market.',
    desc: 'India\'s rental market runs on brokers because nobody solved trust. StayOnMap replaces that intermediary with engineered intelligence — live trust scoring, autonomous fraud detection, and direct owner-to-tenant leases, running in production today.',
    tags: ['Trust Scoring', 'Fraud Detection', 'Autonomous Agents', 'Real-Time', 'In Production'],
    href: '/products/stayonmap',
    live: 'https://stayonmap-frontend-production-23f8.up.railway.app/',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #24B47E 0%, #0A2540 60%, #1B3A5C 100%)',
  },
]

export const metadata = {
  title: 'Products | Intelligence We Run in Production',
  description: 'We prove our engineering on our own products before we apply it to yours. StayOnMap — intelligence applied to India\'s rental market — is live in production today.',
  keywords: ['cosmonus products', 'intelligent systems', 'trust scoring', 'fraud detection', 'StayOnMap', 'AI in production'],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | Cosmonus',
    description: 'Intelligence we run in production — starting with StayOnMap.',
    url: 'https://cosmonus.com/products',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Cosmonus',
    description: 'Intelligence we run in production — starting with StayOnMap.',
    images: ['/images/ICON.png'],
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero__inner products-hero__inner--solo">
            <span className="eyebrow">Products</span>
            <h1 className="products-hero__title">We prove it on our own products first.</h1>
            <p className="products-hero__lead">
              Anyone can claim their AI works. We put ours in production under our own name, in a market
              that punishes bad decisions — and let you inspect the result before you trust us with yours.
            </p>
            <div className="products-hero__actions">
              <Link href="/platform" className="btn-cosmonus btn-arrow">How we build intelligence</Link>
              <Link href="/contact" className="btn-ghost">Discuss your system</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Built products */}
      <section className="products-built">
        <div className="container">
          <div className="products-built__head">
            <span className="eyebrow">In production</span>
            <h2 className="products-built__title">StayOnMap — our engineering, on the record.</h2>
          </div>

          {BUILT_PRODUCTS.map((p) => (
            <div key={p.name} className="products-built__split">
              {/* Left — image / visual area */}
              <div className="products-built__visuals">
                <div className="products-built__img-main products-built__img-main--full" style={{ background: p.gradient }}>
                  <div className="products-built__img-main-inner">
                    <span className="products-built__img-label">{p.name}</span>
                    <span className="products-built__img-sublabel">{p.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Right — description */}
              <div className="products-built__desc">
                <div className="products-featured-card__meta">
                  <span className="products-featured-card__status">
                    <span className="som-badge-dot" aria-hidden="true" />
                    {p.status}
                  </span>
                  <div className="products-featured-card__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="products-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="products-featured-card__name">{p.name}</h3>
                <p className="products-featured-card__tagline">{p.tagline}</p>
                <p className="products-featured-card__desc">{p.desc}</p>
                <div className="products-featured-card__actions">
                  <Link href={p.href} className="btn-cosmonus btn-arrow">Explore StayOnMap</Link>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="products-featured-card__live-link">
                    Visit live product →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
