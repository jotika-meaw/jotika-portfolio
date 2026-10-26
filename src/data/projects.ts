export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  shortDescription: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "voting-system-app",
    title: "Voting System App",
    category: "Python · Streamlit",
    year: "2025",
    role: "Solo developer",
    shortDescription:
      "An interactive web app to explore five voting systems with live inputs and animated results.",
    description:
      "A Streamlit application that lets users experiment with five different voting systems — First Past the Post, Approval Voting, Preferential Voting, Condorcet, and Borda Count. Users set the number of candidates and voters, enter ballots, and see how the winner changes depending on the method.",
    image: "/images/projects/voting-system-app.png",
    tech: ["Python", "Streamlit"],
    liveUrl: "https://votingapp.streamlit.app",
    repoUrl: "https://github.com/jotika-meaw/voting_system_app",
    challenges: [
      "Translating five voting algorithms into correct, testable Python logic — each method counts ballots differently and has its own edge cases.",
      "Handling ties, eliminated candidates, and incomplete preferences in preferential and Condorcet voting without crashing the app.",
      "Keeping Streamlit's rerun model and session state predictable while users change candidates, voters, and ballots.",
      "Presenting complex results in a way that is easy to understand, with clear tables and animated feedback.",
    ],
    improvements: [
      "Add user accounts and save past elections for comparison.",
      "Support larger polls with shareable voting links for real audiences.",
      "Add more methods such as STAR voting and ranked pairs.",
      "Export results as PDF or CSV and embed explanatory charts for each round.",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog — Workout Library",
    category: "Next.js · TypeScript",
    year: "2026",
    role: "Solo developer",
    shortDescription:
      "A dark-themed workout planner to browse twelve lifts, build a daily plan, and track the week.",
    description:
      "FitLog is a workout companion built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Users browse a library of twelve lifts covering every major muscle group, add exercises to a capped daily plan, and keep an eye on the week's training volume.",
    image: "/images/projects/fitlog.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fitlog-assignment-06-kappa.vercel.app/",
    repoUrl: "https://github.com/jotika-meaw/assignment_final_6",
    challenges: [
      "Adopting Next.js 16 and React 19 while keeping the component structure stable and the build clean.",
      "Designing a daily-plan flow that enforces a capped number of exercises without making the UI feel restrictive.",
      "Building a consistent dark theme across many card and empty states with Tailwind CSS v4.",
      "Keeping state in sync between the workout library, the daily plan, and the weekly overview.",
    ],
    improvements: [
      "Persist plans and history in a database with user authentication.",
      "Add progress analytics and charts for volume, streaks, and personal records.",
      "Create exercise detail pages with instructions and demonstration videos.",
      "Add offline/PWA support and workout reminders.",
    ],
  },
  {
    slug: "dev-stack-builder",
    title: "Dev Stack Builder",
    category: "React · Vite",
    year: "2025",
    role: "Solo developer",
    shortDescription:
      "Explore development technologies and compose your own custom tech stack with instant feedback.",
    description:
      "Dev Stack Builder helps developers discover tools across frontend, backend, database, and tooling categories, then assemble a personal tech stack. Duplicate selections are prevented, and toast notifications confirm every choice.",
    image: "/images/projects/dev-stack-builder.png",
    tech: ["React", "Vite", "JavaScript", "React-Toastify", "CSS"],
    liveUrl: "https://devstack-assignment.vercel.app",
    repoUrl: "https://github.com/jotika-meaw/devstack-assignment",
    challenges: [
      "Managing selection state across multiple technology categories without duplicating entries.",
      "Giving immediate, friendly feedback for every add or remove action using React-Toastify.",
      "Building a responsive card grid and a sticky stack summary with lightweight CSS.",
      "Keeping the UI fast while rendering dozens of technology cards.",
    ],
    improvements: [
      "Save and share stacks through a URL or local storage.",
      "Add search, filters, and comparisons between stacks.",
      "Recommend stacks based on project type and experience level.",
      "Add a backend so the community can publish and rate stacks.",
    ],
  },
  {
    slug: "pawzy-ecommerce",
    title: "Pawzy — Pet Shop Storefront",
    category: "HTML · CSS · JavaScript",
    year: "2025",
    role: "Solo developer",
    shortDescription:
      "A responsive e-commerce storefront for a modern online pet shop, built with vanilla web tech.",
    description:
      "Pawzy is a responsive storefront for an online pet shop. It includes a hero carousel, product showcases, service highlights, and an appointment form — all built with semantic HTML, modern CSS, and vanilla JavaScript.",
    image: "/images/projects/pawzy-ecommerce.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://jotika-meaw.github.io/EBT-ECommerce/",
    repoUrl: "https://github.com/jotika-meaw/EBT-ECommerce",
    challenges: [
      "Achieving a polished, consistent layout across desktop, tablet, and mobile with vanilla CSS.",
      "Implementing interactive navigation, carousel controls, and form validation without a framework.",
      "Keeping the visual hierarchy clear across product, service, and appointment sections.",
      "Optimizing images and spacing so the storefront feels fast on smaller screens.",
    ],
    improvements: [
      "Add a working cart, checkout, and payment integration.",
      "Build product filtering, search, and individual product detail pages.",
      "Connect a backend for inventory, orders, and appointment booking.",
      "Add authentication so customers can save favourites and order history.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
