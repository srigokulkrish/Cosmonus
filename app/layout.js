import 'bootstrap/dist/css/bootstrap.min.css'
import 'lenis/dist/lenis.css'
import '../styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'

export const metadata = {
  metadataBase: new URL('https://cosmonus.com'),
  title: {
    default: 'Cosmonus — Design, Development & AI for Ambitious Businesses',
    template: '%s | Cosmonus',
  },
  description: 'Cosmonus helps ambitious businesses ship products, automate operations, and grow revenue — with expert design, engineering, and AI that delivers results.',
  keywords: ['digital agency', 'web development', 'AI solutions', 'product design', 'automation', 'mobile apps', 'branding', 'SEO'],
  authors: [{ name: 'Sri Gokul Krishnan' }],
  creator: 'Cosmonus',
  openGraph: {
    siteName: 'Cosmonus',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cosmonus',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();` }} />
      </head>
      <body>
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
