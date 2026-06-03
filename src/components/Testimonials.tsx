import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Review = { name: string; city: string; text: string };

const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    city: "Fort Myers",
    text: "Best lawn service we've had in years. They show up every week without fail and the yard always looks sharp.",
  },
  {
    name: "Dave R.",
    city: "Cape Coral",
    text: "Great work on hedge trimming and mulch refresh. Fair prices and easy to text.",
  },
  {
    name: "Linda P.",
    city: "Estero",
    text: "Fertilization program turned our St. Augustine around in a few months. Thick and green now.",
  },
];

const Testimonials = () => (
  <section className="py-16 md:py-24 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What our customers say</h2>
        <p className="text-muted-foreground">Real reviews from Lee County homeowners.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <Card key={r.name}>
            <CardContent className="p-6">
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
