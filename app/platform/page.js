import Link from 'next/link';

export const metadata = {
  title: 'How Intelligence Is Engineered | Cosmonus',
  description:
    'How Cosmonus turns an operation into an intelligent system: model the domain, engineer the reasoning, deploy with oversight, and operate in production. Understand → Model → Reason → Deploy → Operate.',
  keywords: [
    'intelligence engineering',
    'reasoning systems',
    'AI architecture',
    'agent orchestration',
    'knowledge systems',
    'decision systems',
  ],
  alternates: { canonical: '/platform' },
  openGraph: {
    title: 'How Intelligence Is Engineered | Cosmonus',
    description:
      'From an operation to a system that reasons about it. Understand → Model → Reason → Deploy → Operate.',
    url: 'https://cosmonus.com/platform',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Intelligence Is Engineered — Cosmonus',
    description:
      'From an operation to a system that reasons about it — one disciplined path to production.',
    images: ['/images/ICON.png'],
  },
};

const PHASES = [
  {
    icon: 'search',
    title: 'Understand',
    lead: 'We study the operation before writing code — the entities, the decisions, and where judgment actually lives.',
    tags: ['domain', 'decisions', 'constraints'],
  },
  {
    icon: 'spark',
    title: 'Model',
    lead: 'We build a working model of your world — data, relationships, and rules the system can reason against.',
    tags: ['knowledge', 'structure', 'signals'],
    accent: true,
  },
  {
    icon: 'plug',
    title: 'Reason',
    lead: 'We engineer the decision logic: what the system infers, when it acts, and when it defers to a person.',
    tags: ['inference', 'agents', 'thresholds'],
  },
  {
    icon: 'ship',
    title: 'Deploy',
    lead: 'Into production against live data — evaluated, monitored, with every decision traceable to its evidence.',
    tags: ['evaluate', 'observe', 'trace'],
    accent: true,
  },
  {
    icon: 'loop',
    title: 'Operate',
    lead: 'The system keeps learning from outcomes. We measure decision quality and tighten it as your operation changes.',
    tags: ['measure', 'refine', 'scale'],
  },
];

const CAPABILITIES = [
  {
    title: 'Reasoning Engines',
    body: 'The core of every system we build: logic that weighs evidence, draws conclusions, and can show its work.',
  },
  {
    title: 'Agent Orchestration',
    body: 'Autonomous workers that plan, use your tools, and verify their own output — coordinated, bounded, and observable.',
  },
  {
    title: 'Knowledge Systems',
    body: 'Your entities, relationships, and history structured into a model the system reasons against — data becomes knowledge.',
  },
  {
    title: 'Workflow Intelligence',
    body: 'Processes that don’t just execute steps — they understand state, handle exceptions, and route judgment to people.',
  },
  {
    title: 'Prediction',
    body: 'Forecasts of demand, risk, and failure trained on your own history — with confidence levels, not just numbers.',
  },
  {
    title: 'Decision Support',
    body: 'When the call belongs to a human, the system assembles the evidence, states its recommendation, and explains why.',
  },
  {
    title: 'Data Foundations',
    body: 'Durable pipelines that turn raw feeds into reliable inputs — because reasoning is only as good as what it reads.',
  },
  {
    title: 'Human Oversight',
    body: 'Approval gates, overrides, and escalation designed into the architecture — autonomy is granted, never assumed.',
  },
  {
    title: 'Infrastructure',
    body: 'Typed APIs, monitoring, and audit trails — the engineering that makes intelligence dependable at scale.',
  },
];

const COMPARE = [
  {
    before: 'Rules written once, wrong within a year',
    after: 'A model of the business that adapts as it changes',
  },
  {
    before: 'Data collected, reported, never acted on',
    after: 'Data reasoned over and turned into decisions',
  },
  {
    before: 'Every exception escalates to a person',
    after: 'Exceptions handled; judgment routed to people',
  },
  {
    before: 'Nobody can say why the system did that',
    after: 'Every decision traceable to its evidence',
  },
];

const RELIABILITY = [
  { title: 'Explainability', body: 'A system that can’t explain its decision doesn’t get to make it. Every conclusion carries its reasoning.' },
  { title: 'Human Oversight', body: 'Approvals and overrides where the stakes demand them — autonomy is scoped decision by decision.' },
  { title: 'Audit Trails', body: 'An immutable record of every decision: what the system saw, what it inferred, what it did.' },
  { title: 'Access Control', body: 'Permissions scoped to the action and record level — intelligence operates inside boundaries you set.' },
  { title: 'Security', body: 'Data encrypted in transit and at rest, with managed key rotation. Your data trains your system, no one else’s.' },
  { title: 'Reliability', body: 'Retries, fallbacks, and graceful degradation — a system trusted with decisions must survive bad days.' },
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
      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              How We Engineer Intelligence
            </span>
            <h1 className="cx-hero__title cx-hero__title--oneline">
              Software that follows rules. <span className="cx-gradient-text">Systems that reason.</span>
            </h1>
            <p className="cx-hero__sub">
              Traditional software encodes decisions someone already made. An intelligent system makes
              them — it holds a model of your operation, weighs live evidence against it, and acts.
              This is how we build one: a disciplined path from understanding your domain to a system
              you trust in production.
            </p>
            <div className="cx-hero__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Discuss your system
              </Link>
              <Link className="btn-ghost" href="/products/stayonmap">
                See it in production
              </Link>
            </div>
            <div className="cx-strip">
              <div className="cx-strip__item">
                <span className="cx-strip__val">First&nbsp;principles</span>
                <span className="cx-strip__lbl">Designed, not assembled from tools</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">End&nbsp;to&nbsp;end</span>
                <span className="cx-strip__lbl">Domain model to running system</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">Accountable</span>
                <span className="cx-strip__lbl">Every decision traceable</span>
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
              The Method
            </span>
            <h2 className="cx-heading">Five phases from operation to intelligence.</h2>
            <p className="cx-lead cx-lead--wide">
              Intelligence isn&apos;t a model you plug in — it&apos;s an architecture you design.
              Each phase earns the next: we don&apos;t write reasoning logic until the domain is
              modeled, and nothing reaches production untested against your real data.
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
              Why Intelligence, Not Automation
            </span>
            <h2 className="cx-heading">Automation repeats instructions. Intelligence exercises judgment.</h2>
          </div>

          <div className="cx-compare" data-cx-reveal>
            <div className="cx-compare__col cx-compare__col--before">
              <p className="cx-compare__label">Traditional software</p>
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
              <p className="cx-compare__label">An intelligent system</p>
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
              What We Engineer
            </span>
            <h2 className="cx-heading">The anatomy of an intelligent system.</h2>
            <p className="cx-lead cx-lead--wide">
              Every system we build composes these disciplines — selected for the decisions your
              operation needs to make, not sold as a fixed bundle.
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
              Built to Be Trusted
            </span>
            <h2 className="cx-heading">A system that decides must answer for its decisions.</h2>
            <p className="cx-lead cx-lead--wide">
              Trust in an intelligent system isn&apos;t a feeling — it&apos;s an architecture.
              Explainability, oversight, and auditability are designed in from the first line,
              because you can&apos;t bolt accountability onto a black box.
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
              Start with one decision
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Bring us the problem <span className="cx-gradient-text">software couldn&apos;t solve.</span>
            </h2>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Discuss your system
              </Link>
              <Link className="btn-ghost" href="/products/stayonmap">
                See it in production
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
