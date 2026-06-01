import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'

const AI_TYPES = [
  {
    type: 'RAG systems',
    desc: 'Your AI answers from your documents, knowledge base, or data — not from generic training. Accurate, sourced, and updatable.',
    best: 'Internal Q&A · Support bots · Document search',
  },
  {
    type: 'Workflow automation',
    desc: 'Multi-step pipelines that classify, extract, draft, route, and act — replacing repetitive human work with reliable automated processes.',
    best: 'Lead qualification · Content pipelines · Data extraction',
  },
  {
    type: 'Custom assistants',
    desc: 'Conversational interfaces trained on your context, tuned to your tone, and designed for a specific set of tasks.',
    best: 'Customer support · Sales assistants · Internal tools',
  },
  {
    type: 'AI integration',
    desc: 'Adding AI capabilities into your existing product or workflow — without rebuilding from scratch. Embedded where it creates value.',
    best: 'Product features · API enrichment · Smart defaults',
  },
]

const HONEST_TABLE = [
  { can: 'Handle repetitive, rule-following tasks at scale', cannot: 'Replace judgment on complex or high-stakes decisions' },
  { can: 'Extract and summarise information from large documents', cannot: 'Guarantee accuracy without human review on critical outputs' },
  { can: 'Generate structured drafts from consistent inputs', cannot: 'Match a skilled human writer on voice-sensitive content' },
  { can: 'Classify and route data faster than any team member', cannot: 'Handle ambiguous edge cases without a defined fallback' },
]

const PROCESS = [
  { n: '01', title: 'Audit', body: 'We map your workflows, data sources, and bottlenecks. The highest-value AI use cases almost always surface here.' },
  { n: '02', title: 'Design', body: 'System architecture: what the AI handles, where humans stay in the loop, how errors surface, and how it fails gracefully.' },
  { n: '03', title: 'Build', body: 'We integrate into your existing stack and document the architecture — so you\'re not dependent on us to maintain it.' },
  { n: '04', title: 'Test', body: 'Edge cases, adversarial inputs, failure scenarios. AI systems that fail silently cause more damage than systems that don\'t exist.' },
  { n: '05', title: 'Deploy & improve', body: 'We monitor post-launch, capture failure cases, and iterate. First version handles 80%; second handles 95%. We stay until it\'s reliable.' },
]

const FAQ = [
  { q: 'What AI models do you use?', a: 'We\'re model-agnostic — Claude, GPT-4o, Mistral, Llama, or open-source alternatives depending on the use case, cost tolerance, and data privacy requirements. We always pick what performs best for your specific situation.' },
  { q: 'Do I need existing data to get started?', a: 'Not always. Some use cases (document Q&A, workflow automation) work with whatever you already have. Others benefit from labelled examples. We\'ll be honest about what you need before we start.' },
  { q: 'How do you handle accuracy and reliability?', a: 'Every system we build includes confidence thresholds, human review points for high-stakes decisions, and fallbacks when the AI is uncertain. Silent failures are not acceptable — if the AI can\'t answer reliably, it says so.' },
  { q: 'Will it work with my existing tools?', a: 'Most likely. We regularly integrate with HubSpot, Salesforce, Google Workspace, Notion, Slack, Airtable, and custom REST APIs. If you have an API, we can probably connect to it — and we\'ll tell you quickly if something isn\'t feasible.' },
]

const RELATED = [
  { href: '/products/automation', label: 'Automation', desc: 'AI-powered workflows — from manual to automatic.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Measure what your AI is doing and where it\'s working.' },
  { href: '/solutions/web', label: 'Web Development', desc: 'Build the interface your AI system needs.' },
]

export const metadata = {
  title: 'AI Solutions & Integrations | Cosmonus',
  description: 'AI assistants, RAG systems, intelligent automation, and AI-powered product features. Cosmonus makes AI practical and profitable for real businesses of all sizes.',
  keywords: ['AI solutions', 'AI integration', 'RAG system', 'AI assistant development', 'LLM integration', 'AI agency India', 'ChatGPT integration'],
  openGraph: {
    title: 'AI Solutions & Integrations | Cosmonus',
    description: 'Practical AI for real businesses — assistants, RAG, automation, and AI-powered products.',
    url: 'https://cosmonus.com/solutions/ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions | Cosmonus',
    description: 'Practical AI for real businesses.',
  },
}

export default function AiPage() {
  return (
    <>
      {/* Hero — full width with diagram placeholder below */}
      <section className="sol-hero">
        <div className="container">
          <span className="eyebrow">AI Solutions</span>
          <h1 className="sol-hero__title sol-hero__title--wide">Intelligence built into your workflow.</h1>
          <p className="lead sol-hero__lead">
            AI-powered search, assistants, and automation that solve real business problems —
            not proof-of-concept demos that never reach production.
          </p>
          <div className="sol-hero__actions">
            <Link href="/contact" className="btn-cosmonus btn-arrow">Start an AI project</Link>
            <Link href="/work" className="sol-hero__link">See examples →</Link>
          </div>
        </div>
        <div className="ai-hero-diagram">
          <div className="container">
            <div className="sol-placeholder ai-hero-diagram__placeholder">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>AI workflow architecture diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* What kind of AI? */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What kind of AI?</span>
            <h2 className="sol-section__title">Four types of AI application. Each one different.</h2>
            <p className="ai-types-intro">Not all AI projects are the same. A chatbot is not an automation pipeline. A RAG system is not a fine-tuned model. We start by understanding what type of AI application actually fits your problem.</p>
          </div>
          <div className="ai-types-grid">
            {AI_TYPES.map((t) => (
              <div key={t.type} className="ai-type-card">
                <h4 className="ai-type-card__type">{t.type}</h4>
                <p className="ai-type-card__desc">{t.desc}</p>
                <p className="ai-type-card__best mono">Best for: {t.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work showcase */}
      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">From our work</span>
            <h2 className="sol-section__title">AI applied to real business problems.</h2>
          </div>
          <div className="sol-work-grid">
            {[
              { img: 'AI assistant interface', label: 'Custom chatbot trained on client knowledge base' },
              { img: 'Automation pipeline', label: 'End-to-end lead qualification workflow' },
              { img: 'Semantic search interface', label: 'RAG-powered document search system' },
            ].map((w) => (
              <div key={w.img} className="sol-work-item">
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

      {/* Honest AI table */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What AI can and can't do</span>
            <h2 className="sol-section__title">We&apos;d rather be honest than impressive.</h2>
            <p className="ai-table-intro">AI is genuinely powerful for the right tasks. It's also genuinely unreliable for the wrong ones. We tell you which is which before we start.</p>
          </div>
          <div className="ai-honest-table">
            <div className="ai-honest-table__header">
              <span className="ai-honest-table__col-label ai-honest-table__col-label--can">AI can</span>
              <span className="ai-honest-table__col-label ai-honest-table__col-label--cannot">AI can&apos;t</span>
            </div>
            {HONEST_TABLE.map((row, i) => (
              <div key={i} className="ai-honest-table__row">
                <div className="ai-honest-table__cell ai-honest-table__cell--can">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="var(--success)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {row.can}
                </div>
                <div className="ai-honest-table__cell ai-honest-table__cell--cannot">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="var(--fg-subtle)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {row.cannot}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sol-section sol-section--tinted">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">How it works</span>
            <h2 className="sol-section__title">Audit to deploy — no wasted sprints.</h2>
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

      {/* FAQ */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Common questions</span>
            <h2 className="sol-section__title">What clients usually ask.</h2>
          </div>
          <div className="sol-faq">
            {FAQ.map((f) => (
              <div key={f.q} className="sol-faq__item">
                <h4 className="sol-faq__q">{f.q}</h4>
                <p className="sol-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices items={RELATED} />
    </>
  )
}
