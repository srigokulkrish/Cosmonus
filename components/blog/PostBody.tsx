import type { ReactNode } from "react";
import Link from "next/link";
import { Dot } from "@/components/ui/Dot";

/**
 * Inline links inside post copy, written `[text](href)` in the content file — the lightest markup that lets a
 * post credit a source in the sentence that uses it, rather than only in the list at the foot. External links
 * open in a new tab; anything starting with "/" stays in the app.
 */
const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function withLinks(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href} className="row inline text-ink">
          <span className="rowname">{label}</span>
        </Link>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" className="row inline text-ink">
          <span className="rowname">{label}</span>
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

/** A labelled row inside a post's callout panel — the what / why / when / how blocks. */
export type PostPoint = { name: string; body: string };

export type PostSection = {
  heading?: string;
  paragraphs: string[];
  points?: PostPoint[];
};

/**
 * The reading column of a blog post. Deliberately not the research-note body (`ui/ArticleBody`):
 * one centred measure rather than text beside a meta column, a larger opening paragraph, and the
 * labelled rows set in a soft panel instead of open rules — a blog, not a lab note.
 */
export function PostBody({ sections }: { sections: PostSection[] }) {
  return (
    <div className="mx-auto flex w-full max-w-[860px] flex-col gap-7 text-lg leading-[1.65] text-ink-2 lg:text-xl">
      {sections.map((section, i) => (
        <section key={i} className="flex flex-col gap-7">
          {section.heading && (
            <h2 className="m-0 mt-8 text-[28px] leading-[1.15] font-medium tracking-[-0.02em] text-ink lg:mt-12 lg:text-[34px]">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((p, j) => (
            <p
              key={j}
              /* The opening paragraph of the post reads a size up, the way a standfirst does. */
              className={`m-0 text-pretty ${i === 0 && j === 0 ? "text-[21px] leading-[1.55] text-ink lg:text-[23px]" : ""}`}
            >
              {withLinks(p)}
            </p>
          ))}
          {section.points && (
            <dl className="m-0 flex flex-col rounded-card bg-panel-light p-6 lg:p-8">
              {section.points.map((pt) => (
                <div
                  key={pt.name}
                  className="flex flex-col gap-1.5 border-t border-rule/50 py-5 first:border-t-0 first:pt-0 last:pb-0 sm:flex-row sm:gap-8"
                >
                  <dt className="flex items-center gap-2.5 font-mono text-[13px] text-ink sm:w-[92px] sm:shrink-0 sm:pt-1">
                    <Dot />
                    {pt.name}
                  </dt>
                  <dd className="m-0 text-base leading-normal text-pretty text-ink-2 lg:text-[17px]">{withLinks(pt.body)}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}
    </div>
  );
}
