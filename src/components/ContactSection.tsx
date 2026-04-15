import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, GitBranch, Linkedin as LinkedinIcon, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Placeholder - will wire to backend later
    console.log("Contact form:", data);
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's work together</h3>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "hello@example.com", href: "mailto:hello@example.com" },
                { icon: Phone, label: "+1 (234) 567-8900", href: "tel:+12345678900" },
                { icon: Github, label: "github.com/johndoe", href: "https://github.com" },
                { icon: Linkedin, label: "linkedin.com/in/johndoe", href: "https://linkedin.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-xl p-6 space-y-5"
          >
            <div>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Your Email"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                {...register("phone")}
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
            </div>
            <div>
              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
