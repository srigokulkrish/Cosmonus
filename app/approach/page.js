import Link from 'next/link'
import LayeredStack from '@/components/LayeredStack'
import CapabilitiesList from '@/components/CapabilitiesList'
import DiagramCanvas from '@/components/DiagramCanvas'
import { pageMeta } from '@/lib/metadata'

export const metadata = pageMeta({
  title: 'Approach',
  description: 'How Cosmonus builds: architecture and data before model selection, eight principles that do not change per project, and a nine-stage process where each stage exists for a reason.',
  path: '/approach',
})

const STACK_LAYERS = [
  {
    name: 'Signals',
    tag: 'Ingestion',
    body: 'Real operational data rarely arrives clean. Schemas drift between releases, records show up partial, and the same entity lives under different names in different systems of record.',
    detail: 'This layer resolves those disagreements before anything downstream is asked to reason over them. Most of the work is unglamorous — reconciling identifiers, deciding which source wins when two disagree, and deciding what to do with a record that is merely late rather than wrong.',
  },
  {
    name: 'Context',
    tag: 'State',
    body: 'A decision needs to know what happened before it — the session, the account, the last five cases like this one.',
    detail: 'This layer keeps session state and case history, and resolves entities across time so “this customer” and “that account” stay the same thing as records accumulate. Without it, every decision is a first decision, and the system repeats mistakes it has already made.',
  },
  {
    name: 'Reasoning',
    tag: 'Inference',
    body: 'Learned models are good at pattern-matching and bad at guaranteeing a rule. We combine both rather than choosing.',
    detail: 'A model proposes; explicit constraints and rules bound what it is allowed to conclude. The output is then traceable back to a reason rather than to a probability alone — which is the difference between a system you can deploy and a system you can only demo.',
  },
  {
    name: 'Decision',
    tag: 'Action',
    body: 'Committing to an action means keeping a record of the system version, the evidence, and the logic that produced it.',
    detail: 'That record has to survive the moment someone asks why, months later, with the model retrained twice since. It also has to support a rollback when the world proves the decision wrong. Without that trail, a decision is a guess with better production values.',
  },
]

const CAPABILITIES = [
  { title: 'Reasoning engines', body: 'Removes the person manually cross-checking five systems before every judgment call, by encoding how that judgment should actually be made.' },
  { title: 'Agent orchestration', body: 'Removes the queue of repetitive decisions waiting on someone with the right context, by giving software that context directly.' },
  { title: 'Knowledge systems', body: 'Removes information trapped in documents, tickets, and one person’s memory, by turning it into something a system can search and reason over.' },
  { title: 'Spatial & location intelligence', body: 'Removes operational data that has a location attached but no way to reason over where things actually are, relative to each other.' },
  { title: 'Distributed systems architecture', body: 'Removes the system that works fine until it needs to scale past one server, one region, or one team.' },
  { title: 'Forecasting & prediction', body: 'Removes decisions made on last quarter’s numbers, by reasoning over what is actually happening right now.' },
  { title: 'Workflow automation with judgment', body: 'Removes automation that breaks the moment a case doesn’t fit the happy path, by giving it a way to handle the exception instead of failing on it.' },
  { title: 'Explainability & audit', body: 'Removes the black box nobody can defend to a regulator, an auditor, or a customer who asks why.' },
  { title: 'Integration & data unification', body: 'Removes the same fact living in six systems with six different answers, by giving the business one version it can trust.' },
  { title: 'Interfaces for human oversight', body: 'Removes the system nobody trusts, by giving people a clear view into what it decided and why, and a way to intervene.' },
]

const DISCIPLINES = [
  { title: 'Distributed systems architecture', body: 'Deciding how state, computation, and failure are distributed across services — before deciding what any single service does.' },
  { title: 'Spatial computing', body: 'Turning position, geometry, and movement into structured facts a system can query and reason over, not just coordinates on a map.' },
  { title: 'Knowledge systems & graphs', body: 'Modeling entities and their relationships as a graph that stays consistent as new information arrives and old information ages out.' },
  { title: 'Reasoning & inference', body: 'Choosing where a learned model helps and where an explicit rule or constraint should bound it, case by case.' },
  { title: 'Data engineering & integration', body: 'Getting the truth out of the systems that already hold it, reliably, without asking the business to change how it operates.' },
  { title: 'Interface & oversight design', body: 'Giving the people accountable for a decision a clear view into what the system saw and concluded, and a way to intervene.' },
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

export default function ApproachPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Approach</div>
            <h1 className="page-hero__title">How we actually build this.</h1>
            <p className="body-lg page-hero__lede">
              There is no single model or library that makes a system intelligent. What we build is
              a stack: data engineering, distributed systems, spatial computing, knowledge systems,
              and reasoning, with a foundation model doing one job inside it — not standing in for
              the rest.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — The stack */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">01</span> The stack, expanded</div>
            <h2 className="section-title">The same four layers, one level deeper.</h2>
            <p className="body">
              Home covers this in brief. Expand any layer for what it actually has to contend with.
            </p>
          </div>
          <div data-reveal>
            <LayeredStack layers={STACK_LAYERS} />
          </div>
        </div>
      </section>

      {/* 02 — Principles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">02</span> Engineering philosophy</div>
            <h2 className="section-title">Eight principles that don&rsquo;t change per project.</h2>
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

      {/* 03 — Process */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">03</span> Process</div>
            <h2 className="section-title">Nine stages. Each one exists for a reason.</h2>
          </div>
          <div className="process-flow" data-reveal>
            <DiagramCanvas
              variant="flow"
              chrome
              label="Flow chart of the nine process stages: a pulse moves from discovery to learning, evaluation loops back to prototype, and learning feeds back into discovery"
            />
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

      {/* 04 — Capabilities */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">04</span> Capabilities</div>
            <h2 className="section-title">Ten capabilities. Each one removes a specific cost.</h2>
            <p className="body">Expand any capability for the problem it exists to remove.</p>
          </div>
          <div data-reveal>
            <CapabilitiesList items={CAPABILITIES} />
          </div>
          <div className="cap-figures" data-reveal>
            <div className="proof-item">
              <DiagramCanvas
                variant="orchestration"
                className="proof-item__frame"
                label="Swimlane console diagram with one task rerouted between agent lanes"
              />
              <p className="proof-item__caption"><strong>Agent orchestration</strong> &mdash; coordinated agents handling the exceptions a fixed workflow would drop.</p>
            </div>
            <div className="proof-item">
              <DiagramCanvas
                variant="graph"
                className="proof-item__frame"
                label="Scattered document glyphs resolving into an ordered knowledge graph"
              />
              <p className="proof-item__caption"><strong>Knowledge graph</strong> &mdash; documents, tickets, and records unified into one queryable structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Disciplines */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">05</span> Engineering disciplines</div>
            <h2 className="section-title">AI is one component among several.</h2>
          </div>
          <div className="principles principles--3" data-reveal>
            {DISCIPLINES.map((d, i) => (
              <div key={d.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{d.title}</h3>
                <p className="principle__body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Why not just a model */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--split">
            <div className="eyebrow"><span className="eyebrow__num">06</span> Why not just use a model</div>
            <h2 className="section-title">A foundation model is a small part of a working system.</h2>
            <p className="body">
              Most of the effort in a system that reasons well goes into the parts that never show
              up in a model card: getting the data trustworthy, keeping context consistent across
              sessions, and building an audit trail that holds up when someone asks why a decision
              was made. The model is the part that generalizes. Everything around it is the part
              that makes the generalization safe to act on.
            </p>
            <p className="body">
              That is why we start engagements with architecture and data, not with model selection.
              Picking a model is usually a week of work. Building the system that makes its output
              trustworthy in production is the rest of the project.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head section-head--cta" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Next</div>
            <h2 className="section-title">See the open questions we haven&rsquo;t settled, or bring us a system to build.</h2>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn btn--primary">
                <span>Start a conversation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/research" className="btn btn--ghost">Read our research</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
