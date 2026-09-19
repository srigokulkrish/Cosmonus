"use client";

import { useState } from "react";
import { RowLink } from "@/components/company/RowList";
import type { Note, NoteKind } from "@/content/research";

/**
 * Every research note as a row (same rows as RowList), with toggle buttons beside the heading
 * to show one kind at a time. Rendered on the server with every note listed; the filter only
 * narrows the list.
 */
export function NoteList({ title, notes, allLabel }: { title: string; notes: Note[]; allLabel: string }) {
  const kinds = Array.from(new Set(notes.map((n) => n.kind)));
  const [kind, setKind] = useState<NoteKind | null>(null);
  const shown = kind ? notes.filter((n) => n.kind === kind) : notes;
  const options: { value: NoteKind | null; label: string }[] = [{ value: null, label: allLabel }, ...kinds.map((k) => ({ value: k, label: k }))];

  return (
    <section className="wrap sec flex flex-col" aria-labelledby="notes-title">
      <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="notes-title" className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[40px]">
          {title}
        </h2>
        <div role="group" aria-label="Show notes by kind" className="flex flex-wrap gap-2">
          {options.map((o) => {
            const on = kind === o.value;
            return (
              <button
                key={o.label}
                type="button"
                aria-pressed={on}
                onClick={() => setKind(o.value)}
                className={`h-11 cursor-pointer rounded-full border px-[18px] text-[15px] font-medium fade ${
                  on ? "border-ink bg-ink text-white" : "border-line bg-transparent text-ink"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {kind ? `Showing ${kind.toLowerCase()} only.` : "Showing every note."}
      </p>
      <ul className="m-0 list-none p-0">
        {shown.map((n) => (
          <li key={n.slug}>
            <RowLink name={n.title} desc={`${n.kind} · ${n.area} · ${n.status} — ${n.summary}`} href={`/company/research/${n.slug}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
