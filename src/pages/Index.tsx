import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
};

export default Index;
