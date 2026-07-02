import Link from 'next/link';

export const metadata = {
  title: 'The Platform — Intelligence Infrastructure | Cosmonus',
  description:
    'One platform that turns disconnected data into decisions: your data unifies into a living Ontology, feeds five intelligence engines, drives AI agents, and closes the loop with decision automation.',
  keywords: [
    'intelligence infrastructure',
    'knowledge graph platform',
    'AI agents',
    'decision automation',
    'spatial intelligence',
    'cosmonus platform',
  ],
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'The Cosmonus Platform — The Intelligence Layer, End to End',
    description:
      'Data sources → knowledge graph → intelligence engines → AI agents → decision automation. One continuous platform, not a stack of tools.',
    url: 'https://cosmonus.com/platform',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Cosmonus Platform',
    description:
      'The intelligence layer, end to end — knowledge graph, engines, agents, and automation on one platform.',
    images: ['/images/ICON.png'],
  },
};

const FLOW = [
  { title: 'Data Sources', sub: 'ingest · stream · connect' },
  { title: 'The Ontology', sub: 'entities · relations · context', accent: true },
  { title: 'Intelligence Engines', sub: 'reason · model · predict' },
  { title: 'AI Agents', sub: 'plan · act · verify', accent: true },
  { title: 'Decision Automation', sub: 'trigger · route · resolve' },
  { title: 'Products', sub: 'ship · operate · scale' },
];

const SERVICES = [
  {
    title: 'The Ontology',
    body: 'A living model of your operation — every entity, relation, and event — that every engine and agent reasons over.',
  },
  {
    title: 'Decision Automation',
    body: 'Encode rules once; the platform evaluates and acts continuously, no human in the loop.',
  },
  {
    title: 'AI Agents',
    body: 'Long-running workers that plan tasks, call tools, and check their work against ground truth.',
  },
  {
    title: 'Real-Time Event Processing',
    body: 'Match events against the graph as they land, then fire downstream actions in milliseconds.',
  },
  {
    title: 'Streaming Data',
    body: 'Durable ingestion for high-volume feeds — with replay and backfill built in.',
  },
  {
    title: 'Analytics',
    body: 'Query historical and live state together — every metric traces to the entities behind it.',
  },
  {
    title: 'APIs',
    body: 'One consistent REST and streaming surface over the graph, engines, and agents.',
  },
  {
    title: 'Developer SDK',
    body: 'Typed clients to query the graph, define agents, and wire automation into your code.',
  },
  {
    title: 'Integrations',
    body: 'Pre-built connectors for the systems you already run — ERP, CRM, and warehouses.',
  },
];

const TRUST = [
  { title: 'Identity Management', body: 'Central directory and single sign-on across every platform surface.' },
  { title: 'Role-Based Access', body: 'Scoped permissions down to the entity and field level.' },
  { title: 'Encryption', body: 'Data encrypted in transit and at rest, with managed key rotation.' },
  { title: 'Zero Trust', body: 'Every request authenticated and authorized — no implicit network trust.' },
  { title: 'Audit Logs', body: 'Immutable record of every read, write, and automated action.' },
  { title: 'Compliance', body: 'Controls mapped to the frameworks your industry requires.' },
];

const ENGINES = [
  {
    id: 'spatial',
    eyebrow: 'Spatial Intelligence',
    title: 'Understand movement in the real world.',
    lead: 'Track how people, assets, and fleets move across geography — and reason about where they are, where they are heading, and what it means.',
    points: [
      { t: 'Positions to routes', d: 'Resolve live positions and history into routes, dwell time, and coverage.' },
      { t: 'Anomaly detection', d: 'Catch a fleet off-route or an asset in the wrong zone the moment it happens.' },
      { t: 'Geospatial queries', d: 'Answer where-questions directly against your live operational Ontology.' },
    ],
    cta: { href: '/products/stayonmap', label: 'See StayOnMap' },
  },
  {
    id: 'enterprise',
    eyebrow: 'Enterprise Intelligence',
    title: 'Your whole business, in one model.',
    lead: 'Unify ERP, CRM, HR, finance, and operations into one connected view — no more reconciling exports between systems that never talked.',
    points: [
      { t: 'One entity model', d: 'Join records across departments into a single resolved model of every entity.' },
      { t: 'End-to-end traces', d: 'Follow a customer, order, or employee through every system at once.' },
      { t: 'Live state, no reports', d: 'Query operational and financial state without waiting on a nightly report.' },
    ],
  },
  {
    id: 'knowledge',
    eyebrow: 'Knowledge Intelligence',
    cyan: true,
    title: 'The Ontology — a living map of everything you know.',
    lead: 'Every source becomes entities and relationships in one Ontology that updates as reality changes — the shared model every engine and agent reasons over.',
    points: [
      { t: 'Entity resolution', d: 'Merge duplicate records from every source into one canonical entity.' },
      { t: 'Multi-hop answers', d: 'Follow relationships across sources to answer questions no single system can.' },
      { t: 'Always current', d: 'The Ontology updates as new events and records arrive — never stale.' },
    ],
  },
  {
    id: 'predictive',
    eyebrow: 'Predictive Intelligence',
    title: 'See events before they happen.',
    lead: 'Forecast outcomes from historical patterns scored against real-time signals — act on what is about to happen, not just what already did.',
    points: [
      { t: 'Models from your data', d: 'Model demand, risk, and failure from your own history, not a generic template.' },
      { t: 'Live forecasts', d: 'Forecasts update continuously as new events stream in.' },
      { t: 'Early warnings', d: 'Surface at-risk outcomes early, with the context behind each prediction.' },
    ],
  },
  {
    id: 'agent',
    eyebrow: 'Agent Intelligence',
    cyan: true,
    title: 'Agents that reason, plan, and execute.',
    lead: 'Autonomous agents read the Ontology, break goals into steps, call tools, and verify their work — no person watching a dashboard.',
    points: [
      { t: 'Plan and adapt', d: 'Break a goal into multi-step plans and adjust when conditions change.' },
      { t: 'Call any tool', d: 'Use platform services, APIs, and workflows as tools to get work done.' },
      { t: 'Verify before acting', d: 'Check results against the Ontology before committing an action.' },
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              The Platform
            </span>
            <h1 className="cx-hero__title">
              The intelligence layer,{' '}
              <span className="cx-gradient-text">end to end.</span>
            </h1>
            <p className="cx-hero__sub">
              Follow one signal. A sensor ticks, an order lands, a truck turns off-route. Cosmonus
              resolves it into your Ontology — a living model of your whole operation — reasons over it
              with five engines, hands it to an agent, and turns it into a decision before the next one lands.
            </p>
            <div className="cx-hero__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/products">
                View Products
              </Link>
            </div>
            <div className="cx-strip">
              <div className="cx-strip__item">
                <span className="cx-strip__val">5</span>
                <span className="cx-strip__lbl">Intelligence engines</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">1</span>
                <span className="cx-strip__lbl">Living operational Ontology</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">&lt;100ms</span>
                <span className="cx-strip__lbl">Event to action</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">One API</span>
                <span className="cx-strip__lbl">Graph · engines · agents</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-section" id="architecture">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Architecture
            </span>
            <h2 className="cx-heading">One path from signal to decision.</h2>
            <p className="cx-lead cx-lead--wide">
              Most stacks stitch a warehouse, rules engine, model, and scheduler together, then spend
              years syncing them. Cosmonus collapses that into one flow over a shared graph.
            </p>
          </div>
          <div className="cx-flow">
            {FLOW.map((node, i) => (
              <div key={node.title} style={{ display: 'contents' }}>
                <div
                  className={
                    node.accent
                      ? 'cx-flow__node cx-flow__node--accent'
                      : 'cx-flow__node'
                  }
                >
                  <strong>{node.title}</strong>
                  <span>{node.sub}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="cx-flow__arrow" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="engines">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Intelligence Engines
            </span>
            <h2 className="cx-heading">Five engines, one Ontology.</h2>
            <p className="cx-lead cx-lead--wide">
              Each engine reasons differently, but all read and write the same Ontology. Run one, or all together.
            </p>
          </div>

          <div className="cx-engines-grid">
            {ENGINES.map((e, i) => (
              <div id={e.id} className="cx-card cx-card--engine" key={e.id}>
                <span className="cx-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>{e.eyebrow}</h3>
                <p className="cx-card__body">{e.title}</p>
                <p className="cx-card__foot">{e.points.map((p) => p.t).join(' · ')}</p>
                {e.cta ? (
                  <Link className="cx-card__btn" href={e.cta.href}>
                    {e.cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="cx-card__btn cx-card__btn--soon">Coming soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="services">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Platform Services
            </span>
            <h2 className="cx-heading">Infrastructure, not features.</h2>
            <p className="cx-lead cx-lead--wide">
              The primitives every Cosmonus product is built on — a platform to build on, not features locked in one app.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {SERVICES.map((svc, i) => (
              <div className="cx-card cx-card--engine" key={svc.title}>
                <span className="cx-card__num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>
                  {svc.title}
                </h3>
                <p className="cx-card__body">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="trust">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Security &amp; Trust
            </span>
            <h2 className="cx-heading">Governed by default.</h2>
            <p className="cx-lead cx-lead--wide">
              Because intelligence sits on your most sensitive data, control and accountability are
              built into the layer every engine, agent, and product runs on.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {TRUST.map((item) => (
              <div className="cx-card" key={item.title}>
                <h3 className="cx-card__title">{item.title}</h3>
                <p className="cx-card__body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section">
        <div className="container">
          <div className="cx-cta">
            <span className="cx-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Build on the platform
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Put the whole <span className="cx-gradient-text">intelligence layer</span> to work.
            </h2>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/developers">
                Developer Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
