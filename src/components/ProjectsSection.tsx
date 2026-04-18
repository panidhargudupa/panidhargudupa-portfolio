import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`, { state: { from: '/#projects' } });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-[0.2em] uppercase">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A selection of projects showcasing full-stack development, UI engineering, and problem-solving skills.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div key={project.id} onClick={() => handleProjectClick(project.id)}>
              <ProjectCard
                project={project}
                index={i}
                onClick={() => handleProjectClick(project.id)}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => navigate("/all-projects")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/25 hover:from-primary/30 hover:to-primary/20 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(14,165,233,0.25)] group"
          >
            {/* Animated gleam effect built into standard styling */}
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
