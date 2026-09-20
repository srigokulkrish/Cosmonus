import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { AgentsFlow } from "@/components/home/AgentsFlow";
import { StudioTabs } from "@/components/home/StudioTabs";
import { Arrow, ButtonLink, Chevron } from "@/components/ui/Button";
import { BannerVideo } from "@/components/ui/BannerVideo";
import { BANNER, BANNER_PAD } from "@/components/ui/Hero";
import { MeshBackdrop } from "@/components/ui/MeshBackdrop";
import { MediaPanel, type Tone } from "@/components/ui/MediaPanel";
import { Band, HALVES, PAIRS, SectionHead, SideHead, SideLayout, THIRDS } from "@/components/ui/Section";
import { latestByKind } from "@/content/research";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" });

// Source of truth: raw/handoff/design/Main.dc.html

const products: { name: string; href: string; site: { href: string; label: string }; tone: Tone; asset: string; title: string; body: string }[] = [
  {
    name: "StayOnMap",
    href: "/product/stayonmap",
    site: { href: "https://www.stayonmap.com", label: "Open stayonmap.com" },
    tone: "dark",
    asset: "[ STAYONMAP — map view screen recording ]",
    title: "Rent with intelligence.",
    body: "Rental infrastructure without brokers. Every listing is scored across twelve trust signals before it surfaces, and owners and tenants connect directly, on a live map, with no commission.",
  },
  {
    name: "Happenous",
    href: "/product/happenous",
    site: { href: "https://www.happenous.com", label: "See happenous.com" },
    tone: "light",
    asset: "[ HAPPENOUS — people doing things, outdoors, candid ]",
    title: "Life happens outside the feed.",
    body: "An activity-based social network, in build. Organised around what people are actually doing, and who they could do it with — not around what keeps them scrolling.",
  },
];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "#0f0f0f",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const intelligence: { name: string; href: string; desc: string; icon: ReactNode }[] = [
  {
    name: "Spatial Intelligence",
    href: "/intelligence/spatial",
    desc: "Knowing where things are, what surrounds them, and why location changes the answer.",
    icon: (
      <svg {...iconProps}>
        <path d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.800 6 10 6 10z" />
        <circle cx="10" cy="8" r="2.200" />
      </svg>
    ),
  },
  {
    name: "Trust Score",
    href: "/intelligence/trust-score",
    desc: "A readable signal for how far a listing, a place or a claim can be relied on.",
    icon: (
      <svg {...iconProps}>
        <path d="M10 2.500 16.500 5v5c0 4-2.800 6.600-6.500 7.500C6.300 16.600 3.500 14 3.500 10V5z" />
        <path d="M7.200 10.200 9.200 12.200 13 8.200" />
      </svg>
    ),
  },
];

const agentLinks = [
  { name: "Workflow agents", href: "/agents/workflow", desc: "Agents that carry one task from start to finish." },
  { name: "Automation", href: "/agents/automation", desc: "Routine work, handled the same way every time." },
  { name: "Experiments", href: "/agents/experiments", desc: "Prototypes and open questions we are testing." },
  { name: "Conventional & multi-tool systems", href: "/agents/systems", desc: "Classic software alongside agents that use many tools." },
];

// The newest research note, company news and experiment, from content/research.ts.
const research: { tone: Tone; kind: string; title: string; href: string; cover: string }[] = latestByKind().map((n) => ({
  tone: n.cover.tone,
  kind: n.kind,
  title: n.title,
  href: `/company/research/${n.slug}`,
  cover: n.cover.label,
}));

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="frame pt-2 pb-5">
        <div className={`${BANNER} ${BANNER_PAD} gap-5 bg-panel-dark text-white`}>
          <BannerVideo src="/media/home/banner.mp4" />
          <h1 className="relative m-0 text-[40px] leading-[1.05] font-normal tracking-[-0.025em] text-balance sm:text-[56px] lg:text-[72px]">
            Building Real-World
            <br />
            Intelligence.
          </h1>
          <p className="relative m-0 max-w-[580px] text-lg leading-[1.5] text-pretty text-white/85 lg:text-xl">
            Cosmonus is the parent company behind products, research and systems that understand the physical world — where things are,
            what they mean, and what to do next.
          </p>
          <ButtonLink href="#products" variant="inverse" icon={<Chevron />} className="relative mt-1">
            See what we&apos;re building
          </ButtonLink>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="wrap sec flex scroll-mt-20 flex-col gap-10">
        <SectionHead
          size="home"
          eyebrow="Studio"
          title={
            <>
              The craft behind
              <br />
              everything we ship.
            </>
          }
        />
        <StudioTabs />
      </section>

      {/* PRODUCTS */}
      <section id="products" className="wrap sec flex scroll-mt-20 flex-col gap-14">
        <SectionHead
          size="home"
          eyebrow="Product"
          title={
            <>
              Products that start
              <br />
              from the real world.
            </>
          }
        />
        {/* Runway-style columns: name above the media, one sentence, a short paragraph, two compact buttons. */}
        <div className={`${HALVES} gap-y-12`}>
          {products.map((p) => (
            <article key={p.href} className="flex flex-col">
              <h3 className="m-0 mb-4 text-2xl leading-[1.15] font-medium tracking-[-0.01em] text-ink-2">{p.name}</h3>
              <MediaPanel tone={p.tone} label={p.asset} labelSize="text-[13px]" className="h-[280px] rounded-media sm:h-[420px]" />
              <p className="m-0 mt-8 max-w-[520px] text-[26px] leading-[1.2] tracking-[-0.015em] text-balance">{p.title}</p>
              <p className="m-0 mt-4 max-w-[520px] text-[15px] leading-[1.55] text-pretty text-muted">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <ButtonLink href={p.href}>Explore {p.name}</ButtonLink>
                <ButtonLink href={p.site.href} variant="secondary" external>
                  {p.site.label}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INTELLIGENCE */}
      {/* Heading in the first third, the two disciplines side by side across the other two (each card one third wide). */}
      <section id="intelligence" className="wrap sec scroll-mt-20">
        <SideLayout
          head={
            <SideHead
              label="Intelligence"
              title="Where, what it means, what's next."
              lead="Two disciplines we practise so that software can reason about places and trust — not just text."
            />
          }
        >
          <div className={`${PAIRS} gap-y-5`}>
            {intelligence.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="row flex min-h-[240px] flex-col justify-between gap-10 rounded-card border border-line p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-btn border border-line">{c.icon}</span>
                <span className="flex flex-col gap-2.5">
                  <span className="rowname text-[25px] leading-[1.12] font-normal tracking-[-0.015em]">{c.name}</span>
                  <span className="text-[15px] leading-[1.45] text-muted">{c.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </SideLayout>
      </section>

      {/* AGENTS */}
      <section id="agents" className="sec scroll-mt-20">
        {/* Runway-style dark band on the frame: statement and button on the left, the four kinds of agent on the right.
            Its copy is inset 6.25% so it starts on the content line. */}
        <div className="frame">
          <div className="relative isolate grid grid-cols-1 gap-12 overflow-hidden rounded-hero bg-[#070d2e] px-6 py-12 text-white md:px-[6.25%] lg:grid-cols-2 lg:gap-20 lg:py-20">
            {/* Blue, violet, dark-blue and navy mesh gradient, the same treatment as the Product menu cards */}
            <MeshBackdrop palette="cosmonus" dim bloom={false} />
            <div className="relative flex flex-col items-start gap-5">
              <span className="font-mono text-xs text-white/70">Agents</span>
              <h2 className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] text-balance min-[400px]:text-[36px] sm:text-[44px] lg:text-[56px]">
                From understanding to action.
              </h2>
              <p className="m-0 max-w-[520px] text-lg leading-[1.5] text-pretty text-white/80">
                Agents turn intelligence into finished work: they take in a signal, gather context, choose their tools and hand back a result
                someone can check.
              </p>
              <ButtonLink href="/agents" variant="ghost" className="mt-2">
                Explore Agents
              </ButtonLink>
            </div>
            <ul className="relative m-0 flex list-none flex-col self-end p-0">
              {agentLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="row group flex items-start justify-between gap-6 border-b border-white/25 py-5">
                    <span className="flex flex-col gap-1">
                      <span className="rowname text-xl font-medium tracking-[-0.01em]">{l.name}</span>
                      <span className="text-[15px] leading-[1.45] text-white/85">{l.desc}</span>
                    </span>
                    <span className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW AN AGENT WORKS */}
      <section className="wrap sec">
        <AgentsFlow />
      </section>

      {/* RESEARCH */}
      <section id="research" className="wrap sec flex scroll-mt-20 flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="m-0 text-[36px] leading-[1.1] font-normal tracking-[-0.02em] sm:text-[44px] lg:text-[56px]">See the latest from Cosmonus</h2>
          <ButtonLink href="/company/research" variant="secondary">
            All research
          </ButtonLink>
        </div>
        <div className={`${THIRDS} gap-y-10`}>
          {research.map((r) => (
            <Link key={r.href} href={r.href} className="row flex flex-col gap-2.5">
              <MediaPanel tone={r.tone} label={r.cover} decorative className="mb-3 h-[216px] rounded-media" />
              <span className="text-[13px] text-muted">{r.kind}</span>
              <span className="rowname text-2xl leading-[1.2] font-normal tracking-[-0.015em]">{r.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CAREERS */}
      <div id="careers" className="scroll-mt-20 pb-[120px]">
        <Band
          title="Work on the real world."
          body="We are a small team building for streets, homes and the people in them. If that sounds like your kind of problem, we would like to hear from you."
          href="/company/careers"
          action="View open roles"
        />
      </div>
    </>
  );
}
