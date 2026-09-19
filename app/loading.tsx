import { BANNER } from "@/components/ui/Hero";
import { THIRDS } from "@/components/ui/Section";

/**
 * Route-level loading skeleton (Next.js `loading.tsx`): shown instantly while a page loads, in the shape every page
 * shares — the banner, a section heading and a row of three cards. Grey blocks with a soft light sweep
 * (`.skeleton` in globals.css; still under reduced motion). Hidden from assistive tech; a status line announces it.
 */
export default function Loading() {
  return (
    <div aria-busy="true">
      <p role="status" className="sr-only">
        Loading…
      </p>
      <div aria-hidden="true">
        <section className="frame pt-2 pb-5">
          <div className={`${BANNER} skeleton gap-5`}>
            <span className="block h-14 w-3/4 max-w-[640px] rounded-lg bg-white/60 lg:h-16" />
            <span className="block h-5 w-2/3 max-w-[520px] rounded-md bg-white/60" />
          </div>
        </section>
        <section className="wrap sec flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="skeleton block h-3 w-24 rounded" />
            <span className="skeleton block h-10 w-2/3 max-w-[560px] rounded-lg" />
          </div>
          <div className={`${THIRDS} gap-y-10`}>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="skeleton block h-[280px] rounded-media" />
                <span className="skeleton block h-6 w-3/5 rounded-md" />
                <span className="skeleton block h-4 w-4/5 rounded" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
