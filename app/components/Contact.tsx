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
import { WhatsAppIcon, InstagramIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
            Get in touch
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-brand-900 sm:text-4xl">
            Message us, we reply fast
          </h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-brand-600">
            WhatsApp is the quickest way. Tell us your bike model and what you
            need.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal delay={0.1}>
            <Card className="rounded-xl border-brand-200/70 bg-white p-0 h-full">
              <CardHeader className="p-5 sm:p-6 pb-0 sm:pb-0">
                <Button variant="whatsapp" size="full" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 pt-5">
                <dl className="space-y-5">
                  <ContactRow icon={Phone} label="Phone">
                    <a
                      href={telUrl}
                      className="font-semibold text-brand-900 hover:text-accent-600"
                    >
                      {site.phoneDisplay}
                    </a>
                  </ContactRow>

                  <ContactRow brandIcon={<InstagramIcon className="h-5 w-5" />} label="Instagram">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-900 hover:text-accent-600"
                    >
                      @{site.instagramHandle}
                    </a>
                  </ContactRow>

                  <ContactRow icon={MapPin} label="Address">
                    <a
                      href={mapsLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-brand-900 hover:text-accent-600"
                    >
                      {site.addressFull}
                    </a>
                  </ContactRow>

                  <ContactRow icon={Clock} label="Hours">
                    <p className="font-semibold text-brand-900">{site.hours}</p>
                    <p className="mt-0.5 text-xs text-brand-600">{site.hoursNote}</p>
                  </ContactRow>
                </dl>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="rounded-xl border-brand-200/70 bg-white p-0 overflow-hidden h-full">
              <CardContent className="p-0 flex-1">
                <iframe
                  src={mapsEmbedUrl}
                  title={`Map showing ${site.name} in ${site.addressFull}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-4/3 w-full border-0 lg:aspect-auto lg:h-full lg:min-h-[20rem]"
                />
              </CardContent>
              <div className="flex items-center justify-between gap-4 border-t border-brand-200/70 px-4 py-3">
                <p className="text-xs text-brand-600">{site.addressFull}</p>
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-semibold text-accent-600 hover:underline"
                >
                  Open in Maps
                </a>
              </div>
            </Card>
          </ScrollReveal>
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
    <div className="flex gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
        {Icon ? <Icon className="h-4 w-4" strokeWidth={1.8} /> : brandIcon}
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wide text-brand-600">{label}</dt>
        <dd className="mt-0.5">{children}</dd>
      </div>
    </div>
  );
}
