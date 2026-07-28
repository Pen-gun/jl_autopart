import { site, whatsappUrl, instagramUrl } from "@/lib/site";
import { WhatsAppIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-100 py-10 text-brand-900 dark:bg-card dark:text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg font-bold uppercase tracking-wide">
            {site.name}
          </p>
          <p className="mt-1 text-xs text-brand-600 dark:text-muted-foreground">
            {site.addressFull}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message ${site.name} on WhatsApp`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-200 transition-colors hover:bg-whatsapp hover:text-white dark:bg-muted dark:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${site.name} on Instagram`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-200 transition-colors hover:bg-accent-500 hover:text-white dark:bg-muted dark:text-foreground"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-brand-200 px-6 pt-5 dark:border-border">
        <p className="text-center text-xs text-brand-600 dark:text-muted-foreground">
          &copy; {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
