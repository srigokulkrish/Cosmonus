import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const CAPABILITIES = [
  { title: 'Live tracking & geofencing', body: 'Every vehicle and shipment resolved to a live position, with zones and routes tracked as they move.' },
  { title: 'Predictive ETAs & risk', body: 'Late loads surface hours early — live telemetry scored against historical patterns.' },
  { title: 'Exception agents', body: 'Agents catch off-route vehicles and misplaced assets and act — no one watching the dashboard.' },
]

const STEPS = [
  { n: '01', title: 'Connect', body: 'Stream GPS, telematics, and order systems in — no hardware to replace.' },
  { n: '02', title: 'Resolve', body: 'Vehicles, drivers, shipments, and depots become entities in the Ontology — one living model of your operation.' },
  { n: '03', title: 'Reason', body: 'Engines compute routes, ETAs, and risk against real-time signals.' },
  { n: '04', title: 'Act', body: 'Automation fires the alert, reroute, or dispatch on cue.' },
]

const FAQ = [
  { q: 'Do we have to replace our GPS or telematics hardware?', a: 'No — Cosmonus sits on top of the feeds you already run.' },
  { q: 'How fast does an exception surface?', a: 'Events match the graph in milliseconds, so an off-route vehicle is flagged as it happens.' },
  { q: 'Can it forecast delays before they occur?', a: 'Yes — live telemetry scored against historical patterns surfaces at-risk ETAs early.' },
]

const RELATED = [
  { href: '/solutions/real-estate', label: 'Real Estate', desc: 'Spatial intelligence for property, powering StayOnMap in production.' },
  { href: '/solutions/enterprise', label: 'Enterprise Operations', desc: 'Every system in one model — trace an order, asset, or customer end to end.' },
  { href: '/platform', label: 'The Platform', desc: 'The Intelligence Layer every solution runs on — graph, engines, and automation.' },
]

export const metadata = {
  title: 'Spatial Intelligence for Logistics & Fleet | Cosmonus',
  description: 'Cosmonus turns live location and telemetry into decisions for logistics and fleet operations — real-time tracking, predictive ETAs, and exception agents on one Intelligence Layer.',
  keywords: ['logistics intelligence', 'fleet tracking', 'spatial intelligence', 'predictive ETA', 'supply chain visibility', 'real-time telematics'],
  alternates: { canonical: '/solutions/logistics' },
  openGraph: {
    title: 'Spatial Intelligence for Logistics & Fleet | Cosmonus',
    description: 'Live tracking, predictive ETAs, and exception agents — logistics decisions on one Intelligence Layer.',
    url: 'https://cosmonus.com/solutions/logistics',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spatial Intelligence for Logistics & Fleet',
    description: 'Live tracking, predictive ETAs, and exception agents on one Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function LogisticsPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Solutions · Logistics &amp; Fleet</span>
              <h1 className="sol-hero__title">Spatial intelligence for logistics and fleet.</h1>
              <p className="lead sol-hero__lead">
                It&apos;s 3:40 and a refrigerated truck drifts off its route. Your dashboard won&apos;t flag it
                for another hour — long enough for the load to spoil. Cosmonus catches it the moment it
                happens and sends the reroute before anyone reaches for the phone.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Book a demo</Link>
                <Link href="/platform" className="sol-hero__link">Explore the platform →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Live fleet map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-overview">
            <div className="sol-overview__left">
              <span className="eyebrow">The problem</span>
              <h2 className="sol-overview__title">Tracking tells you where things are. It doesn&apos;t tell you what to do.</h2>
            </div>
            <div className="sol-overview__right">
              <p>The data exists, but it&apos;s scattered across dashboards, spreadsheets, and phone calls that don&apos;t talk — so exceptions get caught late and decisions wait on someone watching a screen. Cosmonus unifies those feeds into one live model and turns position and telemetry into the next action.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">On the Intelligence Layer</span>
            <h2 className="sol-section__title">Spatial and predictive intelligence, applied to the road.</h2>
          </div>
          <div className="sol-grid-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="sol-card">
                <h4 className="sol-card__title">{c.title}</h4>
                <p className="sol-card__body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">From live signal to dispatched decision.</h2>
          </div>
          <div className="sol-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="sol-step">
                <span className="sol-step__n mono">{s.n}</span>
                <h4 className="sol-step__title">{s.title}</h4>
                <p className="sol-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Common questions</span>
            <h2 className="sol-section__title">What operators usually ask.</h2>
          </div>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
