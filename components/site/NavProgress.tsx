"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * A thin violet progress line at the very top of the window. It starts the moment an internal link is clicked
 * (or Back/Forward is used) and completes when the new page's path is in place, so a navigation always feels
 * answered — even before the loading skeleton or the page appears. Decorative (aria-hidden).
 */
export function NavProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Start on clicks that will change the page.
  useEffect(() => {
    const start = () => {
      clear();
      setState("loading");
      // Safety: never leave the bar hanging if a navigation is cancelled.
      timers.current.push(setTimeout(() => setState("idle"), 8000));
    };
    const onClick = (e: MouseEvent) => {
      // Capture phase: runs before <Link> prevents default to navigate client-side.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // same page (anchors, query-only)
      start();
    };
    const onPop = () => start();
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
      clear();
    };
  }, []);

  // Finish when the path changes (state reset during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (state === "loading") setState("done");
  }
  useEffect(() => {
    if (state !== "done") return;
    clear();
    timers.current.push(setTimeout(() => setState("idle"), 450));
  }, [state]);

  const scale = state === "loading" ? 0.8 : state === "done" ? 1 : 0;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div
        className="nav-progress h-full bg-accent"
        style={{
          transform: `scaleX(${scale})`,
          opacity: state === "idle" ? 0 : 1,
          transitionDuration: state === "loading" ? "2500ms, 200ms" : undefined,
        }}
      />
    </div>
  );
}
