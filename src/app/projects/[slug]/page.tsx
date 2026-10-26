import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Download,
  ExternalLink,
  Layers,
  Lightbulb,
  User,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import TechBadges from "@/components/ui/TechBadges";
import Reveal from "@/components/ui/Reveal";
import SocialLinks from "@/components/SocialLinks";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Jotika Das`,
      description: project.shortDescription,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 h-80 w-[640px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <header className="border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-3 text-xs font-semibold text-primary-soft transition hover:border-primary/70 hover:bg-primary/15"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <Link
              href="/#contact"
              className="hidden h-9 items-center gap-2 rounded-lg border border-border px-3 text-xs font-semibold text-foreground transition hover:border-primary/50 sm:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-soft">
                Case study
              </span>
              <span className="text-xs text-muted">{project.category}</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Visit live project
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                <FaGithub className="h-4 w-4" />
                View source code
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={1440}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12">
          <div className="space-y-10">
            <Reveal>
              <section>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  <Layers className="h-5 w-5 text-primary" />
                  Main Tech Stack
                </h2>
                <TechBadges tech={project.tech} className="mt-4" />
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Brief Description
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-[15px] leading-8 text-muted">
                  Built as a {project.category.toLowerCase()} project, it
                  focuses on a clean user experience, responsive layouts, and
                  code that is easy to extend. The complete source is available
                  on GitHub, and the live version is deployed publicly.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-amber-300" />
                  Challenges Faced
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-3 text-sm leading-7 text-muted"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  <Lightbulb className="h-5 w-5 text-emerald-300" />
                  Potential Improvements & Future Plans
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.improvements.map((improvement) => (
                    <li
                      key={improvement}
                      className="flex gap-3 text-sm leading-7 text-muted"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Project info
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-xs text-muted">
                    <User className="h-3.5 w-3.5" />
                    Role
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {project.role}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs text-muted">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Year
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {project.year}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-xs text-muted">
                    <Layers className="h-3.5 w-3.5" />
                    Category
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {project.category}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Links
              </h3>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2.5 text-sm text-foreground/90 transition hover:border-primary/40 hover:text-primary-soft"
                >
                  Live project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2.5 text-sm text-foreground/90 transition hover:border-primary/40 hover:text-primary-soft"
                >
                  GitHub repository
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
              <p className="text-sm font-semibold text-foreground">
                Have a similar project in mind?
              </p>
              <p className="mt-1 text-xs leading-6 text-muted">
                I&apos;m open to internships and collaborative projects.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-soft transition hover:gap-2"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-2">
          <Link
            href={`/projects/${previousProject.slug}`}
            className="group rounded-2xl border border-border bg-surface/40 p-5 transition hover:border-primary/40 hover:bg-surface"
          >
            <span className="text-xs text-muted">Previous project</span>
            <span className="mt-1 flex items-center gap-2 font-display text-sm font-semibold text-foreground">
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
              {previousProject.title}
            </span>
          </Link>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group rounded-2xl border border-border bg-surface/40 p-5 text-left transition hover:border-primary/40 hover:bg-surface sm:text-right"
          >
            <span className="text-xs text-muted">Next project</span>
            <span className="mt-1 flex items-center gap-2 font-display text-sm font-semibold text-foreground sm:justify-end">
              {nextProject.title}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface/40 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="text-sm text-muted">
              {profile.designation} · {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SocialLinks />
            <Link
              href="/"
              className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50"
            >
              Portfolio home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
