import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const Footer = () => {
  const socials = [
    { icon: <GithubIcon width={18} height={18} />, href: "https://github.com" },
    { icon: <LinkedinIcon width={18} height={18} />, href: "https://linkedin.com" },
    { icon: <Mail size={18} />, href: "mailto:hello@example.com" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gradient font-display mb-1">{"<Dev />"}</p>
            <p className="text-sm text-muted-foreground">
              Built with <Heart size={12} className="inline text-primary" /> and lots of coffee
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
