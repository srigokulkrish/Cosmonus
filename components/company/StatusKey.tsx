import { Dot } from "@/components/ui/Dot";
import { SideHead, SideLayout } from "@/components/ui/Section";

export type StatusKeyItem = { name: string; body: string };

/** A small legend: each status in mono beside a dot, with what it means, separated by 1px rules.
    The first row has no rule above it — the section rule is already there (owner, 2026-09-21). */
export function StatusKey({ label, title, items }: { label: string; title: string; items: StatusKeyItem[] }) {
  return (
    <section className="wrap sec" aria-labelledby="status-key">
      <div className="border-t border-line pt-14">
        <SideLayout head={<SideHead label={label} title={<span id="status-key">{title}</span>} />}>
          <dl className="m-0 flex flex-col border-b border-line">
            {items.map((it) => (
              <div key={it.name} className="flex flex-col gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:flex-row sm:gap-8">
                <dt className="flex items-center gap-2.5 font-mono text-[13px] text-ink sm:w-[160px] sm:shrink-0 sm:pt-0.5">
                  <Dot />
                  {it.name}
                </dt>
                <dd className="m-0 text-base leading-normal text-pretty text-muted">{it.body}</dd>
              </div>
            ))}
          </dl>
        </SideLayout>
      </div>
    </section>
  );
}
