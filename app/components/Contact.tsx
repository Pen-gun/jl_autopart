import { Phone, MapPin, Clock, type LucideIcon } from "lucide-react";

import {
  site,
  whatsappUrl,
  instagramUrl,
  telUrl,
  mapsLinkUrl,
  mapsEmbedUrl,
} from "@/lib/site";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            Message us, we reply fast
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-600 sm:text-lg">
            WhatsApp is the quickest way to reach us. Tell us your bike model
            and what you need, and we will get back to you with availability
            and price.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Card className="border-brand-200/70 bg-white p-0">
            <CardHeader className="p-6 sm:p-8 pb-0 sm:pb-0">
              <Button variant="whatsapp" size="full" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </Button>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-6">
              <dl className="space-y-6">
                <ContactRow icon={Phone} label="Phone">
                  <a
                    href={telUrl}
                    className="font-semibold text-brand-900 underline-offset-4 hover:text-accent-600 hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </ContactRow>

                <ContactRow brandIcon={<InstagramIcon className="h-5 w-5" />} label="Instagram">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-900 underline-offset-4 hover:text-accent-600 hover:underline"
                  >
                    @{site.instagramHandle}
                  </a>
                </ContactRow>

                <ContactRow icon={MapPin} label="Address">
                  <a
                    href={mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-900 underline-offset-4 hover:text-accent-600 hover:underline"
                  >
                    {site.addressFull}
                  </a>
                </ContactRow>

                <ContactRow icon={Clock} label="Opening hours">
                  <p className="font-semibold text-brand-900">{site.hours}</p>
                  <p className="mt-0.5 text-sm text-brand-600">
                    {site.hoursNote}
                  </p>
                </ContactRow>
              </dl>
            </CardContent>
          </Card>

          <Card className="border-brand-200/70 bg-white p-0 overflow-hidden">
            <CardContent className="p-0 flex-1">
              <iframe
                src={mapsEmbedUrl}
                title={`Map showing ${site.name} in ${site.addressFull}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-4/3 w-full border-0 lg:aspect-auto lg:h-full lg:min-h-[22rem]"
              />
            </CardContent>
            <Separator className="bg-border" />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="text-sm text-brand-600">{site.addressFull}</p>
              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-semibold text-accent-600 underline-offset-4 hover:underline"
              >
                Open in Maps
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  brandIcon,
  label,
  children,
}: {
  icon?: LucideIcon;
  brandIcon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
        {Icon ? <Icon className="h-5 w-5" strokeWidth={1.8} /> : brandIcon}
      </span>
      <div>
        <dt className="text-sm text-brand-600">{label}</dt>
        <dd className="mt-0.5">{children}</dd>
      </div>
    </div>
  );
}
