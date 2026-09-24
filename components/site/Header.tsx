"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MeshBackdrop } from "@/components/ui/MeshBackdrop";
import { menuForPath, menus, type MenuId } from "@/lib/site";

// One easing curve for all UI motion: quick start, long soft settle.
const EASE = [0.22, 1, 0.36, 1] as const;

// public/logo-white.png (231×30, from the original cosmonus.com) used as a mask, so one file takes the
// surrounding text colour: ink on the white bar, white in the footer.
const wordmark = "url(/logo-white.png) center / contain no-repeat";

/** The COSMONUS wordmark. The parent link carries the accessible name. The "C" icon is only the favicon. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-4 w-[123px] bg-current ${className}`}
      style={{ mask: wordmark, WebkitMask: wordmark }}
    />
  );
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5 6 7.5 9 4.5" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const current = menuForPath(pathname);
  // Intent prefetch: pointing at a menu starts loading its overview and every page in it, so the click lands instantly.
  const prefetched = useRef(new Set<MenuId>());
  const prefetchMenu = (id: MenuId) => {
    if (prefetched.current.has(id)) return;
    prefetched.current.add(id);
    const m = menus.find((x) => x.id === id);
    if (!m) return;
    [m.href, ...m.links.map((l) => l.href)].forEach((href) => router.prefetch(href));
  };
  const [open, setOpen] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const focusPanel = useRef(false);
  const reduce = useReducedMotion();

  // Separate timers: entering the bar must cancel a pending close, never a pending open.
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const clearTimer = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = null;
    cancelClose();
  };
  // Pointer: open after a short intent delay (instant when switching between open menus),
  // and close after a grace period so crossing into the panel never flickers.
  const hoverOpen = (id: MenuId) => {
    prefetchMenu(id);
    clearTimer();
    if (open) setOpen(id);
    else openTimer.current = setTimeout(() => setOpen(id), 90);
  };
  const scheduleClose = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };
  useEffect(
    () => () => {
      if (openTimer.current) clearTimeout(openTimer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );
  const closeMobile = useCallback(() => setMobileOpen(false), [setMobileOpen]);

  // Close everything on navigation (state reset during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
  }

  // Escape and outside click.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const trigger = rootRef.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`);
        setOpen(null);
        trigger?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // Keyboard/click open moves focus into the panel.
  useEffect(() => {
    if (open && focusPanel.current) {
      focusPanel.current = false;
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    }
  }, [open]);

  // Lock scroll behind the mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const panel = menus.find((m) => m.id === open);

  const labelColor = (id: MenuId) => {
    if (open) return open === id ? "text-ink" : "text-footer-muted";
    if (current) return current === id ? "text-ink" : "text-muted";
    return "text-ink";
  };

  // `m` + `LazyMotion` with the `domAnimation` features instead of `motion`: this header is on every page, and
  // everything it animates (opacity, x/y, height, exit) is in that smaller set. Pages that need layout
  // animations (the home Studio tabs) still load the full `motion` themselves.
  return (
    <LazyMotion features={domAnimation}>
      <div ref={rootRef} className="sticky top-0 z-40" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
        {/* White bar with a light frost; stays put while the page scrolls underneath. */}
        <header className="bg-white/95 backdrop-blur-xl supports-[not(backdrop-filter:blur(1px))]:bg-white">
          <div className="frame flex h-[60px] items-center justify-between">
            <Link href="/" aria-label="Cosmonus home" className="flex h-11 items-center lg:w-[220px]">
              <Logo />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {menus.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  data-menu={m.id}
                  aria-expanded={open === m.id}
                  aria-controls="mega-menu"
                  onClick={(e) => {
                    clearTimer();
                    // detail === 0 means keyboard activation.
                    focusPanel.current = e.detail === 0;
                    prefetchMenu(m.id);
                    setOpen(open === m.id ? null : m.id);
                  }}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") hoverOpen(m.id);
                  }}
                  className={`flex h-11 items-center gap-1.5 border-0 bg-transparent px-3.5 text-base font-medium transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${labelColor(m.id)}`}
                >
                  <span>{m.label}</span>
                  <Chevron open={open === m.id} />
                </button>
              ))}
            </nav>

            <div className="hidden w-[220px] justify-end lg:flex">
              <Link href="/contact" className="flex h-9 items-center rounded-lg bg-ink px-3.5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-ink-2">
                Contact
              </Link>
            </div>

            <button
              type="button"
              className="flex h-9 items-center rounded-lg bg-soft px-3.5 text-[14px] font-semibold transition-colors duration-200 hover:bg-line lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              Menu
            </button>
          </div>
        </header>

        {/* Glass behind an open menu: the page frosts over while the panel is up, so the panel reads as the
            thing in focus rather than as a card floating on busy footage. It starts under the bar (top-[60px]),
            which keeps its own frost, and it is `pointer-events-none` — the wrapper closes the menu on mouse
            leave, so a scrim that swallowed the pointer would hold every menu open across the whole page. */}
        <AnimatePresence>
          {panel && (
            <m.div
              key="scrim"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.28, ease: EASE } }}
              exit={{ opacity: 0, transition: { duration: 0.18, ease: EASE } }}
              className="pointer-events-none fixed inset-x-0 top-[60px] bottom-0 hidden bg-white/15 backdrop-blur-xs backdrop-saturate-150 supports-[not(backdrop-filter:blur(1px))]:bg-white/60 lg:block"
            />
          )}
        </AnimatePresence>

        {/* Desktop mega menu: overlays the hero, does not shift the page. The wrapper's top padding
            bridges the gap under the bar so the pointer can travel into the panel. */}
        <AnimatePresence>
          {panel && (
            <m.div
              key="mega"
              initial={{ opacity: 0, y: reduce ? 0 : -6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } }}
              exit={{ opacity: 0, y: reduce ? 0 : -4, transition: { duration: 0.18, ease: EASE } }}
              className="frame absolute top-full left-1/2 hidden -translate-x-1/2 pt-1 lg:block"
            >
              <MegaPanel panelRef={panelRef} panel={panel} reduce={!!reduce} />
            </m.div>
          )}
        </AnimatePresence>

        <AnimatePresence>{mobileOpen && <MobileMenu key="mobile" onClose={closeMobile} />}</AnimatePresence>
      </div>
    </LazyMotion>
  );
}

/** Panel body: its height glides and the content cross-fades when switching between menus. */
function MegaPanel({
  panel,
  panelRef,
  reduce,
}: {
  panel: (typeof menus)[number];
  panelRef: React.RefObject<HTMLDivElement | null>;
  reduce: boolean;
}) {
  const inner = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useLayoutEffect(() => {
    const el = inner.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <m.div
      ref={panelRef}
      id="mega-menu"
      initial={false}
      animate={{ height }}
      transition={{ duration: reduce ? 0 : 0.32, ease: EASE }}
      className="overflow-hidden rounded-btn border border-line bg-white shadow-menu"
    >
      <div ref={inner}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={panel.id}
            initial={{ opacity: 0, x: reduce ? 0 : 6 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.22, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.1, ease: "linear" } }}
            className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,2.6fr)] gap-6 p-6 pl-10"
          >
            <PanelIntro panel={panel} />
            {panel.id === "product" ? <ProductCards panel={panel} /> : <QuickLinks panel={panel} />}
          </m.div>
        </AnimatePresence>
      </div>
    </m.div>
  );
}

const brandBg = { stayonmap: "bg-stayonmap", happenous: "bg-happenous" } as const;

/**
 * Left column of every menu panel: mono label, title, description, and the section overview link.
 * The overview link is the one accent-coloured piece of text on the site (violet, 4.7:1 on white), so the way
 * out of the panel reads differently from the quick links beside it. Its rule wipes in from the left on hover
 * and focus, and simply appears when the visitor has asked for reduced motion.
 */
function PanelIntro({ panel }: { panel: (typeof menus)[number] }) {
  return (
    <div className="flex flex-col justify-between gap-6 py-3 pr-4">
      <div className="flex flex-col gap-3">
        <div className="font-mono text-xs text-muted">{panel.label}</div>
        <div className="text-[28px] leading-[1.15] font-normal tracking-[-0.02em] text-balance">{panel.title}</div>
        <p className="m-0 text-[15px] leading-[1.5] text-pretty text-muted">{panel.desc}</p>
      </div>
      <Link href={panel.href} className="group flex h-11 items-center self-start text-[15px] font-medium text-accent">
        <span className="relative">
          {panel.label} overview
          <span
            aria-hidden="true"
            className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
          />
        </span>
      </Link>
    </div>
  );
}

/** Product menu: a large brand-coloured card per product. */
function ProductCards({ panel }: { panel: (typeof menus)[number] }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {panel.links.map((l) => (
        <ProductCard key={l.href} link={l} />
      ))}
    </div>
  );
}

/**
 * Every other menu: compact quick links in two columns that line up with the Product cards —
 * name, one-line description and a small arrow, each closed by a 1px line rule below it.
 */
function QuickLinks({ panel }: { panel: (typeof menus)[number] }) {
  return (
    <ul className="m-0 grid list-none content-start grid-cols-2 gap-x-6 gap-y-2 p-0 py-3">
      {panel.links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="row group flex items-start justify-between gap-4 border-b border-line pt-3 pb-4">
            <span className="flex flex-col gap-1">
              <span className="rowname text-[17px] font-medium">{l.name}</span>
              <span className="text-sm leading-[1.45] text-muted">{l.desc}</span>
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="mt-1 shrink-0 text-muted transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Product card in the Product menu: an atmospheric mesh-gradient background in the product's colours
 * (`MeshBackdrop`), with the copy directly on it. The darkened lower edge keeps white text above 4.5:1.
 */
function ProductCard({ link }: { link: (typeof menus)[number]["links"][number] }) {
  return (
    <Link
      href={link.href}
      className={`group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-btn p-7 text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
        link.brand ? brandBg[link.brand] : "bg-ink"
      }`}
    >
      {link.brand && <MeshBackdrop palette={link.brand} />}
      <span className="relative flex flex-col gap-2">
        <span className="text-[30px] leading-[1.1] font-normal tracking-[-0.02em]">{link.name}</span>
        <span className="text-[17px] font-medium">{link.desc}</span>
        {link.blurb && <span className="max-w-[340px] text-[15px] leading-[1.45] text-pretty text-white/90">{link.blurb}</span>}
        <span className="mt-3 flex items-center gap-2 text-[15px] font-medium">
          <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-current">
            Explore {link.name}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </span>
    </Link>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<MenuId | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : -8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } }}
      exit={{ opacity: 0, y: reduce ? 0 : -8, transition: { duration: 0.2, ease: EASE } }}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
    >
      <div className="flex h-[60px] shrink-0 items-center justify-between px-5">
        <Link href="/" onClick={onClose} aria-label="Cosmonus home" className="flex h-11 items-center">
          <Logo />
        </Link>
        <button type="button" onClick={onClose} className="flex h-9 items-center rounded-lg bg-soft px-3.5 text-[14px] font-semibold transition-colors duration-200 hover:bg-line">
          Close
        </button>
      </div>
      <nav aria-label="Primary" className="flex flex-col px-5 pb-10">
        {menus.map((menu) => {
          const isOpen = expanded === menu.id;
          return (
            <div key={menu.id} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`m-${menu.id}`}
                onClick={() => setExpanded(isOpen ? null : menu.id)}
                className="flex min-h-16 w-full items-center justify-between border-0 bg-transparent text-left text-2xl font-medium tracking-[-0.02em]"
              >
                {menu.label}
                <Chevron open={isOpen} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={`m-${menu.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, transition: { duration: reduce ? 0 : 0.32, ease: EASE } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: reduce ? 0 : 0.24, ease: EASE } }}
                    className="overflow-hidden"
                  >
                <div className="flex flex-col gap-1 pb-5">
                  {/* Accent-coloured like its desktop counterpart in `PanelIntro`; the underline is the shared row hover. */}
                  <Link href={menu.href} onClick={onClose} className="row flex min-h-11 items-center py-2 text-accent">
                    <span className="rowname text-[17px] font-medium">{menu.label} overview</span>
                  </Link>
                  {menu.links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={onClose} className="row flex min-h-11 flex-col justify-center gap-0.5 py-2">
                      <span className="rowname text-[17px] font-medium">{l.name}</span>
                      <span className="text-sm text-muted">{l.desc}</span>
                    </Link>
                  ))}
                </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        <Link href="/contact" onClick={onClose} className="mt-8 flex h-11 items-center justify-center rounded-lg bg-ink px-5 text-base font-semibold text-white transition-colors duration-200 hover:bg-ink-2">
          Contact
        </Link>
      </nav>
    </m.div>
  );
}
