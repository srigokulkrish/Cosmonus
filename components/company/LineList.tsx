import type { ReactNode } from "react";

/**
 * Left-aligned h2 and optional lead, then short statements set large between 1px line rules.
 * Not links — for lists that are read, not clicked (e.g. the people Careers looks for).
 */
export function LineList({ title, lead, items }: { title: string; lead?: ReactNode; items: string[] }) {
  return (
    <section className="wrap sec flex flex-col">
      <div className="mb-10 flex flex-col gap-4 lg:mb-12">
        <h2 className="m-0 text-[32px] leading-[1.1] font-normal tracking-[-0.02em] lg:text-[40px]">{title}</h2>
        {lead && <p className="m-0 max-w-[640px] text-lg leading-normal text-pretty text-muted">{lead}</p>}
      </div>
      <ul className="m-0 list-none border-b border-line p-0">
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-[88px] items-center border-t border-line py-5 text-2xl leading-[1.2] font-medium tracking-[-0.02em] text-pretty lg:text-[28px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
