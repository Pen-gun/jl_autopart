import { Shield, Truck, CheckCircle, Phone } from "lucide-react";
import { site, telUrl } from "@/lib/site";

const features = [
  {
    icon: Shield,
    text: "Genuine Products Only",
  },
  {
    icon: Truck,
    text: "Free Valley Delivery",
  },
  {
    icon: CheckCircle,
    text: "Safety Certified",
  },
  {
    icon: Phone,
    text: site.phoneDisplay,
  },
];

export default function TrustBar() {
  return (
    <div className="border-b border-brand-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {features.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 text-sm"
            >
              <Icon className="h-4 w-4 text-accent-600" strokeWidth={2} />
              <span className="font-medium text-brand-800">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
