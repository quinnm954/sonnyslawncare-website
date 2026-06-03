import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import InlineCallStrip from "@/components/InlineCallStrip";
import { blogPosts } from "@/data/blogPosts";
import { useSeo } from "@/lib/useSeo";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useSeo({
    title: post?.title ?? "Post",
    description: post?.excerpt ?? "",
    canonical: `/blog/${slug}`,
  });

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>{" "}
            · {post.readingMinutes} min read · {post.author}
          </p>
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((t) => (
              <Link
                key={t}
                to={`/blog/tag/${t}`}
                className="px-3 py-1 rounded-full bg-secondary text-xs hover:bg-primary/10 hover:text-primary"
              >
                #{t}
              </Link>
            ))}
          </div>
          <InlineCallStrip />
        </article>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default BlogPost;
