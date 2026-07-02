import BlogFilter from '@/components/BlogFilter'

const POSTS = [
  {
    tag: 'Perspective',
    title: 'Most teams have data problems, not intelligence problems',
    excerpt: 'You don\'t need more records or another dashboard. You need the step nobody built: turning what you already have into knowledge, and knowledge into a decision.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    tag: 'Guide',
    title: 'From data to decisions: a practical framework',
    excerpt: 'Moving raw signals through a knowledge graph into predictions and automated decisions, without stalling on infrastructure.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    tag: 'AI',
    title: 'What agent intelligence looks like in production',
    excerpt: 'How teams put agents to work on the decisions that matter — safely, reliably, no hype.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    tag: 'Design',
    title: 'Designing interfaces that make intelligence legible',
    excerpt: 'The choices that turn predictions and automated decisions into something people trust and act on.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    tag: 'Business',
    title: 'Buying intelligence infrastructure: what teams get wrong',
    excerpt: 'How to scope a proof of concept, and why the best outcomes come from a shared platform, not point tools.',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    tag: 'Engineering',
    title: 'Building on an intelligence-first architecture',
    excerpt: 'Structuring systems so intelligence is a shared layer every capability runs on, not a feature bolted on later.',
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
  title: 'Blog | Notes on Intelligence Infrastructure',
  description: 'What we learn standing up intelligence in production — knowledge graphs, agents, decision automation — written for the person about to build the same thing.',
  keywords: ['intelligence infrastructure blog', 'knowledge graph', 'decision automation', 'predictive intelligence', 'agent intelligence', 'AI platform engineering'],
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Cosmonus Blog | Intelligence Infrastructure Insights',
    description: 'Practical thinking on knowledge graphs, decision automation, and turning data into intelligence.',
    url: 'https://cosmonus.com/blogs',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus Blog',
    description: 'Practical thinking on knowledge graphs, decision automation, and turning data into intelligence.',
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
                The things we learn standing up intelligence in production &mdash; knowledge graphs,
                agents, decision automation &mdash; written for the person about to build the same thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogFilter posts={POSTS} />
    </>
  )
}
