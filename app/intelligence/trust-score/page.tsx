import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("intelligence", "trust-score");

export default function Page() {
  return renderCapability("intelligence", "trust-score");
}
