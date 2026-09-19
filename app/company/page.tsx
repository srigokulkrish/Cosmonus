import { SectionPage, sectionMetadata } from "@/components/section/SectionPage";
import { company as content } from "@/content/sections";

export const metadata = sectionMetadata(content, "/company");

export default function CompanyPage() {
  return <SectionPage content={content} />;
}
