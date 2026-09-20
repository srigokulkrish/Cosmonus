// Typed content for the two Product pages. Copy is verbatim from
// raw/handoff/design/Product-StayOnMap.dc.html and Product-Happenous.dc.html.
// StayOnMap copy was revised on 2026-09-19 to match the owner's live case study at
// https://www.cosmonus.com/work/stayonmap (trust engine, risk score, visits, chat, digital lease, no WhatsApp listing).
// [BRACKETED] text is an owner-supplied placeholder: keep it visible, never fill it in.
// Happenous "People nearby" and the three Happenous steps were written later, from what the site already says.
// The sections after the board ones (audiences, reading a TrustScore, why activities, what you can do,
// built on, FAQ) were written for the build. They restate only what the site already says about each
// product — no regions, numbers, prices or features beyond it.

import type { ExplainerPart } from "@/components/product/Explainer";
import type { FaqItem } from "@/components/product/Faq";
import type { LinkGroup } from "@/components/product/LinkGroups";
import type { SplitColumn } from "@/components/product/Split";
import type { Tone } from "@/components/ui/MediaPanel";
import type { MediaCardData, Step, StripLink } from "@/components/ui/Section";
import { getNote } from "@/content/research";

export type ProductContent = {
  meta: { title: string; description: string };
  /** `video`: the banner video (MP4 in public/), once it exists. */
  hero: { tone: "dark" | "light"; title: string; lead: string; video?: string };
  intro: { label: string; title: string; body: string };
  different: { title: string; cards: MediaCardData[] };
  how: { title: string; steps: Step[] };
  visit: { title: string; body: string; href: string; action: string; asset: string };
  more: { label: string; links: StripLink[] };
};

/** A research note as a rule link; title, kind and status come from content/research.ts. */
function noteLink(slug: string): StripLink {
  const n = getNote(slug);
  if (!n) throw new Error(`Unknown research note: ${slug}`);
  return { name: n.title, href: `/company/research/${n.slug}`, desc: `${n.kind} · ${n.status}` };
}

const capability = {
  spatial: { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Knowing where things are, and why it matters." },
  trust: { name: "Trust Score", href: "/intelligence/trust-score", desc: "A readable signal for how far something can be relied on." },
  workflow: { name: "Workflow Agents", href: "/agents/workflow", desc: "Agents that carry one task from start to finish." },
} satisfies Record<string, StripLink>;

type BuiltOn = { title: string; lead: string; groups: LinkGroup[] };
type Faq = { title: string; items: FaqItem[] };

export type StayOnMapContent = ProductContent & {
  audiences: { title: string; lead: string; columns: SplitColumn[] };
  reading: {
    label: string;
    title: string;
    lead: string;
    media: { tone: Tone; asset: string };
    parts: ExplainerPart[];
    link: { href: string; action: string };
  };
  builtOn: BuiltOn;
  faq: Faq;
};

export type HappenousContent = ProductContent & {
  why: { label: string; title: string; paragraphs: string[] };
  builtOn: BuiltOn;
  faq: Faq;
};

export const stayonmap: StayOnMapContent = {
  meta: {
    title: "StayOnMap",
    description:
      "Broker-free rentals on a live map. Every listing is scored across twelve trust signals, and owners and tenants connect directly, with no commission.",
  },
  hero: {
    tone: "dark",
    video: "/media/stayonmap/banner.mp4",
    title: "Rent with intelligence.",
    lead: "Rental infrastructure without brokers. Owners and tenants connect directly, on a live map, with no intermediary.",
  },
  intro: {
    label: "StayOnMap",
    title: "The trust problem brokers used to solve, engineered instead.",
    body: "India's rental market runs on brokers and a month's rent in commission, because neither side knows who to trust. StayOnMap replaces that judgment with an engineered one: live trust scoring, an agent watching for fraud, and a direct line between owner and tenant.",
  },
  different: {
    title: "What makes it different",
    cards: [
      {
        tone: "dark",
        asset: "[ UI — map homepage, pins with live rent ]",
        title: "Map-first",
        body: "The full-screen map is the product. Property pins show live rent prices and update as you pan and zoom.",
      },
      {
        tone: "light",
        asset: "[ UI — trust score on a listing ]",
        title: "Trust, engineered",
        body: "Every listing is scored across twelve live trust signals before it surfaces, and high-risk listings are suspended before a tenant ever visits.",
      },
      {
        tone: "mid",
        asset: "[ UI — tenant–owner chat ]",
        title: "No broker, no commission",
        body: "Owners list directly and tenants connect directly. Chat, visits and the lease all happen between the two of them.",
      },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      { title: "Browse the map", body: "Open the map in your area and see property pins with live rent prices." },
      { title: "Request a visit", body: "Open a pin for the full details — BHK, furnishing, amenities, rules and photos — then ask to visit on a date and time." },
      { title: "Chat and sign", body: "Talk to the owner directly and sign the lease digitally." },
    ],
  },
  audiences: {
    title: "For tenants and for owners",
    lead: "Two user types, one account. Every account is both tenant and owner — owner tools appear the moment you post a first listing.",
    columns: [
      {
        label: "For tenants",
        title: "Find a home without paying someone to vouch for it.",
        points: [
          "Browse property pins on the map in your area, with live rent prices.",
          "Open a pin for full details, then request a visit by date and time.",
          "Chat with the owner and sign a lease digitally. No broker fee.",
        ],
      },
      {
        label: "For owners",
        title: "List directly and deal with tenants yourself.",
        points: [
          "Create a listing with photos, details and house rules.",
          "Accept, reject or reschedule visit requests, and chat with interested tenants, from one dashboard.",
          "Send a lease offer and track it through to signing.",
        ],
      },
    ],
  },
  reading: {
    label: "Trust engine",
    title: "Twelve signals in. One score, and the reasoning behind it, out.",
    lead: "A trust score nobody can interrogate is just a number. Every listing carries both the score and the evidence that produced it, so a suspension can be explained to the owner it affects.",
    media: { tone: "light", asset: "[ UI — trust score with its decision trace, listing detail ]" },
    parts: [
      {
        title: "Twelve live signals",
        body: "Every listing is scored across twelve sub-scores before a tenant ever sees it. Together they compound into one trust score per listing.",
      },
      {
        title: "A separate risk score",
        body: "Built from reports and fraud signals. Once a listing crosses a high-risk threshold it is suspended automatically — no human queue. Flagged listings still get a human look in admin moderation when needed.",
      },
      {
        title: "An agent watching for fraud",
        body: "An agent reasons over listings and behaviour patterns and flags anomalies continuously or on demand, not just at listing time. It is opt-in today.",
      },
      {
        title: "A decision trace",
        body: "Every flag and every automated suspension resolves back to the signals and logic that produced it.",
      },
    ],
    link: { href: "/intelligence/trust-score", action: "Read about Trust Score" },
  },
  builtOn: {
    title: "Built on",
    lead: "The capabilities behind StayOnMap, and the research it raises. Some of that work is still in progress, and each note says so.",
    groups: [
      { label: "Capabilities", links: [capability.spatial, capability.trust, capability.workflow] },
      {
        label: "Research",
        links: [noteLink("where-a-listing-really-is"), noteLink("a-score-with-its-reasons"), noteLink("listing-from-a-message")],
      },
    ],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Is there a broker or a commission?",
        a: "No. Owners list directly and tenants connect directly, so there are no broker fees.",
      },
      {
        q: "What kinds of property are listed?",
        a: "Six property types, from apartments to commercial space. Each listing carries BHK, furnishing, amenities, rules and photos.",
      },
      {
        q: "What does the trust score tell me?",
        a: "How far a listing can be relied on. It is built from twelve live sub-scores, and it travels with the evidence that produced it.",
      },
      {
        q: "What happens to a high-risk listing?",
        a: "A separate risk score, built from reports and fraud signals, suspends a listing automatically once it crosses a high-risk threshold, before a tenant ever visits. The suspension can be traced back to the evidence behind it.",
      },
      {
        q: "Can anyone read my chats?",
        a: "No. Tenant–owner conversations are private by default — even admins can't read them.",
      },
      {
        q: "Do I need separate tenant and owner accounts?",
        a: "No. Every account is both. Owner tools appear the moment you post a first listing.",
      },
    ],
  },
  visit: {
    title: "See it on the map.",
    body: "Browse live rent prices across the city, request a visit and talk to the owner directly — no broker in between.",
    asset: "[ STAYONMAP — live map with rent pins, screen recording ]",
    href: "https://www.stayonmap.com",
    action: "Visit StayOnMap",
  },
  more: {
    label: "More in Product",
    links: [{ name: "Happenous", href: "/product/happenous", desc: "Life happens outside the feed." }],
  },
};

export const happenous: HappenousContent = {
  meta: {
    title: "Happenous",
    description: "An activity-based social network, in build. Organised around what people are doing, not around a feed.",
  },
  hero: {
    tone: "light",
    title: "Life happens outside the feed.",
    lead: "An activity-based social network, in build.",
  },
  intro: {
    label: "Happenous",
    title: "Built around doing, not scrolling.",
    body: "Most social products are organised around content. Happenous is being built around activity instead: what people are actually doing, and who they could do it with. It is not open yet — happenous.com is a holding page, and this describes what we are making rather than something you can use today.",
  },
  different: {
    title: "The idea",
    cards: [
      {
        tone: "dark",
        asset: "[ UI — activity card ]",
        title: "Activities, not posts",
        body: "The unit of Happenous is something to do, with a place and a time attached — not a post.",
      },
      {
        tone: "light",
        asset: "[ UI — nearby view ]",
        title: "People nearby",
        body: "The plan is to surface activities around you, so people are found through what they are doing nearby rather than through follower counts.",
      },
      {
        tone: "mid",
        asset: "[ PHOTO — people together ]",
        title: "Out of the app",
        body: "The point is time spent together, not time spent in the app. That is the test we are designing against.",
      },
    ],
  },
  how: {
    title: "How it is meant to work",
    steps: [
      { title: "Pick something to do", body: "Find something happening near you — a run, a film, a workshop — or make it happen: choose what, where, when and how many people." },
      { title: "See who is in", body: "See who has joined, then talk it through before you meet." },
      { title: "Go", body: "Meet up and do it. Afterwards, the people who were there keep what it produced." },
    ],
  },
  why: {
    label: "Why activities",
    title: "Why activities, not feeds",
    paragraphs: [
      "A feed is made to be scrolled. It rewards whatever keeps you looking, and it measures people by how many others follow them.",
      "An activity asks something different: turn up. It has a place and a time, so the people who join it are the people nearby who want to do the same thing. You would find them through what they are doing, not through follower counts.",
      "That is the argument the product is being built on. Whether it holds is something we will only know once people are using it.",
    ],
  },
  builtOn: {
    title: "Built on",
    lead: "Happenous starts where our intelligence work does: a place, a time and the people nearby.",
    groups: [{ label: "Capabilities", links: [capability.spatial] }],
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Can I use Happenous now?",
        a: "No. It is still being built, and happenous.com is a holding page. Nothing on this page describes something you can use today.",
      },
      {
        q: "When does it open?",
        a: "[LAUNCH TIMING — owner to confirm]. We would rather leave this blank than give a date we are not sure of.",
      },
      {
        q: "What counts as an activity?",
        a: "Something to do, with a place and a time attached — a run, a film, a workshop. It is the unit of Happenous, in place of a post.",
      },
      {
        q: "Why activities instead of a feed?",
        a: "A feed rewards whatever keeps you looking. An activity asks you to turn up, which is a different thing to design for.",
      },
    ],
  },
  visit: {
    title: "Not open yet.",
    body: "Happenous is still being built. happenous.com is a holding page for now — there is nothing to join there yet.",
    asset: "[ HAPPENOUS — people out doing something together ]",
    href: "https://www.happenous.com",
    action: "See happenous.com",
  },
  more: {
    label: "More in Product",
    links: [{ name: "StayOnMap", href: "/product/stayonmap", desc: "Rent with intelligence." }],
  },
};
