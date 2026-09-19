import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("studio", "video");

export default function Page() {
  return renderCapability("studio", "video");
}
