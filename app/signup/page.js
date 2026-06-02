import ComingSoon from '@/components/ComingSoon'

export const metadata = {
  title: 'Book a Consultation | Cosmonus',
  description: 'Book a free consultation with Cosmonus. Tell us what you\'re building and we\'ll tell you how we can help.',
  keywords: ['book consultation', 'free consultation', 'digital agency consultation', 'start a project'],
  openGraph: {
    title: 'Book a Consultation | Cosmonus',
    description: 'Tell us what you\'re building — we\'ll tell you how we can help.',
    url: 'https://cosmonus.com/signup',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation | Cosmonus',
    description: 'Tell us what you\'re building — we\'ll tell you how we can help.',
  },
}

export default function SignupPage() {
  return <ComingSoon title="Book Consultation" />
}
