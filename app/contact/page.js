import ContactForm from '@/components/ContactForm'
import FAQAccordion from '@/components/FAQAccordion'

const TRUST_ITEMS = ['Reply within 24h', 'Talk to an engineer directly', 'No commitment required']

const NEXT_STEPS = [
  { n: '01', title: 'We study the problem', body: 'We read the message and think about the decision, the data, and the architecture before replying.' },
  { n: '02', title: 'You get an engineering answer', body: 'Within one business day — whether intelligence helps here, and what we’d build first.' },
  { n: '03', title: 'Working session', body: 'A short call to walk the problem together — engineer to engineer, not a sales script.' },
]

const FAQS = [
  { q: 'How is a project priced?', a: 'Project-based, scoped after the first working session — there’s no fixed retainer up front. We tell you what it costs once we understand the decision well enough to be honest about it.' },
  { q: 'How long before something is working?', a: 'A working prototype against real data typically takes weeks. Production hardening — the tests, the oversight, the edge cases — comes after the prototype earns its place.' },
  { q: 'What makes a good fit?', a: 'A real decision with real data behind it. Not a proof-of-concept for its own sake, and not a problem that’s better solved with an off-the-shelf tool.' },
  { q: 'Do you work with early-stage companies?', a: 'Yes, if the decision is real. Stage matters less than whether there’s an actual operation generating the data a system would reason over.' },
  { q: 'Can we sign an NDA before going into detail?', a: 'Yes. Send it over whenever you’re ready to get specific.' },
  { q: 'Who should be our point of contact?', a: 'Ideally someone who can describe how the decision gets made today — technical or not. We can find the architecture; we need the operational truth first.' },
]

export const metadata = {
  title: 'Contact',
  description: 'Tell us the decision your business makes slowly, expensively, or by gut. We reply within one business day, engineer to engineer.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Contact</div>
            <h1 className="page-hero__title">Bring us the decision your software can&rsquo;t make.</h1>
            <p className="body-lg page-hero__lede">
              Every business has one: the call that&rsquo;s made slowly, expensively, or by gut,
              because the software only records and never reasons. Describe it — the decision,
              what feeds it, what it costs you today — and we&rsquo;ll reply within one business day.
            </p>
            <div className="contact-trust-row">
              {TRUST_ITEMS.map((t) => (
                <span key={t} className="eyebrow contact-trust-item">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <ContactForm />
            </div>

            <aside>
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Email</h6>
                <a href="mailto:hello@cosmonus.com" className="contact-aside__link">hello@cosmonus.com</a>
              </div>
              <div className="contact-aside__block">
                <h6 className="contact-aside__head">Working hours</h6>
                <p className="contact-aside__text">Mon – Fri, 9:00 – 18:00 IST</p>
              </div>

              <div className="contact-aside__steps">
                {NEXT_STEPS.map((s) => (
                  <div key={s.n} className="contact-aside__step">
                    <span className="contact-aside__step-n mono">{s.n}</span>
                    <div>
                      <p className="contact-aside__step-title">{s.title}</p>
                      <p className="contact-aside__step-body">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">What people ask before they work with us.</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
    </>
  )
}
