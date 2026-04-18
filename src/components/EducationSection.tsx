import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "Master of Computer Applications (MCA)",
    institution: "Bangalore Institute of Technology (VTU)",
    location: "Bangalore",
    year: "2024 – 2025",
    details: "Specialized in advanced computing, software engineering, and AI-driven application development.",
  },
  {
    icon: GraduationCap,
    degree: "Bachelor of Science (B.Sc)",
    institution: "NIE FGC, University of Mysore",
    location: "Mysore",
    year: "2020 – 2023",
    details: "Electronics, Mathematics & Computer Science — built strong analytical and problem-solving foundations.",
  },
  {
    icon: BookOpen,
    degree: "Pre-University (11th & 12th)",
    institution: "Jnanodaya PU College",
    location: "Mysore",
    year: "2019 – 2020",
    details: "PCMCs (Physics, Chemistry, Mathematics, Computer Science).",
  },
  {
    icon: School,
    degree: "10th (CBSE)",
    institution: "Sri Sharadha Public School",
    location: "Mysore",
    year: "2018",
    details: "Completed secondary education under the CBSE curriculum.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My academic journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, i) => (
            <div key={i} className="flex gap-6">
              {/* Timeline column */}
              <div className="flex flex-col items-center w-5 shrink-0">
                {/* Line above dot (hidden for first item) */}
                {i === 0 ? (
                  <div className="w-[2px] flex-1" />
                ) : (
                  <div className="w-[2px] flex-1 bg-primary/25" />
                )}
                {/* Dot */}
                <div className="relative flex items-center justify-center my-1">
                  <span className="absolute h-5 w-5 rounded-full bg-primary/20 animate-ping" />
                  <span className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_3px_hsl(198_79%_58%/0.5)] animate-pulse" />
                </div>
                {/* Line below dot (hidden for last item) */}
                {i === educationData.length - 1 ? (
                  <div className="w-[2px] flex-1" />
                ) : (
                  <div className="w-[2px] flex-1 bg-primary/25" />
                )}
              </div>

              {/* Card column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass neon-outline rounded-xl p-6 hover:border-primary/30 transition-all group flex-1 mb-8"
              >
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <edu.icon className="text-accent" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground leading-tight">{edu.degree}</h3>
                    <p className="text-accent font-medium text-sm mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary/70" />
                    {edu.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary/70" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">{edu.details}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
