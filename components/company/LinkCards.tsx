import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { SectionHead, THIRDS } from "@/components/ui/Section";

export type LinkCardData = { label: string; title: string; body: string; href: string; action: string };

/**
 * Section heading, then bordered cards that are each one link (3 → 2 → 1 columns): mono label,
 * h3, muted body, and a line at the bottom saying where the card goes.
 */
export function LinkCards({ title, lead, cards }: { title: string; lead?: string; cards: LinkCardData[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} lead={lead} />
      <ul className={`m-0 list-none p-0 ${THIRDS} gap-y-5`}>
        {cards.map((c) => (
          <li key={c.href} className="flex">
            <Link href={c.href} className="row flex min-h-[260px] grow flex-col justify-between gap-8 rounded-card border border-line p-7">
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-xs text-muted">{c.label}</span>
                <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{c.title}</h3>
                <p className="m-0 text-base leading-normal text-pretty text-muted">{c.body}</p>
              </div>
              <span className="flex items-center gap-2.5 text-base font-medium">
                <span className="rowname">{c.action}</span>
                <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
