import Image from "next/image";

/** 60 covers, arranged 6×10 on a phone and 10×6 from `md` — the same children either way. */
const TILES = 60;
/** How long the whole assembly takes to start every tile, in seconds. */
const SPREAD = 2.6;

/**
 * The order the tiles clear in: a fixed shuffle rather than middle-outwards (owner, 2026-09-21), so the picture
 * arrives in scattered patches the way a sampler resolves one.
 *
 * Shuffled once from a fixed seed, never `Math.random()`: these delays are inline styles rendered on the server
 * and again on the client, so anything that is not deterministic would mismatch on hydration. It also means the
 * order no longer depends on the tile arrangement — the old centre-out stagger was measured on the 10×6 desktop
 * grid and only read correctly there, whereas a shuffle looks the same on a phone's 6×10.
 *
 * `rank[i]` is the slot tile `i` goes in, 0 first and 59 last, so the tiles start at an even rate in a random
 * order instead of clumping the way raw random delays would.
 */
const RANK: number[] = (() => {
  const rank = Array.from({ length: TILES }, (_, i) => i);
  let seed = 0x9e3779b9;
  const next = () => {
    seed ^= seed << 13;
    seed >>>= 0;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    seed >>>= 0;
    return seed;
  };
  for (let i = TILES - 1; i > 0; i--) {
    const j = next() % (i + 1);
    [rank[i], rank[j]] = [rank[j], rank[i]];
  }
  return rank;
})();

function tileDelay(i: number) {
  return `${((RANK[i] / TILES) * SPREAD).toFixed(2)}s`;
}

/**
 * Roughly a third of the tiles, scattered rather than striped: those ones leave the picture frosted for a beat
 * before it sharpens, so the image resolves unevenly instead of every square behaving the same.
 */
function isFrosted(i: number) {
  return ((i * 2654435761) >>> 5) % 3 === 0;
}

/**
 * A still behind a banner, for the one page whose hero is a picture rather than a film
 * (Image Generation — owner, 2026-09-21). Decorative: the banner's heading carries the meaning,
 * exactly as with `BannerVideo`. `priority` because a banner is the page's largest paint.
 *
 * `sizes` is not `100vw`, and that matters. The banner is a fixed-height box, so `object-cover`
 * paints the image much wider than the viewport once the box turns portrait: at 390px wide the box
 * is 350×560 but a 2:1 image is painted 1120px across. Telling the browser `100vw` there makes it
 * fetch a ~828px file and stretch it to 2240 device pixels, which looks soft. These widths are the
 * painted width (box height × 2), not the viewport.
 *
 * `scrim` is the shade that keeps the title readable; drop it only where the copy sits on a clear
 * part of the picture. `assemble` covers the picture in tiles of the banner's own panel colour that
 * clear in a scattered order (`.tile-grid`, app/globals.css) — the picture arrives a piece at a
 * time, in a scattered order, and a third of the tiles leave it frosted for a beat before it sharpens.
 * It runs once, with no hover, so it reads the same everywhere.
 */
export function BannerImage({
  src,
  tone = "dark",
  scrim = true,
  assemble = false,
}: {
  src: string;
  tone?: "dark" | "light";
  scrim?: boolean;
  assemble?: boolean;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        priority
        quality={90}
        sizes="(max-width: 1023px) 1120px, 1560px"
        className="object-cover"
      />
      {assemble && (
        <span aria-hidden="true" className="tile-grid">
          {Array.from({ length: TILES }, (_, i) => (
            <span key={i} className={isFrosted(i) ? "frosted" : undefined} style={{ animationDelay: tileDelay(i) }} />
          ))}
        </span>
      )}
      {scrim && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${
            tone === "dark" ? "from-black/60 via-black/20 to-transparent" : "from-white/70 via-white/25 to-transparent"
          }`}
        />
      )}
    </>
  );
}
