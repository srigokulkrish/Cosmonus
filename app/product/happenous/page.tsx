import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { Story } from "@/components/company/Story";
import { Faq } from "@/components/product/Faq";
import { LinkGroups } from "@/components/product/LinkGroups";
import { InnerHero } from "@/components/ui/Hero";
import { Band, Intro, MediaCards, MoreStrip, Steps } from "@/components/ui/Section";
import { happenous as c } from "@/content/products";

export const metadata: Metadata = pageMetadata({ ...c.meta, path: "/product/happenous" });

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
      <InnerHero {...c.hero} />
      <Intro {...c.intro} />
      <MediaCards {...c.different} />
      <Story {...c.why} />
      <Steps {...c.how} />
      <LinkGroups {...c.builtOn} />
      <Faq {...c.faq} />
      {/* happenous.com is a holding page while the product is built; it opens in a new tab. */}
      <Band {...c.visit} arrow external />
      <MoreStrip {...c.more} />
    </>
  );
}
