import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo } from "@/lib/useSeo";

const BlogTag = () => {
  const { tag } = useParams();
  const tagged = blogPosts.filter((p) => p.tags.includes(tag ?? ""));

  useSeo({
    title: `#${tag} — Lawn Care Blog`,
    description: `Posts tagged ${tag}.`,
    canonical: `/blog/tag/${tag}`,
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">#{tag}</h1>
          {tagged.length === 0 ? (
            <p className="text-muted-foreground">No posts yet for this tag.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagged.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                  <Card className="h-full hover:border-primary/40">
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary">
                        {p.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default BlogTag;
