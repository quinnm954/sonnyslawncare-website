import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { BRAND } from "@/lib/brand";

type Props = { label?: string; size?: "sm" | "default" | "lg" };

const RequestQuoteCTA = ({ label = "Request a free quote", size = "default" }: Props) => (
  <Button asChild size={size} className="gap-2">
    <a href={`sms:${BRAND.phoneDigits}`}>
      <MessageSquare className="h-4 w-4" /> {label}
    </a>
  </Button>
);

export default RequestQuoteCTA;
