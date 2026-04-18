import BackgroundFX from "@/components/BackgroundFX";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative section-shell">
      <BackgroundFX />
      <div className="relative z-10">
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
