import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Clock, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/brand";

const About = () => (
  <section className="py-16 md:py-24 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Why {BRAND.shortName}?</h2>
        <p className="text-muted-foreground">
          We're a Lee County-based landscaping & tree services crew focused on consistency, quality, and
          showing up when we say we will.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Clock,
            title: "Reliable schedule",
            body: "Same day every week, no surprises. We text before we arrive.",
          },
          {
            icon: Leaf,
            title: "Florida-grass expertise",
            body: "St. Augustine, Zoysia, Bahia — we know how to keep them thick and green.",
          },
          {
            icon: ShieldCheck,
            title: "Licensed & insured",
            body: "Fully insured crews and commercial-grade equipment on every job.",
          },
        ].map((f) => {
          const Icon = f.icon;
          return (
            <Card key={f.title}>
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.body}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default About;
