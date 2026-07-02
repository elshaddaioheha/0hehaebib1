import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";
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
    <section ref={ref} id="works" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full md:w-auto">
            <AnimatedHeading title="works" direction="left-to-right" className="text-[12vw] leading-[0.8]" />
            <div className="mt-8 flex flex-wrap gap-3">
              {filterOptions.map((opt) => {
                const active = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFilter(opt.value)}
                    className={`relative px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                      active
                        ? "text-[#1C1B21]"
                        : "text-accent border border-accent/15 hover:border-accent/40"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-[#71ADDD] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="max-w-[400px] text-accent/60 font-medium leading-[1.5] mt-8 md:mt-0">
            A curated classification of engineering works: from Redis-backed system engines and command utilities to full-stack user platforms.
          </p>
        </motion.div>

        <motion.div
          layout
          className="mt-20 border-t border-accent/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
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
