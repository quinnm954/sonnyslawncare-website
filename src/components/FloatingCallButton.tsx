import { Phone, MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/brand";

const FloatingCallButton = () => (
  <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:hidden">
    <a
      href={`sms:${BRAND.phoneDigits}`}
      className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-secondary-foreground shadow-lg active:scale-95 transition"
      aria-label="Text us"
    >
      <MessageSquare className="h-5 w-5" />
    </a>
    <a
      href={`tel:${BRAND.phoneDigits}`}
      className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg active:scale-95 transition"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingCallButton;
