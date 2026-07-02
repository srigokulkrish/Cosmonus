const FEATURES = [
  {
    title: 'Map-first homepage',
    desc: 'Full-screen Google Maps is the product. Property pins show live rent prices and update as you pan and zoom — with city navigation, geocoding, and searched-place markers built in.',
  },
  {
    title: 'Broker-free listings',
    desc: 'Owners list directly, tenants connect directly — no intermediary, no commission. Rich detail per listing: BHK, furnishing, amenities, rules, and image galleries.',
  },
  {
    title: 'Appointment system',
    desc: 'Tenants request visits by date and time; owners accept, reject, or reschedule. Both sides share one dashboard of all visit requests.',
  },
  {
    title: 'Trust & risk scoring',
    desc: 'Predictive intelligence turns 12 sub-scores into a live TrustScore. A RiskScore from reports and fraud signals auto-suspends a property the moment it crosses a HIGH threshold.',
  },
  {
    title: 'Real-time chat',
    desc: 'Socket.io messaging between tenant and owner — online status, typing indicators, persistent history. Conversations stay private; admins can\'t read them.',
  },
  {
    title: 'Agent-driven fraud detection',
    desc: 'An intelligence agent scores listings and behaviour against the knowledge graph, flagging anomalies continuously or on demand. Currently opt-in.',
  },
]

const STACK = [
  { layer: 'Frontend', tech: 'React 18 + Vite + Tailwind CSS' },
  { layer: 'Backend', tech: 'Node.js + Express + Prisma ORM' },
  { layer: 'Database', tech: 'PostgreSQL (Railway)' },
  { layer: 'Maps', tech: 'Google Maps JavaScript API' },
  { layer: 'Real-time', tech: 'Socket.io — chat + notifications' },
  { layer: 'AI', tech: 'Anthropic Claude' },
]

const HOW_IT_WORKS = [
  {
    role: 'For tenants',
    steps: [
      'Browse property pins on the map in your area',
      'Open a pin for full details, then request a visit',
      'Chat with the owner and sign a lease digitally',
    ],
  },
  {
    role: 'For owners',
    steps: [
      'Create a listing with photos, details, and house rules',
      'Manage visit requests and chat with interested tenants',
      'Send a lease offer and track it through to signing',
    ],
  },
]

const STATS = [
  { value: '0', label: 'Broker fees', note: 'Direct owner-to-tenant' },
  { value: '12', label: 'Trust sub-scores', note: 'Per property' },
  { value: '6', label: 'Property types', note: 'Apartment to Commercial' },
  { value: 'Real-time', label: 'Chat & notifications', note: 'Socket.io + Web Push' },
]

export const metadata = {
  title: 'StayOnMap — Real-Time Spatial Intelligence Platform | Cosmonus',
  description: 'StayOnMap is a real-time spatial intelligence platform built on the Cosmonus Intelligence Layer — the first product on the platform. A map-first, broker-free rental market powered by live spatial and predictive intelligence.',
  keywords: ['StayOnMap', 'spatial intelligence', 'real-time location intelligence', 'cosmonus intelligence layer', 'broker free rentals India', 'rental platform', 'geospatial platform'],
  alternates: { canonical: '/products/stayonmap' },
  openGraph: {
    title: 'StayOnMap — Real-Time Spatial Intelligence, in Production',
    description: 'The first product built on the Cosmonus Intelligence Layer. Live spatial intelligence applied to India’s rental market — map-first, broker-free, trust-scored.',
    url: 'https://cosmonus.com/products/stayonmap',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StayOnMap — Spatial Intelligence in Production',
    description: 'The first product on the Cosmonus Intelligence Layer. Real-time spatial intelligence applied to the rental market.',
    images: ['/images/ICON.png'],
  },
}

export default function StayOnMapPage() {
  return (
    <>
      {/* Hero */}
      <section className="som-hero">
        <div className="container">
          <div className="som-hero__inner">
            <div className="som-hero__text">
              <div className="som-hero__badge">
                <span className="som-badge-dot" aria-hidden="true" />
                Live · built on the Intelligence Layer
              </div>
              <h1 className="som-hero__title">StayOnMap</h1>
              <p className="som-hero__tagline">A real-time spatial intelligence platform.</p>
              <p className="lead som-hero__lead">
                You&apos;re hunting for a flat near the office. Instead of a broker and a month&apos;s rent in
                commission, you open a map: live pins, real prices, the owner&apos;s number. That&apos;s StayOnMap —
                the first product built on the Cosmonus Intelligence Layer, applying real-time spatial
                intelligence to India&apos;s rental market.
              </p>
              <div className="som-hero__actions">
                <a
                  href="https://stayonmap-frontend-production-23f8.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cosmonus btn-arrow"
                >
                  Open StayOnMap
                </a>
                <a href="/contact" className="sol-hero__link">Build something like this →</a>
              </div>
            </div>
            <div className="som-hero__visual">
              <div className="sol-placeholder som-hero__map-placeholder">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>StayOnMap — full-screen map interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="som-stats">
        <div className="container">
          <div className="som-stats__grid">
            {STATS.map((s) => (
              <div key={s.label} className="som-stat">
                <span className="som-stat__value">{s.value}</span>
                <div>
                  <p className="som-stat__label">{s.label}</p>
                  <p className="som-stat__note">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem */}
      <section className="som-section">
        <div className="container">
          <div className="som-problem">
            <div className="som-problem__left">
              <span className="eyebrow">The problem</span>
              <h2 className="som-problem__title">Indian renters pay 1–2 months' commission just to find a home.</h2>
            </div>
            <div className="som-problem__right">
              <p>India's rental market runs on brokers. See a flat? Broker. Talk to the owner? Broker. Sign a lease? Broker — one to two months' rent for a phone call you could have made yourself.</p>
              <p>StayOnMap removes that layer. Owners and tenants connect directly; trust and risk scoring run on the platform's graph and predictive engines. Rental decisions are spatial, so the map is the product — the first built on the Intelligence Layer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App screenshot strip */}
      <section className="som-section som-section--dark">
        <div className="container">
          <div className="som-section__head">
            <span className="eyebrow">Product screens</span>
            <h2 className="som-screen-title">Map. Listings. Chat. All in one.</h2>
          </div>
          <div className="som-screens-grid">
            {[
              { label: 'Map homepage with property pins' },
              { label: 'Property listing detail view' },
              { label: 'Tenant–owner chat interface' },
              { label: 'Admin moderation dashboard' },
            ].map((s) => (
              <div key={s.label} className="som-screen">
                <div className="sol-placeholder som-screen__placeholder">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="som-section">
        <div className="container">
          <div className="som-section__head">
            <span className="eyebrow">What it does</span>
            <h2 className="som-features-title">Six systems. One intelligence platform.</h2>
          </div>
          <div className="som-features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="som-feature">
                <h4 className="som-feature__title">{f.title}</h4>
                <p className="som-feature__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="som-section som-section--tinted">
        <div className="container">
          <div className="som-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="som-hiw-title">Two user types. One unified platform.</h2>
            <p className="som-hiw-intro">One account is both tenant and owner — you gain owner tools the moment you post your first listing.</p>
          </div>
          <div className="som-hiw-grid">
            {HOW_IT_WORKS.map((h) => (
              <div key={h.role} className="som-hiw-col">
                <h4 className="som-hiw-col__role">{h.role}</h4>
                <ol className="som-hiw-col__steps">
                  {h.steps.map((step, i) => (
                    <li key={i}>
                      <span className="som-hiw-col__n mono">{String(i + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="som-section">
        <div className="container">
          <div className="som-section__head">
            <span className="eyebrow">Technology</span>
            <h2 className="som-stack-title">Built for real-world scale.</h2>
            <p className="som-stack-intro">Full-stack from frontend to database — real-time messaging, fraud detection, push, and a separate JWT-secured admin system.</p>
          </div>
          <div className="som-stack-table">
            {STACK.map((s) => (
              <div key={s.layer} className="som-stack-row">
                <span className="som-stack-row__layer mono">{s.layer}</span>
                <span className="som-stack-row__tech">{s.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
