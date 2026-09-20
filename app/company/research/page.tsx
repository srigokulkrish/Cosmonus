import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { NoteList } from "@/components/company/NoteList";
import { StatusKey } from "@/components/company/StatusKey";
import { InnerHero } from "@/components/ui/Hero";
import { Intro, MoreStrip } from "@/components/ui/Section";
import { research } from "@/content/company";
import { notes } from "@/content/research";

export const metadata: Metadata = pageMetadata({ ...research.meta, path: "/company/research" });

export default function ResearchPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Company", path: "/company" },
          { name: "Research", path: "/company/research" },
        ])}
      />
      <InnerHero tone="dark" {...research.hero} />
      <Intro {...research.intro} />
      <StatusKey {...research.statusKey} />
      <NoteList {...research.notes} notes={notes} />
      <MoreStrip label="More in Company" links={research.more} />
    </>
  );
}
