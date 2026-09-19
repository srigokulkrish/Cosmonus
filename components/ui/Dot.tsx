/** The 8px accent marker. The only place the accent colour is used. */
export function Dot({ size = 8 }: { size?: number }) {
  return <span aria-hidden="true" className="inline-block shrink-0 rounded-full bg-accent" style={{ width: size, height: size }} />;
}
