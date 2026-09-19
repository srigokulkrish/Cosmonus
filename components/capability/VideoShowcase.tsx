import { LoopVideo } from "@/components/ui/LoopVideo";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionHead, SideHead, SideLayout, THIRDS } from "@/components/ui/Section";

export type ShowcaseClip = { src: string; title: string };

/**
 * Real footage on a capability page (the Video page's Sport and Product work), on the site grid:
 * - `thirds`: section heading, then clips in a row of three, tall (4:5) so portrait phone footage fills them;
 * - `feature`: heading in the first third, one wide 16:9 clip across the other two.
 * Clips loop muted while on screen (`LoopVideo`); each has a visible caption.
 */
export type ShowcaseGroup = {
  label: string;
  title: string;
  lead?: string;
  layout: "thirds" | "feature";
  clips: ShowcaseClip[];
};

function Clip({ clip, shape }: { clip: ShowcaseClip; shape: string }) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className={`overflow-hidden rounded-media bg-panel-card ${shape}`}>
        <LoopVideo src={clip.src} />
      </div>
      <figcaption className="text-base font-medium tracking-[-0.01em]">{clip.title}</figcaption>
    </figure>
  );
}

export function VideoShowcase({ group: g }: { group: ShowcaseGroup }) {
  if (g.layout === "feature") {
    return (
      <section className="wrap sec">
        <SideLayout head={<SideHead label={g.label} title={g.title} lead={g.lead} />}>
          <div className="flex flex-col gap-5">
            {g.clips.map((c) => (
              <Clip key={c.src} clip={c} shape="aspect-video" />
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
        {g.clips.map((c) => (
          <Clip key={c.src} clip={c} shape="aspect-[4/5]" />
        ))}
      </div>
    </section>
  );
}
