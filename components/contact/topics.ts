/** Topics offered in the contact form. `?topic=<value>` pre-selects one (e.g. /contact?topic=careers). */
export const topics = [
  { value: "general", label: "General" },
  { value: "idea", label: "A product idea" },
  { value: "problem", label: "An unusual problem" },
  { value: "collaboration", label: "A collaboration" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
] as const;

export type Topic = (typeof topics)[number]["value"];

export function toTopic(value: string | null | undefined): Topic {
  return topics.find((t) => t.value === value)?.value ?? "general";
}
