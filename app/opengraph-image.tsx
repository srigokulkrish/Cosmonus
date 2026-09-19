import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// The share image for every page (Open Graph + Twitter): 1200×630, the brand look — the COSMONUS wordmark and
// tagline in white on the navy / dark-blue / blue / violet gradient used on the home Agents band.

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ffffff",
          backgroundColor: "#070d2e",
          backgroundImage:
            "radial-gradient(900px 600px at 85% 10%, rgba(99,91,255,0.95), rgba(99,91,255,0) 70%), radial-gradient(800px 520px at 55% 70%, rgba(47,107,255,0.55), rgba(47,107,255,0) 70%), radial-gradient(900px 700px at 10% 100%, rgba(29,63,168,0.9), rgba(29,63,168,0) 70%)",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "0.16em" }}>COSMONUS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: "-0.03em", maxWidth: 900 }}>Building Real-World Intelligence.</div>
          <div style={{ fontSize: 30, opacity: 0.82, maxWidth: 900 }}>
            Products, research and systems that understand the physical world.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
