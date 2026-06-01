import Link from 'next/link'
import ServiceCarousel from '@/components/ServiceCarousel'

const BUILT_PRODUCTS = [
  {
    name: 'StayOnMap',
    tagline: 'Find your place. No broker.',
    desc: 'A map-first, broker-free rental discovery platform built for India. The homepage is the map — property pins with live rent prices, direct owner contact, verified listings, real-time chat, and zero commission.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Google Maps', 'Socket.io', 'AI'],
    href: '/products/stayonmap',
    live: 'https://stayonmap-frontend-production-23f8.up.railway.app/',
    status: 'Live',
    gradient: 'linear-gradient(135deg, #24B47E 0%, #0A2540 60%, #1B3A5C 100%)',
  },
]

const SERVICES = [
  {
    category: 'Build',
    items: [
      {
        href: '/products/websites',
        label: 'Websites',
        desc: 'High-performance marketing sites that convert visitors into leads.',
        gradient: 'linear-gradient(135deg, #635BFF 0%, #00D4FF 100%)',
      },
      {
        href: '/products/apps',
        label: 'Applications',
        desc: 'Web and mobile apps scoped tightly and built to ship.',
        gradient: 'linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #425466 100%)',
      },
      {
        href: '/products/automation',
        label: 'Automation',
        desc: 'AI-powered workflows that eliminate repetitive manual work.',
        gradient: 'linear-gradient(135deg, #635BFF 0%, #7C3AED 100%)',
      },
      {
        href: '/products/ecommerce',
        label: 'E-Commerce',
        desc: 'Online stores optimised from storefront to checkout.',
        gradient: 'linear-gradient(135deg, #24B47E 0%, #0A2540 100%)',
      },
    ],
  },
  {
    category: 'Grow',
    items: [
      {
        href: '/products/seo',
        label: 'SEO',
        desc: 'Search optimisation that drives qualified traffic, not vanity metrics.',
        gradient: 'linear-gradient(135deg, #00D4FF 0%, #0A2540 100%)',
      },
      {
        href: '/products/analytics',
        label: 'Analytics',
        desc: 'Data setup and dashboards that tell you what to act on.',
        gradient: 'linear-gradient(135deg, #0A2540 0%, #635BFF 100%)',
      },
      {
        href: '/products/content',
        label: 'Content',
        desc: 'Strategy and production — from brand voice to campaign copy.',
        gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
    ],
  },
]

const STATS = [
  { value: '50+', label: 'Products shipped' },
  { value: '2–4 wks', label: 'Avg. time to live' },
  { value: '7', label: 'Service categories' },
  { value: '96%', label: 'Client satisfaction' },
]

export const metadata = {
  title: 'Products & Services | What Cosmonus Builds',
  description: 'From StayOnMap — our own live platform — to the full range of design, development, and AI services we deliver for clients. Everything Cosmonus builds.',
  keywords: ['cosmonus products', 'digital services', 'web development services', 'AI products', 'design services', 'StayOnMap'],
  openGraph: {
    title: 'Products & Services | Cosmonus',
    description: 'Our own live products and the full range of services we deliver for clients.',
    url: 'https://cosmonus.com/products',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Services | Cosmonus',
    description: 'Our own products and services for clients.',
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
            <h1 className="products-hero__title">Things we&apos;ve built.<br />Things we can build for you.</h1>
            <p className="products-hero__lead">
              From our own products shipped to market, to the full range of services we deliver for clients —
              here&apos;s what Cosmonus builds.
            </p>
            <div className="products-hero__actions">
              <Link href="/contact" className="btn-cosmonus btn-arrow">Start a project</Link>
              <Link href="/about" className="btn-ghost">About us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Built products */}
      <section className="products-built">
        <div className="container">
          <div className="products-built__head">
            <span className="eyebrow">Built by Cosmonus</span>
            <h2 className="products-built__title">Products we&apos;ve taken from zero to live.</h2>
          </div>

          {BUILT_PRODUCTS.map((p) => (
            <div key={p.name} className="products-built__split">
              {/* Left — image / visual area */}
              <div className="products-built__visuals">
                <div className="products-built__img-main" style={{ background: p.gradient }}>
                  <div className="products-built__img-main-inner">
                    <span className="products-built__img-label">{p.name}</span>
                    <span className="products-built__img-sublabel">{p.tagline}</span>
                  </div>
                </div>
                <div className="products-built__img-row">
                  <div className="products-built__img-sm products-built__img-sm--1" style={{ background: p.gradient }} />
                  <div className="products-built__img-sm products-built__img-sm--2" style={{ background: p.gradient, opacity: 0.6 }} />
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
                  <Link href={p.href} className="btn-cosmonus btn-arrow">View case study</Link>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="products-featured-card__live-link">
                    Visit live product →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="products-services">
        <div className="container">
          <div className="products-services__head">
            <span className="eyebrow">Built for you</span>
            <h2 className="products-services__title">Services we deliver for clients.</h2>
            <p className="products-services__lead">
              Every product below is a service we&apos;ve scoped, designed, and shipped for businesses.
              Click through to see what&apos;s included, how it works, and what you&apos;ll get.
            </p>
          </div>

          <ServiceCarousel services={SERVICES} />
        </div>
      </section>
    </>
  )
}
