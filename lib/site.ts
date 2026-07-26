/**
 * Single source of truth for every piece of business data on the site.
 *
 * TODO: replace the values marked `PLACEHOLDER` with the real ones before
 * going live. Nothing else in the codebase hardcodes contact details.
 */

const rawPhone = "+977 9800000000"; // PLACEHOLDER

export const site = {
  name: "JL Autoparts",
  tagline: "Your Trusted Helmet & Auto Parts Shop",
  description:
    "JL Autoparts in Satdobato, Lalitpur supplies quality motorcycle and scooter helmets, biking gloves, and genuine auto spare parts, with free delivery inside Kathmandu Valley.",

  // Contact
  phoneDisplay: rawPhone,
  phoneDial: rawPhone.replace(/[^\d+]/g, ""),
  // wa.me needs the country code with no "+", spaces or dashes.
  whatsappNumber: "9779800000000", // PLACEHOLDER
  whatsappMessage:
    "Hi JL Autoparts! I found you online and I'd like to ask about a product.",
  instagramHandle: "jl_autopart",

  // Location
  addressLine: "Satdobato, Lalitpur",
  addressFull: "Satdobato, Lalitpur, Nepal",
  mapsQuery: "JL Autoparts, Satdobato, Lalitpur, Nepal", // PLACEHOLDER: use the exact Google Business listing name

  // Hours
  hours: "Sunday to Friday, 9:00 AM to 7:00 PM",
  hoursNote: "Saturday closed",

  // Used for the canonical URL, sitemap and Open Graph tags.
  url: "https://jlautoparts.com", // PLACEHOLDER
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const instagramUrl = `https://instagram.com/${site.instagramHandle}`;

export const telUrl = `tel:${site.phoneDial}`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.mapsQuery,
)}`;

// Keyless Google Maps embed. Swap for the "Embed a map" iframe from the
// shop's Google Business Profile once it exists, since that pins the exact marker.
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&z=16&output=embed`;
