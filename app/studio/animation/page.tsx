import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("studio", "animation");

export default function Page() {
  return renderCapability("studio", "animation");
}
