export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Angular", "Redux", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", ".NET", "Flask", "REST API", "MVC Architecture"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "SQL Server", "PostgreSQL"],
  },
  {
    title: "Security & Auth",
    icon: "Shield",
    skills: ["JWT", "Passport.js", "Session Management", "Authorization", "Joi Validation", "Middleware"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["Cloudinary", "Docker", "CI/CD", "Render", "Mapbox API"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "npm", "Terminal"],
  },
];
