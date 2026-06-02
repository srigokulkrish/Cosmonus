import BlogFilter from '@/components/BlogFilter'

const POSTS = [
  {
    tag: 'Perspective',
    title: 'Why most product teams are solving the wrong problem',
    excerpt: 'Process overhead, internal politics, and roadmaps that never ship — the hidden reasons why great ideas die before they reach users.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    tag: 'Guide',
    title: 'Validate before you build: a practical framework',
    excerpt: 'How to test whether an idea is worth pursuing — without burning time or money on the wrong assumptions.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    tag: 'AI',
    title: 'What AI automation actually looks like in a small business',
    excerpt: 'Real use cases, real results — not hype. How we\'ve helped businesses automate the right things.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    tag: 'Design',
    title: 'The design decisions that make or break a go-to-market site',
    excerpt: 'First impressions, clarity over beauty, and the specific choices that turn visitors into leads.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    tag: 'Business',
    title: 'Working with freelancers and studios: what clients get wrong',
    excerpt: 'The expectations gap, how to brief effectively, and why the best outcomes come from real collaboration.',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #00D4FF 100%)',
  },
  {
    tag: 'Perspective',
    title: 'Iteration isn\'t a buzzword — it\'s the only thing that works',
    excerpt: 'Why the companies that ship often and learn fast consistently outperform those that plan endlessly and ship once.',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
  {
    tag: 'AI',
    title: 'How AI Is reshaping brand identity in 2026',
    excerpt: 'The tools, the patterns, and the creative decisions that separate AI-assisted work from AI-replaced work.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    tag: 'Engineering',
    title: 'Building scalable products with AI-first architecture',
    excerpt: 'How we structure systems so AI is a core capability, not a feature bolted on after the fact.',
    gradient: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
  },
  {
    tag: 'Strategy',
    title: 'From idea to launch: the Cosmonus playbook',
    excerpt: 'The process we use for every product — from first conversation to live in production.',
    gradient: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
  },
  {
    tag: 'Guide',
    title: 'The founder\'s guide to choosing your first tech stack',
    excerpt: 'Speed, cost, and scalability don\'t always point in the same direction. Here\'s how to pick the right stack for where you are now.',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  },
  {
    tag: 'AI',
    title: 'Prompt engineering for product builders',
    excerpt: 'Practical patterns for getting reliable, useful output from AI — without becoming a full-time AI researcher.',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  },
  {
    tag: 'Design',
    title: 'Why your landing page isn\'t converting',
    excerpt: 'The most common design and copy mistakes that kill conversion — and the specific fixes that move the needle.',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #FF6B9D 100%)',
  },
]

export const metadata = {
  title: 'Blog | Insights on AI, Design & Product Building',
  description: 'Stories, guides, and perspectives on AI automation, product development, web design, and growing smarter businesses — from the Cosmonus team.',
  keywords: ['AI blog', 'product design insights', 'web development tips', 'automation guides', 'startup growth', 'digital product blog'],
  openGraph: {
    title: 'Cosmonus Blog | AI, Design & Product Insights',
    description: 'Practical thinking on building products, automating operations, and growing with AI.',
    url: 'https://cosmonus.com/blogs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmonus Blog',
    description: 'Practical thinking on building products and growing with AI.',
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
              <h1 className="blog-page-hero__title">Insights & ideas from the Cosmonus team</h1>
              <p className="blog-page-hero__desc">
                Stories on AI, product building, automation, and growing smarter businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogFilter posts={POSTS} />
    </>
  )
}
