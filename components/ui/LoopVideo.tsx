"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * A muted, looping clip inside the page (not a banner). Fills its box (object-cover); the caller sets the box's size,
 * shape and radius. `label` names the clip for screen readers when there is no visible caption.
 *
 * Smoothness: nothing is downloaded until the clip is within ~300px of the screen (preload "none" until then), so a
 * page of clips loads quickly; it plays only while at least a third of it is visible and pauses otherwise; it fades
 * in once it can play; under reduced motion it loads and stays paused on its first frame.
 */
export function LoopVideo({ src, className = "", label }: { src: string; className?: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);

  // Start loading when the clip is close to the viewport. Never under Save-Data or on a 2G connection, the same
  // rule as BannerVideo: the box's flat panel tone stays, and the caption beside it still names the clip.
  useEffect(() => {
    const v = ref.current;
    if (!v || near) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || /2g$/.test(conn?.effectiveType ?? "")) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [near]);

  // Play only while clearly on screen.
  useEffect(() => {
    const v = ref.current;
    if (!v || !near) return;
    if (reduce) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.33 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [near, reduce]);

  return (
    <video
      ref={ref}
      className={`block h-full w-full object-cover transition-opacity duration-500 ease-out ${ready ? "opacity-100" : "opacity-0"} ${className}`}
      src={near ? src : undefined}
      muted
      loop
      playsInline
      preload={near ? "auto" : "none"}
      disablePictureInPicture
      disableRemotePlayback
      onCanPlay={() => setReady(true)}
      onLoadedData={() => setReady(true)}
      {...(label ? { "aria-label": label } : { "aria-hidden": true })}
    />
  );
}
