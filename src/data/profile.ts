export const profile = {
  name: "Jotika Das",
  firstName: "Jotika",
  lastName: "Das",
  initials: "JD",
  designation: "Full Stack Developer",
  tagline: "CSE Student @ USTC · AI & ML Enthusiast",
  location: "Chattogram, Bangladesh",
  email: "jotikadas57@gmail.com",
  phoneDisplay: "+880 1889-744734",
  phoneHref: "+8801889744734",
  photo: "/images/profile.jpg",
  resume: "/resume.pdf",
  github: "https://github.com/jotika-meaw",
  linkedin: "https://www.linkedin.com/in/jotikadas",
  availability: "Open to software engineering & AI/ML internships",
  heroIntro:
    "I build responsive, user-focused web applications with React, Next.js, and Tailwind CSS — and explore AI & machine learning to make them smarter.",
  summary:
    "Computer Science & Engineering undergraduate at the University of Science and Technology Chittagong (USTC), specializing in Artificial Intelligence, Machine Learning, and Web Technologies. I enjoy turning ideas into functional, accessible products and solving real-world problems with code.",
  aboutParagraphs: [
    "My programming journey started with a simple question: how do the websites I use every day actually work? That curiosity grew into a habit of building — from small HTML pages to full-stack applications with React, Next.js, and Tailwind CSS. Today I'm a CSE undergraduate at the University of Science and Technology Chittagong (USTC), where I combine coursework with hands-on projects.",
    "I enjoy work that sits at the intersection of clean engineering and thoughtful design: responsive interfaces, reusable components, and applications that solve a real problem for real people. Alongside web development, I'm exploring machine learning and computer vision — building pipelines with Python, TensorFlow, Scikit-learn, and OpenCV.",
    "Beyond code, I'm a community builder. As Public Relation Secretary of the USTC Programming Club, I've helped organize 5+ workshops and coding contests for 300+ students. I've also served as a campus ambassador for GearON, LinkedIn Community Bangladesh, and InfoGram, and volunteered with Futurenation. These roles taught me how to communicate ideas, lead teams, and create opportunities for others.",
    "I'm currently seeking software engineering and AI/ML internship opportunities. My long-term goal is to build scalable intelligent applications and contribute to open-source healthtech and biomedical software.",
  ],
  beyondCode:
    "Outside of programming, I enjoy reading, travelling, and discovering new music and films. I also love community building and volunteering — from leading outreach at the USTC Programming Club to supporting student-focused initiatives.",
  languages: ["Bengali (Native)", "English (Professional)"],
  stats: [
    { value: "4+", label: "Live projects" },
    { value: "300+", label: "Students reached" },
    { value: "6th", label: "CSE semester" },
  ],
} as const;

export type Profile = typeof profile;
