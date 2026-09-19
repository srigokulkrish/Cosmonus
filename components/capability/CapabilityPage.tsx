import type { Metadata } from "next";
import { BorderedCards } from "@/components/company/BorderedCards";
import { VideoShowcase } from "@/components/capability/VideoShowcase";
import { RowList } from "@/components/company/RowList";
import { InnerHero } from "@/components/ui/Hero";
import { Band, Intro, MediaCards, MoreStrip, Steps } from "@/components/ui/Section";
import { getCapability, type Capability, type CapabilitySection } from "@/content/capabilities";
import { pageMetadata } from "@/lib/seo";

/** `metadata` for a capability route: title = page name (layout adds "— Cosmonus"), description = lead. */
export function capabilityMetadata(section: CapabilitySection, slug: string): Metadata {
  const c = getCapability(section, slug);
  return pageMetadata({ title: c.title, description: c.metaDescription, path: `/${section}/${slug}` });
}

/**
 * Capability template (10 pages): hero (with its banner video when set) → two-column intro → three media cards
 * (all from the boards) → any video showcase (Video page) → then the
 * sections written for the build — numbered process steps → "Where it shows up" rows → principles cards →
 * closing band — and finally the "More in …" strip. Each written section renders only when present.
 */
export function CapabilityPage({ capability: c }: { capability: Capability }) {
  // "Where it shows up" only lists places outside this page's "More in …" strip; with fewer than two left it is dropped.
  const moreHrefs = new Set(c.more.links.map((l) => l.href));
  const showsUp = (c.showsUp ?? []).filter((r) => !moreHrefs.has(r.href));
  return (
    <>
      <InnerHero tone={c.heroTone} title={c.title} lead={c.lead} video={c.heroVideo} videoZoom={c.heroVideoZoom} />
      <Intro label={c.intro.label} title={c.intro.title} body={c.intro.body} />
      <MediaCards title={c.cardsTitle} cards={c.cards} />
      {c.showcase?.map((g) => <VideoShowcase key={g.label} group={g} />)}
      {c.process && <Steps title={c.process.title} steps={c.process.steps} />}
      {showsUp.length >= 2 && <RowList title="Where it shows up" rows={showsUp} />}
      {c.principles && <BorderedCards title={c.principles.title} cards={c.principles.cards} />}
      {c.band && <Band title={c.band.title} body={c.band.body} href={c.band.href} action={c.band.action} />}
      <MoreStrip label={c.more.label} links={c.more.links} />
    </>
  );
}

/** Route helper: renders the capability for a section/slug. */
export function renderCapability(section: CapabilitySection, slug: string) {
  return <CapabilityPage capability={getCapability(section, slug)} />;
}
