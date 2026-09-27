"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Chevron } from "./Button";
import { Dot } from "./Dot";

type Option<T extends string> = { value: T; label: string };

/**
 * A styled single-select (the ARIA listbox pattern: a button that opens a list). Replaces the native <select>,
 * whose open list is drawn by the operating system and cannot be styled (owner, 2026-09-28).
 * Keyboard: ↓/↑/Enter/Space open; in the list ↓/↑ move, Home/End jump, a letter jumps to the next option starting
 * with it, Enter/Space choose, Escape closes, Tab closes and moves on. A click outside closes it.
 * `labelId` is the id of the visible label, so the button is announced as "Topic, General".
 */
export function Select<T extends string>({
  id,
  labelId,
  value,
  options,
  onChange,
  className = "",
}: {
  id: string;
  labelId: string;
  value: T;
  options: readonly Option<T>[];
  onChange: (value: T) => void;
  className?: string;
}) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );

  function openList(at = selectedIndex) {
    setActive(at);
    setOpen(true);
  }

  function close(refocus = true) {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  }

  function choose(i: number) {
    onChange(options[i].value);
    close();
  }

  // Focus the list when it opens, so arrow keys work at once.
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  // Keep the active option in view in a long list.
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  // A press anywhere outside closes the list.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  function onButtonKey(e: KeyboardEvent<HTMLButtonElement>) {
    if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      openList(e.key === "ArrowUp" ? Math.max(0, selectedIndex - 1) : selectedIndex);
    }
  }

  function onListKey(e: KeyboardEvent<HTMLUListElement>) {
    const n = options.length;
    const moves: Record<string, number> = { ArrowDown: Math.min(n - 1, active + 1), ArrowUp: Math.max(0, active - 1), Home: 0, End: n - 1 };
    if (e.key in moves) {
      e.preventDefault();
      setActive(moves[e.key]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      close(false);
    } else if (e.key.length === 1 && /\S/.test(e.key)) {
      const k = e.key.toLowerCase();
      for (let step = 1; step <= n; step++) {
        const i = (active + step) % n;
        if (options[i].label.toLowerCase().startsWith(k)) {
          setActive(i);
          break;
        }
      }
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${labelId} ${id}`}
        onClick={() => (open ? close() : openList())}
        onKeyDown={onButtonKey}
        className={`flex items-center justify-between gap-3 text-left ${className}`}
      >
        <span>{options[selectedIndex].label}</span>
        <span aria-hidden="true" className={`flex text-muted transition-transform duration-200 ${open ? "-rotate-90" : "rotate-90"}`}>
          <Chevron />
        </span>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={labelId}
          aria-activedescendant={`${listId}-${active}`}
          onKeyDown={onListKey}
          className="menu-in absolute inset-x-0 top-full z-20 m-0 mt-1.5 max-h-80 list-none overflow-auto rounded-btn border border-line bg-white p-1 shadow-[0_10px_28px_rgba(0,0,0,0.10)] outline-none"
        >
          {options.map((o, i) => {
            const selected = i === selectedIndex;
            return (
              <li
                key={o.value}
                id={`${listId}-${i}`}
                data-index={i}
                role="option"
                aria-selected={selected}
                onPointerMove={() => setActive(i)}
                onClick={() => choose(i)}
                className={`flex min-h-11 cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 text-[15px] transition-colors duration-150 ${
                  i === active ? "bg-soft text-ink" : "text-ink-2"
                } ${selected ? "font-medium text-ink" : ""}`}
              >
                <span>{o.label}</span>
                {selected && <Dot />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
