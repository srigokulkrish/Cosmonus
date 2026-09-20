"use client";

import { useState } from "react";
import { PostCard } from "@/components/blog/PostCard";
import { THIRDS } from "@/components/ui/Section";
import type { Post, PostTag } from "@/content/blog";

/**
 * The blog index grid: cards on the thirds, with tag buttons above them. The buttons only appear once
 * there is more than one tag, so a single-tag blog is not asked to filter itself.
 */
export function PostGrid({ title, posts, allLabel }: { title: string; posts: Post[]; allLabel: string }) {
  const tags = Array.from(new Set(posts.map((p) => p.tag)));
  const [tag, setTag] = useState<PostTag | null>(null);
  const shown = tag ? posts.filter((p) => p.tag === tag) : posts;
  const options: { value: PostTag | null; label: string }[] = [
    { value: null, label: allLabel },
    ...tags.map((t) => ({ value: t, label: t })),
  ];

  return (
    <section className="wrap sec flex flex-col" aria-labelledby="posts-title">
      <div className="mb-10 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
        <h2 id="posts-title" className="m-0 text-2xl leading-[1.15] font-medium tracking-[-0.02em]">
          {title}
        </h2>
        {tags.length > 1 && (
          <div role="group" aria-label="Show posts by tag" className="flex flex-wrap gap-2">
            {options.map((o) => {
              const on = tag === o.value;
              return (
                <button
                  key={o.label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setTag(o.value)}
                  className={`h-10 cursor-pointer rounded-full border px-4 text-sm font-medium fade ${
                    on ? "border-ink bg-ink text-white" : "border-line bg-transparent text-ink"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
      {tags.length > 1 && (
        <p className="sr-only" aria-live="polite">
          {tag ? `Showing ${tag.toLowerCase()} posts only.` : "Showing every post."}
        </p>
      )}
      <ul className={`m-0 list-none p-0 ${THIRDS} gap-y-12`}>
        {shown.map((p) => (
          <li key={p.slug}>
            <PostCard post={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}
