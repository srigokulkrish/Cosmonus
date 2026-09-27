// Plain module (no "use client") so server components such as Band can read the colours too.
/**
 * Mesh-gradient palettes: four oversized colour fields each (light → mid → deep → shadow), all heavily blurred so no
 * gradient boundary shows. StayOnMap = greens, Happenous = reddish oranges, Cosmonus = four colours only: blue, the brand
 * violet (#635BFF, from the original cosmonus.com buttons), dark blue and navy.
 */
export const MESH = {
  stayonmap: ["#6fe0ae", "#16a36f", "#0b6d52", "#04301f"],
  happenous: ["#ffb27a", "#ff6a2e", "#c9310f", "#4a1004"],
  cosmonus: ["#2f6bff", "#635bff", "#1d3fa8", "#070d2e"],
  // Pale tints of the Cosmonus blue and violet over a warm off-white, for panels that keep dark text.
  cosmonusLight: ["#ffffff", "#c9c6ff", "#e6ebfa", "#dde6ff"],
  // The same idea in each product's colour, for its own page's closing band.
  stayonmapLight: ["#ffffff", "#a9e8cc", "#e3f5ec", "#cdeede"],
  happenousLight: ["#ffffff", "#ffc3a6", "#fdeee6", "#ffdccb"],
} as const;

export type MeshPalette = keyof typeof MESH;
