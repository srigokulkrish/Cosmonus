import ContactForm from '@/components/ContactForm'

const TRUST_PILLS = [
  'Free consultation',
  'Reply within 24 h',
  'No commitment required',
]

const FAQ = [
  { q: 'How quickly will you reply?', a: 'Within one business day — always. You\'ll hear from a real person, not an autoresponder.' },
  { q: 'Do you take on small projects?', a: 'Yes. Some of our best work has come from focused, small-scope projects. We\'ll tell you honestly if something is too small to be worth your investment in an agency.' },
  { q: 'What information should I include?', a: 'As much or as little as you have. A rough idea of what you need, your timeline, and a budget range is enough to start. We\'ll ask the right questions from there.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work async-first and are set up to collaborate across time zones. Most of our process is documented and transparent, so location rarely matters.' },
]

const NEXT_STEPS = [
  { n: '01', title: 'We review your brief', body: 'A team member reads your message and researches your space before replying.' },
  { n: '02', title: 'You get a tailored reply', body: 'Within one business day — initial thoughts, timeline estimate, and suggested next steps.' },
  { n: '03', title: 'Discovery call', body: 'A 30-minute call to align on goals, scope, and whether we\'re the right fit.' },
]

export const metadata = {
  title: 'Contact Cosmonus | Start a Project',
  description: 'Ready to build something? Get in touch with the Cosmonus team. We respond within 24 hours and start every engagement with a free strategy call.',
  keywords: ['contact cosmonus', 'hire digital agency', 'start a project', 'get a quote', 'web development contact'],
  openGraph: {
    title: 'Contact Cosmonus | Start a Project',
    description: 'Ready to build something? We respond within 24 hours.',
    url: 'https://cosmonus.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cosmonus',
    description: 'Ready to build something? We respond within 24 hours.',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="contact-hero__title">Let&apos;s build something<br />together.</h1>
          <p className="lead contact-hero__lead">
            Tell us about your project. We&apos;ll get back within one business day
            with next steps, timelines, and a clear path forward.
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
            <h2 className="contact-faq__title">Questions people usually ask first.</h2>
          </div>
          <div className="contact-faq__grid">
            {FAQ.map((f) => (
              <div key={f.q} className="contact-faq__item">
                <h4 className="contact-faq__q">{f.q}</h4>
                <p className="contact-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
