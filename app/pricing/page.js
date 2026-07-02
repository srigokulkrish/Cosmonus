import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Pricing | Cosmonus',
  description: 'Transparent pricing for the Cosmonus Intelligence Layer — knowledge graphs, predictive and agent intelligence, and decision automation at the scale you need.',
  keywords: ['intelligence platform pricing', 'AI infrastructure pricing', 'enterprise intelligence plans', 'platform access', 'usage-based intelligence'],
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | Cosmonus',
    description: 'Transparent pricing for the Cosmonus Intelligence Layer — platform capabilities at the scale you need.',
    url: 'https://cosmonus.com/pricing',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Cosmonus',
    description: 'Transparent pricing for the Cosmonus Intelligence Layer.',
    images: ['/images/ICON.png'],
  },
}

export default function PricingPage() {
  return <ComingSoon title="Pricing" />
}
