import Link from 'next/link'
import LayeredStack from '@/components/LayeredStack'

export const metadata = {
  title: 'Technology — How We Engineer Intelligence',
  description: 'Cosmonus engineers intelligent software from first principles: distributed systems, spatial computing, knowledge systems, and reasoning — with a foundation model as one component among many.',
  alternates: { canonical: '/technology' },
}

const STACK_LAYERS = [
  {
    name: 'Data',
    tag: 'Ingestion',
    body: 'Real operational data rarely arrives clean. Schemas drift between releases, records show up partial, and the same entity lives under different names in different systems of record. This layer resolves those disagreements before anything downstream is asked to reason over them.',
  },
  {
    name: 'Context & memory',
    tag: 'State',
    body: 'A decision needs to know what happened before it — the session, the account, the last five cases like this one. This layer keeps session state and case history, and resolves entities across time so "this customer" and "that account" stay the same thing as records accumulate.',
  },
  {
    name: 'Reasoning',
    tag: 'Inference',
    body: 'Learned models are good at pattern-matching and bad at guaranteeing a rule. This layer combines both: a model proposes, explicit constraints and rules bound what it is allowed to conclude, so the output is traceable back to a reason rather than a probability alone.',
  },
  {
    name: 'Decisions',
    tag: 'Action',
    body: 'Committing to an action means keeping a record of the version of the system, the evidence, and the logic that produced it — with the ability to roll it back if the world proves it wrong. Without that trail, a decision is a guess with better production values.',
  },
]

const DISCIPLINES = [
  { title: 'Distributed systems architecture', body: 'Deciding how state, computation, and failure are distributed across services — before deciding what any single service does.' },
  { title: 'Spatial computing', body: 'Turning position, geometry, and movement into structured facts a system can query and reason over, not just coordinates on a map.' },
  { title: 'Knowledge systems & graphs', body: 'Modeling entities and their relationships as a graph that stays consistent as new information arrives and old information ages out.' },
  { title: 'Reasoning & inference', body: 'Choosing where a learned model helps and where an explicit rule or constraint should bound it, case by case.' },
  { title: 'Data engineering & integration', body: 'Getting the truth out of the systems that already hold it, reliably, without asking the business to change how it operates.' },
  { title: 'Interface & oversight design', body: 'Giving the people accountable for a decision a clear view into what the system saw and concluded, and a way to intervene.' },
]

export default function TechnologyPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Technology</div>
            <h1 className="page-hero__title">How we actually build this.</h1>
            <p className="body-lg page-hero__lede">
              There is no single model or library that makes a system intelligent. What we build
              is a stack: data engineering, distributed systems, spatial computing, knowledge
              systems, and reasoning, with a foundation model doing one job inside it — not
              standing in for the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">01</span> The stack, expanded</div>
            <h2 className="section-title">The same four layers, one level deeper.</h2>
            <p className="body">
              Home covers this in brief. This is what each layer actually has to contend with.
            </p>
          </div>
          <div data-reveal>
            <LayeredStack layers={STACK_LAYERS} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">02</span> Engineering disciplines</div>
            <h2 className="section-title">AI is one component among several.</h2>
          </div>
          <div className="principles" data-reveal>
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

      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">03</span> Why not just use a model</div>
            <h2 className="section-title">A foundation model is a small part of a working system.</h2>
            <p className="body">
              Most of the effort in a system that reasons well goes into the parts that never
              show up in a model card: getting the data trustworthy, keeping context consistent
              across sessions, and building an audit trail that holds up when someone asks why a
              decision was made. The model is the part that generalizes. Everything around it is
              the part that makes the generalization safe to act on.
            </p>
            <p className="body">
              That is why we start engagements with architecture and data, not with model
              selection. Picking a model is usually a week of work. Building the system that
              makes its output trustworthy in production is the rest of the project.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Next</div>
            <h2 className="section-title">See the open questions we haven’t settled, or bring us a system to build.</h2>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/research" className="btn btn--primary">
                <span>Read our research</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn btn--ghost">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
