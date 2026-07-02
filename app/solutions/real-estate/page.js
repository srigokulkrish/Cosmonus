import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const CAPABILITIES = [
  { title: 'Live property intelligence', body: 'Every listing resolved to a live pin, with pricing and geo-context tracked as the market moves.' },
  { title: 'Trust & risk scoring', body: 'Suspect listings auto-suspended before a renter sees them — every listing and owner scored.' },
  { title: 'Location-aware discovery', body: 'Ranks properties by real proximity to work, school, and transit — not keyword search.' },
]

const STEPS = [
  { n: '01', title: 'Connect', body: 'Stream listings, geo boundaries, and market feeds in — no sources to replace.' },
  { n: '02', title: 'Resolve', body: 'Properties, owners, and areas become entities in the Ontology — one living model of the market.' },
  { n: '03', title: 'Reason', body: 'Engines compute pricing, trust, and proximity against real-time signals.' },
  { n: '04', title: 'Act', body: 'Automation surfaces the match, ranks the result, or flags the risk on cue.' },
]

const FAQ = [
  { q: 'Why is real estate a spatial intelligence problem?', a: 'Property decisions are about place, so Cosmonus resolves every listing to a live pin and reasons over location.' },
  { q: 'How does trust and risk scoring work?', a: 'Every listing and owner is scored against live signals, and agents auto-suspend high-risk listings before renters see them.' },
  { q: 'Is any of this proven in production?', a: 'Yes — StayOnMap runs on the platform today: map-first rentals with trust scoring and agent-driven fraud detection.' },
]

const RELATED = [
  { href: '/products/stayonmap', label: 'StayOnMap', desc: 'The map-first, broker-free rental platform built on Cosmonus — spatial intelligence in production.' },
  { href: '/solutions/logistics', label: 'Logistics & Fleet', desc: 'Live tracking, predictive ETAs, and exception agents on one Intelligence Layer.' },
  { href: '/platform', label: 'The Platform', desc: 'The Intelligence Layer every solution runs on — graph, engines, and automation.' },
]

export const metadata = {
  title: 'Spatial Intelligence for Real Estate | Cosmonus',
  description: 'Cosmonus turns location and listing data into decisions for real estate — live property intelligence, trust and risk scoring, and location-aware discovery on one Intelligence Layer, proven in production by StayOnMap.',
  keywords: ['real estate intelligence', 'spatial intelligence', 'property trust scoring', 'rental fraud detection', 'location-aware discovery', 'proptech platform'],
  alternates: { canonical: '/solutions/real-estate' },
  openGraph: {
    title: 'Spatial Intelligence for Real Estate | Cosmonus',
    description: 'Live property intelligence, trust and risk scoring, and location-aware discovery — real estate decisions on one Intelligence Layer, proven by StayOnMap.',
    url: 'https://cosmonus.com/solutions/real-estate',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spatial Intelligence for Real Estate',
    description: 'Live property intelligence, trust scoring, and location-aware discovery on one Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function RealEstatePage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Solutions · Real Estate</span>
              <h1 className="sol-hero__title">Spatial intelligence for property and real estate.</h1>
              <p className="lead sol-hero__lead">
                A listing goes live at midnight — photos that don&apos;t match the address, a price too good
                to be true. By morning it has a dozen enquiries. On StayOnMap, the platform had already
                scored the risk and pulled it, before the first tenant ever saw it.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Book a demo</Link>
                <Link href="/products/stayonmap" className="sol-hero__link">See StayOnMap →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 3.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.6 6.5 14.5 6.5 14.5s6.5-9.9 6.5-14.5c0-3.6-2.9-6.5-6.5-6.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="14" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4"/></svg>
                <span>Live property map</span>
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
              <h2 className="sol-overview__title">A listing tells you a price. It doesn&apos;t tell you whether to trust it — or where it really is.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Renters care about proximity, safety, and whether a listing is real — but the data lives fragmented across portals, broker inboxes, and dashboards that don&apos;t talk. Cosmonus unifies listings, geography, and market signals into one live model and turns them into the next decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">On the Intelligence Layer</span>
            <h2 className="sol-section__title">Spatial and predictive intelligence, applied to property.</h2>
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
            <h2 className="sol-section__title">From live listing to trusted decision.</h2>
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
