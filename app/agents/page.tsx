import { SectionPage, sectionMetadata } from "@/components/section/SectionPage";
import { agents as content } from "@/content/sections";

export const metadata = sectionMetadata(content, "/agents");

export default function AgentsPage() {
  return <SectionPage content={content} />;
}
