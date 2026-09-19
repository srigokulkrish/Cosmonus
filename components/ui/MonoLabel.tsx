import type { ReactNode } from "react";
import { Dot } from "./Dot";

/** Small Geist Mono label (eyebrows, step numbers, product numbering). */
export function MonoLabel({ children, dot = false, className = "" }: { children: ReactNode; dot?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-mono text-xs text-muted ${className}`}>
      {dot && <Dot />}
      <span>{children}</span>
    </div>
  );
}
