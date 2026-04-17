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
            <p className="text-foreground/85 leading-relaxed text-base">
              I am an MCA graduate and full-stack developer with hands-on experience in building end-to-end web applications across MERN, .NET, and AI-based systems.
            </p>
            <p className="text-foreground/85 leading-relaxed text-base">
              I specialize in developing responsive user interfaces, REST APIs, scalable backend services, and cloud-integrated solutions.
            </p>
            <p className="text-foreground/85 leading-relaxed text-base">
              I enjoy solving real-world problems through clean architecture, strong backend logic, and user-focused design.
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
              { icon: GraduationCap, title: "Education", desc: "Master of Computer Applications (MCA)" },
              { icon: Target, title: "Career Goal", desc: "Building scalable products at innovative tech companies as a Full-Stack Developer" },
              { icon: Sparkles, title: "Interests", desc: "Web Development, Cloud Computing, AI/ML, Open Source Contribution" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2, scale: 1.02 }}
                className="glass neon-outline card-hover rounded-xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-accent group-hover:bg-primary/20 transition-colors">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-5 h-px w-16 bg-gradient-to-r from-primary via-accent/80 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
