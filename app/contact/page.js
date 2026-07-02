import ContactForm from '@/components/ContactForm'
import ContactFaqAccordion from '@/components/ContactFaqAccordion'

const TRUST_PILLS = [
  'Free technical consult',
  'Reply within 24 h',
  'No commitment required',
]


const NEXT_STEPS = [
  { n: '01', title: 'We read your brief', body: 'We map your data and the decision it should drive — so our first reply is about your problem, not our pitch.' },
  { n: '02', title: 'You get a straight answer', body: 'Within one business day: where the leverage is, whether we fit, and what the first step costs.' },
  { n: '03', title: 'We deploy with you', body: 'We embed with your team, stand the first version up on your data, and stay until it runs in production.' },
]

export const metadata = {
  title: 'Contact Cosmonus | Talk to the Intelligence Team',
  description: 'Your data lives in ten systems and every decision waits on all of them. Tell us the decision you want to automate — we reply within a business day, starting with a free technical consult.',
  keywords: ['contact cosmonus', 'intelligence platform', 'AI infrastructure', 'enterprise intelligence', 'decision automation contact'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Cosmonus | Talk to the Intelligence Team',
    description: 'Tell us the decision your data should be driving. We reply within a business day.',
    url: 'https://cosmonus.com/contact',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cosmonus',
    description: 'Tell us the decision your data should be driving. We reply within a business day.',
    images: ['/images/ICON.png'],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="contact-hero__title">The data is there.<br />The decision is waiting.</h1>
          <p className="lead contact-hero__lead">
            It sits across ten systems, and every call your team makes waits on all of them.
            Tell us the decision you want to automate and what feeds it &mdash; we&apos;ll
            reply within one business day.
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
            <h2 className="contact-faq__title">The questions you&apos;re probably weighing right now.</h2>
          </div>
          <ContactFaqAccordion />
        </div>
      </section>
    </>
  )
}
