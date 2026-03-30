import type { ElementType } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiPrisma,
  SiDocker,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { Layout, Server, Wrench } from "lucide-react";

export type Skill = {
  name: string;
  icon: ElementType;
  color?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accentClass: string;
  icon: ElementType;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces, animation, and UX built on a modern stack.",
    accentClass:
      "from-primary/30 via-primary/10 to-cyan-300/20 border-primary/40",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "APIs, application logic, and databases for scalable products.",
    accentClass:
      "from-cyan-300/30 via-cyan-300/10 to-primary/20 border-cyan-300/35",
    icon: Server,
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Workflow, deployment, and team collaboration.",
    accentClass:
      "from-primary/25 via-cyan-200/10 to-primary/20 border-primary/35",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];
