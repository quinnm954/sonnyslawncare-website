import { Link } from "react-router-dom";
import { categories } from "@/data/serviceCategories";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our services</h2>
          <p className="text-muted-foreground">
            Everything your yard needs — from weekly maintenance to full landscape installs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <Link key={c.id} to={`/services/${c.id}`} className="group">
                <Card className="h-full transition-shadow hover:shadow-lg hover:border-primary/40">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {c.description}
                    </p>
                    <ul className="text-sm space-y-1">
                      {c.services.slice(0, 4).map((s) => (
                        <li key={s.name} className="text-muted-foreground">
                          • {s.name}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
