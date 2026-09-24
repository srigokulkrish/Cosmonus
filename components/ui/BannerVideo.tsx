"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Banner background video: muted, looping, inline, covering the banner. `src` is the MP4 (H.264) in public/,
 * e.g. "/media/home/banner.mp4"; `webm` is an optional extra. Decorative: the banner's heading carries
 * the meaning. A soft shade from the bottom-left keeps the title readable over any footage. `zoom` (e.g. 1.35)
 * scales the footage up from the centre to crop away black letterbox bars recorded into the video.
 *
 * `poster` is the film's first frame (`poster.avif` beside the file, ~10–120 KB). It is drawn as its own picture
 * underneath the video, not as the video's `poster` attribute, because the video is invisible until it can play
 * and would hide its own poster with it. It is the largest thing painted on the page, so it is preloaded with
 * high priority — a banner is always above the fold. The film then fades in over it from the same frame, so
 * there is no jump; if the film never loads, the still is the banner.
 *
 * Loading: the film is not requested until the page has finished loading and the browser is idle, so a banner
 * film never competes with the page's own first paint, and it is not requested at all under Save-Data or on a
 * 2G connection. The poster (or, without one, the banner's flat tone) is what shows until then, and what
 * stays if the film never loads.
 *
 * Smoothness: the video fades in only once it can play (no black flash while it buffers); it pauses while
 * scrolled out of view and resumes when back; under prefers-reduced-motion it stays paused on its first frame.
 */
export function BannerVideo({
  src,
  webm,
  poster,
  tone = "dark",
  zoom = 1,
}: {
  src: string;
  webm?: string;
  poster?: string;
  tone?: "dark" | "light";
  zoom?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [load, setLoad] = useState(false);

  // Nothing is fetched until the page has settled. A banner film is decoration behind copy that is already
  // readable, so it must never compete with the page's own first paint — `preload="auto"` used to pull the
  // whole file down at once, and some of these files are tens of megabytes. Skipped entirely where the
  // visitor has asked to save data or the connection reports itself as 2G: the flat tone is the fallback,
  // and it is a perfectly good banner.
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || /2g$/.test(conn?.effectiveType ?? "")) return;
    const start = () => setLoad(true);
    // `load` first, then idle — on a first visit `load` fires while hydration is still busy, so starting the
    // film right there (as this used to) still competed with it.
    let idle = 0;
    let timer = 0;
    const whenIdle = () => {
      if (typeof window.requestIdleCallback === "function") idle = window.requestIdleCallback(start, { timeout: 2000 });
      else timer = window.setTimeout(start, 300);
    };
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    return () => {
      window.removeEventListener("load", whenIdle);
      if (idle) window.cancelIdleCallback(idle);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  // A <source> added after mount is not picked up until the element is told to look again.
  useEffect(() => {
    if (load) ref.current?.load();
  }, [load]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.05 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const zoomStyle = zoom !== 1 ? { transform: `scale(${zoom})` } : undefined;

  return (
    <>
      {poster && (
        // The file is already the finished AVIF at the film's own size, so it is served as-is rather than
        // re-encoded by the image optimizer: the frame must match the film's first frame exactly.
        <Image
          src={poster}
          alt=""
          aria-hidden="true"
          fill
          unoptimized
          preload
          fetchPriority="high"
          className="object-cover"
          style={zoomStyle}
        />
      )}
      <video
        ref={ref}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${ready ? "opacity-100" : "opacity-0"}`}
        style={zoomStyle}
        muted
        loop
        playsInline
        autoPlay={!reduce}
        preload={load ? "metadata" : "none"}
        disablePictureInPicture
        disableRemotePlayback
        onCanPlay={() => setReady(true)}
        onLoadedData={() => setReady(true)}
      >
        {load && webm && <source src={webm} type="video/webm" />}
        {load && <source src={src} type="video/mp4" />}
      </video>
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-tr ${
          tone === "dark" ? "from-black/60 via-black/20 to-transparent" : "from-white/70 via-white/25 to-transparent"
        }`}
      />
    </>
  );
}
