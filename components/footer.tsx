import {
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#studio", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramLogo },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedinLogo },
  { href: "https://x.com", label: "X", icon: XLogo },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.08em]">FATHOM</p>
          <p className="mt-3 max-w-[32ch] text-sm text-muted">
            An independent design studio. Remote-first, working with clients
            everywhere.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-text"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-line pt-6">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Fathom Studio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
