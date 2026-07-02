import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Pricing | Cosmonus',
  description: 'How Cosmonus engagements are priced: a fixed-price first phase with a defined outcome, scoped to the decision your system needs to make — never an open-ended research project.',
  keywords: ['AI engineering pricing', 'intelligent systems cost', 'AI engagement pricing', 'fixed price AI project'],
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Cosmonus',
    description: 'A fixed-price first phase with a defined outcome — never an open-ended research project.',
    url: 'https://cosmonus.com/pricing',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Cosmonus',
    description: 'A fixed-price first phase with a defined outcome — never an open-ended research project.',
    images: ['/images/ICON.png'],
  },
}

export default function PricingPage() {
  return <ComingSoon title="Pricing" />
}
