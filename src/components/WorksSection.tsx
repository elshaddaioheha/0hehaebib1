import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";
import { Decoration } from "./Decoration";
import { ProjectCard } from "./ProjectCard";

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "backend", label: "Systems & Backend" },
  { value: "fullstack", label: "Full-Stack" },
] as const;

export function WorksSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();
  const [filter, setFilter] = useState<"all" | "backend" | "fullstack">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section ref={ref} id="works" className="relative py-16 md:py-24 bg-bg-dark border-t border-accent/5 overflow-hidden">
      <Decoration
        className="absolute inset-x-0 top-0 h-[420px] w-full"
        color="168 218 220"
        fade="top"
        intensity={0.14}
        speed={0.6}
      />
      <div className="container relative">
        <motion.div
          className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full md:w-auto">
            <AnimatedHeading title="works" direction="left-to-right" className="text-[18vw] md:text-[12vw] leading-[0.85]" />
            <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3">
              {filterOptions.map((opt) => {
                const active = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFilter(opt.value)}
                    className={`relative min-h-[44px] px-4 md:px-5 rounded-full label press cursor-pointer ${
                      active
                        ? "text-bg-dark"
                        : "text-accent inside-border"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-accent rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="max-w-[400px] text-accent/60 font-medium leading-[1.5] mt-6 md:mt-0 mb-0">
            A curated classification of engineering works: from Redis-backed system engines and command utilities to full-stack user platforms.
          </p>
        </motion.div>

        <motion.div
          layout
          className="mt-10 md:mt-20 border-t border-accent/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
