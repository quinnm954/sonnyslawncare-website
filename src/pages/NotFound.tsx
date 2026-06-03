import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/lib/useSeo";

const NotFound = () => {
  useSeo({
    title: "Page Not Found (404)",
    description: "The page you're looking for doesn't exist or has moved.",
    canonical: "/404",
    noindex: true,
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl font-bold text-primary mb-2">404</p>
          <h1 className="text-2xl font-bold mb-2">Page not found</h1>
          <p className="text-muted-foreground mb-6">
            That page doesn't exist or has moved.
          </p>
          <Button asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
