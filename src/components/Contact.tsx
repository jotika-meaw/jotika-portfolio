"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

const inputStyles =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nReply to: ${email}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something meaningful"
            description="Have an internship, project, or collaboration in mind? I'd love to hear from you."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1} className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-primary/40 hover:bg-surface"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Email
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground group-hover:text-primary-soft">
                  {profile.email}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Best for detailed enquiries
                </p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>

            <a
              href={`tel:${profile.phoneHref}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-primary/40 hover:bg-surface"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Phone
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary-soft">
                  {profile.phoneDisplay}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Available for calls & messages
                </p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/60 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  Location
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {profile.location}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Open to remote opportunities
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface/40 p-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Find me online
                </p>
                <p className="mt-1 text-xs text-muted">
                  GitHub, LinkedIn & email
                </p>
              </div>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Send a message
              </h3>
              <p className="mt-1 text-sm text-muted">
                Fill in the form and your email app will open with the message
                ready to send.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your idea, role, or project..."
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary/90 sm:w-auto sm:px-6"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>

                {sent ? (
                  <p className="flex items-center gap-2 text-sm text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    Your email app should open with the message pre-filled.
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
