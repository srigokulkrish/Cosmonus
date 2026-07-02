import 'bootstrap/dist/css/bootstrap.min.css'
import 'lenis/dist/lenis.css'
import '../styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'
import CxReveal from '../components/CxReveal'

const SITE_URL = 'https://cosmonus.com'
const SITE_DESC = 'Cosmonus is an intelligence company. We design and build systems that understand a business, reason over its data, and make decisions that hold up in production — engineered from first principles, not assembled from off-the-shelf tools.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cosmonus — We Engineer Intelligence',
    template: '%s | Cosmonus',
  },
  description: SITE_DESC,
  keywords: ['intelligence company', 'AI engineering', 'reasoning systems', 'decision systems', 'agent orchestration', 'knowledge systems', 'intelligent software', 'custom AI systems'],
  applicationName: 'Cosmonus',
  authors: [{ name: 'Sri Gokul Krishnan', url: 'https://srigokulkrishnan.com' }],
  creator: 'Cosmonus',
  publisher: 'Cosmonus',
  category: 'technology',
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Cosmonus',
    title: 'Cosmonus — We Engineer Intelligence',
    description: SITE_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cosmonus',
    creator: '@cosmonus',
    title: 'Cosmonus — We Engineer Intelligence',
    description: SITE_DESC,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Cosmonus',
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      description: SITE_DESC,
      founder: { '@type': 'Person', name: 'Sri Gokul Krishnan', url: 'https://srigokulkrishnan.com' },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Cosmonus',
      url: SITE_URL,
      description: SITE_DESC,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <div className="d-flex flex-column min-vh-100">
          <SmoothScroll />
          <CxReveal />
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
