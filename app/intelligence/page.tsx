import { SectionPage, sectionMetadata } from "@/components/section/SectionPage";
import { intelligence as content } from "@/content/sections";

export const metadata = sectionMetadata(content, "/intelligence");

export default function IntelligencePage() {
  return <SectionPage content={content} />;
}
