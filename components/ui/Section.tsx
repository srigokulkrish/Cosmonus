import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Arrow } from "./Button";
import { Dot } from "./Dot";
import { MediaPanel, toneAt, type Tone } from "./MediaPanel";
import { LoopVideo } from "./LoopVideo";
import { MonoLabel } from "./MonoLabel";

/*
 * The site grid (Runway-style). Every section sits on the same thirds with one 20px gap — the same 20px as the
 * page gutter — so edges line up from section to section:
 * - `THIRDS`: card rows (3 → 2 → 1 columns).
 * - `SideLayout`: heading in the first third, content across the other two. Sets of four go 2×2 inside it
 *   (`PAIRS`), so each card is exactly one third wide, like the cards in a THIRDS row.
 * - Halves are kept only for large media pairs (the two products, the two audiences).
 * The constants set columns and the 20px column gap; each use adds its own row gap (gap-y-*).
 */
export const THIRDS = "grid grid-cols-1 gap-x-5 sm:grid-cols-2 lg:grid-cols-3";
export const PAIRS = "grid grid-cols-1 gap-x-5 sm:grid-cols-2";
export const HALVES = "grid grid-cols-1 gap-x-5 md:grid-cols-2";

/** Heading in the first third, content in the other two. Stacks below lg. */
export function SideLayout({ head, children, className = "" }: { head: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3 ${className}`}>
      <div className="flex flex-col gap-4 lg:pr-6 xl:pr-10">{head}</div>
      <div className="min-w-0 lg:col-span-2">{children}</div>
    </div>
  );
}

/** Section title for the left of a SideLayout: optional mono label, h2, optional lead. */
export function SideHead({ label, title, lead, children }: { label?: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <>
      {label && <MonoLabel>{label}</MonoLabel>}
      <h2 className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] text-balance xl:text-[40px]">{title}</h2>
      {lead && <p className="m-0 text-base leading-normal text-pretty text-muted lg:text-lg">{lead}</p>}
      {children}
    </>
  );
}

/** Left-aligned section heading on the grid's left edge: optional mono eyebrow, h2 (56 home / 44 inner), optional lead. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  size = "inner",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  size?: "home" | "inner";
  children?: ReactNode;
}) {
  return (
    <div className="flex max-w-[900px] flex-col items-start gap-4">
      {eyebrow && <MonoLabel>{eyebrow}</MonoLabel>}
      <h2
        className={`m-0 leading-[1.1] font-normal tracking-[-0.02em] text-balance ${
          size === "home" ? "text-[36px] sm:text-[44px] lg:text-[56px]" : "text-[32px] lg:text-[44px]"
        }`}
      >
        {title}
      </h2>
      {lead && <p className="m-0 max-w-[640px] text-lg leading-normal text-pretty text-muted">{lead}</p>}
      {children}
    </div>
  );
}

/** Intro: mono label + h2 in the first third, lead paragraph across the other two. */
export function Intro({ label, title, body }: { label: string; title: ReactNode; body: ReactNode }) {
  return (
    <section className="wrap sec">
      <SideLayout head={<SideHead label={label} title={title} />}>
        <p className="m-0 max-w-[760px] text-lg leading-normal text-pretty text-ink-2 lg:pt-[34px] lg:text-[22px]">{body}</p>
      </SideLayout>
    </section>
  );
}

/** `video` / `image`: the real media (in public/) once it exists; until then `asset` labels the placeholder. */
export type MediaCardData = { tone: Tone; asset: string; title: string; body: ReactNode; video?: string; image?: string };

/** Media card: 280px media slot (video, image or placeholder), h3, muted paragraph. */
export function MediaCard({ tone, asset, title, body, video, image }: MediaCardData) {
  return (
    <article className="flex flex-col gap-5">
      {video ? (
        <div className="h-[280px] overflow-hidden rounded-media bg-panel-card">
          <LoopVideo src={video} label={title} />
        </div>
      ) : (
        <MediaPanel tone={tone} label={asset} src={image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      )}
      <div className="flex flex-col gap-2.5">
        <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{title}</h3>
        <p className="m-0 text-base leading-normal text-pretty text-muted">{body}</p>
      </div>
    </article>
  );
}

/** Section heading + media cards on the thirds. */
export function MediaCards({ title, cards }: { title: string; cards: MediaCardData[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} />
      <div className={`${THIRDS} gap-y-10`}>
        {cards.map((c, i) => (
          <MediaCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

/** `asset` labels the step's image placeholder; without one, a label is made from the step title. */
export type Step = { title: string; body: ReactNode; asset?: string };

/** Numbered steps as image cards on the thirds: placeholder image, accent dot + "01", h3, muted body. */
export function Steps({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} />
      <ol className={`m-0 list-none p-0 ${THIRDS} gap-y-12`}>
        {steps.map((s, i) => (
          <li key={i} className="flex flex-col gap-5">
            <MediaPanel tone={toneAt(i)} label={s.asset ?? `[ STEP ${String(i + 1).padStart(2, "0")} — ${s.title} ]`} className="h-[240px] rounded-media" />
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 font-mono text-xs text-muted">
                <Dot />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{s.title}</h3>
              <p className="m-0 text-base leading-normal text-pretty text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/**
 * Closing band (Runway-style call-to-action panel): a rounded soft-grey panel on the content column — heading, one
 * line and a single button on the left, an image placeholder filling the right half. Stacks on phones.
 * The button says where it goes. `asset` labels the image slot.
 */
export function Band({
  title,
  body,
  href,
  action,
  asset,
  external = false,
  arrow = false,
}: {
  title: ReactNode;
  body: ReactNode;
  href: string;
  action: string;
  asset?: string;
  external?: boolean;
  arrow?: boolean;
}) {
  const label = asset ?? `[ ${typeof title === "string" ? title.replace(/[.?]$/, "").toUpperCase() : "IMAGE"} ]`;
  return (
    <section className="wrap sec">
      <div className="grid grid-cols-1 overflow-hidden rounded-hero bg-panel-light md:grid-cols-2">
        <div className="flex flex-col items-start justify-between gap-10 p-8 sm:p-10 lg:min-h-[420px] lg:p-14">
          <div className="flex flex-col gap-4">
            <h2 className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] text-balance lg:text-[44px]">{title}</h2>
            <p className="m-0 max-w-[480px] text-lg leading-normal text-pretty text-ink-2">{body}</p>
          </div>
          <ButtonLink href={href} external={external} icon={arrow ? <Arrow /> : undefined}>
            {action}
          </ButtonLink>
        </div>
        <MediaPanel tone="dark" label={label} labelSize="text-[13px]" className="min-h-[260px] md:min-h-full" />
      </div>
    </section>
  );
}

export type StripLink = { name: string; href: string; desc: string };

/** Link with a 1px ink top rule: the "More in …" strip and the home Agents row. */
export function RuleLink({ name, href, desc, nameSize = "text-xl" }: StripLink & { nameSize?: string }) {
  return (
    <Link href={href} className="row flex flex-col gap-1.5 border-t border-ink pt-[18px] pb-2">
      <span className={`rowname font-medium ${nameSize}`}>{name}</span>
      <span className="text-sm leading-[1.45] text-muted">{desc}</span>
    </Link>
  );
}

/** A linked image card: placeholder image, name (underlines on hover) with an arrow, muted description. */
export function ImageLinkCard({ name, href, desc, index = 0 }: StripLink & { index?: number }) {
  return (
    <Link href={href} className="row group flex flex-col gap-4">
      <MediaPanel tone={toneAt(index)} label={`[ ${name.toUpperCase()} ]`} decorative className="h-[220px] rounded-media" />
      <span className="flex items-start justify-between gap-4">
        <span className="flex flex-col gap-1.5">
          <span className="rowname text-xl font-medium tracking-[-0.01em]">{name}</span>
          <span className="text-[15px] leading-[1.45] text-pretty text-muted">{desc}</span>
        </span>
        <span className="mt-1.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
          <Arrow />
        </span>
      </span>
    </Link>
  );
}

/** "More in <menu>": section heading + image cards on the thirds. Ends the page before the footer. */
export function MoreStrip({ label, links }: { label: string; links: StripLink[] }) {
  return (
    <section className="wrap sec flex flex-col gap-10 pb-[120px]">
      <SectionHead title={label} />
      <div className={`${THIRDS} gap-y-10`}>
        {links.map((l, i) => (
          <ImageLinkCard key={l.href} {...l} index={i} />
        ))}
      </div>
    </section>
  );
}
