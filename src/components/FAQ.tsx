import Link from "next/link";
import { MessageCircleQuestion, Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/profile";

const faqs = [
  {
    question: "What kind of roles are you looking for?",
    answer:
      "I'm seeking software engineering and AI/ML internships where I can work on real products — especially frontend or full-stack roles using React, Next.js, and TypeScript. I'm also open to junior developer opportunities.",
  },
  {
    question: "Are you available for freelance or collaboration?",
    answer:
      "Yes. I take on selected freelance projects and enjoy collaborating with student teams and early-stage ideas. The best way to start is a short email describing the project, timeline, and scope.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "On the web side I work with React, Next.js, TypeScript, Tailwind CSS, and Node.js. For AI and data work I use Python with TensorFlow, Scikit-learn, NumPy, Pandas, and OpenCV. I deploy most projects on Vercel or Streamlit.",
  },
  {
    question: "How can I get a copy of your resume?",
    answer: (
      <>
        You can view it online or download the PDF directly from the hero
        section, the navbar, or the{" "}
        <Link
          href="/resume"
          className="font-semibold text-primary transition hover:text-primary-soft"
        >
          resume page
        </Link>
        . If you need a tailored version for a specific role, email me and
        I&apos;ll be happy to share one.
      </>
    ),
  },
  {
    question: "Where are you based, and do you work remotely?",
    answer:
      "I'm based in Chattogram, Bangladesh, and I'm comfortable working remotely across time zones. I'm also open to on-site opportunities in Bangladesh.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people usually ask"
            description="A few quick answers before you reach out. If yours isn't here, email me anytime."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <details className="group rounded-2xl border border-border bg-surface/60 transition open:border-primary/30 open:bg-surface">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-foreground transition hover:text-primary-soft sm:px-6 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3">
                    <MessageCircleQuestion className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {faq.question}
                  </span>
                  <Plus className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="px-5 pb-5 pl-12 text-sm leading-7 text-muted sm:px-6 sm:pb-6 sm:pl-13">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8 text-center">
          <p className="text-sm text-muted">
            Still have a question?{" "}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-primary transition hover:text-primary-soft"
            >
              Email me directly
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
