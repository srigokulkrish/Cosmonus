// Copy for the 12 Capability pages, taken verbatim from the boards in raw/handoff/design/
// (Studio-*, Intelligence-*, Agents-*.dc.html). [BRACKETED] text is an owner placeholder: keep it visible.
// The "More in …" descriptions are the boards' own and differ from the mega-menu descriptions in lib/site.ts.

// Everything after `cards` (process, showsUp, principles, band) was written for the build on 2026-09-19, not taken
// from the boards: it follows wiki/content.md (no invented facts; exploration is labelled as such).

import type { BorderedCardData } from "@/components/company/BorderedCards";
import type { ShowcaseGroup } from "@/components/capability/Showcase";
import type { Row } from "@/components/company/RowList";
import type { MediaCardData, Step, StripLink } from "@/components/ui/Section";
import { getNote } from "@/content/research";

export type CapabilitySection = "studio" | "intelligence" | "agents";

export type Capability = {
  slug: string;
  section: CapabilitySection;
  /** Page name: h1, intro label and <title>. */
  title: string;
  heroTone: "dark" | "light";
  /** The banner video (MP4 in public/), once it exists; `heroVideoZoom` crops letterbox bars recorded into it. */
  heroVideo?: string;
  heroVideoZoom?: number;
  /** A still banner instead of a film — Image Generation only (owner, 2026-09-21). */
  heroImage?: string;
  /** Banner copy at the top instead of the bottom. */
  heroAlign?: "top" | "bottom";
  /** Drop the shade over the banner. Only where the copy sits on a clear part of the picture. */
  heroScrim?: boolean;
  /** Assemble the still banner from tiles that clear from the middle outwards. */
  heroAssemble?: boolean;
  /** Keep the banner title out of the picture (it stays in the document). */
  heroTitleHidden?: boolean;
  /** Set false to leave the lead out of the banner. It is still the page's meta description. */
  heroLead?: boolean;
  lead: string;
  intro: { label: string; title: string; body: string };
  cardsTitle: string;
  cards: MediaCardData[];
  /** Finished work shown after the cards: the Video page's films, the Image Generation page's frames. */
  showcase?: ShowcaseGroup[];
  /** "Process" (Studio) / "How it works" (Intelligence) / "How we work" (Agents): three numbered steps. */
  process?: { title: string; steps: Step[] };
  /** "Where it shows up": rows linking to products, other capabilities and research notes. */
  showsUp?: Row[];
  /** "Principles", "What we avoid" or (Agents) "What a person checks": three bordered cards. */
  principles?: { title: string; cards: BorderedCardData[] };
  /** Closing band before the "More in …" strip. The action says where it goes. */
  band?: { title: string; body: string; href: string; action: string; image?: string; imageAlt?: string };
  more: { label: string; links: StripLink[] };
  metaDescription: string;
};

/** A "Where it shows up" row for a research note in content/research.ts, labelled with its kind and status. */
function noteRow(slug: string, desc: string): Row {
  const n = getNote(slug);
  if (!n) throw new Error(`Unknown research note: ${slug}`);
  return { name: n.title, href: `/company/research/${n.slug}`, desc: `${n.kind} · ${n.status}. ${desc}` };
}

// "More in …" strip items as they appear on the boards; each page lists the other three.
const studioMore: Record<string, StripLink> = {
  web: { name: "Web", href: "/studio/web", desc: "Sites and product interfaces, designed and built in-house." },
  animation: { name: "Animation", href: "/studio/animation", desc: "Motion that explains how a system works." },
  "image-generation": {
    name: "Image Generation",
    href: "/studio/image-generation",
    desc: "Generative imagery, held to an art director's standard.",
    // The page's own banner, so the strip card shows the work rather than a label.
    image: "/media/image-generation/banner.webp",
  },
  video: { name: "Video", href: "/studio/video", desc: "Generated and shot footage, cut into films." },
};

const intelligenceMore: Record<string, StripLink> = {
  spatial: { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Knowing where things are, and why it matters." },
  "trust-score": {
    name: "Trust Score",
    href: "/intelligence/trust-score",
    desc: "A readable signal for how far something can be relied on.",
  },
};

const agentsMore: Record<string, StripLink> = {
  workflow: { name: "Workflow Agents", href: "/agents/workflow", desc: "Agents that carry one task from start to finish." },
  automation: { name: "Automation", href: "/agents/automation", desc: "Routine work, handled the same way every time." },
  experiments: { name: "Experiments", href: "/agents/experiments", desc: "Prototypes and open questions." },
  systems: {
    name: "Conventional & Multi-tool Systems",
    href: "/agents/systems",
    desc: "Classic software and agents that use many tools, working together.",
  },
};

const moreBySection: Record<CapabilitySection, { label: string; items: Record<string, StripLink> }> = {
  studio: { label: "More in Studio", items: studioMore },
  intelligence: { label: "More in Intelligence", items: intelligenceMore },
  agents: { label: "More in Agents", items: agentsMore },
};

function more(section: CapabilitySection, slug: string) {
  const { label, items } = moreBySection[section];
  return { label, links: Object.entries(items).filter(([k]) => k !== slug).map(([, l]) => l) };
}

type Entry = Omit<Capability, "more" | "metaDescription" | "heroTone" | "intro"> & {
  intro: { title: string; body: string };
  /** Overrides the section default below (Image Generation, whose banner is a bright still). */
  heroTone?: Capability["heroTone"];
};

function build(e: Entry): Capability {
  return {
    ...e,
    // Boards: dark hero (with grid/contour lines) for Studio and Intelligence, light hero (no lines) for Agents.
    heroTone: e.heroTone ?? (e.section === "agents" ? "light" : "dark"),
    intro: { label: e.title, ...e.intro },
    more: more(e.section, e.slug),
    metaDescription: e.lead,
  };
}

const entries: Entry[] = [
  // ——— Studio ———
  {
    slug: "web",
    section: "studio",
    title: "Web",
    lead: "Sites and product interfaces, designed and built in-house.",
    intro: {
      title: "The surface is part of the product.",
      body: "Every Cosmonus product is met first through a screen. The studio designs and builds those screens — marketing sites, product interfaces and the map-heavy views our products depend on — so that what we say and what we ship feel like one thing.",
    },
    cardsTitle: "What we make",
    cards: [
      { tone: "dark", asset: "[ WEBSITE — full-page capture ]", title: "Websites", body: "Editorial, fast sites for Cosmonus and its products — this one included." },
      { tone: "light", asset: "[ PRODUCT UI — app screens ]", title: "Product interfaces", body: "The working screens of StayOnMap and Happenous, from first sketch to shipped front end." },
      { tone: "mid", asset: "[ MAP VIEW — recording ]", title: "Interactive maps", body: "Map views that stay readable when they are dense with real places and real listings." },
    ],
    process: {
      title: "Process",
      steps: [
        { title: "Start from the product", body: "We begin with what the product does and who meets it first, before a single layout exists." },
        { title: "Design and build in one place", body: "The same studio designs and builds, so decisions made in a sketch survive into the shipped front end." },
        { title: "Fill it with real content", body: "Screens are judged with real listings, real places and real copy in them — dense maps included — not tidy placeholder data." },
      ],
    },
    showsUp: [
      { name: "StayOnMap", href: "/product/stayonmap", desc: "Map search, listings and a TrustScore that has to be readable at a glance." },
      { name: "Happenous", href: "/product/happenous", desc: "Activity cards and the nearby view: screens meant to get people out of the app." },
      noteRow("a-new-site-from-our-own-studio", "How this site was organised, designed and built in-house."),
    ],
    principles: {
      title: "What we avoid",
      cards: [
        { title: "Stock imagery", body: "Where real footage or photographs do not exist yet, we leave a labelled gap rather than borrow someone else's pictures." },
        { title: "Vague buttons", body: "Every button names where it goes. One that could lead anywhere tells nobody anything." },
        { title: "Weight without purpose", body: "Every font, image and animation has to earn its load time. Editorial and fast are meant to go together." },
      ],
    },
    band: {
      title: "A product needs a surface.",
      body: "If you are thinking about a product and how people will first meet it, tell us about it.",
      href: "/contact?topic=idea",
      action: "Talk to us about an interface",
    },
  },
  {
    slug: "animation",
    section: "studio",
    title: "Animation",
    heroVideo: "/media/animation/banner.mp4",
    heroVideoZoom: 1.35,
    lead: "Motion that explains how a system works.",
    intro: {
      title: "If it moves, it should be telling you something.",
      body: "We use animation to show what is hard to say: a route forming, a score resolving, an agent taking its next step. Motion is part of how our products and films explain themselves, never decoration laid on top.",
    },
    cardsTitle: "What we make",
    cards: [
      { tone: "dark", asset: "[ MOTION IDENTITY — loop ]", video: "/media/animation/card-motion-identity.mp4", title: "Motion identity", body: "How the Cosmonus brands move: timing, easing and transitions that stay consistent everywhere." },
      // Reuses the Video page's product film rather than a second copy of the same footage (8.5 MB).
      {
        tone: "light",
        asset: "[ PRODUCT FILM — still ]",
        video: "/media/video/product-film.mp4",
        title: "Product films",
        body: "Short films that show a product doing its job in the real world.",
      },
      { tone: "mid", asset: "[ EXPLAINER — still ]", video: "/media/animation/card-explainer.mp4", title: "Explainers", body: "Animated walk-throughs of ideas like TrustScore and spatial intelligence." },
    ],
    process: {
      title: "Process",
      steps: [
        { title: "Find what changes", body: "Every piece starts with one question: what changes over time here, and what does the viewer need to see change?" },
        { title: "Set the timing once", body: "Easing and duration are decided as a system, so a button, a transition and a film feel made by the same hand." },
        { title: "Cut what only decorates", body: "If a movement does not explain something, it comes out — including the ones we liked." },
      ],
    },
    showsUp: [
      { name: "Trust Score", href: "/intelligence/trust-score", desc: "A score resolving and its reasons appearing is exactly the kind of change motion can explain." },
      { name: "Workflow Agents", href: "/agents/workflow", desc: "Plan, act, hand back: a sequence that is easier to follow when you can watch it happen." },
      { name: "Web", href: "/studio/web", desc: "Menus, tabs and transitions across this site share one timing and respect reduced-motion settings." },
    ],
    principles: {
      title: "Principles",
      cards: [
        { title: "Motion carries meaning", body: "Something moves because something happened. Nothing moves just to fill the frame." },
        { title: "One timing everywhere", body: "The same curves in the product, on the site and in the films, so the brand moves like one thing." },
        { title: "Still is a valid setting", body: "People who turn motion down lose the movement and nothing else. The information stays." },
      ],
    },
    band: {
      title: "See what motion has to explain.",
      body: "Trust Score is one of the ideas our explainers are made for: a score, the reasons behind it, and how it changes.",
      href: "/intelligence/trust-score",
      action: "Read about Trust Score",
    },
  },
  {
    slug: "image-generation",
    section: "studio",
    title: "Image Generation",
    // The one still banner on the site: the page about making images shows one (owner, 2026-09-21).
    // Copy sits at the top over the empty part of the picture, with no shade over it — so the text
    // goes dark (heroTone "light") rather than white, which would be unreadable on the yellow.
    heroImage: "/media/image-generation/banner.webp",
    heroAlign: "top",
    heroScrim: false,
    heroAssemble: true,
    heroTitleHidden: true,
    heroLead: false,
    heroTone: "light",
    lead: "Generative imagery, held to an art director's standard.",
    intro: {
      title: "A model is a camera. It still needs a point of view.",
      body: "We work with image models the way a studio works with a camera: a brief, a point of view and a great deal of editing. The result is imagery that belongs to a brand rather than to a model.",
    },
    cardsTitle: "What we make",
    cards: [
      {
        tone: "dark",
        asset: "[ CONTACT SHEET ]",
        title: "Art direction",
        body: "Briefs, references and selection: deciding what an image is for before it is made.",
        image: "/media/image-generation/card-art-direction.jpg",
        alt: "A written brief on a cork board beside reference photographs of a street at dawn and a sheet of small image options.",
      },
      {
        tone: "light",
        asset: "[ IMAGE SERIES ]",
        title: "Visual systems",
        body: "Repeatable looks, so a hundred images feel like one family.",
        image: "/media/image-generation/card-visual-systems.jpg",
        alt: "Six photographs of different city corners in a grid, all sharing the same morning light, lens and muted palette.",
      },
      {
        tone: "mid",
        asset: "[ CONCEPT FRAMES ]",
        title: "Concept frames",
        body: "Fast frames for exploring a film, a product or a place before it exists.",
        image: "/media/image-generation/card-concept-frames.jpg",
        alt: "Three loose painted concept frames side by side: a street market, a doorway with a bicycle, a rooftop at dusk.",
      },
    ],
    showcase: [
      {
        label: "Selected frames",
        title: "Three frames, one visual system.",
        lead: "Made for this site: the same lens, light and grade, so they read as one family rather than three prompts.",
        layout: "thirds",
        shape: "landscape",
        items: [
          {
            src: "/media/image-generation/frame-lane.jpg",
            title: "First light, old city lane",
            alt: "A narrow lane at first light, laundry lines overhead and a bicycle leaning against a blue wall.",
          },
          {
            src: "/media/image-generation/frame-rooftops.jpg",
            title: "Rooftops before the lights",
            alt: "Rooftops, water tanks and trees at dusk, a few windows just beginning to glow.",
          },
          {
            src: "/media/image-generation/frame-doorway.jpg",
            title: "A doorway on a quiet street",
            alt: "An open doorway on a quiet street in soft morning light, steps worn smooth and a shutter half raised.",
          },
        ],
      },
    ],
    process: {
      title: "Process",
      steps: [
        {
          title: "Write the brief",
          body: "What the image is for, where it will sit and what it must not look like — decided before the first prompt.",
          image: "/media/image-generation/step-1.jpg",
          alt: "A printed page of writing on a clean desk with a pen laid across it, seen from above.",
        },
        {
          title: "Generate wide, select hard",
          body: "Many frames are made and few are kept. Selection is where most of the work happens.",
          image: "/media/image-generation/step-2.jpg",
          alt: "A laptop screen filled with a grid of small image thumbnails, three of them outlined as picks.",
        },
        {
          title: "Edit into a family",
          body: "Chosen images are corrected and graded until they belong to one visual system, not to the model that made them.",
          image: "/media/image-generation/step-3.jpg",
          alt: "Three photographs of the same street laid in a row on a table, all matched to one warm, muted grade.",
        },
      ],
    },
    showsUp: [
      { name: "Video", href: "/studio/video", desc: "Concept frames are often where a generated shot begins." },
      { name: "Animation", href: "/studio/animation", desc: "Visual systems set the look that explainers and product films move in." },
      { name: "Web", href: "/studio/web", desc: "Where this site needs images, they are held to the same standard. Until they exist, the gap stays labelled." },
    ],
    principles: {
      title: "What we avoid",
      cards: [
        { title: "Images that pretend", body: "A generated image never stands in for a real home, place or person where a reader would take it as a record." },
        { title: "The model's default look", body: "If an image could have come from anyone's prompt, it has not been directed yet." },
        { title: "Volume for its own sake", body: "A hundred images that disagree with each other are worth less than ten that belong together." },
      ],
    },
    band: {
      title: "Have a brief?",
      body: "If you are building a visual system and want to talk about directing image models, write to us.",
      href: "/contact?topic=collaboration",
      action: "Talk to us about imagery",
      image: "/media/image-generation/band.jpg",
      imageAlt: "An empty narrow lane in an old city at first light, a single bicycle against a blue wall, soft haze.",
    },
  },
  {
    slug: "video",
    section: "studio",
    title: "Video",
    heroVideo: "/media/video/banner.mp4",
    lead: "Generated and shot footage, cut into films.",
    showcase: [
      {
        label: "Sport",
        title: "Sport, filmed where it happens.",
        lead: "Cycling and skiing: fast outdoor motion, cut into short loops.",
        layout: "thirds",
        items: [
          { src: "/media/video/sport-cycling.mp4", title: "Cycling" },
          { src: "/media/video/sport-cycling-offroad.mp4", title: "Cycling, off-road" },
          { src: "/media/video/sport-skiing.mp4", title: "Skiing" },
        ],
      },
    ],
    intro: {
      title: "Film for products that live outdoors.",
      body: "Our products are about streets, homes and people, so our films are too. We combine generated and shot footage, then edit and grade it into launch films and the cinematic loops used across this site.",
    },
    cardsTitle: "What we make",
    cards: [
      { tone: "dark", asset: "[ GENERATED SHOT ]", title: "Generated footage", body: "Shots made with video models, directed and selected like any other footage." },
      { tone: "light", asset: "[ BEFORE / AFTER GRADE ]", title: "Edit and grade", body: "Cutting, sound and colour, so generated and real footage sit together." },
      { tone: "mid", asset: "[ LAUNCH FILM — still ]", title: "Launch films", body: "The film that introduces a product to the people it is for." },
    ],
    process: {
      title: "Process",
      steps: [
        { title: "Decide what the film must show", body: "One idea per film: a product doing its job, somewhere real." },
        { title: "Shoot and generate", body: "Some shots are filmed and some are made with video models, each chosen for what the scene needs." },
        { title: "Cut, sound and grade", body: "Everything is edited and coloured together, so nobody notices where one kind of footage ends and the other begins." },
      ],
    },
    showsUp: [
      { name: "StayOnMap", href: "/product/stayonmap", desc: "A film about renting has to show streets and homes, not just screens." },
      { name: "Happenous", href: "/product/happenous", desc: "An activity-based product is best shown with people doing things, outdoors and together." },
      { name: "Image Generation", href: "/studio/image-generation", desc: "Concept frames set the look before any footage is made." },
    ],
    principles: {
      title: "Principles",
      cards: [
        { title: "Real places first", body: "Our products are about streets, homes and people. The films start there, not in an abstract space." },
        { title: "Directed, not prompted", body: "Generated footage is briefed, selected and cut with the same care as anything shot on a camera." },
        { title: "Sound is half the film", body: "Cutting and sound get the same attention as the picture. A good shot with the wrong sound is a bad shot." },
      ],
    },
    band: {
      title: "Made for products that live outdoors.",
      body: "Happenous is about time spent together outside the app — the kind of product our films are made for.",
      href: "/product/happenous",
      action: "See Happenous",
    },
  },

  // ——— Intelligence ———
  {
    slug: "spatial",
    section: "intelligence",
    title: "Spatial Intelligence",
    lead: "Knowing where things are, and why it matters.",
    intro: {
      title: "Location changes the answer.",
      body: "The same question means something different on a different street. Spatial intelligence is our work on giving software a sense of place: where something is, what surrounds it, and how that should change what a system says or does.",
    },
    cardsTitle: "What we work on",
    cards: [
      { tone: "dark", asset: "[ DIAGRAM — place ]", title: "Place", body: "Putting every listing, venue and event where it actually is, not where a form says it is." },
      { tone: "light", asset: "[ DIAGRAM — surroundings ]", title: "Surroundings", body: "What is nearby — transit, shops, noise, people — and what that means for the question being asked." },
      { tone: "mid", asset: "[ DIAGRAM — movement ]", title: "Movement", body: "How people really get from one place to another, and how long it takes them." },
    ],
    process: {
      title: "How it works",
      steps: [
        { title: "Place it", body: "Every listing, venue or event is put where it really is, and the written address is kept alongside the pin." },
        { title: "Read the surroundings", body: "What is nearby is gathered for the question at hand: a walk to the station, a street that is loud at night, a shop at the corner." },
        { title: "Let place shape the answer", body: "Location and surroundings travel on to scores and agents, so their answers change when the street does." },
      ],
    },
    showsUp: [
      { name: "StayOnMap", href: "/product/stayonmap", desc: "Map-first search, where every home sits where it really is." },
      { name: "Happenous", href: "/product/happenous", desc: "Activities with a place attached, found through what people are doing nearby." },
      { name: "Trust Score", href: "/intelligence/trust-score", desc: "When location claims disagree, we are working on letting the gap inform the score." },
      noteRow("where-a-listing-really-is", "What we do when an address and a pin tell different stories."),
    ],
    principles: {
      title: "Principles",
      cards: [
        { title: "A pin is a claim", body: "A written address and a point on a map are two claims about a place. When they disagree, the gap is information." },
        { title: "People rent a walk, not a coordinate", body: "What surrounds a home matters as much as where it is." },
        { title: "Place comes first", body: "If the place is wrong, everything built on top of it inherits the error." },
      ],
    },
    band: {
      title: "Start with the map.",
      body: "StayOnMap is where our spatial work is used first: every home, where it really is.",
      href: "/product/stayonmap",
      action: "See StayOnMap",
    },
  },
  {
    slug: "trust-score",
    section: "intelligence",
    title: "Trust Score",
    lead: "A readable signal for how far something can be relied on.",
    intro: {
      title: "Trust should be visible before you commit.",
      body: "Listings, places and claims are not equally reliable, and people usually find that out too late. Trust Score is our approach to making reliability legible: one signal, with the reasons behind it on show. It first appears in StayOnMap as TrustScore.",
    },
    cardsTitle: "How we think about it",
    cards: [
      { tone: "dark", asset: "[ DIAGRAM — signals ]", title: "Signals", body: "Identity, verification, history, behaviour, community and context — each counted only when it is actually available." },
      { tone: "light", asset: "[ UI — score with reasons ]", title: "Explanation", body: "A score is only useful if you can see why, so the reasons travel with the number." },
      { tone: "mid", asset: "[ DIAGRAM — score over time ]", title: "Change over time", body: "Scores should move when the world does. When a signal is added, confirmed or goes stale, the score is recalculated and the change is explained." },
    ],
    process: {
      title: "How it works",
      steps: [
        { title: "Gather what is available", body: "Signals are collected only where they actually exist for this listing, place or claim. A missing signal is left out, not guessed." },
        { title: "Weigh and explain", body: "The signals that moved the score most are written out in plain language beside the number." },
        { title: "Recalculate when things change", body: "A new, confirmed or stale signal leads to a fresh score, and the change is explained rather than silently applied." },
      ],
    },
    showsUp: [
      { name: "StayOnMap", href: "/product/stayonmap", desc: "Twelve live signals compound into one trust score per listing, with the evidence behind it on show." },
      { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Where a home really is, compared with where it says it is." },
      noteRow("a-score-with-its-reasons", "The principle TrustScore is designed around, and what it costs."),
    ],
    principles: {
      title: "Principles",
      cards: [
        { title: "Reasons over precision", body: "A signal that cannot be explained in a sentence is hard to justify, even if it would sharpen the number." },
        { title: "Stable enough to explain", body: "A score that jumps around for reasons nobody can name erodes the trust it is meant to describe." },
        { title: "A start, not a verdict", body: "The score informs a decision the person still makes for themselves." },
      ],
    },
    band: {
      title: "Reliability, made visible.",
      body: "If you are working on something where people need to know how far to rely on what they see, we would like to hear about it.",
      href: "/contact?topic=collaboration",
      action: "Talk to us about Trust Score",
    },
  },
  // ——— Agents ———
  {
    slug: "workflow",
    section: "agents",
    title: "Workflow Agents",
    lead: "Agents that carry one task from start to finish.",
    intro: {
      title: "One task, owned end to end.",
      body: "A workflow agent takes responsibility for a whole job, not a single reply. It gathers context, plans the steps, uses the tools it needs and hands back a result someone can check.",
    },
    cardsTitle: "How they work",
    cards: [
      { tone: "dark", asset: "[ DIAGRAM — plan ]", title: "Plan", body: "Breaks a job into steps and decides what it needs to know first." },
      { tone: "light", asset: "[ DIAGRAM — act ]", title: "Act", body: "Calls tools, reads the results and adjusts the plan as it goes." },
      { tone: "mid", asset: "[ DIAGRAM — hand back ]", title: "Hand back", body: "Returns finished work with a record of what it did and why." },
    ],
    process: {
      title: "How we work",
      steps: [
        { title: "Define the finished job", body: "Before an agent starts, we decide what done looks like and who confirms it." },
        { title: "Give it context and tools", body: "The agent gets the facts the job depends on, and only the tools it needs to finish it." },
        { title: "Ask rather than guess", body: "Where a detail is absent rather than implied, the agent asks one clear question instead of filling the gap confidently." },
      ],
    },
    showsUp: [
      noteRow("listing-from-a-message", "A workflow agent that turns a loosely written message into a draft listing the owner confirms."),
      { name: "StayOnMap", href: "/product/stayonmap", desc: "Owners list directly today, and an opt-in agent already watches listings for fraud. The experiment explores what else an agent could do." },
    ],
    principles: {
      title: "What a person checks",
      cards: [
        { title: "The draft, before it goes out", body: "Agents prepare; they do not publish. Work other people will see is confirmed by a person first." },
        { title: "What was inferred", body: "Details the agent worked out are marked apart from what it was told, so they get a second look." },
        { title: "The record", body: "Each step and tool call is written down, so a surprising result can be traced back to where it came from." },
      ],
    },
    band: {
      title: "A job worth handing over?",
      body: "If there is work you would like carried from start to finish — with a person checking the result — tell us about it.",
      href: "/contact?topic=idea",
      action: "Talk to us about a workflow",
    },
  },
  {
    slug: "automation",
    section: "agents",
    title: "Automation",
    lead: "Routine work, handled the same way every time.",
    intro: {
      title: "Not everything needs an agent.",
      body: "Much useful work is routine. Where a task is well understood, we automate it plainly and reliably, and keep agents for the parts that need judgement.",
    },
    cardsTitle: "Principles",
    cards: [
      { tone: "dark", asset: "[ DIAGRAM — triggers ]", title: "Triggers", body: "Work starts when something happens, not when someone remembers." },
      { tone: "light", asset: "[ DIAGRAM — reliability ]", title: "Reliability", body: "The same input gives the same result, and failures are surfaced instead of hidden." },
      { tone: "mid", asset: "[ DIAGRAM — escalation ]", title: "Escalation", body: "When a case does not fit the rule, it goes to an agent or to a person." },
    ],
    process: {
      title: "How we work",
      steps: [
        { title: "Write the rule down", body: "If a task can be described completely, it is described completely before anything is built." },
        { title: "Start on an event", body: "Each automation runs because something happened, not because someone remembered to run it." },
        { title: "Route what does not fit", body: "Cases outside the rule go to an agent or a person, with the reason they did not fit attached." },
      ],
    },
    showsUp: [
      { name: "Workflow Agents", href: "/agents/workflow", desc: "Where a task needs judgement, an agent takes over from the rule." },
      { name: "Conventional & Multi-tool Systems", href: "/agents/systems", desc: "Automation is often the deterministic part of a larger system." },
      { name: "Trust Score", href: "/intelligence/trust-score", desc: "Recalculating a score when a signal changes is triggered work that should happen the same way every time." },
    ],
    principles: {
      title: "What a person checks",
      cards: [
        { title: "The failures", body: "Failures are surfaced rather than hidden, and someone is responsible for looking at them." },
        { title: "The exceptions", body: "Every case the rule escalated, and whether it should have been." },
        { title: "The rule itself", body: "A rule that was right once is reviewed when the work around it changes." },
      ],
    },
    band: {
      title: "Routine work you would rather not do?",
      body: "Tell us about it. Some of it needs an agent; much of it just needs doing reliably.",
      href: "/contact?topic=problem",
      action: "Talk to us about automation",
    },
  },
  {
    slug: "experiments",
    section: "agents",
    title: "Experiments",
    lead: "Prototypes and open questions.",
    intro: {
      title: "Things we are trying, shown honestly.",
      body: "Experiments is where we publish prototypes and the questions behind them. Some become products or research; many do not. Each is labelled with what it is, what we learned and what is still unknown.",
    },
    cardsTitle: "Current experiments",
    cards: [
      { tone: "dark", asset: "[ EXPERIMENT — capture ]", title: "Listing by conversation", body: "Can a home be listed through a chat, without a single form?" },
      { tone: "light", asset: "[ EXPERIMENT — capture ]", title: "Saying how sure it is", body: "Can a system show its confidence in words a person reads at a glance?" },
      { tone: "mid", asset: "[ EXPERIMENT — capture ]", title: "Knowing the neighbourhood", body: "What should an agent know about a place before it suggests what to do there?" },
    ],
    process: {
      title: "How we run them",
      steps: [
        { title: "Start with a question", body: "Each experiment begins as a plain question, like the three above, not as a feature waiting to ship." },
        { title: "Build the smallest thing", body: "A prototype just large enough to show whether the question has a useful answer." },
        { title: "Write up what happened", body: "What it is, what we learned and what is still unknown — including when the answer turned out to be no." },
      ],
    },
    showsUp: [
      noteRow("listing-from-a-message", "Listing by conversation, written up as it runs."),
      { name: "Trust Score", href: "/intelligence/trust-score", desc: "Saying how sure a system is sits close to showing the reasons behind a score." },
      { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Knowing the neighbourhood is a question about what an agent should be told about a place." },
      { name: "Research", href: "/company/research", desc: "Every note and experiment, labelled with how far the work has got." },
    ],
    principles: {
      title: "What a person checks",
      cards: [
        { title: "What the prototype showed", body: "A demo that worked once is not a result. Someone checks what it did across the cases that matter." },
        { title: "The label", body: "Each experiment says whether it is in progress, conceptual or published, and the label is kept honest." },
        { title: "Whether to stop", body: "Many experiments do not become products or research. Deciding to stop is part of the work." },
      ],
    },
    band: {
      title: "Read the write-ups.",
      body: "Research notes and experiments, published as the work produces them.",
      href: "/company/research",
      action: "Read research and experiments",
    },
  },
  {
    slug: "systems",
    section: "agents",
    title: "Conventional & Multi-tool Systems",
    lead: "Classic software and agents that use many tools, working together.",
    intro: {
      title: "The right tool, including the boring one.",
      body: "Agents are one part of a system. Around them sit databases, queues and services that do exactly what they are told. We design the whole: conventional software where certainty matters, and agents that can reach many tools where flexibility does.",
    },
    cardsTitle: "What we build",
    cards: [
      { tone: "dark", asset: "[ DIAGRAM — services ]", title: "Conventional systems", body: "Deterministic software for the parts that must never surprise anyone." },
      { tone: "light", asset: "[ DIAGRAM — agent and tools ]", title: "Multi-tool agents", body: "Agents that choose among maps, messaging, databases and other tools to finish a job." },
      { tone: "mid", asset: "[ DIAGRAM — boundary ]", title: "The boundary", body: "Deciding which parts must be deterministic and which can be left to judgement." },
    ],
    process: {
      title: "How we work",
      steps: [
        { title: "Map the parts", body: "List every step of the job and ask of each one: must this always behave the same way?" },
        { title: "Draw the boundary", body: "Deterministic software takes the steps where certainty matters; agents take the ones that need judgement." },
        { title: "Connect them plainly", body: "Agents reach maps, messaging and databases through defined tools, and each call leaves a record." },
      ],
    },
    showsUp: [
      { name: "StayOnMap", href: "/product/stayonmap", desc: "A map, listings, trust and risk scoring, a fraud agent, chat and visits in one product — the kind of whole a system has to be designed as." },
      { name: "Automation", href: "/agents/automation", desc: "The plain, reliable part of many systems." },
      { name: "Workflow Agents", href: "/agents/workflow", desc: "The part that carries a single job across many tools." },
    ],
    principles: {
      title: "What a person checks",
      cards: [
        { title: "Where the boundary sits", body: "Moving a step from software to an agent, or back, is a decision a person makes and can explain." },
        { title: "What each tool may do", body: "An agent's reach is set by people in advance, not discovered by the agent along the way." },
        { title: "The order of events", body: "When something goes wrong, the record shows what was called, by what, and in what order." },
      ],
    },
    band: {
      title: "Designing a whole system?",
      body: "If you are deciding which parts of a job should be certain and which can be left to judgement, we would like to think it through with you.",
      href: "/contact?topic=collaboration",
      action: "Talk to us about a system",
    },
  },
];

export const capabilities: Capability[] = entries.map(build);

export function getCapability(section: CapabilitySection, slug: string): Capability {
  const c = capabilities.find((x) => x.section === section && x.slug === slug);
  if (!c) throw new Error(`Unknown capability: ${section}/${slug}`);
  return c;
}
