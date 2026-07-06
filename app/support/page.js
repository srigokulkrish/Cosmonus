import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata = {
  title: 'Support',
  description: 'Get help with cosmonus.com or StayOnMap, or reach the right person for a project inquiry.',
  alternates: { canonical: '/support' },
}

const FAQS = [
  {
    q: 'How do I reset my StayOnMap password?',
    a: 'Use the "Forgot password" link on the StayOnMap sign-in page to get a reset link by email. If it doesn’t arrive, email srigokulkrishnan@gmail.com from the address on your account and we’ll help directly.',
  },
  {
    q: 'How does trust scoring work?',
    a: 'Every StayOnMap listing is scored across twelve live signals that compound into a trust score, with a separate risk score watching for fraud patterns. See the Products page for a fuller explanation of the reasoning behind it.',
  },
  {
    q: 'How do I report a fraudulent or misleading listing?',
    a: 'Email srigokulkrishnan@gmail.com with the listing link or address and what looked wrong. Reports feed directly into the fraud-review process, and a high-risk listing can be suspended automatically once it crosses the risk threshold.',
  },
  {
    q: 'Is Cosmonus available for custom engineering work?',
    a: 'Yes. If you have a decision your software can’t make today, start a conversation on the Contact page and describe it — we reply within one business day.',
  },
  {
    q: 'Where can I read your privacy policy and terms?',
    a: 'Privacy is at /privacy and the terms of use are at /terms.',
  },
  {
    q: 'Do you offer phone support?',
    a: 'Support runs by email, Monday to Friday, 9:00–18:00 IST. We don’t currently offer phone or live chat support — email gets you a person, not a queue.',
  },
]

export default function SupportPage() {
  return (
    <>
      <section className="section section--hero">
        <div className="container">
          <div className="page-hero">
            <div className="eyebrow">Support</div>
            <h1 className="page-hero__title">Get help, or reach the right person.</h1>
            <p className="body-lg page-hero__lede">
              Whether it&apos;s a question about StayOnMap or a system you want us to build,
              there&apos;s one inbox behind all of it — a person reads every message.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-routes" data-reveal>
            <div className="support-route">
              <h3 className="support-route__title">General questions</h3>
              <p className="support-route__body">
                Anything about Cosmonus, the site, or how we work. We reply within one business
                day.
              </p>
              <a href="mailto:srigokulkrishnan@gmail.com" className="btn btn--ghost btn--sm">srigokulkrishnan@gmail.com</a>
            </div>

            <div className="support-route">
              <h3 className="support-route__title">Working with Cosmonus</h3>
              <p className="support-route__body">
                Bringing us a decision or a system to build. Describe the problem and we&apos;ll
                give an engineering answer, not a sales pitch.
              </p>
              <Link href="/contact" className="btn btn--ghost btn--sm">
                <span>Start a conversation</span>
                <span className="btn__arrow" aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="support-route">
              <h3 className="support-route__title">StayOnMap product support</h3>
              <p className="support-route__body">
                Account, listing, or trust-score questions on the StayOnMap product itself. Reach
                us the same way — just mention StayOnMap in your message.
              </p>
              <a href="mailto:srigokulkrishnan@gmail.com" className="btn btn--ghost btn--sm">srigokulkrishnan@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title">Questions people ask before writing in.</h2>
          </div>
          <div data-reveal>
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>
    </>
  )
}
