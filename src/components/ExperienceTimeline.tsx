import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";

export function ExperienceTimeline() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="experience" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedHeading title="experience" direction="right-to-left" className="text-[12vw] mb-16" />
          <div className="grid gap-12">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="group border-b border-accent/10 pb-12 hover:border-accent transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="w-full md:w-auto overflow-hidden">
                    <AnimatedHeading
                      title={exp.role}
                      direction="left-to-right"
                      tag="h3"
                      className="text-3xl md:text-4xl text-accent whitespace-normal"
                    />
                    <p className="text-lg text-accent/60 font-bold uppercase mt-2">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-accent font-bold opacity-40">{exp.period}</span>
                </div>
                <p className="mt-6 text-accent/70 text-lg leading-relaxed max-w-4xl">{exp.desc}</p>
                {exp.highlights ? (
                  <ul className="mt-4 list-disc list-inside text-accent/70 space-y-2">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
