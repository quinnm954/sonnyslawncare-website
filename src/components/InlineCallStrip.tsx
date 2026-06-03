import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/brand";

const InlineCallStrip = () => (
  <div className="my-6 p-4 rounded-lg border border-border bg-secondary/30 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
    <p className="text-sm font-medium">Need a free quote? Call or text us anytime.</p>
    <div className="flex gap-2">
      <Button asChild size="sm" className="gap-2">
        <a href={`tel:${BRAND.phoneDigits}`}>
          <Phone className="h-4 w-4" /> Call
        </a>
      </Button>
      <Button asChild size="sm" variant="secondary" className="gap-2">
        <a href={`sms:${BRAND.phoneDigits}`}>
          <MessageSquare className="h-4 w-4" /> Text
        </a>
      </Button>
    </div>
  </div>
);

export default InlineCallStrip;
