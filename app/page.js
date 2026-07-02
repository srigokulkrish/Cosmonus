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
  title: 'Cosmonus — We Engineer Intelligence',
  description: 'Cosmonus is an intelligence company. We design and build systems that understand a business, reason over its data, and make decisions that hold up in production — engineered from first principles.',
  keywords: ['intelligence company', 'AI engineering', 'reasoning systems', 'decision systems', 'agent orchestration', 'intelligent software', 'custom AI systems'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Cosmonus — We Engineer Intelligence',
    description: 'Systems that understand, reason, and decide. Designed from first principles, run in production.',
    url: 'https://cosmonus.com',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus — We Engineer Intelligence',
    description: 'Systems that understand, reason, and decide. Designed from first principles, run in production.',
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
              An Intelligence Company
            </div>
            <h1 className="hero-title">We engineer <span className="hero-title__accent">intelligence</span>.</h1>
            <p className="hero-subtitle">
              Software has always followed instructions. We build systems that understand your
              operation, reason over your data, and make decisions — designed from first principles
              and accountable for every action they take.
            </p>
            <div className="hero-actions">
              <Link href="/platform" className="btn-cosmonus btn-arrow">How we build intelligence</Link>
              <Link href="/products/stayonmap" className="btn-ghost btn-arrow">See it in production</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-header">
            <p className="trusted-label">Trusted by teams who run our systems in production</p>
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
          <h2 className="stats-title">Intelligence is measured<br />in production, not demos</h2>
          <div className="stats-grid">
            <div className="stats-item">
              <span className="stats-value">100%</span>
              <span className="stats-label">of decisions traceable to their evidence</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">&lt;100ms</span>
              <span className="stats-label">from event to reasoned decision</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">99.9%</span>
              <span className="stats-label">production uptime</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">10M+</span>
              <span className="stats-label">events reasoned over in production</span>
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
