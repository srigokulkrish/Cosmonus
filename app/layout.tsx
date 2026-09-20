import type { Metadata } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { NavProgress } from "@/components/site/NavProgress";
import { SmoothAnchors } from "@/components/site/SmoothAnchors";
import { siteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// The original cosmonus.com pairing: Schibsted Grotesk for everything, JetBrains Mono for labels.
const grotesk = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-grotesk", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-face", display: "swap" });
// The third face, used in exactly one place: the Image Generation banner title (owner, 2026-09-21).

// Site-wide SEO (mirrors the original cosmonus.com). Each page adds its own title, description, canonical and
// share tags through pageMetadata() in lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.founder.url }],
  creator: site.name,
  publisher: site.name,
  keywords: site.keywords,
  category: "technology",
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Google Search Console "HTML tag" verification: set GOOGLE_SITE_VERIFICATION to the tag's content value.
  // (If the domain is verified by DNS record instead, nothing is needed here.)
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-btn focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <NavProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SmoothAnchors />
        {/* Organization + WebSite structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }} />
      </body>
    </html>
  );
}
