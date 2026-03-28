export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  imageSrc: string;
  liveUrl: string | null;
  githubUrl: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
  id: "estillo-frontend",
  title: "Estillo Frontend",
  category: "Website / Booking UI",
  description:
    "Commissioned client website for a beauty salon, featuring a fully custom booking system with a complete admin panel for managing appointments, availability, and services. Built as a modern, responsive Next.js app with a component-driven UI, robust form handling and validation, and client-side data fetching/caching for a smooth user experience.",
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "TanStack React Query",
    "React Hook Form",
    "Zod",
    "Radix UI",
    "Framer Motion",
  ],
  impact: "Improved booking flow clarity and reduced admin scheduling friction.",
  imageSrc: "/projects/pulse-commerce.svg",
  liveUrl: null,
  githubUrl: "https://github.com/estillo-salon/estillo-frontend",
  featured: true,
},
{
  id: "mindarena",
  title: "MindArena",
  category: "Monorepo / Full-stack Project",
  description:
    "MindArena is a full-stack competitive platform for real-time memory and logic games. It is built to let players quickly enter online arenas, get matched with opponents through matchmaking, and compete in both public and private duels. The platform includes game history tracking, ranking/progression visibility, and social gameplay features such as challenging friends to direct 1v1 matches. It is designed as a scalable TypeScript monorepo with shared packages and clear app boundaries, making it easier to ship new gameplay features, keep quality high through repeatable QA workflows, and maintain consistent technical documentation.",
  tech: [
    "TypeScript",
    "Next.js",
    "Node.js",
    "Turborepo",
    "Prisma",
    "PostgreSQL",
  ],
  impact:
    "Enabled a scalable real-time multiplayer architecture with social duels, matchmaking, and persistent match history, improving player retention and accelerating feature delivery through a shared monorepo workflow.",
  imageSrc: "/projects/eventpilot.svg",
  liveUrl: null,
  githubUrl: "https://github.com/frooooooo7/MindArena",
},
{
id: "iss-tracker",
title: "ISS Tracker",
category: "Frontend / API-integrated Web App",
description:
"ISS Tracker is a web app for following the International Space Station in real time. Users can view live ISS telemetry and orbit path on an interactive map, explore current crew and mission data, browse a searchable knowledge base, and use FAQ resources. It also includes authentication and a protected admin panel for managing knowledge base posts.",
tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "React Router"],
impact: "Combines live space telemetry with educational content and admin content management in one app.",
imageSrc: "/projects/fittrack-mobile.svg",
liveUrl: null,
githubUrl: "https://github.com/skni-kod/iss-model-frontend",
},
{
id: "drive-booker",
title: "Drive Booker",
category: "Fullstack",
description:
"Drive Booker is a web app for managing driving courses and event bookings. Users can register and log in, browse courses, manage their dashboard with calendar-based events, and update profile details. It also includes role-based access and a protected admin panel for handling student-related data, pending events, and course requests.",
tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "React Query", "Laravel", "PostgreSQL"],
impact: "Centralizes course browsing, event scheduling, and admin workflows in one role-based platform.",
imageSrc: "/projects/legal-docs-ai.svg",
liveUrl: null,
githubUrl: "https://github.com/skni-kod/drive-booker-frontend",
},
{
id: "IT-SOLUTION-PRZ ryby-lure-recommender",
title: "Ryby Lure Recommender",
category: "Frontend / API-integrated Web App",
description:
"Ryby Lure Recommender is a web app that helps anglers choose the best fishing lure for specific conditions. Users select factors like fish species, water type, season, time of day, water clarity, and temperature, and the app fetches tailored lure recommendations from a backend API. It also presents a clear summary of selected conditions and detailed bait usage tips.",
tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "React Hook Form", "Zod", "shadcn/ui"],
impact: "Turns multiple fishing variables into fast, practical lure recommendations through a clean and user-friendly interface.",
imageSrc: "/projects/shipflow-crm.svg",
liveUrl: null,
githubUrl: "https://github.com/IT-SOLUTION-PRZ/Frontend",
},
];
