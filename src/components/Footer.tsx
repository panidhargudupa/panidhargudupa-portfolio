import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const Footer = () => {
  const socials = [
    { icon: <GithubIcon width={18} height={18} />, href: "https://github.com/panidhargudupa" },
    { icon: <LinkedinIcon width={18} height={18} />, href: "https://linkedin.com/in/panidhargudupa" },
    { icon: <Mail size={18} />, href: "mailto:panidhargudupa1@gmail.com" },
  ];

  return (
    <footer className="py-12 border-t border-primary/30 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white font-display tracking-[0.16em]">PANIDHAR G UDUPA</p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.08 }}
                className="glass neon-outline p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-primary/10 transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            {"\u00A9"} {new Date().getFullYear()} Panidhar G Udupa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
