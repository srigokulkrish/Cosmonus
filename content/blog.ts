import type { Tone } from "@/components/ui/MediaPanel";
import type { PostSection } from "@/components/blog/PostBody";

/**
 * Blog posts, shown on /company/blog and its detail pages.
 *
 * Blog is where we explain things for people to learn from — ideas, terms and practice, written plainly
 * for a reader outside the field. Research (content/research.ts) is the other thing: what we are finding
 * out about our own products and process. Keep a piece in whichever of the two it actually is.
 *
 * Tags: `Fundamentals` is the vocabulary of AI engineering — the pieces you build with. `Engineering` is the
 * practice — how the pieces are put to work. A post belongs to whichever it actually is.
 *
 * House rule for anything in a series: **every post stands alone.** Most readers arrive on one post from
 * search, so no post is numbered, none refers to a previous or next post, and each opens with enough of the
 * whole picture to be useful on its own. Cross-references name the subject, never a position.
 */

export type PostTag = "Fundamentals" | "Engineering";

export type Post = {
  slug: string;
  tag: PostTag;
  title: string;
  /** One sentence. Used as the lead, the row description and the meta description. */
  summary: string;
  /** ISO date the post went live. Shown on every blog surface and sent to Google as datePublished. */
  published: string;
  cover: { tone: Tone; label: string };
  body: PostSection[];
  /** Outside material a post relies on. Required whenever a post states facts that are not ours. */
  sources?: { name: string; href: string }[];
};

export const posts: Post[] = [
  {
    slug: "ai-models",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "AI models: what they are, and what they are not",
    summary:
      "A model is a machine for guessing what comes next. Understanding that one sentence explains most of what it is good at and almost everything it gets wrong.",
    cover: {
      tone: "dark",
      label: "[ COVER — a sentence being continued, one word at a time ]",
    },
    body: [
      {
        paragraphs: [
          "Almost everything else in AI engineering sits around a model, so it is worth being clear about what one actually is. The short version is stranger and simpler than most explanations make it sound: a model is a machine for guessing what comes next.",
          "Think of someone who has read an enormous amount — more than any person could — and has come away with a very good sense of how sentences tend to go. Ask them a question and they do not look anything up. They continue the text in the way that best fits everything they have ever read. That is the whole trick.",
          "It sounds far too simple to be useful. It turns out that guessing the next word well enough, often enough, looks a great deal like knowing things.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "A very large pattern-matcher trained on text, which continues whatever it is given in the most fitting way it can.",
          },
          {
            name: "Why",
            body: "It is the only piece that can handle language it has never seen before — messy, half-finished, human input that no set of rules could cover.",
          },
          {
            name: "When",
            body: "When the job involves reading or writing language and the inputs vary too much for ordinary code to handle.",
          },
          {
            name: "How",
            body: "Treat it as one component with known limits, not as a brain. Give it clear instructions, the right information, a way to check its work and a defined set of things it may do.",
          },
        ],
      },
      {
        heading: "A machine for the next word",
        paragraphs: [
          "During training, a model is shown staggering amounts of text with parts hidden, and adjusted, over and over, until its guesses about the hidden parts get good. What it ends up with is not a library of facts. It is a vast set of numbers — weights — that encode how language tends to fit together.",
          "When you ask it something, it does not search those weights for an answer. It produces one word, then reads everything including that word and produces the next, and so on until it stops. There is no plan drawn up in advance and no answer sitting somewhere waiting to be retrieved.",
          "This is why a model can write a fluent, confident, completely wrong paragraph. Fluency and accuracy come from the same mechanism, and nothing in that mechanism distinguishes them.",
        ],
      },
      {
        heading: "What it does not have",
        paragraphs: [
          "It has no memory. Each conversation starts from nothing; anything it appears to remember was quietly sent along with your question. It has no access to your files, your database or your company unless something hands them over.",
          "It has no clock and no news. Its sense of the world stops wherever its training data stopped, and it will not tell you that, because it does not know.",
          "And it has no way to check anything. A model cannot verify a claim, run a piece of code or look at a page unless it has been given the means to do so. Left alone, it is a closed room with a very well-read occupant.",
          "Almost every serious failure people describe comes from expecting one of these four things to be there when nothing put it there.",
        ],
      },
      {
        heading: "Bigger is not the only question",
        paragraphs: [
          "Models differ in more ways than size. A larger one generally handles harder reasoning and longer, more tangled inputs. A smaller one answers faster and costs less, which matters enormously when a job runs thousands of times a day rather than once.",
          "In practice the difference between a good result and a poor one is more often the setup than the size. A smaller model with clear instructions, the right information in front of it and a way to check its own work will beat a larger one given a vague question and nothing else. That is not a slogan; it is the ordinary experience of building these systems.",
          "So the useful question is rarely “which is the best model”. It is “which is the smallest one that does this job reliably”.",
        ],
      },
      {
        heading: "How to choose one",
        paragraphs: [
          "Start from the job. Pulling a handful of fields out of a message, sorting things into categories, rewriting a sentence — these are not hard problems, and a fast cheap model does them well. Weighing several considerations at once, working through a long document, or planning several steps ahead is where a stronger model earns its cost.",
          "Then test on your own examples. Collect twenty or thirty real inputs, including the awkward ones, and run the candidates against them. A published benchmark tells you how a model does on someone else’s problem; your twenty examples tell you how it does on yours, and they disagree more often than you would expect.",
          "Assume you will change your mind later. Models improve, prices move, and a system built so the model is easy to swap stays useful much longer than one built around a particular model’s quirks.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "Choosing a good model is the beginning of the work, not the end of it. The model still has to be told clearly what to do, which is [prompt engineering](/company/blog/prompt-engineering). It has to be given the information the answer depends on, which is [context engineering](/company/blog/context-engineering). It has to be able to check a result and try again, which is [loop engineering](/company/blog/loop-engineering). And it needs a defined set of things it is allowed to touch, which is [harness engineering](/company/blog/harness-engineering).",
          "Get those four right and a modest model does careful, useful work. Get them wrong and no model on the market will save you.",
        ],
      },
    ],
  },
  {
    slug: "embeddings",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "Embeddings: turning meaning into numbers",
    summary:
      "How a computer can tell that “two-wheeler parking” and “bike parking” mean the same thing, when the two phrases share almost no letters.",
    cover: {
      tone: "light",
      label: "[ COVER — words placed on a map by meaning, similar ones clustered ]",
    },
    body: [
      {
        paragraphs: [
          "Computers are very good at matching letters and very bad at matching meaning. “Two-wheeler parking” and “bike parking” are the same thing to any person and completely different strings to a search box. Embeddings are how that gap gets closed.",
          "Here is the idea in one picture. Imagine a giant map, and every word or sentence in the world has a place on it. Things that mean similar things are placed near each other: “dog” sits close to “puppy”, a little further from “cat”, and a very long way from “mortgage”. Once everything has a position, “what is this similar to” becomes a question about distance, and distance is something a computer can measure perfectly.",
          "An embedding is just that position, written down as a list of numbers.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "A list of numbers that stands for a piece of text or an image, positioned so that things meaning similar things end up near each other.",
          },
          {
            name: "Why",
            body: "It turns “does this mean roughly the same thing” — which computers cannot do — into “how far apart are these two points”, which they do instantly.",
          },
          {
            name: "When",
            body: "Searching by meaning rather than by exact words, grouping similar items, spotting near-duplicates, or routing something to the right category.",
          },
          {
            name: "How",
            body: "Split the text into pieces that each make sense alone, embed them, keep the original text beside the numbers, and test against real queries rather than tidy ones.",
          },
        ],
      },
      {
        heading: "Why numbers, and why so many",
        paragraphs: [
          "A colour is a familiar version of the same trick. Any colour can be written as three numbers, and once it is, you can measure how close two colours are without knowing what either is called. Nobody had to list every shade and its neighbours; the numbers carry the relationship.",
          "Meaning needs far more than three numbers, because meaning has far more ways to vary — formal or casual, about money or about places, a question or a statement, and hundreds of other dimensions nobody has to name. So an embedding is typically a list of several hundred or more numbers, each one a fraction of a direction on that map.",
          "No single number means anything on its own. It is the whole arrangement that puts “bike parking” near “two-wheeler parking”.",
        ],
      },
      {
        heading: "What this makes possible",
        paragraphs: [
          "Search that understands the question. Someone typing “place to keep my scooter” finds a listing that says “covered two-wheeler parking”, even though not one significant word matches. Keyword search cannot do this; it has no way to know the two phrases are related.",
          "Grouping without being told the groups. Feed in a few thousand support messages and the ones about the same underlying problem cluster together, whether or not anyone anticipated that problem.",
          "Catching near-duplicates. Two listings for the same home, written by different people in different words, sit close together on the map even though no field matches exactly.",
          "None of this requires the system to understand anything. It only requires a good sense of what is near what.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "When the words people use will not match the words in your data. That is most of the time, once real people are typing.",
          "When you have more material than anyone could organise by hand, and you need it grouped, deduplicated or routed.",
          "And when you do not. If the thing you are matching is a code, an identifier, an exact name or a number, ordinary matching is faster, cheaper and exactly right. Embeddings are for meaning, and a postcode does not have any.",
        ],
      },
      {
        heading: "How to use them well",
        paragraphs: [
          "Split text into pieces that make sense on their own. A paragraph usually works; half a sentence does not. A piece that needs the one before it to be understood will be no use when it comes back on its own later.",
          "Keep the original text beside the numbers. The numbers are for finding; the text is what you actually show or hand to a model. A system that stores only the embedding has thrown away the useful half.",
          "Use the same model at both ends. Embeddings made by two different models live on two different maps, and distances between them mean nothing at all. Change the model and everything has to be made again — worth knowing before you have millions of them.",
          "Test with real queries, including the badly typed ones. Embeddings look flawless on the examples you thought of and reveal their gaps on the ones you did not.",
        ],
      },
      {
        heading: "What they do not do",
        paragraphs: [
          "Similar is not the same as correct. The nearest passage to a question is often the most useful one, and sometimes it is merely the one that sounds the most like it. A confidently-worded wrong paragraph sits very near a question about the same subject.",
          "They also have no sense of time or truth. An embedding of an out-of-date policy sits exactly as close to the question as the current one does. Keeping meaning and freshness straight is a job for whatever stores and filters them — usually a [vector database](/company/blog/vector-databases) — not for the numbers themselves.",
        ],
      },
    ],
  },
  {
    slug: "vector-databases",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "Vector databases: a filing cabinet organised by meaning",
    summary:
      "Where embeddings live once there are millions of them, why an ordinary database struggles, and the honest answer to whether you need one yet.",
    cover: {
      tone: "mid",
      label: "[ COVER — shelves arranged by similarity rather than by label ]",
    },
    body: [
      {
        paragraphs: [
          "Once meaning has been turned into numbers, those numbers have to live somewhere, and you have to be able to ask that somewhere a particular kind of question: not “find me the row with this id”, but “find me the handful of things most like this”. A vector database is storage built around that second question.",
          "Picture a library where nothing is filed alphabetically. Instead, every book sits near the books it is most like. You walk in holding a book, say “something along these lines”, and the librarian walks you to the right shelf without ever reading the title you came in with.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "A store for embeddings and the text they came from, built to answer “what are the nearest few to this?” across very large collections.",
          },
          {
            name: "Why",
            body: "Finding nearest neighbours by checking every item works fine for thousands and falls apart for millions. These databases are the index that makes it fast.",
          },
          {
            name: "When",
            body: "When you have a lot of embeddings, they change often, and something user-facing is waiting on the answer.",
          },
          {
            name: "How",
            body: "Store the source text and where it came from beside every vector, filter on ordinary fields as well as distance, and keep it in step with the source.",
          },
        ],
      },
      {
        heading: "Why an ordinary database struggles",
        paragraphs: [
          "Regular databases are superb at exact and ranged questions: this id, this date range, this status. They get their speed from indexes that rely on being able to sort things into a sensible order.",
          "Nearest-neighbour questions break that assumption. There is no single order that puts every point near all of its neighbours when a point has hundreds of dimensions. So the obvious approach is to measure the distance to every stored item and keep the closest — which is exactly right, and exactly as slow as it sounds once there are millions.",
          "Vector databases use indexes designed for this shape of problem. Most of them are approximate: they give up a very small amount of accuracy — occasionally missing a result that was technically the fifth-closest — in exchange for being orders of magnitude faster. For search, that is almost always the right trade. It is worth knowing you made it, though.",
        ],
      },
      {
        heading: "When you actually need one",
        paragraphs: [
          "Honestly: later than people think. For a few thousand items, holding the vectors in memory and comparing against all of them is simple, exact, fast enough, and has no extra system to run. Plenty of useful features never outgrow that.",
          "Several ordinary databases can now store vectors and search them directly, which is often the better next step — one system instead of two, and your vectors sit beside the data they describe rather than in a separate place that can drift out of step.",
          "A dedicated vector database earns its place when the collection is genuinely large, when it changes constantly, when many queries arrive at once, or when you need the operational things a database gives you: backups, replication, access control, someone else’s problem at three in the morning.",
        ],
      },
      {
        heading: "How to use one well",
        paragraphs: [
          "Store the text and its source beside every vector. You will need to show people where an answer came from, and a bare vector cannot tell you.",
          "Use ordinary fields as well as distance. “Nearest to this question, in this city, from a listing that is still live” is a far better query than nearest alone, and it is usually the filter, not the similarity, that saves you from an embarrassing result.",
          "Keep it in step with the source. A vector store is a copy, and copies go stale. When a document changes, its vectors have to change; when it is deleted, they have to go. Deciding how that happens is part of building the thing, not an afterthought.",
          "Measure how often the right answer actually comes back. Write down thirty real questions and the passages that should be found, and check. Approximate indexes have settings that trade speed against accuracy, and without a measurement you are tuning blind.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "A vector database returns things that are similar. It has no opinion on whether they are true, current or relevant to what the person actually meant, and it will return its nearest matches just as cheerfully when nothing useful exists at all.",
          "Deciding what to do with those results — which to keep, how to present them, whether to answer at all — belongs to the system around it. When they are being fed to a model to answer a question, that arrangement has a name: [retrieval-augmented generation](/company/blog/rag).",
        ],
      },
    ],
  },
  {
    slug: "rag",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "RAG: letting a model look things up",
    summary:
      "An open-book exam for a model: find the right pages first, then ask the question. Most of the difficulty is in the finding.",
    cover: {
      tone: "dark",
      label: "[ COVER — an open book beside a question, the relevant passage marked ]",
    },
    body: [
      {
        paragraphs: [
          "A model knows a great deal in general and nothing whatsoever about you. It has never seen your documents, your policies or last Tuesday’s decision. Asked about any of them, it will answer anyway, from general knowledge, with complete confidence.",
          "RAG — retrieval-augmented generation — is the fix, and it is less clever than the acronym suggests. It is the difference between a closed-book exam and an open-book one. Before the question is asked, go and find the pages that are likely to contain the answer. Put them in front of the model. Then ask.",
          "Three steps: find, hand over, ask. That is the whole idea.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "Searching your own material for the passages relevant to a question, putting those passages in front of the model, and asking it to answer from them.",
          },
          {
            name: "Why",
            body: "It lets a general model answer about your specific, changing world — and show where each answer came from.",
          },
          {
            name: "When",
            body: "When the answer depends on documents you hold, or on facts that change faster than anyone could retrain a model.",
          },
          {
            name: "How",
            body: "Spend your effort on the retrieval. Pass a few good passages rather than many mediocre ones, require citations, and allow “this is not in the documents” as an answer.",
          },
        ],
      },
      {
        heading: "Why not just train the model on your data",
        paragraphs: [
          "Because documents change and training does not. A policy updated this morning is live in a retrieval system the moment it is indexed; getting it into a model’s weights is a far slower and more expensive undertaking, and has to be repeated every time anything moves.",
          "Because retrieval can show its sources. The passages that produced an answer are right there and can be shown to the person reading it. Something absorbed into weights during training leaves no trail at all, which makes a wrong answer nearly impossible to explain.",
          "And because retrieval can be taken away again. A document that should no longer be used is removed from the index and stops influencing answers immediately. Training has no equivalent of deleting a row.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "When the answer lives in your own material — documentation, policies, listings, past tickets, anything specific to you.",
          "When the facts move. Prices, availability, rules, status: anything where an answer that was right last month is wrong today.",
          "When someone has to be able to check. Support answers, anything involving money or obligations, anything a person will act on — all of them are better with a passage attached than with a confident paragraph and no provenance.",
          "And when not: if the question is general knowledge, retrieval adds cost and latency and nothing else. If the relevant document is short and always the same one, just send it every time. RAG is for when you have too much material to send it all.",
        ],
      },
      {
        heading: "The hard part is the finding",
        paragraphs: [
          "Almost everyone building their first RAG system expects the difficulty to be in the generation. It is not. If the right passage reaches the model, a decent answer usually follows. If it does not, no amount of prompting rescues the situation — the model will answer from general knowledge and sound exactly as sure of itself.",
          "So the engineering is in retrieval. Split documents at natural boundaries, so each piece makes sense alone, and keep the document title and heading attached to each piece — a paragraph that says “this is not permitted” is dangerous without the section it belongs to.",
          "Search both ways. Meaning-based search finds the passage that answers a differently-worded question; keyword search finds the exact product name, error code or street that meaning-based search glides past. Running both and combining them beats either alone, reliably enough that it is worth doing by default.",
          "Then narrow. Take more candidates than you need, re-rank them against the actual question, and pass only the best few. A handful of strong passages produces better answers than twenty mediocre ones, which mostly bury the good one.",
        ],
      },
      {
        heading: "How to keep it honest",
        paragraphs: [
          "Tell the model to answer from the passages and to say plainly when they do not contain the answer. A system that is allowed to say “I cannot find this in the documents” is far more useful than one that must always produce something.",
          "Ask it to cite. Requiring each claim to point at the passage it came from makes wrong answers visible instead of plausible, and it gives the reader somewhere to go.",
          "Keep the index fresh. The quietest failure in RAG is an index that stopped updating: every answer stays fluent, well-cited and slowly becomes wrong.",
          "Measure retrieval on its own. Write down real questions and the passages that ought to be found, and check how often they are. It is the single most useful number in the system, and it is invisible if you only ever look at final answers.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "RAG gets the right material in front of the model. It does not make the model read carefully, check its own answer, or stop when it is unsure — and it cannot do anything beyond answering. Looking something up in a live system, making a booking, changing a record: those need tools, and tools need a setup that decides what is allowed.",
          "Retrieval is how a model learns about your world. It is not how it acts in it.",
        ],
      },
    ],
  },
  {
    slug: "mcp",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "MCP: one plug shape for models and tools",
    summary:
      "The Model Context Protocol is USB-C for AI assistants: one agreed way to connect a model to the outside tools and data it needs.",
    cover: {
      tone: "light",
      label: "[ COVER — many cables into one standard socket ]",
    },
    body: [
      {
        paragraphs: [
          "There was a time when every device came with its own charger, and none of them fitted anything else. A drawer full of cables, each useless for all but one thing. Then a standard plug arrived, and the drawer emptied.",
          "MCP — the Model Context Protocol — is that standard plug for AI assistants. It is an open specification for how an assistant connects to the tools and data outside it: your files, a database, a calendar, an internal service. Write the connection once, in the agreed shape, and any assistant that speaks the protocol can use it.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "An open standard for connecting AI assistants to outside tools and data. A server offers capabilities; a client — the app the model runs in — connects and makes them available.",
          },
          {
            name: "Why",
            body: "Without a standard, every assistant needs custom wiring for every tool. With one, each tool is built once and works everywhere.",
          },
          {
            name: "When",
            body: "When a capability should be reachable by more than one assistant or app, or when tools belong outside the app rather than buried inside it.",
          },
          {
            name: "How",
            body: "Expose few, clearly named tools; write their descriptions as if a model will read them, because one will; and put the permissions in the server, never in the wording.",
          },
        ],
      },
      {
        heading: "The problem it solves",
        paragraphs: [
          "Say you have five assistants and eight tools you would like them all to reach. Without a shared shape, that is forty separate pieces of integration, each written by hand, each needing maintenance when either end changes. Add a ninth tool and you write five more.",
          "A protocol collapses that. Build eight servers and five clients that speak the same language, and everything connects to everything. Add a ninth tool and you write it once.",
          "This is not a new idea — it is the reason for every standard plug, port and file format ever agreed on. It is just newly relevant, because assistants that can use tools are new enough that the wiring was being invented separately every time.",
        ],
      },
      {
        heading: "How it fits together",
        paragraphs: [
          "A server is the thing that offers capabilities: a set of tools it can perform, and sometimes resources it can read out. It is ordinary software. The interesting part is not what is inside it but that it describes itself in an agreed way — here are the things I can do, here is what each one needs, here is what it gives back.",
          "A client is the application the model lives in. It connects to servers, collects what they offer, and puts that in front of the model as a set of available actions. When the model decides to use one, the client makes the call and hands the result back.",
          "The model itself never talks to your database. It asks for a tool to be run, and something outside it decides whether that is allowed and does the work. That separation is the whole safety story, and it is worth understanding clearly.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "When the same capability should be available in more than one place — a lookup that your internal assistant, your support tooling and your editor all want.",
          "When tools should be maintained separately from the assistant using them, by the team that owns the underlying system rather than whoever built the chat interface.",
          "And when not. One tool, one application, one team: a direct function call is simpler, faster and easier to reason about. A protocol is worth its overhead when there is more than one of something on at least one side. Reaching for it before that is architecture for its own sake.",
        ],
      },
      {
        heading: "How to build a good server",
        paragraphs: [
          "Keep the tools few and plainly named. Twenty near-identical tools is not thoroughness; it is a choice you have handed to the model, and it will get some of them wrong. Two well-named tools beat ten overlapping ones.",
          "Write the descriptions for the reader you actually have. A tool description is read by a model deciding whether to use it, so it should say what the tool does, when it is the right choice and when it is not — in plain sentences, not in the compressed style of internal documentation.",
          "Put the limits in the server. What a tool may touch, how much it may change, what needs confirming first: all of that belongs in the code, where it is enforced, not in an instruction asking the model to be careful. A prompt is a request; a server is a rule.",
          "Return errors that say what to do next. “Not found” leaves a model guessing. “No listing with that id; list ids first with the search tool” turns a dead end into a next step.",
          "And return less. A tool that hands back an entire record when three fields were wanted fills the model’s attention with material it has to read past. Tool output is context, and the same discipline applies.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "A protocol describes how things connect. It has nothing to say about whether a particular tool should exist, who may use it, or what happens when it is used badly. Connecting an assistant to a system that can delete things is straightforward; deciding that it should be able to is a judgement, and it stays yours.",
          "MCP makes the wiring standard. What runs through it is still your design.",
        ],
      },
    ],
  },
  {
    slug: "system-one-models-jev",
    published: "2026-09-21",
    tag: "Fundamentals",
    title: "System One models: when the answer is a decision, not a paragraph",
    summary:
      "TypeSafe AI's Jev answers with a typed choice and a confidence number instead of prose — what that changes, and what “cannot hallucinate” really means.",
    cover: {
      tone: "mid",
      label: "[ COVER — a page of prose beside a single ticked box and a confidence figure ]",
    },
    sources: [
      {
        name: "TypeSafe AI — Introducing System One Models & Jev",
        href: "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
      },
      {
        name: "TypeSafe AI docs — System One",
        href: "https://docs.typesafe.ai/concepts/system-one",
      },
      {
        name: "The Register — TypeSafe AI debuts model for machines",
        href: "https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711",
      },
      {
        name: "MarkTechPost — TypeSafe AI releases Jev",
        href: "https://www.marktechpost.com/2026/09/19/typesafe-ai-releases-jev/",
      },
      {
        name: "LangChain — Building a harness with Jev",
        href: "https://www.langchain.com/blog/building-a-harness-with-jev",
      },
      {
        name: "TechCrunch — A new kind of AI model from a ChatGPT inventor",
        href: "https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/",
      },
    ],
    body: [
      {
        paragraphs: [
          "Imagine asking a sharp friend whether the milk has gone off. You do not want an essay about dairy. You want “yes” or “no”, and some sense of how sure they are — because if they say “probably fine?” you are going to smell it yourself.",
          "Almost every AI model in common use answers the essay way. Ask whether an email is urgent and you get a paragraph that means yes. Your code then has to read that paragraph back and work out what it said, which is why so much software around models is spent coaxing them into JSON and checking whether the JSON came out intact.",
          "System One models are an attempt to remove that whole step. They do not write. They take a situation and a set of questions, and return typed answers — a choice, a rating, a probability — with a confidence figure attached. The first one released publicly is [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), from a company called [TypeSafe AI](https://typesafe.ai), and it is worth understanding whether or not you ever use it, because the idea behind it is more interesting than the product.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "A model that returns typed decisions instead of text: a choice from a fixed list, a score on a scale, or a probability — each with a confidence number software can branch on.",
          },
          {
            name: "Why",
            body: "It removes the parse-and-validate step between a model and the code using it, and it gives you a usable signal for when to act, when to review, and when to ask a person.",
          },
          {
            name: "When",
            body: "High-volume, repeated decisions over a shared state where the possible answers are known in advance — triage, routing, filtering, checking an action before it runs.",
          },
          {
            name: "How",
            body: "Pair it with a reasoning model rather than replacing one: the language model for open-ended work, the decision model for the fast structured calls along the way.",
          },
        ],
      },
      {
        heading: "Where the name comes from",
        paragraphs: [
          "The psychologist Daniel Kahneman described two modes of thinking. System 2 is the slow, deliberate kind — working through a problem, weighing arguments, showing your reasoning. System 1 is the fast kind that happens before you notice it: recognising a face, sensing that a street feels wrong, knowing a sentence is sarcastic.",
          "Most of the effort in AI has gone into making models better at the slow mode, and it has worked remarkably well. TypeSafe’s argument is that a great deal of real automation does not need the slow mode at all. It needs a fast judgement, made the same way ten thousand times an hour, that some piece of software can act on immediately. They call that class of model System One, and describe it as “a new class of frontier models built to make fast, structured decisions that software can use directly”.",
          "Whether or not the framing holds up, the observation underneath it is fair: a lot of what gets built with language models is not conversation. It is classification wearing a conversation’s clothes.",
        ],
      },
      {
        heading: "And why it is called Jev",
        paragraphs: [
          "The model’s name is a small joke with a large bet inside it. Jev is short for William Stanley Jevons, a nineteenth-century economist who noticed something awkward about steam engines: as they became more efficient, Britain burned more coal, not less. Cheaper power did not reduce demand for power. It made worthwhile a hundred uses that had not been worth the fuel before.",
          "That is the wager in the name. If a decision becomes two orders of magnitude cheaper, TypeSafe are not expecting anyone’s bill to fall. They are expecting decisions to start being made in places where nobody would previously have bothered — in every list, every queue, every form, continuously. Their founder has put it as “there’s just going to be smart software all over the place”.",
          "It is worth saying plainly that this is a bet, not a result. The Register, covering the launch, pointed out that the assumption the market for tokens will be as broad as the market for energy remains unsettled — plenty of people simply have no use for these tools. Jevons was describing coal after the fact. Nobody has yet described this after the fact.",
          "The company behind it was founded by Diogo Almeida, a former OpenAI researcher who co-invented reinforcement learning from human feedback — the technique that made ChatGPT work as a product — and who has described leaving because the technology, for all its power, was not much use for automation. Knowing that makes the shape of Jev easier to read: it is a deliberate attempt at the opposite of a chatbot, by someone who helped build the chatbot.",
        ],
      },
      {
        heading: "What it actually returns",
        paragraphs: [
          "You hand Jev a state — the messages, the record, the policy, whatever the decision depends on — and then ask questions about it. The questions come in three shapes, according to TypeSafe’s documentation.",
          "A Choice picks one option from a list you define in advance, up to 255 of them, and returns the selection along with probabilities for each option. A Score places the state on an ordered scale of between two and ten levels. A Noul returns a probability between zero and one that some statement about the state is true.",
          "Every answer carries a confidence figure derived from the shape of the probability distribution. You ask several questions at once, they are answered in one pass, and what comes back is a structure your code reads directly — no parsing, no repair, no retry because the closing brace went missing.",
          "It does not write text. Not as a limitation to be worked around: it genuinely has no text to give you. That is the trade.",
        ],
      },
      {
        heading: "The confidence number is the actually interesting part",
        paragraphs: [
          "Speed is what gets quoted, but calibration is what matters. TypeSafe say the model is trained with something they call Reinforcement Learning for Calibrated Decisions, optimising for “answers with epistemically honest probabilities” — meaning that when it says it is 90% sure, it should be right about nine times in ten.",
          "If that holds, it gives you something ordinary language models are bad at providing: a number you can build a rule on. Above this confidence, act. Below it, put it in a queue for a person. Somewhere in between, escalate to a slower, more capable model that can reason about it properly.",
          "Ask a chat model how confident it is and it will tell you, fluently and with very little relationship to how often it is actually right. Confidence you can trust is a genuinely different tool from confidence you cannot, and it is the part of this worth paying attention to.",
        ],
      },
      {
        heading: "“It cannot hallucinate” — true, and not what it sounds like",
        paragraphs: [
          "TypeSafe state that Jev mathematically cannot hallucinate or produce type errors, because the valid outputs are defined in the schema before the question is asked. That claim is correct and worth understanding precisely, because it is easy to hear as something much larger than it is.",
          "What it guarantees is shape. The answer will always be one of the options you listed, always a number in the range you specified, always parseable. It cannot invent a nineteenth category, cannot return prose where you expected a score, cannot produce half a JSON object. Anyone who has written retry logic around a model’s output knows exactly how much tedium that removes.",
          "What it does not guarantee is truth. The Register made this point plainly in its coverage: the comparison “really isn’t a fair comparison as its output is not natural language”, and returning a structured answer “does not preclude the possibility of being incorrect”. A model that must pick one of five categories will always pick one of five categories. It can still pick the wrong one, confidently, all day.",
          "So “zero hallucinations” here means “the output always fits the schema”. That is a real engineering benefit. It is not a claim about accuracy, and reading it as one would be the expensive mistake.",
        ],
      },
      {
        heading: "The numbers, and who is holding the stopwatch",
        paragraphs: [
          "TypeSafe publish figures: end-to-end responses in 70 to 500 milliseconds against seconds for frontier chat models, input priced at $0.042 per million tokens with output free, and headline comparisons in the range of forty to two hundred times faster.",
          "The mechanism behind the speed is plausible enough. A language model produces one token at a time, each one waiting on the last, so a long answer is a long wait by construction. A model that returns a fixed structure can answer in a single parallel pass, and answer several questions in that same pass.",
          "The figures themselves should be read for what they are. MarkTechPost noted that the comparisons come from TypeSafe’s own workflow evaluations, written by TypeSafe’s own team, and that the company says it cannot prove the pricing is unsubsidised. That is not an accusation of anything — vendor benchmarks are vendor benchmarks, and early pricing is early pricing. It simply means the honest version of the claim is “fast and cheap on the tasks they chose” until somebody outside has measured it on tasks you care about.",
          "One outside figure has appeared. TechCrunch reported that Vercel, which offers hosted access to the model, measured it at five to eighteen times faster than the model they had been using, with better accuracy on their task. That is a long way below forty to two hundred — and still a large number. It is roughly what one should expect: real gains, smaller than the headline, on somebody else’s workload.",
        ],
      },
      {
        heading: "When you would reach for it",
        paragraphs: [
          "The shape of the fit is quite specific: high-volume, repeated decisions over a shared state, where the possible answers are known in advance. Sorting incoming messages by what they are about. Deciding whether a listing needs review before it goes live. Scoring whether a photograph matches its description. Filtering a large set down to the handful worth looking at properly.",
          "The pattern that has emerged fastest in practice is putting one in front of something expensive or risky. LangChain describe using Jev to check an agent’s tool calls and block the dangerous ones before they execute — a cheap, fast judgement standing in front of an action that cannot be undone. That is a harness, in the sense of [harness engineering](/company/blog/harness-engineering), and a decision model is a very natural thing to build one from.",
          "The other emerging pattern is routing: a small fast model decides which requests are straightforward and which need a slower, stronger model, so that the expensive one is only used where it earns its cost.",
        ],
      },
      {
        heading: "When you would not",
        paragraphs: [
          "When the answer is prose. Writing, summarising, explaining, drafting a reply — none of that is available here, and no amount of clever schema design gets around it.",
          "When you cannot list the possible answers in advance. Open-ended work, genuinely novel situations, anything where the useful response is a category nobody anticipated: a fixed set of options is the wrong instrument.",
          "When you need the reason as well as the verdict. A probability is not an explanation. If a person is going to be told why something was rejected, something still has to write that sentence.",
          "And when the volume simply is not there. A decision made a few hundred times a day does not need to be two hundred times faster, and adding a second model to your stack has a cost that is not measured in tokens.",
        ],
      },
      {
        heading: "What to keep an eye on",
        paragraphs: [
          "At the time of writing this is early-access software behind a waitlist, available as a hosted API. TypeSafe have not published weights, a parameter count or a self-hosting option, which means anything built on it is built on a dependency you do not control and cannot run yourself.",
          "Calibration is the claim to test, not take. It is also the one you can check yourself, and cheaply: collect a few hundred decisions with their confidence figures, wait until you know the real answers, and see whether the nineties really are right nine times in ten on your data rather than on the examples in the announcement.",
          "And the broader idea is worth separating from the specific product. Whether or not Jev is the model that lasts, “return a typed decision with honest uncertainty instead of a paragraph” is a good idea that software has wanted for a while. If it works, others will build it.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "A decision model decides. It does not explain itself, it does not write, and it knows nothing except what is in the state you handed it — so the quality of its answers is bounded by the quality of that state, which is [context engineering](/company/blog/context-engineering) wearing a different hat.",
          "It is a component, not a replacement. The useful mental model is not “this instead of a language model” but “this for the thousand small judgements, that for the handful of hard ones” — which is roughly how people work too.",
        ],
      },
    ],
  },
  // The four crafts, listed in the order they build on each other.
  {
    slug: "prompt-engineering",
    published: "2026-09-21",
    tag: "Engineering",
    title: "Prompt engineering: saying exactly what you want",
    summary:
      "What a prompt really is, why a vague request comes back as a guess, and how to write one that a stranger could follow without asking you a thing.",
    cover: {
      tone: "mid",
      label: "[ COVER — the same request written twice, once vague and once exact ]",
    },
    body: [
      {
        paragraphs: [
          "Four kinds of work sit behind any agent, and each has a name that sounds harder than the thing it describes: prompt, context, loop and harness engineering. This note is about prompt engineering. The other three have notes of their own, and they can be read in any order.",
          "Picture sending a friend to the shop for you. How you word the request is prompt engineering. What you send with them — the list, the money, a photo of the empty fridge — is context engineering. What they do when the shop has no milk is loop engineering. The bag, the bus fare and the rule about how much they may spend is harness engineering.",
          "So: the words.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "Writing the instruction: the job, who the answer is for, the shape you want it back in, and what not to do.",
          },
          {
            name: "Why",
            body: "Most disappointing answers are not the model being slow. They are a request that could be read two ways, and the model quietly picking one.",
          },
          {
            name: "When",
            body: "First, always. It is the cheapest thing to change, so it is the first thing to check when something comes back wrong.",
          },
          {
            name: "How",
            body: "One sentence for the job, one example of a good answer, one named failure to avoid — then read it back as if you had never seen the task before.",
          },
        ],
      },
      {
        heading: "What a prompt actually is",
        paragraphs: [
          "A prompt is the instruction you hand the model. Not the idea in your head, not the conversation you had about it last week — the words, and only the words.",
          "That is the part people find hardest to believe. We are used to talking to colleagues who fill in the rest: they know the project, they remember what you said on Tuesday, they can tell when you are in a hurry. A model gets the text and nothing else. If a detail is not in the words, for that moment it does not exist.",
          "So prompt engineering is a writing job, not a technical one. It is the unglamorous practice of describing a task so clearly that a stranger could carry it out without asking you a single question.",
        ],
      },
      {
        heading: "Why a vague request comes back as a guess",
        paragraphs: [
          "Children are very good at catching adults out on this. “Tidy your room” and “put the books on the shelf and the clothes in the basket” are the same request, and only one of them gets done the way you meant. The difference is not effort. It is that the first one left a gap, and the gap got filled by someone else’s idea of tidy.",
          "A model does the same thing, minus the eye-roll. Ask it to “summarise this listing” and it has to decide, silently, how long the summary should be, who is reading it, whether the price matters more than the photos, and whether to keep the owner’s tone or flatten it. You did not choose any of that. The model did, using an average of everything it has ever read.",
          "This is why a bad answer is so often a badly specified question. The model rarely stops to say it does not understand; it produces something plausible instead. Plausible and wrong is a harder problem than obviously stuck.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "First, and always. Before you add data, before you add tools, before you build anything clever around the model, read the instruction once more and ask whether a careful stranger could follow it exactly one way.",
          "It is also the right place to return to whenever something comes back wrong in a way that feels like misunderstanding rather than ignorance. If the answer is about the right subject but the wrong shape, wrong length, wrong audience or wrong level of confidence, the words are usually the fix.",
          "Changing words costs nothing and takes a minute. Everything else on this list costs more. Start here for that reason alone.",
        ],
      },
      {
        heading: "How to write one",
        paragraphs: [
          "Say the job in a single sentence, at the top. If you cannot, the task is probably two tasks.",
          "Say who the answer is for. “Explain this to someone who has never used the product” and “explain this to the engineer who built it” produce different writing, and the model cannot tell which you want.",
          "Show one example of a good answer. One is usually worth more than three paragraphs of description, because it settles length, tone and format all at once without you having to name any of them.",
          "Name the failure you are most worried about. “Do not invent a price that is not in the text” is a useful sentence. So is “if a detail is missing, say it is missing rather than guessing” — a model will admit a gap far more readily when admitting it is an allowed answer.",
          "Then read it back cold, as if you had never seen the task. Every place you find yourself thinking “well, obviously it means…” is a place where something obvious to you is invisible to the reader.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "Prompting has a ceiling, and it is worth knowing where it is. No wording can supply a fact the model was never given — that is [context engineering](/company/blog/context-engineering). No wording makes it check its own work and try again — that is [loop engineering](/company/blog/loop-engineering). And no wording lets it open a file, call a service or spend money, or reliably stops it doing so — that is [harness engineering](/company/blog/harness-engineering).",
          "When better and better instructions stop helping, it is usually not a writing problem any more. It is a sign that the fix has moved down a layer.",
        ],
      },
    ],
  },
  {
    slug: "context-engineering",
    published: "2026-09-21",
    tag: "Engineering",
    title: "Context engineering: packing the right things in the bag",
    summary:
      "What a model can actually see when it answers, why more information is not automatically better, and how to decide what goes in.",
    cover: {
      tone: "light",
      label: "[ COVER — a bag packed for an errand: a list, money, a photo ]",
    },
    body: [
      {
        paragraphs: [
          "Four kinds of work sit behind any agent, and each has a name that sounds harder than the thing it describes: prompt, context, loop and harness engineering. This note is about context engineering. The other three have notes of their own, and they can be read in any order.",
          "Picture sending a friend to the shop for you. How you word the request is prompt engineering. What you send with them — the list, the money, a photo of the empty fridge — is context engineering. What they do when the shop has no milk is loop engineering. The bag, the bus fare and the rule about how much they may spend is harness engineering.",
          "So: everything you send along with the words. Your friend needs the list, the money and, ideally, that photo of the fridge so they can see what is already there. Choosing those things, and leaving the rest of the kitchen at home, is the whole job.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "Choosing what the model can see for this particular job, how it is arranged, and what is deliberately left out.",
          },
          {
            name: "Why",
            body: "An answer can only be as good as what it was given. Leave a detail out and it is wrong; pile everything in and it goes vague.",
          },
          {
            name: "When",
            body: "As soon as the answer depends on something the model cannot know by itself — your data, your rules, or what happened five minutes ago.",
          },
          {
            name: "How",
            body: "Start from the question and work backwards. For each thing you are about to include, ask what would break if you left it out. If nothing would, leave it out.",
          },
        ],
      },
      {
        heading: "What the model can see",
        paragraphs: [
          "A model answers from what is in front of it at that moment: your instruction, anything you pasted in, anything a search pulled up, the conversation so far, and whatever tools have reported back. That is the whole world. Everything else — your files, your database, last week’s decision, the thing everyone on the team knows — may as well not exist.",
          "It helps to think of a very well-read new colleague on their first morning. Enormous general knowledge, genuinely useful, and absolutely no idea where anything is kept or how you do things here. They are not going to guess your house rules. Someone has to hand them over.",
          "Context engineering is that handing over, done on purpose rather than by accident.",
        ],
      },
      {
        heading: "Why more is not better",
        paragraphs: [
          "The obvious move is to send everything, just in case. It feels like the safe choice. It is not.",
          "You would not hand a friend your entire kitchen to go and buy milk. You would hand them the list. Past a certain point, extra material does not add certainty — it buries the one line that mattered somewhere in the middle of a hundred lines that did not. Attention is finite, for people and for models, and the middle of a long pile is where things go to be overlooked.",
          "There is a second problem. The more you send, the more likely it is that two parts of it disagree — an old policy and a new one, a draft and a final. Now the model has to pick, and it will, silently, without telling you there was a conflict at all.",
          "And there is a plain practical cost: everything you send has to be read every time. More context means slower, more expensive answers, so paying for material that changes nothing is simply waste.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "The moment the right answer depends on something the model has no way to know. Your data. Your rules. The state of things right now rather than in general.",
          "The clearest signal is an answer that is sensible in the abstract and wrong for you. Generic advice where you needed a specific fact, a confident description of how something usually works when your version works differently, a summary that misses the one detail that would have changed the decision. That is almost never a wording problem. The words were fine; the bag was empty.",
          "It is also where you go when the answers are erratic rather than uniformly bad — right on Monday, wrong on Tuesday, on the same kind of question. Usually something is being included some of the time and not others.",
        ],
      },
      {
        heading: "How to choose what goes in",
        paragraphs: [
          "Start from the question and work backwards. What would a careful person need in front of them to answer this well? That list is your context. Not everything adjacent to the topic — the things the answer actually turns on.",
          "Then go through it once more and, for each piece, ask what would go wrong if it were not there. If the honest answer is nothing, take it out. This one habit does more for quality than almost anything else.",
          "Put the most important material at the beginning and the instruction at the end, so the job is the last thing read before the answer starts. Say where each piece came from — “from the owner’s message”, “from our policy page” — because a model that knows a source is a rule treats it differently from a source that is a suggestion.",
          "For anything long-running, keep a short running summary rather than the entire history. Old turns are the easiest thing to let pile up and the least likely to matter. Prune as you go, the way you would clear a worktop between steps.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "Perfect context with a sloppy instruction is still a poor answer — that is [prompt engineering](/company/blog/prompt-engineering). Perfect context answered once, with nothing checking the result, is a single guess that happens to be well informed; that is [loop engineering](/company/blog/loop-engineering). And if the material has to be fetched rather than handed over, something has to be allowed to go and fetch it, which is [harness engineering](/company/blog/harness-engineering).",
          "Context decides how good an answer can be. It does not decide whether anyone checks it.",
        ],
      },
    ],
  },
  {
    slug: "loop-engineering",
    published: "2026-09-21",
    tag: "Engineering",
    title: "Loop engineering: what happens after the first try",
    summary:
      "Why real work is a cycle rather than a single answer, and how to decide when a system should try again, ask for help, or stop.",
    cover: {
      tone: "dark",
      label: "[ COVER — the same step attempted three times, each a little different ]",
    },
    body: [
      {
        paragraphs: [
          "Four kinds of work sit behind any agent, and each has a name that sounds harder than the thing it describes: prompt, context, loop and harness engineering. This note is about loop engineering. The other three have notes of their own, and they can be read in any order.",
          "Picture sending a friend to the shop for you. How you word the request is prompt engineering. What you send with them — the list, the money, a photo of the empty fridge — is context engineering. What they do when the shop has no milk is loop engineering. The bag, the bus fare and the rule about how much they may spend is harness engineering.",
          "So: what happens when the first attempt does not work. Your friend gets to the shop and there is no milk. Nobody briefed them on this. They check the next aisle, work out whether oat milk counts, and call you if it does not. That small sequence — try, look, decide, go again — is so ordinary in a person that it is easy to forget it has to be built deliberately in software.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "The cycle of act, look at the result, judge it, adjust, repeat — plus the rules for when to stop, and who to ask.",
          },
          {
            name: "Why",
            body: "First attempts are often close and rarely right. Something that can check its own work gets most of the way there without you watching.",
          },
          {
            name: "When",
            body: "When the job has steps, when a result can be checked against something real, or when the next move depends on what just happened.",
          },
          {
            name: "How",
            body: "Decide what “done” means before the loop starts, give it a hard limit, and make stopping to ask an ordinary outcome rather than a failure.",
          },
        ],
      },
      {
        heading: "What a loop is",
        paragraphs: [
          "Act, look at what came back, judge whether it is good enough, adjust, go again. Four steps, and the one people leave out is the third.",
          "That matters more than it sounds. A system that repeats without judging is not looping, it is just doing the same thing more times. The judging step — the check — is what turns repetition into progress. Everything interesting about loop engineering is really about that check: what it measures, how cheap it is, and whether it can tell good from merely finished.",
          "Learning to ride a bike is the honest version of this. Nobody rides in a straight line on the first go. The skill is not balance; it is the wobble, the correction, the next wobble being smaller.",
        ],
      },
      {
        heading: "Why the first attempt is rarely the last",
        paragraphs: [
          "Real jobs have steps, and most of them cannot be planned in full from the start, because some of what you need to know only appears once you have begun. You do not know the shop is out of milk until you are standing in the aisle.",
          "A single answer has to commit to everything at once: the plan, the details, the judgement about whether it worked. A loop gets to be wrong cheaply and early, then fix it. That is a much better deal, and it is the difference between a system that needs you watching every step and one that comes back when it is genuinely stuck.",
          "There is a quieter benefit too. A loop leaves a trail. When the answer is wrong you can see which attempt went astray and why, instead of staring at one final paragraph with no history behind it.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "When the job has more than one step. When the result can be checked against something real — does the code run, does the address exist, does the total add up, does the field match what the owner actually wrote. When the next move genuinely depends on what just happened rather than being known in advance.",
          "And just as importantly, when not to. A single question with a single checkable answer does not need a loop; wrapping one around it adds time, cost and new ways to fail while the answer stays the same. A loop with no meaningful check is the worst of both — it burns attempts and calls the last one success.",
          "If you cannot describe the check in a sentence, you probably do not have a loop yet. You have a repeat.",
        ],
      },
      {
        heading: "How to build one",
        paragraphs: [
          "Write down what “done” means before the first attempt, in terms someone else could verify. Everything after this is easier once that sentence exists.",
          "Make the check cheap and specific. Running the code beats asking whether the code looks right. Comparing against the source beats asking whether the summary seems fair. The more the check leans on something outside the model’s own opinion, the more it is worth.",
          "Give the loop a hard limit — a number of tries, a budget, a clock — and decide in advance what happens when the limit is reached. Not “keep going”, and not silence. Something definite.",
          "Keep a record of what has already been tried and feed it back in, or the loop will cheerfully attempt the same failing thing five times. A note on what did not work, and why, is usually the most useful thing in the bag on the second pass.",
          "Finally, make asking a person an ordinary outcome. A loop that stops and says “I cannot tell whether this deposit was mentioned, can you check” is working correctly. Treat that as a normal ending, not an error, and the whole system gets more honest.",
        ],
      },
      {
        heading: "The two ways it goes wrong",
        paragraphs: [
          "It gives up too early, returning a half-finished answer as though it were complete. Or it goes round and round with total confidence, making small changes to something that was never going to work, until the budget runs out.",
          "Both look like model problems and are almost always loop problems: the first has too weak a definition of done, the second has no honest check and no exit.",
        ],
      },
      {
        heading: "Where it stops",
        paragraphs: [
          "A loop can only try things it is able to try. If an attempt needs a file it cannot open or a service it cannot call, no amount of looping helps — and if it can call something it should never have been allowed to touch, looping makes that worse rather than better.",
          "That is [harness engineering](/company/blog/harness-engineering), the one everything else stands on.",
        ],
      },
    ],
  },
  {
    slug: "harness-engineering",
    published: "2026-09-21",
    tag: "Engineering",
    title: "Harness engineering: the kitchen around the cook",
    summary: "The tools, permissions, memory and failure paths that surround a model, and why they decide what is possible at all.",
    cover: {
      tone: "mid",
      label: "[ COVER — a kitchen set up for a beginner: tools within reach, sharp things away ]",
    },
    body: [
      {
        paragraphs: [
          "Four kinds of work sit behind any agent, and each has a name that sounds harder than the thing it describes: prompt, context, loop and harness engineering. This note is about harness engineering. The other three have notes of their own, and they can be read in any order.",
          "Picture sending a friend to the shop for you. How you word the request is prompt engineering. What you send with them — the list, the money, a photo of the empty fridge — is context engineering. What they do when the shop has no milk is loop engineering. The bag, the bus fare and the rule about how much they may spend is harness engineering.",
          "So: the bag, the bus fare and the spending rule — everything around the request, the list and the return trip. Or think about setting up a kitchen for a child who is learning to cook. Sharp things out of reach. Ingredients where they can be found. A bin for the mistakes. A grown-up within earshot. You are not teaching the recipe at that point; you are arranging the room so that the recipe can go well and going wrong is survivable.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [],
        points: [
          {
            name: "What",
            body: "The setup around the model: the tools it can call, what it is allowed to touch, what it is shown at each step, where its work is written down, and what happens when something fails.",
          },
          {
            name: "Why",
            body: "It decides what is possible at all. No wording lets a model do something it has no way to do, or reliably stops it doing something nothing prevents.",
          },
          {
            name: "When",
            body: "The moment an agent does anything real — reads a file, calls a service, spends money, or changes something a person will see.",
          },
          {
            name: "How",
            body: "Give it exactly the few things it genuinely needs, make every action readable back afterwards, and give every failure a defined outcome.",
          },
        ],
      },
      {
        heading: "What the harness is",
        paragraphs: [
          "Everything that is not the model and not the words. Which tools exist and what they are called. What each one is permitted to do, and to what. What the agent is shown at each step and what is hidden. Where its work gets written down so it can be read later. What happens when a step fails. How a person steps in, and how easily.",
          "None of that is clever writing. It is closer to carpentry — building the room the work happens in.",
        ],
      },
      {
        heading: "Why it decides what is possible",
        paragraphs: [
          "Two sentences carry most of this. No amount of wording lets a model do something it has no way to do. And no amount of wording reliably stops it doing something that nothing actually prevents.",
          "A prompt is a request. A harness is the shape of the room. Asking politely that a system never delete anything important is not a permission system; it is a hope. If deleting is possible, it will eventually happen — after an odd instruction, an unusual input, or simply a mistake.",
          "The reverse is the cheerful half. A modest model in a well-built harness does careful, useful work, because the room only allows careful work. The strongest model in a badly built one will tidy the wrong room very efficiently.",
        ],
      },
      {
        heading: "When you reach for it",
        paragraphs: [
          "The moment anything real happens. Reading a file, calling a service, writing to a database, sending a message, spending money, changing something a person will see. Up to that point you have a conversation; after it you have an actor.",
          "There is a second, less obvious moment. When the same kind of mistake keeps coming back despite clearer instructions and better context, that is usually a sign the fix is structural rather than verbal. If a thing keeps getting knocked over, the answer is to move it, not to keep asking for more care.",
        ],
      },
      {
        heading: "How to build one",
        paragraphs: [
          "List what the agent genuinely needs to touch for the job in front of it, and give it exactly that. Not the neighbouring things, not the whole account. Narrow is easier to reason about and easier to explain to someone else later.",
          "Keep the tools few and plainly named. Twenty near-identical tools is not only a permissions problem; it is a context problem, because now the model has to spend its attention choosing between them.",
          "Put a confirmation in front of anything that is hard to undo. A person saying yes once is cheap. Reversing a bulk change is not.",
          "Make every action readable back afterwards — what was called, with what, and what came back. When something goes wrong, the difference between a ten-minute answer and a lost afternoon is almost always whether that record exists.",
          "Give failures a defined outcome. A tool that quietly returns nothing teaches the agent that the step succeeded. Say what happened, and say what should happen next: retry, skip, or hand it to a person.",
          "And test the room, not just the cook. Ask what the worst plausible action is, and check whether the setup allows it. If it does, the prompt is not the place to fix it.",
        ],
      },
      {
        heading: "The four together",
        paragraphs: [
          "They are layers, not rivals, and it helps to go down them in order when something misbehaves. Doing the wrong job — look at the [prompt](/company/blog/prompt-engineering). Doing the right job with the wrong information — [context](/company/blog/context-engineering). Giving up too early, or going round in circles — the [loop](/company/blog/loop-engineering). Could not do it at all, or did something it should never have been able to do — the harness.",
          "None of the four is a finding. They are vocabulary: four names we use often enough in our own work on agents that it seemed worth writing them down plainly, for anyone who has heard the terms and quietly wondered what they meant.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** "21 Sep 2026" — the short date form every blog surface uses. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[m - 1]} ${y}`;
}

/** Minutes to read, from the post's own word count at 200 wpm. Derived, never hand-written. */
export function readingTime(post: Post): number {
  const words = post.body
    .flatMap((s) => [...s.paragraphs, ...(s.points ?? []).map((pt) => pt.body)])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
