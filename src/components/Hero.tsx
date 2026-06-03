import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary">
            Serving {BRAND.serviceArea}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Premium lawn care that{" "}
            <span className="text-primary">shows up every week</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Weekly mowing, trimming, fertilization, mulch, palm trimming, and full
            landscape services across Lee County, FL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="default" className="gap-2">
              <a href={`tel:${BRAND.phoneDigits}`}>
                <Phone className="h-5 w-5" />
                Call {BRAND.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href={`sms:${BRAND.phoneDigits}`}>
                <MessageSquare className="h-5 w-5" />
                Text for a free quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
