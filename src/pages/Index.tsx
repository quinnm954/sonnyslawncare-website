import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import SeoContent from "@/components/SeoContent";
import Newsletter from "@/components/Newsletter";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useSeo } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const Index = () => {
  useSeo({
    title: `${BRAND.name} — Lawn Care in ${BRAND.serviceArea}`,
    description: `Weekly lawn mowing, trimming, fertilization, mulch, and full landscape services across ${BRAND.serviceArea}. Call ${BRAND.phoneDisplay} for a free quote.`,
    canonical: "/",
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <About />
        <Testimonials />
        <SeoContent />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
