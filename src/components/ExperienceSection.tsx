import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary glow-primary" />

            <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Loginware Softtech Pvt. Ltd.</h3>
                  <p className="text-primary font-medium text-sm">Intern – .NET Full Stack Developer</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary/70" />
                  Dec 2024 – Jan 2025
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
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
