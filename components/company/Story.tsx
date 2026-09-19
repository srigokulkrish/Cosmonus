import { SideHead, SideLayout } from "@/components/ui/Section";

/**
 * Editorial statement: h2 in the first third, paragraphs across the other two. Replaces the board's "The team"
 * block on About, which needs owner facts (founders, dates, places) we do not have.
 */
export function Story({ label, title, paragraphs }: { label?: string; title: string; paragraphs: string[] }) {
  return (
    <section className="wrap sec">
      <div className="border-t border-line pt-14">
        <SideLayout head={<SideHead label={label} title={title} />}>
          <div className="flex max-w-[760px] flex-col gap-5 lg:pt-2">
            {paragraphs.map((p, i) => (
              <p key={i} className="m-0 text-lg leading-normal text-pretty text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </SideLayout>
      </div>
    </section>
  );
}
