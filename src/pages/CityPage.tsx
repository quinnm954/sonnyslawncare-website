import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import InlineCallStrip from "@/components/InlineCallStrip";
import { cities } from "@/data/cities";
import { categories } from "@/data/serviceCategories";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const CityPage = () => {
  const { city: citySlug } = useParams();
  const city = cities.find((c) => c.slug === citySlug);

  const intro = city
    ? `${BRAND.name} provides weekly maintenance, tree trimming & removal, mulch, sod, and landscape design across ${city.name}, ${city.state} and surrounding neighborhoods.`
    : "";

  useSeo({
    title: city
      ? `Landscaping & Tree Services in ${city.name}, ${city.state} | ${BRAND.name}`
      : "City",
    description: city
      ? `Landscape design, tree trimming, mulch, sod, and full landscape services in ${city.name}, ${city.state}. Call ${BRAND.phoneDisplay} for a free quote.`
      : "",
    canonical: `/areas/${citySlug}`,
    breadcrumbs: city
      ? [
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: `${city.name}, ${city.state}`, url: `/areas/${city.slug}` },
        ]
      : undefined,
    jsonLd: city
      ? [
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `${BRAND.name} — ${city.name}, ${city.state}`,
            url: `${SITE_URL}/areas/${city.slug}`,
            telephone: `+1${BRAND.phoneDigits}`,
            image: `${SITE_URL}/og-image.jpg`,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.state,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: city.geo.lat,
              longitude: city.geo.lng,
            },
            areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
          },
        ]
      : undefined,
  });

  if (!city) return <Navigate to="/service-areas" replace />;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/service-areas" className="hover:text-primary">
              Service Areas
            </Link>{" "}
            / {city.name}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Landscaping & Tree Services in {city.name}, {city.state}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{intro}</p>
          <RequestQuoteCTA size="lg" />

          <h2 className="text-2xl font-bold mt-12 mb-4">Services in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.id} to={`/services/${c.id}`}>
                  <Card className="h-full hover:border-primary/40 transition-colors">
                    <CardContent className="p-5 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{c.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {city.neighborhoods?.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-12 mb-3">
                Neighborhoods we serve in {city.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="px-3 py-1 rounded-full bg-secondary text-sm"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </>
          )}

          <InlineCallStrip />
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default CityPage;
