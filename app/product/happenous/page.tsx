import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { Story } from "@/components/company/Story";
import { CheckIn, Close, Happening, HappenousHero, Host, SceneCards } from "@/components/happenous/Happenous";
import { Faq } from "@/components/product/Faq";
import { LinkGroups } from "@/components/product/LinkGroups";
import { Intro, MoreStrip } from "@/components/ui/Section";
import { happenous as c } from "@/content/products";

export const metadata: Metadata = pageMetadata({ ...c.meta, path: "/product/happenous" });

// Drawn in Happenous's own UI (components/happenous) rather than photographs, so the page reads like the
// product. happenous.com is a holding page while the product is built; links to it open in a new tab.
export default function HappenousPage() {
  const faq = faqJsonLd(c.faq.items);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Product", path: "/product" },
          { name: c.meta.title, path: "/product/happenous" },
        ])}
      />
      {faq && <JsonLd data={faq} />}
      <HappenousHero c={c.hero} />
      <Intro {...c.intro} />
      <SceneCards {...c.idea} />
      <Happening c={c.happening} />
      <SceneCards label={c.how.label} title={c.how.title} cards={c.how.steps} numbered id="how" />
      <CheckIn c={c.checkin} />
      <Host c={c.host} />
      <Story {...c.why} />
      <SceneCards {...c.safety} />
      <LinkGroups {...c.builtOn} />
      <Faq {...c.faq} />
      <Close c={c.close} />
      <MoreStrip {...c.more} />
    </>
  );
}
