const BASE = 'https://www.cosmonus.com'

export default function sitemap() {
  const now = new Date().toISOString()

  const routes = [
    { url: '/',                              priority: 1.0,  changeFrequency: 'weekly' },

    // Work
    { url: '/work',                          priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/work/stayonmap',                priority: 0.85, changeFrequency: 'monthly' },
    { url: '/work/traffic-intelligence',     priority: 0.85, changeFrequency: 'monthly' },

    // How we build
    { url: '/approach',                      priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/research',                      priority: 0.7,  changeFrequency: 'monthly' },

    // Company
    { url: '/about',                         priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/contact',                       priority: 0.65, changeFrequency: 'yearly'  },
    { url: '/careers',                       priority: 0.5,  changeFrequency: 'monthly' },

    // Legal & support
    { url: '/support',                       priority: 0.4,  changeFrequency: 'yearly'  },
    { url: '/privacy',                       priority: 0.3,  changeFrequency: 'yearly'  },
    { url: '/terms',                         priority: 0.3,  changeFrequency: 'yearly'  },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
