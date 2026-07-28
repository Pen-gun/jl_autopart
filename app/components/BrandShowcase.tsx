"use client";

import { motion } from "motion/react";
import Image from "next/image";

const brands = [
  { name: "LS2", logo: "/ls2-logo.png", tag: "Premium Full-Face" },
  { name: "MT Helmets", logo: "/mt-logo.png", tag: "European Design" },
  { name: "Steelbird", logo: "/steelbird-logo.png", tag: "ISI Certified" },
  { name: "Studds", logo: "/studds-logo.png", tag: "Trusted Quality" },
  { name: "SMK", logo: "/smk-logo.png", tag: "Track Ready" },
  { name: "Vega", logo: "/vega-logo.png", tag: "Street & Sport" },
];

export default function BrandShowcase() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
            Authorized Dealer
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-brand-900 sm:text-3xl">
            Genuine Helmet Brands
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl p-3 transition-transform"
            >
              <div className="relative h-14 w-full opacity-90 transition-opacity group-hover:opacity-100 sm:h-16">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-brand-500">
                {brand.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
