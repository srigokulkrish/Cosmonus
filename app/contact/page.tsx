import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { ContactForm, ContactFormFromQuery } from "@/components/contact/ContactForm";
import { InnerHero } from "@/components/ui/Hero";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "A product idea, an unusual problem, a collaboration, something worth exploring. Tell us.",
  path: "/contact",
});

const prompts = ["Have a product idea?", "An unusual problem?", "A collaboration?", "Something worth exploring?"];

export default function ContactPage() {
  return (
    <>
      <InnerHero
        tone="light"
        title="What are you thinking about?"
        lead="Write to us about the thing you keep coming back to. We read every message."
      />
      {/* Prompts in the first third, the form across the other two (the site's thirds grid). */}
      <section className="wrap sec grid grid-cols-1 gap-x-5 gap-y-14 pb-[120px] lg:grid-cols-3">
        <div className="flex flex-col lg:pr-10">
          <ul className="m-0 list-none p-0">
            {prompts.map((p) => (
              <li key={p} className="border-t border-line py-[18px] text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-muted">
                {p}
              </li>
            ))}
          </ul>
          <p className="m-0 border-t border-ink pt-6 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[40px]">Tell us.</p>
          <div className="mt-10 flex flex-col gap-1.5">
            <MonoLabel dot>Or write directly</MonoLabel>
            <a href={`mailto:${site.contactEmail}`} className="row flex min-h-11 items-center self-start text-lg font-medium">
              <span className="rowname">{site.contactEmail}</span>
            </a>
          </div>
        </div>
        <div className="max-w-[860px] min-w-0 lg:col-span-2">
          <Suspense fallback={<ContactForm />}>
            <ContactFormFromQuery />
          </Suspense>
        </div>
      </section>
    </>
  );
}
