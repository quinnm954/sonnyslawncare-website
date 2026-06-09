import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";
import { REVIEWS_META } from "@/data/reviewsMeta";

const Index = () => {
  useSeo({
    title: `${BRAND.name} | Landscaping & Tree Services in ${BRAND.serviceArea}`,
    description: `Landscape design, tree trimming & removal, mulch, sod, and full-property maintenance across ${BRAND.serviceArea}. FNGLA Certified. Call ${BRAND.phoneDisplay} for a free quote.`,
    canonical: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: BRAND.name,
        url: `${SITE_URL}/`,
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: BRAND.name,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/og-image.jpg`,
        telephone: `+1${BRAND.phoneDigits}`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "5321 28th St SW",
          addressLocality: "Lehigh Acres",
          addressRegion: "FL",
          postalCode: "33973",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Lehigh Acres, FL" },
          { "@type": "City", name: "Fort Myers, FL" },
          { "@type": "City", name: "Cape Coral, FL" },
          { "@type": "City", name: "Bonita Springs, FL" },
          { "@type": "City", name: "Estero, FL" },
          { "@type": "City", name: "Naples, FL" },
          { "@type": "AdministrativeArea", name: "Lee County, FL" },
          { "@type": "AdministrativeArea", name: "Collier County, FL" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: REVIEWS_META.ratingValue,
          reviewCount: REVIEWS_META.reviewCount,
          bestRating: REVIEWS_META.bestRating,
          worstRating: REVIEWS_META.worstRating,
        },
      },
    ],
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Testimonials />
        <section className="py-12 md:py-20 pb-28 md:pb-20 text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Ready for a greener lawn?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              Call or text {BRAND.phoneDisplay} for a free quote in {BRAND.serviceArea}.
            </p>
            <RequestQuoteCTA size="lg" />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
