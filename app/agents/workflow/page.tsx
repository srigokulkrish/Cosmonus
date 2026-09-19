import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("agents", "workflow");

export default function Page() {
  return renderCapability("agents", "workflow");
}
