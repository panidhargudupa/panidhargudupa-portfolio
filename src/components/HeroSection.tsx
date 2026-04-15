import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4">
            <span className="text-gradient">John Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            Full-Stack Developer & Software Engineer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable web applications and crafting exceptional digital experiences.
            Turning complex problems into elegant, user-friendly solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#resume")}
            className="px-8 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <FileText size={18} /> Resume
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 rounded-lg glass border-accent/30 text-foreground font-semibold hover:bg-accent/10 transition-colors flex items-center gap-2"
          >
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo("#about")} className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
