import Link from "next/link";
import { Logo } from "@/components/site/Header";
import { menus, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-footer text-white">
      <div className="wrap flex flex-col justify-between gap-14 pt-14 pb-8 lg:min-h-[440px]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {menus.map((m) => (
            <div key={m.id} className="flex flex-col gap-1">
              <div className="mb-3 text-[13px] text-footer-muted">{m.label}</div>
              {m.links.map((l) => (
                <Link key={l.href} href={l.href} className="fade flex min-h-8 items-center py-1 text-base font-medium">
                  {l.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-footer-line pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/" aria-label="Cosmonus home" className="flex h-11 items-center">
              <Logo />
            </Link>
            <span className="text-sm text-footer-muted">{site.tagline}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 text-sm text-footer-muted">
            <a href={`mailto:${site.contactEmail}`} className="fade py-2">
              {site.contactEmail}
            </a>
            <Link href="/privacy" className="fade py-2">
              Privacy
            </Link>
            <Link href="/terms" className="fade py-2">
              Terms
            </Link>
            <span>© 2026 {site.legal}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
