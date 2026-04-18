import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();



  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navItems
        .map((item) => ({ href: item.href, element: document.querySelector(item.href) as HTMLElement | null }))
        .filter((item) => item.element);

      const current = sections.findLast((item) => (item.element?.offsetTop ?? 0) - 150 <= window.scrollY);
      if (current) setActiveHash(current.href);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (location.pathname === "/certificate") {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("#home")} className="text-left">
          <div className="text-lg md:text-xl font-bold tracking-[0.18em] text-white">PANIDHAR G UDUPA</div>
          <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">Full Stack Developer</div>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {navItems.map((item, index) =>
            item.label === "Contact" ? (
<motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                animate-y-axis={{ y: [0, -3, 0] }}
                transition-y-axis={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
                className="shine-button rounded-full bg-primary px-5 py-2 text-sm lg:text-base font-semibold text-primary-foreground glow-primary"
              >
                {item.label}
              </motion.button>
            ) : (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-sm lg:text-base font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                  activeHash === item.href
                    ? "text-white after:w-full"
                    : "text-foreground/75 hover:text-white after:w-0 hover:after:w-full"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            ),
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
              {navItems.map((item) => (
                item.label === "Contact" ? (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    whileTap={{ scale: 0.95 }}
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="shine-button w-full rounded-xl bg-primary px-4 py-3 text-left text-base font-semibold text-primary-foreground glow-primary"
                  >
                    {item.label}
                  </motion.button>
                ) : (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-left text-base font-medium transition-colors ${
                      activeHash === item.href ? "text-primary" : "text-foreground/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fluid Scroll Progress Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary glow-primary"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </motion.nav>
  );
};

export default Navbar;
