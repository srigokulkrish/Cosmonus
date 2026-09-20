import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * A media path is used only once its file is actually in `public/`, so a slot keeps its labelled placeholder
 * instead of showing a broken image while the picture is still being made. Content can therefore name every file
 * up front (see wiki/media-brief.md) and each slot lights up on its own as the file lands.
 *
 * Server-only (it reads the filesystem), and resolved when the page is rendered — so a file added to `public/`
 * after a production build shows up on the next build.
 */
export function inPublic(src?: string): string | undefined {
  if (!src) return undefined;
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, ""))) ? src : undefined;
}
