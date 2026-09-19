import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Chevron({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 3l4 4-4 4" />
    </svg>
  );
}

// Compact, Runway-style buttons: 40px, 8px radius, semibold 15px. Primary is ink; secondary is a soft grey
// fill; inverse sits on dark panels; ghost is a thin white outline for dark panels.
type Variant = "primary" | "secondary" | "inverse" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink-2",
  secondary: "bg-soft text-ink hover:bg-line",
  inverse: "bg-white/95 text-ink hover:bg-white/80",
  ghost: "border border-white/60 text-white hover:bg-white/10",
};

/**
 * A link styled as a button. Labels say where they go ("View open roles"), never "Get started".
 * `external` opens in a new tab.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex h-10 shrink-0 items-center gap-2 rounded-lg px-4 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;
  const body = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );
  if (external || href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {body}
    </Link>
  );
}
