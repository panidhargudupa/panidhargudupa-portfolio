import type { Project } from "./projects";

export const allProjects: Project[] = [
  {
    id: "portfolio",
    title: "Panidhargudupa Portfolio",
    tagline: "Modern UI/UX Developer Portfolio",
    shortDescription: "Personal developer portfolio built with React, TypeScript, and TailwindCSS featuring modern UI, animations, and project showcase.",
    overview: "A comprehensive personal portfolio showcasing my engineering projects, technical skills, and professional experience. Designed with a dark-themed glassmorphism aesthetic and smooth Framer Motion animations.",
    problemStatement: "Creating a standout digital presence to effectively communicate my technical expertise and project portfolio to potential recruiters and collaborators.",
    features: [
      "Responsive Dark Theme with Glassmorphism UI",
      "Framer Motion page transitions and scroll animations",
      "Dynamic project showcase with detailed case studies",
      "Interactive skills grid and experience timeline"
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
    challenges: [
      "Optimizing complex animations while maintaining 60fps performance",
      "Designing a cohesive aesthetic across distinct content sections"
    ],
    learnings: [
      "Advanced Framer Motion orchestration and scroll techniques",
      "Vite configuration for fast, optimized production builds"
    ],
    futureImprovements: [
      "Add a dedicated blog section using Markdown/MDX",
      "Implement a light/dark mode toggle integration"
    ],
    liveLink: "https://panidhargudupa-portfolio.vercel.app",
    githubLink: "https://github.com/panidhargudupa/panidhargudupa-portfolio",
    category: "Frontend",
    screenshots: []
  },
  {
    id: "gushwork-web-assignment",
    title: "Gushwork Web Assignment",
    tagline: "Pixel-Perfect Frontend Implementation",
    shortDescription: "Responsive frontend project implementing a pixel-perfect UI from Figma using HTML, CSS, and JavaScript with interactive components.",
    overview: "A responsive product landing page built strictly from a Figma design exactly as prescribed, using zero external UI frameworks to demonstrate strong grasp of core web technologies.",
    problemStatement: "Translating a high-fidelity Figma mockup into a fully responsive, interactive web application using vanilla technologies.",
    features: [
      "Pixel-perfect responsive layout mapping to design specs",
      "Custom interactive modals built with vanilla JS",
      "Sticky navigation and quote workflows",
      "Optimized assets and pure CSS animations"
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Replicating complex design tokens without tailwind or CSS-in-JS",
      "Managing modal state natively"
    ],
    learnings: [
      "Deepened expertise in native CSS Grid and Flexbox",
      "Advanced vanilla JavaScript DOM manipulation"
    ],
    futureImprovements: [
      "Refactor CSS into modern CSS modules or SCSS",
      "Add robust cross-browser E2E testing"
    ],
    liveLink: "https://panidhargudupa.github.io/gushwork-web-assignment/",
    githubLink: "https://github.com/panidhargudupa/gushwork-web-assignment",
    category: "Frontend",
    screenshots: []
  },
  {
    id: "staynest",
    title: "StayNest Booking",
    tagline: "Vacation Rental Platform",
    shortDescription: "Full-stack booking platform inspired by Airbnb with authentication, listings, booking system, and user interactions.",
    overview: "A comprehensive vacation rental application allowing users to view, reserve, and manage property listings with secure authentication and interactive mapping.",
    problemStatement: "Building a reliable, two-sided marketplace platform managing complex relations between users, properties, and bookings.",
    features: [
      "Secure user authentication and session management",
      "CRUD functionality for property descriptions and images",
      "Interactive map integration for location services",
      "Automated reservation and booking calculations"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS"],
    challenges: [
      "Structuring complex Mongoose relational schema for bookings",
      "Securing route middleware to authorize rightful owners"
    ],
    learnings: [
      "Effective implementation of Model-View-Controller (MVC) architecture",
      "Managing robust RESTful APIs alongside server-side rendering"
    ],
    futureImprovements: [
      "Integrate Stripe for live payment processing",
      "Migrate views to a React frontend architecture"
    ],
    liveLink: "https://staynest-booking.onrender.com/",
    githubLink: "https://github.com/panidhargudupa/staynest-booking",
    category: "Full Stack",
    screenshots: []
  },
  {
    id: "react-weather-widget",
    title: "React Weather Widget",
    tagline: "Real-Time Weather Tracker",
    shortDescription: "Weather widget built with React that fetches real-time weather data and displays it with a clean UI.",
    overview: "A sleek, responsive widget providing instant weather metrics for global locations via third-party API integration, styled cleanly for quick readability.",
    problemStatement: "Creating an intuitive, fail-safe application to serve real-time weather conditions efficiently to the user.",
    features: [
      "Live weather data consumption via OpenWeather API",
      "Dynamic weather-based icon and background shifts",
      "Persistent state managing user's latest searched city",
      "Robust error handling for invalid locations"
    ],
    techStack: ["React", "API", "JavaScript", "CSS"],
    challenges: [
      "Handling asynchronous data racing and network errors gracefully",
      "Designing responsive layouts for embedding"
    ],
    learnings: [
      "React `useEffect` lifecycle management connected to external APIs",
      "Structuring encapsulated functional components for widget reuse"
    ],
    futureImprovements: [
      "Add 7-day forecast visualization",
      "Include geolocation auto-detection on load"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/react-weather-widget",
    category: "Frontend",
    screenshots: []
  },
  {
    id: "career-lift-ai",
    title: "Career Lift AI",
    tagline: "AI-Powered Career Assistant",
    shortDescription: "AI-powered career assistance platform designed to help users with career guidance, suggestions, and insights.",
    overview: "An artificial intelligence-driven platform acting as a virtual career counselor, generating personalized career roadmaps and resume optimizations based on user inputs.",
    problemStatement: "Navigating career transitions is difficult; this tool scales professional career guidance by leveraging large language models.",
    features: [
      "Personalized learning path generation via AI",
      "Resume parsing and automated enhancement suggestions",
      "Interactive conversational interface",
      "JWT-based user account and history tracking"
    ],
    techStack: ["React", "AI", "Node.js", "Express", "OpenAI API"],
    challenges: [
      "Engineering robust AI prompts to guarantee consistent JSON outputs",
      "Managing state and latency during stream generation"
    ],
    learnings: [
      "Integration mechanics for powerful LLM platforms",
      "Building seamless full-stack data pipelines"
    ],
    futureImprovements: [
      "Implement real-time interview practice simulations",
      "Add direct job board integrations to suggest live roles"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/career-lift-ai",
    category: "Full Stack",
    screenshots: []
  },
  {
    id: "todo-list-react",
    title: "Todo List React App",
    tagline: "Task Management Simplified",
    shortDescription: "Simple and clean todo list application built with React demonstrating state management and component-based design.",
    overview: "A lightweight productivity tool built to manage daily tasks, demonstrating core React principles like prop drilling, localized state, and event handling.",
    problemStatement: "Building a fundamental, high-performance task tracker to solidify React component structures.",
    features: [
      "Create, read, update, and delete (CRUD) tasks inline",
      "Filter views: All, Active, and Completed",
      "Persistent data storage using browser LocalStorage",
      "Responsive, accessible design"
    ],
    techStack: ["React", "JavaScript", "CSS"],
    challenges: [
      "Synchronizing React state with the browser LocalStorage",
      "Preventing unnecessary re-renders on large lists"
    ],
    learnings: [
      "Mastery of fundamental hooks: `useState`, `useEffect`",
      "Efficient mapping of dynamically keyed lists"
    ],
    futureImprovements: [
      "Implement a drag-and-drop task reordering mechanic",
      "Add contextual tags to tasks for organization"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/myfirst_react-code_for-making_todolist",
    category: "Frontend",
    screenshots: []
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    tagline: "Enterprise Operations Suite",
    shortDescription: "Full-stack restaurant management system built with .NET, Angular, and SQL Server for managing orders, menu, and operations.",
    overview: "An enterprise-grade comprehensive application tailored for restaurant workflows, unifying inventory, billing, table management, and analytics into one dashboard.",
    problemStatement: "Streamlining fractured operational processes within restaurants to increase order accuracy and floor efficiency.",
    features: [
      "Real-time kitchen order ticketing module",
      "Role-based access control for waitstaff and management",
      "Automated tax and bill generation endpoints",
      "Relational, highly normalized SQL database design"
    ],
    techStack: [".NET", "Angular", "SQL Server", "REST API"],
    challenges: [
      "Designing complex transactional workflows securely",
      "Bridging .NET APIs smoothly to strict Angular services"
    ],
    learnings: [
      "Enterprise architecture utilizing the repository pattern in C#",
      "Advanced TypeScript state management in Angular components"
    ],
    futureImprovements: [
      "Add SMS integrations for customer waitlist updates",
      "Implement an offline-first PWA mode for low-connectivity environments"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/restaurant-management-system",
    category: "Full Stack",
    screenshots: []
  },
  {
    id: "lung-cancer-detection",
    title: "Lung Cancer Detection",
    tagline: "Medical AI Diagnostics",
    shortDescription: "Machine learning project for detecting and classifying lung cancer using medical datasets and predictive modeling.",
    overview: "A robust neural network implementation acting as a secondary diagnostic tool, classifying CT scans with high confidence into benign or malignant categories.",
    problemStatement: "Assisting medical professionals by reducing cognitive load and time required to manually analyze complex lung CT imaging.",
    features: [
      "Data preprocessing and augmentation pipeline for CT scans",
      "Convolutional Neural Network (CNN) architecture implementation",
      "Confidence score evaluation and visual heatmaps",
      "Statistical modeling and performance validation via confusion matrices"
    ],
    techStack: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Keras"],
    challenges: [
      "Structuring highly imbalanced medical datasets to prevent overfitting",
      "Optimizing network topology for edge-case identifications"
    ],
    learnings: [
      "Practical execution of computer vision models in Python",
      "Strategies for hyperparameter tuning on low-volume data sets"
    ],
    futureImprovements: [
      "Expose the model via a lightweight Flask or FastAPI endpoint",
      "Deploy a web dashboard for radiologists to upload bulk imagery"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/Lung-Cancer-Detection-and-Classification",
    category: "ML",
    screenshots: []
  },
  {
    id: "bengaluru-house-price",
    title: "Bengaluru House Price Prediction",
    tagline: "Real Estate Market Analytics",
    shortDescription: "Machine learning model that predicts house prices in Bengaluru based on various features using regression techniques.",
    overview: "A data science pipeline and predictive model trained on extensive regional real-estate data to estimate accurate property valuations.",
    problemStatement: "Navigating ambiguous real estate pricing by bringing data-driven clarity to property valuations in the Bengaluru market.",
    features: [
      "Intensive data cleaning covering outliers and missing values",
      "Dimensionality reduction and feature engineering",
      "Multiple regression model evaluations (Lasso, Decision Tree, Linear)",
      "Cross-validation techniques ensuring model robustness"
    ],
    techStack: ["Python", "ML", "Pandas", "Scikit-learn", "NumPy"],
    challenges: [
      "Handling erratic location strings and inconsistent feature datasets",
      "Reducing high cardinality variables organically"
    ],
    learnings: [
      "End-to-end data manipulation life cycle from CSV to deployable model",
      "Statistical model evaluation parameters specifically covering regression"
    ],
    futureImprovements: [
      "Attach a frontend single-page application to interactively query prices",
      "Implement automated API scraping to keep the dataset consistently refreshed"
    ],
    liveLink: "",
    githubLink: "https://github.com/panidhargudupa/bengaluru_houseprice_prediction",
    category: "ML",
    screenshots: []
  }
];
