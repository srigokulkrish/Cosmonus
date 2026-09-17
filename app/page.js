import Link from 'next/link'
import IntelligenceCanvas from '@/components/IntelligenceCanvas'
import LayeredStack from '@/components/LayeredStack'
import DiagramCanvas from '@/components/DiagramCanvas'
import { pageMeta } from '@/lib/metadata'

export const metadata = pageMeta({
  title: 'Cosmonus — Intelligence Engineering',
  description: 'We engineer intelligent software for organizations whose hardest decisions still depend on a person reading five systems at once. Reasoning systems, knowledge systems, spatial intelligence, and the architecture that carries them.',
  path: '/',
})

const STACK_LAYERS = [
  {
    name: 'Signals',
    tag: 'Ingestion',
    body: 'The operation as it actually arrives — partial, contradictory, spread across a dozen systems that were never built to talk to each other.',
    detail: 'Schemas drift between releases. The same customer exists under three different identifiers. Half the records arrive late and a few never arrive at all. This layer settles those disagreements before anything above it is asked to trust them.',
  },
  {
    name: 'Context',
    tag: 'State',
    body: 'What happened before. A decision made without memory of the last one repeats the same mistake in a new session.',
    detail: 'Session state, case history, and entity resolution across time — so that “this customer” and “that account” stay the same thing as records pile up over months rather than drifting into two.',
  },
  {
    name: 'Reasoning',
    tag: 'Inference',
    body: 'Weighing evidence, resolving conflicting signals, and working through the cases that match no rule anyone wrote in advance.',
    detail: 'A model proposes; explicit rules and constraints bound what it is allowed to conclude. That pairing is what makes an output traceable to a reason rather than to a probability — the difference between a system you can deploy and one you can only demo.',
  },
  {
    name: 'Decision',
    tag: 'Action',
    body: 'Committing to an action, recording why, and staying accountable when someone asks to see the reasoning months later.',
    detail: 'The record has to survive someone asking why six months on, with the model retrained twice since — and it has to support a rollback when the world proves the call wrong.',
  },
]

const CAPABILITY_GROUPS = [
  {
    title: 'Reasoning & decision systems',
    body: 'Encoding how a judgment should actually be made, so the person cross-checking five systems before every call stops being the bottleneck.',
    items: ['Reasoning engines', 'Agent orchestration', 'Forecasting', 'Workflow automation'],
  },
  {
    title: 'Knowledge & data unification',
    body: 'Turning information trapped in documents, tickets, and one person’s memory into something a system can search, relate, and reason over.',
    items: ['Knowledge graphs', 'Data integration', 'Entity resolution'],
  },
  {
    title: 'Spatial & location intelligence',
    body: 'Making position, geometry, and movement into structured facts a system can query — not just coordinates sitting in a column.',
    items: ['Geospatial reasoning', 'Movement & tracking', 'Real-world coordinates'],
  },
  {
    title: 'Production architecture & oversight',
    body: 'The part that decides whether any of the above survives contact with a real operation at 2am, and whether anyone can defend it afterwards.',
    items: ['Distributed systems', 'Explainability & audit', 'Human oversight interfaces'],
  },
]

export default function Home() {
  return (
    <>
      {/* 01 — Hero */}
      <section className="section section--hero">
        <div className="container">
          <div className="hero__inner">
            <div className="eyebrow">Intelligence engineering</div>
            <h1 className="display hero__title">
              <span className="hero__title-line">Software follows instructions.</span>
              <span className="hero__title-line">Intelligence understands the world.</span>
            </h1>
            <div className="hero__copy">
              <p className="body-lg hero__lede">
                We engineer intelligent software for organizations whose hardest decisions still
                depend on a person reading five systems at once.
              </p>
              <p className="body hero__support">
                Reasoning systems, knowledge systems, spatial intelligence, and the production
                architecture that carries them. AI is one component, chosen deliberately, among many.
              </p>
            </div>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                <span>Start a conversation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="btn btn--ghost">See what we&rsquo;ve built</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual__frame">
              <div className="hero-visual__label">
                <span>Raw information</span>
                <span>Intelligence layer</span>
                <span>Knowledge</span>
              </div>
              <div className="hero-visual__canvas-wrap">
                <IntelligenceCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — What we engineer */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">01</span> What we engineer</div>
            <h2 className="section-title">Four kinds of system. Most projects need more than one.</h2>
            <p className="body">
              Software that only records is cheap and everywhere. What stays expensive is software
              that reads context, reasons over incomplete information, and can explain the decision
              it made afterwards.
            </p>
          </div>
          <div className="cap-groups" data-reveal>
            {CAPABILITY_GROUPS.map((g, i) => (
              <div key={g.title} className="cap-group">
                <span className="cap-group__n mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="cap-group__title">{g.title}</h3>
                <p className="cap-group__body">{g.body}</p>
                <ul className="cap-group__items">
                  {g.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Selected systems */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">02</span> Selected systems</div>
            <h2 className="section-title">We put our own name on the hard ones first.</h2>
            <p className="body">
              Anyone can claim a system reasons well. We pick problems where a bad decision has a
              real cost, ship them under our own name, and let anyone inspect the result.
            </p>
          </div>

          <div data-reveal>
            <article className="case">
              <div className="case__content">
                <div className="case__meta">
                  <span className="case__index">01 /</span>
                  <span className="case__name">StayOnMap</span>
                  <span className="case__status case__status--live">In production</span>
                </div>
                <h3 className="case__title">Rental infrastructure without brokers.</h3>
                <p className="body case__body">
                  India&rsquo;s rental market runs on brokers because nobody solved trust between two
                  strangers. StayOnMap replaces that judgment with an engineered one, so owners and
                  tenants connect directly on a live map with no intermediary.
                </p>
                <div className="case__spec">
                  <div className="case__spec-row">
                    <span className="case__spec-k">Discovery</span>
                    <span className="case__spec-v">Map-first, every listing placed in real coordinates</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Trust</span>
                    <span className="case__spec-v">Twelve live signals compounding into one score per listing</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Fraud</span>
                    <span className="case__spec-v">An agent that flags a listing before a tenant ever visits</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Closing</span>
                    <span className="case__spec-v">Direct owner-to-tenant chat, scheduling, and lease</span>
                  </div>
                </div>
                <div className="case__actions">
                  <Link href="/work/stayonmap" className="btn btn--ghost">
                    <span>Explore the system</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="case__visual">
                <DiagramCanvas
                  variant="lease"
                  ratio="4/3"
                  label="Flow chart from owner to tenant: a listing clears the twelve-signal trust engine, flagged listings drop out, and the lease closes directly with no broker"
                />
              </div>
            </article>

            <article className="case">
              <div className="case__content">
                <div className="case__meta">
                  <span className="case__index">02 /</span>
                  <span className="case__name">Traffic Intelligence</span>
                  <span className="case__status">In development</span>
                </div>
                <h3 className="case__title">Roads that notice.</h3>
                <p className="body case__body">
                  A city has thousands of traffic cameras and almost no one watching them. Every
                  vehicle becomes a track with a heading and a speed in real metres, tested against
                  explicit rules rather than a model&rsquo;s hunch.
                </p>
                <div className="case__spec">
                  <div className="case__spec-row">
                    <span className="case__spec-k">Detection</span>
                    <span className="case__spec-v">Runs at the camera; a foundation model reviews only what fires</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Reasoning</span>
                    <span className="case__spec-v">Spatial rules over tracks, not frame-by-frame classification</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Coverage</span>
                    <span className="case__spec-v">Eleven violation and incident classes in the first version</span>
                  </div>
                  <div className="case__spec-row">
                    <span className="case__spec-k">Evidence</span>
                    <span className="case__spec-v">Every event keeps its clip, its track, and the rule behind it</span>
                  </div>
                </div>
                <div className="case__actions">
                  <Link href="/work/traffic-intelligence" className="btn btn--ghost">
                    <span>Explore the system</span>
                    <span className="btn__arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="case__visual">
                <DiagramCanvas
                  variant="intersection"
                  ratio="4/3"
                  label="Schematic junction seen from above, tracked vehicles moving through lanes, one wrong-way vehicle highlighted in violet with its track number and heading"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 04 — The intelligence architecture */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">03</span> The architecture</div>
            <h2 className="section-title">Four layers between a raw signal and a decision that holds.</h2>
            <p className="body">
              Every system we build sits on the same four layers, whether it is scoring a listing,
              routing a fleet, or reading a junction. The layer that fails is almost never the model.
            </p>
          </div>
          <div data-reveal>
            <LayeredStack layers={STACK_LAYERS} />
          </div>
        </div>
      </section>

      {/* 05 — How we work */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">04</span> How we work</div>
            <h2 className="section-title">Architecture and data first. Model selection is a week of the project.</h2>
            <p className="body">
              We start from what the decision actually requires — who makes it today, on what
              information, and what it costs when it&rsquo;s wrong — before drawing an architecture for
              it. Most reasoning failures are data failures wearing a disguise.
            </p>
            <p className="body">
              Every automated decision keeps a trail back to the evidence and logic that produced
              it. A system that can&rsquo;t explain a decision isn&rsquo;t ready to make one.
            </p>
            <div className="hero__actions" style={{ marginTop: '0.75rem' }}>
              <Link href="/approach" className="btn btn--ghost">
                <span>Read the full approach</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Final CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head section-head--cta" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Cosmonus</div>
            <h2 className="section-title">Bring us a decision. We&rsquo;ll tell you what it takes to engineer it.</h2>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn--primary">
                <span>Start a conversation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
