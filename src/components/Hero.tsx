import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-10 px-5 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-y-6">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </div>

          <p className="mt-7 font-display text-sm uppercase tracking-[0.24em] text-muted">
            Hello, I&apos;m {profile.name}
          </p>
          <h1 className="mt-3 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.15rem]">
            Full Stack <span className="text-gradient">Developer</span>
          </h1>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-soft sm:text-base">
            <Sparkles className="h-4 w-4 shrink-0" />
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            {profile.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-surface"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
            <SocialLinks />
            <span className="hidden h-6 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-secondary/20 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={1279}
                height={1600}
                priority
                sizes="(max-width: 1024px) 384px, 420px"
                className="h-[360px] w-full object-cover object-top sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white">
                    {profile.name}
                  </p>
                  <p className="text-xs text-slate-300">{profile.designation}</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  Open to work
                </span>
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-xl backdrop-blur sm:flex">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              React · Next.js
            </div>
            <div className="absolute -right-3 top-1/3 hidden items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-xl backdrop-blur sm:flex">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Python · AI/ML
            </div>
          </div>

          <a
            href="#about"
            className="mx-auto mt-6 hidden w-fit items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-xs font-medium text-muted transition hover:border-primary/40 hover:text-foreground sm:flex"
          >
            Scroll to explore
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </div>

        <dl className="grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-6 lg:col-start-1 lg:row-start-2">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
