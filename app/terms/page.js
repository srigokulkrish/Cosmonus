export const metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern use of cosmonus.com and Cosmonus products, including StayOnMap.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="page-hero">
          <div className="eyebrow">Legal</div>
          <h1 className="page-hero__title">Terms of Use</h1>
        </div>

        <div className="legal-doc" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p className="legal-doc__updated mono">Last updated — January 2026</p>

          <p>
            These terms govern your use of cosmonus.com and the products we build, including
            StayOnMap. By using either, you agree to them. This document has not been reviewed by
            a lawyer; treat it as a plain-language statement of how we operate, not as
            professionally drafted legal advice.
          </p>

          <h2>1. Acceptance of terms</h2>
          <p>
            By visiting cosmonus.com, creating a StayOnMap account, or otherwise using anything we
            build, you agree to these terms. If you don&apos;t agree, please don&apos;t use the
            service.
          </p>

          <h2>2. Description of service</h2>
          <p>
            Cosmonus is an engineering studio. Cosmonus.com describes the systems we build for
            clients; StayOnMap is our own product — a broker-free rental marketplace connecting
            property owners and tenants directly, with trust and fraud scoring built in.
          </p>

          <h2>3. Use of StayOnMap</h2>
          <ul>
            <li>You&apos;re responsible for the accuracy of any listing or profile information you post</li>
            <li>Fraudulent, misleading, or duplicate listings are prohibited</li>
            <li>StayOnMap runs automated trust and risk scoring on listings, and may suspend a listing automatically when it crosses a risk threshold, without prior notice</li>
            <li>You&apos;re responsible for your own conduct in messages, visits, and lease agreements arranged through the platform</li>
          </ul>

          <h2>4. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Scrape, copy, or systematically extract data from the site or product</li>
            <li>Attempt to disrupt, overload, or gain unauthorized access to any system</li>
            <li>Post listings for properties you don&apos;t have the right to list</li>
            <li>Use the service for any unlawful purpose</li>
          </ul>

          <h2>5. Intellectual property</h2>
          <p>
            The Cosmonus name, site content, and product design belong to Cosmonus. Listing
            content you post remains yours; by posting it, you give us the right to display it
            within the product.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            Cosmonus.com and StayOnMap are provided as-is. Automated trust and risk scoring is a
            signal, not a guarantee — it reduces exposure to fraud, but it is not infallible, and
            we don&apos;t warrant that any listing, score, or reasoning output is error-free.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Cosmonus is not liable for indirect,
            incidental, or consequential damages arising from your use of the site or product,
            including disputes between tenants and owners arranged through StayOnMap.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may suspend or terminate access to StayOnMap for accounts that violate these terms,
            particularly around fraud or abuse, with or without notice depending on severity.
          </p>

          <h2>9. Governing law</h2>
          <p>These terms are governed by the laws of India.</p>

          <h2>10. Changes to these terms</h2>
          <p>
            We may update these terms as the product changes. Continued use after an update means
            you accept the revised terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:srigokulkrishnan@gmail.com">srigokulkrishnan@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
