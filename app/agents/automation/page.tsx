import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("agents", "automation");

export default function Page() {
  return renderCapability("agents", "automation");
}
