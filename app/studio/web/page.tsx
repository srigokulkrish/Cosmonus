import { capabilityMetadata, renderCapability } from "@/components/capability/CapabilityPage";

export const metadata = capabilityMetadata("studio", "web");

export default function Page() {
  return renderCapability("studio", "web");
}
