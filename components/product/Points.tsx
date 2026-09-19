import { PAIRS, SideHead, SideLayout } from "@/components/ui/Section";

export type Point = { label: string; title: string; body: string };

/**
 * Title and lead in the first third, short points 2×2 across the other two (each one third wide), each under a
 * 1px line rule with a mono label. For lists of things you can do, not ordered steps.
 */
export function Points({ title, lead, points }: { title: string; lead?: string; points: Point[] }) {
  return (
    <section className="wrap sec">
      <SideLayout head={<SideHead title={title} lead={lead} />}>
        <ul className={`m-0 list-none p-0 ${PAIRS} gap-y-10`}>
          {points.map((p) => (
            <li key={p.title} className="flex flex-col gap-2.5 border-t border-line pt-5">
              <span className="font-mono text-xs text-muted">{p.label}</span>
              <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{p.title}</h3>
              <p className="m-0 text-base leading-normal text-pretty text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </SideLayout>
    </section>
  );
}
