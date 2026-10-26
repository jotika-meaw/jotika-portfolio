"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BrainCircuit, Code2, Server, Wrench } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { exploring, skillCategories } from "@/data/skills";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  aiml: BrainCircuit,
  tools: Wrench,
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-64 w-[640px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to build & experiment"
            description="From responsive interfaces to data-driven experiments — here's the stack I work with."
          />
        </Reveal>

        <div ref={sectionRef} className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.key];
            return (
              <Reveal
                key={category.key}
                delay={categoryIndex * 0.08}
                className="h-full"
              >
                <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 transition hover:border-primary/30">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <li key={skill.name}>
                          <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                            <span className="flex items-center gap-2 text-foreground/90">
                              <SkillIcon className="h-4 w-4 text-muted" />
                              {skill.name}
                            </span>
                            <span className="text-xs tabular-nums text-muted">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: reduceMotion ? 0 : 0.9,
                                delay: reduceMotion
                                  ? 0
                                  : categoryIndex * 0.1 + skillIndex * 0.04,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                    {category.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-white/[0.02] px-2 py-1 text-[10px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="rounded-2xl border border-border bg-surface/40 p-5">
            <p className="text-center text-sm leading-7 text-muted">
              <span className="font-semibold text-foreground">
                Currently exploring:
              </span>{" "}
              {exploring.join(" · ")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
