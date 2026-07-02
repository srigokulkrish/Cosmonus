import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const BUILT_PRODUCTS = [
  {
    name: 'StayOnMap',
    tagline: 'Real-time spatial intelligence.',
    desc: 'The first product on the Cosmonus Intelligence Layer — a map-first, broker-free rental platform for India, powered by the platform\'s spatial and predictive engines. The map is the product.',
    tags: ['Spatial Intelligence', 'Knowledge Graph', 'Predictive', 'Agents', 'Real-Time', 'Live'],
    href: '/products/stayonmap',
    live: 'https://stayonmap-frontend-production-23f8.up.railway.app/',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #24B47E 0%, #0A2540 60%, #1B3A5C 100%)',
  },
]

const INDUSTRIES = [
  { href: '/solutions/logistics',   label: 'Logistics & Fleet', desc: 'Spatial intelligence for every vehicle, shipment, and asset in motion.' },
  { href: '/solutions/real-estate', label: 'Real Estate',       desc: 'Spatial intelligence for property — the domain StayOnMap runs in.' },
  { href: '/solutions/enterprise',  label: 'Enterprise Ops',    desc: 'Every system in one connected model, traced end to end.' },
  { href: '/solutions/retail',      label: 'Retail',            desc: 'Predictive intelligence from catalogue and behaviour to demand.' },
]

export const metadata = {
  title: 'Products | Built on the Cosmonus Intelligence Layer',
  description: 'Every Cosmonus product runs on one shared Intelligence Layer. From StayOnMap — the first product live in production — to the applied capabilities you can build on the platform.',
  keywords: ['cosmonus products', 'intelligence layer', 'intelligence platform', 'spatial intelligence', 'decision automation', 'StayOnMap'],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products | Cosmonus',
    description: 'Products built on one shared Intelligence Layer — with StayOnMap live in production.',
    url: 'https://cosmonus.com/products',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Cosmonus',
    description: 'Products built on one shared Intelligence Layer.',
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
            <h1 className="products-hero__title">One platform.<br />Every product runs on it.</h1>
            <p className="products-hero__lead">
              Every Cosmonus product is built on the same Intelligence Layer — one knowledge graph,
              five engines, and decision automation underneath. StayOnMap is the first live in production.
            </p>
            <div className="products-hero__actions">
              <Link href="/platform" className="btn-cosmonus btn-arrow">Explore the platform</Link>
              <Link href="/contact" className="btn-ghost">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Built products */}
      <section className="products-built">
        <div className="container">
          <div className="products-built__head">
            <span className="eyebrow">Built on the platform</span>
            <h2 className="products-built__title">The first product on the Intelligence Layer.</h2>
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

      {/* Solutions by industry */}
      <RelatedServices items={INDUSTRIES} />
    </>
  )
}
