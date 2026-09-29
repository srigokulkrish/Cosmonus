"use client";

import { animate, createDrawable, stagger, utils } from "animejs";
import { Children, cloneElement, Fragment, isValidElement, useEffect, useRef, type ElementType, type ReactElement, type ReactNode } from "react";

/*
 * Entrance motion, driven by anime.js. Each piece runs once, when it first scrolls into view, and only after
 * its own hydration — so anime.js never touches DOM React has not claimed yet.
 *
 * The hidden start state is CSS on `[data-anime]` keyed on `html.anime` (app/globals.css). The boot script in
 * the root layout sets that class before first paint and skips it under reduced motion, so without JavaScript,
 * or with motion turned down, nothing is ever hidden and nothing moves.
 */

const EASE = "out(4)";

// Tells the boot script's fallback that the motion code arrived (lib/anime-boot.ts).
if (typeof window !== "undefined") (window as unknown as { __anime?: boolean }).__anime = true;

type Kind = "up" | "stagger" | "draw";

export function useOnView(ref: React.RefObject<HTMLElement | null>, run: (el: HTMLElement) => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("anime")) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run(el);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // `run` is a module-level function per kind; the ref is stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function rise(el: HTMLElement, kind: Kind, delay: number) {
  if (kind === "draw") {
    const drawables = createDrawable(el.querySelectorAll("path, circle, line, polyline, rect"));
    utils.set(drawables, { draw: "0 0" });
    el.dataset.animeDone = "";
    animate(drawables, { draw: ["0 0", "0 1"], duration: 1400, delay: stagger(220, { start: delay + 150 }), ease: "inOut(3)" });
    return;
  }
  // The CSS start state keeps every target hidden until its own delay starts; the tween's inline values take
  // over from there. Only when all are done is the element marked done and the inline styles dropped — no
  // utils.set() first, because cleanInlineStyles restores whatever was inline when the tween began.
  const targets = kind === "stagger" ? Array.from(el.children) : [el];
  animate(targets, {
    opacity: [0, 1],
    translateY: [28, 0],
    duration: 900,
    delay: stagger(90, { start: delay }),
    ease: EASE,
    onComplete: (anim) => {
      el.dataset.animeDone = "";
      // Leave no transform behind: hover effects and stacking expect a clean element.
      utils.cleanInlineStyles(anim);
    },
  });
}

/**
 * `up`: the element fades and rises. `stagger`: its children do, one after another (card rows, heading stacks).
 * `draw`: the strokes of the SVG inside draw themselves in.
 */
export function Reveal({
  kind = "up",
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  kind?: Kind;
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useOnView(ref, (el) => rise(el, kind, delay));
  return (
    <Tag ref={ref} data-anime={kind} className={className}>
      {children}
    </Tag>
  );
}

/** Wrap every word of a string (recursing into fragments and elements such as <br />) in a clipping mask. */
function splitWords(node: ReactNode, key = "w"): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) =>
      /^\s+$/.test(part) || part === "" ? (
        part
      ) : (
        <span key={`${key}-${i}`} className="anime-mask">
          <span data-word className="inline-block">
            {part}
          </span>
        </span>
      ),
    );
  }
  if (Array.isArray(node)) return Children.map(node, (child, i) => splitWords(child, `${key}-${i}`));
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children === undefined) return node;
    const inner = splitWords(el.props.children, key);
    return el.type === Fragment ? <Fragment key={key}>{inner}</Fragment> : cloneElement(el, undefined, inner);
  }
  return node;
}

/** A heading whose words rise out of their own line, one after another. Used on hero titles. */
export function RiseWords({ as: Tag = "h1", className, delay = 0, children }: { as?: ElementType; className?: string; delay?: number; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useOnView(ref, (el) => {
    const words = el.querySelectorAll("[data-word]");
    utils.set(words, { translateY: "140%" });
    el.dataset.animeDone = "";
    animate(words, {
      translateY: ["140%", "0%"],
      duration: 1100,
      delay: stagger(70, { start: delay }),
      ease: EASE,
      onComplete: () => (el.dataset.animeSettled = ""),
    });
  });
  return (
    <Tag ref={ref} data-anime="words" className={className}>
      {splitWords(children)}
    </Tag>
  );
}
