"use client";

import { createTimeline, stagger, utils } from "animejs";
import { useRef } from "react";
import { useOnView } from "@/components/ui/Anime";

/*
 * The closing statement, animated with anime.js. The quiet line rises word by word in full ink, then the call
 * to act rises under it while the quiet line steps back to grey — the emphasis moves from watching to doing —
 * and the last word lands with a spring in the brand colour. Runs once, on scroll into view; under reduced
 * motion (or without JS) the statement is simply there. The visible copy is aria-hidden; Close() carries the
 * sentence for screen readers.
 */

const QUIET = "#8a8a8a";
const INK = "#1a1a1a";

function words(text: string) {
  return text.split(" ").map((w, i, all) => (
    <span key={i}>
      <span className="anime-mask">
        <span data-word className="word">
          {w}
        </span>
      </span>
      {i < all.length - 1 ? " " : null}
    </span>
  ));
}

export function Statement({ quiet, loud }: { quiet: string; loud: [string, string] }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useOnView(ref, (el) => {
    const quietWords = el.querySelectorAll(".quiet [data-word]");
    const loudWords = el.querySelectorAll(".loud [data-word]");
    const pop = el.querySelector(".pop");
    utils.set([...quietWords, ...loudWords], { translateY: "140%" });
    utils.set(quietWords, { color: INK });
    utils.set(pop!, { opacity: 0, scale: 0.4, rotate: -8 });
    el.dataset.animeDone = "";

    createTimeline()
      .add(quietWords, { translateY: ["140%", "0%"], duration: 1000, delay: stagger(70), ease: "out(4)" })
      .add(loudWords, { translateY: ["140%", "0%"], duration: 900, delay: stagger(90), ease: "out(4)" }, "+=250")
      .add(quietWords, { color: [INK, QUIET], duration: 900, ease: "inOut(2)" }, "<<")
      .add(pop!, { opacity: [0, 1], scale: [0.4, 1], rotate: [-8, 0], duration: 1300, ease: "outElastic(1, .55)" }, "-=450")
      .call(() => (el.dataset.animeSettled = ""));
  });

  return (
    <p ref={ref} className="statement" data-anime="words" aria-hidden="true">
      <span className="quiet">{words(quiet)}</span>
      <span className="loud">
        {words(loud[0])}{" "}
        <em data-word className="pop">
          {loud[1]}
        </em>
      </span>
    </p>
  );
}
