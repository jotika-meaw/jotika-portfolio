import { techIcons } from "@/lib/techIcons";

type TechBadgesProps = {
  tech: string[];
  className?: string;
};

export default function TechBadges({
  tech,
  className = "",
}: TechBadgesProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tech.map((name) => {
        const Icon = techIcons[name];
        return (
          <li
            key={name}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted"
          >
            {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
            {name}
          </li>
        );
      })}
    </ul>
  );
}
