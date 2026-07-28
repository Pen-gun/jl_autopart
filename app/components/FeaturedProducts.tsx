"use client";

import { motion } from "motion/react";
import { Shield, Star } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const helmets = [
  {
    name: "LS2 FF320 Stream",
    brand: "LS2",
    type: "Full Face",
    features: ["ECE Certified", "Dual Visor", "Ventilation"],
    price: "Starting ₹8,500",
  },
  {
    name: "MT Thunder 3",
    brand: "MT Helmets",
    type: "Full Face",
    features: ["Pinlock Ready", "Quick Release", "Aerodynamic"],
    price: "Starting ₹7,200",
  },
  {
    name: "Steelbird SBA-1",
    brand: "Steelbird",
    type: "Full Face",
    features: ["ISI Certified", "Scratch Resistant", "Lightweight"],
    price: "Starting ₹2,800",
  },
  {
    name: "Studds Thunder",
    brand: "Studds",
    type: "Full Face",
    features: ["ISI Certified", "Clear Visor", "Comfortable Padding"],
    price: "Starting ₹1,800",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24 dark:from-background dark:to-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
            Featured Helmets
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            Protection Starts Here
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Premium full-face helmets for every rider and budget
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {helmets.map((helmet, i) => (
            <motion.div
              key={helmet.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:border-accent-500/40 hover:shadow-lg"
            >
              {/* Placeholder for helmet image */}
              <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100/50">
                <Shield className="h-20 w-20 text-brand-300" strokeWidth={1.5} />
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                      {helmet.brand}
                    </div>
                    <h3 className="mt-1 font-heading text-lg font-bold uppercase tracking-tight text-foreground">
                      {helmet.name}
                    </h3>
                  </div>
                </div>

                <div className="mb-3 inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground">
                  <Star className="h-3 w-3" />
                  {helmet.type}
                </div>

                <ul className="mb-4 space-y-1.5 text-xs text-muted-foreground">
                  {helmet.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5">
                      <div className="h-1 w-1 rounded-full bg-accent-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-3 font-heading text-base font-bold text-foreground">
                  {helmet.price}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
            <p className="text-sm text-muted-foreground">
            Looking for a different model or size?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-600 underline decoration-accent-500/30 underline-offset-4 transition-colors hover:text-accent-700 hover:decoration-accent-600/50"
            >
              Message us for full inventory
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
