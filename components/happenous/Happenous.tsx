import { Inter, Outfit } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { ICONS, type IconName } from "./icons";
import "./happenous.css";

/**
 * The Happenous product page draws the product the way happenous's own website does
 * (~/Desktop/happenous/apps/web/index.html) — the Happening tab on a phone, Activity cards, the Check-in
 * card, the Host composer, the safety tiles — in place of photographs. Every drawn Activity and person is an
 * example, never a live listing or a real account, and each figure says so to screen readers.
 * Styles: ./happenous.css, scoped under `.hx`. Fonts: Outfit and Inter, the Happenous faces.
 */

const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-hx-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-hx-sans", display: "swap" });

export type Colour = "sun" | "sky" | "mint" | "lav" | "peach" | "blush" | "grass";
export type Person = { initial: string; hue: "rose" | "marigold" | "lime" | "teal" | "azure" | "violet" | "magenta" | "clay" };
/** A title in two parts, as the Happenous site sets them: the second part in brand orange. */
export type Headline = [string, string];

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

/** Wraps a block in the Happenous scope: its tokens, its faces. */
export function Hx({ children, className = "", id, as: Tag = "div" }: { children: ReactNode; className?: string; id?: string; as?: "div" | "section" }) {
  return (
    <Tag id={id} className={`hx ${outfit.variable} ${inter.variable} ${className}`}>
      {children}
    </Tag>
  );
}

function Crew({ people, more, small = true }: { people: Person[]; more?: number; small?: boolean }) {
  return (
    <span className={`crew${small ? " sm" : ""}`}>
      {people.map((p, i) => (
        <span key={i} className={`av p-${p.hue}`}>
          {p.initial}
        </span>
      ))}
      {more ? <span className="more">+{more}</span> : null}
    </span>
  );
}

function Head({ label, title, lead, dark = false }: { label?: string; title: Headline; lead?: ReactNode; dark?: boolean }) {
  return (
    <div className="flex max-w-[760px] flex-col items-start gap-4">
      {label && <MonoLabel dot>{label}</MonoLabel>}
      <h2 className="m-0 text-[36px] leading-[1.05] tracking-[-0.03em] text-balance lg:text-[52px]">
        {title[0]} <em className="text-[var(--brand)] not-italic">{title[1]}</em>
      </h2>
      {lead && <p className={`m-0 max-w-[620px] text-lg leading-normal text-pretty ${dark ? "soft" : "text-[var(--n-500)]"}`}>{lead}</p>}
    </div>
  );
}

/* ================================================================ hero */

export type HeroContent = {
  eyebrow: string;
  title: Headline;
  lead: string;
  fine: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  figure: string;
};

const P = {
  M: { initial: "M", hue: "violet" },
  A: { initial: "A", hue: "teal" },
  Pr: { initial: "P", hue: "rose" },
  K: { initial: "K", hue: "azure" },
  R: { initial: "R", hue: "lime" },
  D: { initial: "D", hue: "marigold" },
  S: { initial: "S", hue: "magenta" },
  I: { initial: "I", hue: "clay" },
  N: { initial: "N", hue: "azure" },
  V: { initial: "V", hue: "rose" },
  J: { initial: "J", hue: "lime" },
  G: { initial: "G", hue: "violet" },
} satisfies Record<string, Person>;

const picks: { c: Colour; icon: IconName; title: string; when: string; crew: Person[]; more?: number; going: string; where: string }[] = [
  { c: "sun", icon: "footprints", title: "Sunrise run by the beach", when: "Today, meet 6:15 · run 6:30–7:30 AM", crew: [P.M, P.A, P.Pr, P.K], going: "4 going", where: "~2 km" },
  { c: "grass", icon: "feather", title: "Badminton doubles", when: "Today, meet 6:50 · play 7:00–9:00 PM", crew: [P.R, P.D], going: "2 going", where: "~4 km" },
  { c: "lav", icon: "book-open", title: "Book swap in the park", when: "Sat, meet 10:20 · 10:30 AM–12:30 PM", crew: [P.S, P.I, P.N], going: "5 going", where: "~3 km" },
  { c: "sky", icon: "bike", title: "Sunday ride along the coast", when: "Sun, meet 5:15 · ride 5:30–8:00 AM", crew: [P.A, P.V, P.J, P.M], more: 3, going: "7 going", where: "~6 km" },
];

function Phone() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="screen">
        <div className="sbar">
          <span>7:42</span>
          <i />
        </div>
        <div className="appbar">
          <b>Happening</b>
          <Icon name="map" />
        </div>
        <div className="hp-top">
          <span className="on">
            For You <Icon name="chevron-down" />
          </span>
          <span>
            <Icon name="footprints" /> Running
          </span>
          <span>
            <Icon name="coffee" /> Coffee
          </span>
          <span>
            <Icon name="bike" /> Cycling
          </span>
        </div>
        <div className="hp-around">
          <b>Around you</b> · Chennai
        </div>
        <div className="picks">
          {picks.map((p) => (
            <div key={p.title} className={`pick c-${p.c}`}>
              <span className="cv">
                <Icon name={p.icon} />
              </span>
              <div>
                <b>{p.title}</b>
                <small>{p.when}</small>
                <div className="row">
                  <span className="crew">
                    {p.crew.map((c, i) => (
                      <span key={i} className={`av p-${c.hue}`}>
                        {c.initial}
                      </span>
                    ))}
                    {p.more ? <span className="more">+{p.more}</span> : null}
                  </span>
                  <span className="going">{p.going}</span>
                  <span className="km">{p.where}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tabbar">
          {(
            [
              ["house", "Home"],
              ["compass", "Happening"],
              ["trophy", "Track"],
              ["message-square", "Chat"],
              ["circle-user", "Profile"],
            ] as [IconName, string][]
          ).map(([icon, label]) => (
            <span key={label} className={label === "Happening" ? "on" : undefined}>
              <Icon name={icon} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const bubbles: { c: Colour; icon: IconName; label: string; small: string; crew?: Person[]; style: CSSProperties; right?: boolean }[] = [
  { c: "sun", icon: "footprints", label: "Running", small: "6:30 AM", crew: [P.M, P.A, P.Pr], style: { left: "-2%", top: "6%" } },
  { c: "peach", icon: "coffee", label: "Coffee", small: "4 going", style: { left: "-1%", top: "33%" } },
  { c: "grass", icon: "feather", label: "Badminton", small: "Priya is in the Crew", crew: [P.R, P.D, P.Pr], style: { left: "-3%", top: "62%" } },
  { c: "mint", icon: "camera", label: "Photo walk", small: "Today", style: { left: "100%", top: "18%" }, right: true },
  { c: "sky", icon: "bike", label: "Cycling", small: "Sunday", style: { left: "102%", top: "58%" }, right: true },
  { c: "blush", icon: "hand", label: "Pottery", small: "Sat · 1 spot left", style: { left: "56%", top: "91%" } },
];

export function HappenousHero({ c }: { c: HeroContent }) {
  return (
    <section className="hx-band">
      <Hx className="wrap hx-hero">
        <div>
          <span className="eyebrow">
            <Icon name="map-pin" /> {c.eyebrow}
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
          <p className="fine2">{c.fine}</p>
        </div>
        <figure className="world m-0" role="img" aria-label={c.figure}>
          <svg className="world-map" viewBox="0 0 600 620" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <rect width="600" height="620" rx="32" fill="#f6efe6" />
            <path d="M560 0 C 540 140, 590 260, 556 380 S 580 560, 600 620 L 600 0 Z" fill="var(--sky)" opacity="0.7" />
            <path d="M40 390 C 90 360, 150 380, 150 430 S 90 500, 50 480 S 0 420, 40 390 Z" fill="var(--mint)" opacity="0.8" />
            <path d="M420 470 C 460 450, 520 470, 510 510 S 440 545, 420 520 Z" fill="var(--mint)" opacity="0.6" />
            <g fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round">
              <path d="M-10 160 C 150 150, 300 190, 610 130" />
              <path d="M-10 540 C 180 520, 380 560, 610 500" />
              <path d="M120 -10 C 140 200, 90 400, 150 630" />
              <path d="M470 -10 C 450 160, 500 360, 450 630" />
            </g>
            <g fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.9">
              <path d="M-10 300 C 120 290, 200 330, 610 290" />
              <path d="M300 -10 C 290 200, 320 420, 300 630" />
              <path d="M30 40 C 200 70, 380 20, 580 70" />
            </g>
            <path
              className="draw"
              pathLength={1}
              d="M28 596 C 110 560, 60 440, 170 400 S 400 330, 470 250 S 540 120, 590 70"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <span className="adot c-sun" style={{ left: "6%", top: "31%" }} aria-hidden="true" />
          <span className="adot c-grass" style={{ left: "12%", top: "88%" }} aria-hidden="true" />
          <span className="adot c-lav" style={{ left: "88%", top: "8%" }} aria-hidden="true" />
          <span className="adot c-sky" style={{ left: "93%", top: "78%" }} aria-hidden="true" />
          <span className="mpin" style={{ left: "91%", top: "47%" }} aria-hidden="true" />
          <Phone />
          {bubbles.map((b, i) => (
            <div key={b.label} className={`wb${b.right ? " r" : ""}`} style={{ ...b.style, ["--i" as string]: i }} aria-hidden="true">
              <span className={`bub c-${b.c}`}>
                <span className="ic3">
                  <Icon name={b.icon} />
                </span>
                {b.label} <small>{b.small}</small>
                {b.crew && <Crew people={b.crew} />}
              </span>
            </div>
          ))}
        </figure>
      </Hx>
    </section>
  );
}

/* ================================================================ small product pieces */

export type ActivityExample = {
  c: Colour;
  icon: IconName;
  category: string;
  when: string;
  title: string;
  where: string;
  crew: Person[];
  more?: number;
  state: string;
  calm?: boolean;
};

export function ActivityCard({ a }: { a: ActivityExample }) {
  return (
    <article className={`act c-${a.c}`}>
      <div className="act-img">
        <Icon name={a.icon} />
        <span className="tag">
          <Icon name={a.icon} /> {a.category}
        </span>
        <span className="act-when">{a.when}</span>
      </div>
      <div className="act-body">
        <h3>{a.title}</h3>
        <p className="act-meta">
          <Icon name="map-pin" /> {a.where}
        </p>
        <div className="act-foot">
          <Crew people={a.crew} more={a.more} />
          <span className={`state${a.calm ? " calm" : ""}`}>{a.state}</span>
        </div>
      </div>
    </article>
  );
}

/** The drawings the tiles can hold. Each is a piece of a real screen, with example people. */
export type Scene = "activity" | "area" | "code" | "find" | "join" | "here" | "review" | "point" | "block" | "number" | "age";

const sunrise: ActivityExample = {
  c: "sun",
  icon: "footprints",
  category: "Running",
  when: "Today · 6:30 AM",
  title: "Sunrise run",
  where: "Besant Nagar",
  crew: [P.M, P.A, P.Pr, P.K],
  state: "4 going",
};

function SceneArt({ scene }: { scene: Scene }) {
  switch (scene) {
    case "activity":
      return <ActivityCard a={sunrise} />;
    case "area":
      return (
        <>
          <span className="mapbg" />
          <span className="area2" />
          <span className="cap">Besant Nagar · about 3 km</span>
        </>
      );
    case "point":
      return (
        <>
          <span className="mapbg" />
          <span className="mpin" />
          <span className="cap">Entrance to the park · Crew only</span>
        </>
      );
    case "code":
      return (
        <div className="stack-v">
          <div className="ci-code" style={{ margin: 0 }}>
            {["K", "7", "P"].map((ch) => (
              <span key={ch} className="ci-ch">
                {ch}
              </span>
            ))}
            <span className="ci-sep">·</span>
            {["Q", "4", "X"].map((ch) => (
              <span key={ch} className="ci-ch">
                {ch}
              </span>
            ))}
          </div>
          <span className="mini">
            <Crew people={[P.M, P.A, P.Pr, P.K]} />
            <b>4 of 5 here</b>
          </span>
        </div>
      );
    case "find":
      return (
        <div className="mini">
          <span className="cv c-sun">
            <Icon name="footprints" />
          </span>
          <div>
            <b>Sunrise run</b>
            <small>Today · 6:30 AM · ~2 km</small>
          </div>
        </div>
      );
    case "join":
      return (
        <div className="stack-v">
          <span className="pillbtn">Request to join</span>
          <span className="mini">
            <Crew people={[P.M, P.A, P.Pr]} />
            <b>Priya is in the Crew.</b>
          </span>
        </div>
      );
    case "here":
      return (
        <div className="stack-v">
          <span className="mini">
            <Crew people={[P.M, P.A, P.Pr, P.K]} />
            <b>4 of 5 here</b>
          </span>
          <span className="flex flex-wrap justify-center gap-2">
            <span className="pillbtn ghost">Running late</span>
            <span className="pillbtn ghost">Can&rsquo;t find the group</span>
          </span>
        </div>
      );
    case "review":
      return (
        <div className="checks">
          {["Turned up on time", "Was who they said they were", "Good to be around"].map((t) => (
            <span key={t}>
              <Icon name="check" /> {t}
            </span>
          ))}
        </div>
      );
    case "block":
      return (
        <>
          <span className="avs">
            <span className="av lg p-violet">M</span>
            <span className="av lg p-clay">?</span>
          </span>
          <span className="cut" />
          <Icon name="x" className="icon xmark" />
        </>
      );
    case "number":
      return (
        <>
          <span className="flow3">
            <span>
              <Icon name="phone-off" />
            </span>
            <em />
            <span>
              <Icon name="siren" />
            </span>
          </span>
          <span className="cap">Call 112 first</span>
        </>
      );
    case "age":
      return (
        <div className="mini">
          <span className="cv c-lav">
            <Icon name="circle-user" />
          </span>
          <div>
            <b>18 and over</b>
            <small>Date of birth, asked once</small>
          </div>
        </div>
      );
  }
}

/** A coloured stage holding one drawn piece of the product, in place of a photograph. */
export function SceneTile({ scene, colour, size = "md", label }: { scene: Scene; colour?: Colour; size?: "md" | "sm"; label: string }) {
  const plain = !colour;
  return (
    <div className={`hx-vis${size === "sm" ? " sm" : ""}${plain ? " plain" : ` c-${colour}`}`} role="img" aria-label={label}>
      <SceneArt scene={scene} />
    </div>
  );
}

/* ================================================================ sections */

export type TileItem = { title: string; body: string; scene: Scene; colour?: Colour; label: string };

/** Three (or four) tiles on the thirds, each a drawn scene with a title and a line under it. */
export function SceneCards({ title, label, lead, cards, numbered = false, id }: { title: Headline; label?: string; lead?: string; cards: TileItem[]; numbered?: boolean; id?: string }) {
  const four = cards.length === 4;
  return (
    <Hx as="section" id={id} className="wrap sec flex scroll-mt-20 flex-col gap-12">
      <Head label={label} title={title} lead={lead} />
      <ol className={`grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 ${four ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {cards.map((c, i) => (
          <li key={c.title} className="flex flex-col gap-4">
            <SceneTile scene={c.scene} colour={c.colour} size={four ? "sm" : "md"} label={c.label} />
            <div className="flex flex-col gap-2">
              {numbered && <span className="step-n">{String(i + 1).padStart(2, "0")}</span>}
              <h3 className="m-0 text-[22px] leading-[1.2]">{c.title}</h3>
              <p className="m-0 text-base leading-normal text-pretty text-[var(--n-500)]">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Hx>
  );
}

export type HappeningContent = {
  label: string;
  title: Headline;
  lead: string;
  points: string[];
  examples: ActivityExample[];
  categories: { c: Colour; icon: IconName; name: string }[];
  more: string;
  note: string;
};

export function Happening({ c }: { c: HappeningContent }) {
  return (
    <Hx as="section" className="wrap sec flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Head label={c.label} title={c.title} lead={c.lead} />
        </div>
        <ul className="flex flex-col border-b border-line lg:pt-10">
          {c.points.map((p) => (
            <li key={p} className="border-t border-line py-3.5 text-base leading-normal text-pretty text-ink-2">
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="hx-canvas" role="list" aria-label="Examples of Activities">
        {c.examples.map((a) => (
          <div key={a.title} role="listitem">
            <ActivityCard a={a} />
          </div>
        ))}
      </div>
      <p className="note">
        <Icon name="info" /> {c.note}
      </p>
      <ul className="cats2" aria-label="Some of the interests">
        {c.categories.map((k) => (
          <li key={k.name} className={`c-${k.c}`}>
            <i>
              <Icon name={k.icon} />
            </i>
            {k.name}
          </li>
        ))}
        <li className="more">{c.more}</li>
      </ul>
    </Hx>
  );
}

export type CheckInContent = {
  label: string;
  title: Headline;
  lead: string;
  facts: { icon: IconName; title: string; body: string }[];
  limit: { strong: string; body: string };
  figure: string;
  under: string;
};

export function CheckIn({ c }: { c: CheckInContent }) {
  return (
    <section className="frame py-5">
      <Hx className="hx-night grid grid-cols-1 items-center gap-12 px-6 py-14 md:px-[6.25%] lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col gap-8">
          <Head label={c.label} title={c.title} lead={c.lead} dark />
          <ul className="ci-facts">
            {c.facts.map((f) => (
              <li key={f.title}>
                <Icon name={f.icon} />
                <span>
                  <b>{f.title}</b>
                  <small>{f.body}</small>
                </span>
              </li>
            ))}
          </ul>
          <p className="limit">
            <strong>{c.limit.strong}</strong> {c.limit.body}
          </p>
        </div>
        <div className="ci-demo" role="img" aria-label={c.figure}>
          <div className="ci-card" aria-hidden="true">
            <h3>Check in</h3>
            <p>Scan the Host&rsquo;s QR, or type the six characters under it.</p>
            <div className="ci-code">
              {["K", "7", "P"].map((ch) => (
                <span key={ch} className="ci-ch">
                  {ch}
                </span>
              ))}
              <span className="ci-sep">·</span>
              {["Q", "4", "X"].map((ch) => (
                <span key={ch} className="ci-ch">
                  {ch}
                </span>
              ))}
            </div>
            <div className="ci-btn">
              <Icon name="check" /> Checked in
            </div>
            <div className="ci-ok">
              <span className="ci-disc">
                <Icon name="check" />
              </span>
              <div>
                <b>You&rsquo;re checked in</b>
                <small>It counts. Have a good one.</small>
              </div>
            </div>
          </div>
          <div className="ci-crew" aria-hidden="true">
            <div className="who">
              {[P.A, P.Pr, P.K, P.R, P.G].map((p, i) => (
                <span key={i}>
                  <span className={`av p-${p.hue}`}>{p.initial}</span>
                  <span className="tick">
                    <Icon name="check" />
                  </span>
                </span>
              ))}
            </div>
            <div className="count">
              <b>5 of 5</b>here
            </div>
          </div>
          <p className="soft mt-4 text-[13px]">{c.under}</p>
        </div>
      </Hx>
    </section>
  );
}

export type HostContent = { label: string; title: Headline; lead: string; points: string[]; figure: string };

const hostBubbles: { c: Colour; icon: IconName; label: string; style: CSSProperties; hide?: boolean }[] = [
  { c: "peach", icon: "coffee", label: "Coffee", style: { left: "8%", top: "6%" } },
  { c: "grass", icon: "feather", label: "Badminton", style: { right: "6%", top: "8%" } },
  { c: "sky", icon: "bike", label: "Cycling", style: { left: "2%", top: "40%" }, hide: true },
  { c: "blush", icon: "palette", label: "Pottery", style: { right: "2%", top: "38%" }, hide: true },
  { c: "mint", icon: "camera", label: "Photo walk", style: { left: "6%", bottom: "6%" } },
  { c: "lav", icon: "book-open", label: "Books", style: { right: "8%", bottom: "6%" } },
];

export function Host({ c }: { c: HostContent }) {
  return (
    <Hx as="section" className="wrap sec grid grid-cols-1 items-center gap-x-5 gap-y-12 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <Head label={c.label} title={c.title} lead={c.lead} />
        <ul className="flex flex-col border-b border-line">
          {c.points.map((p) => (
            <li key={p} className="border-t border-line py-3.5 text-base leading-normal text-pretty text-ink-2">
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="hs-stage">
        <ul className="hs-bubs" aria-hidden="true">
          {hostBubbles.map((b) => (
            <li key={b.label} style={b.style} className={b.hide ? "hide-sm" : undefined}>
              <span className={`bub c-${b.c}`}>
                <span className="ic3">
                  <Icon name={b.icon} />
                </span>
                {b.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="composer" role="img" aria-label={c.figure}>
          <div className="top" aria-hidden="true">
            <b>Host something</b>
            <span>1 of 3</span>
          </div>
          <div className="bar3" aria-hidden="true">
            <span className="on" />
            <span />
            <span />
          </div>
          <h4 aria-hidden="true">What are you doing?</h4>
          <span className="lbl2" aria-hidden="true">
            Pick one
          </span>
          <div className="opts2" aria-hidden="true">
            <span>
              <Icon name="footprints" /> Running
            </span>
            <span className="on">
              <Icon name="bike" /> Cycling
            </span>
            <span>
              <Icon name="feather" /> Badminton
            </span>
            <span>
              <Icon name="coffee" /> Coffee
            </span>
          </div>
          <span className="lbl2" aria-hidden="true">
            Call it
          </span>
          <div className="field" aria-hidden="true">
            Sunday ride along the coast
            <span className="caret" />
          </div>
          <div className="next" aria-hidden="true">
            Next
          </div>
        </div>
      </div>
    </Hx>
  );
}

export type CloseContent = { quiet: string; loud: Headline; title: string; body: string; href: string; action: string };

/** The Happenous site's closing statement, then the honest "not open yet" and the link out. */
export function Close({ c }: { c: CloseContent }) {
  return (
    <section className="frame py-5">
      <Hx className="flex flex-col gap-14 rounded-[20px] bg-[var(--paper-deep)] px-6 py-16 md:px-[6.25%] lg:py-24">
        <p className="statement" aria-hidden="true">
          <span className="quiet">{c.quiet}</span>
          <span>
            {c.loud[0]} <em>{c.loud[1]}</em>
          </span>
        </p>
        <p className="sr-only">
          {c.quiet} {c.loud.join(" ")}
        </p>
        <div className="flex flex-col items-start gap-6 border-t border-[var(--border-default)] pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[640px] flex-col gap-3">
            <h2 className="m-0 text-[32px] leading-[1.1] lg:text-[40px]">{c.title}</h2>
            <p className="m-0 text-lg leading-normal text-pretty text-[var(--n-700)]">{c.body}</p>
          </div>
          <a className="btn primary shrink-0" href={c.href} target="_blank" rel="noopener">
            {c.action} <Icon name="arrow-right" />
          </a>
        </div>
      </Hx>
    </section>
  );
}
