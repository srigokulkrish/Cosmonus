import type { ArticleSection } from "@/components/ui/ArticleBody";
import type { Tone } from "@/components/ui/MediaPanel";

/**
 * Research notes, experiments and company news, shown on /company/research, its detail pages
 * and the home Research section. The array is ordered newest first.
 *
 * Honesty rule: a note only claims what the work has actually produced. Speculative work is
 * labelled "Conceptual". No names, dates, numbers or partners are stated here as fact.
 */

export type NoteKind = "Research note" | "Company news" | "Experiment";

export type NoteArea = "Spatial Intelligence" | "Trust Score" | "Agents" | "Studio";

export type NoteStatus = "In progress" | "Conceptual" | "Published";

export type NoteSection = ArticleSection;

export type Note = {
  slug: string;
  kind: NoteKind;
  area: NoteArea;
  status: NoteStatus;
  title: string;
  /** One sentence. Used as the lead, the row description and the meta description. */
  summary: string;
  cover: { tone: Tone; label: string };
  body: NoteSection[];
};

/** Where each area lives on the site. */
export const areaHref: Record<NoteArea, string> = {
  "Spatial Intelligence": "/intelligence/spatial",
  "Trust Score": "/intelligence/trust-score",
  Agents: "/agents/workflow",
  Studio: "/studio/web",
};

export const notes: Note[] = [
  {
    slug: "where-a-listing-really-is",
    kind: "Research note",
    area: "Spatial Intelligence",
    status: "In progress",
    title: "Where a listing says it is, and where it really is",
    summary: "A written address and a point on a map are two different claims about a home. We are learning to treat the gap between them as information.",
    cover: { tone: "dark", label: "[ COVER — address vs. pin, map detail ]" },
    body: [
      {
        paragraphs: [
          "StayOnMap puts every home where it really is. That sounds like a solved problem until you look at how homes are actually described. An owner types an area name that covers several neighbourhoods. A landmark is used instead of a street. A pin is dropped from wherever the owner happened to be standing when they posted.",
          "Each of these is a claim about location, and they do not always agree. This note is about what we do when they don't.",
        ],
      },
      {
        heading: "Two claims, not one",
        paragraphs: [
          "Our first instinct was to pick the most precise source and discard the rest. We now think that loses something. When a written address and a pin disagree, the disagreement itself is useful: sometimes it is a typing mistake, sometimes it means the home is on the edge of an area whose name carries a different price, and occasionally it means the listing is not what it appears to be.",
          "So instead of resolving location once, we keep both claims and record how far apart they are and in what way. A pin inside the named area is a different situation from a pin two areas away.",
        ],
      },
      {
        heading: "Why surroundings change the question",
        paragraphs: [
          "People do not rent a coordinate. They rent a walk to the station, a street that is quiet or loud at night, a shop at the corner. The same home described with the wrong area name can look like a bargain or a mistake depending on what the reader assumes is nearby.",
          "That is why location sits underneath everything else we build. If the place is wrong, the surroundings are wrong, and any answer a system gives about the home inherits the error.",
        ],
      },
      {
        heading: "What we are still working out",
        paragraphs: [
          "We have not settled how a disagreement should be shown to someone searching. Flagging every mismatch would bury people in warnings about typing errors. Hiding them would remove one of the clearest signals we have. Our current direction is to let the gap feed into Trust Score quietly, and only surface it when it is large enough to change a decision.",
          "We will publish what we learn as the work produces it, including the parts that do not hold up.",
        ],
      },
    ],
  },
  {
    slug: "listing-from-a-message",
    kind: "Experiment",
    area: "Agents",
    status: "In progress",
    title: "From a message to a listing someone can check",
    summary: "An experiment in letting a workflow agent turn a loosely written message into a structured listing, while the owner stays the one who confirms it.",
    cover: { tone: "mid", label: "[ COVER — message to listing, screen recording ]" },
    body: [
      {
        paragraphs: [
          "On StayOnMap today, owners create a listing themselves: photos, details and house rules. But many owners already describe their homes somewhere else first — in their own words, often in a few short messages with some photos in between.",
          "A listing needs structure — rent, deposit, BHK, furnishing, location, amenities, rules — and a conversation rarely arrives in that shape. This experiment asks how much of the structuring an agent could do from such a message, and where it should stop.",
        ],
      },
      {
        heading: "The shape of the task",
        paragraphs: [
          "We treat it as one job owned end to end, which makes it a workflow agent rather than a single reply. The agent reads everything the owner has sent, plans what is still missing, asks only for those things, and assembles a draft.",
          "Crucially, it does not publish. It hands the draft back to the owner with each field marked as either taken from their words or inferred. The owner confirms or corrects, and only then does the listing go live.",
        ],
      },
      {
        heading: "What we have noticed so far",
        paragraphs: [
          "The hard part is not extraction. It is knowing when a detail is genuinely absent rather than implied. An owner who does not mention a deposit may mean there isn't one, or may simply not have thought to say. Guessing either way produces a listing that looks complete and is wrong.",
          "We have found it better for the agent to ask one clear question than to fill a field confidently. That makes the conversation slightly longer and the listing noticeably more honest.",
        ],
      },
      {
        heading: "Open questions",
        paragraphs: [
          "How many questions is too many before an owner gives up? Which fields are worth asking about, and which can safely stay blank? How should corrections from owners feed back into the next draft?",
          "This is an experiment, not a finished feature. We will describe what ships when it ships.",
        ],
      },
    ],
  },
  {
    slug: "a-new-site-from-our-own-studio",
    kind: "Company news",
    area: "Studio",
    status: "Published",
    title: "A new Cosmonus site, made in our own studio",
    summary: "We rebuilt this site around the four things we actually do: products, intelligence, agents and the studio that makes them.",
    cover: { tone: "light", label: "[ COVER — site overview, still ]" },
    body: [
      {
        paragraphs: [
          "This site has been rebuilt from the ground up. The old one grew page by page as ideas arrived. The new one is organised around what Cosmonus does, so that someone arriving for the first time can see the whole company in a few minutes.",
        ],
      },
      {
        heading: "How it is organised",
        paragraphs: [
          "Product is where StayOnMap and Happenous live — the things people use. Intelligence covers the two disciplines those products depend on: spatial intelligence and Trust Score. Agents covers the systems that turn that understanding into finished work. Studio is the craft behind all of it: web, animation, image generation and video.",
          "Company holds the rest: who we are, how to work with us, and this research section.",
        ],
      },
      {
        heading: "Made in-house",
        paragraphs: [
          "The design, the build and the motion were all done by our own studio. That matters to us. The surface of a product is part of the product, and a company that cares about how software meets the physical world should be able to show it on its own front page.",
          "Some places on the site still carry bracketed placeholders — films, photographs and a few facts we have not yet published. We would rather leave a visible gap than fill it with stock imagery or claims we cannot stand behind. They will be replaced as the real material is ready.",
        ],
      },
      {
        heading: "Research, published as we go",
        paragraphs: [
          "The biggest change is this section. Research used to be something we talked about. Now it is a place where we write down what we are learning — research notes, experiments and the occasional piece of company news — each one labelled with how far the work has got.",
          "Conceptual work is marked as conceptual. Nothing here claims a result it has not earned.",
        ],
      },
    ],
  },
  {
    slug: "a-score-with-its-reasons",
    kind: "Research note",
    area: "Trust Score",
    status: "In progress",
    title: "A score is only useful if it shows its reasons",
    summary: "Why TrustScore on StayOnMap travels with the reasons behind it, and what we have had to give up to keep it readable.",
    cover: { tone: "light", label: "[ COVER — score with reasons, UI detail ]" },
    body: [
      {
        paragraphs: [
          "A single number is easy to read and easy to misread. When people see a score on a listing, they want to know one thing quickly: can I rely on this? But the moment the number surprises them, they want to know why — and a bare number has nothing to say.",
          "This note sets out the principle we are designing TrustScore around, and the trade-offs that come with it.",
        ],
      },
      {
        heading: "Reasons travel with the number",
        paragraphs: [
          "Every score we show is meant to carry its reasons with it. Not a full audit trail, but the few things that moved it most, written in plain language. A score that is lower because the location claims disagree should say so. A score that is higher because details have been confirmed should say that too.",
          "This changes what a score is for. It stops being a verdict and becomes the start of a decision the person still makes for themselves.",
        ],
      },
      {
        heading: "What we have given up",
        paragraphs: [
          "Showing reasons constrains which signals we can use. A signal that cannot be explained in a sentence is hard to justify, even if it would make the number slightly more accurate. We have chosen legibility over that last bit of precision, deliberately.",
          "It also means the score has to be stable enough to explain. A number that jumps around for reasons nobody can name erodes exactly the trust it is supposed to describe.",
        ],
      },
      {
        heading: "Scores should move when the world does",
        paragraphs: [
          "The opposite failure is a score that never changes. A home that was accurately described once may not be accurately described now. We are working out how and when scores should be revisited, and how to show that a reason is recent rather than inherited from an old listing.",
          "The specific signals and update rules are still being settled, and we will describe them here when they are.",
        ],
      },
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

/** The newest note of each kind, in the order research → news → experiment. */
export function latestByKind(): Note[] {
  const kinds: NoteKind[] = ["Research note", "Company news", "Experiment"];
  return kinds.map((k) => notes.find((n) => n.kind === k)).filter((n): n is Note => n !== undefined);
}
