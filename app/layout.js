import 'bootstrap/dist/css/bootstrap.min.css'
import 'lenis/dist/lenis.css'
import '../styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmoothScroll from '../components/SmoothScroll'

export const metadata = {
  title: 'Cosmonus — AI Solutions',
  description: 'AI solutions for startups, RAG, agents, automation, and more.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
