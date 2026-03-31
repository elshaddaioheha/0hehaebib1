import { Analytics } from "@vercel/analytics/react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { SkillsSection } from "./components/SkillsSection";
import { WorksSection } from "./components/WorksSection";

export default function App() {
  return (
    <div className="bg-bg-dark min-h-screen text-accent selection:bg-accent selection:text-bg-dark">
      <Hero />
      <Navigation />
      <AboutSection />
      <SkillsSection />
      <ExpertiseSection />
      <ExperienceTimeline />
      <WorksSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </div>
  );
}
