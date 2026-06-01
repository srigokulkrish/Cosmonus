import Link from 'next/link'

const GUIDES = [
  {
    tag: 'Branding',
    title: 'How to brief a brand designer (and actually get what you want)',
    desc: 'The questions to answer before you talk to anyone. Most projects go wrong because the brief was wrong — not the designer.',
    readTime: '6 min read',
  },
  {
    tag: 'Web',
    title: 'Why your website isn\'t converting — and what to fix first',
    desc: 'A framework for diagnosing conversion problems without guessing. Start here before redesigning anything.',
    readTime: '8 min read',
  },
  {
    tag: 'AI',
    title: 'A plain-language guide to RAG, fine-tuning, and prompt engineering',
    desc: 'What each technique actually does, when to use it, and what goes wrong when you pick the wrong one.',
    readTime: '10 min read',
  },
  {
    tag: 'Product',
    title: 'Scoping your v1: the discipline that separates shipped from stalled',
    desc: 'How to define the smallest version of your product that\'s genuinely useful — and how to defend that scope when everyone wants to add more.',
    readTime: '7 min read',
  },
  {
    tag: 'SEO',
    title: 'Technical SEO in plain English: what to fix and in what order',
    desc: 'A prioritised checklist for teams who want to improve organic traffic without hiring an agency yet.',
    readTime: '9 min read',
  },
  {
    tag: 'Mobile',
    title: 'Native vs cross-platform: how to make the right call for your app',
    desc: 'The decision framework we use with every mobile client. No dogma — just the trade-offs you need to understand.',
    readTime: '5 min read',
  },
]

const CHECKLISTS = [
  {
    title: 'Website launch checklist',
    items: 14,
    desc: 'Everything to verify before going live — performance, SEO, analytics, redirects, and accessibility.',
  },
  {
    title: 'Brand handoff checklist',
    items: 11,
    desc: 'What to ask your designer to deliver. File formats, guidelines, font licences — the full list.',
  },
  {
    title: 'Product scope checklist',
    items: 9,
    desc: 'Questions to answer before you start building. Prevents scope creep and six-month delays.',
  },
  {
    title: 'AI project audit checklist',
    items: 12,
    desc: 'Map your workflows before you automate anything. Identifies where AI adds real leverage.',
  },
]

const GLOSSARY = [
  { term: 'RAG', def: 'Retrieval-Augmented Generation — AI that answers from your documents, not just its training data.' },
  { term: 'Core Web Vitals', def: 'Google\'s performance metrics: LCP (load speed), FID (interactivity), CLS (visual stability).' },
  { term: 'Brand system', def: 'The complete set of visual and verbal rules that make a brand consistent across every touchpoint.' },
  { term: 'CMS', def: 'Content Management System — software that lets non-developers edit website content.' },
  { term: 'Conversion rate', def: 'The percentage of visitors who take a desired action — sign up, buy, contact, download.' },
  { term: 'Design system', def: 'A library of reusable UI components with documented usage rules, built for consistency and speed.' },
  { term: 'Information architecture', def: 'The structure of a website or app — how pages and content are organised and labelled.' },
  { term: 'Socket.io', def: 'A library for real-time, bidirectional communication between browser and server — used for chat, live updates, notifications.' },
]

const TOOLS = [
  { name: 'Figma', category: 'Design', desc: 'Industry-standard design and prototyping tool. Free tier is genuinely useful.' },
  { name: 'Vercel', category: 'Hosting', desc: 'The fastest way to deploy a Next.js project. Zero-config deployments with global edge network.' },
  { name: 'AWS', category: 'Infrastructure', desc: 'Cloud infrastructure for scalable backends, storage, and compute. The industry standard for serious deployments.' },
  { name: 'Supabase', category: 'Backend', desc: 'Open-source Firebase alternative — database, auth, and storage with a generous free tier.' },
  { name: 'Google Analytics', category: 'Analytics', desc: 'The baseline for understanding traffic, acquisition, and user behaviour on any web property.' },
  { name: 'Heatmaps', category: 'Analytics', desc: 'Visual overlays showing exactly where users click, scroll, and drop off — essential for conversion work.' },
  { name: 'Anthropic Claude', category: 'AI', desc: 'The model we use for AI features. Strong at reasoning, instruction-following, and long context.' },
  { name: 'LangChain', category: 'AI', desc: 'Framework for building LLM-powered applications — chains, agents, RAG pipelines, and tool use.' },
  { name: 'Railway', category: 'Infrastructure', desc: 'Simple, fast infrastructure for deploying backends and databases without DevOps overhead.' },
  { name: 'Pencil & Paper', category: 'Design', desc: 'Still the fastest way to think through a layout, flow, or idea. No app beats it for the first five minutes.' },
]

const TOPICS = [
  { label: 'All', active: true },
  { label: 'Branding' },
  { label: 'Web' },
  { label: 'Mobile' },
  { label: 'AI' },
  { label: 'Product' },
  { label: 'SEO' },
]

export const metadata = {
  title: 'Resources | Free Guides, Checklists & Tools from Cosmonus',
  description: 'Free guides, templates, and checklists from the Cosmonus team. Practical resources on AI, product building, web design, and growing your business.',
  keywords: ['free design resources', 'product development guides', 'AI resources', 'startup checklists', 'web design tools', 'business growth guides'],
  openGraph: {
    title: 'Free Resources | Guides, Checklists & Tools',
    description: 'Practical guides and templates from the Cosmonus team — all free.',
    url: 'https://cosmonus.com/resources',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resources from Cosmonus',
    description: 'Guides, checklists, and tools — all free.',
  },
}

export default function ResourcesPage() {
  return (
    <>
      <section className="res-hero">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1 className="res-hero__title">Learn how to build,<br />launch, and grow.</h1>
          <p className="lead res-hero__lead">
            Guides, checklists, and tools from the Cosmonus team — written for founders,
            product teams, and anyone building something worth using.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="res-section">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Guides</span>
              <h2 className="res-section__title">Practical reading — no fluff.</h2>
            </div>
            <div className="res-topic-pills">
              {TOPICS.map((t) => (
                <button key={t.label} type="button" className={`blog-tag${t.active ? ' blog-tag--active' : ''}`}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="res-guides-grid">
            {GUIDES.map((g) => (
              <article key={g.title} className="res-guide-card">
                <div className="res-guide-card__top">
                  <span className="res-guide-card__tag">{g.tag}</span>
                  <span className="res-guide-card__time">{g.readTime}</span>
                </div>
                <h3 className="res-guide-card__title">{g.title}</h3>
                <p className="res-guide-card__desc">{g.desc}</p>
                <div className="res-guide-card__footer">
                  <span className="res-guide-card__cta">Read guide →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="res-section res-section--tinted">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Checklists</span>
              <h2 className="res-section__title">Download and use on your next project.</h2>
            </div>
          </div>
          <div className="res-checklists-grid">
            {CHECKLISTS.map((c) => (
              <div key={c.title} className="res-checklist-card">
                <div className="res-checklist-card__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="1" width="16" height="16" rx="3" stroke="var(--brand)" strokeWidth="1.4"/>
                    <path d="M5 9l3 3 5-5" stroke="var(--brand)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="res-checklist-card__body">
                  <h4 className="res-checklist-card__title">{c.title}</h4>
                  <p className="res-checklist-card__desc">{c.desc}</p>
                </div>
                <div className="res-checklist-card__footer">
                  <span className="res-checklist-card__count mono">{c.items} items</span>
                  <span className="res-checklist-card__dl">Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools we recommend */}
      <section className="res-section">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Tools we recommend</span>
              <h2 className="res-section__title">The stack we actually use and trust.</h2>
              <p className="res-tools-intro">These aren't affiliate links — they're the tools we reach for on our own projects. All have generous free tiers to get started.</p>
            </div>
          </div>
          <div className="res-tools-grid">
            {TOOLS.map((t) => (
              <div key={t.name} className="res-tool">
                <div className="res-tool__header">
                  <span className="res-tool__name">{t.name}</span>
                  <span className="res-tool__category">{t.category}</span>
                </div>
                <p className="res-tool__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="res-section res-section--tinted">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Glossary</span>
              <h2 className="res-section__title">Terms you&apos;ll hear when working with us — explained plainly.</h2>
            </div>
          </div>
          <div className="res-glossary">
            {GLOSSARY.map((g) => (
              <div key={g.term} className="res-glossary__item">
                <dt className="res-glossary__term mono">{g.term}</dt>
                <dd className="res-glossary__def">{g.def}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
