import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, FolderGit2, Layers, Sparkles, type LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";

interface Metric {
  icon: LucideIcon;
  value?: number;
  valueText?: string;
  suffix?: string;
  label: string;
  accent: string;
}

const metrics: Metric[] = [
  { icon: FolderGit2, value: projects.length, label: "Projects Delivered", accent: "from-primary/25 via-primary/8 to-transparent" },
  { icon: Briefcase, value: 1, label: "Internship Experience", accent: "from-accent/18 via-accent/8 to-transparent" },
  { icon: Layers, valueText: "Frontend + Backend + AI", label: "Core Strengths", accent: "from-primary/18 via-accent/8 to-transparent" },
  { icon: Sparkles, valueText: "Web Apps + AI", label: "Current Focus", accent: "from-accent/20 via-primary/10 to-transparent" },
];

const CountUpValue = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let startTime: number | null = null;
    const duration = 1200;

    const tick = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
};

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
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass neon-outline card-hover rounded-2xl p-6 group hover:border-primary/30 transition-all overflow-hidden relative flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors"
              >
                <metric.icon className="text-accent" size={22} />
              </motion.div>
              <p className="relative text-3xl md:text-4xl font-bold text-foreground mb-1 text-center">
                {typeof metric.value === "number" ? (
                  <CountUpValue value={metric.value} suffix={metric.suffix} />
                ) : (
                  <span className="text-base md:text-lg font-bold leading-tight">{metric.valueText}</span>
                )}
              </p>
              <p className="relative text-[10px] md:text-xs text-muted-foreground font-semibold uppercase tracking-[0.18em] leading-relaxed text-center">
                {metric.label}
              </p>
              <div className="relative mt-3 h-px w-10 mx-auto bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
