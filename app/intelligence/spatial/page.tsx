import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("intelligence", "spatial");

export default function Page() {
  return renderCapability("intelligence", "spatial");
}
