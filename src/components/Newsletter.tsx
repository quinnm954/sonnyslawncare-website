import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thanks! We'll be in touch with seasonal lawn tips.");
    setEmail("");
  };

  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Seasonal lawn tips, no spam</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Quick monthly emails about Florida-specific landscaping & tree services.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
