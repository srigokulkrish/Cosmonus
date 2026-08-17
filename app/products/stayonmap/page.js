import StripedPlaceholder from '@/components/StripedPlaceholder'
import DiagramCanvas from '@/components/DiagramCanvas'

const STAYONMAP_URL = 'https://www.stayonmap.com/'

const STATS = [
  { value: '0', label: 'Broker fees — direct owner-to-tenant' },
  { value: '12', label: 'Trust sub-scores per listing' },
  { value: '6', label: 'Property types, apartment to commercial' },
  { value: 'Live', label: 'Chat and notifications' },
]

const FEATURES = [
  { title: 'Map-first homepage', body: 'Full-screen map is the product. Property pins show live rent prices and update as you pan and zoom, with city navigation and geocoding built in.' },
  { title: 'Broker-free listings', body: 'Owners list directly, tenants connect directly — no intermediary, no commission. Each listing carries BHK, furnishing, amenities, rules, and photos.' },
  { title: 'Appointment system', body: 'Tenants request visits by date and time; owners accept, reject, or reschedule from one shared dashboard.' },
  { title: 'Trust & risk scoring', body: 'Twelve live sub-scores compound into a trust score per listing. A separate risk score, built from reports and fraud signals, auto-suspends a listing once it crosses a high-risk threshold — no human queue.' },
  { title: 'Real-time chat', body: 'Tenant–owner messaging with online status, typing indicators, and persistent history. Conversations stay private — even admins can’t read them.' },
  { title: 'Agent-driven fraud detection', body: 'An agent reasons over listings and behavior patterns, flagging anomalies continuously or on demand, with every flag traceable to the signals behind it. Opt-in today.' },
]

const TENANT_STEPS = [
  'Browse property pins on the map in your area',
  'Open a pin for full details, then request a visit',
  'Chat with the owner and sign a lease digitally',
]

const OWNER_STEPS = [
  'Create a listing with photos, details, and house rules',
  'Manage visit requests and chat with interested tenants',
  'Send a lease offer and track it through to signing',
]

const STACK = [
  { layer: 'Frontend', tech: 'React 18 + Vite' },
  { layer: 'Backend', tech: 'Node.js + Express + Prisma ORM' },
  { layer: 'Database', tech: 'PostgreSQL (Railway)' },
  { layer: 'Maps', tech: 'Google Maps JavaScript API' },
  { layer: 'Real-time', tech: 'Socket.io — chat and notifications' },
  { layer: 'Reasoning', tech: 'Claude (Anthropic) — trust and fraud signals' },
]

export const metadata = {
  title: 'StayOnMap — The Trust Problem Brokers Used to Solve',
  description: 'StayOnMap is Cosmonus engineering in production: a broker-free rental marketplace with live trust scoring, autonomous fraud detection, and direct owner-to-tenant leases.',
  alternates: { canonical: '/products/stayonmap' },
}

export default function StayOnMapPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="feature">
            <div className="feature__content">
              <div className="eyebrow feature__eyebrow">Live · in production</div>
              <h1 className="display" style={{ fontSize: 'clamp(2rem, 4.4vw, 3.25rem)', marginBottom: '0.75rem' }}>StayOnMap</h1>
              <p className="body-lg feature__body">
                The trust problem brokers used to solve, engineered instead. India’s rental market
                runs on brokers and a month’s rent in commission, because neither side knows who to
                trust. StayOnMap replaces that judgment with an engineered one — live trust
                scoring, an agent watching for fraud, and a direct line between owner and tenant.
              </p>
              <div className="hero__actions">
                <a href={STAYONMAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  <span>Open StayOnMap</span>
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
                <a href="/contact" className="btn btn--ghost">Build something like this</a>
              </div>
            </div>
            <div className="feature__visual">
              <DiagramCanvas
                variant="map"
                ratio="4/3"
                label="Schematic city map with listing markers, one highlighted with a trust radius"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-row" data-reveal>
            {STATS.map((s) => (
              <div key={s.label} className="stats-item">
                <span className="stats-item__value mono">{s.value}</span>
                <span className="stats-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">01</span> The problem</div>
            <h2 className="section-title">Indian renters pay one to two months’ rent just to find a home.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-col problem-col--dim" data-reveal>
              <div className="problem-col__kicker eyebrow">What a broker does</div>
              <h3 className="problem-col__title">The job StayOnMap replaces</h3>
              <ul>
                <li>Shows you flats — for a fee, on top of the rent</li>
                <li>Vouches for the owner, on their word alone</li>
                <li>Handles the paperwork, slowly and manually</li>
                <li>Exists mainly to solve one problem: nobody knows who to trust</li>
              </ul>
            </div>
            <div className="problem-grid__rule" />
            <div className="problem-col" data-reveal>
              <div className="problem-col__kicker eyebrow">What StayOnMap does instead</div>
              <h3 className="problem-col__title">Trust, engineered</h3>
              <ul>
                <li>Scores every listing across twelve live signals</li>
                <li>Watches continuously for fraud patterns, not just at listing time</li>
                <li>Auto-suspends high-risk listings before a tenant ever visits</li>
                <li>Connects owner and tenant directly — no commission, no middle call</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">02</span> Product screens</div>
            <h2 className="section-title">Map. Listings. Chat. All in one.</h2>
          </div>
          <div className="proof-grid" data-reveal>
            {[
              { label: 'StayOnMap / Map Homepage', title: 'Map homepage', desc: 'Property pins with live rent prices across the city.' },
              { label: 'StayOnMap / Listing Detail', title: 'Listing detail', desc: 'BHK, furnishing, amenities, rules, and photos in one view.' },
              { label: 'StayOnMap / Chat', title: 'Tenant–owner chat', desc: 'Real-time messaging, private by default.' },
              { label: 'StayOnMap / Admin', title: 'Admin moderation', desc: 'Where flagged listings get a human look when needed.' },
            ].map((item) => (
              <div key={item.title} className="proof-item">
                <StripedPlaceholder label={item.label} className="proof-item__frame" />
                <p className="proof-item__caption"><strong>{item.title}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">03</span> What it does</div>
            <h2 className="section-title">Six systems. One engineered product.</h2>
          </div>
          <div className="principles" data-reveal>
            {FEATURES.map((f, i) => (
              <div key={f.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{f.title}</h3>
                <p className="principle__body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">04</span> How it works</div>
            <h2 className="section-title">Two user types. One account.</h2>
            <p className="body">Every account is both tenant and owner — owner tools appear the moment you post a first listing.</p>
          </div>
          <div className="hiw-grid" data-reveal>
            <div>
              <h3 className="hiw-col__role">For tenants</h3>
              {TENANT_STEPS.map((step, i) => (
                <div key={step} className="hiw-step">
                  <span className="hiw-step-n mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="hiw-step-body">{step}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="hiw-col__role">For owners</h3>
              {OWNER_STEPS.map((step, i) => (
                <div key={step} className="hiw-step">
                  <span className="hiw-step-n mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="hiw-step-body">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">05</span> Technology</div>
            <h2 className="section-title">Built for real-world scale.</h2>
          </div>
          <div className="stack-table" data-reveal>
            {STACK.map((s) => (
              <div key={s.layer} className="stack-row">
                <span className="stack-row__layer mono">{s.layer}</span>
                <span className="stack-row__tech">{s.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
