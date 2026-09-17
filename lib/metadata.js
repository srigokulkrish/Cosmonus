export const SITE_URL = 'https://www.cosmonus.com'

// Next shallow-merges metadata, so a page that sets `openGraph` replaces the
// root block outright. Building the whole object here keeps og:url pointing at
// the page being shared instead of inheriting the homepage's.
export function pageMeta({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Cosmonus',
      url: `${SITE_URL}${path}`,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@cosmonus',
      creator: '@cosmonus',
      title,
      description,
    },
  }
}
