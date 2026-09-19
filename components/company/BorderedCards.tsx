import type { ReactNode } from "react";
import { SectionHead, THIRDS } from "@/components/ui/Section";

export type BorderedCardData = { title: string; body: ReactNode };

/** Bordered card: 1px line border, 14px radius, mono number top, h3 + muted body at the bottom. */
export function BorderedCard({ index, title, body }: BorderedCardData & { index: number }) {
  return (
    <article className="flex min-h-[200px] flex-col justify-between gap-5 rounded-card border border-line p-7 lg:min-h-[240px]">
      <div className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</div>
      <div className="flex flex-col gap-2.5">
        <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{title}</h3>
        <p className="m-0 text-base leading-normal text-pretty text-muted">{body}</p>
      </div>
    </article>
  );
}

/** Section heading + bordered cards on the thirds (3 → 2 → 1 columns). */
export function BorderedCards({ title, cards }: { title: string; cards: BorderedCardData[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} />
      <div className={`${THIRDS} gap-y-5`}>
        {cards.map((c, i) => (
          <BorderedCard key={c.title} index={i} {...c} />
        ))}
      </div>
    </section>
  );
}
