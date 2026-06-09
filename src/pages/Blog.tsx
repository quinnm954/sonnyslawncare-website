import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const Blog = () => {
  useSeo({
    title: `Landscape & Tree Care Blog | ${BRAND.name} — Florida Tips & Guides`,
    description: `Florida landscaping and tree care tips, seasonal guides, mowing heights, fertilization schedules, and palm trimming advice from ${BRAND.name}.`,
    canonical: "/blog",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `${BRAND.name} Landscape & Tree Care Blog`,
      url: `${SITE_URL}/blog`,
      blogPost: blogPosts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.date,
        author: { "@type": "Organization", name: p.author },
      })),
    },
  });

  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Landscape & Tree Care Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Florida-specific landscaping & tree services tips from our crew.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                <Card className="h-full hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <p className="text-xs text-muted-foreground mb-2">
                      <time dateTime={p.date}>
                        {new Date(p.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>{" "}
                      · {p.readingMinutes} min read
                    </p>
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary">
                      {p.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Blog;
