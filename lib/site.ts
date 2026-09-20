// Navigation data, ported from menuData in raw/handoff/design/Main.dc.html.
// The mega menu, mobile menu, footer and "More in …" strips all read from here.

export type MenuLink = {
  name: string;
  href: string;
  desc: string;
  /** Product links only: brand colour key and a one-line pitch for the large menu card. */
  brand?: "stayonmap" | "happenous";
  blurb?: string;
};
export type MenuId = "studio" | "product" | "company" | "intelligence" | "agents";
export type Menu = { id: MenuId; label: string; href: string; title: string; desc: string; links: MenuLink[] };

export const menus: Menu[] = [
  {
    id: "studio",
    href: "/studio",
    label: "Studio",
    title: "The studio",
    desc: "The creative practice behind every Cosmonus product: design, motion and generative media, made in-house.",
    links: [
      { name: "Web", href: "/studio/web", desc: "Sites and product interfaces" },
      { name: "Animation", href: "/studio/animation", desc: "Motion that explains" },
      { name: "Image Generation", href: "/studio/image-generation", desc: "Art-directed generative imagery" },
      { name: "Video", href: "/studio/video", desc: "Generated and edited film" },
    ],
  },
  {
    id: "product",
    href: "/product",
    label: "Product",
    title: "Products for the physical world",
    desc: "Two products, both built on the idea that software should know where you are and what is around you.",
    links: [
      {
        name: "StayOnMap",
        href: "/product/stayonmap",
        desc: "Rent with intelligence",
        brand: "stayonmap",
        blurb: "Broker-free rentals on a live map. Every listing trust-scored before it surfaces; owners and tenants connect directly.",
      },
      {
        name: "Happenous",
        href: "/product/happenous",
        desc: "Life happens outside the feed",
        brand: "happenous",
        blurb: "An activity-based social network, built around what people are doing nearby. In build — not open yet.",
      },
    ],
  },
  {
    id: "company",
    href: "/company",
    label: "Company",
    title: "Cosmonus",
    desc: "Who we are, what we are learning, what we can explain, and how to join us.",
    links: [
      { name: "About", href: "/company/about", desc: "Who we are and why" },
      { name: "Research", href: "/company/research", desc: "What we are learning" },
      { name: "Blog", href: "/company/blog", desc: "Ideas explained in plain language" },
      { name: "Careers", href: "/company/careers", desc: "Work on the real world" },
    ],
  },
  {
    id: "intelligence",
    href: "/intelligence",
    label: "Intelligence",
    title: "Real-world intelligence",
    desc: "How our systems understand place, trust and context.",
    links: [
      { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Where things are, and why it matters" },
      { name: "Trust Score", href: "/intelligence/trust-score", desc: "A readable signal of reliability" },
    ],
  },
  {
    id: "agents",
    href: "/agents",
    label: "Agents",
    title: "Systems that act",
    desc: "From understanding to finished work, with a person able to check the result.",
    links: [
      { name: "Workflow Agents", href: "/agents/workflow", desc: "One task, start to finish" },
      { name: "Automation", href: "/agents/automation", desc: "Routine work, handled reliably" },
      { name: "Experiments", href: "/agents/experiments", desc: "Prototypes and open questions" },
      { name: "Conventional & Multi-tool Systems", href: "/agents/systems", desc: "Classic software and many-tool agents" },
    ],
  },
];

/** Which menu a pathname belongs to (highlights that label in the nav on inner pages). */
export function menuForPath(pathname: string): MenuId | null {
  const seg = pathname.split("/")[1];
  return (menus.find((m) => m.id === seg)?.id ?? null) as MenuId | null;
}

export const site = {
  name: "Cosmonus",
  /** Canonical origin, with www — the same as the original cosmonus.com's canonical and sitemap. */
  url: "https://www.cosmonus.com",
  tagline: "Building Real-World Intelligence.",
  legal: "Cosmonus Pvt Ltd",
  description:
    "Cosmonus is the parent company behind products, research and systems that understand the physical world — where things are, what they mean, and what to do next.",
  contactEmail: "hello@cosmonus.com",
  /** SEO facts carried over from the original cosmonus.com's tags and structured data. */
  twitter: "@cosmonus",
  founder: { name: "Sri Gokul Krishnan", url: "https://srigokulkrishnan.com" },
  sameAs: ["https://www.linkedin.com/company/cosmonus"],
  keywords: [
    "Cosmonus",
    "real-world intelligence",
    "spatial intelligence",
    "trust score",
    "AI agents",
    "workflow agents",
    "StayOnMap",
    "broker-free rentals",
    "map-based rental search",
    "Happenous",
    "activity-based social network",
    "creative studio",
    "generative video",
    "AI engineering",
    "prompt engineering",
    "context engineering",
    "retrieval augmented generation",
    "vector database",
    "embeddings",
    "Model Context Protocol",
  ],
};
