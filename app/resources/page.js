import Link from 'next/link'

const GUIDES = [
  {
    tag: 'Platform',
    title: 'What an intelligence layer is (and why one shared platform beats point tools)',
    desc: 'When a pilot stalls, the model usually isn\'t the problem — the foundation is.',
    readTime: '6 min read',
  },
  {
    tag: 'Enterprise',
    title: 'Why your data isn\'t driving decisions — and what to fix first',
    desc: 'A framework for diagnosing why data sits unused — before another dashboard.',
    readTime: '8 min read',
  },
  {
    tag: 'Agents',
    title: 'A plain-language guide to RAG, knowledge graphs, and agent orchestration',
    desc: 'What each technique does, when to use it, and what breaks when you pick wrong.',
    readTime: '10 min read',
  },
  {
    tag: 'Predictive',
    title: 'Scoping your first intelligence use case: shipped vs stalled',
    desc: 'Define the smallest use case that changes a decision — and defend that scope.',
    readTime: '7 min read',
  },
  {
    tag: 'Knowledge',
    title: 'Building a knowledge graph in plain English: what to model and in what order',
    desc: 'A prioritised way to connect your data into intelligence — no two-year program.',
    readTime: '9 min read',
  },
  {
    tag: 'Spatial',
    title: 'Real-time vs batch: how to make the right call for spatial intelligence',
    desc: 'The trade-offs we weigh on every spatial deployment.',
    readTime: '5 min read',
  },
]

const CHECKLISTS = [
  {
    title: 'Intelligence deployment checklist',
    items: 14,
    desc: 'Verify before going live — pipelines, evaluation, latency, access, and monitoring.',
  },
  {
    title: 'Data readiness checklist',
    items: 11,
    desc: 'What your data needs to feed a layer — sources, schemas, quality, governance.',
  },
  {
    title: 'Use case scoping checklist',
    items: 9,
    desc: 'Questions to answer before you build — stops scope creep and stalled pilots.',
  },
  {
    title: 'Decision automation audit checklist',
    items: 12,
    desc: 'Map decision workflows before automating — find where intelligence adds leverage.',
  },
]

const GLOSSARY = [
  { term: 'RAG', def: 'Retrieval-Augmented Generation — AI that answers from your data, not just its training.' },
  { term: 'Knowledge Graph', def: 'A connected model of your entities and relationships systems can reason over.' },
  { term: 'Spatial Intelligence', def: 'Location and movement data turned into real-time understanding of where things are.' },
  { term: 'Decision Automation', def: 'Systems that make or recommend decisions, not just report on them.' },
  { term: 'Enterprise Intelligence', def: 'One shared layer so every team reasons from the same source of truth.' },
  { term: 'Intelligence Layer', def: 'The shared platform that turns raw data into intelligence, and intelligence into decisions.' },
]

const TOOLS = [
  { name: 'Figma', category: 'Design', desc: 'Where we shape how intelligence surfaces to users. The free tier is genuinely useful.' },
  { name: 'Vercel', category: 'Hosting', desc: 'The fastest way to deploy a Next.js project — zero-config, global edge network.' },
  { name: 'AWS', category: 'Infrastructure', desc: 'Cloud infrastructure for scalable data pipelines, storage, and compute.' },
  { name: 'Supabase', category: 'Backend', desc: 'Database, auth, and storage with pgvector for embeddings and a generous free tier.' },
  { name: 'Google Analytics', category: 'Analytics', desc: 'The baseline for understanding traffic, acquisition, and user behaviour.' },
  { name: 'Anthropic Claude', category: 'AI', desc: 'The model we build reasoning and agent features on — strong at reasoning and long context.' },
]

const TOPICS = [
  { label: 'All', active: true },
  { label: 'Platform' },
  { label: 'Enterprise' },
  { label: 'Spatial' },
  { label: 'Agents' },
  { label: 'Predictive' },
  { label: 'Knowledge' },
]

export const metadata = {
  title: 'Resources | Guides, Checklists & Tools on Intelligence Infrastructure',
  description: 'Stuck on why your data isn\'t driving decisions, or whether you need a knowledge graph or an agent? Free guides, checklists, and tools from the Cosmonus team that answer it.',
  keywords: ['intelligence infrastructure resources', 'knowledge graph guides', 'AI agent resources', 'decision automation checklists', 'RAG guide', 'enterprise intelligence guides'],
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources | Guides, Checklists & Tools',
    description: 'Practical guides on intelligence infrastructure from the Cosmonus team — all free.',
    url: 'https://cosmonus.com/resources',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources from Cosmonus',
    description: 'Guides, checklists, and tools on intelligence infrastructure — all free.',
    images: ['/images/ICON.png'],
  },
}

export default function ResourcesPage() {
  return (
    <>
      <section className="res-hero">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1 className="res-hero__title">The questions you ask<br />before you build.</h1>
          <p className="lead res-hero__lead">
            &ldquo;Why isn&apos;t our data driving anything?&rdquo; &ldquo;Do we need a knowledge
            graph or an agent?&rdquo; &ldquo;What&apos;s the smallest thing worth shipping?&rdquo;
            Here are the guides, checklists, and tools we hand founders and data teams when they
            ask &mdash; the same answers, written down.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="res-section">
        <div className="container">
          <div className="res-section__head">
            <div>
              <span className="eyebrow">Guides</span>
              <h2 className="res-section__title">Start with the question you&apos;re stuck on.</h2>
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
              <h2 className="res-section__title">The things you&apos;ll wish you&apos;d checked before you shipped.</h2>
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
              <h2 className="res-section__title">When you ask what we actually build with.</h2>
              <p className="res-tools-intro">No affiliate links, no sponsorships &mdash; just what we actually build with, and why. Most have a free tier.</p>
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
              <h2 className="res-section__title">The words that get thrown around &mdash; in plain English.</h2>
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
