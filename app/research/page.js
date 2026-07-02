import Link from 'next/link';

export const metadata = {
  title: 'Research — The Open Problems Behind the Intelligence Layer | Cosmonus',
  description:
    'The hard, unfinished questions we work on: keeping the Ontology correct as the world moves, trusting agents to act, reasoning at the edge, and turning vision and space into fact. Grounded in real operational problems, shipped into the platform.',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Cosmonus Research — The Problems Behind What We Ship',
    description:
      'Where the Ontology goes wrong, how far an agent can be trusted, how much reasoning fits on a device — the open questions that push the platform’s core forward.',
    url: 'https://cosmonus.com/research',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus Research',
    description:
      'The open questions we work on — keeping the Ontology correct, trusting agents to act, reasoning at the edge — grounded in real problems and shipped into the platform.',
    images: ['/images/ICON.png'],
  },
};

const AREAS = [
  {
    title: 'Knowledge Graphs',
    body:
      'How to keep the Ontology correct as reality shifts underneath it — resolving entities, reconciling conflicting sources, and expiring stale relationships without losing history.',
  },
  {
    title: 'Spatial Computing',
    body:
      'Reasoning about movement, geometry, and place over time, so position and trajectory become queryable facts rather than raw coordinates.',
  },
  {
    title: 'Agentic AI',
    body:
      'Giving long-running agents reliable plans, tool use, and self-verification — so they can act on the graph and check their own work against ground truth.',
  },
  {
    title: 'Computer Vision',
    body:
      'Turning visual streams into structured entities and events that link back to the graph, and doing it under real-world noise, occlusion, and drift.',
  },
  {
    title: 'Edge AI',
    body:
      'Running inference close to where signals originate — trading model size, latency, and connectivity so decisions hold up when the network does not.',
  },
  {
    title: 'Reasoning Systems',
    body:
      'Combining learned models with explicit structure, so answers can be traced, constrained, and defended — not just generated.',
  },
];

const PRINCIPLES = [
  'Every project starts from a real operational problem, not a benchmark.',
  'Work ships into the platform — engines, agents, and the graph — or it isn’t done.',
  'Results are held to ground truth, not to how good the demo looks.',
];

const OPEN = [
  {
    title: 'Staying current',
    body:
      'How does the Ontology stay correct when its sources disagree and the world keeps changing beneath it?',
  },
  {
    title: 'Trustworthy autonomy',
    body:
      'How far can an agent act on its own before a human needs to intervene — and how does it know where that line is?',
  },
  {
    title: 'Intelligence at the edge',
    body:
      'How much reasoning can move to constrained devices without losing the context that lives in the central Ontology?',
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Research
            </span>
            <h1 className="cx-hero__title">
              Advancing how organizations{' '}
              <span className="cx-gradient-text">understand and act.</span>
            </h1>
            <p className="cx-hero__sub">
              The Ontology — a living model of an operation — can be right on Monday
              and wrong by Friday: sources disagree, entities merge, the world moves
              underneath it. That gap is
              where our research lives. It isn&rsquo;t a lab off to the side: every
              initiative pushes on the platform&rsquo;s core — the graph, the engines,
              the agents — and ships back into what you run. Open questions we&rsquo;re
              working on, not results we&rsquo;re claiming.
            </p>
            <div className="cx-hero__actions">
              <Link className="btn-cosmonus btn-arrow" href="/careers">
                Open Roles
              </Link>
              <Link className="btn-ghost" href="/platform">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-section" id="areas">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Research Areas
            </span>
            <h2 className="cx-heading">Where the work is pointed.</h2>
            <p className="cx-lead cx-lead--wide">
              Six directions, one platform. Each asks a different question about how
              machines understand a changing world — and each one, when it moves,
              moves the whole system forward.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {AREAS.map((area, i) => (
              <div className="cx-card cx-card--engine" key={area.title}>
                <span className="cx-card__num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>
                  {area.title}
                </h3>
                <p className="cx-card__body">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="how-we-work">
        <div className="container">
          <div className="cx-split">
            <div>
              <span className="cx-eyebrow cx-eyebrow--cyan">
                <span className="cx-eyebrow__dot" aria-hidden="true" />
                How We Work
              </span>
              <h2 className="cx-heading">Grounded in the problem, shipped into the platform.</h2>
              <p className="cx-lead">
                We start where the friction is real — an operational problem someone
                is living with — and work backward to the method. A direction earns
                its place only when it improves an engine, an agent, or the graph in
                production, so what we learn becomes part of the system people run.
              </p>
              <ul className="cx-list" style={{ marginTop: '1.5rem' }}>
                {PRINCIPLES.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="cx-split__media">
              <div className="cx-kgraph">
                <div className="cx-kgraph__ring" />
                <div className="cx-kgraph__ring cx-kgraph__ring--2" />
                <div className="cx-kgraph__ring cx-kgraph__ring--3" />
                <div className="cx-kgraph__core">CORE</div>
                <span className="cx-kgraph__node" style={{ '--x': '120px', '--y': '-90px' }}>
                  Graph
                </span>
                <span className="cx-kgraph__node" style={{ '--x': '-140px', '--y': '-40px' }}>
                  Engines
                </span>
                <span className="cx-kgraph__node" style={{ '--x': '130px', '--y': '70px' }}>
                  Agents
                </span>
                <span className="cx-kgraph__node" style={{ '--x': '-110px', '--y': '100px' }}>
                  Edge
                </span>
                <span className="cx-kgraph__node" style={{ '--x': '0px', '--y': '-150px' }}>
                  Reasoning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-section" id="open-problems">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Open Problems
            </span>
            <h2 className="cx-heading">Questions the field hasn’t settled.</h2>
            <p className="cx-lead cx-lead--wide">
              The hard, unfinished parts — shared across the field, not solved by
              anyone. We state them plainly, because honest questions make for
              better work than confident answers.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {OPEN.map((item) => (
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
              Work on the hard part
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Help push the{' '}
              <span className="cx-gradient-text">platform’s core</span> forward.
            </h2>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/careers">
                See Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
