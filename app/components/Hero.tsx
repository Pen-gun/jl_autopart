import { Check, Phone } from "lucide-react";

import { site, whatsappUrl, instagramUrl, telUrl } from "@/lib/site";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-brand-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#334155_0%,#0f172a_55%,#0b1220_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(88svh-4rem)] max-w-6xl flex-col justify-center px-6 py-24 sm:py-28">
        <Badge variant="outline" className="border-accent-400/30 bg-accent-400/10 text-accent-400 px-4 py-1.5 text-sm gap-2">
          <Check className="h-4 w-4" strokeWidth={2.5} />
          Free delivery inside Kathmandu Valley
        </Badge>

        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-200 sm:text-xl">
          {site.tagline}. Helmets, biking gloves, and genuine auto spare parts,
          from our shop in {site.addressLine}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="whatsapp" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Message us on WhatsApp
            </a>
          </Button>
          <Button variant="outlineLight" asChild>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              Follow @{site.instagramHandle}
            </a>
          </Button>
          <Button variant="outlineLight" asChild>
            <a href={telUrl}>
              <Phone />
              Call {site.phoneDisplay}
            </a>
          </Button>
        </div>

        <Separator className="mt-14 bg-white/10" />

        <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-brand-200/70">Find us at</dt>
            <dd className="mt-1 font-semibold text-white">
              {site.addressLine}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-brand-200/70">Open</dt>
            <dd className="mt-1 font-semibold text-white">Sun to Fri, 9 to 7</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-sm text-brand-200/70">Delivery</dt>
            <dd className="mt-1 font-semibold text-white">
              Free inside the Valley
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
