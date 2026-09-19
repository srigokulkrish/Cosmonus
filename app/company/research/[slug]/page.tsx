import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NoteCards } from "@/components/company/NoteCards";
import { ButtonLink } from "@/components/ui/Button";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { areaHref, getNote, notes } from "@/content/research";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = getNote((await params).slug);
  return note
    ? pageMetadata({ title: `${note.title} — Research`, description: note.summary, path: `/company/research/${note.slug}`, type: "article" })
    : {};
}

export default async function ResearchNotePage({ params }: Props) {
  const note = getNote((await params).slug);
  if (!note) notFound();

  const more = notes.filter((n) => n.slug !== note.slug).slice(0, 3);

  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: note.title,
            description: note.summary,
            articleSection: note.area,
            url: `${site.url}/company/research/${note.slug}`,
            mainEntityOfPage: `${site.url}/company/research/${note.slug}`,
            image: `${site.url}/opengraph-image`,
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
            inLanguage: "en",
          }),
        }}
      />
      {/* Editorial header */}
      <header className="wrap flex flex-col gap-6 pt-12 lg:pt-20">
        <div className="flex flex-col gap-3 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <Link href="/company/research" className="inline-flex min-h-11 items-center self-start fade">
            Company / Research
          </Link>
          <MonoLabel dot>
            {note.kind} · {note.area} · {note.status}
          </MonoLabel>
        </div>
        <h1 className="m-0 max-w-[980px] text-[40px] leading-[1.04] font-normal tracking-[-0.025em] text-balance sm:text-[52px] lg:text-[64px]">
          {note.title}
        </h1>
        <p className="m-0 max-w-[760px] text-lg leading-normal text-pretty text-ink-2 lg:text-[21px]">{note.summary}</p>
      </header>

      <div className="wrap pt-12 lg:pt-16">
        <MediaPanel tone={note.cover.tone} label={note.cover.label} labelSize="text-[13px]" className="h-[260px] rounded-card sm:h-[400px] lg:h-[520px]" />
      </div>

      {/* Body: on the thirds — note details in the first third, the text across the other two. */}
      <article className="wrap grid grid-cols-1 gap-x-5 gap-y-10 pt-14 lg:grid-cols-3 lg:pt-20">
        <aside className="flex flex-col gap-1.5 lg:pr-10">
          <MonoLabel>Area</MonoLabel>
          <Link href={areaHref[note.area]} className="row inline-flex min-h-11 items-center self-start text-base font-medium">
            <span className="rowname">{note.area}</span>
          </Link>
        </aside>
        <div className="flex max-w-[720px] flex-col gap-6 text-lg leading-[1.6] text-ink-2 lg:col-span-2">
          {note.body.map((section, i) => (
            <section key={i} className="flex flex-col gap-6">
              {section.heading && (
                <h2 className="m-0 mt-6 text-[26px] leading-[1.2] font-medium tracking-[-0.02em] text-ink lg:text-[28px]">{section.heading}</h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="m-0 text-pretty">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      {/* More research */}
      <section className="wrap sec flex flex-col gap-8 pb-[120px]">
        <MonoLabel>More research</MonoLabel>
        <NoteCards notes={more} />
        <ButtonLink href="/company/research" variant="secondary" className="self-start">
          All research
        </ButtonLink>
      </section>
    </>
  );
}
