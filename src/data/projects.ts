export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
  liveLink?: string;
  githubLink: string;
  screenshots: string[];
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "staynest",
    title: "StayNest Booking",
    tagline: "Full-Stack Vacation Rental Platform",
    shortDescription:
      "A full-stack vacation rental platform inspired by Airbnb with authentication, interactive maps, image uploads, and review workflows.",
    overview:
      "StayNest is a full-stack vacation rental booking platform inspired by Airbnb. It lets users browse, create, manage, and review rental listings through a server-rendered MVC application with secure authentication, interactive maps, image uploads, and production deployment on Render.",
    problemStatement:
      "Travelers need a reliable and intuitive platform to discover vacation rentals, while property owners need secure tools to create, manage, and update listings. StayNest solves both sides of that workflow in one application with authentication, protected actions, reviews, map-based location context, and responsive UI.",
    features: [
      "User authentication and authorization with Passport.js",
      "Full CRUD operations for vacation rental listings",
      "Cloudinary image upload pipeline for listing photos",
      "Interactive location maps using Mapbox",
      "Reviews and ratings for property listings",
      "Protected routes with owner-based authorization",
      "Session management and flash messaging",
      "Server-side validation with Joi",
      "Responsive UI built with Bootstrap 5",
      "Production deployment on Render",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary", "Mapbox", "Render"],
    challenges: [
      "Designing secure session-based authentication and protected route flows across listing, review, and user actions",
      "Building an owner-only authorization model so only listing creators can edit or delete their content",
      "Integrating Cloudinary uploads and Mapbox location features into a clean MVC codebase",
      "Structuring models, controllers, routes, views, and middleware so the application stayed maintainable as features expanded",
    ],
    learnings: [
      "How to build and organize a full MVC web application with Express and EJS",
      "Authentication and authorization patterns using Passport, sessions, and middleware",
      "Third-party service integration for media storage, maps, and deployment",
      "How to combine MongoDB, Mongoose, validation, and server-rendered views into a polished production-style product",
    ],
    futureImprovements: [
      "Add real-time booking availability calendar",
      "Integrate Stripe payment processing for reservations",
      "Build a host dashboard with analytics and earnings tracking",
      "Add email notifications for booking confirmations and reviews",
    ],
    liveLink: "https://staynest-booking.onrender.com/",
    githubLink: "https://github.com/panidhargudupa/staynest-booking",
    screenshots: [],
    category: "Full Stack",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    tagline: "Modern Developer Portfolio with React & TypeScript",
    shortDescription:
      "A modern, animated developer portfolio built with React, TypeScript, TailwindCSS, and Framer Motion featuring glassmorphism design and contact form integration.",
    overview:
      "This portfolio website showcases my projects, skills, education, and experience through a modern, responsive, dark-themed UI. Built with React + TypeScript + TailwindCSS, it features animated sections with Framer Motion, glassmorphism cards, a working contact form via Web3Forms, and dynamic GitHub project integration.",
    problemStatement:
      "Every developer needs a professional online presence that goes beyond a plain resume. This portfolio serves as a living, interactive showcase of my technical capabilities, project work, and professional identity — designed to impress recruiters and collaborators at first glance.",
    features: [
      "Fully responsive dark-themed UI with glassmorphism design",
      "Animated page transitions and section entrances with Framer Motion",
      "Dynamic project cards with GitHub API integration",
      "Working contact form with Web3Forms email delivery",
      "Interactive skills grid and experience timeline",
      "Resume download and certificate viewing",
      "SEO-optimized with proper meta tags and semantic HTML",
      "Scroll progress indicator and smooth navigation",
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite", "React Router", "Web3Forms", "Vercel"],
    challenges: [
      "Creating a cohesive dark-themed design system with glassmorphism that works across all sections",
      "Implementing smooth page transitions without layout shifts using AnimatePresence",
      "Integrating GitHub API for dynamic project display with proper rate limiting",
      "Building a contact form that sends emails without a custom backend",
    ],
    learnings: [
      "Advanced React patterns with TypeScript for type-safe component architecture",
      "Modern CSS techniques including glassmorphism, gradients, and custom animations",
      "Framer Motion animation patterns for production-quality micro-interactions",
      "Deploying and optimizing a Vite-based React app on Vercel",
    ],
    futureImprovements: [
      "Add a blog section with MDX support",
      "Implement dark/light theme toggle",
      "Add project filtering by technology category",
      "Integrate visitor analytics dashboard",
    ],
    liveLink: "https://panidhargudupa-portfolio.vercel.app",
    githubLink: "https://github.com/panidhargudupa/panidhargudupa-portfolio",
    screenshots: [],
    category: "Frontend",
    featured: true,
  },
  {
    id: "gushwork-web-assignment",
    title: "Gushwork Web Assignment",
    tagline: "Pixel-Perfect Product Landing Page",
    shortDescription:
      "Responsive HDPE pipes product page built with pure HTML, CSS, and JavaScript — pixel-accurate Figma implementation with interactive modals and mobile-friendly behavior.",
    overview:
      "This project is a responsive HDPE pipes product page built as part of the Gushwork web assignment. The implementation focuses on translating the provided Figma design accurately into a clean frontend using only vanilla HTML, CSS, and JavaScript without external frameworks or libraries.",
    problemStatement:
      "The assignment required a pixel-to-pixel implementation of the provided Figma design while maintaining responsive behavior across devices. The page also needed practical product-page interactions without depending on external frontend frameworks or libraries.",
    features: [
      "Responsive desktop and mobile layout",
      "Product image gallery and slider interaction",
      "Sticky price bar for product context",
      "Request quote modal flow",
      "Download technical datasheet modal",
      "Technical specifications section",
      "Clean and readable file structure",
      "Pure vanilla HTML, CSS, and JavaScript implementation",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    challenges: [
      "Translating the provided design into a pixel-accurate implementation without using frameworks",
      "Maintaining responsive behavior across desktop and mobile layouts",
      "Building interactive UI pieces like modals and image navigation using plain JavaScript",
    ],
    learnings: [
      "How to build polished responsive interfaces with core web technologies only",
      "How to manage UI interactions like sliders and modals using vanilla JavaScript",
      "How to structure static frontend projects cleanly for readability and maintainability",
      "How to implement assignment-driven UI work with strong visual accuracy",
    ],
    futureImprovements: [
      "Add product comparison feature between different pipe specifications",
      "Implement search and filter functionality for the product catalog",
      "Add form validation with real-time feedback for the quote request flow",
      "Build an admin panel for managing product listings",
    ],
    liveLink: "https://panidhargudupa.github.io/gushwork-web-assignment/",
    githubLink: "https://github.com/panidhargudupa/gushwork-web-assignment",
    screenshots: [],
    category: "Frontend",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    tagline: "Enterprise Full-Stack Restaurant Operations",
    shortDescription:
      "Full-stack application built with .NET, Angular, and SQL Server for restaurant operations including menu management, order processing, and automated billing.",
    overview:
      "Developed a restaurant workflow system to manage menu operations, order processing, and billing using enterprise-grade full-stack architecture during an internship at Loginware Softtech. The system streamlines the entire restaurant workflow from menu creation to invoice generation.",
    problemStatement:
      "Restaurants need a centralized system to manage menus, process orders efficiently, and generate accurate bills — reducing manual errors and improving service speed. This system automates the entire order-to-billing pipeline.",
    features: [
      "Menu management with categories and pricing",
      "Real-time order processing workflow",
      "Automated billing and invoice generation",
      "REST API backend with .NET",
      "Angular frontend with responsive design",
      "SQL relational schema for efficient data management",
    ],
    techStack: [".NET", "Angular", "SQL Server", "REST API", "TypeScript", "C#"],
    challenges: [
      "Designing transactional workflows for order-to-billing pipeline",
      "Building robust backend API integration with .NET",
      "Relational database design for complex restaurant operations",
    ],
    learnings: [
      "Enterprise-grade full-stack development with .NET and Angular",
      "Relational database design and SQL Server management",
      "Professional team collaboration in an agile development environment",
      "MVC architecture patterns in production applications",
    ],
    futureImprovements: [
      "Add real-time kitchen display system for order tracking",
      "Implement table reservation and management module",
      "Build reporting dashboard with sales analytics and trends",
      "Add multi-branch support with centralized menu management",
    ],
    githubLink: "https://github.com/panidhargudupa/restaurant-management-system",
    screenshots: [],
    category: "Full Stack",
  },
];
