import { Arrow } from "@/components/ui/Button";
import { MediaPanel, type Tone } from "@/components/ui/MediaPanel";
import { PAIRS, SideHead, SideLayout } from "@/components/ui/Section";
import Link from "next/link";

export type ExplainerPart = { title: string; body: string };

/**
 * Title, lead and link in the first third; media and the numbered parts (2×2) across the other two.
 * Used for "Reading a TrustScore". The optional link names where it goes.
 */
export function Explainer({
  label,
  title,
  lead,
  media,
  parts,
  link,
}: {
  label: string;
  title: string;
  lead: string;
  media: { tone: Tone; asset: string };
  parts: ExplainerPart[];
  link?: { href: string; action: string };
}) {
  return (
    <section className="wrap sec">
      <SideLayout
        head={
          <SideHead label={label} title={title} lead={lead}>
            {link && (
              <Link href={link.href} className="row inline-flex min-h-11 items-center gap-2.5 self-start text-base font-medium">
                <span className="rowname">{link.action}</span>
                <Arrow />
              </Link>
            )}
          </SideHead>
        }
      >
        <div className="flex flex-col gap-10">
          <MediaPanel tone={media.tone} label={media.asset} className="h-[280px] rounded-media lg:h-[420px]" />
          {/* Parts go 2×2 inside the two thirds, so each is exactly one third wide. */}
          <ol className={`m-0 list-none p-0 ${PAIRS} gap-y-10`}>
            {parts.map((p, i) => (
              <li key={p.title} className="flex flex-col gap-2.5 border-t border-line pt-5">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-0.02em]">{p.title}</h3>
                <p className="m-0 text-base leading-normal text-pretty text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </SideLayout>
    </section>
  );
}
