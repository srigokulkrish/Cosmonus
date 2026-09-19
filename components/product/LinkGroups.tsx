import { MonoLabel } from "@/components/ui/MonoLabel";
import { ImageLinkCard, SectionHead, THIRDS, type StripLink } from "@/components/ui/Section";

export type LinkGroup = { label: string; links: StripLink[] };

/**
 * Left-aligned h2 and lead, then one or more labelled groups of image link cards (three per row at
 * desktop). Used for "Built on": the capabilities and research notes behind a product.
 */
export function LinkGroups({ title, lead, groups }: { title: string; lead?: string; groups: LinkGroup[] }) {
  return (
    <section className="wrap sec flex flex-col gap-12">
      <SectionHead title={title} lead={lead} />
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-6">
          <MonoLabel>{g.label}</MonoLabel>
          <div className={`${THIRDS} gap-y-10`}>
            {g.links.map((l, i) => (
              <ImageLinkCard key={l.href} {...l} index={i} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
