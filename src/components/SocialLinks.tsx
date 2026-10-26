import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

type SocialLinksProps = {
  className?: string;
};

const socials = [
  { label: "GitHub", href: profile.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map(({ label, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/70 text-muted transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary-soft"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
