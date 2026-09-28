import { Plus_Jakarta_Sans } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ICONS, type IconName } from "./icons";
import "./stayonmap.css";

/**
 * The StayOnMap product page draws the product the way the StayOnMap app does
 * (~/Desktop/StayOnMap/frontend) — the map with type-coloured price pins, the listing card, TrustBadge, the
 * StayScore widget, neighbourhood facts with their Measured / Calculated / Estimated chips, the visit picker and
 * the tenant–owner chat — in place of photographs. Every listing, price and fact drawn is an example, never a live
 * listing, and each drawing says so. Styles: ./stayonmap.css, scoped under `.sx`. Face: Plus Jakarta Sans.
 */

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sx-sans", display: "swap" });

export type Headline = [string, string];
type PropType = "apartment" | "house" | "land" | "pg" | "commercial" | "short";

const TYPE_ICON: Record<PropType, IconName> = {
  apartment: "building-2",
  house: "house",
  land: "land-plot",
  pg: "bed-double",
  commercial: "store",
  short: "luggage",
};

export function Icon({ name, className = "icon" }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}

/** Wraps a block in the StayOnMap scope: its tokens, its face. */
export function Sx({ children, className = "", id, as: Tag = "div" }: { children: ReactNode; className?: string; id?: string; as?: "div" | "section" }) {
  return (
    <Tag id={id} className={`sx ${jakarta.variable} ${className}`}>
      {children}
    </Tag>
  );
}

function Head({ label, title, lead }: { label?: string; title: Headline; lead?: ReactNode }) {
  return (
    <div className="flex max-w-[760px] flex-col items-start gap-4">
      {label && <MonoLabel dot>{label}</MonoLabel>}
      <h2 className="m-0 text-[34px] leading-[1.08] text-balance text-[var(--s-900)] lg:text-[48px]">
        {title[0]} <em className="text-[var(--brand-600)] not-italic">{title[1]}</em>
      </h2>
      {lead && <p className="m-0 max-w-[620px] text-lg leading-normal text-pretty text-[var(--s-500)]">{lead}</p>}
    </div>
  );
}

function Example({ children = "Example" }: { children?: ReactNode }) {
  return (
    <span className="example" aria-hidden="true">
      {children}
    </span>
  );
}

/* ================================================================ the map */

type Pin = { x: number; y: number; type: PropType; label: string; sel?: boolean };
type Cluster = { x: number; y: number; count: number };

const HERO_PINS: Pin[] = [
  { x: 22, y: 36, type: "apartment", label: "₹18K · 2BHK" },
  { x: 44, y: 28, type: "pg", label: "₹8.5K" },
  { x: 64, y: 44, type: "apartment", label: "₹24K · 3BHK", sel: true },
  { x: 30, y: 60, type: "house", label: "₹32K · 3BHK" },
  { x: 78, y: 26, type: "short", label: "₹2.2K" },
  { x: 52, y: 70, type: "commercial", label: "₹45K" },
  { x: 16, y: 80, type: "land", label: "₹12K" },
  { x: 84, y: 62, type: "apartment", label: "₹15K · 1BHK" },
];
const HERO_CLUSTERS: Cluster[] = [
  { x: 40, y: 48, count: 5 },
  { x: 72, y: 82, count: 3 },
];

function MapBase() {
  return (
    <svg className="base" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="800" height="600" fill="#efece4" />
      <path d="M690 -10 C 660 120, 720 240, 680 360 S 700 520, 740 610 L 810 610 L 810 -10 Z" fill="#cfe3ee" />
      <path d="M90 120 C 150 90, 230 110, 225 170 S 140 240, 100 215 S 40 150, 90 120 Z" fill="#d9ecd3" />
      <path d="M430 430 C 490 410, 560 430, 550 480 S 470 520, 440 500 Z" fill="#d9ecd3" />
      <rect x="300" y="180" width="70" height="46" rx="6" fill="#e6e2d8" />
      <rect x="520" y="120" width="54" height="60" rx="6" fill="#e6e2d8" />
      <rect x="180" y="380" width="80" height="50" rx="6" fill="#e6e2d8" />
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path d="M-10 250 C 200 230, 420 280, 810 220" strokeWidth="14" />
        <path d="M250 -10 C 270 200, 230 400, 280 610" strokeWidth="14" />
        <path d="M-10 470 C 220 450, 480 500, 700 450" strokeWidth="10" />
        <path d="M520 -10 C 500 160, 560 330, 520 610" strokeWidth="10" />
        <path d="M-10 90 C 200 110, 420 60, 700 100" strokeWidth="6" />
        <path d="M120 -10 C 140 200, 90 420, 140 610" strokeWidth="6" />
        <path d="M380 -10 C 370 200, 400 420, 380 610" strokeWidth="6" />
        <path d="M-10 360 C 200 350, 420 380, 700 340" strokeWidth="6" />
        <path d="M620 -10 C 610 150, 640 300, 610 610" strokeWidth="5" />
      </g>
      {/* A metro line, as the neighbourhood cards talk about one. */}
      <path d="M-10 540 C 160 500, 300 330, 460 300 S 640 170, 810 140" fill="none" stroke="#2f74c0" strokeWidth="3" strokeDasharray="1 0" opacity="0.55" />
      <circle cx="300" cy="352" r="6" fill="#fff" stroke="#2f74c0" strokeWidth="3" />
      <circle cx="560" cy="226" r="6" fill="#fff" stroke="#2f74c0" strokeWidth="3" />
    </svg>
  );
}

function PinEl({ p, i }: { p: Pin; i: number }) {
  return (
    <span className={`pin t-${p.type}${p.sel ? " sel" : ""}`} style={{ left: `${p.x}%`, top: `${p.y}%`, ["--i" as string]: i } as CSSProperties}>
      <Icon name={TYPE_ICON[p.type]} />
      {p.label}
    </span>
  );
}

export function DrawnMap({ pins = HERO_PINS, clusters = HERO_CLUSTERS, me }: { pins?: Pin[]; clusters?: Cluster[]; me?: { x: number; y: number } }) {
  return (
    <div className="sx-map" aria-hidden="true">
      <MapBase />
      {me && <span className="you" style={{ left: `${me.x}%`, top: `${me.y}%` }} />}
      {pins.map((p, i) => (
        <PinEl key={i} p={p} i={i} />
      ))}
      {clusters.map((c, i) => (
        <span key={`c${i}`} className="cluster" style={{ left: `${c.x}%`, top: `${c.y}%`, ["--i" as string]: pins.length + i } as CSSProperties}>
          {c.count} homes
        </span>
      ))}
    </div>
  );
}

/* ================================================================ listing pieces */

function Stars({ score, small = false }: { score: number; small?: boolean }) {
  return (
    <span className={`stars${small ? " sm" : ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={`icon${score >= i + 0.75 ? "" : " off"}`} />
      ))}
    </span>
  );
}

export function ListingCard() {
  return (
    <article className="card">
      <div className="ph">
        <Icon name="house" />
        <span className="tr">
          <span className="badge b-verified">Verified Owner</span>
          <span className="heart">
            <Icon name="heart" />
          </span>
        </span>
      </div>
      <div className="body">
        <div className="price">
          <b>
            ₹24,000<small>/mo</small>
          </b>
          <span>₹1L dep.</span>
        </div>
        <h4>3 BHK flat near the metro</h4>
        <p className="spec">Apartment · 3 BHK · Semi-furnished</p>
        <p className="loc">
          <span>
            <Icon name="map-pin" /> Chennai
          </span>
          <span>2d ago</span>
        </p>
      </div>
    </article>
  );
}

export function StayScorePanel({ compact = false }: { compact?: boolean }) {
  const rows: [string, number][] = [
    ["Safety", 4.6],
    ["Cleanliness", 4.3],
    ["Water", 3.8],
    ["Owner", 4.7],
  ];
  return (
    <div className="panel">
      <p className="kicker">StayScore</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="score">
          4.4<small>/5</small>
        </p>
        <Stars score={4.4} />
      </div>
      <p className="mt-2 text-[12px] text-[var(--s-500)]">86% recommend · 7 reviews</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="badge b-verified">Verified Owner</span>
        <span className="badge b-community">Community Trusted</span>
      </div>
      {!compact && (
        <>
          <div className="rule" />
          {rows.map(([k, v]) => (
            <div key={k} className="srow">
              <span>{k}</span>
              <b>
                {v.toFixed(1)}
                <Stars score={v} small />
              </b>
            </div>
          ))}
          <p className="mt-1 text-[11px] text-[var(--s-500)]">…and eight more ratings, from noise to power backup.</p>
          <div className="rule" />
          <div className="risk">
            <Icon name="shield-check" />
            <span>
              <b>Risk: Low.</b> No open reports.
            </span>
          </div>
        </>
      )}
    </div>
  );
}

type Fact = { icon: IconName; label: string; value: string; how?: string; prov: "m" | "d" | "e" };
const PROV_LABEL = { m: "Measured", d: "Calculated", e: "Estimated" } as const;

const FACTS: Fact[] = [
  { icon: "train-front", label: "Nearest metro", value: "1.2 km · Blue line", how: "Straight-line distance", prov: "m" },
  { icon: "bus", label: "Bus stops", value: "6 within 500 m", prov: "m" },
  { icon: "shopping-basket", label: "Groceries", value: "11 within 1 km", prov: "m" },
  { icon: "wind", label: "Air quality, last 90 days", value: "Moderate most days", how: "From the nearest station's readings", prov: "d" },
  { icon: "landmark", label: "Ward", value: "Ward 170 · Zone 13", prov: "m" },
  { icon: "mountain", label: "Elevation", value: "A little above its surroundings", how: "From terrain data around the pin", prov: "e" },
];

export function FactPanel({ rows = 6 }: { rows?: number }) {
  return (
    <div className="panel">
      <div className="flex items-center justify-between">
        <p className="kicker">Around this home</p>
        <span className="text-[11px] font-semibold text-[var(--brand-700)]">Sources</span>
      </div>
      <div className="mt-2">
        {FACTS.slice(0, rows).map((f) => (
          <div key={f.label} className="fact">
            <span className="fi">
              <Icon name={f.icon} />
            </span>
            <span className="fx">
              <small>{f.label}</small>
              <b>{f.value}</b>
              {f.how && <em>{f.how}</em>}
            </span>
            <span className={`prov ${f.prov}`}>{PROV_LABEL[f.prov]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisitPicker() {
  const days: [string, string, string][] = [
    ["Thu", "8", "Oct"],
    ["Fri", "9", "Oct"],
    ["Sat", "10", "Oct"],
    ["Sun", "11", "Oct"],
  ];
  return (
    <div className="panel">
      <p className="kicker">Request a visit</p>
      <div className="days mt-3">
        {days.map(([w, d, m]) => (
          <span key={d} className={`day${d === "10" ? " on" : ""}`}>
            {w}
            <b>{d}</b>
            {m}
          </span>
        ))}
      </div>
      <div className="slots mt-3">
        {["10:00 AM", "11:30 AM", "4:00 PM"].map((t) => (
          <span key={t} className={`slot${t === "11:30 AM" ? " on" : ""}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="cta mt-3">
        <Icon name="calendar" /> Request visit
      </div>
    </div>
  );
}

export function ChatPanel({ agreement = true }: { agreement?: boolean }) {
  return (
    <div className="panel">
      <div className="who">
        <span className="av">R</span>
        <span>
          <b>Ravi · Owner</b>
          <small>3 BHK flat near the metro</small>
        </span>
      </div>
      <div className="thread">
        <p className="msg me">Is it available from the 1st? We&rsquo;re two, both working.</p>
        <p className="msg them">Yes. Saturday&rsquo;s visit works — see you at 11:30.</p>
        {agreement && (
          <div className="agree">
            <span className="ai">
              <Icon name="file-check" />
            </span>
            <span>
              <b>Rental agreement</b>
              <small>Offered by the owner · 11 months</small>
            </span>
            <span className="pill">Sign</span>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChips() {
  return (
    <div className="chips">
      <span className="chip on">
        <Icon name="sliders-horizontal" /> Rent
      </span>
      <span className="chip">Under ₹25K</span>
      <span className="chip">2–3 BHK</span>
      <span className="chip">Semi-furnished</span>
      <span className="chip">Apartment</span>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="searchbar">
      <Icon name="map-pin" /> Search a city, area or landmark
      <span className="go">
        <Icon name="search" />
      </span>
    </div>
  );
}

/* ================================================================ scenes for the tiles */

export type Scene = "pins" | "card" | "chat" | "browse" | "visit" | "agree";

function SceneArt({ scene }: { scene: Scene }) {
  switch (scene) {
    case "pins":
      return (
        <DrawnMap
          pins={[
            { x: 26, y: 34, type: "apartment", label: "₹18K · 2BHK" },
            { x: 62, y: 28, type: "pg", label: "₹8.5K" },
            { x: 50, y: 58, type: "apartment", label: "₹24K · 3BHK", sel: true },
            { x: 24, y: 76, type: "house", label: "₹32K" },
            { x: 78, y: 74, type: "short", label: "₹2.2K" },
          ]}
          clusters={[{ x: 80, y: 48, count: 4 }]}
        />
      );
    case "browse":
      return (
        <>
          <DrawnMap
            pins={[
              { x: 30, y: 58, type: "apartment", label: "₹18K · 2BHK" },
              { x: 70, y: 52, type: "apartment", label: "₹24K · 3BHK", sel: true },
              { x: 52, y: 80, type: "house", label: "₹32K" },
            ]}
            clusters={[]}
            me={{ x: 48, y: 60 }}
          />
          <div className="absolute inset-x-3 top-3 z-[4] flex flex-col gap-2">
            <SearchBar />
            <FilterChips />
          </div>
        </>
      );
    case "card":
      return <ListingCard />;
    case "chat":
      return <ChatPanel agreement={false} />;
    case "visit":
      return <VisitPicker />;
    case "agree":
      return <ChatPanel />;
  }
}

export type TileItem = { title: string; body: string; scene: Scene; label: string; tone?: "jade" | "warm" };

export function SceneTile({ scene, tone = "warm", label }: { scene: Scene; tone?: "jade" | "warm"; label: string }) {
  const map = scene === "pins" || scene === "browse";
  return (
    <div className={`sx-vis ${map ? "map" : tone}`} role="img" aria-label={label}>
      <SceneArt scene={scene} />
      <Example />
    </div>
  );
}

export function SceneCards({ title, label, lead, cards, numbered = false, id }: { title: Headline; label?: string; lead?: string; cards: TileItem[]; numbered?: boolean; id?: string }) {
  return (
    <Sx as="section" id={id} className="wrap sec flex scroll-mt-20 flex-col gap-12">
      <Head label={label} title={title} lead={lead} />
      <ol className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <li key={c.title} className="flex flex-col gap-4">
            <SceneTile scene={c.scene} tone={c.tone} label={c.label} />
            <div className="flex flex-col gap-2">
              {numbered && <span className="font-[family-name:var(--sx-mono)] text-sm font-semibold text-[var(--brand-700)]">{String(i + 1).padStart(2, "0")}</span>}
              <h3 className="m-0 text-[22px] leading-[1.2] text-[var(--s-900)]">{c.title}</h3>
              <p className="m-0 text-base leading-normal text-pretty text-[var(--s-500)]">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Sx>
  );
}

/* ================================================================ hero */

export type HeroContent = {
  eyebrow: string;
  title: Headline;
  lead: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  facts: string[];
  figure: string;
};

export function StayOnMapHero({ c }: { c: HeroContent }) {
  return (
    <section className="sx-band">
      <Sx className="wrap sx-hero">
        <div>
          <span className="eyebrow">
            <i /> {c.eyebrow}
          </span>
          <h1>
            {c.title[0]} <em>{c.title[1]}</em>
          </h1>
          <p className="sub">{c.lead}</p>
          <div className="actions">
            <a className="btn primary" href={c.primary.href} target="_blank" rel="noopener">
              {c.primary.label} <Icon name="arrow-right" />
            </a>
            <a className="btn ghost" href={c.secondary.href}>
              {c.secondary.label}
            </a>
          </div>
          <p className="facts">
            {c.facts.map((f) => (
              <span key={f}>
                <Icon name="check" /> {f}
              </span>
            ))}
          </p>
        </div>
        <figure className="stage m-0" role="img" aria-label={c.figure}>
          <DrawnMap me={{ x: 46, y: 52 }} />
          <div className="top" aria-hidden="true">
            <SearchBar />
            <FilterChips />
          </div>
          <div className="float" aria-hidden="true">
            <ListingCard />
          </div>
          <Example>Example listings</Example>
        </figure>
      </Sx>
    </section>
  );
}

/* ================================================================ split sections with a drawn panel */

export type PanelSection = {
  label: string;
  title: Headline;
  lead: string;
  points: { title: string; body: string }[];
  figure: string;
  link?: { href: string; action: string };
};

/** Copy on one side, a drawn StayOnMap panel on a tinted stage on the other. */
export function PanelSplit({ c, panel, flip = false, tone = "warm" }: { c: PanelSection; panel: "facts" | "score"; flip?: boolean; tone?: "jade" | "warm" }) {
  return (
    <Sx as="section" className="wrap sec grid grid-cols-1 items-start gap-x-10 gap-y-12 lg:grid-cols-2">
      <div className={`flex flex-col gap-8 ${flip ? "lg:order-2" : ""}`}>
        <Head label={c.label} title={c.title} lead={c.lead} />
        <ul className="flex flex-col border-b border-line">
          {c.points.map((p) => (
            <li key={p.title} className="flex flex-col gap-1 border-t border-line py-4">
              <b className="text-base font-semibold text-[var(--s-800)]">{p.title}</b>
              <span className="text-[15px] leading-normal text-pretty text-[var(--s-500)]">{p.body}</span>
            </li>
          ))}
        </ul>
        {c.link && (
          <a className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--brand-700)] hover:underline" href={c.link.href}>
            {c.link.action} <Icon name="arrow-right" />
          </a>
        )}
      </div>
      <div className={`sx-vis ${tone} !h-auto min-h-[520px] py-10 lg:sticky lg:top-24`} role="img" aria-label={c.figure}>
        {panel === "facts" ? <FactPanel /> : <StayScorePanel />}
        <Example />
      </div>
    </Sx>
  );
}

/* ================================================================ closing band */

export type CloseContent = { title: string; body: string; href: string; action: string };

export function Close({ c }: { c: CloseContent }) {
  return (
    <section className="frame py-5">
      <Sx className="sx-close px-6 py-16 md:px-[6.25%] lg:py-28">
        <DrawnMap
          pins={[
            { x: 58, y: 30, type: "apartment", label: "₹18K · 2BHK" },
            { x: 74, y: 52, type: "apartment", label: "₹24K · 3BHK", sel: true },
            { x: 88, y: 28, type: "pg", label: "₹8.5K" },
            { x: 66, y: 76, type: "house", label: "₹32K" },
            { x: 90, y: 72, type: "short", label: "₹2.2K" },
          ]}
          clusters={[{ x: 82, y: 88, count: 6 }]}
        />
        <div className="shade" />
        <span className="example" style={{ left: "auto", right: 12 }}>
          Example listings
        </span>
        <div className="copy">
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <div className="actions">
            <a className="btn primary" href={c.href} target="_blank" rel="noopener">
              {c.action} <Icon name="arrow-right" />
            </a>
          </div>
        </div>
      </Sx>
    </section>
  );
}
