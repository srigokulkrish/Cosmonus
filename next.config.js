/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/products', destination: '/work', permanent: true },
      { source: '/products/:slug*', destination: '/work/:slug*', permanent: true },
      { source: '/technology', destination: '/approach', permanent: true },
    ]
  },
};
