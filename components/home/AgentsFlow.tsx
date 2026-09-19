"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Arrow } from "@/components/ui/Button";
import { MediaPanel, toneAt } from "@/components/ui/MediaPanel";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SectionHead } from "@/components/ui/Section";

const nodes = [
  { num: "01", name: "Signal", body: "Something happens in the real world — a message, a listing, a request.", asset: "[ DIAGRAM — a signal arrives ]" },
  { num: "02", name: "Context", body: "Place, time, history and the people involved are gathered first.", asset: "[ DIAGRAM — context gathered around it ]" },
  {
    num: "03",
    name: "Agent",
    body: "Plans the steps, decides which tools to call, and checks each result before moving on.",
    asset: "[ DIAGRAM — the agent plans and checks ]",
  },
  { num: "04", name: "Tools", body: "Maps, messaging, databases and conventional services.", asset: "[ DIAGRAM — tools called ]" },
  { num: "05", name: "Action", body: "A finished result, handed back for a person to review.", asset: "[ DIAGRAM — result handed back ]" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const STEP_MS = 5000;

/**
 * How an agent works: a stepper on a soft-grey panel. Five steps across the top with a progress rule that fills to
 * the current one; below, the current step large (number, name, description, next button) beside its diagram.
 * Advances on its own every 5 s, pauses on hover/focus, never under prefers-reduced-motion. Tabs pattern:
 * arrow keys, Home and End move between steps.
 */
export function AgentsFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const base = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const node = nodes[active];
  const n = nodes.length;

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % n), STEP_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce, n]);

  function go(i: number, focus = false) {
    const next = (i + n) % n;
    setActive(next);
    if (focus) tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: n - 1 };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key], true);
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <SectionHead
        eyebrow="How an agent works"
        title="From a signal to a result someone can check."
        lead="Five steps, from something happening in the real world to finished work a person reviews."
      />

      <div
        className="rounded-hero bg-panel-light p-5 sm:p-8 lg:p-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Step rail */}
        <div role="tablist" aria-label="How an agent works" className="grid grid-cols-5 gap-2 sm:gap-4">
          {nodes.map((s, i) => {
            const selected = i === active;
            const done = i <= active;
            return (
              <button
                key={s.num}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${base}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${base}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => go(i)}
                onKeyDown={onKeyDown}
                className={`group flex min-h-11 flex-col items-start gap-3 bg-transparent p-0 text-left transition-colors duration-300 ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-rule/60">
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-ink"
                    initial={false}
                    animate={{ width: done ? "100%" : "0%" }}
                    transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-xs">{s.num}</span>
                  <span className="hidden text-lg leading-tight font-medium tracking-[-0.01em] sm:block lg:text-xl">{s.name}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Current step */}
        <div role="tabpanel" id={`${base}-panel`} aria-labelledby={`${base}-tab-${active}`} className="mt-8 lg:mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={node.num}
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.3, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.15, ease: "linear" } }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-10"
            >
              <div className="flex flex-col items-start gap-5">
                <MonoLabel dot={active === 2}>
                  Step {node.num} of 0{n}
                </MonoLabel>
                <h3 className="m-0 text-[44px] leading-none font-normal tracking-[-0.025em] lg:text-[64px]">{node.name}</h3>
                <p className="m-0 max-w-[460px] text-lg leading-normal text-pretty text-ink-2 lg:text-xl">{node.body}</p>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  className="mt-2 inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-soft"
                >
                  <span>{active === n - 1 ? "Start again" : `Next: ${nodes[active + 1].name}`}</span>
                  <Arrow />
                </button>
              </div>
              <MediaPanel tone={toneAt(active)} label={node.asset} labelSize="text-[13px]" className="h-[260px] rounded-media sm:h-[340px] lg:h-[400px]" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
