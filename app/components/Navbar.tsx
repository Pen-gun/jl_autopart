import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/**
 * Sticky header. With only two destinations there's no case for a hamburger,
 * so the links stay visible at every breakpoint and the whole thing needs no
 * client-side JavaScript.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-900/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6 sm:gap-8"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-accent-400"
        >
          {site.name}
        </a>

        <ul className="ml-auto flex items-center gap-5 sm:gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-brand-200 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}
