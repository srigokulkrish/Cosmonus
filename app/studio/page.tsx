import { SectionPage, sectionMetadata } from "@/components/section/SectionPage";
import { studio as content } from "@/content/sections";

export const metadata = sectionMetadata(content, "/studio");

export default function StudioPage() {
  return <SectionPage content={content} />;
}
