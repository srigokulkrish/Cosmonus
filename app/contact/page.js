import ContactForm from '@/components/ContactForm'
import ContactFaqAccordion from '@/components/ContactFaqAccordion'

const TRUST_PILLS = [
  'You talk to an engineer',
  'Reply within 24 h',
  'No commitment required',
]


const NEXT_STEPS = [
  { n: '01', title: 'We study the problem', body: 'We map the decision you described — what feeds it, who makes it today, and what a system would need to know to make it well.' },
  { n: '02', title: 'You get an engineering answer', body: 'Within one business day: whether intelligence helps here, what the architecture looks like, and an honest read on fit.' },
  { n: '03', title: 'We build it with you', body: 'We embed with your team, stand the first version up on your data, and stay until it earns trust in production.' },
]

export const metadata = {
  title: 'Contact Cosmonus | Bring Us a Hard Problem',
  description: 'Tell us the decision your business makes slowly, expensively, or by gut. We\'ll tell you — within a business day, engineer to engineer — whether an intelligent system can make it better.',
  keywords: ['contact cosmonus', 'intelligence company', 'AI engineering', 'decision systems', 'intelligent software consultation'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Cosmonus | Bring Us a Hard Problem',
    description: 'Tell us the decision your business makes slowly or by gut. We reply within a business day.',
    url: 'https://cosmonus.com/contact',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cosmonus',
    description: 'Tell us the decision your business makes slowly or by gut. We reply within a business day.',
    images: ['/images/ICON.png'],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="contact-hero__title">Bring us the decision<br />your software can&apos;t make.</h1>
          <p className="lead contact-hero__lead">
            Every business has one: the call that&apos;s made slowly, expensively, or by gut, because
            the software only records and never reasons. Describe it &mdash; the decision, what feeds
            it, what it costs you today &mdash; and we&apos;ll reply within one business day.
          </p>
          <div className="contact-trust-row">
            {TRUST_PILLS.map((p) => (
              <span key={p} className="contact-trust-pill">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5.5" stroke="var(--success)" />
                  <path d="M3.5 6l1.75 1.75L8.5 4.5" stroke="var(--success)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrap">
              <ContactForm />
            </div>

            <aside className="contact-aside">
              <div className="contact-aside__inner">
                <div className="contact-aside__block">
                  <h6 className="contact-aside__head">Email</h6>
                  <a href="mailto:hello@cosmonus.com" className="contact-aside__link">hello@cosmonus.com</a>
                </div>
                <div className="contact-aside__block">
                  <h6 className="contact-aside__head">Working hours</h6>
                  <p className="contact-aside__text">Mon – Fri, 9:00 – 18:00 IST</p>
                </div>

                <div className="contact-aside__steps">
                  <h6 className="contact-aside__head" style={{ marginBottom: '1rem' }}>What happens next</h6>
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

                <div className="contact-aside__block">
                  <h6 className="contact-aside__head">Follow</h6>
                  <div className="contact-aside__socials">
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="X (Twitter)">X</a>
                    <a href="#" aria-label="GitHub">GitHub</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq__head">
            <span className="eyebrow">FAQ</span>
            <h2 className="contact-faq__title">What people ask before they work with us.</h2>
          </div>
          <ContactFaqAccordion />
        </div>
      </section>
    </>
  )
}
