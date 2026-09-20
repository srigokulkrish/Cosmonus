import { ImageResponse } from "next/og";
import { getPost, posts, readingTime } from "@/content/blog";
import { site } from "@/lib/site";

// A share card per post: the post's own title and tag on the brand gradient, so a link shared in a message
// or a feed says what the post is instead of repeating the site tagline ten times.
// Satori needs an explicit `display` on any element with more than one child.

export const alt = "Cosmonus blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostImage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  const title = post?.title ?? site.name;
  const meta = post ? `${post.tag} · ${readingTime(post)} min read` : site.tagline;
  // Long titles step down a size so a card never clips a word.
  const fontSize = title.length > 58 ? 56 : title.length > 42 ? 66 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ffffff",
          backgroundColor: "#070d2e",
          backgroundImage:
            "radial-gradient(900px 600px at 85% 10%, rgba(99,91,255,0.95), rgba(99,91,255,0) 70%), radial-gradient(800px 520px at 55% 70%, rgba(47,107,255,0.55), rgba(47,107,255,0) 70%), radial-gradient(900px 700px at 10% 100%, rgba(29,63,168,0.9), rgba(29,63,168,0) 70%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "0.16em" }}>COSMONUS</div>
          <div style={{ fontSize: 24, letterSpacing: "0.08em", opacity: 0.75, textTransform: "uppercase" }}>{meta}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", width: 72, height: 8, borderRadius: 4, backgroundColor: "#635bff" }} />
          <div style={{ fontSize, lineHeight: 1.05, letterSpacing: "-0.03em", maxWidth: 1000 }}>{title}</div>
        </div>
      </div>
    ),
    size,
  );
}
