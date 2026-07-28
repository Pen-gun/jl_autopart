import { HardHat, Cog, Truck, type LucideIcon } from "lucide-react";

import { site } from "@/lib/site";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "./ScrollReveal";

const highlights: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: HardHat,
    title: "Helmets & Riding Gloves",
    body: "Full-face, half-face, and scooter helmets alongside biking gloves, chosen for real protection.",
  },
  {
    icon: Cog,
    title: "Genuine Spare Parts",
    body: "Reliable motorcycle and scooter parts from suppliers we have worked with for years.",
  },
  {
    icon: Truck,
    title: "Free Valley Delivery",
    body: "Order over WhatsApp. We deliver anywhere inside Kathmandu Valley at no extra cost.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              About us
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
              A shop riders actually trust
            </h2>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                {site.name} is a motorcycle and scooter accessories shop in{" "}
                {site.addressFull}. We stock quality helmets, biking gloves,
                and auto spare parts for everyday riders across the Valley.
              </p>
              <p>
                Every helmet and every part on our shelves is something we would
                fit on our own bike. Walk in, ask a straight question, get a
                straight answer.
              </p>
              <p>
                Not sure what fits? Message us on WhatsApp with your bike details.
                We will tell you what we have, what it costs, and when we can
                deliver.{" "}
                <span className="font-semibold text-foreground">
                  Delivery inside Kathmandu Valley is free.
                </span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, body }) => (
              <ScrollRevealItem key={title}>
                <Card className="rounded-xl border-border/70 bg-card/85 hover:border-accent-500/30">
                  <CardHeader>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-900 text-accent-400 dark:bg-brand-100 dark:text-brand-900">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <CardTitle className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </div>
      </div>
    </section>
  );
}
