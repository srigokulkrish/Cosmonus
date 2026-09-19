import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LinkCards } from "@/components/company/LinkCards";
import { NoteCards } from "@/components/company/NoteCards";
import { RowList } from "@/components/company/RowList";
import { Story } from "@/components/company/Story";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import { InnerHero } from "@/components/ui/Hero";
import { Intro, MoreStrip, SectionHead, Steps } from "@/components/ui/Section";
import { about } from "@/content/company";
import { notes } from "@/content/research";

export const metadata: Metadata = pageMetadata({ ...about.meta, path: "/company/about" });

export default function AboutPage() {
  const { title, lead, href, action } = about.latest;
  return (
    <>
      <InnerHero tone="dark" {...about.hero} />
      <Intro {...about.intro} />
      <LinkCards {...about.parts} />
      <RowList {...about.madeOf} />
      <Story {...about.why} />
      <Steps {...about.principles} />
      <section className="wrap sec flex flex-col gap-12">
        <SectionHead title={title} lead={lead} />
        {/* notes is ordered newest first */}
        <NoteCards notes={notes.slice(0, 3)} />
        <ButtonLink href={href} variant="secondary" icon={<Arrow />} className="self-center">
          {action}
        </ButtonLink>
      </section>
      <MoreStrip label="More in Company" links={about.more} />
    </>
  );
}
