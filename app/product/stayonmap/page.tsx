import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { Story } from "@/components/company/Story";
import { Faq } from "@/components/product/Faq";
import { LinkGroups } from "@/components/product/LinkGroups";
import { Split } from "@/components/product/Split";
import { Close, PanelSplit, SceneCards, StayOnMapHero } from "@/components/stayonmap/StayOnMap";
import { Intro, MoreStrip } from "@/components/ui/Section";
import { stayonmap as c } from "@/content/products";

export const metadata: Metadata = pageMetadata({ ...c.meta, path: "/product/stayonmap" });

// Drawn in StayOnMap's own UI (components/stayonmap) rather than photographs, so the page reads like the
// product. The live product opens in a new tab.
export default function StayOnMapPage() {
  const faq = faqJsonLd(c.faq.items);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Product", path: "/product" },
          { name: c.meta.title, path: "/product/stayonmap" },
        ])}
      />
      {faq && <JsonLd data={faq} />}
      <StayOnMapHero c={c.hero} />
      <Intro {...c.intro} />
      <Story {...c.story} />
      <SceneCards {...c.different} />
      <SceneCards label={c.how.label} title={c.how.title} cards={c.how.steps} numbered id="how" />
      <Split {...c.audiences} />
      <PanelSplit c={c.neighbourhood} panel="facts" />
      <PanelSplit c={c.reading} panel="score" flip tone="jade" />
      <LinkGroups {...c.builtOn} />
      <Faq {...c.faq} />
      <Close c={c.close} />
      <MoreStrip {...c.more} />
    </>
  );
}
