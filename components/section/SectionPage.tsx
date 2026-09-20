import type { Metadata } from "next";
import Link from "next/link";
import { BorderedCards } from "@/components/company/BorderedCards";
import { InnerHero } from "@/components/ui/Hero";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Band, HALVES, Intro, PAIRS, SectionHead, SideHead, SideLayout, Steps, THIRDS } from "@/components/ui/Section";
import type { SectionContent, SectionIndexItem } from "@/content/sections";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { menus } from "@/lib/site";

/** `metadata` for a section landing route (layout adds "— Cosmonus"). */
export function sectionMetadata(c: SectionContent, path: string): Metadata {
  return pageMetadata({ title: c.meta.title, description: c.meta.description, path });
}

/** One child page in the index: placeholder panel, mono number, name (underlines on hover), description. The whole card is the link. */
function IndexCard({ item, index, tall }: { item: SectionIndexItem; index: number; tall: boolean }) {
  return (
    <Link href={item.href} className="row flex flex-col gap-5">
      <MediaPanel
        tone={item.tone}
        label={item.asset}
        src={item.image}
        decorative
        className={`h-[280px] rounded-media ${tall ? "sm:h-[360px]" : ""}`}
      />
      <span className="flex flex-col gap-2.5">
        <MonoLabel dot>
          {String(index + 1).padStart(2, "0")} — {item.name}
        </MonoLabel>
        <span className="rowname text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{item.title ?? item.name}</span>
        <span className="text-base leading-normal text-pretty text-muted">{item.desc}</span>
      </span>
    </Link>
  );
}

/**
 * Section landing template (Studio, Product, Company, Intelligence, Agents):
 * hero → two-column intro → index of the section's pages → one section of substance → band to a sibling section.
 */
export function SectionPage({ content: c, path }: { content: SectionContent; path?: string }) {
  const n = c.index.items.length;
  const cards = c.index.items.map((item, i) => <IndexCard key={item.href} item={item} index={i} tall={n === 2} />);
  const menu = path ? menus.find((m) => m.href === path) : undefined;
  return (
    <>
      {menu && <JsonLd data={breadcrumbJsonLd([{ name: menu.label, path: menu.href }])} />}
      <InnerHero tone={c.hero.tone} title={c.hero.title} lead={c.hero.lead} video={c.hero.video} />
      <Intro {...c.intro} />

      {/* On the site grid: four pages go 2×2 beside the heading (each card one third wide), three sit in thirds,
          two (the products) are large halves. */}
      {n === 4 ? (
        <section className="wrap sec">
          <SideLayout head={<SideHead title={c.index.title} lead={c.index.lead} />}>
            <div className={`${PAIRS} gap-y-10`}>{cards}</div>
          </SideLayout>
        </section>
      ) : (
        <section className="wrap sec flex flex-col gap-12">
          <SectionHead title={c.index.title} lead={c.index.lead} />
          <div className={n === 2 ? `${HALVES} gap-y-12` : `${THIRDS} gap-y-10`}>{cards}</div>
        </section>
      )}

      {c.detail.kind === "steps" ? (
        <Steps title={c.detail.title} steps={c.detail.steps} />
      ) : (
        <BorderedCards title={c.detail.title} cards={c.detail.cards} />
      )}

      <div className="pb-[120px]">
        <Band {...c.band} arrow />
      </div>
    </>
  );
}
