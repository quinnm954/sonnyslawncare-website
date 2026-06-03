import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ReviewLanding = () => {
  useSeo({
    title: `Leave a Review | ${BRAND.name}`,
    description: `If you enjoyed our service, please leave a Google review.`,
    canonical: "/review",
    noindex: true,
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="flex justify-center gap-1 text-yellow-500 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-current" />
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Thanks for choosing {BRAND.name}!
          </h1>
          <p className="text-muted-foreground mb-6">
            If you enjoyed our service, please leave us a quick Google review — it
            really helps our small business.
          </p>
          <Button asChild size="lg">
            <a
              href="https://www.google.com/search?q=elite+level+lawn+care+fort+myers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Google review
            </a>
          </Button>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ReviewLanding;
