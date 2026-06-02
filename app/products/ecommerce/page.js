import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const DELIVERABLES = [
  { title: 'Storefront design', body: 'A buying experience that reflects your brand and removes every friction point between landing and purchasing. Design in service of conversion.' },
  { title: 'Product page architecture', body: 'Pages that answer every question a buyer has before they have to ask it — and that make the decision to add to cart feel obvious.' },
  { title: 'Checkout optimisation', body: 'Frictionless checkout flows tested against drop-off data. Every extra click between intent and purchase costs you sales.' },
  { title: 'Platform setup', body: 'Shopify, WooCommerce, or custom — we build on what fits your business model and catalogue, not what\'s easiest for us.' },
  { title: 'Payments & integrations', body: 'Payment gateways, inventory management, fulfilment providers, and CRM connections built in from day one — not added as an afterthought.' },
  { title: 'Retention systems', body: 'Post-purchase email flows, loyalty mechanics, and re-engagement campaigns that turn one-time buyers into repeat customers.' },
]

const PROCESS = [
  { n: '01', title: 'Merchant audit', body: 'We learn your product, your customers, and your current conversion funnel. Where are people dropping off? What\'s working? We audit before we redesign.' },
  { n: '02', title: 'Strategy', body: 'Platform choice, catalogue structure, pricing display, and the conversion strategy — agreed before any design work starts.' },
  { n: '03', title: 'Design', body: 'Storefront and product page designs built around buying psychology. Every element has a reason: urgency, trust, simplicity, or clarity.' },
  { n: '04', title: 'Build', body: 'Development with performance as a first-class requirement. Slow stores lose sales. We test load times, mobile behaviour, and checkout flow on every device.' },
  { n: '05', title: 'Launch & optimise', body: 'We monitor the first weeks of live data, identify where customers are hesitating, and make adjustments. Launch is the beginning of optimisation, not the end of the project.' },
]

const FAQ = [
  { q: 'Shopify or custom — which is right?', a: 'Shopify is right for most product businesses: fast to launch, proven infrastructure, and a strong app ecosystem. Custom is right when your catalogue, pricing model, or customer experience has requirements Shopify can\'t meet. We\'ll give you an honest answer based on your specific situation.' },
  { q: 'Can you redesign an existing store without rebuilding it from scratch?', a: 'Often yes. We start by auditing what\'s working before changing anything. Sometimes the issue is specific pages or the checkout — not the whole store. We\'re not interested in rebuilding things that don\'t need rebuilding.' },
  { q: 'Do you handle the content — product copy, photos?', a: 'We can advise on product page structure and write copy frameworks, but product photography and final product descriptions typically sit with you — you know your products better than we do. We\'ll tell you exactly what we need from you and when.' },
  { q: 'What does "conversion optimisation" actually mean?', a: 'It means making changes based on data, not assumptions. We set up tracking, identify the pages and steps where customers drop off, form a hypothesis about why, and test a change. It\'s iterative and evidence-driven — not a redesign based on what looks nice.' },
]

const RELATED = [
  { href: '/solutions/web', label: 'Web Development', desc: 'Custom storefronts and web experiences for brands that need more than a template.' },
  { href: '/products/seo', label: 'SEO', desc: 'Get found by people who are already looking for what you sell.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Understand your funnel — where customers come from and where they drop off.' },
]

const WORK = [
  { label: 'Fashion brand store', img: 'Fashion storefront' },
  { label: 'D2C product launch', img: 'D2C product page' },
  { label: 'Store redesign + conversion lift', img: 'Redesigned store' },
]

export const metadata = {
  title: 'E-Commerce Development Services | Cosmonus',
  description: 'Online stores built to sell — from storefront design to checkout optimisation. Cosmonus delivers e-commerce experiences that convert visitors into loyal customers.',
  keywords: ['ecommerce development', 'online store design', 'Shopify development', 'ecommerce agency', 'checkout optimisation', 'product catalogue'],
  openGraph: {
    title: 'E-Commerce Development | Cosmonus',
    description: 'Online stores built to sell — from storefront to checkout.',
    url: 'https://cosmonus.com/products/ecommerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development | Cosmonus',
    description: 'Stores built to sell, from storefront to checkout.',
  },
}

export default function EcommercePage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">E-Commerce</span>
              <h1 className="sol-hero__title">Stores built to sell.</h1>
              <p className="lead sol-hero__lead">
                End-to-end e-commerce — storefront to checkout to retention —
                designed around the moment someone decides to buy, and everything that leads them there.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Build my store</Link>
                <Link href="/work" className="sol-hero__link">See store work →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Store design mockup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-overview">
            <div className="sol-overview__left">
              <span className="eyebrow">Why this matters</span>
              <h2 className="sol-overview__title">Most stores lose customers before they ever reach the checkout.</h2>
            </div>
            <div className="sol-overview__right">
              <p>The average e-commerce conversion rate is around 2–3%. That means for every 100 people who visit your store, 97 leave without buying. Most brands accept this as normal. The ones that don&apos;t — the ones that treat every drop-off as a problem to solve — are the ones that grow. The difference is almost never the product. It&apos;s the experience around it.</p>
              <p>The most common failure points are predictable: a homepage that doesn&apos;t clearly communicate what you sell, product pages that leave obvious questions unanswered, a checkout with too many steps or too little trust. These are design and messaging problems, not product problems — and they&apos;re fixable.</p>
              <p>We build e-commerce sites that treat conversion as the brief from day one. Every layout decision, every piece of copy, and every interaction is evaluated against a single question: does this make it easier or harder for a motivated buyer to complete their purchase? Speed, clarity, and trust are the levers. We pull all three.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="sol-section__title">The full store, not just the front door.</h2>
          </div>
          <div className="sol-grid-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="sol-card">
                <h4 className="sol-card__title">{d.title}</h4>
                <p className="sol-card__body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">From our work</span>
            <h2 className="sol-section__title">Stores designed around the buyer, not the brand.</h2>
          </div>
          <div className="sol-work-grid">
            {WORK.map((w) => (
              <div key={w.label} className="sol-work-item">
                <div className="sol-placeholder">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span>{w.img}</span>
                </div>
                <p className="sol-work-item__label">{w.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Audit first, design second, optimise always.</h2>
          </div>
          <div className="sol-steps">
            {PROCESS.map((s) => (
              <div key={s.n} className="sol-step">
                <span className="sol-step__n mono">{s.n}</span>
                <h4 className="sol-step__title">{s.title}</h4>
                <p className="sol-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Common questions</span>
            <h2 className="sol-section__title">What clients usually ask.</h2>
          </div>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
