import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Get Started | Cosmonus',
  description: 'Get started on the Cosmonus Intelligence Layer. Tell us the data you work with and the decisions you need to make — we\'ll help you turn one into the other.',
  keywords: ['get started intelligence layer', 'AI platform access', 'intelligence infrastructure onboarding', 'request access'],
  alternates: { canonical: '/signup' },
  openGraph: {
    title: 'Get Started | Cosmonus',
    description: 'Get started on the Cosmonus Intelligence Layer — turn your data into decisions.',
    url: 'https://cosmonus.com/signup',
    images: ['/images/ICON.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started | Cosmonus',
    description: 'Get started on the Cosmonus Intelligence Layer — turn your data into decisions.',
    images: ['/images/ICON.png'],
  },
}

export default function SignupPage() {
  return <ComingSoon title="Get Started" />
}
