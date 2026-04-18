import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col border border-white/[0.06] hover:border-primary/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(14,165,233,0.12)]"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header zone */}
      <div className="relative h-40 bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-[#0a0e1a] flex items-end p-6 overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: "radial-gradient(circle, hsla(198, 80%, 55%, 0.12) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Large initial letter */}
        <div className="absolute top-4 right-6 text-[80px] font-black font-display text-white/[0.03] leading-none select-none group-hover:text-primary/[0.06] transition-colors duration-700">
          {project.title.charAt(0)}
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-6 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-6 z-10">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/20">
              ★ Featured
            </span>
          </div>
        )}

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(221,30%,13%)] to-transparent" />

        {/* Title */}
        <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5">
          {project.shortDescription}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/[0.04] text-primary/90 border border-white/[0.06] group-hover:border-primary/25 group-hover:bg-primary/[0.06] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-muted-foreground bg-white/[0.03] border border-white/[0.04]">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer with buttons */}
        <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/25 hover:from-primary/30 hover:to-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white/[0.04] text-foreground/80 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              <GithubIcon width={13} height={13} /> GitHub
            </a>
          </div>

          {/* View details arrow */}
          <motion.div
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
