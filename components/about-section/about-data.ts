export type EducationItem = {
  period: string;
  degree: string;
  institution: string;
  description?: string;
  tags?: string[];
};

export const educationItems: EducationItem[] = [
  {
    period: "2024 – present",
    degree: "Studying Computer Science on University of Technology in Rzeszow",
    institution: "Politechnika Rzeszowska",
    description:
      "Specialisation in software engineering with focus on web systems and distributed architectures.",
    tags: [
      "Algorithms",
      "Data Structures",
      "OOP",
      "Web Systems",
      "Databases",
      "Math",
    ],
  },
  {
    period: "2019 – 2024",
    degree: "IT Technician — Technical High School",
    institution: "ZST im. Bohaterów Września, Jasło",
    description:
      "Qualifications: INF.02 (administration & operation of computer systems, peripherals and local networks) · INF.03 (creating & administering websites, web apps and databases). Covered hardware assembly, OS administration, LAN design, web dev and database management.",
    tags: [
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Linux",
      "Networking",
      "Hardware",
      "Software",
    ],
  },
];

export type BeyondCodeItem = {
  icon: string;
  title: string;
  description: string;
};

export const beyondCodeItems: BeyondCodeItem[] = [
  {
    icon: "gamepad-2",
    title: "Gaming & Esport",
    description:
      "I follow CS and LoL competitive scenes closely — tournaments, meta shifts, teams. Been watching for years.",
  },
  {
    icon: "dumbbell",
    title: "Gym",
    description: "Strength training, calisthenics. This is what i love.",
  },
  {
    icon: "network",
    title: "Computer Networks",
    description:
      "Protocols, routing, infrastructure — what happens under the hood genuinely pulls me in.",
  },
];
