import { HardHat, Cog, Truck, type LucideIcon } from "lucide-react";

import { site } from "@/lib/site";

const highlights: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: HardHat,
    title: "Helmets & Riding Gloves",
    body: "Full-face, half-face, and scooter helmets alongside biking gloves, chosen for real protection, not just looks.",
  },
  {
    icon: Cog,
    title: "Genuine Auto Spare Parts",
    body: "Reliable spare parts for motorcycles and scooters, sourced from suppliers we have worked with for years.",
  },
  {
    icon: Truck,
    title: "Free Valley Delivery",
    body: "Order over WhatsApp and we deliver anywhere inside Kathmandu Valley at no extra cost.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
              About us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
              A local shop riders actually trust
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-600 sm:text-lg">
              <p>
                {site.name} is a motorcycle and scooter accessories shop based
                in {site.addressFull}. We stock quality helmets, biking gloves,
                and auto spare parts for everyday riders across the Valley.
              </p>
              <p>
                We keep our range focused rather than large. Every helmet and
                every part on our shelves is something we would fit on our own
                bike, so you can walk in, ask a straight question, and get a
                straight answer.
              </p>
              <p>
                Not sure what fits your model? Send us a message on WhatsApp
                with your bike or scooter details and we will tell you what we
                have, what it costs, and how soon we can get it to you.{" "}
                <span className="font-semibold text-brand-800">
                  Delivery inside Kathmandu Valley is free.
                </span>
              </p>
            </div>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 transition-colors hover:border-brand-200"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-800 text-accent-400">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">
                  {title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-brand-600">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
