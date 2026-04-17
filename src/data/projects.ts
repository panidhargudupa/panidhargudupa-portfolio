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
    title: "StayNest - Vacation Rental Booking Platform",
    shortDescription:
      "A full-stack vacation rental platform inspired by Airbnb, built with Node.js, Express, MongoDB, EJS, Bootstrap, Cloudinary, and Mapbox for seamless listing, booking, and review workflows.",
    overview:
      "StayNest is a full-stack vacation rental booking platform inspired by Airbnb. It lets users browse, create, manage, and review rental listings through a server-rendered MVC application with secure authentication, interactive maps, image uploads, and production deployment.",
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
    liveLink: "https://staynest-booking.onrender.com/",
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
      "Restaurants need a centralized system to manage menus, process orders efficiently, and generate accurate bills - reducing manual errors and improving service speed.",
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
    title: "Gushwork Web Assignment - HDPE Pipes Product Page",
    shortDescription:
      "Responsive product landing page built for the Gushwork assignment using pure HTML, CSS, and JavaScript with pixel-accurate layout, product interactions, and mobile-friendly behavior.",
    overview:
      "This project is a responsive HDPE pipes product page built as part of the Gushwork web assignment. The implementation focuses on translating the provided design accurately into a clean frontend using only vanilla HTML, CSS, and JavaScript without external frameworks.",
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
    liveLink: "https://panidhargudupa.github.io/gushwork-web-assignment/",
    githubLink: "https://github.com/panidhargudupa/gushwork-web-assignment",
    image: "/placeholder.svg",
  },
];
