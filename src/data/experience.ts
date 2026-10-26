export type Experience = {
  role: string;
  organization: string;
  period: string;
  type: "Leadership" | "Ambassador" | "Volunteer" | "Internship";
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Public Relation Secretary",
    organization: "Programming Club, USTC",
    period: "Sep 2025 – Present",
    type: "Leadership",
    description:
      "Spearheaded community outreach and organized 5+ workshops and coding contests for 300+ students.",
  },
  {
    role: "Campus Ambassador",
    organization: "GearON",
    period: "Jun 2026 – Present",
    type: "Ambassador",
    description:
      "Represent GearON on campus, promote student programs, and connect peers with learning opportunities.",
  },
  {
    role: "Campus Ambassador",
    organization: "LinkedIn Community Bangladesh",
    period: "Jun 2026 – Present",
    type: "Ambassador",
    description:
      "Drive community engagement and awareness for LCB initiatives among students.",
  },
  {
    role: "Campus Ambassador",
    organization: "InfoGram",
    period: "May 2026 – Present",
    type: "Ambassador",
    description:
      "Promote InfoGram's student initiatives and encourage campus participation.",
  },
  {
    role: "Volunteer",
    organization: "Futurenation",
    period: "May 2026 – Present",
    type: "Volunteer",
    description:
      "Support youth-focused events and community initiatives as a volunteer.",
  },
  {
    role: "AI & Skills Intern",
    organization: "Bangladesh Youth Leadership Center (BYLC)",
    period: "Jul 2026 – Sep 2026",
    type: "Internship",
    description:
      "Completed the Ignite Batch-05 internship, strengthening problem-solving, communication, teamwork, and leadership skills.",
  },
];
