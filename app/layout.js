import 'lenis/dist/lenis.css'
import '../styles/globals.css'
import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'
import CxReveal from '../components/CxReveal'

const grotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_URL = 'https://cosmonus.com'
const SITE_DESC = 'Cosmonus engineers intelligent software systems from first principles — software that reads context, reasons over information, automates hard decisions, and improves with use.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cosmonus — Intelligence Engineering',
    template: '%s | Cosmonus',
  },
  description: SITE_DESC,
  keywords: ['intelligence engineering', 'reasoning systems', 'decision systems', 'knowledge systems', 'agent orchestration', 'spatial computing'],
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
    title: 'Cosmonus — Intelligence Engineering',
    description: SITE_DESC,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cosmonus',
    creator: '@cosmonus',
    title: 'Cosmonus — Intelligence Engineering',
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
      sameAs: ['https://www.linkedin.com/company/cosmonus'],
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

const THEME_INIT = `
try {
  var stored = localStorage.getItem('cosmonus-theme');
  var theme = stored === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
} catch (e) {}
`

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${grotesk.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <div className="site-shell">
          <SmoothScroll />
          <CxReveal />
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
