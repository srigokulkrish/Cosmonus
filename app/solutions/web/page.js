import Link from 'next/link'
import RelatedServices from '@/components/RelatedServices'
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPostgresql,
  SiVercel, SiSanity, SiStripe, SiTailwindcss, SiFigma,
} from 'react-icons/si'

const STACK = [
  { name: 'Next.js',    type: 'Framework', bg: '#000',     Icon: SiNextdotjs,   color: '#fff' },
  { name: 'React',      type: 'UI',        bg: '#20232A',  Icon: SiReact,       color: '#61DAFB' },
  { name: 'TypeScript', type: 'Language',  bg: '#3178C6',  Icon: SiTypescript,  color: '#fff' },
  { name: 'Node.js',    type: 'Backend',   bg: '#339933',  Icon: SiNodedotjs,   color: '#fff' },
  { name: 'PostgreSQL', type: 'Database',  bg: '#336791',  Icon: SiPostgresql,  color: '#fff' },
  { name: 'Vercel',     type: 'Hosting',   bg: '#000',     Icon: SiVercel,      color: '#fff' },
  { name: 'Sanity',     type: 'CMS',       bg: '#F03E2F',  Icon: SiSanity,      color: '#fff' },
  { name: 'Stripe',     type: 'Payments',  bg: '#635BFF',  Icon: SiStripe,      color: '#fff' },
  { name: 'Tailwind',   type: 'Styling',   bg: '#0F172A',  Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Figma',      type: 'Design',    bg: '#1E1E1E',  Icon: SiFigma,       color: '#fff' },
]

const PROJECT_TYPES = [
  {
    type: 'Marketing site',
    desc: 'Your primary web presence — homepage, about, services, contact. Built to explain what you do and convert visitors into leads.',
    timeline: '2–4 weeks',
  },
  {
    type: 'Web application',
    desc: 'Software with user accounts, data, dashboards, or complex workflows. Designed and engineered as a product, not a website.',
    timeline: '8–16 weeks',
  },
  {
    type: 'Landing page',
    desc: 'A focused single page for a campaign, launch, or specific audience segment. One goal, one action, no distractions.',
    timeline: '1–2 weeks',
  },
  {
    type: 'E-commerce',
    desc: 'Product catalogue, cart, checkout, and order management. Optimised for conversion at every step of the buying journey.',
    timeline: '4–8 weeks',
  },
]

const PROCESS = [
  { n: '01', title: 'Goals & brief', body: 'We define what the site needs to do in concrete terms — conversion rate, leads, signups — before designing anything.' },
  { n: '02', title: 'Architecture', body: 'Sitemap and page structure agreed before visual design. The right structure prevents expensive rework later.' },
  { n: '03', title: 'Design', body: 'Responsive mockups in Figma, reviewed in real content — desktop, mobile, light, dark. One structured feedback round, then we move.' },
  { n: '04', title: 'Development', body: 'Clean, documented code. We choose the stack based on your needs. Accessible, performant, SEO-ready from the first commit.' },
  { n: '05', title: 'QA & launch', body: 'Cross-browser, cross-device tested. We handle DNS, redirects, analytics, and monitor the first 48 hours after go-live.' },
]

const METRICS = [
  { label: 'Performance score', value: '95+', note: 'Core Web Vitals target' },
  { label: 'Accessibility', value: 'AA', note: 'WCAG 2.1 compliance' },
  { label: 'Time to live', value: '2–4w', note: 'For a marketing site' },
]

const FAQ = [
  { q: 'How long does a website project take?', a: 'A focused marketing site typically takes 2–4 weeks. More complex projects with custom functionality run 6–10 weeks. We give you a realistic timeline before anything starts — not an optimistic one.' },
  { q: 'What tech stack do you use?', a: 'We default to Next.js, TypeScript, and modern web standards. But we\'re not dogmatic — if you have an existing stack or team preferences, we build around what makes sense for you.' },
  { q: 'Can I update the site myself after launch?', a: 'Yes. We integrate a CMS (typically Sanity or Contentful) so your team can edit content, swap images, and publish pages without developer help.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes. We offer retainer arrangements for teams who want continuous support, optimisation, and feature development after launch.' },
]

const RELATED = [
  { href: '/solutions/branding', label: 'Branding', desc: 'Build the brand before the site — identity that makes every page land harder.' },
  { href: '/products/seo', label: 'SEO', desc: 'A fast site is only useful if people find it. Organic traffic, built to last.' },
  { href: '/products/analytics', label: 'Analytics', desc: 'Understand what your site is doing — and where to improve it.' },
]

export const metadata = {
  title: 'Web Development Solutions | Cosmonus',
  description: 'Marketing sites, web apps, and e-commerce experiences designed to perform. Cosmonus delivers responsive, accessible, and conversion-focused web development.',
  keywords: ['web development', 'web solutions', 'marketing website', 'web app development', 'ecommerce site', 'Next.js agency'],
  openGraph: {
    title: 'Web Development Solutions | Cosmonus',
    description: 'Sites and apps designed to perform — responsive, accessible, conversion-focused.',
    url: 'https://cosmonus.com/solutions/web',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development | Cosmonus',
    description: 'Sites and apps designed to perform.',
  },
}

export default function WebPage() {
  return (
    <>
      {/* Hero — split with stats strip beneath */}
      <section className="sol-hero sol-hero--split">
        <div className="container">
          <div className="sol-hero__split">
            <div className="sol-hero__text">
              <span className="eyebrow">Web Development</span>
              <h1 className="sol-hero__title">Websites that work as hard as you do.</h1>
              <p className="lead sol-hero__lead">
                Marketing sites, web apps, and e-commerce — designed to convert
                and built to perform from the first line of code.
              </p>
              <div className="sol-hero__actions">
                <Link href="/contact" className="btn-cosmonus btn-arrow">Start a web project</Link>
                <Link href="/work" className="sol-hero__link">See web work →</Link>
              </div>
            </div>
            <div className="sol-hero__visual">
              <div className="sol-placeholder sol-placeholder--tall">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="1.5" y="5.5" width="25" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="11.5" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M1.5 19l6-5 4 4 3.5-3.5L22 19.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Website design example</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance metrics strip */}
      <div className="web-metrics">
        <div className="container">
          <div className="web-metrics__grid">
            {METRICS.map((m) => (
              <div key={m.label} className="web-metrics__item">
                <span className="web-metrics__value">{m.value}</span>
                <div>
                  <p className="web-metrics__label">{m.label}</p>
                  <p className="web-metrics__note">{m.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What kind of web project? */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">What are you building?</span>
            <h2 className="sol-section__title">Different projects, different approaches.</h2>
            <p className="web-project-intro">Not every web project is the same. A marketing site is not a web app. A landing page is not an e-commerce store. We scope and approach each differently — here's how.</p>
          </div>
          <div className="web-project-types">
            {PROJECT_TYPES.map((p) => (
              <div key={p.type} className="web-project-type">
                <div className="web-project-type__header">
                  <h4 className="web-project-type__title">{p.type}</h4>
                  <span className="web-project-type__timeline mono">{p.timeline}</span>
                </div>
                <p className="web-project-type__desc">{p.desc}</p>
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
            <h2 className="sol-section__title">Sites built for real businesses.</h2>
          </div>
          <div className="sol-work-grid">
            {[
              { img: 'Marketing site — Flawlex', label: 'Delivered in 48 hours, polished and fully functional' },
              { img: 'Web design + branding — Fluid.Work', label: 'Brand and web combined into one cohesive project' },
              { img: 'Event platform — Game On!', label: 'Website design for a live events platform' },
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

      {/* Tech stack */}
      <section className="sol-section">
        <div className="container">
          <div className="sol-section__head">
            <span className="eyebrow">Technology</span>
            <h2 className="sol-section__title">Modern stack. No proprietary lock-in.</h2>
            <p className="web-stack-intro">We use industry-standard tools that give you ownership — code you can move, teams you can hire, and infrastructure that doesn't disappear if we do.</p>
          </div>
          <div className="web-stack-grid">
            {STACK.map((t) => (
              <div key={t.name} className="web-stack-item">
                <span className="web-stack-item__icon" style={{ background: t.bg }}>
                  <t.Icon size={22} color={t.color} aria-hidden="true" />
                </span>
                <span className="web-stack-item__name">{t.name}</span>
                <span className="web-stack-item__type">{t.type}</span>
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
            <h2 className="sol-section__title">Goals first. Design second. Ship fast.</h2>
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
