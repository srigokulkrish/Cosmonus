// Copy for the five section landing pages (/studio, /product, /company, /intelligence, /agents).
// These routes were not on the boards; copy follows the boards' voice and only restates what the
// site already says. [BRACKETED] text is an owner placeholder (media here): keep it visible.

import type { BorderedCardData } from "@/components/company/BorderedCards";
import type { Tone } from "@/components/ui/MediaPanel";
import type { Step } from "@/components/ui/Section";

export type SectionIndexItem = {
  name: string;
  href: string;
  /** Optional headline; defaults to the name. */
  title?: string;
  desc: string;
  tone: Tone;
  asset: string;
  /** The real image in public/, once it exists; `alt` describes it. */
  image?: string;
  alt?: string;
};

export type SectionContent = {
  meta: { title: string; description: string };
  /** `video`: the banner video (MP4 in public/), once it exists. */
  hero: { tone: "dark" | "light"; title: string; lead: string; video?: string };
  intro: { label: string; title: string; body: string };
  index: { title: string; lead?: string; items: SectionIndexItem[] };
  detail: { kind: "steps"; title: string; steps: Step[] } | { kind: "principles"; title: string; cards: BorderedCardData[] };
  band: { title: string; body: string; href: string; action: string; image?: string; imageAlt?: string };
};

export const studio: SectionContent = {
  meta: {
    title: "Studio",
    description: "The creative practice behind every Cosmonus product: design, motion and generative media, made in-house.",
  },
  hero: {
    video: "/media/studio/banner.mp4",
    tone: "dark",
    title: "Ideas made visible.",
    lead: "The creative practice behind every Cosmonus product: design, motion and generative media, made in-house.",
  },
  intro: {
    label: "Studio",
    title: "We build our own products. That changes how we make things.",
    body: "The studio makes the sites, interfaces, films and imagery for StayOnMap, Happenous and Cosmonus itself. Because we ship the products we make them for, the work is judged by one question: does it help someone understand a place, a score or a system?",
  },
  index: {
    title: "What the studio makes",
    items: [
      {
        name: "Web",
        href: "/studio/web",
        title: "Sites and product interfaces",
        desc: "Marketing sites, product screens and the map-heavy views our products depend on.",
        tone: "dark",
        asset: "[ WEB — screen capture of a Cosmonus-built interface ]", image: "/media/web/card-websites.jpg",
      },
      {
        name: "Animation",
        href: "/studio/animation",
        title: "Motion that explains",
        desc: "A route forming, a score resolving, an agent taking its next step.",
        tone: "light",
        asset: "[ ANIMATION — looping motion piece ]",
        image: "/media/home/studio-animation.png",
        alt: "A line map of city blocks with a route drawn between two points and a score ring loading beside the destination.",
      },
      {
        name: "Image Generation",
        href: "/studio/image-generation",
        title: "Art-directed generative imagery",
        desc: "Image models used like a camera: a brief, a point of view and a great deal of editing.",
        tone: "mid",
        asset: "[ IMAGE GENERATION — generated image, art-directed ]", image: "/media/image-generation/banner.webp",
      },
      {
        name: "Video",
        href: "/studio/video",
        title: "Generated and edited film",
        desc: "Generated and shot footage, cut and graded into launch films and loops.",
        tone: "dark",
        asset: "[ VIDEO — 16:9 reel ]", image: "/media/video/poster.avif",
      },
    ],
  },
  detail: {
    kind: "steps",
    title: "How the studio works",
    steps: [
      {
        title: "Start from the question", image: "/media/studio/step-1.jpg", alt: "An open notebook with a handwritten question and a pencil sketch of a phone screen.",
        body: "Every piece begins with what someone needs to understand, not with a format or a deliverable.",
      },
      {
        title: "Make it in one place", image: "/media/studio/step-2.jpg", alt: "A designer seen from behind at a wide monitor showing a design canvas beside code.",
        body: "Design, code, motion and film come from the same small team, so a product and its story feel like one thing.",
      },
      {
        title: "Judge it where it lives", image: "/media/studio/step-3.jpg", alt: "A hand holding up a phone with a map on a busy street at dusk.",
        body: "The work is reviewed in the product, the film or the page it was made for — not in isolation.",
      },
    ],
  },
  band: {
    title: "What the studio makes it for.",
    body: "StayOnMap is where the studio's work meets the people it is for. Happenous is being built.",
    href: "/product",
    action: "See the products", image: "/media/studio/band.jpg", imageAlt: "Two phones on a cafe table beside a glass of chai in the afternoon sun.",
  },
};

export const product: SectionContent = {
  meta: {
    title: "Product",
    description: "StayOnMap, and Happenous in build: two products on the idea that software should know where you are and what is around you.",
  },
  hero: {
    tone: "dark",
    title: "Products for the physical world.",
    lead: "Two products, both built on the idea that software should know where you are and what is around you.",
  },
  intro: {
    label: "Product",
    title: "Products that start from the real world.",
    body: "StayOnMap and Happenous answer different questions — where should I live, and what could I do this evening — but both begin in the same place: a map, a neighbourhood, the people nearby. They are also where our intelligence work meets real use.",
  },
  index: {
    title: "Two products",
    items: [
      {
        name: "StayOnMap",
        href: "/product/stayonmap",
        title: "Rent with intelligence.",
        desc: "Rental infrastructure without brokers. Every listing is scored across twelve trust signals before it surfaces, and owners and tenants connect directly, on a live map, with no commission.",
        tone: "dark",
        asset: "[ STAYONMAP — map view screen recording ]", image: "/media/stayonmap/step-1.jpg",
      },
      {
        name: "Happenous",
        href: "/product/happenous",
        title: "Life happens outside the feed.",
        desc: "An activity-based social network, in build. Organised around what people are actually doing, and who they could do it with — not around what keeps them scrolling.",
        tone: "light",
        asset: "[ HAPPENOUS — people doing things, outdoors, candid ]", image: "/media/home/product-happenous.jpg",
      },
    ],
  },
  detail: {
    kind: "principles",
    title: "What they share",
    cards: [
      {
        title: "Place first",
        body: "Homes and activities sit where they really are, so the first thing you learn is where.",
      },
      {
        title: "People, directly",
        body: "Renters reach owners with no broker in between. People meet because they share an activity, not a follower count.",
      },
      {
        title: "Out of the app",
        body: "Both are meant to get you somewhere: into a home, or out to something happening.",
      },
    ],
  },
  band: {
    title: "The intelligence underneath.", image: "/media/product/band.jpg", imageAlt: "A woman on a rooftop at dusk looking out over a neighbourhood of lit windows.",
    body: "Spatial intelligence and Trust Score are the questions these products raised, worked on in the open.",
    href: "/intelligence",
    action: "See Intelligence",
  },
};

export const company: SectionContent = {
  meta: {
    title: "Company",
    description: "Cosmonus is the parent company behind StayOnMap, Happenous and the research that connects them.",
  },
  hero: {
    tone: "dark",
    video: "/media/company/banner.mp4",
    title: "The company behind the work.",
    lead: "Who we are, what we are learning, and how to join us.",
  },
  intro: {
    label: "Company",
    title: "We start with problems, not technologies.",
    body: "Cosmonus is the parent company behind StayOnMap, Happenous and the research that connects them. It is a studio that makes things, products people use, and a habit of publishing what we learn. Some ideas become products; some stay experiments, and we say which.",
  },
  index: {
    title: "Inside Cosmonus",
    items: [
      {
        name: "About",
        href: "/company/about",
        title: "Who we are and why",
        desc: "Why Cosmonus exists, what it is made of, and the team building it.",
        tone: "dark",
        asset: "[ ABOUT — cinematic real-world footage ]", image: "/media/about/poster.avif",
      },
      {
        name: "Research",
        href: "/company/research",
        title: "What we are learning",
        desc: "Notes on place, trust, context and feedback, published as they are ready.",
        tone: "light",
        asset: "[ RESEARCH — abstract film or field footage ]", image: "/media/research/poster.avif",
      },
      {
        name: "Blog",
        href: "/company/blog",
        title: "Ideas explained plainly",
        desc: "The terms and ways of working behind how we build, written for anyone who wants to learn them.",
        tone: "mid",
        asset: "[ BLOG — a desk, a whiteboard, something being explained ]", image: "/media/company/index-blog.jpg",
      },
      {
        name: "Careers",
        href: "/company/careers",
        title: "Work on the real world",
        desc: "A small team building for streets, homes and the people in them.",
        tone: "dark",
        asset: "[ CAREERS — the team at work, candid ]", image: "/media/careers/poster.avif",
      },
    ],
  },
  detail: {
    kind: "principles",
    title: "What we hold to",
    cards: [
      {
        title: "Problems first",
        body: "We begin with something that should work better, then choose the technology that fits it.",
      },
      {
        title: "Only what exists",
        body: "We describe what we have built, and label experiments as experiments.",
      },
      {
        title: "Show the reasons",
        body: "Scores, answers and agents should explain themselves to the people relying on them.",
      },
    ],
  },
  band: {
    title: "Write to us.",
    body: "Questions about Cosmonus, our products or our research are welcome.",
    href: "/contact",
    action: "Contact Cosmonus", image: "/media/company/band.jpg", imageAlt: "A hand writing a note on a notepad beside a laptop by a window.",
  },
};

export const intelligence: SectionContent = {
  meta: {
    title: "Intelligence",
    description: "How Cosmonus systems understand the physical world: spatial intelligence for where things are, and Trust Score for how far a claim can be relied on.",
  },
  hero: {
    tone: "dark",
    title: "Real-world intelligence.",
    lead: "How our systems understand place and trust.",
  },
  intro: {
    label: "Intelligence",
    title: "Signals become understanding.",
    body: "Software is good with text and poor with the world that text describes. Intelligence is our work on the layers in between: where something is, and how far it can be relied on.",
  },
  index: {
    title: "Two disciplines",
    lead: "What we practise so that software can reason about places, people and trust — not just text.",
    items: [
      {
        name: "Spatial Intelligence",
        href: "/intelligence/spatial",
        title: "Where things are, and why it matters",
        desc: "Place, surroundings and movement: how location should change what a system says or does.",
        tone: "dark",
        asset: "[ SPATIAL — aerial or map footage ]", image: "/media/intelligence/index-spatial.jpg",
      },
      {
        name: "Trust Score",
        href: "/intelligence/trust-score",
        title: "A readable signal of reliability",
        desc: "One signal for how far a listing, a place or a claim can be relied on, with its reasons on show.",
        tone: "light",
        asset: "[ TRUST SCORE — TrustScore shown on a listing ]", image: "/media/trust-score/band.jpg",
      },
    ],
  },
  detail: {
    kind: "steps",
    title: "From signal to understanding",
    steps: [
      {
        title: "Data", image: "/media/intelligence/step-1.jpg", alt: "Unsorted slips of paper and street photos scattered across a table.",
        body: "Scattered signals: a location, a listing, a message, a history. On their own, they say little.",
      },
      {
        title: "Context", image: "/media/intelligence/step-2.jpg", alt: "Papers grouped into three piles and linked with string on a map.",
        body: "What those signals mean together, for this place and this moment.",
      },
      {
        title: "Understanding", image: "/media/intelligence/step-3.jpg", alt: "A person arriving at the doorway they were looking for.",
        body: "What a person needs to know to decide — with how sure we are shown alongside it.",
      },
    ],
  },
  band: {
    title: "From understanding to action.",
    body: "Agents take what these systems understand and turn it into finished work someone can check.",
    href: "/agents",
    action: "See Agents", image: "/media/intelligence/band.jpg", imageAlt: "A delivery rider pausing at a crossroads at dusk to check the route.",
  },
};

export const agents: SectionContent = {
  meta: {
    title: "Agents",
    description: "Systems that act: from understanding to finished work, with a person able to check the result.",
  },
  hero: {
    tone: "light",
    title: "Systems that act.",
    lead: "From understanding to finished work, with a person able to check the result.",
  },
  intro: {
    label: "Agents",
    title: "Sometimes the best interface isn't another interface.",
    body: "We explore software that understands what someone wants and helps complete the work. Some of it is agents; much of it is plain automation and conventional software. Where one ends and the other begins is a design decision, and every result comes back in a form a person can check.",
  },
  index: {
    title: "How we build them",
    items: [
      {
        name: "Workflow Agents",
        href: "/agents/workflow",
        title: "One task, start to finish",
        desc: "Agents that gather context, plan the steps, use their tools and hand back a result.",
        tone: "dark",
        asset: "[ WORKFLOW AGENTS — workflow recording ]", image: "/media/agents/index-workflow.jpg",
      },
      {
        name: "Automation",
        href: "/agents/automation",
        title: "Routine work, handled reliably",
        desc: "Well-understood tasks, automated plainly, with judgement kept for the cases that need it.",
        tone: "light",
        asset: "[ AUTOMATION — automation recording ]", image: "/media/agents/index-automation.jpg",
      },
      {
        name: "Experiments",
        href: "/agents/experiments",
        title: "Prototypes and open questions",
        desc: "Things we are trying, labelled with what we learned and what is still unknown.",
        tone: "mid",
        asset: "[ EXPERIMENTS — experiment footage ]", image: "/media/agents/index-experiments.jpg",
      },
      {
        name: "Conventional & Multi-tool Systems",
        href: "/agents/systems",
        title: "Classic software and many-tool agents",
        desc: "Deterministic software where certainty matters, and agents that reach many tools where flexibility does.",
        tone: "dark",
        asset: "[ SYSTEMS — system diagram ]", image: "/media/agents/index-systems.jpg",
      },
    ],
  },
  detail: {
    kind: "steps",
    title: "Understand. Then act.",
    steps: [
      { title: "Understand", image: "/media/agents/step-1.jpg", alt: "A person reading a printed message with a highlighter in hand.", body: "Work out what the person actually wants, and what is still missing." },
      { title: "Plan", image: "/media/agents/step-2.jpg", alt: "Three sticky notes placed in a row as a plan.", body: "Break the job into steps and decide what to find out first." },
      { title: "Use tools", image: "/media/agents/step-3.jpg", alt: "A hand working across a phone, a calculator and a laptop.", body: "Reach the maps, messages and data the job needs, and read the results." },
      { title: "Verify", image: "/media/agents/step-4.jpg", alt: "A person checking a printed page against a laptop screen.", body: "Check the work against something real before relying on it." },
      { title: "Act", image: "/media/agents/step-5.jpg", alt: "A hand posting a sealed envelope into a post box.", body: "Carry out the work within limits agreed in advance." },
      { title: "Report", image: "/media/agents/step-6.jpg", alt: "A short printed summary placed on a desk beside a coffee.", body: "Hand back the result with a record of what was done and why." },
    ],
  },
  band: {
    title: "The intelligence behind it.", image: "/media/agents/band.jpg", imageAlt: "A small operations room at dusk, seen from the back.",
    body: "An agent is only as good as the context it is given and the checks it runs.",
    href: "/intelligence",
    action: "See Intelligence",
  },
};
