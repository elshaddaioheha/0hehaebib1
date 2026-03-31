import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { ProjectCard } from "./ProjectCard";

export function WorksSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="works" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-[12vw] font-display leading-[0.8]">works</h2>
            <div className="mt-8 flex gap-4">
              <span className="px-4 py-2 bg-accent/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/20">
                Featured Projects
              </span>
            </div>
          </div>
          <p className="max-w-[350px] text-accent/60 font-medium leading-[1.5] mt-8 md:mt-0">
            A selection of full-stack and Web3 solutions, from decentralized escrow platforms to
            blockchain-backed marketplaces.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 border-t border-accent/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
