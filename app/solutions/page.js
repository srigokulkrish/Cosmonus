import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const INDUSTRY_LINKS = [
  { href: '/solutions/logistics',   label: 'Logistics & Fleet', desc: 'Spatial intelligence for every vehicle, shipment, and asset in motion.' },
  { href: '/solutions/real-estate', label: 'Real Estate',       desc: 'Spatial intelligence for property — the domain StayOnMap runs in.' },
  { href: '/solutions/enterprise',  label: 'Enterprise Ops',    desc: 'Every system in one connected model, traced end to end.' },
  { href: '/solutions/retail',      label: 'Retail',            desc: 'Predictive intelligence from catalogue and behaviour to demand.' },
]

export const metadata = {
  title: 'Solutions — Turn Your Operation\'s Data Into Decisions | Cosmonus',
  description: 'The signal that could warn you is already in your systems — waiting to be seen in time. Cosmonus reads every source at once and turns it into a decision, across logistics, manufacturing, healthcare, energy, real estate, and more.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions — Turn Your Operation\'s Data Into Decisions | Cosmonus',
    description: 'Data everywhere, decisions nowhere. Cosmonus connects your people, assets, and systems into one picture you can act on.',
    url: 'https://cosmonus.com/solutions',
    images: ['/images/ICON.png'],
  },
  twitter: {
    title: 'Solutions — One Platform, Every Operation | Cosmonus',
    description: 'The signal was always in your data. Cosmonus surfaces it while it still matters.',
    images: ['/images/ICON.png'],
  },
}

function Dot() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

const INDUSTRIES = [
  'Government',
  'Transportation',
  'Manufacturing',
  'Healthcare',
  'Energy',
  'Logistics',
]

const DEPLOYMENTS = [
  {
    n: '01',
    t: 'Logistics',
    d: 'Spot a delay before it cascades, then watch fleets reroute and inventory rebalance on their own.',
    tag: 'Predict → reroute',
  },
  {
    n: '02',
    t: 'Manufacturing',
    d: 'Catch the anomaly across sensor clusters and pinpoint the failing component before the line goes down.',
    tag: 'Sensor anomaly detection',
  },
  {
    n: '03',
    t: 'Healthcare',
    d: 'Match capacity to demand in real time — facilities, staff, and mobile assets coordinated, not phoned.',
    tag: 'Coordinate facilities & assets',
  },
  {
    n: '04',
    t: 'Smart Cities',
    d: 'See mobility, utilities, and infrastructure resolve into one live view of how the city is running now.',
    tag: 'Mobility & infrastructure',
  },
]

const SIGNALS = [
  { s: 'err', t: 'Port congestion predicted — logistics', d: 'reroute · 3 alternatives ready' },
  { s: 'warn', t: 'Pump vibration rising — manufacturing', d: 'inspect · sensor cluster 4' },
  { s: 'warn', t: 'ICU capacity nearing limit — healthcare', d: 'redirect · 2 nearby facilities' },
  { s: 'ok', t: 'Traffic signals retimed — smart city', d: 'applied · 11% flow gain' },
]

export default function Solutions() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <div className="cx-eyebrow"><span className="cx-eyebrow__dot" aria-hidden="true" />Industries</div>
            <h1 className="cx-hero__title">One platform. <span className="cx-gradient-text">Every operation.</span></h1>
            <p className="cx-hero__sub">
              A shipment stalls, a sensor drifts, a ward fills past capacity — and the signal that
              could have warned you sits in a system no one was watching. Cosmonus reads every
              source at once and turns it into a decision while it still matters.
            </p>
            <div className="cx-hero__actions">
              <Link href="/platform" className="btn-cosmonus btn-arrow">Explore Platform</Link>
              <Link href="/contact" className="btn-ghost">Get Started</Link>
            </div>
            <div className="cx-strip">
              <div className="cx-strip__item"><span className="cx-strip__val">12+</span><span className="cx-strip__lbl">Industries</span></div>
              <div className="cx-strip__item"><span className="cx-strip__val">One</span><span className="cx-strip__lbl">Shared Platform</span></div>
              <div className="cx-strip__item"><span className="cx-strip__val">Real-time</span><span className="cx-strip__lbl">Cross-Industry Signals</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="cx-section">
        <div className="container">
          <div className="cx-section-head">
            <div className="cx-eyebrow"><span className="cx-eyebrow__dot" aria-hidden="true" />Where Cosmonus Runs</div>
            <h2 className="cx-heading">Built for operations of every kind.</h2>
            <p className="cx-lead cx-lead--wide">
              Your people, assets, and systems already generate the data. What&apos;s missing is one place that connects it into a picture you can act on — Cosmonus is that layer.
            </p>
          </div>
          <div className="cx-grid cx-grid--4">
            {INDUSTRIES.map((i) => (
              <div key={i} className="cx-industry"><Dot />{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW INTELLIGENCE IS DEPLOYED ── */}
      <section className="cx-section">
        <div className="container">
          <div className="cx-section-head">
            <div className="cx-eyebrow cx-eyebrow--cyan"><span className="cx-eyebrow__dot" aria-hidden="true" />How Intelligence Is Deployed</div>
            <h2 className="cx-heading">Same engines. Different outcomes.</h2>
            <p className="cx-lead cx-lead--wide">
              Change the operational question and the answer changes shape — the engines underneath never do. Here&apos;s what that looks like where you work.
            </p>
          </div>
          <div className="cx-grid cx-grid--2">
            {DEPLOYMENTS.map((d) => (
              <div key={d.t} className="cx-card cx-card--engine">
                <div className="cx-card__num">{d.n}</div>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>{d.t}</h3>
                <p className="cx-card__body">{d.d}</p>
                <span className="cx-card__tag">{d.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAME PLATFORM UNDERNEATH ── */}
      <section className="cx-section">
        <div className="container">
          <div className="cx-split">
            <div>
              <div className="cx-eyebrow"><span className="cx-eyebrow__dot" aria-hidden="true" />Same Platform Underneath</div>
              <h2 className="cx-heading">One layer, every industry.</h2>
              <p className="cx-lead cx-lead--wide">
                A port, a hospital, and a factory look nothing alike, but the problem is the same:
                entities, relationships, and events that must converge into a decision. Solve it
                once, and it&apos;s solved everywhere.
              </p>
              <ul className="cx-list" style={{ marginTop: '1.6rem' }}>
                <li>The Ontology — a living model of your operation — resolves entities across every source</li>
                <li>The same intelligence engines read spatial, enterprise, and predictive signals</li>
                <li>Agents reason and act on the Ontology regardless of the domain</li>
              </ul>
              <div className="cx-hero__actions" style={{ marginTop: '1.8rem' }}>
                <Link href="/platform" className="btn-cosmonus btn-arrow">See the Platform</Link>
              </div>
            </div>
            <div className="cx-split__media">
              <div className="cx-card">
                <div className="cx-card__num" style={{ marginBottom: '1rem' }}>CROSS-INDUSTRY SIGNALS</div>
                <div className="cx-grid" style={{ gap: '0.7rem' }}>
                  {SIGNALS.map((s) => (
                    <div key={s.t} className="cx-decision">
                      <span className={`cx-decision__dot cx-decision__dot--${s.s}`} aria-hidden="true" />
                      <div><strong>{s.t}</strong><span>{s.d}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices items={INDUSTRY_LINKS} />

      {/* ── CTA ── */}
      <section className="cx-section">
        <div className="container">
          <div className="cx-cta">
            <div className="cx-eyebrow cx-eyebrow--cyan" style={{ justifyContent: 'center' }}><span className="cx-eyebrow__dot" aria-hidden="true" />Get Started</div>
            <h2 className="cx-heading cx-heading--xl">Point it at your operation and watch the data answer back.</h2>
            <div className="cx-cta__actions">
              <Link href="/contact" className="btn-cosmonus btn-arrow">Get Started</Link>
              <Link href="/platform" className="btn-ghost">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
