export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accentClass: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces, animation, and UX built on a modern stack.",
    accentClass:
      "from-primary/30 via-primary/10 to-cyan-300/20 border-primary/40",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "TailwindCSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "APIs, application logic, and databases for scalable products.",
    accentClass:
      "from-cyan-300/30 via-cyan-300/10 to-primary/20 border-cyan-300/35",
    skills: [
      "Laravel",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Firebase",
      "Prisma",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Workflow, deployment, and team collaboration.",
    accentClass:
      "from-primary/25 via-cyan-200/10 to-primary/20 border-primary/35",
    skills: ["Docker", "Postman", "Figma", "Git", "GitHub"],
  },
];
