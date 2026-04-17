import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle, Code2, ShieldAlert } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Read state passed from the routing Link click
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-background relative section-shell flex items-center justify-center">
        <BackgroundFX />
        <Navbar />
        <div className="text-center relative z-10 glass p-10 rounded-2xl border border-destructive/20">
          <ShieldAlert size={48} className="text-destructive mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Data Lost</h1>
          <p className="text-muted-foreground mb-6">You navigated here directly. Please go back to the portfolio to select a project.</p>
          <button 
            onClick={() => navigate("/#projects", { replace: true })} 
            className="shine-button px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all text-sm gap-2"
          >
            <ArrowLeft size={16} className="inline mr-2" />
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative section-shell">
      <BackgroundFX />
      <Navbar />
      <main className="pt-28 pb-16 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => navigate("/#projects")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground hover:bg-white/10 transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </button>

            {/* Header */}
            <div className="mb-12 glass rounded-2xl p-8 md:p-10 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                 <div>
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                      className="text-accent font-mono text-sm mb-2"
                    >
                       {project.category}
                    </motion.div>
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-bold font-display text-gradient capitalize"
                    >
                      {project.title}
                    </motion.h1>
                 </div>
                 
                 <div className="flex flex-wrap gap-3">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="shine-button glow-primary px-5 py-2.5 rounded-lg border border-primary/50 bg-primary/20 text-primary-foreground font-semibold text-sm hover:bg-primary transition-colors flex items-center gap-2 whitespace-nowrap"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="px-5 py-2.5 rounded-lg border border-white/20 bg-background/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2 whitespace-nowrap"
                      >
                        <GithubIcon width={16} height={16} /> Source Code
                      </motion.a>
                    )}
                 </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                {project.overview}
              </motion.p>
              
              <div className="pt-6 border-t border-white/10 flex items-center gap-3 flex-wrap">
                 <span className="text-sm font-medium text-foreground mr-2">Core Tech:</span>
                {project.techStack.map((tech: string) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20 flex items-center gap-1"
                  >
                    <Code2 size={12} className="opacity-70" /> {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-8">
              {project.features && project.features.length > 0 && (
                <Section title="Auto-Detected Features">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {project.features.map((f: string, i: number) => (
                      <motion.li 
                         key={i} 
                         initial={{ opacity: 0, x: -10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.05 }}
                         className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
                      >
                        <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Section>
              )}
              
              {(!project.features || project.features.length === 0) && (
                 <Section title="Repository Details">
                    <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
                       <p className="text-muted-foreground text-sm">
                          Features were not explicitly detailed in the repository's main README or could not be automatically extracted safely. Check the standard source code using the link above for deep architectural details.
                       </p>
                    </div>
                 </Section>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="glass neon-outline rounded-2xl p-6 md:p-8 border border-border/70 group"
  >
    <div className="flex items-center gap-3 mb-6">
       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary" />
       </div>
       <h2 className="text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors">{title}</h2>
    </div>
    {children}
  </motion.div>
);

export default ProjectDetail;
