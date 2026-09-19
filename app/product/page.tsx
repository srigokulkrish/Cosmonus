import { SectionPage, sectionMetadata } from "@/components/section/SectionPage";
import { product as content } from "@/content/sections";

export const metadata = sectionMetadata(content, "/product");

export default function ProductPage() {
  return <SectionPage content={content} />;
}
