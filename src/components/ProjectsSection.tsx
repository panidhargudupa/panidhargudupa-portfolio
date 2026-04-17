import { motion } from "framer-motion";
import { RefreshCw, AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PROJECT_CONFIG } from "@/config/projects";

// The shape passed to Project Detail UI
export interface Project {
  id: string;
  title: string;
  originalName: string;
  category: string;
  shortDescription: string;
  overview: string;
  features: string[];
  techStack: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
}

// Tech Stack detection helper
const determineTechStack = (repo: any) => {
  const stack: string[] = [];
  if (repo.language) stack.push(repo.language);
  if (repo.topics && repo.topics.length > 0) stack.push(...repo.topics);
  
  if (stack.length === 0) {
    const name = repo.name.toLowerCase();
    if (name.includes("react") || name.includes("frontend")) stack.push("React", "CSS");
    if (name.includes("node") || name.includes("api")) stack.push("Node.js", "Express");
  }
  return Array.from(new Set(stack)).slice(0, 5); 
};

const determineCategory = (stack: string[]) => {
  const stackStr = stack.join(" ").toLowerCase();
  if (stackStr.includes("react") && stackStr.includes("node")) return "Full Stack";
  if (stackStr.includes("react") || stackStr.includes("vue") || stackStr.includes("css")) return "Frontend";
  if (stackStr.includes("node") || stackStr.includes("python") || stackStr.includes("java")) return "Backend";
  if (stackStr.includes("machine learning") || stackStr.includes("ml") || stackStr.includes("ai")) return "AI & ML";
  return "Software Engineering";
};

const fetchProjects = async (): Promise<Project[]> => {
  // Fetch directly from GitHub API - No Authentication / No Backend
  const res = await fetch("https://api.github.com/users/panidhargudupa/repos?per_page=100&sort=updated");
  if (!res.ok) throw new Error("Failed to fetch repositories from GitHub");
  
  const repos = await res.json();
  
  // 1. Map into unified Project object
  // 2. Filter exclusively by our custom PROJECT_CONFIG manual visibility system
  const processedRepos = repos
    .map((repo: any) => {
      const config = PROJECT_CONFIG[repo.name];
      if (!config || !config.visible) return null; // Default behavior: Ignore unlisted

      const techStack = determineTechStack(repo);
      
      return {
        id: repo.id.toString(),
        title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
        originalName: repo.name,
        category: determineCategory(techStack),
        shortDescription: repo.description || "A custom engineered project implementation.",
        overview: repo.description || "Development project analyzing code infrastructure.",
        features: [], // We keep this empty as full README extraction requires heavy payloads, users get clean basic UI first.
        techStack: techStack,
        liveLink: repo.homepage || (repo.has_pages ? `https://panidhargudupa.github.io/${repo.name}` : ""),
        githubLink: repo.html_url,
        featured: config.featured || false
      };
    })
    .filter(Boolean) as Project[];

  // Features First, then sort updated internally handles sorting
  return processedRepos.sort((a, b) => {
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });
};

const ProjectsSection = () => {
  const navigate = useNavigate();
  // Using React Query purely against GitHub API
  const { data: projects, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['githubProjectsClient'],
    queryFn: fetchProjects,
    refetchInterval: 120000, // Reduced polling frequency mapping direct to GitHub limits
  });

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-primary font-mono text-sm">Selected Showcase</p>
            {isFetching && !isLoading && (
              <RefreshCw size={14} className="text-primary animate-spin" />
            )}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-8">Projects</h2>
        </motion.div>

        {isError && (
          <div className="max-w-xl mx-auto p-6 rounded-xl border border-destructive/20 bg-destructive/10 text-center">
            <AlertTriangle className="mx-auto text-destructive mb-3" size={32} />
            <h3 className="text-lg font-bold text-foreground mb-1">Failed to connect to GitHub</h3>
            <p className="text-muted-foreground text-sm mb-4">Please check your network latency or API rate limits.</p>
            <button 
              onClick={() => refetch()}
              className="text-sm px-4 py-2 rounded-lg bg-destructive/20 hover:bg-destructive/30 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        )}

        {isLoading && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass rounded-xl overflow-hidden h-[300px] animate-pulse">
                   <div className="h-32 bg-slate-800/40"></div>
                   <div className="p-6">
                     <div className="w-3/4 h-6 bg-slate-700/50 rounded mb-4"></div>
                     <div className="w-full h-4 bg-slate-700/30 rounded mb-2"></div>
                     <div className="w-5/6 h-4 bg-slate-700/30 rounded mb-6"></div>
                   </div>
                </div>
             ))}
          </div>
        )}

        {projects && projects.length > 0 && (
           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="glass rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 h-full flex flex-col relative cursor-pointer shadow-md hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]"
              >
                <div className="h-32 bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative overflow-hidden border-b border-primary/10">
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-bold tracking-wider shadow-sm">
                      Featured
                    </div>
                  )}

                  <h3 className="relative text-2xl font-bold text-foreground group-hover:text-primary transition-colors capitalize px-4 text-center z-10 w-full truncate">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-6 flex flex-1 flex-col relative bg-gradient-to-b from-transparent to-background/40">
                  
                  <p className="text-[14px] text-foreground/70 mb-5 leading-relaxed flex-1 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                    {project.techStack.length > 0 ? project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-primary/5 text-primary border border-primary/20 group-hover:border-primary/40 transition-colors">
                        {tech}
                      </span>
                    )) : (
                       <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800 text-slate-400">#code</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
