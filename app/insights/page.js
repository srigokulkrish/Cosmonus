import BlogFilter from '@/components/BlogFilter'

const POSTS = [
  {
    tag: 'AI Products',
    title: 'Building AI products people actually use',
    excerpt: 'The hard part was never the model. It’s designing intelligence into a product so it feels helpful instead of gimmicky — and earns trust instead of eroding it.',
    gradient: 'linear-gradient(135deg, #635BFF 0%, #3882F6 100%)',
  },
  {
    tag: 'Engineering',
    title: 'Engineering for startups: move fast without building a mess',
    excerpt: 'Speed and quality aren’t opposites. A few decisions early on decide whether you’ll still be moving fast six months from now.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    tag: 'Product',
    title: 'Deciding what not to build',
    excerpt: 'Every feature you add is a feature you maintain forever. The best product decisions are usually about what to leave out.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    tag: 'Automation',
    title: 'The quiet ROI of workflow automation',
    excerpt: 'Nobody celebrates the task that no longer needs doing. But remove enough of them and a team’s whole week changes shape.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    tag: 'Perspective',
    title: 'Designing software that thinks with you',
    excerpt: 'The interesting frontier isn’t AI replacing people. It’s software that becomes a genuine collaborator in the work.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    tag: 'Perspective',
    title: 'What shipping real products taught us',
    excerpt: 'Lessons that only show up once software meets real users — and why the demo is the easy part.',
    gradient: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
  },
  {
    tag: 'Design',
    title: 'Why a design system is a product decision',
    excerpt: 'A design system isn’t about pretty components. It’s about shipping consistent, quality experiences at speed.',
    gradient: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
  },
  {
    tag: 'Architecture',
    title: 'Architecture for products that need to evolve',
    excerpt: 'Most software has to change in ways you can’t predict. Here’s how we structure systems to bend instead of break.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
]

export const metadata = {
  title: 'Insights',
  description:
    'Thoughtful writing on building AI products, startup engineering, product strategy, automation, and the craft of shipping intelligent software.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights | Cosmonus',
    description: 'Writing on building AI products, engineering, product strategy, and shipping intelligent software.',
    url: 'https://cosmonus.com/insights',
    images: ['/images/ICON.png'],
  },
}

export default function InsightsPage() {
  return (
    <>
      <section className="blog-page-hero">
        <div className="container">
          <div className="blog-page-hero__inner">
            <div>
              <span className="eyebrow">Insights</span>
              <h1 className="blog-page-hero__title">Notes from building intelligent software</h1>
              <p className="blog-page-hero__desc">
                Thinking on AI products, engineering, and product strategy &mdash; written by the
                people doing the work, for the people about to do the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogFilter posts={POSTS} />
    </>
  )
}
