import type { ReactNode } from "react";
import { MonoLabel } from "@/components/ui/MonoLabel";

export type LegalSection = { title: string; body: ReactNode };

/**
 * Plain editorial page for Privacy and Terms: mono label, h1, lead, "Last updated" line, then
 * numbered sections (heading in the first third, text across the other two) between 1px line rules. No hero, no media.
 */
export function LegalPage({
  label,
  title,
  lead,
  updated,
  sections,
}: {
  label: string;
  title: string;
  lead: ReactNode;
  /** Keep as the "[DATE]" placeholder until the owner supplies the real date. */
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <article className="wrap sec flex flex-col gap-14 pb-[120px] lg:gap-20">
      <header className="flex flex-col gap-6">
        <MonoLabel dot>{label}</MonoLabel>
        <h1 className="m-0 text-[44px] leading-[1.02] font-normal tracking-[-0.025em] text-balance lg:text-[76px]">{title}</h1>
        <p className="m-0 max-w-[640px] text-lg leading-normal text-pretty text-ink-2 lg:text-[21px]">{lead}</p>
        <p className="m-0 font-mono text-xs text-muted">Last updated {updated}</p>
      </header>
      <div className="flex flex-col">
        {sections.map((s, i) => (
          <section
            key={s.title}
            aria-labelledby={`legal-${i}`}
            className="grid grid-cols-1 gap-x-5 gap-y-4 border-t border-line py-10 lg:grid-cols-3"
          >
            <div className="flex flex-col gap-2.5 lg:pr-10">
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h2 id={`legal-${i}`} className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">
                {s.title}
              </h2>
            </div>
            <div className="flex max-w-[680px] flex-col gap-4 text-base leading-normal text-pretty text-ink-2 lg:col-span-2 lg:pt-7 [&_a]:underline [&_a]:underline-offset-4 [&_p]:m-0">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
