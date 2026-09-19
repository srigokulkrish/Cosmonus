import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("agents", "systems");

export default function Page() {
  return renderCapability("agents", "systems");
}
