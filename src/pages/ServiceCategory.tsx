import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import InlineCallStrip from "@/components/InlineCallStrip";
import { categories } from "@/data/serviceCategories";
import { Card, CardContent } from "@/components/ui/card";
import { useSeo } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ServiceCategory = () => {
  const { slug } = useParams();
  const category = categories.find((c) => c.id === slug);

  useSeo({
    title: category
      ? `${category.title} in ${BRAND.serviceArea} — ${BRAND.name}`
      : "Service",
    description: category?.description ?? "",
    canonical: `/services/${slug}`,
  });

  if (!category) return <Navigate to="/services" replace />;

  const Icon = category.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{category.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
            <RequestQuoteCTA size="lg" />
          </div>

          <h2 className="text-2xl font-bold mb-4">What's included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {category.services.map((s) => {
              const SIcon = s.icon;
              return (
                <Card key={s.name}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <SIcon className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{s.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <InlineCallStrip />

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Other services</h2>
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((c) => c.id !== category.id)
                .map((c) => (
                  <Link
                    key={c.id}
                    to={`/services/${c.id}`}
                    className="px-3 py-1.5 rounded-full bg-secondary text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {c.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ServiceCategory;
