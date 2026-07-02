import Link from 'next/link';
import CxReveal from '@/components/CxReveal';

export const metadata = {
  title: 'How We Build — AI Systems That Automate Work | Cosmonus',
  description:
    'The Cosmonus approach: we take a real, manual workflow and turn it into an AI system that runs in production. One path — discover, prototype, integrate, ship, run.',
  keywords: [
    'AI automation',
    'workflow automation',
    'AI product engineering',
    'AI agents',
    'applied AI',
    'cosmonus platform',
  ],
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'How We Build — AI That Automates Your Work | Cosmonus',
    description:
      'From a messy manual workflow to an AI system running in production. Discover → Prototype → Integrate → Ship → Run.',
    url: 'https://cosmonus.com/platform',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Build — Cosmonus',
    description:
      'From manual work to AI that runs it — one path from first look to production.',
    images: ['/images/ICON.png'],
  },
};

const PHASES = [
  {
    icon: 'search',
    title: 'Discover',
    lead: 'We map the workflow and find where the manual, repetitive work actually is.',
    tags: ['audit', 'map', 'scope'],
  },
  {
    icon: 'spark',
    title: 'Prototype',
    lead: 'A working AI prototype in days — something you can click, not a spec to read.',
    tags: ['design', 'generate', 'demo'],
    accent: true,
  },
  {
    icon: 'plug',
    title: 'Integrate',
    lead: 'We wire it into the tools and data you already run — CRM, ERP, sheets, warehouses.',
    tags: ['connect', 'data', 'auth'],
  },
  {
    icon: 'ship',
    title: 'Ship',
    lead: 'Into production — tested, monitored, and with humans in the loop where it matters.',
    tags: ['test', 'deploy', 'monitor'],
    accent: true,
  },
  {
    icon: 'loop',
    title: 'Run',
    lead: 'It runs the work every day. We keep it sharp as your operation changes.',
    tags: ['operate', 'improve', 'scale'],
  },
];

const CAPABILITIES = [
  {
    title: 'Workflow Automation',
    body: 'Encode a process once; AI runs it end to end, every time — no one re-keying data or chasing handoffs.',
  },
  {
    title: 'AI Agents',
    body: 'Long-running workers that plan a task, use your tools, and check their own work before acting.',
  },
  {
    title: 'Document Processing',
    body: 'Turn contracts, invoices, and forms into structured data your systems can act on.',
  },
  {
    title: 'Integrations',
    body: 'Pre-built connectors for the tools you already run — CRM, ERP, spreadsheets, and warehouses.',
  },
  {
    title: 'Data Pipelines',
    body: 'Durable ingestion for high-volume feeds, with replay and backfill built in.',
  },
  {
    title: 'Predictive Models',
    body: 'Forecast demand, risk, and failure from your own history — not a generic template.',
  },
  {
    title: 'Internal Tools',
    body: 'Custom dashboards and apps that put the automation in your team’s hands.',
  },
  {
    title: 'APIs & SDK',
    body: 'A typed surface to query, trigger, and wire automation directly into your own code.',
  },
  {
    title: 'Analytics',
    body: 'Query live and historical state together — every metric traces to the work behind it.',
  },
];

const COMPARE = [
  {
    before: 'Data re-keyed between systems by hand',
    after: 'Data flows in and updates itself',
  },
  {
    before: 'Answers arrive a week late',
    after: 'Decisions happen in milliseconds',
  },
  {
    before: 'Work sits waiting in someone’s inbox',
    after: 'The workflow runs on its own',
  },
  {
    before: 'Scaling means hiring more people',
    after: 'Scaling is a config change',
  },
];

const RELIABILITY = [
  { title: 'Human in the Loop', body: 'Approvals and overrides where they matter — automation you can trust, not a black box.' },
  { title: 'Monitoring & Alerts', body: 'Every run is observed; you know the moment something needs attention.' },
  { title: 'Role-Based Access', body: 'Scoped permissions down to the action and record level.' },
  { title: 'Encryption', body: 'Data encrypted in transit and at rest, with managed key rotation.' },
  { title: 'Audit Logs', body: 'An immutable record of every automated action and decision.' },
  { title: 'Reliability', body: 'Retries, fallbacks, and graceful failure — built for real workloads.' },
];

function PhaseIcon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M13 2 5 13h6l-1 9 8-11h-6z" />
        </svg>
      );
    case 'plug':
      return (
        <svg {...common}>
          <path d="M9 2v6M15 2v6" />
          <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
          <path d="M12 17v5" />
        </svg>
      );
    case 'ship':
      return (
        <svg {...common}>
          <path d="M12 2c3 2.2 4.5 5.4 4.5 9 0 2.2-.8 4.3-2 6h-5c-1.2-1.7-2-3.8-2-6 0-3.6 1.5-6.8 4.5-9Z" />
          <circle cx="12" cy="10" r="1.6" />
          <path d="M7.5 17 5 20M16.5 17 19 20" />
        </svg>
      );
    case 'loop':
      return (
        <svg {...common}>
          <path d="M20 12a8 8 0 1 1-2.3-5.6" />
          <path d="M20 4v4h-4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function PlatformPage() {
  return (
    <>
      <CxReveal />

      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              The Cosmonus Approach
            </span>
            <h1 className="cx-hero__title cx-hero__title--oneline">
              From manual work to <span className="cx-gradient-text">AI that runs it.</span>
            </h1>
            <p className="cx-hero__sub">
              Cosmonus takes a real workflow — the messy, manual, repetitive kind — and turns it into
              an AI system that runs in production. One clear path, from the first look at your process
              to something your team actually relies on.
            </p>
            <div className="cx-hero__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/products/stayonmap">
                See StayOnMap
              </Link>
            </div>
            <div className="cx-strip">
              <div className="cx-strip__item">
                <span className="cx-strip__val">Days</span>
                <span className="cx-strip__lbl">To a working prototype</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">End&nbsp;to&nbsp;end</span>
                <span className="cx-strip__lbl">Discovery to running system</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">In&nbsp;the&nbsp;loop</span>
                <span className="cx-strip__lbl">Humans stay in control</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">Production</span>
                <span className="cx-strip__lbl">Built to run, not to demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The pipeline — how a workflow becomes an AI system */}
      <section className="cx-section" id="approach">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              The Path
            </span>
            <h2 className="cx-heading">Five steps from workflow to working AI.</h2>
            <p className="cx-lead cx-lead--wide">
              No year-long project, no stack of tools to stitch together. One continuous path — you can
              see it working long before it ships.
            </p>
          </div>

          <div className="cx-pipe">
            {PHASES.map((p, i) => (
              <div key={p.title} style={{ display: 'contents' }}>
                <div
                  className={`cx-pipe__node${p.accent ? ' cx-pipe__node--accent' : ''}`}
                  data-cx-reveal
                  style={{ '--cx-i': i }}
                >
                  <div className="cx-pipe__top">
                    <span className="cx-pipe__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cx-pipe__icon">
                      <PhaseIcon name={p.icon} />
                    </span>
                  </div>
                  <h3 className="cx-pipe__title">{p.title}</h3>
                  <p className="cx-pipe__lead">{p.lead}</p>
                  <div className="cx-pipe__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="cx-pipe__tag">{t}</span>
                    ))}
                  </div>
                </div>
                {i < PHASES.length - 1 && (
                  <div className="cx-pipe__link" aria-hidden="true">
                    <span className="cx-pipe__dot" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / after infographic */}
      <section className="cx-section" id="difference">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              The Difference
            </span>
            <h2 className="cx-heading">What changes when the work runs itself.</h2>
          </div>

          <div className="cx-compare" data-cx-reveal>
            <div className="cx-compare__col cx-compare__col--before">
              <p className="cx-compare__label">Manual today</p>
              <ul className="cx-compare__list">
                {COMPARE.map((row) => (
                  <li key={row.before}>
                    <span className="cx-compare__dot cx-compare__dot--before" aria-hidden="true" />
                    {row.before}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cx-compare__arrow" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </div>

            <div className="cx-compare__col cx-compare__col--after">
              <p className="cx-compare__label">With Cosmonus</p>
              <ul className="cx-compare__list">
                {COMPARE.map((row) => (
                  <li key={row.after}>
                    <span className="cx-compare__dot cx-compare__dot--after" aria-hidden="true" />
                    {row.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="cx-section" id="capabilities">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              What We Build
            </span>
            <h2 className="cx-heading">The building blocks of an automation.</h2>
            <p className="cx-lead cx-lead--wide">
              Most systems we ship are a few of these working together — chosen for your workflow, not
              sold as a fixed bundle.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {CAPABILITIES.map((c, i) => (
              <div
                className="cx-card cx-card--engine"
                key={c.title}
                data-cx-reveal
                style={{ '--cx-i': i % 3 }}
              >
                <span className="cx-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>{c.title}</h3>
                <p className="cx-card__body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to run in production */}
      <section className="cx-section" id="reliability">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Built to Run
            </span>
            <h2 className="cx-heading">Automation you can actually depend on.</h2>
            <p className="cx-lead cx-lead--wide">
              A demo runs once. Production runs every day, on your real data — so control, visibility,
              and reliability are built in from the start.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {RELIABILITY.map((item, i) => (
              <div className="cx-card" key={item.title} data-cx-reveal style={{ '--cx-i': i % 3 }}>
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
              Start with one workflow
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Ready to <span className="cx-gradient-text">automate the work?</span>
            </h2>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/products/stayonmap">
                See StayOnMap
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
