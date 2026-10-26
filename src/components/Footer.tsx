import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span>
              <span className="block font-display text-sm font-semibold text-foreground">
                {profile.name}
              </span>
              <span className="block text-xs text-muted">
                {profile.designation}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-primary-soft"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => {
              const external = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary/50 hover:text-primary-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary-soft transition hover:bg-primary/20"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
