import Link from 'next/link'

export const metadata = {
  title: 'About Cosmonus',
  description: 'Cosmonus is a founder-led intelligence engineering company. We build systems that understand an operation, reason over its data, and make decisions accountable — designed from first principles, proven in production.',
  alternates: { canonical: '/about' },
}

const VALUES = [
  { title: 'Rigor', body: 'We understand a problem before we write code for it. A system that reasons about your business has to be built by someone who reasoned about it first.' },
  { title: 'Transparency', body: 'Our systems explain their decisions, and so do we — you always know what was built, why, and where it stands.' },
  { title: 'Accountability', body: 'We only take on systems we can stand behind in production, then we stand behind them.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">About Cosmonus</div>
            <h1 className="page-hero__title">We don’t build software. We engineer intelligence.</h1>
            <p className="body-lg page-hero__lede">
              Every business runs on decisions its software can’t make — so people make them,
              slowly, from data spread across ten systems. Cosmonus builds systems that understand
              the operation, reason over the data, and make those decisions accountable, designed
              from first principles rather than stitched together from off-the-shelf tools.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — Why we exist */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--wide">
            <div className="eyebrow"><span className="eyebrow__num">01</span> Why we exist</div>
            <h2 className="section-title">Built on a conviction: software should think, not just record.</h2>
          </div>
          <div className="grid-2" data-reveal>
            <p className="body">
              Every company we worked at had the same gap. The data existed. The answers were in
              it. And still, every decision that mattered was made by a person reading a
              dashboard a week too late — because the software could store the business, but
              couldn’t understand it.
            </p>
            <p className="body">
              Cosmonus exists to close that gap. We build systems that hold a model of the
              operation and reason over it — and StayOnMap, our first product, is that
              conviction running in production, not a thesis in a deck.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — The founders */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">02</span> The founders</div>
            <h2 className="section-title">Two founders, one standard of accountability.</h2>
          </div>
          <div className="founders" data-reveal>
            <div className="founder">
              <div className="founder__identity">
                <img src="/images/founder.jpg" alt="Sri Gokul Krishnan" className="founder__photo" width="340" height="453" />
                <h3 className="founder__name">Sri Gokul Krishnan</h3>
                <p className="founder__role">Co-founder — design &amp; engineering</p>
                <p className="founder__location mono">Chennai, India</p>
                <a href="https://srigokulkrishnan.com" target="_blank" rel="noopener noreferrer" className="founder__link">
                  srigokulkrishnan.com →
                </a>
              </div>
              <div className="founder__content">
                <p className="body">
                  Nine years as a product designer, spent teaching myself the rest of the stack
                  because I got tired of waiting on handoffs to see an idea actually run. The tools
                  change; what doesn’t is starting from what the decision requires, not from
                  whichever framework is loudest this year.
                </p>
                <p className="body">
                  Cosmonus stays deliberately small — every system that ships has a named owner,
                  and we’d rather stay small and correct than large and diluted. How that shows up
                  in the engineering itself is covered on the <Link href="/technology">technology</Link> page.
                </p>
              </div>
            </div>
            <div className="founder">
              <div className="founder__identity">
                <div className="founder__photo founder__photo--pending" aria-hidden="true">Y</div>
                <h3 className="founder__name">Yuvraj</h3>
                <p className="founder__role">Co-founder — operations &amp; business</p>
              </div>
              <div className="founder__content">
                <p className="body">
                  Runs the operational and commercial side of Cosmonus — partnerships, agreements,
                  and the day-to-day running of the company — so the engineering stays heads-down
                  on the systems themselves.
                </p>
                <p className="body">
                  Same conviction, different lens: a system only matters once it survives contact
                  with a real operation — its budgets, its timelines, and the people who have to
                  trust it. Yuvraj owns that contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — What we stand for */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow__num">03</span> What we stand for</div>
            <h2 className="section-title">Three things that don’t move, regardless of the project.</h2>
          </div>
          <div className="principles principles--3" data-reveal>
            {VALUES.map((v, i) => (
              <div key={v.title} className="principle">
                <span className="principle__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="principle__title">{v.title}</h3>
                <p className="principle__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 0 }} data-reveal>
            <div className="eyebrow">Work with us</div>
            <h2 className="section-title">We’re not hiring right now — but if this is the problem you want to spend years on, we want to hear from you.</h2>
            <div className="hero__actions" style={{ marginTop: '0.5rem' }}>
              <Link href="/careers" className="btn btn--primary">
                <span>Read careers</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn btn--ghost">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
