import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="text-center">
        <p className="font-display text-7xl font-bold tracking-tight text-gradient sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          This page took a detour
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to the portfolio.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 text-sm font-semibold text-foreground transition hover:border-primary/50"
          >
            <ArrowLeft className="h-4 w-4" />
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
