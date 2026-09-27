"use client";

import { useEffect, useRef, useState } from "react";
import { MESH, type MeshPalette } from "./mesh";

export { MESH, type MeshPalette };

/** Fine film grain: an SVG noise texture, blended over the colour. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Atmospheric mesh-gradient background: oversized blurred radial colour fields (strong Gaussian blur), a soft light
 * bloom, dark edge falloff and subtle film grain — cinematic, soft, slightly out of focus, like light through frosted
 * glass. The fields flow continuously on independent 11–19 s loops (`.mesh-field` keyframes in globals.css; off under
 * reduced motion, and paused while the backdrop is scrolled off screen — four 64px blurs are the dearest thing the
 * GPU draws on the page, so they draw only while someone can see them) and shift a little further when a parent
 * `group` is hovered. Fills its parent, which needs `relative isolate overflow-hidden`. `dim` adds an even shade for large areas of white text (keeps it above 4.5:1); `bloom={false}`
 * drops the white light bloom so only the palette's own colours show. `lively` runs the same drift on shorter
 * 6–10 s loops, for a panel that should feel busier (home "How an agent works"). `pale` drops the dark edge
 * falloff and bottom shade and softens the grain, for a pale palette under dark text.
 */
export function MeshBackdrop({
  palette,
  dim = false,
  bloom = true,
  lively = false,
  pale = false,
}: {
  palette: MeshPalette;
  dim?: boolean;
  bloom?: boolean;
  lively?: boolean;
  pale?: boolean;
}) {
  const [light, mid, deep, shadow] = MESH[palette];
  const ref = useRef<HTMLSpanElement>(null);
  const [onScreen, setOnScreen] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { rootMargin: "10%" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const drift = "transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]";
  // Each field is two elements: the outer one moves (the drift keyframes and the hover shift), the inner one is the
  // blurred colour and never changes. Putting the blur on an element that itself animated made Chrome recompute
  // the 64px blur on every frame; on a static child the blurred surface is drawn once and reused, and the picture
  // is identical (CSS applies `filter` before `transform` either way). Measured on the home Agents band under
  // Chrome's software GPU: 10 → 45 fps.
  const field = "mesh-field absolute";
  const blob = "absolute inset-0 rounded-full blur-[64px]";
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 -z-10 overflow-hidden ${lively ? "mesh-lively" : ""} ${onScreen ? "" : "mesh-paused"}`}
      style={{ backgroundColor: deep }}
    >
      <span className={`${field} mesh-a ${drift} -top-1/3 -right-1/4 h-[110%] w-[80%] group-hover:-translate-x-8 group-hover:translate-y-6`}>
        <span className={blob} style={{ background: mid }} />
      </span>
      <span className={`${field} mesh-b ${drift} top-[5%] right-[5%] h-[70%] w-[55%] opacity-75 group-hover:-translate-x-10`}>
        <span className={blob} style={{ background: light }} />
      </span>
      <span className={`${field} mesh-c ${drift} top-1/4 -left-1/3 h-[90%] w-[75%] opacity-90 group-hover:translate-x-8`}>
        <span className={blob} style={{ background: deep }} />
      </span>
      <span className={`${field} mesh-d ${drift} -bottom-1/2 left-0 h-[90%] w-[110%] group-hover:-translate-y-6`}>
        <span className={blob} style={{ background: shadow }} />
      </span>
      {/* Light bloom (off when a palette must stay to its exact colours) */}
      {bloom && <span className="absolute -top-1/4 right-0 h-3/4 w-2/3 rounded-full bg-white/25 blur-[80px]" />}
      {/* Dark edge falloff; deepest along the bottom (not on a light palette) */}
      {!pale && (
        <>
          <span className="absolute inset-0 bg-[radial-gradient(130%_110%_at_65%_20%,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
          <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/45 to-transparent" />
        </>
      )}
      {dim && <span className="absolute inset-0 bg-black/35" />}
      {/* Film grain */}
      <span className={`absolute inset-0 mix-blend-overlay ${pale ? "opacity-[0.08]" : "opacity-[0.18]"}`} style={{ backgroundImage: GRAIN }} />
    </span>
  );
}
