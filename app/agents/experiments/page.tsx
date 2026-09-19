import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("agents", "experiments");

export default function Page() {
  return renderCapability("agents", "experiments");
}
