/** One block of structured data. Kept in a component so pages do not repeat the script tag and the stringify. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
