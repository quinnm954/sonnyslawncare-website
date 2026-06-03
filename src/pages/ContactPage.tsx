import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Contact from "@/components/Contact";
import { useSeo, SITE_URL } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ContactPage = () => {
  useSeo({
    title: `Contact ${BRAND.name} | Free Lawn Care Quote in ${BRAND.serviceArea}`,
    description: `Call or text ${BRAND.phoneDisplay} for a free lawn care quote in ${BRAND.serviceArea}. Same-day response, ${BRAND.hours}.`,
    canonical: "/contact",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: `Contact ${BRAND.name}`,
      url: `${SITE_URL}/contact`,
      mainEntity: {
        "@type": "LocalBusiness",
        name: BRAND.name,
        telephone: `+1${BRAND.phoneDigits}`,
        email: BRAND.email,
        areaServed: BRAND.serviceArea,
        openingHours: BRAND.hours,
      },
    },
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default ContactPage;
