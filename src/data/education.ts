export type Education = {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  location: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export const education: Education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "University of Science and Technology Chittagong (USTC)",
  period: "2024 – 2028",
  status: "Currently in 6th semester",
  description:
    "Focused on artificial intelligence, machine learning, and web technologies alongside core CSE coursework. Actively applying classroom concepts through full-stack and ML projects.",
  location: "Chattogram, Bangladesh",
};

export const certifications: Certification[] = [
  { name: "Web Design — NSDA Level 3", issuer: "NSDA" },
  { name: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera" },
  { name: "Python Basics", issuer: "Certification" },
  { name: "AWS SBG Leader Badge", issuer: "Amazon Web Services" },
];
