import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer with a strong foundation in computer science and a deep love for creating
              impactful digital solutions. Currently pursuing my degree in Computer Science, I thrive at the intersection of
              clean code and beautiful design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software development started with curiosity and has grown into a commitment to building
              production-ready applications that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: GraduationCap, title: "Education", desc: "B.Tech in Computer Science — Expected 2025" },
              { icon: Target, title: "Career Goal", desc: "Building scalable products at innovative tech companies" },
              { icon: Sparkles, title: "Interests", desc: "Web Dev, Cloud Computing, AI/ML, Open Source" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-xl p-6 glow-primary hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
