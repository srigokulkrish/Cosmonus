import type { Metadata } from "next";
import { FeaturedPost } from "@/components/blog/PostCard";
import { PostGrid } from "@/components/blog/PostGrid";
import { Dot } from "@/components/ui/Dot";
import { MoreStrip } from "@/components/ui/Section";
import { posts } from "@/content/blog";
import { blog } from "@/content/company";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  ...blog.meta,
  path: "/company/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Company", path: "/company" },
          { name: "Blog", path: "/company/blog" },
        ])}
      />
      {/* The index itself is a Blog, and its posts are the list — so a result for it can show the posts. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${site.url}/company/blog`,
          name: `${blog.meta.title} — ${site.name}`,
          description: blog.meta.description,
          url: `${site.url}/company/blog`,
          publisher: { "@id": `${site.url}/#organization` },
          inLanguage: "en",
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.summary,
            articleSection: p.tag,
            url: `${site.url}/company/blog/${p.slug}`,
            author: { "@id": `${site.url}/#organization` },
          })),
        }}
      />
      {/* A masthead, not a banner: a blog index opens with its name and its purpose, not a film. */}
      <header className="wrap flex flex-col gap-5 pt-14 pb-12 lg:pt-24 lg:pb-16">
        <span className="flex items-center gap-2.5 font-mono text-xs tracking-[0.02em] text-muted uppercase">
          <Dot />
          {blog.masthead.label}
        </span>
        <h1 className="m-0 max-w-[900px] text-[40px] leading-[1.05] font-normal tracking-[-0.025em] text-balance sm:text-[52px] lg:text-[60px]">
          {blog.masthead.title}
        </h1>
        <p className="m-0 max-w-[680px] text-lg leading-normal text-pretty text-muted lg:text-xl">{blog.masthead.lead}</p>
      </header>

      <div className="wrap">
        <div className="border-t border-line pt-12 lg:pt-16">
          <FeaturedPost post={featured} label={blog.featuredLabel} />
        </div>
      </div>

      {rest.length > 0 && <PostGrid title={blog.listTitle} allLabel={blog.allLabel} posts={rest} />}

      <MoreStrip label="More in Company" links={blog.more} />
    </>
  );
}
