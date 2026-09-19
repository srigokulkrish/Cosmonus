import type { NextConfig } from "next";

/**
 * Permanent redirects from the previous cosmonus.com's URLs (indexed by Google and linked elsewhere) to their
 * equivalents on this site, so old links keep working and keep their search ranking. Specific paths come before
 * wildcards. See wiki/seo.md.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work/stayonmap", destination: "/product/stayonmap", permanent: true },
      { source: "/work/:slug*", destination: "/product", permanent: true },
      { source: "/work", destination: "/product", permanent: true },
      { source: "/products/stayonmap", destination: "/product/stayonmap", permanent: true },
      { source: "/products/:slug*", destination: "/product", permanent: true },
      { source: "/products", destination: "/product", permanent: true },
      { source: "/approach", destination: "/company/about", permanent: true },
      { source: "/technology", destination: "/intelligence", permanent: true },
      { source: "/about", destination: "/company/about", permanent: true },
      { source: "/careers", destination: "/company/careers", permanent: true },
      { source: "/research/:slug*", destination: "/company/research", permanent: true },
      { source: "/research", destination: "/company/research", permanent: true },
      { source: "/support", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
