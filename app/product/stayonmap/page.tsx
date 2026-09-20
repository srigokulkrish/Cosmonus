import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { Explainer } from "@/components/product/Explainer";
import { Faq } from "@/components/product/Faq";
import { LinkGroups } from "@/components/product/LinkGroups";
import { Split } from "@/components/product/Split";
import { InnerHero } from "@/components/ui/Hero";
import { Band, Intro, MediaCards, MoreStrip, Steps } from "@/components/ui/Section";
import { stayonmap as c } from "@/content/products";

export const metadata: Metadata = pageMetadata({ ...c.meta, path: "/product/stayonmap" });

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
      <InnerHero {...c.hero} />
      <Intro {...c.intro} />
      <MediaCards {...c.different} />
      <Split {...c.audiences} />
      <Steps {...c.how} />
      <Explainer {...c.reading} />
      <LinkGroups {...c.builtOn} />
      <Faq {...c.faq} />
      {/* The live product opens in a new tab. */}
      <Band {...c.visit} arrow external />
      <MoreStrip {...c.more} />
    </>
  );
}
