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
  title: 'Cosmonus — Design, Development & AI Agency',
  description: 'Cosmonus helps ambitious businesses ship products, automate operations, and grow revenue. Expert design, web development, and AI solutions that deliver real results — fast.',
  keywords: ['digital agency', 'web development agency', 'AI solutions', 'product development', 'design agency', 'automation', 'India'],
  openGraph: {
    title: 'Cosmonus — Design, Development & AI Agency',
    description: 'Ship products faster. Automate smarter. Grow with AI. Cosmonus is the digital studio built for ambitious businesses.',
    url: 'https://cosmonus.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus — Design, Development & AI Agency',
    description: 'Ship products faster. Automate smarter. Grow with AI.',
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
              <span className="hero-eyebrow__dot" aria-hidden="true" />
              Design · Development · AI
            </div>
            <h1 className="hero-title">Build smarter.<br />Grow faster. Lead with AI.</h1>
            <p className="hero-subtitle">
              Cosmonus helps ambitious businesses ship products, automate operations,
              and grow revenue — with the clarity and speed most agencies can&apos;t match.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-cosmonus btn-arrow">Start a project</Link>
              <Link href="/about" className="btn-ghost">About us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-header">
            <p className="trusted-label">Trusted by founders, startups, and enterprise teams</p>
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
          <h2 className="stats-title">The backbone of<br />digital growth</h2>
          <div className="stats-grid">
            <div className="stats-item">
              <span className="stats-value">50+</span>
              <span className="stats-label">projects delivered across industries</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">3x</span>
              <span className="stats-label">average revenue growth for our clients</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">99.9%</span>
              <span className="stats-label">uptime across all products we build</span>
            </div>
            <div className="stats-item">
              <span className="stats-value">10M+</span>
              <span className="stats-label">end users reached through our solutions</span>
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
