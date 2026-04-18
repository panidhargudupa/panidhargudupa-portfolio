import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

const ResumeSection = () => {
  const resumeUrl = import.meta.env.BASE_URL + "resume.pdf";

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">My credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div whileHover={{ y: -10, scale: 1.01 }} className="glass neon-outline rounded-xl p-8 text-center transition-all">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="text-primary" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">My Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my resume to learn more about my experience, education, and technical skills.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={resumeUrl}
                download="Panidhar_G_Udupa_Resume.pdf"
                className="shine-button px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all hover:scale-[1.03] glow-primary flex items-center gap-2"
              >
                <Download size={18} className="text-primary-foreground" /> Download Resume
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-button px-6 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-all hover:scale-[1.03] glow-accent flex items-center gap-2"
              >
                <ExternalLink size={18} className="text-primary" /> Open in New Tab
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
