import Link from 'next/link';

export const metadata = {
  title: 'Ship Decisions Into Production — Cosmonus Developer Platform',
  description:
    'Install one client, pass a key, and the whole Ontology — your operation as one connected model — is a typed object away. Query it, run the engines, and drive agents over REST, GraphQL, and streaming APIs — with SDKs, a CLI, and scoped auth.',
  alternates: { canonical: '/developers' },
  openGraph: {
    title: 'Build on the Cosmonus Intelligence Layer',
    description:
      'From your editor to production: query the graph, run the engines, and drive agents from code. REST, GraphQL, and streaming APIs, SDKs for TypeScript, Python, and Go, a CLI, and scoped auth.',
    url: 'https://cosmonus.com/developers',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build on the Cosmonus Intelligence Layer',
    description:
      'One client, one key, the whole graph — REST, GraphQL, streaming APIs, typed SDKs, a CLI, and scoped auth.',
    images: ['/images/ICON.png'],
  },
};

const API_CARDS = [
  {
    title: 'REST API',
    body: 'CRUD over the graph, engines, and agents — with cursor pagination and idempotency keys.',
    tag: 'GET · POST · PATCH · DELETE',
  },
  {
    title: 'GraphQL',
    body: 'One typed schema — ask for the exact entities, relations, and fields in a single round trip.',
    tag: 'query · mutation',
  },
  {
    title: 'Streaming APIs',
    body: 'Subscribe to graph changes over WebSocket or webhook, and replay from any offset.',
    tag: 'websocket · webhooks',
  },
];

const SDK_CARDS = [
  { title: 'TypeScript', body: 'Typed client with types generated from your graph schema.', tag: '@cosmonus/sdk' },
  { title: 'Python', body: 'Async and sync clients, typed models, and dataframe output.', tag: 'pip install cosmonus' },
  { title: 'Go', body: 'A small, dependency-light client for services and edge workloads.', tag: 'go get cosmonus-go' },
  { title: 'CLI', body: 'Query the graph, tail streams, and script the platform from your shell.', tag: 'cosmonus' },
];

const DOC_CARDS = [
  { title: 'Quickstart', body: 'Authenticate, query, and stream an event in under ten minutes.', tag: 'guide' },
  { title: 'API Reference', body: 'Every REST endpoint and GraphQL type, with request and response schemas.', tag: 'reference' },
  { title: 'Guides', body: 'Task-focused walkthroughs for queries, subscriptions, and agents.', tag: 'guide' },
  { title: 'Webhooks', body: 'Register endpoints, verify signatures, and handle retries and replay.', tag: 'events' },
  { title: 'Rate Limits', body: 'Per-key quotas, burst behavior, and usage headers.', tag: 'reference' },
  { title: 'Changelog', body: 'Versioned release notes for the API, SDKs, and CLI. Nothing breaks silently.', tag: 'v1' },
];

export default function DevelopersPage() {
  return (
    <>
      <section className="cx-hero">
        <div className="container">
          <div className="cx-hero__inner">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Developer Platform
            </span>
            <h1 className="cx-hero__title">
              Build on the{' '}
              <span className="cx-gradient-text">intelligence layer.</span>
            </h1>
            <p className="cx-hero__sub">
              Install one client and the whole Ontology — a living model of your
              operation — is a typed object away. Query it, run the engines, and drive
              agents over REST, GraphQL, and streaming APIs — scoped auth and a CLI included.
            </p>
            <div className="cx-hero__actions">
              <Link className="btn-cosmonus btn-arrow" href="/developers#docs">
                Read the Docs
              </Link>
              <Link className="btn-ghost" href="/contact">
                Get Started
              </Link>
            </div>
            <div className="cx-strip">
              <div className="cx-strip__item">
                <span className="cx-strip__val">REST</span>
                <span className="cx-strip__lbl">Resource API</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">GraphQL</span>
                <span className="cx-strip__lbl">Typed graph</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">Streaming</span>
                <span className="cx-strip__lbl">Events · webhooks</span>
              </div>
              <div className="cx-strip__item">
                <span className="cx-strip__val">v1</span>
                <span className="cx-strip__lbl">Stable API surface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-section" id="apis">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              APIs
            </span>
            <h2 className="cx-heading">One surface, not three products.</h2>
            <p className="cx-lead cx-lead--wide">
              The graph, engines, and agents sit behind one API surface — REST for
              resources, GraphQL for the exact shape, streaming the moment it lands.
            </p>
          </div>

          <div className="cx-split">
            <div>
              <span className="cx-eyebrow cx-eyebrow--cyan">
                <span className="cx-eyebrow__dot" aria-hidden="true" />
                One surface
              </span>
              <h3 className="cx-heading">Read, write, and subscribe.</h3>
              <p className="cx-lead">
                REST gives you CRUD with idempotency and cursor pagination built in.
                GraphQL exposes the same data as a typed graph, so one query walks the
                relations you need.
              </p>
              <ul className="cx-list" style={{ marginTop: '1.5rem' }}>
                <li>REST endpoints for graph entities, engine runs, and agent tasks.</li>
                <li>GraphQL for multi-hop reads in one request, typed end to end.</li>
                <li>Streaming and webhooks push changes as events, with replay.</li>
              </ul>
            </div>
            <div className="cx-split__media">
              <div className="cx-terminal">
                <div className="cx-terminal__bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="cx-terminal__body">
                  <span className="tok-c">{'# GraphQL · the intelligence graph'}</span>{'\n'}
                  <span className="tok-k">query</span> <span className="tok-f">{'{'}</span>{'\n'}
                  {'  '}<span className="tok-k">facilities</span><span className="tok-f">(</span><span className="tok-k">risk</span><span className="tok-f">:</span> <span className="tok-s">{'"elevated"'}</span><span className="tok-f">)</span> <span className="tok-f">{'{'}</span>{'\n'}
                  {'    '}id{'\n'}
                  {'    '}name{'\n'}
                  {'    '}eta{'\n'}
                  {'  '}<span className="tok-f">{'}'}</span>{'\n'}
                  <span className="tok-f">{'}'}</span>{'\n'}
                  {'\n'}
                  <span className="tok-c">{'# → 200 OK'}</span>{'\n'}
                  <span className="tok-f">{'{'}</span> <span className="tok-s">{'"data"'}</span><span className="tok-f">:</span> <span className="tok-f">{'{'}</span> <span className="tok-s">{'"facilities"'}</span><span className="tok-f">:</span> <span className="tok-f">[</span>{'\n'}
                  {'    '}<span className="tok-f">{'{'}</span> <span className="tok-s">{'"id"'}</span><span className="tok-f">:</span> <span className="tok-s">{'"fac_71a3"'}</span><span className="tok-f">,</span> <span className="tok-s">{'"eta"'}</span><span className="tok-f">:</span> <span className="tok-s">{'"14:20Z"'}</span> <span className="tok-f">{'}'}</span><span className="tok-f">,</span>{'\n'}
                  {'    '}<span className="tok-f">{'{'}</span> <span className="tok-s">{'"id"'}</span><span className="tok-f">:</span> <span className="tok-s">{'"fac_08c9"'}</span><span className="tok-f">,</span> <span className="tok-s">{'"eta"'}</span><span className="tok-f">:</span> <span className="tok-s">{'"15:05Z"'}</span> <span className="tok-f">{'}'}</span>{'\n'}
                  {'  '}<span className="tok-f">]</span> <span className="tok-f">{'}'}</span> <span className="tok-f">{'}'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cx-grid cx-grid--3" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {API_CARDS.map((card, i) => (
              <div className="cx-card cx-card--engine" key={card.title}>
                <span className="cx-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cx-card__title" style={{ marginTop: '0.6rem' }}>
                  {card.title}
                </h3>
                <p className="cx-card__body">{card.body}</p>
                <span className="cx-card__tag">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="sdks">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              SDKs &amp; CLI
            </span>
            <h2 className="cx-heading">SDKs &amp; CLI.</h2>
            <p className="cx-lead cx-lead--wide">
              Install a client, pass a key, and query the graph in a few lines. Types
              come from your schema, so a wrong field is a compile error.
            </p>
          </div>

          <div className="cx-split cx-split--reverse">
            <div>
              <span className="cx-eyebrow">
                <span className="cx-eyebrow__dot" aria-hidden="true" />
                One line to start
              </span>
              <h3 className="cx-heading">Typed clients, no boilerplate.</h3>
              <p className="cx-lead">
                One client wraps REST, GraphQL, and streaming — handling auth, retries,
                and pagination, and returning typed results.
              </p>
              <ul className="cx-list" style={{ marginTop: '1.5rem' }}>
                <li>Clients for TypeScript, Python, and Go from one API.</li>
                <li>Generated types keep queries honest against your schema.</li>
                <li>The CLI scripts the same surface from your shell.</li>
              </ul>
            </div>
            <div className="cx-split__media">
              <div className="cx-terminal">
                <div className="cx-terminal__bar">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="cx-terminal__body">
                  <span className="tok-c">{'# install'}</span>{'\n'}
                  <span className="tok-f">$</span> npm install <span className="tok-s">@cosmonus/sdk</span>{'\n'}
                  {'\n'}
                  <span className="tok-c">{'// query the graph'}</span>{'\n'}
                  <span className="tok-k">import</span> <span className="tok-f">{'{'}</span> Cosmonus <span className="tok-f">{'}'}</span> <span className="tok-k">from</span> <span className="tok-s">{"'@cosmonus/sdk'"}</span><span className="tok-f">;</span>{'\n'}
                  {'\n'}
                  <span className="tok-k">const</span> client <span className="tok-f">=</span> <span className="tok-k">new</span> <span className="tok-f">Cosmonus</span><span className="tok-f">(</span><span className="tok-f">{'{'}</span> apiKey <span className="tok-f">{'}'}</span><span className="tok-f">)</span><span className="tok-f">;</span>{'\n'}
                  {'\n'}
                  <span className="tok-k">const</span> <span className="tok-f">{'{'}</span> facilities <span className="tok-f">{'}'}</span> <span className="tok-f">=</span> <span className="tok-k">await</span> client<span className="tok-f">.</span>graph<span className="tok-f">.</span><span className="tok-k">query</span><span className="tok-f">(</span><span className="tok-f">{'{'}</span>{'\n'}
                  {'  '}risk<span className="tok-f">:</span> <span className="tok-s">{'"elevated"'}</span><span className="tok-f">,</span>{'\n'}
                  {'  '}fields<span className="tok-f">:</span> <span className="tok-f">[</span><span className="tok-s">{'"id"'}</span><span className="tok-f">,</span> <span className="tok-s">{'"eta"'}</span><span className="tok-f">]</span><span className="tok-f">,</span>{'\n'}
                  <span className="tok-f">{'}'}</span><span className="tok-f">)</span><span className="tok-f">;</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cx-grid cx-grid--4" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {SDK_CARDS.map((card) => (
              <div className="cx-card cx-card--engine" key={card.title}>
                <h3 className="cx-card__title">{card.title}</h3>
                <p className="cx-card__body">{card.body}</p>
                <span className="cx-card__tag">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section" id="auth">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Authentication
            </span>
            <h2 className="cx-heading">Scoped by default.</h2>
            <p className="cx-lead cx-lead--wide">
              Every request is authenticated and every token is scoped. Grant the
              minimum a service needs — no more.
            </p>
          </div>
          <div className="cx-grid cx-grid--2">
            <div className="cx-card">
              <h3 className="cx-card__title">Keys &amp; tokens</h3>
              <p className="cx-card__body">
                API keys for server-to-server, OAuth for user-facing apps. Mint scoped
                tokens and rotate them without downtime.
              </p>
              <span className="cx-card__tag">api key · oauth · scoped</span>
            </div>
            <div className="cx-card">
              <h3 className="cx-card__title">Role-based access</h3>
              <p className="cx-card__body">
                RBAC maps every key and token to roles down to the entity and field
                level, checked before every call runs.
              </p>
              <span className="cx-card__tag">rbac · least privilege</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-section" id="docs">
        <div className="container">
          <div className="cx-section-head">
            <span className="cx-eyebrow cx-eyebrow--cyan">
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Documentation
            </span>
            <h2 className="cx-heading">Documentation.</h2>
            <p className="cx-lead cx-lead--wide">
              Reference from the API, guides for real tasks, and a changelog for every
              version. Start with the quickstart.
            </p>
          </div>
          <div className="cx-grid cx-grid--3">
            {DOC_CARDS.map((card) => (
              <Link className="cx-card cx-card--engine" key={card.title} href="/developers">
                <h3 className="cx-card__title">{card.title}</h3>
                <p className="cx-card__body">{card.body}</p>
                <span className="cx-card__tag">{card.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section">
        <div className="container">
          <div className="cx-cta">
            <span className="cx-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="cx-eyebrow__dot" aria-hidden="true" />
              Start building
            </span>
            <h2 className="cx-heading cx-heading--xl">
              Everything is <span className="cx-gradient-text">programmable.</span>
            </h2>
            <div className="cx-cta__actions">
              <Link className="btn-cosmonus btn-arrow" href="/contact">
                Get Started
              </Link>
              <Link className="btn-ghost" href="/platform">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
