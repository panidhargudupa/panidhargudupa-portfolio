import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Where I've worked</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6">
            {/* Timeline column - just a dot, no lines since single entry */}
            <div className="flex flex-col items-center w-5 shrink-0">
              <div className="w-[2px] flex-1" />
              <div className="relative flex items-center justify-center my-1">
                <span className="absolute h-5 w-5 rounded-full bg-primary/20 animate-ping" />
                <span className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_3px_hsl(198_79%_58%/0.5)] animate-pulse" />
              </div>
              <div className="w-[2px] flex-1" />
            </div>

            {/* Card column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass neon-outline rounded-xl p-6 hover:border-primary/30 transition-all flex-1 group"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Loginware Softtech Pvt. Ltd.</h3>
                  <p className="text-accent font-medium text-sm">Intern - .NET Full Stack Developer</p>
                </div>
                {/* View Certificate Button */}
                <div className="md:ml-auto relative">
                  <Link
                    to="/certificate"
                    className="group relative flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(14,165,233,0.15)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:animate-pulse -z-10" />
                    <ExternalLink size={16} className="group-hover:text-accent transition-colors" /> 
                    View Certificate
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary/70" />
                  Dec 2024 - Jan 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary/70" />
                  Bangalore
                </span>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Developed Restaurant Management System using .NET, Angular, and SQL Server",
                  "Built REST APIs for order processing and billing workflows",
                  "Designed relational database schema for efficient data management",
                  "Collaborated with the team across the full development lifecycle",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
