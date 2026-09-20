import { Dot } from "@/components/ui/Dot";

/** A short labelled row inside an article — used for the what / why / when / how blocks in blog posts. */
export type ArticlePoint = { name: string; body: string };

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
  points?: ArticlePoint[];
};

/**
 * The reading column shared by research notes and blog posts: optional h2, paragraphs, and an optional
 * set of labelled rows in the `StatusKey` style (mono name beside an accent dot, between 1px rules).
 *
 * Off the thirds deliberately (see design-system.md): the caller puts a narrow meta column beside this,
 * because a one-word label does not earn a third of the page.
 */
export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="flex max-w-[960px] flex-col gap-6 text-lg leading-[1.6] text-ink-2 lg:text-xl">
      {sections.map((section, i) => (
        <section key={i} className="flex flex-col gap-6">
          {section.heading && (
            <h2 className="m-0 mt-6 text-[26px] leading-[1.2] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">{section.heading}</h2>
          )}
          {section.paragraphs.map((p, j) => (
            <p key={j} className="m-0 text-pretty">
              {p}
            </p>
          ))}
          {section.points && (
            <dl className="m-0 flex flex-col border-b border-line">
              {section.points.map((pt) => (
                <div key={pt.name} className="flex flex-col gap-1.5 border-t border-line py-5 sm:flex-row sm:gap-8">
                  <dt className="flex items-center gap-2.5 font-mono text-[13px] text-ink sm:w-[104px] sm:shrink-0 sm:pt-1">
                    <Dot />
                    {pt.name}
                  </dt>
                  <dd className="m-0 text-[17px] leading-normal text-pretty text-muted">{pt.body}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}
    </div>
  );
}
