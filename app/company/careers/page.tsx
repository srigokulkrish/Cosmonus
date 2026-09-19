import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BorderedCards } from "@/components/company/BorderedCards";
import { LineList } from "@/components/company/LineList";
import { InnerHero } from "@/components/ui/Hero";
import { Arrow, ButtonLink } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Intro, MoreStrip, Steps } from "@/components/ui/Section";
import { careers } from "@/content/company";

export const metadata: Metadata = pageMetadata({ ...careers.meta, path: "/company/careers" });

export default function CareersPage() {
  const { title, body, href, action } = careers.roles;
  return (
    <>
      <InnerHero tone="dark" {...careers.hero} />
      <Intro {...careers.intro} />
      <BorderedCards {...careers.values} />
      <LineList {...careers.people} />
      <Steps {...careers.hiring} />
      <section className="wrap sec" aria-labelledby="open-roles">
        <div className="flex flex-col gap-8 rounded-card border border-line p-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-10">
          <div className="flex flex-col gap-3.5">
            <MonoLabel dot>Open roles</MonoLabel>
            <h2 id="open-roles" className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[40px]">
              {title}
            </h2>
            <p className="m-0 max-w-[560px] text-lg leading-normal text-pretty text-muted">{body}</p>
          </div>
          <ButtonLink href={href} icon={<Arrow />} className="self-start lg:self-auto">
            {action}
          </ButtonLink>
        </div>
      </section>
      <MoreStrip label="More in Company" links={careers.more} />
    </>
  );
}
