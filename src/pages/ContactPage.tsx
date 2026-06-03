import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import Contact from "@/components/Contact";
import { useSeo } from "@/lib/useSeo";
import { BRAND } from "@/lib/brand";

const ContactPage = () => {
  useSeo({
    title: `Contact ${BRAND.name}`,
    description: `Call or text ${BRAND.phoneDisplay} for a free lawn care quote in ${BRAND.serviceArea}.`,
    canonical: "/contact",
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
