import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export const metadata = {
  title: 'Cosmonus — AI Solutions',
  description: 'AI solutions for startups, RAG, agents, automation, and more.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="d-flex flex-column min-vh-100">
          {children}
        </div>
      </body>
    </html>
  )
}
