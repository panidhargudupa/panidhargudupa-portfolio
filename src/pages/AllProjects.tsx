import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BackgroundFX from "@/components/BackgroundFX";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/allProjects";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`, { state: { from: '/all-projects' } });
  };

  return (
    <div className="min-h-screen bg-background relative section-shell">
      <BackgroundFX />
      
      <main className="pt-28 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             className="max-w-6xl mx-auto"
          >
            <button
              onClick={() => navigate("/#projects")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground hover:bg-white/10 transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Dashboard
            </button>

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
                All Projects
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A complete showcase of my development journey, spanning across Full Stack applications, Frontend engineering, and Machine Learning models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project, i) => (
                <div key={project.id} onClick={() => handleProjectClick(project.id)}>
                   <ProjectCard project={project} index={i} onClick={() => handleProjectClick(project.id)} />
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
