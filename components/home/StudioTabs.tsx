"use client";

import { AnimatePresence, LazyMotion, m, useReducedMotion } from "framer-motion";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { MediaPanel } from "@/components/ui/MediaPanel";

// Layout animations (the sliding dot) load after the page is interactive; see ./motion-features.ts.
const loadFeatures = () => import("./motion-features").then((r) => r.default);

// Ported from tabData in raw/handoff/design/Main.dc.html.
const tabData = [
  {
    id: "web",
    label: "Web",
    title: "Sites and interfaces that feel considered",
    body: "We design and build the surfaces our products live on, from marketing sites to map-heavy product interfaces.",
    chips: ["websites", "product interfaces", "interactive maps"],
    asset: "[ WEB — screen capture of a Cosmonus-built interface ]", image: "/media/web/card-websites.jpg", alt: "The Cosmonus home page: 'Building Real-World Intelligence.' over a city street in motion.",
  },
  {
    id: "animation",
    label: "Animation",
    title: "Motion that explains, not decorates",
    body: "Animation is how we show a system working: a route forming, a score resolving, an agent taking a step.",
    chips: ["motion identity", "product films", "explainers"],
    asset: "[ ANIMATION — looping motion piece ]",
    image: "/media/home/studio-animation.png",
    alt: "A line map of city blocks with a route drawn between two points and a score ring loading beside the destination.",
  },
  {
    id: "image",
    label: "Image Generation",
    title: "Generated imagery with an art director",
    body: "We use image models the way a studio uses a camera: with a brief, a point of view and a lot of editing.",
    chips: ["art direction", "visual systems", "concept frames"],
    asset: "[ IMAGE GEN — before / after or contact sheet ]", image: "/media/image-generation/card-art-direction.jpg", alt: "A written brief on a cork board beside reference photographs of a street at dawn and a sheet of small image options.",
  },
  {
    id: "video",
    label: "Video",
    title: "Film for products that live outdoors",
    body: "Generated and shot footage, cut together into launch films and the cinematic loops you see across this site.",
    chips: ["generated footage", "edit and grade", "launch films"],
    asset: "[ VIDEO — 16:9 reel ]", image: "/media/video/poster.avif", alt: "A figure in a magenta coat walking in front of a blue wall in a white studio.",
  },
];

export function StudioTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const base = useId();
  const panelId = `${base}-panel`;
  const tab = tabData[active];

  function focusTab(i: number) {
    const n = tabData.length;
    const next = (i + n) % n;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowDown: active + 1,
      ArrowLeft: active - 1,
      ArrowUp: active - 1,
      Home: 0,
      End: tabData.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      focusTab(keys[e.key]);
    }
  }

  const ease = [0.22, 1, 0.36, 1] as const;
  const fade = {
    initial: { opacity: 0, y: reduce ? 0 : 6 },
    animate: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.26, ease } },
    exit: { opacity: 0, transition: { duration: reduce ? 0 : 0.12, ease: "linear" as const } },
  };

  // Runway-style showcase: a bordered box, large tab names stacked on the left (the selected one in ink),
  // the media and a short caption on the right.
  // `m` inside `LazyMotion` rather than `motion`, so this page shares the feature code the header already loads.
  // The full set (`domMax`, for the dot's `layoutId` slide) is fetched separately rather than with the page.
  return (
    <LazyMotion features={loadFeatures}>
      <div className="grid w-full grid-cols-1 gap-8 rounded-card border border-line p-5 sm:p-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-12">
        <div
          role="tablist"
          aria-label="Studio practices"
          aria-orientation="vertical"
          className="flex flex-wrap gap-x-5 gap-y-1 lg:flex-col lg:gap-y-2"
        >
          {tabData.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${base}-tab-${t.id}`}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
                className={`flex min-h-11 items-center gap-3 bg-transparent p-0 text-left text-[22px] leading-[1.2] font-normal tracking-[-0.015em] transition-colors duration-300 lg:text-[28px] ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {/* The accent dot slides to the selected practice. */}
                <span className="relative hidden size-2 shrink-0 lg:block" aria-hidden="true">
                  {selected && (
                    <m.span
                      layoutId="studio-tab-dot"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ duration: reduce ? 0 : 0.36, ease }}
                    />
                  )}
                </span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={panelId} aria-labelledby={`${base}-tab-${tab.id}`} tabIndex={0} className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <m.div key={tab.id} {...fade} className="flex flex-col gap-5">
              <MediaPanel
                tone="light"
                label={tab.asset}
                src={"image" in tab ? tab.image : undefined}
                alt={"alt" in tab ? tab.alt : undefined}
                sizes="(min-width: 1024px) 60vw, 100vw"
                labelSize="text-[13px]"
                className="h-[260px] rounded-media sm:h-[380px] lg:h-[460px]"
              />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="flex max-w-[560px] flex-col gap-1.5">
                  <h3 className="m-0 text-xl leading-[1.25] font-medium tracking-[-0.01em]">{tab.title}</h3>
                  <p className="m-0 text-[15px] leading-normal text-pretty text-muted">{tab.body}</p>
                </div>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0 lg:justify-end lg:pt-1">
                  {tab.chips.map((c) => (
                    <li key={c} className="rounded-chip bg-soft px-3 py-[7px] text-[13px] font-medium text-ink-2">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
}
