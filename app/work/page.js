import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Case Studies | Cosmonus',
  description: 'Intelligence in production. How teams turn data into knowledge graphs, predictions, and automated decisions on the Cosmonus Intelligence Layer.',
  keywords: ['intelligence infrastructure case studies', 'AI platform deployments', 'spatial intelligence', 'decision automation', 'enterprise intelligence'],
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Case Studies | Cosmonus',
    description: 'Intelligence in production — turning data into decisions on the Cosmonus Intelligence Layer.',
    url: 'https://cosmonus.com/work',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Cosmonus',
    description: 'Intelligence in production — turning data into decisions on the Cosmonus Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function WorkPage() {
  return <ComingSoon title="Case Studies" />
}
