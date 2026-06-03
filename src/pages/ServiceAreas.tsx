import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import { cities } from "@/data/cities";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ServiceAreas = () => {
  useSeo({
    title: `Service Areas | ${BRAND.name} — ${BRAND.serviceArea}`,
    description: `Cities and neighborhoods we serve across ${BRAND.serviceArea}: Fort Myers, Cape Coral, Lehigh Acres, Bonita Springs, Estero, and more.`,
    canonical: "/service-areas",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Service Areas", url: "/service-areas" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Service Areas — ${BRAND.name}`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Lee County, FL",
          url: `${SITE_URL}/lee-county-fl`,
        },
        ...cities.map((c, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: `${c.name}, ${c.state}`,
          url: `${SITE_URL}/areas/${c.slug}`,
        })),
      ],
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Service Areas in {BRAND.serviceArea}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              We provide weekly lawn care across {BRAND.serviceArea}.
            </p>
            <RequestQuoteCTA size="lg" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/lee-county-fl" className="group sm:col-span-2 lg:col-span-3">
              <Card className="hover:border-primary/40 transition-colors">
                <CardContent className="p-5 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold group-hover:text-primary">
                      All of Lee County, FL
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Countywide lawn care overview
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            {cities.map((c) => (
              <Link key={c.slug} to={`/areas/${c.slug}`} className="group">
                <Card className="h-full hover:border-primary/40 transition-colors">
                  <CardContent className="p-5">
                    <p className="font-semibold group-hover:text-primary">
                      {c.name}, {c.state}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {c.zips.slice(0, 4).join(", ")}
                    </p>
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

export default ServiceAreas;
