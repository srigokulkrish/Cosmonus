import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Story } from "@/components/company/Story";
import { Faq } from "@/components/product/Faq";
import { LinkGroups } from "@/components/product/LinkGroups";
import { Points } from "@/components/product/Points";
import { InnerHero } from "@/components/ui/Hero";
import { Band, Intro, MediaCards, MoreStrip, Steps } from "@/components/ui/Section";
import { happenous as c } from "@/content/products";

export const metadata: Metadata = pageMetadata({ ...c.meta, path: "/product/happenous" });

export default function HappenousPage() {
  return (
    <>
      <InnerHero {...c.hero} />
      <Intro {...c.intro} />
      <MediaCards {...c.different} />
      <Story {...c.why} />
      <Steps {...c.how} />
      <Points {...c.can} />
      <LinkGroups {...c.builtOn} />
      <Faq {...c.faq} />
      {/* The live product opens in a new tab. */}
      <Band {...c.visit} arrow external />
      <MoreStrip {...c.more} />
    </>
  );
}
