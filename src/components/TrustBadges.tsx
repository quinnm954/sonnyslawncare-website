import { ShieldCheck, MapPin, Star, Clock } from "lucide-react";
import { BRAND } from "@/lib/brand";

const ITEMS = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: BRAND.serviceArea },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "Same-Day Quotes" },
];

const TrustBadges = () => (
  <section className="py-8 border-y border-border bg-secondary/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {ITEMS.map((i) => {
          const Icon = i.icon;
          return (
            <div key={i.label} className="flex items-center justify-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-primary" />
              <span className="font-medium">{i.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustBadges;
