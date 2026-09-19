import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("studio", "image-generation");

export default function Page() {
  return renderCapability("studio", "image-generation");
}
