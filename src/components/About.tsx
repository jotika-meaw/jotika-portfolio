import {
  BrainCircuit,
  Compass,
  GraduationCap,
  Quote,
  Users,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: GraduationCap,
    title: "CSE @ USTC",
    text: "B.Sc. in Computer Science & Engineering, 2024–2028.",
  },
  {
    icon: Users,
    title: "Community Leader",
    text: "PR Secretary at USTC Programming Club — 300+ students reached.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Focus",
    text: "Exploring computer vision, NLP, and data-driven applications.",
  },
  {
    icon: Compass,
    title: "Life outside code",
    text: "Reading, travelling, music, films, and community work keep me curious.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Curious by nature, builder by habit"
            description="A quick look at my journey, the work I enjoy, and what drives me beyond the code."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal delay={0.1} className="space-y-5">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] leading-8 text-muted sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
              <p className="flex gap-3 text-sm leading-7 text-foreground/90">
                <Quote className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {profile.beyondCode}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group flex items-center rounded-2xl border border-border bg-surface/60 p-5 transition hover:border-primary/40 hover:bg-surface"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
