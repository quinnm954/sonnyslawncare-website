import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import InlineCallStrip from "@/components/InlineCallStrip";
import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import { categories } from "@/data/serviceCategories";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const LeeCounty = () => {
  useSeo({
    title: `Lee County Lawn Care | ${BRAND.name} — Fort Myers, Cape Coral & More`,
    description: `Lawn mowing, trimming, fertilization, mulch, sod, and landscape services across all of Lee County, FL. Free quotes — call ${BRAND.phoneDisplay}.`,
    canonical: "/lee-county-fl",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/service-areas" },
      { name: "Lee County, FL", url: "/lee-county-fl" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Lawn Care in Lee County, FL`,
      provider: {
        "@type": "LocalBusiness",
        name: BRAND.name,
        telephone: `+1${BRAND.phoneDigits}`,
        url: `${SITE_URL}/`,
      },
      areaServed: { "@type": "AdministrativeArea", name: "Lee County, FL" },
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Lee County Lawn Care
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            {BRAND.name} provides weekly lawn maintenance, hedge and palm trimming,
            fertilization, mulch, sod, and landscape installs across all of Lee County, FL.
          </p>
          <RequestQuoteCTA size="lg" />

          <h2 className="text-2xl font-bold mt-12 mb-4">Cities we serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/areas/${c.slug}`}
                className="px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Services offered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.id} to={`/services/${c.id}`}>
                  <Card className="h-full hover:border-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{c.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">{c.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <InlineCallStrip />
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default LeeCounty;
