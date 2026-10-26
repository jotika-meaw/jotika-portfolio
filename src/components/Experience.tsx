import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  Users,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { experiences, type Experience } from "@/data/experience";

const typeStyles: Record<
  Experience["type"],
  { icon: typeof Users; className: string }
> = {
  Leadership: {
    icon: Users,
    className: "border-primary/25 bg-primary/10 text-primary-soft",
  },
  Ambassador: {
    icon: Megaphone,
    className: "border-secondary/25 bg-secondary/10 text-secondary",
  },
  Volunteer: {
    icon: HeartHandshake,
    className: "border-success/25 bg-success/10 text-success-soft",
  },
  Internship: {
    icon: Briefcase,
    className: "border-warning/25 bg-warning/10 text-warning-soft",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Leadership, community & internships"
            description="Roles where I've learned to organize, communicate, and create opportunities for others."
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-[23px]" />

          <div className="space-y-5">
            {experiences.map((experience, index) => {
              const style = typeStyles[experience.type];
              const Icon = style.icon;
              return (
                <Reveal key={`${experience.role}-${experience.organization}`} delay={index * 0.06}>
                  <div className="relative flex gap-4 sm:gap-6">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-12 sm:w-12 ${style.className}`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>

                    <div className="flex-1 rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-primary/30 hover:bg-surface sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                            {experience.role}
                          </h3>
                          <p className="mt-0.5 text-sm text-primary-soft">
                            {experience.organization}
                          </p>
                        </div>
                        <div className="flex flex-col items-start gap-2 sm:items-end">
                          <span className="text-xs text-muted">
                            {experience.period}
                          </span>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.className}`}
                          >
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-7 text-foreground/90">
                Currently seeking{" "}
                <span className="font-semibold text-foreground">
                  software engineering and AI/ML internship
                </span>{" "}
                opportunities where I can contribute and keep growing.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center rounded-xl border border-primary/40 bg-background/40 px-4 py-2 text-sm font-semibold text-primary-soft transition hover:border-primary/70 hover:bg-primary/10"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
