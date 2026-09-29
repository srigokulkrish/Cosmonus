// Typed content for the two Product pages. The structure started from raw/handoff/design/Product-StayOnMap.dc.html
// and Product-Happenous.dc.html; since 2026-09-28 the copy is rewritten from the products' own repositories
// (~/Desktop/StayOnMap and ~/Desktop/happenous) — see wiki/content.md "Product sources" for what each claim rests on.
// [BRACKETED] text is an owner-supplied placeholder: keep it visible, never fill it in.
// Nothing here may go beyond what those repositories show is built. Happenous is built but not launched, and
// every Happenous section says so; StayOnMap claims are limited to what is live in production.

import type {
  CheckInContent,
  CloseContent,
  HappeningContent,
  Headline,
  HeroContent,
  HostContent,
  TileItem,
} from "@/components/happenous/Happenous";
import type { FaqItem } from "@/components/product/Faq";
import type { LinkGroup } from "@/components/product/LinkGroups";
import type {
  CloseContent as SxClose,
  Headline as SxHeadline,
  HeroContent as SxHero,
  PanelSection,
  TileItem as SxTile,
} from "@/components/stayonmap/StayOnMap";
import type { SplitColumn } from "@/components/product/Split";
import type { StripLink } from "@/components/ui/Section";
import { getNote } from "@/content/research";

/** A research note as a rule link; title, kind and status come from content/research.ts. */
function noteLink(slug: string): StripLink {
  const n = getNote(slug);
  if (!n) throw new Error(`Unknown research note: ${slug}`);
  return { name: n.title, href: `/company/research/${n.slug}`, desc: `${n.kind} · ${n.status}`, image: n.cover.image };
}

const capability = {
  spatial: { name: "Spatial Intelligence", href: "/intelligence/spatial", desc: "Knowing where things are, and why it matters.", image: "/media/intelligence/index-spatial.jpg" },
  trust: { name: "Trust Score", href: "/intelligence/trust-score", desc: "A readable signal for how far something can be relied on.", image: "/media/trust-score/band.jpg" },
  workflow: { name: "Workflow Agents", href: "/agents/workflow", desc: "Agents that carry one task from start to finish.", image: "/media/agents/index-workflow.jpg" },
} satisfies Record<string, StripLink>;

type BuiltOn = { title: string; lead: string; groups: LinkGroup[] };
type Faq = { title: string; items: FaqItem[] };
type Story = { label: string; title: string; paragraphs: string[] };
type Audiences = { title: string; lead: string; columns: SplitColumn[] };

/** StayOnMap is drawn with its own UI (components/stayonmap), not photographs. */
export type StayOnMapContent = {
  meta: { title: string; description: string };
  hero: SxHero;
  intro: { label: string; title: string; body: string };
  story: Story;
  different: { label: string; title: SxHeadline; cards: SxTile[] };
  how: { label: string; title: SxHeadline; steps: SxTile[] };
  audiences: Audiences;
  neighbourhood: PanelSection;
  reading: PanelSection;
  builtOn: BuiltOn;
  faq: Faq;
  close: SxClose;
  more: { label: string; links: StripLink[] };
};

/** Happenous is drawn with its own UI (components/happenous), not photographs, so its shape differs. */
export type HappenousContent = {
  meta: { title: string; description: string };
  hero: HeroContent;
  intro: { label: string; title: string; body: string };
  idea: { label: string; title: Headline; cards: TileItem[] };
  happening: HappeningContent;
  how: { label: string; title: Headline; steps: TileItem[] };
  checkin: CheckInContent;
  host: HostContent;
  why: Story;
  safety: { label: string; title: Headline; lead: string; cards: TileItem[] };
  builtOn: BuiltOn;
  faq: Faq;
  close: CloseContent;
  more: { label: string; links: StripLink[] };
};

// Section headlines follow StayOnMap's own copy; the drawn listings, prices, people and facts are examples,
// and every drawing says so.
export const stayonmap: StayOnMapContent = {
    meta: {
    title: "StayOnMap",
    description:
      "Broker-free rentals on a map, live across seven states in India. Owners list free, tenants talk to them directly, and nobody pays to see a house.",
  },
  hero: {
    eyebrow: "Live in 47 cities across India",
    title: ["Find your home.", "Skip the broker."],
    lead: "Every home on a map, rent on every pin. Talk to the owner directly — zero commission.",
    primary: { href: "https://www.stayonmap.com", label: "Open the map" },
    secondary: { href: "#how", label: "How it works" },
    facts: ["No broker fees", "Owners list free", "47 cities"],
    figure:
      "An example of the StayOnMap map: a search bar and filters for rent, budget, BHK and furnishing above a map of rent pins coloured by property type, two clusters of homes, and a listing card for a 3 BHK flat near the metro at ₹24,000 a month. Example listings, not live ones.",
  },
    intro: {
    label: "StayOnMap",
    title: "Helping people find a home, without paying someone to find it for them.",
    body: "Look for a flat in an Indian city and you are soon asked to pay: to see the address, then for the owner's number, then a month's rent to the broker who arranged it all. StayOnMap takes the broker out. Owners list free, tenants see every listing free, and the two talk directly — on a map that shows where every home really is.",
  },
    story: {
    label: "Why it exists",
    title: "Trust was what the brokers were selling.",
    paragraphs: [
      "Brokers last in India's rental market because neither side knows who to trust. A tenant cannot tell a real listing from bait; an owner cannot tell a serious tenant from a time-waster. A month's rent in commission is the price of someone vouching for both.",
      "StayOnMap replaces that vouching with things you can check for yourself: reviews from the people who lived in a home, automatic checks that catch the same flat listed twice or the same photos reused, and facts about the neighbourhood that say where they came from.",
      "It is live across seven states — Delhi, Maharashtra, West Bengal, Tamil Nadu, Karnataka, Telangana and Gujarat — in forty-seven cities, from the big metros to the cities around them. A town that is not on the list yet can join the waitlist.",
    ],
  },
  different: {
    label: "What makes it different",
    title: ["Rent with", "intelligence."],
    cards: [
      {
        scene: "pins",
        label: "A map of rent pins coloured by property type — apartments, a PG, a house, a short stay — and a cluster of four homes.",
        title: "Map-first",
        body: "The map is the product. Pins carry the rent, take the colour of the property type, cluster as you zoom out and filter by budget, BHK, furnishing and area — or switch to a list when you would rather scroll.",
      },
      {
        scene: "card",
        tone: "jade",
        label: "An example listing card: ₹24,000 a month, a 3 BHK apartment, semi-furnished, with a Verified Owner badge.",
        title: "Trust you can check",
        body: "Every home carries a score from the people who lived there, and reports feed a separate risk score that can take a listing down before anyone visits.",
      },
      {
        scene: "chat",
        label: "An example chat between a tenant and an owner about a visit on Saturday.",
        title: "No broker, no commission",
        body: "Owners list free, with no cap on how many homes. Tenants see every listing free. Chat, visits and the agreement happen between the two of them.",
      },
    ],
  },
  how: {
    label: "How it works",
    title: ["Three steps.", "Nobody in between."],
    steps: [
      {
        scene: "browse",
        label: "The map with a search bar and filters, your location, and three rent pins nearby.",
        title: "Browse the map",
        body: "Open the map in your city and see homes where they really are, with the rent on every pin. Filter until only the ones that fit are left.",
      },
      {
        scene: "visit",
        tone: "jade",
        label: "The visit picker: Saturday the 10th and 11:30 AM chosen, and a Request visit button.",
        title: "Request a visit",
        body: "Open a pin for the full details and the neighbourhood around it, then pick a day and a time to go and see it.",
      },
      {
        scene: "agree",
        label: "A chat with the owner, then a rental agreement offered in the app, ready to sign.",
        title: "Talk and agree",
        body: "Chat with the owner directly. When you both agree, the owner offers the rental agreement in the app and you sign it there.",
      },
    ],
  },
    audiences: {
    title: "For tenants and for owners",
    lead: "One account does both. Switch to host mode and the owner tools appear.",
    columns: [
      {
        label: "For tenants",
        title: "Find a home without paying someone to vouch for it.",
        points: [
          "Browse the map in your area with the rent on every pin, or look at what is near you.",
          "Open a listing for BHK, furnishing, amenities, house rules, photos and what the neighbourhood is like.",
          "Request a visit on a day and time that suits you, and chat with the owner directly.",
          "When a tenancy ends, you and the owner review each other blind, and those reviews build your rental résumé.",
        ],
      },
      {
        label: "For owners",
        title: "List directly and deal with tenants yourself.",
        points: [
          "List any of six kinds of property — flats, houses, plots, PGs, shops and short stays — free, with no cap on listings.",
          "Keep the exact address private if you want: the street is hidden and the pin moves to within about 150 metres.",
          "Accept, reject or reschedule visit requests and answer tenants, all from one place.",
          "Offer the rental agreement in the app and follow it through to the tenant signing.",
        ],
      },
    ],
  },
  neighbourhood: {
    label: "The neighbourhood",
    title: ["What the neighbourhood", "is really like."],
    lead: "A listing tells you about a flat. StayOnMap also tells you about the streets around it — and every fact says whether it was measured, calculated or estimated.",
    points: [
      { title: "Getting around", body: "The nearest metro station and its line, and the bus stops close by. Distances are shown as distances, never as guessed walking times." },
      { title: "Daily life", body: "Groceries, pharmacies, hospitals, schools and banks near the home." },
      { title: "Air", body: "What the air is like now, and what it has been like over the last ninety days." },
      { title: "Where exactly", body: "The ward, zone and municipality a home falls in, and how high it sits compared with its surroundings. Where the data is thin, the card says what we do not know." },
    ],
    figure:
      "An example of the neighbourhood card on a listing: nearest metro, bus stops, groceries, air quality over 90 days, ward and elevation, each marked Measured, Calculated or Estimated.",
  },
  reading: {
    label: "Trust",
    title: ["A score from the people", "who lived there."],
    lead: "A trust number nobody can question is just a number. StayOnMap keeps every part of it plain: what goes in, what it can do, and what it cannot.",
    points: [
      {
        title: "StayScore",
        body: "Reviewers rate a home on twelve things — safety, cleanliness, the neighbourhood, water, noise, internet, parking, transport, maintenance, the owner, security and power backup — weighted into one score out of five. A home with no reviews has no score yet, rather than a made-up one.",
      },
      {
        title: "A separate risk score",
        body: "Reports and fraud signals feed a risk score. When serious reports from more than one person push it past the threshold, the listing is suspended automatically. People see the risk level, never a raw number.",
      },
      {
        title: "Fraud checks on every listing",
        body: "Listings are checked for the patterns fake ones leave: the same address listed twice, another listing within 50 metres, reused photos, a shared owner phone number and copied descriptions.",
      },
      {
        title: "Badges that have to be earned",
        body: "Badges such as Verified Owner and Community Trusted need verification behind them. Warnings — Under Review, Needs Attention, Suspicious — are shown just as plainly.",
      },
    ],
    figure:
      "An example StayScore: 4.4 out of 5 from 7 reviews, 86% recommend, Verified Owner and Community Trusted badges, ratings for safety, cleanliness, water and the owner, and a low risk level.",
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
        a: "No. Owners list free, tenants browse free, and nobody takes a commission on a tenancy. StayOnMap is not a broker, agent or landlord, and is not a party to any tenancy.",
      },
      {
        q: "Does StayOnMap take any money?",
        a: "No. Rent and deposits are between you and the owner; nothing is paid through StayOnMap.",
      },
      {
        q: "Where does it work?",
        a: "In forty-seven cities across seven states: Delhi, Maharashtra, West Bengal, Tamil Nadu, Karnataka, Telangana and Gujarat. If your town is not listed yet, you can join the waitlist.",
      },
      {
        q: "What kinds of property are listed?",
        a: "Six: flats, houses, plots, PGs, shops and short stays, each priced as monthly rent or a lump-sum lease. Every listing carries BHK, furnishing, amenities, rules and photos.",
      },
      {
        q: "What does the StayScore tell me?",
        a: "What the people who lived in a home thought of it, across twelve ratings from safety to power backup, weighted into one score out of five. No reviews means no score yet.",
      },
      {
        q: "What happens to a high-risk listing?",
        a: "Reports and fraud signals feed a separate risk score. Once serious reports from more than one person push it past the threshold, the listing is suspended automatically, before anyone else visits.",
      },
      {
        q: "Are my chats private?",
        a: "Chats are between you and the other person, and nobody else can post in them. They are not end-to-end encrypted: StayOnMap staff may review them for safety, fraud prevention and dispute resolution.",
      },
      {
        q: "Do I need separate tenant and owner accounts?",
        a: "No. Every account is both. Switch to host mode and the owner tools appear.",
      },
    ],
  },
  close: {
    title: "See it on the map.",
    body: "Browse homes across seven states, request a visit and talk to the owner directly — no broker in between.",
    href: "https://www.stayonmap.com",
    action: "Visit StayOnMap",
  },
  more: {
    label: "More in Product",
    links: [{ name: "Happenous", href: "/product/happenous", image: "/media/home/product-happenous.jpg", desc: "Stay close to the things you love doing." }],
  },
};

// Section headlines and the drawn examples follow happenous's own website (apps/web/index.html). The
// Activities and people drawn are examples — the page says so — never live listings or real accounts.
export const happenous: HappenousContent = {
  meta: {
    title: "Happenous",
    description:
      "An activity-first social network for meeting people in real life, being readied for launch in India. Find something happening near you, join the people doing it, and keep doing what you love.",
  },
  hero: {
    eyebrow: "Coming soon · India · Android and iPhone",
    title: ["Less scrolling.", "More doing."],
    lead: "Find what's happening near you. Join the Crew. Go.",
    fine: "Not open yet — launching later in 2026.",
    primary: { href: "https://www.happenous.com", label: "See happenous.com" },
    secondary: { href: "#how", label: "How it will work" },
    figure:
      "An example of the Happening tab in the Happenous app: a sunrise run, badminton doubles, a book swap and a Sunday ride nearby, each with the people going. Around the phone, labels for other things happening. Example Activities and people, not real ones.",
  },
  intro: {
    label: "Happenous",
    title: "Stay close to the things you love doing.",
    body: "Most plans don't fail because nobody wanted to go. They fail because the friends who said “we should” never found the same Saturday. Meanwhile, a few kilometres away, somebody is already going. Happenous puts those two people in the same place — and keeps them coming back to the run, the board-game night or the Sunday ride they found there. It is not open yet: this page describes what we have built and are getting ready to launch.",
  },
  idea: {
    label: "The idea",
    title: ["Meet around", "something real."],
    cards: [
      {
        scene: "activity",
        colour: "sun",
        label: "An example Activity card: a sunrise run in Besant Nagar, today at 6:30 AM, 4 going.",
        title: "Activities, not posts",
        body: "The unit of Happenous is an Activity: something to do, with a place, a time and a Host. You don't follow people first. You do something together first.",
      },
      {
        scene: "area",
        label: "A map showing only an approximate area, about 3 km across, for an Activity in Besant Nagar.",
        title: "Happening around you",
        body: "See what is on today, this weekend or nearby, by interest or on a map. Activities show an approximate area; the exact meeting point goes only to the people who are in.",
      },
      {
        scene: "code",
        colour: "mint",
        label: "A six-character check-in code, K7P Q4X, and 4 of 5 of the Crew checked in.",
        title: "Showing up is the point",
        body: "The Host checks people in with a code that changes every five minutes. Happenous is designed to reward what you do in the real world, never time spent in the app.",
      },
    ],
  },
  happening: {
    label: "Happening",
    title: ["Happening", "around you."],
    lead: "Happening is the tab you open when you want to do something. For You, Nearby, Today, Weekend — and a map.",
    points: [
      "Choose at least three interests and your city when you start.",
      "Read what an Activity needs — requirements, house rules, cost, difficulty — before you ask to join.",
      "If it is full, join the waitlist. If you can't make it after all, say so.",
    ],
    examples: [
      {
        c: "sun", icon: "footprints", category: "Running", when: "Today · 6:30 AM", title: "Sunrise run", where: "Besant Nagar",
        crew: [{ initial: "M", hue: "violet" }, { initial: "A", hue: "teal" }, { initial: "P", hue: "rose" }, { initial: "K", hue: "azure" }], state: "4 going",
      },
      {
        c: "grass", icon: "feather", category: "Badminton", when: "Tonight · 7:00 PM", title: "Doubles at the club", where: "Anna Nagar",
        crew: [{ initial: "R", hue: "lime" }, { initial: "D", hue: "marigold" }], state: "2 spots left",
      },
      {
        c: "lav", icon: "book-open", category: "Reading", when: "Saturday · 10:30 AM", title: "Book swap in the park", where: "Kotturpuram",
        crew: [{ initial: "S", hue: "magenta" }, { initial: "I", hue: "clay" }, { initial: "N", hue: "azure" }], more: 2, state: "5 going", calm: true,
      },
    ],
    categories: [
      { c: "sun", icon: "footprints", name: "Running" },
      { c: "sky", icon: "bike", name: "Cycling" },
      { c: "grass", icon: "feather", name: "Badminton" },
      { c: "peach", icon: "coffee", name: "Coffee" },
      { c: "mint", icon: "camera", name: "Photography" },
      { c: "lav", icon: "book-open", name: "Reading" },
      { c: "blush", icon: "palette", name: "Creative" },
      { c: "lav", icon: "flower-2", name: "Yoga" },
      { c: "sun", icon: "mountain", name: "Trekking" },
      { c: "peach", icon: "dices", name: "Board games" },
    ],
    more: "and about forty more",
    note: "Examples of what people will host, not live listings. Happenous is not open yet.",
  },
  how: {
    label: "How it is meant to work",
    title: ["Three steps.", "The second one happens offline."],
    steps: [
      {
        scene: "find",
        colour: "sun",
        label: "An example Activity in the Happening list: a sunrise run, today at 6:30 AM, about 2 km away.",
        title: "Find an Activity",
        body: "See what is happening around you — a run, a film, a workshop, a game of badminton. Ask to join; the Host says yes, and the exact meeting point and Crew chat open.",
      },
      {
        scene: "here",
        colour: "lav",
        label: "At the meeting point: 4 of 5 of the Crew are here, with buttons for Running late and Can't find the group.",
        title: "Show up",
        body: "Meet the Crew and check in with the Host's code. On the day, the app helps with the rest: who has arrived, who is running late, where the group is.",
      },
      {
        scene: "review",
        colour: "mint",
        label: "The three review questions: turned up on time, was who they said they were, good to be around.",
        title: "Keep going",
        body: "Afterwards, review the people you actually met, share Moments with the Crew, and add the ones you would go again with as Buddies. Then do it again.",
      },
    ],
  },
  checkin: {
    label: "Check-in",
    title: ["Trust starts with", "showing up."],
    lead: "At the meeting point the Host shows a six-character code. Each person in the Crew enters it once. That check-in is the record that they came — and what stays with you afterwards is built on it.",
    facts: [
      { icon: "star", title: "Reviews", body: "Only between people who both came. Three yes-or-no questions; any note stays private." },
      { icon: "image", title: "Moments", body: "Photos and videos from the day, for the people who were there." },
      { icon: "handshake", title: "Buddies", body: "People you would go again with. One asks, the other says yes — and only Buddies can message you one-to-one." },
      { icon: "award", title: "Recognition", body: "Worked out from what actually happened, never handed out, and never a follower count." },
    ],
    limit: {
      strong: "What it proves, and what it doesn't.",
      body: "A check-in shows that someone in the Crew had the Host's current code during the Activity. It doesn't verify who anyone is — Happenous runs no ID or background checks.",
    },
    figure: "An example of checking in: the six characters K7P Q4X are entered, the app says You're checked in, and 5 of 5 of the Crew are here.",
    under: "The code changes every five minutes.",
  },
  host: {
    label: "Host",
    title: ["Have a plan?", "Make it an Activity."],
    lead: "You don't need to run a club. Say what you're doing, when and where, and who can join. Then decide who comes — nobody joins without your yes.",
    points: [
      "Set it up in three steps: what, when and where, and who.",
      "Open it to everyone, only your Buddies, or only the people you invite.",
      "Accept, decline or waitlist each request.",
      "Edit it while it is live, cancel with a reason, or host it again.",
    ],
    figure: "An example of the Host's first step, What are you doing?: Cycling is chosen, and the Activity is called Sunday ride along the coast.",
  },
  why: {
    label: "Why activities",
    title: "Why activities, not feeds",
    paragraphs: [
      "A feed is made to be scrolled. It rewards whatever keeps you looking, and it measures people by how many others follow them.",
      "An activity asks something different: turn up. It has a place and a time, so the people who join it are the people nearby who want to do the same thing. You find them through what you both love doing — and the next time you want to do it, they are already there.",
      "That is the loop Happenous is designed around: do it, finish it, get a little better, meet someone, do it again. Whether it holds is something we will only know once people are using it.",
    ],
  },
  safety: {
    label: "Safety",
    title: ["Built for meeting people", "you don't know yet."],
    lead: "Meeting new people is the point, so safety is designed in from the start: a set of defaults that run through hosting, joining, meeting and afterwards.",
    cards: [
      {
        scene: "area",
        label: "A map showing only an approximate area about 3 km across.",
        title: "Approximate until you're in",
        body: "Until the Host accepts you, an Activity shows only an area about 3 km across. The exact point goes to the Host and the accepted Crew.",
      },
      {
        scene: "block",
        label: "Two people with the line between them cut: a block.",
        title: "Block and report from anywhere",
        body: "Any profile, Activity, message or Moment can be blocked or reported. On the day, you can share your plan with someone you trust.",
      },
      {
        scene: "number",
        label: "A crossed-out phone, then a siren: your number stays hidden, and in danger you call 112.",
        title: "Your number stays yours",
        body: "Phone numbers are never shown, and strangers can't message you. Happenous is not an emergency service — in danger, call 112.",
      },
      {
        scene: "age",
        label: "A profile marked 18 and over.",
        title: "18 and over",
        body: "Your date of birth is asked the first time you join or host an Activity.",
      },
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
        a: "Not yet. The app is built and being tested, and happenous.com is a holding page. It will launch in India on Android and iPhone.",
      },
      {
        q: "When does it open?",
        a: "Later in 2026. This page will say so when there is a date.",
      },
      {
        q: "What counts as an Activity?",
        a: "Something to do, with a place and a time — running, cycling, badminton, coffee, photography, board games, trekking and about forty more interests.",
      },
      {
        q: "Is it free?",
        a: "Yes. There is nothing to pay for in the app. If an Activity has a cost, the Host says so up front, and Happenous does not handle the money.",
      },
      {
        q: "Can strangers message me?",
        a: "No. One-to-one chat is only between Buddies, and phone numbers are never shown.",
      },
      {
        q: "Does Happenous check who people are?",
        a: "No. Happenous runs no ID or background checks. Check-in shows who was actually there, and reviews come only from people who met.",
      },
      {
        q: "Is there a web version?",
        a: "No. Happenous is an app for Android and iPhone.",
      },
    ],
  },
  close: {
    quiet: "The internet has enough watching.",
    loud: ["Let's go do", "something."],
    title: "Not open yet.",
    body: "Happenous is built and being readied for launch in India. happenous.com is a holding page for now — there is nothing to join there yet.",
    href: "https://www.happenous.com",
    action: "See happenous.com",
  },
  more: {
    label: "More in Product",
    links: [{ name: "StayOnMap", href: "/product/stayonmap", image: "/media/stayonmap/step-1.jpg", desc: "Helping people find a home." }],
  },
};
