import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

let cachedProjects = null;
let lastFetchTime = 0;

// Read local visibility config
const getConfig = () => {
  try {
    const configPath = path.join(__dirname, "config", "projects.json");
    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Config read error:", err.message);
  }
  return []; // Fallback empty
};

// Heuristic README parser
const parseReadmeHeuristics = (readmeContent) => {
  if (!readmeContent) return { features: [], summary: null };

  const lines = readmeContent.split('\n');
  const features = [];
  let summary = null;
  
  // 1. Extract Summary (ignore headers, badges, empty lines)
  const descLine = lines.find(line => 
    line.trim().length > 15 && 
    !line.startsWith('#') && 
    !line.startsWith('[') && 
    !line.startsWith('!') &&
    !line.startsWith('<')
  );
  if (descLine) summary = descLine.substring(0, 200) + (descLine.length > 200 ? "..." : "");

  // 2. Extract Features (look for "Features" header, then map bullet points)
  const featureHeaderIdx = lines.findIndex(l => l.toLowerCase().includes("## feature"));
  if (featureHeaderIdx !== -1) {
    // Scan lines after header until the next header or empty space explosion
    let i = featureHeaderIdx + 1;
    while (i < lines.length && i < featureHeaderIdx + 15) {
      const line = lines[i].trim();
      if (line.startsWith("## ") || line.startsWith("### ")) break; // Found next section
      if (line.startsWith("- ") || line.startsWith("* ")) {
        // Strip markdown bolding and links for clean text
        let cleanFeature = line.substring(2).replace(/\*\*/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").trim();
        features.push(cleanFeature);
      }
      i++;
    }
  }

  return { features, summary };
};

const determineTechStack = (repo) => {
  const stack = [];
  if (repo.language) stack.push(repo.language);
  if (repo.topics && repo.topics.length > 0) stack.push(...repo.topics);
  
  if (stack.length === 0) {
    const name = repo.name.toLowerCase();
    if (name.includes("react") || name.includes("frontend")) stack.push("React", "CSS");
    if (name.includes("node") || name.includes("api")) stack.push("Node.js", "Express");
  }
  return [...new Set(stack)].slice(0, 5); 
};

app.get("/api/projects", async (req, res) => {
  try {
    const now = Date.now();
    if (cachedProjects && (now - lastFetchTime) < CACHE_DURATION) {
      console.log("Serving advanced projects from cache");
      return res.json({ success: true, fromCache: true, data: cachedProjects });
    }

    console.log("Fetching fresh projects from GitHub...");
    const username = "panidhargudupa";
    const headers = process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {};

    // Get all user repos
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers }
    );

    const allRepos = response.data;
    const configArray = getConfig();
    
    // Filter and Process
    let processedRepos = [];

    for (const repo of allRepos) {
      if (repo.fork) continue; // Exclude forks
      
      // Check visibility from config
      const repoConfig = configArray.find(c => c.repo.toLowerCase() === repo.name.toLowerCase());
      
      // If config array is not empty, only allow explicitly visible repos.
      // If config array is empty (or no match found but config is somewhat loose), we fall back to topic checking or just deny.
      // Requirements: "Only show repos marked 'visible: true'"
      if (configArray.length > 0) {
         if (!repoConfig || repoConfig.visible !== true) continue;
      }

      const techStack = determineTechStack(repo);
      
      // Dynamic category matching
      let category = "Software";
      let stackStr = techStack.join(" ").toLowerCase();
      if (stackStr.includes("react") && stackStr.includes("node")) category = "Full Stack";
      else if (stackStr.includes("react") || stackStr.includes("vue") || stackStr.includes("css")) category = "Frontend";
      else if (stackStr.includes("node") || stackStr.includes("python") || stackStr.includes("java")) category = "Backend";
      if (stackStr.includes("machine learning") || stackStr.includes("ml") || stackStr.includes("ai")) category = "AI & ML";

      // Base format
      let formattedRepo = {
        id: repo.id.toString(),
        title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
        originalName: repo.name,
        category: category,
        shortDescription: repo.description || "No description provided.",
        overview: repo.description || "Development project analyzing code infrastructure.", // Base
        features: [],
        techStack: techStack,
        liveLink: repo.homepage || (repo.has_pages ? `https://${username}.github.io/${repo.name}` : ""),
        githubLink: repo.html_url,
        featured: repoConfig ? (repoConfig.featured || false) : (repo.stargazers_count > 0 || repo.name.includes("portfolio"))
      };

      // Heuristic README Analysis Fetch
      try {
        const readmeRes = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
          headers: { ...headers, Accept: 'application/vnd.github.v3.raw' }
        });
        
        const heuristics = parseReadmeHeuristics(readmeRes.data);
        if (heuristics.summary && formattedRepo.shortDescription === "No description provided.") {
           formattedRepo.shortDescription = heuristics.summary;
           formattedRepo.overview = heuristics.summary;
        }
        if (heuristics.features.length > 0) {
           formattedRepo.features = heuristics.features;
        }

        // Live Demo robust regex scan if missing
        if (!formattedRepo.liveLink) {
          const links = readmeRes.data.match(/https:\/\/[a-zA-Z0-9-]+\.(vercel\.app|netlify\.app|onrender\.com)/);
          if (links) formattedRepo.liveLink = links[0];
        }

      } catch (readmeErr) {
        // Safe to ignore if no README found
      }

      processedRepos.push(formattedRepo);
    }
    
    cachedProjects = processedRepos;
    lastFetchTime = now;

    res.json({ success: true, fromCache: false, data: cachedProjects });

  } catch (error) {
    console.error("Error fetching GitHub projects:", error.message);
    if (cachedProjects) {
        return res.json({ success: true, fromCache: true, stale: true, data: cachedProjects });
    }
    res.status(500).json({ success: false, message: "Failed to load advanced projects", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Automated Project Server running on http://localhost:${PORT}`);
});
