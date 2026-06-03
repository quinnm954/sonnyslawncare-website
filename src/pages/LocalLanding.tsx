import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { findLocalLandingPage } from "@/data/localLandingPages";
import { useSeo } from "@/lib/useSeo";

const LocalLanding = () => {
  const { slug } = useParams();
  const page = slug ? findLocalLandingPage(slug) : undefined;

  useSeo({
    title: page?.title ?? "Local Lawn Care",
    description: page?.metaDescription ?? "",
    canonical: `/local/${slug}`,
  });

  if (!page) return <Navigate to="/services" replace />;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.h1}</h1>
          <p className="text-lg text-muted-foreground mb-6">{page.intro}</p>
          <ul className="space-y-2 mb-8">
            {page.bullets.map((b) => (
              <li key={b} className="text-muted-foreground">
                • {b}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4">
            {page.faqs.map((f) => (
              <div key={f.question}>
                <p className="font-semibold">{f.question}</p>
                <p className="text-sm text-muted-foreground">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default LocalLanding;
