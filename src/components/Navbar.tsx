"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...links.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "border-b border-border bg-background"
          : scrolled
            ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label="Jotika Das — home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white shadow-lg shadow-primary/20">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold text-foreground">
              {profile.name}
            </span>
            <span className="mt-1 text-[11px] text-muted">
              {profile.designation}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active === link.href.slice(1)
                    ? "text-primary-soft"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resume}
            download
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 text-sm font-semibold text-primary-soft transition hover:border-primary/70 hover:bg-primary/15"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/70 text-foreground transition hover:border-primary/50 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto bg-background lg:hidden"
          >
            <div className="mx-auto flex min-h-full max-w-6xl flex-col px-5 pb-8 pt-4 sm:px-8">
              <ul className="flex flex-col gap-1">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-3 py-3 text-sm font-medium transition ${
                        active === link.href.slice(1)
                          ? "bg-primary/10 text-primary-soft"
                          : "text-muted hover:bg-white/[0.03] hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <div className="mt-auto border-t border-border/70 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Get in touch
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 block text-sm font-medium text-foreground transition hover:text-primary-soft"
                >
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="mt-1 block text-sm text-muted transition hover:text-primary-soft"
                >
                  {profile.phoneDisplay}
                </a>
                <SocialLinks className="mt-4" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
