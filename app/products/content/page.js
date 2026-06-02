import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import FAQAccordion from '@/components/FAQAccordion'

const DELIVERABLES = [
  { title: 'Brand voice guide', body: 'A concrete document that defines how you sound, what you avoid, and how tone shifts across different contexts — so every piece of content feels like it came from the same company.' },
  { title: 'Content strategy', body: 'A plan built around what your audience is actually looking for, mapped to your business goals. Not just a topic list — a rationale for why each piece exists.' },
  { title: 'Editorial planning', body: 'A publishing calendar with realistic cadence, clear ownership, and defined formats. Content that gets planned with no production process behind it never ships.' },
  { title: 'Blog & long-form content', body: 'Articles written to rank, to be shared, and to be read — not padded for word count. Structured around real questions your audience types into search engines.' },
  { title: 'Website copy', body: 'Homepage, about, product, and landing page copy that is clear, specific, and makes the right person feel immediately understood. No buzzwords, no generic positioning.' },
  { title: 'Campaign & email copy', body: 'Launch sequences, nurture emails, ad copy, and campaign messaging built around a specific goal and audience moment — not repurposed blog posts.' },
]

const PROCESS = [
  { n: '01', title: 'Audience & goal audit', body: 'We establish who you\'re writing for and what you need the content to do. Every content decision should trace back to a specific person at a specific stage of awareness — or it\'s not a strategy, it\'s a posting schedule.' },
  { n: '02', title: 'Voice definition', body: 'We develop your brand voice guide — how you sound, what you don\'t say, how formality shifts across channels. This happens before any content is written, not after.' },
  { n: '03', title: 'Strategy & planning', body: 'We map the content priorities: which topics build topical authority, which address objections at the point of sale, which drive recurring search traffic. Then we build the editorial calendar.' },
  { n: '04', title: 'Production', body: 'We write, and we iterate with you. First drafts, structured feedback, and final versions that don\'t need three rounds of redlines to get right. We\'re fast and we take feedback well.' },
  { n: '05', title: 'Measure & refine', body: 'We track what performs — rankings, engagement, conversions — and use that data to refine the strategy. Content that doesn\'t work gets cut or fixed, not doubled down on.' },
]

const FAQ = [
  { q: 'Do you write the content, or do you just strategise?', a: 'Both. We write content, not just plans. The strategy and the production are the same engagement — because a content strategy that nobody implements is just a document. We can also help you build the internal process to maintain production after we hand over.' },
  { q: 'How do you learn our industry without deep experience in it?', a: 'We research thoroughly, work closely with your team, and write with your subject matter expert\'s input. We\'re good at asking the right questions, structuring complex information clearly, and writing in a voice that sounds human. We\'re honest when something requires expertise we don\'t have.' },
  { q: 'What makes content "good" for SEO without being bad to read?', a: 'The two aren\'t in tension when you\'re optimising for intent rather than density. Google\'s ranking systems increasingly reward content that fully answers what someone was searching for. Writing something genuinely useful — structured well, with depth on the right topics — is better SEO than keyword stuffing, and it\'s also just better writing.' },
  { q: 'Can you work with an existing content library?', a: 'Yes. Content audits are a common starting point — identifying what exists, what\'s performing, what\'s outdated, and what gaps need to be filled. Often the fastest wins are refreshing existing content rather than creating new pieces from scratch.' },
]

const RELATED = [
  { href: '/solutions/branding', label: 'Branding', desc: 'Brand identity and positioning — the foundation content is built on.' },
  { href: '/products/seo', label: 'SEO', desc: 'Content is the raw material of organic search. The two go together.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Know which content is actually driving results for your business.' },
]

const WORK = [
  { label: 'Brand voice guide', img: 'Voice guide document' },
  { label: 'Content strategy & editorial plan', img: 'Editorial strategy' },
  { label: 'Website copy rewrite', img: 'Website copy' },
]

export const metadata = {
  title: 'Content Strategy & Production | Cosmonus',
  description: 'From brand voice to campaign copy — content strategy and production that builds authority and drives action. Cosmonus creates content that earns attention and converts.',
  keywords: ['content strategy', 'content production', 'copywriting agency', 'brand voice', 'content marketing', 'SEO content'],
  openGraph: {
    title: 'Content Strategy & Production | Cosmonus',
    description: 'Brand voice to campaign copy — content that earns attention and converts.',
    url: 'https://cosmonus.com/products/content',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Strategy | Cosmonus',
    description: 'Content that earns attention and converts.',
  },
}

export default function ContentPage() {
  return (
    <>
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Content</span>
              <h1 className="sol-hero__title">Content that earns attention.</h1>
              <p className="lead sol-hero__lead">
                Brand voice, content strategy, and production — blog, website copy, email, and social —
                built around what your audience actually cares about, not what fills a calendar.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Build a content strategy</Link>
                <Link href="/work" className="sol-hero__link">See content work →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Content strategy overview</span>
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
              <h2 className="sol-overview__title">Most content doesn&apos;t fail because it&apos;s badly written. It fails because it wasn&apos;t needed.</h2>
            </div>
            <div className="sol-overview__right">
              <p>The most common content mistake isn&apos;t poor writing — it&apos;s publishing without a clear reason. Blog posts that cover everything your competitors cover, social content that exists to fill a schedule, website copy that describes what you do without making anyone care. Volume without strategy produces noise, not results.</p>
              <p>Good content strategy starts with a different question: what does this specific audience need to understand, at this specific moment in their journey, to take the next step? Every piece of content should answer that question. If it can&apos;t, it either shouldn&apos;t exist or hasn&apos;t been defined clearly enough yet.</p>
              <p>We bring strategy and production together. We don&apos;t hand you a content plan and leave you to implement it with a team that has no capacity, and we don&apos;t write content without understanding what it&apos;s supposed to accomplish. The voice, the strategy, and the actual writing are one engagement — because that&apos;s the only way to get output that holds together.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="sol-section__title">Strategy, voice, and production — together.</h2>
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
            <h2 className="sol-section__title">Content built to be used, not just admired.</h2>
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
            <h2 className="sol-section__title">Audience to output — strategy all the way through.</h2>
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
