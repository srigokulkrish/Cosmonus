import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const CAPABILITIES = [
  { title: 'One connected model', body: 'ERP, CRM, HR, and finance become the Ontology — a living model that spans every department.' },
  { title: 'End-to-end traceability', body: 'Follow a customer, order, or asset through every system at once — no manual stitching.' },
  { title: 'Decision automation', body: 'Encode policy once; the platform approves, routes, or flags across systems on its own.' },
]

const STEPS = [
  { n: '01', title: 'Connect', body: 'Stream ERP, CRM, HR, and finance in — no systems to replace.' },
  { n: '02', title: 'Resolve', body: 'Scattered records collapse into one canonical node, not five conflicting rows.' },
  { n: '03', title: 'Reason', body: 'Query operational and financial state together, across the whole business.' },
  { n: '04', title: 'Act', body: 'Automation fires the approval, routes the exception, or triggers the workflow on cue.' },
]

const FAQ = [
  { q: 'Do we have to replace our existing ERP, CRM, or finance systems?', a: 'No — Cosmonus sits on top of your stack as one connected model.' },
  { q: 'How do you reconcile the same customer or asset across different systems?', a: 'Identity resolution collapses records from every source into one canonical node.' },
  { q: 'Can we govern and audit what the platform automates?', a: 'Yes — every entity and decision is traceable end to end, with policy, permissions, and a full audit trail.' },
]

const RELATED = [
  { href: '/solutions/logistics', label: 'Logistics & Fleet', desc: 'Live tracking, predictive ETAs, and exception agents on one Intelligence Layer.' },
  { href: '/solutions/retail', label: 'Retail', desc: 'Unify inventory, demand, and customer signals into one connected model.' },
  { href: '/platform', label: 'The Platform', desc: 'The Intelligence Layer every solution runs on — graph, engines, and automation.' },
]

export const metadata = {
  title: 'Enterprise Intelligence | Cosmonus',
  description: 'Cosmonus unifies ERP, CRM, HR, finance, and operations into one connected model — trace any customer, order, asset, or employee across every system and automate decisions on one Intelligence Layer.',
  keywords: ['enterprise intelligence', 'knowledge graph', 'ERP integration', 'CRM integration', 'single source of truth', 'decision automation', 'entity resolution'],
  alternates: { canonical: '/solutions/enterprise' },
  openGraph: {
    title: 'Enterprise Intelligence | Cosmonus',
    description: 'ERP, CRM, HR, and finance in one connected model — end-to-end traceability and decision automation on one Intelligence Layer.',
    url: 'https://cosmonus.com/solutions/enterprise',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Intelligence',
    description: 'Every system in one connected model — traceability and decision automation on one Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function EnterprisePage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Solutions · Enterprise Operations</span>
              <h1 className="sol-hero__title">The whole business in one connected model.</h1>
              <p className="lead sol-hero__lead">
                A customer churns, and finding out why takes three teams and four exports — the contract
                in one system, the tickets in another, usage and invoices in two more. Cosmonus holds them
                as one connected record, so the answer is a single query, not a week of reconciling.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Book a demo</Link>
                <Link href="/platform" className="sol-hero__link">Explore the platform →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="6" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="22" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M14 8.5v5m0 0l-6 5m6-5l6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Connected entity graph</span>
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
              <h2 className="sol-overview__title">Your systems hold the answer. None of them can see the whole picture.</h2>
            </div>
            <div className="sol-overview__right">
              <p>Data is siloed across ERP, CRM, HR, and finance — systems never designed to talk — so teams reconcile exports by hand and the reports everyone trusts already lag reality. Cosmonus resolves those systems into one connected model and turns fragmented state into a traceable decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">On the Intelligence Layer</span>
            <h2 className="sol-section__title">One model across every system, reasoned on continuously.</h2>
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
            <h2 className="sol-section__title">From siloed systems to an automated decision.</h2>
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
