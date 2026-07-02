import Link from 'next/link'
import ClientShowcase from '@/components/ClientShowcase'
import BlogSection from '@/components/BlogSection'
import RaycastVisual from '@/components/RaycastVisual'

const LOGOS = [
  { src: '/images/assets/brands/c1.png', alt: 'Client 1' },
  { src: '/images/assets/brands/c2.png', alt: 'Client 2' },
  { src: '/images/assets/brands/c3.png', alt: 'Client 3' },
  { src: '/images/assets/brands/c4.png', alt: 'Client 4' },
  { src: '/images/assets/brands/c5.png', alt: 'Client 5' },
  { src: '/images/assets/brands/c6.png', alt: 'Client 6' },
  { src: '/images/assets/brands/c7.png', alt: 'Client 7' },
  { src: '/images/assets/brands/Legallyne.png', alt: 'Legallyne' },
]

export const metadata = {
  title: 'Cosmonus — AI-Native Intelligence Infrastructure',
  description: 'Cosmonus builds the Intelligence Layer beneath modern operations — one platform that unifies data into a living knowledge graph and turns it into spatial, predictive, and agent intelligence, then into automated decisions.',
  keywords: ['intelligence infrastructure', 'intelligence layer', 'knowledge graph', 'spatial intelligence', 'predictive intelligence', 'agent intelligence', 'decision automation', 'AI-native platform'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cosmonus — AI-Native Intelligence Infrastructure',
    description: 'The Intelligence Layer beneath modern operations. Turn data into intelligence, and intelligence into decisions — on one unified platform.',
    url: 'https://cosmonus.com',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus — AI-Native Intelligence Infrastructure',
    description: 'Turn data into intelligence, and intelligence into decisions — on one unified platform.',
    images: ['/images/ICON.png'],
  },
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-inner hero-inner--solo">
            <div className="hero-eyebrow">
              AI Product &amp; Engineering
            </div>
            <h1 className="hero-title">AI that <span className="hero-title__accent">automates</span> work.</h1>
            <p className="hero-subtitle">
              Cosmonus is a product and engineering team that turns real workflows into AI that runs
              them — reliable enough to put in production, not just a pitch deck.
            </p>
            <div className="hero-actions">
              <Link href="/platform" className="btn-cosmonus btn-arrow">Explore the platform</Link>
              <Link href="/products/stayonmap" className="btn-ghost btn-arrow">See StayOnMap</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-header">
            <p className="trusted-label">Trusted by teams putting intelligence into production</p>
          </div>
        </div>
        <div className="trusted-marquee" aria-label="Client logos">
          <div className="trusted-marquee__track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="trusted-logo" aria-hidden={i >= LOGOS.length ? 'true' : undefined}>
                <img src={logo.src} alt={logo.alt} className="trusted-logo__img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <ClientShowcase />

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <h2 className="stats-title">The backbone of<br />intelligent operations</h2>
          <div className="stats-grid">
            <div className="stats-item">
              <span className="stats-value">5</span>
              <span className="stats-label">intelligence engines, one platform</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">&lt;100ms</span>
              <span className="stats-label">event to automated decision</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">99.9%</span>
              <span className="stats-label">production uptime</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">10M+</span>
              <span className="stats-label">events processed</span>
            </div>
          </div>
        </div>
        <RaycastVisual />
      </section>

      {/* Blog & Insights */}
      <BlogSection />
    </>
  )
}
