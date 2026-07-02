import BlogFilter from '@/components/BlogFilter'

const POSTS = [
  {
    tag: 'Perspective',
    title: 'Your software records the business. It doesn\'t understand it.',
    excerpt: 'Why every system you own can tell you what happened and none can tell you what to do — and what closing that gap actually requires.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    tag: 'Guide',
    title: 'From data to decisions: a practical framework',
    excerpt: 'Moving raw signals through a domain model into reasoned, accountable decisions — without stalling on infrastructure.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    tag: 'AI',
    title: 'What autonomous agents look like in production',
    excerpt: 'How agents earn the right to act on real decisions — scoped autonomy, self-verification, and the oversight architecture around them.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    tag: 'Design',
    title: 'Designing interfaces that make intelligence legible',
    excerpt: 'The choices that turn a system\'s reasoning into something people can inspect, question, and trust.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    tag: 'Business',
    title: 'Buying intelligence: what teams get wrong',
    excerpt: 'Why "add AI" projects stall, how to scope the first system that changes a real decision, and the questions to ask any vendor — including us.',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    tag: 'Engineering',
    title: 'Architecture for systems that reason',
    excerpt: 'Structuring software so reasoning is a designed capability with evidence and audit trails — not a feature bolted on later.',
    gradient: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
  },
  {
    tag: 'Strategy',
    title: 'From data to decisions: the Cosmonus playbook',
    excerpt: 'The path from your first connected data source to a decision running itself in production — the order we take it in, and what breaks if you skip a step.',
    gradient: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
  },
]

export const metadata = {
  title: 'Blog | Notes on Engineering Intelligence',
  description: 'What we learn building systems that reason and decide — reasoning engines, agents, knowledge systems — written for the person about to build the same thing.',
  keywords: ['intelligent systems blog', 'reasoning systems', 'agent orchestration', 'AI engineering', 'decision systems', 'AI architecture'],
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Cosmonus Blog | Notes on Engineering Intelligence',
    description: 'Practical thinking on reasoning systems, agents, and turning data into accountable decisions.',
    url: 'https://cosmonus.com/blogs',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus Blog',
    description: 'Practical thinking on reasoning systems, agents, and turning data into accountable decisions.',
    images: ['/images/ICON.png'],
  },
}

export default function BlogsPage() {
  return (
    <>
      <section className="blog-page-hero">
        <div className="container">
          <div className="blog-page-hero__inner">
            <div>
              <span className="eyebrow">Blog</span>
              <h1 className="blog-page-hero__title">Notes from the space between data and decisions</h1>
              <p className="blog-page-hero__desc">
                The things we learn building systems that reason in production &mdash; reasoning
                engines, agents, knowledge systems &mdash; written for the person about to build
                the same thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogFilter posts={POSTS} />
    </>
  )
}
