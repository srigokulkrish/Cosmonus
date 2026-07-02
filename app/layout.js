import 'bootstrap/dist/css/bootstrap.min.css'
import 'lenis/dist/lenis.css'
import '../styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'

const SITE_URL = 'https://cosmonus.com'
const SITE_DESC = 'Cosmonus builds the Intelligence Layer beneath modern operations — one platform that unifies data into a living Ontology and turns it into spatial, predictive, and agent intelligence, then into automated decisions.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cosmonus — AI-Native Intelligence Infrastructure',
    template: '%s | Cosmonus',
  },
  description: SITE_DESC,
  keywords: ['intelligence infrastructure', 'intelligence layer', 'ontology', 'knowledge graph', 'spatial intelligence', 'predictive intelligence', 'agent intelligence', 'decision automation', 'AI-native platform'],
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
    title: 'Cosmonus — AI-Native Intelligence Infrastructure',
    description: SITE_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cosmonus',
    creator: '@cosmonus',
    title: 'Cosmonus — AI-Native Intelligence Infrastructure',
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
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
