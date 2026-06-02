const BASE = 'https://cosmonus.com'

export default function sitemap() {
  const now = new Date().toISOString()

  const routes = [
    { url: '/',                          priority: 1.0,  changeFrequency: 'weekly' },

    // Solutions
    { url: '/solutions/web',             priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/solutions/branding',        priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/solutions/mobile',          priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/solutions/ai',              priority: 0.9,  changeFrequency: 'monthly' },

    // Products
    { url: '/products',                  priority: 0.85, changeFrequency: 'monthly' },
    { url: '/products/websites',         priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/apps',             priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/automation',       priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/ecommerce',        priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/seo',              priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/analytics',        priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/content',          priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/products/stayonmap',        priority: 0.75, changeFrequency: 'monthly' },

    // Company
    { url: '/about',                     priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/blogs',                     priority: 0.7,  changeFrequency: 'weekly'  },
    { url: '/careers',                   priority: 0.6,  changeFrequency: 'weekly'  },
    { url: '/partners',                  priority: 0.6,  changeFrequency: 'monthly' },
    { url: '/contact',                   priority: 0.65, changeFrequency: 'yearly'  },
    { url: '/resources',                 priority: 0.6,  changeFrequency: 'weekly'  },
    { url: '/work',                      priority: 0.65, changeFrequency: 'monthly' },
    { url: '/pricing',                   priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/signup',                    priority: 0.6,  changeFrequency: 'yearly'  },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
