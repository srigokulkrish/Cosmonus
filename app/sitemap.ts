import type { MetadataRoute } from "next";
import { notes } from "@/content/research";
import { menus, site } from "@/lib/site";

/**
 * Every public page, with a last-modified date (the build) and a priority: home 1.0, section landings 0.8, their
 * pages and products 0.7, research notes 0.6, contact 0.5. Privacy and Terms are noindex, so they are left out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    entry("/", 1, "weekly"),
    ...menus.flatMap((m) => [entry(m.href, 0.8), ...m.links.map((l) => entry(l.href, 0.7))]),
    ...notes.map((n) => entry(`/company/research/${n.slug}`, 0.6)),
    entry("/contact", 0.5),
  ];
}
