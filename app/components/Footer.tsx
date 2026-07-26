import { site, whatsappUrl, instagramUrl } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  // Evaluated at build time. Static export means no per-request rendering,
  // so rebuild the site if the year rolls over.
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-1.5 text-sm text-brand-200/80">
            {site.addressFull}
          </p>
          <p className="mt-1 text-sm text-brand-200/80">
            Free delivery inside Kathmandu Valley
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message ${site.name} on WhatsApp`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on Instagram`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-accent-500"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6">
        <p className="text-center text-sm text-brand-200/60">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
