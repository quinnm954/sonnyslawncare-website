import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import InlineCallStrip from "@/components/InlineCallStrip";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const AboutPage = () => {
  useSeo({
    title: `About ${BRAND.name} | Landscaping & Tree Services Company in ${BRAND.serviceArea}`,
    description: `Locally owned landscaping & tree services company serving ${BRAND.serviceArea} with reliable weekly maintenance, trimming, fertilization, and landscape services. Call ${BRAND.phoneDisplay}.`,
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
            We're a locally owned landscaping & tree services crew based in Lee County, Florida, focused on
            doing weekly maintenance the right way and treating every yard like our own.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3">What we do</h2>
          <p className="text-muted-foreground mb-4">
            From weekly mowing and edging to hedge and palm trimming, fertilization
            programs, mulch installs, sod repair, and full landscape design — we cover
            everything a Southwest Florida property needs to look its best.
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
