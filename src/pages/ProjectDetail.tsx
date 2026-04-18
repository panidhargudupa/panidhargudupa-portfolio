import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Code2,
  ShieldAlert,
  Lightbulb,
  Target,
  Layers,
  Rocket,
  BookOpen,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import BackgroundFX from "@/components/BackgroundFX";
import Footer from "@/components/Footer";
import { allProjects as projects } from "@/data/allProjects";

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Reusable Section Card                                              */
/* ------------------------------------------------------------------ */

const Section = ({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="glass neon-outline rounded-2xl p-6 md:p-8 border border-white/[0.06] group hover:border-primary/20 transition-colors duration-500"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
        <Icon size={18} className="text-primary" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors duration-300">
        {title}
      </h2>
    </div>
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Bullet Item                                                        */
/* ------------------------------------------------------------------ */

const BulletItem = ({
  text,
  index,
  icon: Icon = CheckCircle,
  iconColor = "text-primary",
}: {
  text: string;
  index: number;
  icon?: React.ElementType;
  iconColor?: string;
}) => (
  <motion.li
    custom={index}
    variants={fadeUp}
    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/15 hover:bg-white/[0.04] transition-all duration-300"
  >
    <Icon size={17} className={`${iconColor} mt-0.5 shrink-0`} />
    <span className="text-muted-foreground text-sm leading-relaxed">{text}</span>
  </motion.li>
);

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);
  
  // Determine where to go back to based on navigation state
  const backTo = location.state?.from || "/#projects";
  const backLabel = backTo === "/all-projects" ? "All Projects" : "Dashboard";

  /* 404 State */
  if (!project) {
    return (
      <div className="min-h-screen bg-background relative section-shell flex items-center justify-center">
        <BackgroundFX />
        <div className="text-center relative z-10 glass p-10 rounded-2xl border border-destructive/20 max-w-md mx-4">
          <ShieldAlert size={48} className="text-destructive mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-foreground mb-3">Project Not Found</h1>
          <p className="text-muted-foreground mb-6 text-sm">
            The project you're looking for doesn't exist or may have been removed.
          </p>
          <button
            onClick={() => navigate(backTo, { replace: true })}
            className="shine-button px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-all text-sm inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Return to {backLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative section-shell">
      <BackgroundFX />
      <main className="pt-28 pb-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Back button */}
            <motion.button
              variants={fadeUp}
              custom={0}
              onClick={() => navigate(backTo)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-foreground hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-primary transition-all duration-300 mb-8 font-medium"
            >
              <ArrowLeft size={16} /> Back to {backLabel}
            </motion.button>

            {/* ============================================ */}
            {/*  HERO HEADER                                 */}
            {/* ============================================ */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="mb-10 glass rounded-2xl p-8 md:p-10 border border-primary/15 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 h-60 w-60 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, hsla(198, 80%, 55%, 0.08) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Category badge */}
              <motion.div variants={fadeUp} custom={1.5} className="mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] bg-primary/10 text-primary border border-primary/20">
                  {project.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                custom={2}
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-gradient mb-3 leading-tight"
              >
                {project.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={fadeUp}
                custom={2.5}
                className="text-lg text-primary/80 font-medium mb-6"
              >
                {project.tagline}
              </motion.p>

              {/* Action buttons */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3 mb-8">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-sky-400 text-primary-foreground font-semibold text-sm hover:shadow-[0_8px_24px_rgba(14,165,233,0.3)] transition-all duration-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                >
                  <GithubIcon width={16} height={16} /> Source Code
                </a>
              </motion.div>

              {/* Overview text */}
              <motion.p
                variants={fadeUp}
                custom={3.5}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {project.overview}
              </motion.p>

              {/* Tech stack bar */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="pt-6 border-t border-white/[0.06] flex items-center gap-3 flex-wrap"
              >
                <span className="text-sm font-semibold text-foreground mr-1 flex items-center gap-1.5">
                  <Code2 size={14} className="text-primary" /> Tech Stack:
                </span>
                {project.techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-primary/[0.06] text-primary border border-primary/15 hover:border-primary/30 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* ============================================ */}
            {/*  CONTENT SECTIONS                            */}
            {/* ============================================ */}
            <div className="space-y-7">

              {/* Problem Statement */}
              <Section title="Problem Statement" icon={Target} delay={0.05}>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.problemStatement}
                </p>
              </Section>

              {/* Features */}
              {project.features.length > 0 && (
                <Section title="Key Features" icon={Layers} delay={0.1}>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-3"
                  >
                    {project.features.map((f, i) => (
                      <BulletItem key={i} text={f} index={i} />
                    ))}
                  </motion.ul>
                </Section>
              )}

              {/* Challenges */}
              {project.challenges.length > 0 && (
                <Section title="Challenges Faced" icon={AlertTriangle} delay={0.15}>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {project.challenges.map((c, i) => (
                      <BulletItem
                        key={i}
                        text={c}
                        index={i}
                        icon={AlertTriangle}
                        iconColor="text-amber-400"
                      />
                    ))}
                  </motion.ul>
                </Section>
              )}

              {/* Learnings */}
              {project.learnings.length > 0 && (
                <Section title="Key Learnings" icon={BookOpen} delay={0.2}>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    {project.learnings.map((l, i) => (
                      <BulletItem
                        key={i}
                        text={l}
                        index={i}
                        icon={Lightbulb}
                        iconColor="text-emerald-400"
                      />
                    ))}
                  </motion.ul>
                </Section>
              )}

              {/* Future Improvements */}
              {project.futureImprovements.length > 0 && (
                <Section title="Future Improvements" icon={Rocket} delay={0.25}>
                  <motion.ul
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-3"
                  >
                    {project.futureImprovements.map((f, i) => (
                      <BulletItem
                        key={i}
                        text={f}
                        index={i}
                        icon={Rocket}
                        iconColor="text-violet-400"
                      />
                    ))}
                  </motion.ul>
                </Section>
              )}
            </div>

            {/* ============================================ */}
            {/*  BOTTOM CTA                                  */}
            {/* ============================================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 glass rounded-2xl p-8 border border-white/[0.06] text-center"
            >
              <p className="text-muted-foreground text-sm mb-5">
                Interested in this project? Check out the source code or see it in action.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-sky-400 text-primary-foreground font-semibold text-sm hover:shadow-[0_8px_24px_rgba(14,165,233,0.3)] transition-all duration-300"
                  >
                    <ExternalLink size={16} /> View Live
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
                >
                  <GithubIcon width={16} height={16} /> View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
