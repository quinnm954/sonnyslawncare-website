import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Testimonials from "@/components/Testimonials";
import RequestQuoteCTA from "@/components/RequestQuoteCTA";
import { useSeo } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const Reviews = () => {
  useSeo({
    title: `Reviews — ${BRAND.name}`,
    description: `Customer reviews of ${BRAND.name} in ${BRAND.serviceArea}.`,
    canonical: "/reviews",
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Customer Reviews</h1>
          <p className="text-muted-foreground mb-6">
            What our customers say about working with us.
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
