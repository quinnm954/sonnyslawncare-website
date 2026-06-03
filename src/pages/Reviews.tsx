import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Testimonials from "@/components/Testimonials";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";
import { REVIEWS_META } from "@/data/reviewsMeta";

const Reviews = () => {
  useSeo({
    title: `Reviews of ${BRAND.name} | Lawn Care in ${BRAND.serviceArea}`,
    description: `Customer reviews of ${BRAND.name} — ${REVIEWS_META.ratingValue}★ from ${REVIEWS_META.reviewCount} customers across ${BRAND.serviceArea}.`,
    canonical: "/reviews",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Reviews", url: "/reviews" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BRAND.name,
      url: `${SITE_URL}/`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: REVIEWS_META.ratingValue,
        reviewCount: REVIEWS_META.reviewCount,
        bestRating: REVIEWS_META.bestRating,
        worstRating: REVIEWS_META.worstRating,
      },
    },
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Customer Reviews</h1>
          <p className="text-muted-foreground mb-6">
            {REVIEWS_META.ratingValue}★ from {REVIEWS_META.reviewCount} customers across {BRAND.serviceArea}.
          </p>
          <RequestQuoteCTA size="lg" />
        </div>
        <Testimonials />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Reviews;
