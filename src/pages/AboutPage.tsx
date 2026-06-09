import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import InlineCallStrip from "@/components/InlineCallStrip";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const AboutPage = () => {
  useSeo({
    title: `About ${BRAND.name} | Landscaping & Tree Services Company in ${BRAND.serviceArea}`,
    description: `Locally owned landscaping & tree services company serving ${BRAND.serviceArea} with reliable weekly maintenance, tree trimming & removal, mulch, sod, and landscape design. Call ${BRAND.phoneDisplay}.`,
    canonical: "/about",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: `About ${BRAND.name}`,
      url: `${SITE_URL}/about`,
      mainEntity: {
        "@type": "LocalBusiness",
        name: BRAND.name,
        telephone: `+1${BRAND.phoneDigits}`,
        areaServed: BRAND.serviceArea,
      },
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About {BRAND.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            We're a locally owned landscaping and tree services crew based in Lehigh Acres, Florida,
            focused on craftsmanship, consistency, and treating every property like our own. As FNGLA
            Certified Horticultural Professionals through UF's program, we match plants and pruning
            to your site — not to guesswork.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">What we do</h2>
          <p className="text-muted-foreground mb-4">
            Weekly and bi-weekly maintenance, hedge and palm trimming, tree trimming and removal
            (including stump grinding), mulch installation, sod repair, plant installs, and
            full landscape design — everything a Southwest Florida property needs to look its best.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">Where we work</h2>
          <p className="text-muted-foreground mb-4">
            We serve Fort Myers, Cape Coral, Lehigh Acres, Bonita Springs, Estero, and
            the rest of {BRAND.serviceArea}.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">How to reach us</h2>
          <p className="text-muted-foreground">
            Call or text {BRAND.phoneDisplay} for a free quote, usually back the same day.
          </p>
          <InlineCallStrip />
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default AboutPage;
