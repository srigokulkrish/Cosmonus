import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard, PostMeta } from "@/components/blog/PostCard";
import { MediaPanel } from "@/components/ui/MediaPanel";
import { THIRDS } from "@/components/ui/Section";
import { JsonLd } from "@/components/site/JsonLd";
import { getPost, posts } from "@/content/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post
    ? pageMetadata({
        // No " — Blog" here: the layout template already appends " — Cosmonus", and a title that
        // runs past ~60 characters is simply truncated in results.
        title: post.title,
        description: post.summary,
        path: `/company/blog/${post.slug}`,
        type: "article",
        image: "fromFile",
      })
    : {};
}

/**
 * A blog post, laid out as a blog post: one centred reading column, the cover breaking out wider than
 * the text, and "Read next" at the foot. Deliberately not the research-note template.
 */
export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Company", path: "/company" },
          { name: "Blog", path: "/company/blog" },
          { name: post.title, path: `/company/blog/${post.slug}` },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.summary,
            articleSection: post.tag,
            keywords: post.tag,
            datePublished: post.published,
            wordCount: post.body
              .flatMap((b) => b.paragraphs)
              .join(" ")
              .split(/\s+/).length,
            isAccessibleForFree: true,
            url: `${site.url}/company/blog/${post.slug}`,
            mainEntityOfPage: `${site.url}/company/blog/${post.slug}`,
            image: `${site.url}/opengraph-image`,
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
            inLanguage: "en",
          }),
        }}
      />

      <header className="wrap pt-10 lg:pt-16">
        <div className="mx-auto flex w-full max-w-[860px] flex-col gap-5">
          <Link href="/company/blog" className="inline-flex min-h-11 items-center self-start font-mono text-xs text-muted fade">
            ← Blog
          </Link>
          <PostMeta post={post} />
          <h1 className="m-0 text-[36px] leading-[1.08] font-normal tracking-[-0.025em] text-balance sm:text-[46px] lg:text-[54px]">
            {post.title}
          </h1>
          <p className="m-0 text-lg leading-normal text-pretty text-muted lg:text-xl">{post.summary}</p>
        </div>
      </header>

      {/* The cover runs wider than the text — the one place a blog post breaks its column. */}
      <div className="wrap pt-10 lg:pt-14">
        <MediaPanel
          tone={post.cover.tone}
          label={post.cover.label}
          src={post.cover.image}
          alt={post.cover.alt}
          sizes="(min-width: 1100px) 1100px, 100vw"
          labelSize="text-[13px]"
          className="mx-auto h-[240px] max-w-[1100px] rounded-card sm:h-[360px] lg:h-[460px]"
        />
      </div>

      <article className="wrap pt-12 lg:pt-16">
        <PostBody sections={post.body} />
      </article>

      {post.sources && (
        <section className="wrap pt-14 lg:pt-20" aria-labelledby="sources">
          <div className="mx-auto w-full max-w-[860px] rounded-card border border-line p-6 lg:p-8">
            <h2 id="sources" className="m-0 font-mono text-xs tracking-[0.02em] text-muted uppercase">
              Sources
            </h2>
            <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
              {post.sources.map((src) => (
                <li key={src.href}>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="row inline-flex items-baseline gap-2 text-base leading-normal text-ink-2"
                  >
                    <span className="rowname">{src.name}</span>
                    <span aria-hidden="true" className="font-mono text-xs text-muted">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="wrap sec pb-[120px]">
        <div className="mx-auto w-full max-w-[860px] border-t border-line pt-8">
          <p className="m-0 text-base leading-normal text-muted">
            Written by the Cosmonus team.{" "}
            <Link href="/company/blog" className="row inline text-ink">
              <span className="rowname">Read more from the blog</span>
            </Link>
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-8 lg:mt-20">
          <h2 className="m-0 text-2xl leading-[1.15] font-medium tracking-[-0.02em]">Read next</h2>
          <ul className={`m-0 list-none p-0 ${THIRDS} gap-y-12`}>
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
