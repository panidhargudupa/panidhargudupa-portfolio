import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileText, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-[0.08] grayscale" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,32,0.55),rgba(11,17,32,0.82)_45%,rgba(0,0,0,0.96)_100%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.p variants={itemVariants} className="text-primary font-mono text-sm mb-4 tracking-[0.24em] uppercase">
            Full Stack Developer
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-display mb-5 text-white whitespace-nowrap uppercase tracking-wider">
            PANIDHAR G UDUPA
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-slate-100 font-medium mb-6 text-balance">
            Full Stack Developer | MCA Graduate | Software Engineer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-base md:text-lg text-balance">
            Building scalable full-stack web applications and intelligent software solutions with MERN, .NET, PostgreSQL, and AI-driven technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollTo("#projects")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="shine-button px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/25 hover:from-primary/30 hover:to-primary/20 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(14,165,233,0.35)] transition-all duration-300 font-bold tracking-wide"
          >
            View Projects
          </motion.button>
          
          <motion.button
            onClick={() => scrollTo("#resume")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(14,165,233,0.25)] transition-all duration-300 font-bold tracking-wide flex items-center gap-2"
          >
            <FileText size={18} className="hidden lg:block" />
            <motion.span
              className="lg:hidden inline-flex"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
            Download Resume
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:from-primary/20 hover:to-primary/10 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(14,165,233,0.25)] transition-all duration-300 font-bold tracking-wide flex items-center gap-2"
          >
            <Mail size={18} /> Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
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
