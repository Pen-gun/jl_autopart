"use client";

import { Check, Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { site, whatsappUrl, instagramUrl, telUrl } from "@/lib/site";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Full background helmet image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-hidden="true"
        className="absolute inset-0 z-0"
      >
        <Image
          src="/helmet-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Light gradient for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent dark:from-black/75 dark:via-black/55"
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-10 h-1 bg-accent-500"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-3.5rem)] max-w-6xl flex-col justify-center px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="outline" className="border-accent-500/40 bg-accent-500/10 px-3 py-1 text-xs gap-1.5 uppercase tracking-wide text-accent-300 dark:border-accent-400/30 dark:bg-accent-500/15 dark:text-accent-200">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            Free delivery inside Kathmandu Valley
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-6 max-w-4xl font-heading text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
        >
          Premium motorcycle helmets from <span className="font-semibold text-white">LS2, MT Helmets, Steelbird, Studds</span> and more. Plus riding gloves and genuine spare parts from {site.addressLine}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button variant="whatsapp" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Message us on WhatsApp
            </a>
          </Button>
          <Button variant="outlineLight" asChild>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              @{site.instagramHandle}
            </a>
          </Button>
          <Button variant="outlineLight" asChild>
            <a href={telUrl}>
              <Phone />
              {site.phoneDisplay}
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-x-8 border-t border-white/10 pt-6"
        >
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/70">Location</dt>
            <dd className="mt-1 text-sm font-semibold text-white">{site.addressLine}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/70">Hours</dt>
            <dd className="mt-1 text-sm font-semibold text-white">Sun to Fri, 9 to 7</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/70">Delivery</dt>
            <dd className="mt-1 text-sm font-semibold text-white">Free in Valley</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
