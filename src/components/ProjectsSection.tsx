import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <span className="relative text-4xl font-bold text-gradient opacity-30 font-display">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
