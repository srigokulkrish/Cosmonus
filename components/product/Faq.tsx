import { SideHead, SideLayout } from "@/components/ui/Section";

export type FaqItem = { q: string; a: string };

/**
 * Questions and answers as native disclosures (<details>/<summary>), so they open with
 * keyboard and screen readers without script. Title in the first third, questions across the other two,
 * between 1px line rules; a plus that turns into a minus.
 */
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="wrap sec">
      <SideLayout head={<SideHead title={title} />}>
        <div className="border-b border-line">
          {items.map((item) => (
            <details key={item.q} className="group border-t border-line">
              <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl font-medium tracking-[-0.015em] fade [&::-webkit-details-marker]:hidden">
                <span className="text-pretty">{item.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M3 8h10" />
                  <path
                    d="M8 3v10"
                    className="origin-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-box:fill-box] group-open:scale-y-0"
                  />
                </svg>
              </summary>
              <p className="m-0 max-w-[680px] pb-6 text-base leading-normal text-pretty text-muted lg:text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </SideLayout>
    </section>
  );
}
