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
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "staynest",
    title: "StayNest – Vacation Rental Booking Platform",
    shortDescription:
      "A full-stack MERN booking platform with secure authentication, property CRUD operations, reviews, role-based access control, cloud image storage, and interactive location search.",
    overview:
      "Developed a full-stack vacation rental booking platform using the MERN stack. Users can browse, create, review, and manage rental listings with secure session-based authentication and role-based access control.",
    problemStatement:
      "Travelers need a reliable and intuitive platform to discover and book vacation rentals, while property owners need tools to manage listings, handle bookings, and receive genuine reviews — all in one unified system.",
    features: [
      "User authentication & session management with Passport.js",
      "Full CRUD operations for property listings",
      "Booking workflows with availability management",
      "Image upload via Cloudinary with transformations",
      "Interactive map with Mapbox for location-based search",
      "Role-based access control (owner vs guest)",
      "Review and rating system for properties",
      "Deployed on Render for production access",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary", "Mapbox", "Render"],
    challenges: [
      "Implementing secure session-based authentication with role-based access across multiple user types",
      "Building a cloud image upload and transformation pipeline with Cloudinary",
      "Integrating interactive map-based property discovery with Mapbox API",
      "Designing a scalable MongoDB schema for properties, users, reviews, and bookings",
    ],
    learnings: [
      "End-to-end full-stack MERN development workflow from design to deployment",
      "Cloud service integration patterns (Cloudinary, Mapbox, Render)",
      "Authentication and authorization best practices in Node.js applications",
      "Scalable MongoDB schema design for relational-style data in a NoSQL database",
    ],
    liveLink: "#",
    githubLink: "https://github.com/panidhargudupa/staynest-booking",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    shortDescription:
      "Full-stack application built using .NET, Angular, and SQL Server for restaurant operations including menu, orders, billing, and workflow management.",
    overview:
      "Developed a restaurant workflow system to manage menu operations, order processing, and billing using enterprise full-stack architecture during an internship at Loginware Softtech.",
    problemStatement:
      "Restaurants need a centralized system to manage menus, process orders efficiently, and generate accurate bills — reducing manual errors and improving service speed.",
    features: [
      "Menu management with categories and pricing",
      "Real-time order processing workflow",
      "Automated billing and invoice generation",
      "REST API backend with .NET",
      "Angular frontend with responsive design",
      "SQL relational schema for efficient data management",
    ],
    techStack: [".NET", "Angular", "SQL Server", "REST API", "TypeScript"],
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
    githubLink: "https://github.com/panidhargudupa/restaurant-management-system",
    image: "/placeholder.svg",
  },
  {
    id: "lung-cancer-detection",
    title: "Lung Cancer Detection & Classification",
    shortDescription:
      "AI-powered CT scan classification system for detecting benign, malignant, and normal lung scans using CNN-based deep learning models.",
    overview:
      "Built an AI-based medical imaging pipeline for lung cancer detection and classification using deep learning architectures including CNN, DenseNet, and ResNet, deployed via a Flask web interface.",
    problemStatement:
      "Early detection of lung cancer significantly improves patient outcomes, but manual CT scan analysis is time-consuming and prone to human error. An automated classification system can assist radiologists in faster and more accurate diagnosis.",
    features: [
      "CT scan image preprocessing and augmentation pipeline",
      "Image segmentation for region-of-interest extraction",
      "Multiple deep learning model architectures (CNN, DenseNet, ResNet)",
      "Prediction with confidence scores and visual results",
      "Flask web application for image upload and classification",
      "Model comparison and accuracy benchmarking",
    ],
    techStack: ["Python", "Flask", "TensorFlow", "CNN", "DenseNet", "ResNet", "NumPy", "OpenCV"],
    challenges: [
      "Handling imbalanced medical imaging datasets for training",
      "Optimizing deep learning models for accurate classification on limited data",
      "Building an intuitive web interface for non-technical medical professionals",
    ],
    learnings: [
      "Deep learning model architectures and transfer learning techniques",
      "Medical image preprocessing and data augmentation strategies",
      "End-to-end ML pipeline development from data preparation to deployment",
      "Flask web application development for ML model serving",
    ],
    githubLink: "https://github.com/panidhargudupa/Lung-Cancer-Detection-and-Classification",
    image: "/placeholder.svg",
  },
  {
    id: "gushwork-web-assignment",
    title: "Gushwork Web Assignment",
    shortDescription:
      "Modern responsive landing page built with React, TypeScript, Tailwind CSS, and Vite — focused on UI precision, responsive design, and reusable components.",
    overview:
      "Built a clean and modern responsive landing page as part of a technical assignment focused on UI precision, responsive design, and reusable component architecture.",
    problemStatement:
      "Technical assignments require demonstrating proficiency in modern frontend technologies, pixel-perfect UI implementation, and clean code architecture within tight timelines.",
    features: [
      "Fully responsive UI across all device sizes",
      "Reusable and composable React components",
      "Modern Tailwind CSS design system",
      "Performance optimized with Vite build tooling",
      "Clean TypeScript codebase with type safety",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    challenges: [
      "Achieving pixel-perfect UI matching design specifications",
      "Building a scalable component architecture for reusability",
      "Optimizing performance and bundle size with Vite",
    ],
    learnings: [
      "Precision UI implementation with Tailwind CSS utility classes",
      "Component-driven development with TypeScript and React",
      "Modern build tooling and development workflow with Vite",
      "Responsive design best practices across breakpoints",
    ],
    githubLink: "https://github.com/panidhargudupa/gushwork-web-assignment",
    image: "/placeholder.svg",
  },
];
