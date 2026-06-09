import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Review = { name: string; city: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    city: "Fort Myers",
    text: "Sonny and his crew show up when they say they will and the property always looks immaculate. Great with our palms.",
  },
  {
    name: "Dave R.",
    city: "Cape Coral",
    text: "Trimmed a huge oak that was overhanging our pool cage — fast, safe, and cleaned up perfectly. Fair price too.",
  },
  {
    name: "Linda P.",
    city: "Estero",
    text: "Beautiful landscape redesign. They picked the right plants for our yard and everything is thriving.",
  },
];

const Testimonials = () => (
  <section className="py-12 md:py-24 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">What our customers say</h2>
        <p className="text-sm md:text-base text-muted-foreground">Real reviews from Lee &amp; Collier County homeowners.</p>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
        {REVIEWS.map((r) => (
          <Card key={r.name} className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto">
            <CardContent className="p-5 md:p-6">
              <div className="flex gap-1 mb-3 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
              <p className="text-sm font-semibold">
                {r.name} <span className="text-muted-foreground font-normal">— {r.city}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
