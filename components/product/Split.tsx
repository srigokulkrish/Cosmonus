import { MonoLabel } from "@/components/ui/MonoLabel";
import { HALVES, SectionHead } from "@/components/ui/Section";

export type SplitColumn = { label: string; title: string; points: string[] };

/**
 * Two audiences side by side (e.g. renters and owners): mono label, h3, then short points
 * between 1px line rules. Stacks below lg.
 */
export function Split({ title, lead, columns }: { title: string; lead?: string; columns: SplitColumn[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} lead={lead} />
      <div className={`${HALVES} gap-y-12`}>
        {columns.map((c) => (
          <div key={c.label} className="flex flex-col gap-6 rounded-card border border-line p-7 lg:p-10">
            <div className="flex flex-col gap-3.5">
              <MonoLabel dot>{c.label}</MonoLabel>
              <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-balance lg:text-[28px]">{c.title}</h3>
            </div>
            <ul className="m-0 list-none border-b border-line p-0">
              {c.points.map((p) => (
                <li key={p} className="border-t border-line py-4 text-base leading-normal text-pretty text-ink-2">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
