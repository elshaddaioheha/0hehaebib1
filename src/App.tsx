import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { SkillsSection } from "./components/SkillsSection";
import { ThemeToggle } from "./components/ThemeToggle";
import { WorksSection } from "./components/WorksSection";
import { useSpotlight } from "./hooks/useSpotlight";

const ticker = [
  "Available for work",
  "Full-stack",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Sound design",
  "Lagos",
] as const;

export default function App() {
  useSpotlight();

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-bg-dark min-h-screen text-accent">
        <ScrollProgress />
        <Hero />
        <Marquee
          items={ticker}
          className="border-y border-accent/10 bg-bg-dark"
          itemClassName="label text-accent/70"
        />
        <Navigation />
        <AboutSection />
        <SkillsSection />
        <ExpertiseSection />
        <ExperienceTimeline />
        <WorksSection />
        <FaqSection />
        <ContactSection />
        <Footer />
        <ThemeToggle />
        <Analytics />
      </div>
    </MotionConfig>
  );
}

