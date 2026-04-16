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
    shortDescription: "Full-stack MERN booking platform with authentication, CRUD operations, reviews, role-based access control, and cloud integrations.",
    overview: "Developed a full-stack vacation rental booking platform using the MERN stack. The platform enables users to browse, book, and review rental properties with a seamless user experience. Features include user authentication, property CRUD operations, image uploads via Cloudinary, interactive maps with Mapbox, and role-based access control.",
    problemStatement: "Travelers need a reliable and intuitive platform to discover and book vacation rentals, while property owners need tools to manage listings, handle bookings, and receive genuine reviews — all in one unified system.",
    features: [
      "User authentication & session management with Passport.js",
      "Full CRUD operations for property listings",
      "Review and rating system for properties",
      "Role-based access control (owner vs guest)",
      "Cloud image uploads via Cloudinary",
      "Interactive maps with Mapbox API integration",
      "Responsive UI with modern design patterns",
      "Deployed on Render for production access",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary", "Mapbox", "Render"],
    challenges: [
      "Implementing secure session-based authentication with role-based access across multiple user types",
      "Integrating Cloudinary for efficient image upload and transformation pipeline",
      "Building interactive map-based property discovery with Mapbox API",
      "Designing a scalable MongoDB schema for properties, users, reviews, and bookings",
    ],
    learnings: [
      "End-to-end full-stack development workflow from design to deployment",
      "Cloud service integration patterns (Cloudinary, Mapbox, Render)",
      "Authentication and authorization best practices in Node.js applications",
      "MongoDB schema design for relational-style data in a NoSQL database",
    ],
    liveLink: "#",
    githubLink: "https://github.com/panidhargudupa",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    shortDescription: "Full-stack system for menu management, order processing, and billing workflows using .NET, Angular, and SQL Server.",
    overview: "Developed a comprehensive restaurant management system during an internship at Loginware Softtech. The system handles menu management, real-time order processing, and automated billing workflows, providing restaurant staff with an efficient digital workflow.",
    problemStatement: "Restaurants need a centralized system to manage menus, process orders efficiently, and generate accurate bills — reducing manual errors and improving service speed.",
    features: [
      "Menu management with categories and pricing",
      "Real-time order processing workflow",
      "Automated billing and invoice generation",
      "REST API backend with .NET",
      "Angular frontend with responsive design",
      "Relational database schema with SQL Server",
    ],
    techStack: [".NET", "Angular", "SQL Server", "REST API", "TypeScript"],
    challenges: [
      "Designing an efficient relational database schema for orders, menu items, and billing",
      "Building real-time order status updates between kitchen and front-of-house",
      "Implementing robust REST APIs for complex billing workflows",
    ],
    learnings: [
      "Enterprise-grade full-stack development with .NET and Angular",
      "Relational database design and SQL Server management",
      "Professional team collaboration in an agile development environment",
      "MVC architecture patterns in production applications",
    ],
    githubLink: "https://github.com/panidhargudupa",
    image: "/placeholder.svg",
  },
  {
    id: "lung-cancer-detection",
    title: "Lung Cancer Detection & Classification",
    shortDescription: "AI-based medical image classification pipeline for CT scans using CNN, DenseNet, and ResNet models with Flask deployment.",
    overview: "Built an AI-powered medical image classification system that analyzes CT scan images to detect and classify lung cancer. The pipeline includes image preprocessing, feature extraction, and classification using multiple deep learning architectures including CNN, DenseNet, and ResNet, deployed via a Flask web interface.",
    problemStatement: "Early detection of lung cancer significantly improves patient outcomes, but manual CT scan analysis is time-consuming and prone to human error. An automated classification system can assist radiologists in faster and more accurate diagnosis.",
    features: [
      "CT scan image preprocessing and augmentation pipeline",
      "Multiple deep learning model architectures (CNN, DenseNet, ResNet)",
      "Model comparison and accuracy benchmarking",
      "Flask web application for easy image upload and prediction",
      "Visual classification results with confidence scores",
      "Dataset handling and training pipeline",
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
    githubLink: "https://github.com/panidhargudupa",
    image: "/placeholder.svg",
  },
];
