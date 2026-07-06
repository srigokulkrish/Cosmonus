import Link from 'next/link'
import IntelligenceCanvas from '@/components/IntelligenceCanvas'
import LayeredStack from '@/components/LayeredStack'
import CapabilitiesList from '@/components/CapabilitiesList'
import StripedPlaceholder from '@/components/StripedPlaceholder'

export const metadata = {
  title: 'Cosmonus — Intelligence Engineering',
  description: 'Cosmonus engineers intelligent software systems from first principles — software that reads context, reasons over information, automates hard decisions, and improves with use.',
  alternates: { canonical: '/' },
}

const STACK_LAYERS = [
  {
    name: 'Data',
    tag: 'Ingestion',
    body: 'Ingests the operation as it actually happens — messy, partial, arriving from a dozen systems that were never built to talk to each other.',
  },
  {
    name: 'Context & memory',
    tag: 'State',
    body: 'Holds what happened before. A decision made without memory of the last one repeats the same mistake in a new session.',
  },
  {
    name: 'Reasoning',
    tag: 'Inference',
    body: 'Weighs evidence, resolves conflicting signals, and works through the cases that don’t match a rule anyone wrote in advance.',
  },
  {
    name: 'Decisions',
    tag: 'Action',
    body: 'Commits to an action, records why, and stays accountable when someone asks to see the reasoning behind it later.',
  },
]

const CAPABILITIES = [
  {
    title: 'Reasoning engines',
    body: 'Removes the person manually cross-checking five systems before every judgment call, by encoding how that judgment should actually be made.',
  },
  {
    title: 'Agent orchestration',
    body: 'Removes the queue of repetitive decisions waiting on someone with the right context, by giving software that context directly.',
  },
  {
    title: 'Knowledge systems',
    body: 'Removes information trapped in documents, tickets, and one person’s memory, by turning it into something a system can search and reason over.',
  },
  {
    title: 'Spatial & location intelligence',
    body: 'Removes operational data that has a location attached but no way to reason over where things actually are, relative to each other.',
  },
  {
    title: 'Distributed systems architecture',
    body: 'Removes the system that works fine until it needs to scale past one server, one region, or one team.',
  },
  {
    title: 'Forecasting & prediction',
    body: 'Removes decisions made on last quarter’s numbers, by reasoning over what is actually happening right now.',
  },
  {
    title: 'Workflow automation with judgment',
    body: 'Removes automation that breaks the moment a case doesn’t fit the happy path, by giving it a way to handle the exception instead of failing on it.',
  },
  {
    title: 'Explainability & audit',
    body: 'Removes the black box nobody can defend to a regulator, an auditor, or a customer who asks why.',
  },
  {
    title: 'Integration & data unification',
    body: 'Removes the same fact living in six systems with six different answers, by giving the business one version it can trust.',
  },
  {
    title: 'Interfaces for human oversight',
    body: 'Removes the system nobody trusts, by giving people a clear view into what it decided and why, and a way to intervene.',
  },
]

const PRINCIPLES = [
  { title: 'First principles, not frameworks', body: 'We start from what the decision actually requires, not from whichever library made the headlines this year.' },
  { title: 'Context before code', body: 'We understand how a business runs before we draw an architecture diagram for it.' },
  { title: 'Reasoning must show its work', body: 'A system that can’t explain a decision isn’t ready to make one.' },
  { title: 'Production is the only proof', body: 'A demo proves a slide works. Production proves a system does.' },
  { title: 'Architecture is a decision, not a default', body: 'We choose the database, the runtime, the topology — deliberately, for this problem.' },
  { title: 'Intelligence compounds', body: 'Every case a system sees should make the next one easier, not just wait for the next release.' },
  { title: 'Accountability is a feature', body: 'Every automated decision keeps a trail back to the data and reasoning behind it.' },
  { title: 'Simplicity survives contact with reality', body: 'The simplest system that correctly handles the hard cases outlives the clever one that doesn’t.' },
]

const PROCESS = [
  { title: 'Discovery', reason: 'Understand the decision before touching a keyboard — who makes it today, on what information, and what it costs when it’s wrong.' },
  { title: 'Data mapping', reason: 'Most reasoning failures are data failures in disguise. We trace where the truth actually lives before we trust it.' },
  { title: 'Architecture', reason: 'Intelligence performs only as well as what carries it, so we design the system it runs on before we design the system itself.' },
  { title: 'Reasoning design', reason: 'We decide how the system weighs evidence and handles disagreement before a single model gets involved.' },
  { title: 'Prototype', reason: 'A working sketch against real data surfaces the hard cases faster than a specification ever will.' },
  { title: 'Evaluation', reason: 'We test the reasoning against cases designed to break it, not just the ones designed to pass.' },
  { title: 'Integration', reason: 'Intelligence has to reach the systems people already use, or it never actually gets used.' },
  { title: 'Production hardening', reason: 'The difference between a prototype and a system is what happens when something goes wrong at 2am.' },
  { title: 'Continuous learning', reason: 'We keep watching the system in production and feeding back what it got right and what it got wrong.' },
]

const PROOF = [
  { label: 'StayOnMap / Map View', title: 'Live trust scoring', desc: 'Every rental listing scored across twelve signals before a tenant ever sees it.' },
  { label: 'Reasoning / Trace Viewer', title: 'Decision trace', desc: 'Every automated decision resolves to the evidence and logic that produced it.' },
  { label: 'Orchestration / Console', title: 'Agent orchestration', desc: 'Coordinated agents handling exceptions a fixed workflow would drop.' },
  { label: 'Knowledge / Graph', title: 'Knowledge graph', desc: 'Documents, tickets, and records unified into one queryable structure.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section section--hero">
        <div className="container">
          <div className="hero__inner">
            <div className="eyebrow">Intelligence engineering</div>
            <h1 className="display hero__title">
              <span className="hero__title-line">Software follows instructions.</span>
              <span className="hero__title-line">Intelligence understands the world.</span>
            </h1>
            <p className="body-lg hero__lede">
              <span className="hero__lede-line">Software has always followed instructions: store this, retrieve that, execute in order.</span>
              <span className="hero__lede-line">We build the layer above that — systems that read context, reason over incomplete information, and make decisions they can account for.</span>
              <span className="hero__lede-line">Architecture, distributed systems, spatial computing, and knowledge systems, with AI as one component among many.</span>
            </p>
            <div className="hero__actions">
              <Link href="/technology" className="btn btn--primary">
                <span>Read the technology</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/products/stayonmap" className="btn btn--ghost">See it in production</Link>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-visual__frame">
              <div className="hero-visual__label">
                <span>Raw information</span>
                <span>Intelligence layer</span>
                <span>Knowledge</span>
              </div>
              <div className="hero-visual__canvas-wrap">
                <IntelligenceCanvas />
              </div>
              <p className="hero-visual__caption">
                Unstructured signals enter on the left. The intelligence layer organizes,
                relates, and reasons over them — and structured, decision-ready knowledge
                emerges on the right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — The Problem */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">01</span> The problem</div>
            <h2 className="section-title">Most software only remembers. It doesn’t understand.</h2>
          </div>

          <div className="problem-grid">
            <div className="problem-col problem-col--dim" data-reveal>
              <div className="problem-col__kicker eyebrow">Software records</div>
              <h3 className="problem-col__title">What most systems do</h3>
              <ul>
                <li>Stores what happened, exactly as it was entered</li>
                <li>Executes fixed rules, regardless of the case in front of it</li>
                <li>Waits for a person to notice something and act</li>
                <li>Breaks quietly when the world changes shape</li>
                <li>Needs a human to interpret what it actually means</li>
              </ul>
            </div>
            <div className="problem-grid__rule" />
            <div className="problem-col" data-reveal>
              <div className="problem-col__kicker eyebrow">Intelligence understands</div>
              <h3 className="problem-col__title">What we build instead</h3>
              <ul>
                <li>Reads the surrounding context before it acts</li>
                <li>Reasons over incomplete or conflicting information</li>
                <li>Adapts as the ground truth shifts underneath it</li>
                <li>Explains the decision it made, and why</li>
                <li>Gets more capable with every case it sees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — The Intelligence Layer */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">02</span> The intelligence layer</div>
            <h2 className="section-title">Four layers between raw input and a decision that holds.</h2>
            <p className="body">
              Every system we build sits on the same four layers, whether it is forecasting demand,
              routing a fleet, or approving a claim. Open each one below.
            </p>
          </div>
          <div data-reveal>
            <LayeredStack layers={STACK_LAYERS} />
          </div>
        </div>
      </section>

      {/* 03 — What We Build */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">03</span> What we build</div>
            <h2 className="section-title">Ten capabilities. Each one removes a specific cost.</h2>
            <p className="body">Expand any capability for the problem it exists to remove.</p>
          </div>
          <div data-reveal>
            <CapabilitiesList items={CAPABILITIES} />
          </div>
        </div>
      </section>

      {/* 04 — Products */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">04</span> Products</div>
            <h2 className="section-title">Built to prove the approach in production.</h2>
          </div>

          <div className="feature" data-reveal>
            <div className="feature__content">
              <div className="eyebrow feature__eyebrow">Product — StayOnMap</div>
              <h3 className="feature__title">The trust problem brokers used to solve, engineered instead.</h3>
              <p className="body feature__body">
                India’s rental market runs on brokers because nobody solved trust. StayOnMap
                treats every listing as a decision to be reasoned over — twelve live signals
                compounding into a trust score, an agent watching for fraud — so owners and
                tenants can connect directly, on a live map, without an intermediary.
              </p>
              <ul className="feature__list">
                <li>Live trust scoring across twelve signals per listing</li>
                <li>An autonomous agent that flags fraud before a tenant ever visits</li>
                <li>Direct owner-to-tenant leases, chat, and scheduling — no broker</li>
              </ul>
              <Link href="/products/stayonmap" className="btn btn--ghost">
                <span>See StayOnMap</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="feature__visual">
              <StripedPlaceholder label="StayOnMap / product screen" ratio="4/3" />
            </div>
          </div>

          <p className="body" style={{ marginTop: '2.5rem', fontSize: '0.875rem' }}>
            StayOnMap is the first product built on this approach. More are in progress.
          </p>
        </div>
      </section>

      {/* 05 — Engineering Philosophy */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">05</span> Engineering philosophy</div>
            <h2 className="section-title">Eight principles that don’t change per project.</h2>
          </div>
          <div className="principles" data-reveal>
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Process */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">06</span> Process</div>
            <h2 className="section-title">Nine stages. Each one exists for a reason.</h2>
          </div>
          <div className="process" data-reveal>
            {PROCESS.map((step, i) => (
              <div key={step.title} className="process__step">
                <span className="process__step-num mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-reason">{step.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Proof */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">07</span> Proof</div>
            <h2 className="section-title">What this looks like once it’s running.</h2>
          </div>
          <div className="proof-grid" data-reveal>
            {PROOF.map((item) => (
              <div key={item.title} className="proof-item">
                <StripedPlaceholder label={item.label} className="proof-item__frame" />
                <p className="proof-item__caption"><strong>{item.title}</strong> — {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Vision */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">08</span> Vision</div>
            <h2 className="section-title">Software is becoming something that understands, not just something that executes.</h2>
            <p className="body">
              For fifty years, software has meant instructions: precise, literal, and blind to
              anything the instructions didn’t anticipate. That is changing. The systems worth
              building now read context the way a capable person would, reason through cases no
              one wrote a rule for, and stay accountable for the decisions they make.
            </p>
            <p className="body">
              Cosmonus exists to engineer that layer — deliberately, from first principles,
              for organizations whose decisions are too important to leave to a static rulebook.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Cosmonus</div>
            <h2 className="section-title">Bring us a decision. We’ll tell you what it takes to engineer it.</h2>
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
