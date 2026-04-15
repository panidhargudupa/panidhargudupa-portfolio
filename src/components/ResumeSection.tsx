import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

const ResumeSection = () => {
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
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-xl p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="text-primary" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">My Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Download my resume to learn more about my experience, education, and technical skills.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} /> Open in New Tab
              </a>
            </div>
          </div>

          {/* Embedded viewer placeholder */}
          <div className="mt-8 glass rounded-xl overflow-hidden" style={{ height: 500 }}>
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <FileText size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-sm">Upload your resume PDF to enable the embedded viewer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
