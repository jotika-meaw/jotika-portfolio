import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { certifications, education } from "@/data/education";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download the resume of Jotika Das — Full Stack Developer and CSE student at USTC.",
};

const sectionTitle =
  "border-b border-slate-300 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-200 py-6 print:bg-white print:py-0">
      <div className="mx-auto mb-4 flex w-full max-w-[210mm] items-center justify-between px-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      <article
        className="mx-auto w-full max-w-[210mm] bg-white px-[14mm] py-[12mm] text-slate-800 shadow-2xl print:max-w-none print:shadow-none"
        style={{
          fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <header className="border-b-2 border-slate-900 pb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-[32px] font-bold leading-none tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                Full Stack Developer
              </p>
            </div>

            <div className="space-y-1 text-[10.5px] leading-4 text-slate-600 sm:text-right">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-blue-700 sm:justify-end"
              >
                <Mail className="h-3 w-3 shrink-0" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="flex items-center gap-1.5 hover:text-blue-700 sm:justify-end"
              >
                <Phone className="h-3 w-3 shrink-0" />
                {profile.phoneDisplay}
              </a>
              <p className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="h-3 w-3 shrink-0" />
                {profile.location}
              </p>
              <p className="flex items-center gap-1.5 sm:justify-end">
                <ExternalLink className="h-3 w-3 shrink-0" />
                <a
                  href={profile.github}
                  className="hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jotika-meaw
                </a>
                <span className="text-slate-400">·</span>
                <a
                  href={profile.linkedin}
                  className="hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/jotikadas
                </a>
              </p>
            </div>
          </div>
        </header>

        <section className="mt-5">
          <h2 className={sectionTitle}>Summary</h2>
          <p className="mt-2 text-[11px] leading-[1.55] text-slate-700">
            {profile.summary}
          </p>
        </section>

        <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <section>
              <h2 className={sectionTitle}>Experience & Leadership</h2>
              <div className="mt-2.5 space-y-3">
                {experiences.map((experience) => (
                  <div
                    key={`${experience.role}-${experience.organization}`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-[11px] font-bold leading-4 text-slate-900">
                        {experience.role}
                        <span className="font-medium text-slate-600">
                          {" "}
                          — {experience.organization}
                        </span>
                      </p>
                      <span className="shrink-0 text-[9px] text-slate-500">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-[10px] leading-[1.5] text-slate-600">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={sectionTitle}>Selected Projects</h2>
              <div className="mt-2.5 space-y-2.5">
                {projects.map((project) => (
                  <div key={project.slug}>
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-[11px] font-bold leading-4 text-slate-900">
                        {project.title}
                      </p>
                      <span className="shrink-0 text-[9px] text-slate-500">
                        {project.tech.join(" · ")}
                      </span>
                    </div>
                    <p className="text-[10px] leading-[1.5] text-slate-600">
                      {project.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <section>
              <h2 className={sectionTitle}>Education</h2>
              <div className="mt-2">
                <p className="text-[11px] font-bold leading-4 text-slate-900">
                  {education.degree}
                </p>
                <p className="text-[10px] leading-[1.5] text-slate-600">
                  {education.institution}
                </p>
                <p className="text-[9px] text-slate-500">
                  {education.period} · {education.status}
                </p>
              </div>
            </section>

            <section>
              <h2 className={sectionTitle}>Skills</h2>
              <div className="mt-2 space-y-2">
                {skillCategories.map((category) => (
                  <div key={category.key}>
                    <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-500">
                      {category.title}
                    </p>
                    <p className="text-[10px] leading-[1.5] text-slate-700">
                      {category.skills.map((skill) => skill.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={sectionTitle}>Certifications</h2>
              <ul className="mt-2 space-y-1">
                {certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="text-[9.5px] leading-[1.45] text-slate-700"
                  >
                    • {certification.name}
                    <span className="text-slate-500">
                      {" "}
                      — {certification.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={sectionTitle}>Languages</h2>
              <p className="mt-2 text-[10px] leading-[1.5] text-slate-700">
                {profile.languages.join(" · ")}
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
