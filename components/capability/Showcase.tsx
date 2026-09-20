import Image from "next/image";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionHead, SideHead, SideLayout, THIRDS } from "@/components/ui/Section";

/** One piece of finished work. An `.mp4` src loops muted; anything else is a still. `alt` describes a still. */
export type ShowcaseItem = { src: string; title: string; alt?: string };

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

/**
 * Finished work on a capability page (the Video page's films, the Image Generation page's frames), on the site grid:
 * - `thirds`: section heading, then three items in a row;
 * - `feature`: heading in the first third, one wide 16:9 item across the other two.
 * Each item has a visible caption. `shape` sets the crop in a `thirds` row: `portrait` (4:5) suits footage shot on a
 * phone, `landscape` (3:2) suits stills, which are made landscape.
 */
export type ShowcaseGroup = {
  label: string;
  title: string;
  lead?: string;
  layout: "thirds" | "feature";
  shape?: "portrait" | "landscape";
  items: ShowcaseItem[];
};

function Piece({ item, shape }: { item: ShowcaseItem; shape: string }) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-media bg-panel-card ${shape}`}>
        {isVideo(item.src) ? (
          <LoopVideo src={item.src} />
        ) : (
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <figcaption className="text-base font-medium tracking-[-0.01em]">{item.title}</figcaption>
    </figure>
  );
}

export function Showcase({ group: g }: { group: ShowcaseGroup }) {
  if (g.layout === "feature") {
    return (
      <section className="wrap sec">
        <SideLayout head={<SideHead label={g.label} title={g.title} lead={g.lead} />}>
          <div className="flex flex-col gap-5">
            {g.items.map((i) => (
              <Piece key={i.src} item={i} shape="aspect-video" />
            ))}
          </div>
        </SideLayout>
      </section>
    );
  }
  return (
    <section className="wrap sec flex flex-col gap-10">
      <div className="flex flex-col items-start gap-4">
        <MonoLabel>{g.label}</MonoLabel>
        <SectionHead title={g.title} lead={g.lead} />
      </div>
      <div className={`${THIRDS} gap-y-10`}>
        {g.items.map((i) => (
          <Piece key={i.src} item={i} shape={g.shape === "landscape" ? "aspect-[3/2]" : "aspect-[4/5]"} />
        ))}
      </div>
    </section>
  );
}
