import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const CAPABILITIES = [
  { title: 'Demand forecasting', body: 'Plan against the demand ahead — historical sales scored against live signals.' },
  { title: 'Live recommendations & merchandising', body: 'Recommendations that adapt as intent shifts, not on a nightly batch.' },
  { title: 'Inventory risk', body: 'Stockout and overstock warnings with replenishment that fires before a shelf empties.' },
]

const STEPS = [
  { n: '01', title: 'Connect', body: 'Stream catalogue, orders, inventory, and behaviour in — no stack to replace.' },
  { n: '02', title: 'Resolve', body: 'Products, customers, and stores become entities in the Ontology — one living model of your operation.' },
  { n: '03', title: 'Reason', body: 'The engine computes demand, inventory risk, and affinity against real-time signals.' },
  { n: '04', title: 'Act', body: 'Automation recommends, replenishes, and alerts on cue.' },
]

const FAQ = [
  { q: 'Can it forecast demand from our own data?', a: 'Yes — the engine trains on your sales, catalogue, and behaviour, not a generic model.' },
  { q: 'Does it connect to our existing commerce and ERP stack?', a: 'Yes — Cosmonus sits on top of your commerce, ERP, inventory, and behaviour feeds.' },
  { q: 'Can it act on predictions in real time?', a: 'Yes — events match the graph in milliseconds, so recommendations and alerts fire as demand shifts.' },
]

const RELATED = [
  { href: '/solutions/enterprise', label: 'Enterprise Operations', desc: 'Every system in one model — trace an order, asset, or customer end to end.' },
  { href: '/solutions/logistics', label: 'Logistics & Fleet', desc: 'Live tracking, predictive ETAs, and exception agents on one Intelligence Layer.' },
  { href: '/platform', label: 'The Platform', desc: 'The Intelligence Layer every solution runs on — graph, engines, and automation.' },
]

export const metadata = {
  title: 'Predictive Intelligence for Retail | Cosmonus',
  description: 'Cosmonus turns catalogue, inventory, and customer-behaviour data into decisions for retail — demand forecasting, live recommendations, and inventory risk on one Intelligence Layer.',
  keywords: ['retail intelligence', 'demand forecasting', 'predictive retail', 'inventory optimization', 'merchandising', 'recommendation engine'],
  alternates: { canonical: '/solutions/retail' },
  openGraph: {
    title: 'Predictive Intelligence for Retail | Cosmonus',
    description: 'Demand forecasting, live recommendations, and inventory risk — retail decisions on one Intelligence Layer.',
    url: 'https://cosmonus.com/solutions/retail',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Predictive Intelligence for Retail',
    description: 'Demand forecasting, live recommendations, and inventory risk on one Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function RetailPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Solutions · Retail</span>
              <h1 className="sol-hero__title">Predictive intelligence for retail.</h1>
              <p className="lead sol-hero__lead">
                Your top SKU sells out by noon on Friday. The same item sits boxed in a back room three
                cities away, and you won&apos;t know until Monday&apos;s report. Cosmonus saw the demand building
                midweek — and had already moved the stock.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Book a demo</Link>
                <Link href="/platform" className="sol-hero__link">Explore the platform →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M2.5 8.5h23l-1.8 12.5a2 2 0 01-2 1.7H8.3a2 2 0 01-2-1.7L4.5 8.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M9.5 8.5V6.5a4.5 4.5 0 019 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                <span>Live demand model</span>
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
              <h2 className="sol-overview__title">You&apos;re sitting on the signal. You&apos;re just reacting to it too late.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Retailers hold enormous data — every sale, view, and unit of stock — yet decisions still lag it: stockouts surface after the shelf is empty and overstock ties up capital. Cosmonus unifies catalogue, inventory, and behaviour into one live model and turns raw data into the next action before demand moves.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">On the Intelligence Layer</span>
            <h2 className="sol-section__title">Predictive intelligence, applied to the shelf.</h2>
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
            <h2 className="sol-section__title">From raw data to automated decision.</h2>
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
            <h2 className="sol-section__title">What retail teams usually ask.</h2>
          </div>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
