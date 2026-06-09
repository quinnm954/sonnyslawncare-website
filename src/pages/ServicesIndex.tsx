import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import { Link } from "react-router-dom";
import { categories } from "@/data/serviceCategories";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ServicesIndex = () => {
  useSeo({
    title: `Landscaping & Tree Services in ${BRAND.serviceArea} | ${BRAND.name}`,
    description: `Landscape design, tree trimming & removal, mulch, sod, irrigation, and full-property maintenance across ${BRAND.serviceArea}. Free quotes — call ${BRAND.phoneDisplay}.`,
    canonical: "/services",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Landscaping & Tree Services — ${BRAND.name}`,
      itemListElement: categories.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        url: `${SITE_URL}/services/${c.id}`,
      })),
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Landscaping & Tree Services in {BRAND.serviceArea}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Everything we offer across {BRAND.serviceArea}.
            </p>
            <RequestQuoteCTA size="lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.id} to={`/services/${c.id}`} className="group">
                  <Card className="h-full transition-shadow hover:shadow-lg hover:border-primary/40">
                    <CardContent className="p-6">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary">
                        {c.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ServicesIndex;
