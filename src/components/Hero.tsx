import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import heroImg from "@/assets/sonnys-hero.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Sonny's landscaper laying fresh sod in a Lee County, FL yard"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 md:from-background/90 md:via-background/60 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl md:text-left text-center">
          <p className="inline-block px-3 py-1 mb-3 text-[11px] md:text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/15 text-accent-foreground border border-accent/30">
            Serving {BRAND.serviceArea}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 text-balance">
            Landscaping & tree services{" "}
            <span className="text-primary">done right, the first time</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl md:mx-0 mx-auto">
            Landscape design, tree trimming &amp; removal, mulch, sod, and full-property maintenance across Lee &amp; Collier County, FL. Licensed, insured, and FNGLA Certified.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-start justify-center">
            <Button asChild size="lg" variant="accent" className="gap-2 w-full sm:w-auto min-h-12">
              <a href={`tel:${BRAND.phoneDigits}`}>
                <Phone className="h-5 w-5" />
                Call {BRAND.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="default" className="gap-2 w-full sm:w-auto min-h-12">
              <a href={`sms:${BRAND.phoneDigits}`}>
                <MessageSquare className="h-5 w-5" />
                Text for a free quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto min-h-12">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
