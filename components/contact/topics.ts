/** Topics offered in the contact form. `?topic=<value>` pre-selects one (e.g. /contact?topic=careers). */
export const topics = [
  { value: "general", label: "General" },
  { value: "partnership", label: "A partnership" },
  { value: "press", label: "Press" },
  { value: "support", label: "Help with StayOnMap or Happenous" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
] as const;

export type Topic = (typeof topics)[number]["value"];

export function toTopic(value: string | null | undefined): Topic {
  return topics.find((t) => t.value === value)?.value ?? "general";
}
