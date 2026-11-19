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
export type Menu = { id: MenuId; label: string; href: string; title: string; desc: string; links: MenuLink[]; inNav?: boolean };

export const menus: Menu[] = [
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
        blurb: "Helping people find their home. Broker-free rentals on a map; owners and tenants talk directly, with no commission.",
      },
      {
        name: "Happenous",
        href: "/product/happenous",
        desc: "Life happens outside the feed",
        brand: "happenous",
        blurb: "Helping people stay connected with the activities they love, and the people nearby who do them. Live on Android.",
      },
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
  {
    id: "company",
    href: "/company",
    label: "Company",
    title: "Cosmonus",
    desc: "Who we are, what we are learning, how we make things, and how to join us.",
    links: [
      { name: "About", href: "/company/about", desc: "Who we are and why" },
      { name: "Research", href: "/company/research", desc: "What we are learning" },
      { name: "Blog", href: "/company/blog", desc: "Ideas explained in plain language" },
      { name: "Careers", href: "/company/careers", desc: "Work on the real world" },
      { name: "Studio", href: "/studio", desc: "How we make our products" },
    ],
  },
  {
    id: "studio",
    href: "/studio",
    label: "Studio",
    /** Not in the header or footer: Cosmonus is not a studio for hire. Its pages stay, linked from Company. */
    inNav: false,
    title: "The studio",
    desc: "How we make our own products: design, motion and generative media, made in-house for StayOnMap, Happenous and Cosmonus.",
    links: [
      { name: "Web", href: "/studio/web", desc: "How we design our product interfaces" },
      { name: "Animation", href: "/studio/animation", desc: "Motion inside our products" },
      { name: "Image Generation", href: "/studio/image-generation", desc: "How we make our imagery" },
      { name: "Video", href: "/studio/video", desc: "How we make our product films" },
    ],
  },
];

/** The menus shown in the header and footer, in order. Studio is left out; see its `inNav`. */
export const navMenus = menus.filter((m) => m.inNav !== false);

/** Which menu a pathname belongs to (highlights that label in the nav on inner pages). Studio pages sit under Company. */
export function menuForPath(pathname: string): MenuId | null {
  const seg = pathname.split("/")[1];
  if (seg === "studio") return "company";
  return (navMenus.find((m) => m.id === seg)?.id ?? null) as MenuId | null;
}

export const site = {
  name: "Cosmonus",
  /** Canonical origin, with www — the same as the original cosmonus.com's canonical and sitemap. */
  url: "https://www.cosmonus.com",
  tagline: "Building Real-World Intelligence.",
  legal: "Cosmonus Pvt Ltd",
  description:
    "Cosmonus is an independent technology company. We build our own products — StayOnMap and Happenous — and research systems that understand the physical world: where things are, what they mean, and what to do next.",
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
    "AI engineering",
    "prompt engineering",
    "context engineering",
    "retrieval augmented generation",
    "vector database",
    "embeddings",
    "Model Context Protocol",
  ],
};
