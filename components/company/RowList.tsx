import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Button";
import { MediaPanel, toneAt } from "@/components/ui/MediaPanel";
import { SectionHead } from "@/components/ui/Section";

export type Row = { name: string; desc: ReactNode; href: string; image?: string };

/** A text row (name | description | arrow) on the thirds from lg. Used by the research note index. */
export function RowLink({ name, desc, href }: Row) {
  // On the thirds from lg: name in the first third, description and arrow across the other two.
  const cls = "row grid min-h-[88px] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1.5 border-t border-line py-5 lg:grid-cols-3 lg:gap-x-5";
  const body = (
    <>
      <span className="rowname text-xl font-medium tracking-[-0.015em] lg:pr-10 lg:text-[22px]">{name}</span>
      <span className="row-start-2 flex items-center justify-between gap-8 lg:col-span-2 lg:row-start-1">
        <span className="max-w-[680px] text-base leading-[1.45] text-pretty text-muted">{desc}</span>
        <span className="hidden shrink-0 lg:block">
          <Arrow />
        </span>
      </span>
      <span className="col-start-2 row-span-2 row-start-1 lg:hidden">
        <Arrow />
      </span>
    </>
  );
  // Internal routes use next/link; "#" placeholders and mailto stay plain anchors.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {body}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {body}
    </a>
  );
}

/**
 * One index row, on the thirds from lg: number + name (large) in the first third, the description in the second,
 * a small thumbnail and a round arrow at the end of the third. The arrow fills ink and the name underlines on
 * hover. Below lg: number + name with the arrow, the description underneath.
 */
function IndexRow({ name, desc, href, image, index }: Row & { index: number }) {
  const cls = "row group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-2 border-t border-line py-6 lg:grid-cols-3 lg:py-8";
  const num = String(index + 1).padStart(2, "0");
  const body = (
    <>
      <span className="col-start-1 row-start-1 flex items-baseline gap-4 lg:pr-6">
        <span className="shrink-0 font-mono text-xs text-muted">{num}</span>
        <span className="rowname text-[26px] leading-[1.1] font-normal tracking-[-0.02em] text-pretty lg:text-[34px]">{name}</span>
      </span>
      <span className="col-span-2 col-start-1 row-start-2 pl-9 text-base leading-[1.45] text-pretty text-muted lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:max-w-[420px] lg:pl-0">
        {desc}
      </span>
      <span className="col-start-2 row-start-1 flex items-center justify-end gap-6 lg:col-start-3">
        <MediaPanel
          tone={toneAt(index)}
          label=""
          src={image}
          sizes="112px"
          decorative
          className="hidden h-[72px] w-[112px] rounded-[8px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 md:flex"
        />
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
          <Arrow />
        </span>
      </span>
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {body}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {body}
    </a>
  );
}

/**
 * Linked index: left-aligned heading, then large numbered rows between 1px line rules (`IndexRow`). Used for About's
 * "What Cosmonus is made of" and the capability pages' "Where it shows up".
 */
export function RowList({ title, rows, children }: { title: string; rows: Row[]; children?: ReactNode }) {
  return (
    <section className="wrap sec flex flex-col gap-10">
      <SectionHead title={title} />
      <ol className="m-0 list-none border-b border-line p-0">
        {rows.map((r, i) => (
          <li key={`${r.name}-${i}`}>
            <IndexRow {...r} index={i} />
          </li>
        ))}
      </ol>
      {children}
    </section>
  );
}
