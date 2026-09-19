import Image from "next/image";
import type { ReactNode } from "react";

export type Tone = "dark" | "light" | "mid";

const tones: Record<Tone, string> = {
  dark: "bg-panel-card text-white/70",
  light: "bg-panel-light text-[#4a4a47]",
  mid: "bg-panel-mid text-[#3a3a37]",
};

/** Cycles the three tones so a row of placeholders reads as separate images. */
export const toneAt = (i: number): Tone => (["dark", "light", "mid"] as const)[i % 3];

/**
 * An image slot. With `src` (a file in public/, e.g. "/media/home/studio-animation.png") it shows that image,
 * cropped to fill the slot, with `alt` (or the label) as its text alternative. Without `src` it is the placeholder:
 * a flat tone with a small picture glyph and a mono label, e.g. "[ MAP VIEW — recording ]". Never stock imagery.
 */
export function MediaPanel({
  tone = "light",
  label,
  className = "h-[280px] rounded-media",
  labelSize = "text-xs",
  decorative = false,
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  tone?: Tone;
  label: ReactNode;
  className?: string;
  labelSize?: string;
  /** Hide from assistive tech, e.g. inside a link whose text already names it. */
  decorative?: boolean;
  /** The real image, once it exists. */
  src?: string;
  /** Describes the real image; defaults to the placeholder label. */
  alt?: string;
  /** Rendered width hint for next/image, so phones don't download desktop-sized files. */
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${tones[tone]} ${className}`}>
        <Image src={src} alt={decorative ? "" : (alt ?? (typeof label === "string" ? label : ""))} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": typeof label === "string" ? label : undefined })}
      className={`flex flex-col items-center justify-center gap-3 px-6 text-center font-mono ${labelSize} ${tones[tone]} ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0 opacity-60"
      >
        <rect x="3.5" y="5.5" width="21" height="17" rx="2.5" />
        <circle cx="10" cy="11" r="2" />
        <path d="m4 20 6.5-6 4.5 4 3-2.5 6 5" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
