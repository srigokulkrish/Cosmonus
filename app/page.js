import ClientShowcase from '@/components/ClientShowcase'
import BlogSection from '@/components/BlogSection'
import RaycastVisual from '@/components/RaycastVisual'

const LOGOS = [
  'Acme Corp', 'TechFlow', 'NovaBuild', 'Vendora', 'CloudAxis', 'Orbitix', 'Stackly',
  'Datawise', 'Sparkline', 'Elementis', 'Apexion', 'ShipFast', 'Growthly', 'Quantix',
  'Buildwave', 'Luminos', 'Nextera', 'Fyndr',
]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <h1 className="hero-title">Build smarter. <br /> Grow faster. Lead with AI.</h1>
              <div className="hero-actions">
                <a href="/signup" className="btn-cosmonus">Book Consultation</a>
                <a href="/contact" className="btn-ghost">About Us</a>
              </div>
            </div>
            <div className="hero-right">
              <p className="hero-desc">
                Cosmonus helps ambitious businesses automate operations, launch products, and grow revenue with intelligent systems, powerful websites, and modern branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-header">
            <p className="trusted-label">Trusted by leading developers and enterprises</p>
          </div>
        </div>
        <div className="trusted-marquee" aria-label="Client logos">
          <div className="trusted-marquee__track">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="trusted-logo"
                aria-hidden={i >= LOGOS.length ? 'true' : undefined}
              >
                {name}
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