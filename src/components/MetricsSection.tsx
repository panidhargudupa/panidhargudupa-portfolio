import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Layers, CloudCog } from "lucide-react";

const metrics = [
  { icon: FolderGit2, value: "3+", label: "Major Projects" },
  { icon: Briefcase, value: "1", label: "Internship Experience" },
  { icon: Layers, value: "MERN + .NET + AI", label: "Tech Stacks" },
  { icon: CloudCog, value: "Cloud", label: "Integrated Apps" },
];

const MetricsSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <metric.icon className="text-primary" size={22} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
