import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">Go back home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <button
              onClick={() => navigate("/#projects")}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Projects
            </button>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveLink && project.liveLink !== "#" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg glass border-primary/30 text-foreground font-semibold text-sm hover:bg-primary/10 transition-colors flex items-center gap-2">
                    <GithubIcon width={16} height={16} /> GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-10">
              <Section title="Overview">
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </Section>

              <Section title="Problem Statement">
                <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
              </Section>

              <Section title="Key Features">
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Challenges Faced">
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <AlertTriangle size={18} className="text-accent mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Key Learnings">
                <ul className="space-y-3">
                  {project.learnings.map((l, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Lightbulb size={18} className="text-primary mt-0.5 shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="glass rounded-xl p-6 md:p-8">
    <h2 className="text-xl font-bold text-foreground mb-4 font-display">{title}</h2>
    {children}
  </div>
);

export default ProjectDetail;
