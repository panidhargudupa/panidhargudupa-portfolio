export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  learnings: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard.",
    overview: "Built a comprehensive e-commerce platform that handles product management, user authentication, shopping cart functionality, and payment processing with Stripe integration.",
    problemStatement: "Small businesses needed an affordable, customizable online store solution that could scale with their growth without the complexity of enterprise platforms.",
    features: [
      "User authentication & authorization",
      "Product catalog with search & filters",
      "Shopping cart & wishlist",
      "Stripe payment integration",
      "Admin dashboard with analytics",
      "Order tracking system",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Docker"],
    challenges: [
      "Implementing real-time inventory updates across concurrent sessions",
      "Optimizing database queries for product search with multiple filters",
      "Handling payment edge cases and webhook reliability",
    ],
    learnings: [
      "Deep understanding of payment processing flows",
      "Database optimization techniques for large catalogs",
      "Importance of comprehensive error handling in financial transactions",
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    shortDescription: "A collaborative project management tool with real-time updates and team workflows.",
    overview: "Developed a Kanban-style project management application enabling teams to collaborate in real-time with drag-and-drop task boards, sprint planning, and progress tracking.",
    problemStatement: "Teams needed a lightweight, intuitive project management tool that offered real-time collaboration without the steep learning curve of existing enterprise solutions.",
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration",
      "Sprint planning & backlog management",
      "Team member roles & permissions",
      "Activity feed & notifications",
      "File attachments & comments",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    challenges: [
      "Implementing smooth drag-and-drop with real-time sync across clients",
      "Designing an efficient notification system that scales",
      "Managing complex state across nested board structures",
    ],
    learnings: [
      "WebSocket patterns for real-time applications",
      "Optimistic UI updates for better perceived performance",
      "State management strategies for collaborative features",
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg",
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    shortDescription: "An AI-powered platform for generating blog posts, social media content, and marketing copy.",
    overview: "Created an AI-powered content generation platform that leverages GPT models to help marketers and content creators produce high-quality content efficiently.",
    problemStatement: "Content creators spend excessive time on repetitive writing tasks. An AI assistant that understands brand voice and content requirements could dramatically improve productivity.",
    features: [
      "Multiple content type templates",
      "Brand voice customization",
      "Content history & versioning",
      "SEO optimization suggestions",
      "Export to multiple formats",
      "Usage analytics dashboard",
    ],
    techStack: ["React", "Python", "FastAPI", "OpenAI API", "PostgreSQL", "Redis"],
    challenges: [
      "Maintaining consistent brand voice across generated content",
      "Implementing efficient token usage and cost optimization",
      "Building a responsive UI for streaming AI responses",
    ],
    learnings: [
      "Prompt engineering best practices",
      "Streaming response handling patterns",
      "Cost optimization strategies for AI API usage",
    ],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    image: "/placeholder.svg",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker Dashboard",
    shortDescription: "A comprehensive fitness tracking app with workout logging, progress charts, and meal planning.",
    overview: "Built a fitness tracking dashboard that helps users log workouts, track nutrition, monitor progress through interactive charts, and plan meals with nutritional breakdowns.",
    problemStatement: "Fitness enthusiasts needed a unified platform that combines workout tracking, nutrition monitoring, and progress visualization without juggling multiple apps.",
    features: [
      "Workout logging with exercise library",
      "Interactive progress charts",
      "Meal planning & calorie tracking",
      "Goal setting & reminders",
      "Social sharing & challenges",
      "Wearable device integration",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "Chart.js", "Express", "JWT"],
    challenges: [
      "Syncing data across devices with offline-first approach",
      "Creating performant chart visualizations for large datasets",
      "Integrating with multiple wearable device APIs",
    ],
    learnings: [
      "Offline-first architecture patterns",
      "Data visualization best practices",
      "Cross-platform mobile development strategies",
    ],
    githubLink: "https://github.com",
    image: "/placeholder.svg",
  },
];
