import Link from 'next/link'
import DiagramCanvas from '@/components/DiagramCanvas'

export const metadata = {
  title: 'Research — Open Questions Behind the Systems We Ship',
  description: 'The unfinished questions we work on: keeping a knowledge model correct as the world changes, trusting agents to act, reasoning at the edge, and turning vision and space into structured fact.',
  alternates: { canonical: '/research' },
}

const AREAS = [
  { title: 'Knowledge graphs', body: 'Keeping a model of an operation correct as reality shifts underneath it — resolving entities, reconciling conflicting sources, and expiring stale relationships without losing history.' },
  { title: 'Spatial computing', body: 'Reasoning about movement, geometry, and place over time, so position and trajectory become queryable facts rather than raw coordinates.' },
  { title: 'Agentic systems', body: 'Giving long-running agents reliable plans, tool use, and self-verification, so they can act and check their own work against ground truth.' },
  { title: 'Computer vision', body: 'Turning visual streams into structured entities and events that link back to a knowledge model, under real-world noise and occlusion.' },
  { title: 'Edge inference', body: 'Running reasoning close to where signals originate, trading model size, latency, and connectivity so decisions hold up when the network doesn’t.' },
  { title: 'Reasoning systems', body: 'Combining learned models with explicit structure so answers can be traced, constrained, and defended — not just generated.' },
]

const PRINCIPLES = [
  'Every project starts from a real operational problem, not a benchmark.',
  'Work ships into a production system, or it isn’t done.',
  'Results are held to ground truth, not to how good the demo looks.',
]

const OPEN = [
  { title: 'Staying current', body: 'How does a knowledge model stay correct when its sources disagree and the world keeps changing beneath it?' },
  { title: 'Trustworthy autonomy', body: 'How far can an agent act on its own before a person needs to step in — and how does it know where that line is?' },
  { title: 'Intelligence at the edge', body: 'How much reasoning can move to a constrained device without losing the context that lives in the central model?' },
]

export default function ResearchPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Research</div>
            <h1 className="page-hero__title">The questions we haven’t settled yet.</h1>
            <p className="body-lg page-hero__lede">
              A model of an operation can be right on Monday and wrong by Friday — sources
              disagree, entities merge, the world moves underneath it. That gap is where our
              research lives. It isn’t a lab off to the side: every direction feeds back into
              the systems we ship, or it doesn’t continue.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">01</span> Research areas</div>
            <h2 className="section-title">Six directions. Each one feeds the same systems.</h2>
          </div>
          <div className="principles" data-reveal>
            {AREAS.map((a, i) => (
              <div key={a.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{a.title}</h3>
                <p className="principle__body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bleed">
        <div className="container">
          <div className="grid-2 grid-2--media">
            <div data-reveal>
              <div className="eyebrow"><span className="eyebrow__num">02</span> How we work</div>
              <h2 className="section-title" style={{ margin: '1rem 0 1.5rem' }}>Grounded in the problem, shipped into production.</h2>
              <p className="body" style={{ marginBottom: '1.5rem' }}>
                We start where the friction is real — an operational problem someone is living
                with — and work backward to the method that solves it.
              </p>
              <ul className="feature__list">
                {PRINCIPLES.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div data-reveal className="media-fill">
              <DiagramCanvas
                variant="systems"
                label="Layered architecture blueprint of an intelligent system with the reasoning layer highlighted"
                className="diagram-frame--fill"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">03</span> Open problems</div>
            <h2 className="section-title">Questions the field hasn’t settled.</h2>
            <p className="body">
              The hard, unfinished parts — shared across the field, not solved by anyone. We
              state them plainly, because an honest question makes for better work than a
              confident answer.
            </p>
          </div>
          <div className="principles" data-reveal>
            {OPEN.map((item, i) => (
              <div key={item.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{item.title}</h3>
                <p className="principle__body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Work on this</div>
            <h2 className="section-title">Help push these questions forward, or bring us one of your own.</h2>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/careers" className="btn btn--primary">
                <span>See careers</span>
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
