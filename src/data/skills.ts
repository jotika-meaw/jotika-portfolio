import {
  SiBootstrap,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKaggle,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiMysql,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  level: number;
  icon: IconType;
};

export type SkillCategory = {
  key: "frontend" | "backend" | "aiml" | "tools";
  title: string;
  description: string;
  focus: string[];
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    title: "Frontend",
    description: "Interfaces, components, and responsive layouts",
    focus: ["Responsive UI", "Component design", "Tailwind workflow"],
    skills: [
      { name: "HTML5", level: 92, icon: SiHtml5 },
      { name: "CSS3", level: 90, icon: SiCss },
      { name: "JavaScript", level: 88, icon: SiJavascript },
      { name: "TypeScript", level: 85, icon: SiTypescript },
      { name: "React", level: 86, icon: SiReact },
      { name: "Next.js", level: 84, icon: SiNextdotjs },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
      { name: "Bootstrap", level: 80, icon: SiBootstrap },
    ],
  },
  {
    key: "backend",
    title: "Backend & Data",
    description: "APIs, server-side logic, and databases",
    focus: ["REST APIs", "Data handling", "Streamlit apps"],
    skills: [
      { name: "Node.js", level: 75, icon: SiNodedotjs },
      { name: "Python", level: 88, icon: SiPython },
      { name: "SQL", level: 78, icon: SiMysql },
    ],
  },
  {
    key: "aiml",
    title: "AI & Machine Learning",
    description: "Models, data pipelines, and computer vision",
    focus: ["Computer vision", "NLP basics", "Model evaluation"],
    skills: [
      { name: "TensorFlow", level: 72, icon: SiTensorflow },
      { name: "Scikit-learn", level: 78, icon: SiScikitlearn },
      { name: "PyTorch", level: 68, icon: SiPytorch },
      { name: "NumPy", level: 82, icon: SiNumpy },
      { name: "Pandas", level: 82, icon: SiPandas },
      { name: "OpenCV", level: 75, icon: SiOpencv },
    ],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    description: "Daily workflow and deployment",
    focus: ["Git workflow", "Vercel deploys", "Linux CLI"],
    skills: [
      { name: "Git", level: 85, icon: SiGit },
      { name: "GitHub", level: 88, icon: SiGithub },
      { name: "VS Code", level: 90, icon: VscVscode },
      { name: "Linux", level: 75, icon: SiLinux },
      { name: "Vercel", level: 85, icon: SiVercel },
      { name: "Streamlit", level: 82, icon: SiStreamlit },
      { name: "Kaggle", level: 78, icon: SiKaggle },
    ],
  },
];

export const exploring = [
  "Scikit-learn",
  "XGBoost",
  "Hugging Face Transformers",
  "SHAP",
];
