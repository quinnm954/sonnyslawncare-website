import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { BRAND } from "@/lib/brand";

const Contact = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Get a free quote</h2>
        <p className="text-muted-foreground mb-8">
          Call or text us with your address — we'll send a quick estimate, usually within
          the same day.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Button asChild size="lg" className="gap-2">
            <a href={`tel:${BRAND.phoneDigits}`}>
              <Phone className="h-5 w-5" /> Call {BRAND.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={`sms:${BRAND.phoneDigits}`}>
              <MessageSquare className="h-5 w-5" /> Text us
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-sm">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Hours</p>
              <p className="text-muted-foreground">{BRAND.hours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Service area</p>
              <p className="text-muted-foreground">{BRAND.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
