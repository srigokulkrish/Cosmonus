import { ButtonLink } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";

export default function NotFound() {
  return (
    <section className="wrap sec flex flex-col items-start gap-6 pb-[120px]">
      <MonoLabel dot>404</MonoLabel>
      <h1 className="m-0 text-[44px] leading-[1.02] font-normal tracking-[-0.025em] lg:text-[76px]">This page isn&apos;t here.</h1>
      <p className="m-0 max-w-[560px] text-lg leading-normal text-muted">It may not be designed yet, or the link is out of date.</p>
      <ButtonLink href="/">Back to the home page</ButtonLink>
    </section>
  );
}
