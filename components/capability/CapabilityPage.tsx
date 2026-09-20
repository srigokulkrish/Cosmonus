import type { Metadata } from "next";
import { BorderedCards } from "@/components/company/BorderedCards";
import { Showcase } from "@/components/capability/Showcase";
import { RowList } from "@/components/company/RowList";
import { InnerHero } from "@/components/ui/Hero";
import { Band, Intro, MediaCards, MoreStrip, Steps } from "@/components/ui/Section";
import { getCapability, type Capability, type CapabilitySection } from "@/content/capabilities";
import { inPublic } from "@/lib/media";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { menus } from "@/lib/site";

/** `metadata` for a capability route: title = page name (layout adds "— Cosmonus"), description = lead. */
export function capabilityMetadata(section: CapabilitySection, slug: string): Metadata {
  const c = getCapability(section, slug);
  return pageMetadata({ title: c.title, description: c.metaDescription, path: `/${section}/${slug}` });
}

/**
 * Capability template (10 pages): hero (with its banner video when set) → two-column intro → three media
 * cards (all from the boards) → any showcase of finished work (Video, Image Generation) → then the
 * sections written for the build — numbered process steps → "Where it shows up" rows → principles cards →
 * closing band — and finally the "More in …" strip. Each written section renders only when present.
 */
export function CapabilityPage({ capability: c, path }: { capability: Capability; path?: string }) {
  // "Where it shows up" only lists places outside this page's "More in …" strip; with fewer than two left it is dropped.
  const moreHrefs = new Set(c.more.links.map((l) => l.href));
  const showsUp = (c.showsUp ?? []).filter((r) => !moreHrefs.has(r.href));
  // Media named in content but not yet in public/ falls back to its placeholder; a showcase row waits until it is whole.
  const cards = c.cards.map((card) => ({ ...card, video: inPublic(card.video), image: inPublic(card.image) }));
  const steps = c.process?.steps.map((s) => ({ ...s, image: inPublic(s.image) }));
  const showcase = (c.showcase ?? []).filter((g) => g.items.every((i) => inPublic(i.src)));
  // Breadcrumb: the section this page belongs to, then the page itself.
  const menu = path ? menus.find((m) => path.startsWith(`${m.href}/`)) : undefined;
  return (
    <>
      {menu && path && <JsonLd data={breadcrumbJsonLd([{ name: menu.label, path: menu.href }, { name: c.title, path }])} />}
      <InnerHero tone={c.heroTone} title={c.title} lead={c.lead} video={inPublic(c.heroVideo)} videoZoom={c.heroVideoZoom} />
      <Intro label={c.intro.label} title={c.intro.title} body={c.intro.body} />
      <MediaCards title={c.cardsTitle} cards={cards} />
      {showcase.map((g) => <Showcase key={g.label} group={g} />)}
      {c.process && steps && <Steps title={c.process.title} steps={steps} />}
      {showsUp.length >= 2 && <RowList title="Where it shows up" rows={showsUp} />}
      {c.principles && <BorderedCards title={c.principles.title} cards={c.principles.cards} />}
      {c.band && (
        <Band
          title={c.band.title}
          body={c.band.body}
          href={c.band.href}
          action={c.band.action}
          image={inPublic(c.band.image)}
          imageAlt={c.band.imageAlt}
        />
      )}
      <MoreStrip label={c.more.label} links={c.more.links} />
    </>
  );
}

/** Route helper: renders the capability for a section/slug. */
export function renderCapability(section: CapabilitySection, slug: string) {
  return <CapabilityPage capability={getCapability(section, slug)} path={`/${section}/${slug}`} />;
}
