import type { ReactNode } from "react";
import { BannerVideo } from "./BannerVideo";

/** Grid + contour lines drawn over the dark hero panels. */
export function HeroLines({ variant = "inner" }: { variant?: "home" | "inner" }) {
  if (variant === "home") {
    return (
      <svg viewBox="0 0 1392 776" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none" stroke="#ffffff" strokeWidth="1">
        <g opacity="0.07">
          <path d="M0 194H1392M0 388H1392M0 582H1392M232 0V776M464 0V776M696 0V776M928 0V776M1160 0V776" />
        </g>
        <g opacity="0.16">
          <path d="M-20 520C180 430 300 610 520 520S860 380 1060 470 1300 560 1420 480" />
          <path d="M-20 470C190 380 310 560 530 470S870 330 1070 420 1300 510 1420 430" />
          <path d="M-20 420C200 330 320 510 540 420S880 280 1080 370 1300 460 1420 380" />
          <path d="M-20 370C210 280 330 460 550 370S890 230 1090 320 1300 410 1420 330" />
          <path d="M-20 320C220 230 340 410 560 320S900 180 1100 270 1300 360 1420 280" />
          <path d="M-20 270C230 180 350 360 570 270S910 130 1110 220 1300 310 1420 230" />
          <path d="M-20 220C240 130 360 310 580 220S920 80 1120 170 1300 260 1420 180" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 1392 560" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none" stroke="#ffffff" strokeWidth="1">
      <g opacity="0.07">
        <path d="M0 187H1392M0 374H1392M232 0V560M464 0V560M696 0V560M928 0V560M1160 0V560" />
      </g>
      <g opacity="0.15">
        <path d="M-20 400C180 310 300 490 520 400S860 260 1060 350 1300 440 1420 360" />
        <path d="M-20 340C195 250 315 430 535 340S875 200 1075 290 1300 380 1420 300" />
        <path d="M-20 280C210 190 330 370 550 280S890 140 1090 230 1300 320 1420 240" />
        <path d="M-20 220C225 130 345 310 565 220S905 80 1105 170 1300 260 1420 180" />
        <path d="M-20 160C240 70 360 250 580 160S920 20 1120 110 1300 200 1420 120" />
      </g>
    </svg>
  );
}

/**
 * Banner box shared by every hero, so all banners are the home banner's size: full viewport height under the
 * bar (600–760px) on desktop, 560px minimum on phones. Copy sits bottom-left, inset 6.25% onto the content line.
 */
export const BANNER =
  "relative flex min-h-[560px] flex-col items-start justify-end overflow-hidden rounded-hero px-6 pt-32 pb-10 md:px-[6.25%] lg:h-[calc(100svh-84px)] lg:max-h-[760px] lg:min-h-[600px] lg:pb-14";

/**
 * Inner-page hero: a banner on the frame, the same size as the home banner.
 * Runway-style: copy sits bottom-left, regular weight. Every banner is a video: pass `video` (the MP4 path,
 * e.g. "/media/web/banner.mp4") once the file exists; until then the flat tone (and grid lines) show.
 */
export function InnerHero({
  tone = "dark",
  title,
  lead,
  video,
  videoZoom,
  children,
}: {
  tone?: "dark" | "light";
  title: ReactNode;
  lead?: ReactNode;
  video?: string;
  /** Scale the banner video up from the centre to crop letterbox bars recorded into it (e.g. 1.35). */
  videoZoom?: number;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section className="frame pt-2 pb-5">
      <div
        className={`${BANNER} gap-5 ${dark ? "bg-panel-dark text-white" : "bg-panel-light text-ink"}`}
      >
        {video ? <BannerVideo src={video} tone={tone} zoom={videoZoom} /> : dark && <HeroLines />}
        <h1 className="relative m-0 max-w-[1000px] text-[36px] leading-[1.05] font-normal tracking-[-0.025em] text-balance sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        {lead && (
          <p className={`relative m-0 max-w-[600px] text-lg leading-[1.5] text-pretty lg:text-xl ${dark ? "text-white/85" : "text-ink-2"}`}>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
