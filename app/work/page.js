import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Case Studies | Cosmonus',
  description: 'Intelligence in production: the business problem, how intelligence was applied, the technical approach, and the measurable outcome — for every system we\'ve built.',
  keywords: ['intelligent systems case studies', 'AI engineering case studies', 'reasoning systems', 'decision systems', 'AI in production'],
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case Studies | Cosmonus',
    description: 'Intelligence in production — the problem, the approach, the measurable outcome.',
    url: 'https://cosmonus.com/work',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Cosmonus',
    description: 'Intelligence in production — the problem, the approach, the measurable outcome.',
    images: ['/images/ICON.png'],
  },
}

export default function WorkPage() {
  return <ComingSoon title="Case Studies" />
}
