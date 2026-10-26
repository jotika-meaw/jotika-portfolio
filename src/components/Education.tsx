import {
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  Languages,
  MapPin,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { certifications, education } from "@/data/education";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background & certifications"
            description="Building a strong foundation in computer science while staying curious beyond the syllabus."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm text-primary-soft">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {education.period}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {education.location}
                </span>
              </div>

              <span className="mt-4 inline-flex rounded-full border border-success/25 bg-success/10 px-3 py-1 text-xs font-medium text-success-soft">
                {education.status}
              </span>

              <p className="mt-5 text-sm leading-7 text-muted">
                {education.description}
              </p>

              <div className="mt-6 border-t border-border/70 pt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  <Languages className="h-4 w-4" />
                  Languages
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-md border border-border bg-foreground/[0.03] px-2.5 py-1 text-xs text-muted"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-xs text-muted">
                    Continuous learning & verified skills
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-foreground/[0.02] p-3.5"
                  >
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <div>
                      <p className="text-sm font-medium leading-6 text-foreground/90">
                        {certification.name}
                      </p>
                      <p className="text-xs text-muted">
                        {certification.issuer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
