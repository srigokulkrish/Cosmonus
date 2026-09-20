// Copy for the Company pages, from raw/handoff/design/Company-*.dc.html. Where a board block
// needed owner facts we do not have (founders, dates, open roles), it is replaced with copy that
// stays true without them. [BRACKETED] text is an owner placeholder: keep it visible, never invent it.

import type { BorderedCardData } from "@/components/company/BorderedCards";
import type { LinkCardData } from "@/components/company/LinkCards";
import type { Row } from "@/components/company/RowList";
import type { StatusKeyItem } from "@/components/company/StatusKey";
import type { Step, StripLink } from "@/components/ui/Section";

const strip = {
  about: { name: "About", href: "/company/about", desc: "Who we are and why." },
  research: { name: "Research", href: "/company/research", desc: "What we are learning." },
  blog: { name: "Blog", href: "/company/blog", desc: "Things worth explaining, in plain language." },
  careers: { name: "Careers", href: "/company/careers", desc: "Work on the real world." },
} satisfies Record<string, StripLink>;

export const about = {
  meta: {
    title: "About",
    description: "Cosmonus is the parent company behind StayOnMap, Happenous and the research that connects them.",
  },
  hero: {
    video: "/media/about/banner.mp4",
    title: "We build for the world outside the screen.",
    lead: "Cosmonus is the parent company behind StayOnMap, Happenous and the research that connects them.",
  },
  intro: {
    label: "About",
    title: "Building Real-World Intelligence.",
    body: "Most software understands text. Very little of it understands a street, a home, or a group of people deciding what to do this evening. Cosmonus exists to close that gap — through products people use, a studio that makes them, and research into what it takes for systems to understand the physical world.",
  },
  madeOf: {
    title: "What Cosmonus is made of",
    rows: [
      { name: "Studio", href: "/studio/web", desc: "The creative practice behind every product: web, animation, image generation and video." },
      { name: "Product", href: "/product/stayonmap", desc: "StayOnMap and Happenous, both built on knowing where you are." },
      { name: "Intelligence", href: "/intelligence/spatial", desc: "Spatial intelligence and Trust Score." },
      { name: "Agents", href: "/agents/workflow", desc: "Systems that turn understanding into finished work." },
      { name: "Research", href: "/company/research", desc: "What we are learning, published as we go." },
      { name: "Blog", href: "/company/blog", desc: "The ideas behind how we build, explained in plain language." },
    ] satisfies Row[],
  },
  why: {
    label: "Why",
    title: "We start with problems, not technologies.",
    paragraphs: [
      "We look at something ordinary — finding a place to live, deciding what to do this evening — and ask why it still works the way it does. Could it be simpler? Could it understand more about where you are and who you are with? Could the technology disappear into the experience?",
      "Then we build. Some ideas become products, some become research, some stay experiments. We keep all of it under one roof so that what we learn in one place makes the others better.",
    ],
  },
  principles: {
    title: "How we think",
    steps: [
      { title: "Problems first", body: "We choose the problem before the tool. A new model is only interesting if it makes something real better." },
      { title: "The world is the test", body: "Streets, homes and groups of people are where our work is judged, so that is where we test it." },
      { title: "Simpler, then smarter", body: "We remove steps before we add intelligence. Often the most useful change is the one nobody notices." },
      { title: "Readable systems", body: "When software makes a judgement, a person should be able to see why and check the result." },
      { title: "Say only what is true", body: "We describe what we have built, label what is still an experiment, and publish what did not work." },
      { title: "One practice", body: "Design, film, engineering and research sit together, because the best ideas cross those lines." },
    ] satisfies Step[],
  },
  parts: {
    title: "The three parts",
    lead: "Products people use, a studio that makes them, and research into what it takes for software to understand the physical world.",
    cards: [
      {
        label: "Products",
        title: "StayOnMap and Happenous",
        body: "Rentals on the map, with a TrustScore on every listing; and activities near you, with the people who want to do them.",
        href: "/product",
        action: "See the products",
      },
      {
        label: "Studio",
        title: "Made in-house",
        body: "Web, animation, image generation and video for StayOnMap, Happenous and Cosmonus itself.",
        href: "/studio",
        action: "See the studio",
      },
      {
        label: "Research",
        title: "Published as we go",
        body: "Notes on place, trust and the agents we build, including what did not work. Conceptual work is labelled as conceptual.",
        href: "/company/research",
        action: "Read the research",
      },
    ] satisfies LinkCardData[],
  },
  // The notes themselves come from content/research.ts (newest first).
  latest: {
    title: "Research we are doing",
    lead: "The newest notes from our research, each labelled with how far along it is.",
    href: "/company/research",
    action: "Read all research",
  },
  more: [strip.research, strip.careers],
};

export const research = {
  meta: {
    title: "Research",
    description: "What we are learning about real-world intelligence.",
  },
  hero: {
    video: "/media/research/banner.mp4",
    title: "Research",
    lead: "What we are learning about real-world intelligence.",
  },
  intro: {
    label: "Research",
    title: "We publish what we learn, including what did not work.",
    body: "Our research follows our products: questions about place and trust that come up when software meets the physical world. Notes appear here as they are ready.",
  },
  statusKey: {
    label: "Status",
    title: "How to read a note",
    items: [
      { name: "In progress", body: "Work that is under way. The note describes what we have so far and what is still open, and it is updated as the work moves." },
      { name: "Conceptual", body: "A position or a sketch. Nothing described in it is running yet, and it has not been tested; we publish it because it shapes decisions we are making now." },
      { name: "Published", body: "Finished work. The note describes something that exists now, not something planned." },
    ] satisfies StatusKeyItem[],
  },
  // The note rows themselves come from content/research.ts.
  notes: { title: "Notes", allLabel: "All notes" },
  more: [strip.about, strip.blog],
};

/**
 * Blog is the teaching side of the company: ideas and terms explained for anyone who wants to learn them.
 * Research is the other side — what we are finding out about our own products and process.
 *
 * The blog does not use the section template: no banner film, a masthead instead, a lead story and a card
 * grid (see wiki/design-system.md). So this block has no `hero`/`intro` — it has a masthead.
 */
export const blog = {
  meta: {
    title: "Blog",
    description: "Plain explanations of the ideas behind the way we build.",
  },
  masthead: {
    label: "Blog",
    title: "Written to be understood, not to sound clever.",
    lead: "Explanations of the ideas behind AI engineering and the ways of working behind what we build. Each post starts from the beginning, assumes you have not read the others, and uses ordinary words wherever ordinary words will do.",
  },
  featuredLabel: "Start here",
  listTitle: "More posts",
  allLabel: "All posts",
  more: [strip.research, strip.careers],
};

export const careers = {
  meta: {
    title: "Careers",
    description: "Work on the real world. A small team building for streets, homes and the people in them. No open roles right now — introduce yourself.",
  },
  hero: {
    video: "/media/careers/banner.mp4",
    title: "Work on the real world.",
    lead: "A small team building for streets, homes and the people in them.",
  },
  intro: {
    label: "Careers",
    title: "Small team, real problems.",
    body: "We are early, which means everyone here shapes what Cosmonus becomes. We care about craft, about honesty in what we claim, and about problems that exist outside a screen.",
  },
  values: {
    title: "How we work",
    cards: [
      { title: "Craft", body: "We sweat the details — in code, in film and in copy." },
      { title: "Honesty", body: "We never claim what we have not built." },
      { title: "Outdoors", body: "We test things where they are used: on streets, in homes, with people." },
    ] satisfies BorderedCardData[],
  },
  people: {
    title: "Who we look for",
    lead: "People who cross boundaries. Work here moves between design, engineering, AI, research, film and product — usually more than one at once.",
    items: [
      "A designer who codes.",
      "An engineer who cares about interaction.",
      "A researcher who prototypes.",
      "A filmmaker interested in technology.",
      "A product thinker obsessed with real problems.",
    ],
  },
  roles: {
    title: "No open roles right now.",
    body: "But interesting people are always worth meeting. Tell us what you would build, and show us something you have made.",
    href: "/contact?topic=careers",
    action: "Introduce yourself",
  },
  hiring: {
    title: "How we hire",
    steps: [
      { title: "Introduce yourself", body: "Tell us what you would build, and show us something you have made. The contact page is the place to start." },
      { title: "A conversation about the work", body: "We talk about what you have made, how you made it, and the problems here you would want to work on." },
      { title: "Meet the team", body: "You meet the people you would work with, and ask them whatever you want to know about how we work." },
    ] satisfies Step[],
  },
  more: [strip.about, strip.research],
};
