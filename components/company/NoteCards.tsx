import Link from "next/link";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { THIRDS } from "@/components/ui/Section";
import type { Note } from "@/content/research";

/**
 * Research notes as cards: cover placeholder, "kind · status" in mono, title. The whole card is
 * one link to the note. Matches the home Research section.
 */
export function NoteCards({ notes }: { notes: Note[] }) {
  return (
    <ul className={`m-0 list-none p-0 ${THIRDS} gap-y-10`}>
      {notes.map((n) => (
        <li key={n.slug}>
          <Link href={`/company/research/${n.slug}`} className="row flex flex-col gap-2.5">
            <MediaPanel tone={n.cover.tone} label={n.cover.label} src={n.cover.image} decorative sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="mb-3 h-[216px] rounded-media" />
            <span className="font-mono text-xs text-muted">
              {n.kind} · {n.status}
            </span>
            <span className="rowname text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-pretty">{n.title}</span>
            <span className="text-base leading-normal text-pretty text-muted">{n.summary}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
