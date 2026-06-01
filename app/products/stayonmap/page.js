const FEATURES = [
  {
    title: 'Map-first homepage',
    desc: 'Full-screen Google Maps is the product — not an add-on. Property pins show live rent prices (e.g. ₹28K) and update as you pan and zoom. City pill navigation, area geocoding, and searched-place markers built in.',
  },
  {
    title: 'Broker-free listings',
    desc: 'Owners list directly. Tenants connect directly. No intermediary, no commission. Each owner can manage up to 3 active listings on the free tier, with rich details: BHK, furnishing, amenities, rules, and image galleries.',
  },
  {
    title: 'Appointment system',
    desc: 'Tenants request property visits with date and time. Owners accept, reject, or reschedule. Both parties have a unified dashboard showing all visit requests — as a tenant and as an owner.',
  },
  {
    title: 'Trust & risk scoring',
    desc: 'TrustScore built from 12 sub-scores (safety, cleanliness, neighbourhood and more). RiskScore computed from reports and fraud signals — auto-suspends a property when it crosses a HIGH risk threshold.',
  },
  {
    title: 'Real-time chat',
    desc: 'Socket.io room-based messaging between tenant and owner. Online status, typing indicators, and persistent history. Chat data is kept private — platform admins cannot read conversations.',
  },
  {
    title: 'Lease management',
    desc: 'Owners create a formal lease offer (rent, deposit, dates). Tenants sign or reject. Full lifecycle: OFFERED → ACTIVE → TERMINATED / EXPIRED. Digital paper trail for both parties.',
  },
  {
    title: 'Verification system',
    desc: 'Owners submit ownership documents through a guided multi-step wizard. Admin reviews and approves. Verified owners receive a VERIFIED_OWNER badge displayed on their listings.',
  },
  {
    title: 'AI fraud detection',
    desc: 'Powered by Claude Haiku — analyses listing content and user behaviour for fraud signals. Admins can trigger a manual AI scan from the platform dashboard. Currently available in opt-in mode.',
  },
]

const STACK = [
  { layer: 'Frontend', tech: 'React 18 + Vite + Tailwind CSS' },
  { layer: 'State', tech: 'Zustand + React Query' },
  { layer: 'Backend', tech: 'Node.js + Express + Prisma ORM' },
  { layer: 'Database', tech: 'PostgreSQL (Railway)' },
  { layer: 'Maps', tech: 'Google Maps JavaScript API' },
  { layer: 'Auth', tech: 'Supabase (users) + Custom JWT (admins)' },
  { layer: 'Real-time', tech: 'Socket.io — chat + notifications' },
  { layer: 'Email', tech: 'Resend' },
  { layer: 'Push', tech: 'Web Push API (VAPID)' },
  { layer: 'AI', tech: 'Anthropic Claude Haiku' },
]

const HOW_IT_WORKS = [
  {
    role: 'For tenants',
    steps: [
      'Open the map and browse property pins in your area',
      'Click a pin to see full listing details — photos, amenities, rules',
      'Request a visit appointment with your preferred date and time',
      'Chat directly with the owner to ask questions',
      'Sign a lease digitally when you find the right place',
    ],
  },
  {
    role: 'For owners',
    steps: [
      'Create a listing with photos, details, and house rules',
      'Submit ownership documents for verified owner status',
      'Receive visit requests and manage your appointment calendar',
      'Chat directly with interested tenants',
      'Create a lease offer and track it through to signing',
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
  title: 'StayOnMap — Broker-Free Rental Platform | Built by Cosmonus',
  description: 'StayOnMap is a map-first, broker-free rental discovery platform for India. Zero commission, direct owner contact, verified listings, real-time chat, and AI fraud detection.',
  keywords: ['StayOnMap', 'broker free rentals India', 'rental platform', 'find flat without broker', 'cosmonus product', 'real estate tech India'],
  openGraph: {
    title: 'StayOnMap — Find Your Place. No Broker.',
    description: 'A map-first rental platform for India. Direct owner contact, zero commission, AI-powered trust scoring.',
    url: 'https://cosmonus.com/products/stayonmap',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StayOnMap — No Broker. No Commission.',
    description: 'Find your next home directly from the owner. Zero broker fees.',
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
                Live product
              </div>
              <h1 className="som-hero__title">StayOnMap</h1>
              <p className="som-hero__tagline">Find your place. No broker.</p>
              <p className="lead som-hero__lead">
                A map-first, broker-free rental discovery platform built for India.
                The homepage is the map — property pins with live pricing, direct owner contact,
                and zero commission.
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
              <p>India's rental market runs on brokers. Want to see a flat? Broker. Want to talk to the owner? Broker. Want to sign a lease? Broker — and they'll charge you one to two months' rent for the privilege of making a phone call you could have made yourself.</p>
              <p>StayOnMap was built to remove that layer entirely. Owners list directly. Tenants browse, contact, and visit directly. The platform provides the trust mechanisms, verification, and tooling that made brokers feel necessary — without the fee.</p>
              <p>The map-first design is intentional. Rental searches are inherently spatial — you're not searching for "a 2BHK," you're searching for "a 2BHK near my office, my kid's school, and a metro station." A map homepage makes that natural, not a filter nightmare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App screenshot strip */}
      <section className="som-section som-section--dark">
        <div className="container">
          <div className="som-section__head som-section__head--light">
            <span className="eyebrow som-eyebrow--dim">Product screens</span>
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
            <h2 className="som-features-title">Eight systems. One cohesive product.</h2>
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
            <p className="som-hiw-intro">A single account can be both tenant and owner. Users start as tenants and unlock owner capabilities the moment they create their first listing.</p>
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
            <p className="som-stack-intro">Full-stack from frontend to database, with real-time communication, AI fraud detection, push notifications, and a completely separate admin system built on custom JWT auth.</p>
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
