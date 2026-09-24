import Link from "next/link";
import { MediaPanel } from "@/components/ui/MediaPanel";
import type { Post } from "@/content/blog";
import { formatDate, readingTime } from "@/content/blog";

/** "Engineering · 21 Sep 2026 · 6 min read" — the line every blog surface carries instead of the research kind/area/status. */
export function PostMeta({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <span className={`font-mono text-xs text-muted ${className}`}>
      {post.tag} · <time dateTime={post.published}>{formatDate(post.published)}</time> · {readingTime(post)} min read
    </span>
  );
}

/** One post in the index grid: cover, meta line, title, summary. The whole card is the link. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/company/blog/${post.slug}`} className="row flex flex-col gap-3">
      <MediaPanel tone={post.cover.tone} label={post.cover.label} decorative className="mb-2 h-[200px] rounded-media" />
      <PostMeta post={post} />
      <h3 className="rowname m-0 text-[22px] leading-[1.2] font-medium tracking-[-0.02em] text-pretty">{post.title}</h3>
      <span className="text-base leading-normal text-pretty text-muted">{post.summary}</span>
    </Link>
  );
}

/**
 * The newest post, given the room a lead story gets: a tall cover beside the text rather than above it.
 * Stacks under `lg`, where it is simply the first card.
 */
export function FeaturedPost({ post, label }: { post: Post; label: string }) {
  return (
    <Link href={`/company/blog/${post.slug}`} className="row grid grid-cols-1 items-center gap-x-10 gap-y-6 lg:grid-cols-2">
      <MediaPanel tone={post.cover.tone} label={post.cover.label} decorative className="h-[260px] rounded-card sm:h-[340px] lg:h-[420px]" />
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-[0.02em] text-muted uppercase">{label}</span>
        <h2 className="rowname m-0 text-[30px] leading-[1.12] font-normal tracking-[-0.025em] text-balance sm:text-[38px] lg:text-[42px]">
          {post.title}
        </h2>
        <span className="max-w-[46ch] text-lg leading-normal text-pretty text-muted">{post.summary}</span>
        <PostMeta post={post} className="mt-1" />
      </div>
    </Link>
  );
}
