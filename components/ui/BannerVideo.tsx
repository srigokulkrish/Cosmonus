"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Banner background video: muted, looping, inline, covering the banner. `src` is the MP4 (H.264) in public/,
 * e.g. "/media/home/banner.mp4"; `webm` and `poster` are optional extras. Decorative: the banner's heading carries
 * the meaning. A soft shade from the bottom-left keeps the title readable over any footage. `zoom` (e.g. 1.35)
 * scales the footage up from the centre to crop away black letterbox bars recorded into the video.
 *
 * Smoothness: the video fades in only once it can play (no black flash while it buffers — the banner's own tone
 * shows until then); it pauses while scrolled out of view and resumes when back; under prefers-reduced-motion it
 * stays paused on its first frame (or the poster).
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

  return (
    <>
      <video
        ref={ref}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${ready ? "opacity-100" : "opacity-0"}`}
        style={zoom !== 1 ? { transform: `scale(${zoom})` } : undefined}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={!reduce}
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        onCanPlay={() => setReady(true)}
        onLoadedData={() => setReady(true)}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
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
