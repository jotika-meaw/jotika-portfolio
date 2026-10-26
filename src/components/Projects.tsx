import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import TechBadges from "./ui/TechBadges";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work I'm proud of"
            description="Real projects, built end-to-end — from the first wireframe to deployment. Open any card for the full story."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                  aria-label={`View details for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                    {project.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-xs text-muted">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-7 text-muted">
                    {project.shortDescription}
                  </p>

                  <TechBadges tech={project.tech} className="mt-4" />

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2 hover:text-primary-soft"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live site for ${project.title}`}
                        title="Live site"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary/50 hover:text-primary-soft"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository for ${project.title}`}
                        title="GitHub repository"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary/50 hover:text-primary-soft"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-border bg-surface/40 p-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted">
              Want to see more experiments and repositories?
            </p>
            <a
              href="https://github.com/jotika-meaw?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-2.5 hover:text-primary-soft"
            >
              Explore my GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
