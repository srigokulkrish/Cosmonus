import { existsSync } from "node:fs";
import { join } from "node:path";
import { getNote } from "@/content/research";

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

/**
 * The poster for a banner film: its first frame as `poster.avif` in the same folder (`/media/home/banner.mp4` →
 * `/media/home/poster.avif`), if that file exists. `BannerVideo` paints it at once, so the banner shows its
 * picture before the film has been requested; a film without one shows the flat tone as before.
 * Recipe in wiki/media-brief.md. Server-only, like `inPublic`.
 */
export function posterFor(video?: string): string | undefined {
  if (!video) return undefined;
  return inPublic(video.replace(/[^/]+$/, "poster.avif"));
}

/** The picture that stands for a page when a row or card links to it: its own still, or its banner's poster. */
const pageThumbs: Record<string, string> = {
  "/studio/web": "/media/web/card-websites.jpg",
  "/studio/animation": "/media/animation/band.jpg",
  "/studio/image-generation": "/media/image-generation/banner.webp",
  "/studio/video": "/media/video/poster.avif",
  "/product/stayonmap": "/media/stayonmap/step-1.jpg",
  "/product/happenous": "/media/home/product-happenous.jpg",
  "/intelligence/spatial": "/media/intelligence/index-spatial.jpg",
  "/intelligence/trust-score": "/media/trust-score/band.jpg",
  "/agents/workflow": "/media/agents/index-workflow.jpg",
  "/agents/automation": "/media/agents/index-automation.jpg",
  "/agents/experiments": "/media/agents/index-experiments.jpg",
  "/agents/systems": "/media/agents/index-systems.jpg",
  "/company/research": "/media/research/poster.avif",
  "/company/blog": "/media/company/index-blog.jpg",
};

export function pageThumb(href: string): string | undefined {
  const note = href.match(/^\/company\/research\/([^/]+)$/);
  return inPublic(note ? getNote(note[1])?.cover.image : pageThumbs[href]);
}
