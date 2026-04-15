export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "Docker", "Vercel", "CI/CD", "Nginx", "Linux"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "VS Code", "Figma", "Postman", "Jira", "Notion"],
  },
];
