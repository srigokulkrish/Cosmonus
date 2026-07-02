import AboutImageCarousel from '@/components/AboutImageCarousel'

const TESTIMONIALS = [
  {
    quote: 'Gokul is very proactive, taking charge of design projects and making sure everything is followed up on. He produces good content quickly, and engages with clients to make sure that he is meeting the brief. He is friendly and great to work with.',
    name: 'Shruthi Balasa',
    role: 'Founder',
    company: 'Thirus',
    img: '/images/assets/people/shruthi.jpeg',
  },
  {
    quote: 'Our company brand is our identity. Gokul went above and beyond the usual to understand us and help construct a brand that represents us and is unique. Great working with him.',
    name: 'Dan Justin',
    role: 'CEO',
    company: 'Fluid.work UK',
    img: '/images/assets/people/Dan.jpeg',
  },
  {
    quote: 'Gokul demonstrated exceptional professionalism and skill throughout our project. He quickly grasped the project requirements and delivered a polished, fully functional website within a tight timeframe. His communication was clear and consistent, and he approached feedback with a collaborative attitude, ensuring every detail met expectations.',
    name: 'Sabari Smat',
    role: 'Founder',
    company: 'Flawlex',
    img: '/images/assets/people/Smat.jpg',
  },
  {
    quote: 'Working with Gokul was one of the best experiences I\'ve had. He delivered a clean, responsive website in just two days — exactly what I needed. No rush, no stress — just a true commitment to getting it right. His reliability and willingness to go the extra mile really stand out. I\'d gladly work with him again.',
    name: 'Harsha',
    role: 'Lead',
    company: 'Project RhineX Circle',
    img: '/images/assets/people/Harsha.jpeg',
  },
  {
    quote: 'Very delighted with the support — they evaluated my startup niche and provided defined digital support for establishing a website, and took effort to escalate our presence across social media networks. Really wonderful working with Gokul.',
    name: 'Monish Prashanth',
    role: 'ex-CEO',
    company: 'Stopnosms',
    img: '/images/assets/people/Monish.jpeg',
  },
  {
    quote: 'Working with Sri Gokul Krishnan was a great experience. His creativity, attention to detail, and ability to deliver impactful designs stood out. On our rebranding project, his visuals boosted customer engagement by 20%. Reliable, meets deadlines, and communicates clearly. Highly recommended.',
    name: 'Manpreet Singh',
    role: 'Developer',
    company: 'Bitfumes',
    img: '/images/assets/people/Manpreet.jpeg',
  },
]

const VALUES = [
  {
    title: 'Quality',
    body: "Every deliverable meets a standard we'd put our name on — deadlines never the reason it slips.",
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    title: 'Transparency',
    body: 'No vague updates, no hidden timelines — you always know where things stand and what\'s next.',
    gradient: 'linear-gradient(135deg, #3882F6 0%, #635BFF 100%)',
  },
  {
    title: 'Commitment',
    body: "We only say yes to work we can actually deliver — then we deliver it.",
    gradient: 'linear-gradient(135deg, #635BFF 0%, #7C3AED 100%)',
  },
]

const HOW = [
  {
    n: '01',
    title: 'Validate',
    body: 'We test ideas against real users before investing fully — not assumptions.',
  },
  {
    n: '02',
    title: 'Iterate',
    body: 'We move fast on feedback. The market matters more than internal opinion.',
  },
  {
    n: '03',
    title: 'Ship',
    body: 'A product learning in the market beats a perfect one still in planning.',
  },
]

const VIBE_STEPS = [
  {
    n: '01',
    title: 'Describe',
    body: 'Tell us the outcome you\'re after in plain language — no specs, no briefs.',
  },
  {
    n: '02',
    title: 'Generate',
    body: 'AI produces the first working version fast; engineers review and refine every output.',
  },
  {
    n: '03',
    title: 'Iterate',
    body: 'Feedback loops in hours, not weeks — you see it working as you explain it.',
  },
  {
    n: '04',
    title: 'Ship',
    body: 'Production-ready software in days, not weeks — humans stay in the loop.',
  },
]

const VIBE_GAINS = [
  { value: '3×', label: 'Faster delivery vs traditional development' },
  { value: '↓ Cost', label: 'Less time on boilerplate, more on what matters' },
  { value: 'More loops', label: 'Same budget, dramatically more iterations' },
  { value: 'Same quality', label: 'Engineers on architecture, AI on execution' },
]

const CONTRAST = [
  { old: 'Process-first thinking', ours: 'Outcome-first execution' },
  { old: 'Meetings about meetings', ours: 'Direct, async communication' },
  { old: 'Roadmaps that never ship', ours: 'Working software, fast' },
  { old: 'Strategy decks, no follow-through', ours: 'Real applications that reach users' },
]

const DISCIPLINES = [
  { label: 'Workflow Automation' },
  { label: 'AI Agents' },
  { label: 'Document Processing' },
  { label: 'Data Pipelines' },
  { label: 'Predictive Models' },
  { label: 'Internal Tools' },
  { label: 'Custom Integrations' },
  { label: 'Applied AI' },
]

export const metadata = {
  title: 'About Cosmonus | AI Systems That Automate Work',
  description: 'Cosmonus is a product and engineering team that builds AI systems to automate real workflows — from first prototype to production. Founded by Sri Gokul Krishnan.',
  keywords: ['about cosmonus', 'AI automation', 'AI product engineering', 'Sri Gokul Krishnan', 'applied AI', 'workflow automation'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Cosmonus | AI Systems That Automate Work',
    description: 'A product and engineering team building AI that takes on the manual, repetitive work — from first prototype to production.',
    url: 'https://cosmonus.com/about',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cosmonus',
    description: 'AI systems that automate the work — built to ship, not to demo.',
    images: ['/images/ICON.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__split">
            <div className="about-hero__text">
              <span className="eyebrow">About Cosmonus</span>
              <h1 className="about-hero__title">
                We do what&apos;s needed.<br />Not what&apos;s comfortable.
              </h1>
              <p className="lead about-hero__lead">
                Most teams lose hours a day to work software should be doing — manual handoffs,
                repetitive decisions, data re-keyed by hand. We build AI systems that take that work
                on end to end, from first prototype to something you run in production.
              </p>
            </div>
            <div className="about-hero__visuals">
              <div className="about-img about-img--main">
                <span className="about-img__label">Studio · Cosmonus</span>
              </div>
            </div>
          </div>
          <AboutImageCarousel />
        </div>
      </section>

      {/* Why we exist */}
      <section className="about-why">
        <div className="container">
          <div className="about-why__grid">
            <div className="about-why__left">
              <span className="eyebrow">Why we exist</span>
              <h2 className="about-why__title">Built out of frustration with how things get done.</h2>
            </div>
            <div className="about-why__right">
              <p>
                Every company I worked at cared more about process than outcome — meetings about
                meetings, roadmaps that never shipped, strategy decks that never touched a real user.
              </p>
              <p>
                Most software is the same: work that could be automated is still done by hand,
                answers arrive a week late. Cosmonus builds AI that runs the workflow itself — and
                StayOnMap, our first product, is proof of what that looks like shipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vibe coding */}
      <section className="about-vibe">
        <div className="container">
          <div className="about-vibe__head">
            <span className="eyebrow">How we build</span>
            <h2 className="about-vibe__title">Vibe coding — describe it, ship it.</h2>
            <p className="about-vibe__lead">
              Pioneered by Andrej Karpathy: describe what you want in plain English, AI generates it.
              It&apos;s why the gap between ask and running software is measured in hours.
            </p>
          </div>

          <div className="about-vibe__steps">
            {VIBE_STEPS.map((s) => (
              <div key={s.n} className="about-vibe__step">
                <span className="about-vibe__step-n mono">{s.n}</span>
                <h4 className="about-vibe__step-title">{s.title}</h4>
                <p className="about-vibe__step-body">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="about-vibe__gains">
            {VIBE_GAINS.map((g) => (
              <div key={g.label} className="about-vibe__gain">
                <span className="about-vibe__gain-value">{g.value}</span>
                <span className="about-vibe__gain-label">{g.label}</span>
              </div>
            ))}
          </div>

          <p className="about-vibe__note">
            Vibe coding doesn&apos;t replace engineers — it multiplies them. AI handles execution;
            our team handles judgement.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="about-founder">
        <div className="container">
          <span className="eyebrow about-founder__eyebrow">The founder</span>
          <div className="about-founder__split">

            <div className="about-founder__identity">
              <img src="/images/assets/mockups works/gokul - Copy.jpg" alt="Sri Gokul Krishnan" className="about-founder__avatar" />
              <h3 className="about-founder__name">Sri Gokul Krishnan</h3>
              <p className="about-founder__role">Founder · Product Designer &amp; Engineer</p>
              <div className="about-founder__tags">
                {['9+ yrs Product Design', 'Fullstack', 'AI-native', 'Claude Code', 'Designer-Engineer'].map((t) => (
                  <span key={t} className="about-founder__tag">{t}</span>
                ))}
              </div>
              <div className="about-founder__location">
                <span>📍 Chennai</span>
                <span>✍️ LinkedIn &amp; X</span>
              </div>
            </div>

            <div className="about-founder__content">
              <p className="about-founder__quote">
                &ldquo;Somewhere along the way I got tired of waiting on handoffs and taught myself
                to ship fullstack applications — and I mean actually ship. The stack doesn&apos;t matter,
                whatever the product needs.&rdquo;
              </p>
              <p className="about-founder__bio">
                9+ years as a product designer. I pick up tools the way other people pick up books:
                fast, with intent, and only because there&apos;s something I want to build with them.
              </p>

              <div className="about-founder__obsessions">
                <p className="about-founder__obsessions-label">What I&apos;m obsessed with right now</p>
                <ul>
                  <li><strong>Claude Code as a discipline, not a toy.</strong> Guardrails before features. The teams winning with AI aren&apos;t generating the most code — they&apos;re the ones who trust what they generate.</li>
                  <li><strong>System prompts as IP.</strong> A prompt library, compounded over months of real product work, is a moat people are still sleeping on.</li>
                  <li><strong>The designer-engineer archetype.</strong> I think this is the role that defines the next decade of software. I&apos;m betting my career on it.</li>
                </ul>
              </div>

              <div className="about-founder__building">
                <p className="about-founder__obsessions-label">Currently building</p>
                <p><strong>AI systems that automate real work</strong> — and <strong>StayOnMap</strong>, our first product: applied to India&apos;s rental market with direct owner contact, live trust scoring, AI-driven fraud detection, and full lease management. Proof of what we ship.</p>
              </div>

              <a href="https://srigokulkrishnan.com" target="_blank" rel="noopener noreferrer" className="about-founder__link">
                srigokulkrishnan.com →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contrast */}
      <section className="about-contrast">
        <div className="container">
          <div className="about-contrast__grid">
            <div className="about-contrast__col about-contrast__col--old">
              <p className="about-contrast__col-label">The typical approach</p>
              <ul>
                {CONTRAST.map((c) => (
                  <li key={c.old}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c.old}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-contrast__divider" aria-hidden="true" />
            <div className="about-contrast__col about-contrast__col--ours">
              <p className="about-contrast__col-label">How we do it</p>
              <ul>
                {CONTRAST.map((c) => (
                  <li key={c.ours}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3.5 3.5L11.5 3.5" stroke="var(--brand)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {c.ours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="about-how">
        <div className="container">
          <div className="about-how__head">
            <span className="eyebrow">How we work</span>
            <h2 className="about-how__title">Validate. Iterate. Ship.</h2>
          </div>
          <div className="about-how__grid">
            {HOW.map((s) => (
              <div key={s.n} className="about-how__card">
                <span className="about-how__n mono">{s.n}</span>
                <h4 className="about-how__card-title">{s.title}</h4>
                <p className="about-how__card-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — dark glassmorphism */}
      <section className="about-testimonials about-testimonials--glass">
        <div className="container">
          <div className="about-testimonials__head">
            <span className="eyebrow">What clients say</span>
            <h2 className="about-testimonials__title">Trusted by founders and teams.</h2>
          </div>
          <div className="about-testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="about-tcard">
                <p className="about-tcard__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="about-tcard__author">
                  <img src={t.img} alt={t.name} className="about-tcard__avatar" />
                  <div>
                    <p className="about-tcard__name">{t.name}</p>
                    <p className="about-tcard__role">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="about-disciplines">
        <div className="container">
          <div className="about-disciplines__head">
            <span className="eyebrow">What we build</span>
            <h2 className="about-disciplines__title">One team, many capabilities.</h2>
            <p className="lead about-disciplines__lead">
              Not off-the-shelf tools to wire together — AI built around your actual workflows and
              the systems you already run.
            </p>
          </div>
          <div className="about-disciplines__grid">
            {DISCIPLINES.map((d) => (
              <div key={d.label} className="about-disciplines__item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="2.5" fill="var(--brand)" />
                </svg>
                {d.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__head">
            <span className="eyebrow">What we stand for</span>
            <h2 className="about-values__title">Three things that don&apos;t move.</h2>
          </div>
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__card">
                <div className="about-values__card-band" style={{ background: v.gradient }} />
                <div className="about-values__card-body-wrap">
                  <h4 className="about-values__card-title">{v.title}</h4>
                  <p className="about-values__card-body">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
    </>
  )
}
