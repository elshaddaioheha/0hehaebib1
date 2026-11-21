import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";
import { SectionMark } from "./SectionMark";

export function ExperienceTimeline() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="experience" className="py-16 md:py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionMark index="04" kicker="Path" />
          <AnimatedHeading
            title="experience"
            direction="right-to-left"
            className="text-[18vw] md:text-[12vw] leading-[0.9] mb-8 md:mb-16"
          />
          <div className="relative border-t border-accent/10">
            <motion.span
              aria-hidden="true"
              className="timeline-rail pointer-events-none absolute bottom-0 left-[14rem] top-0 hidden w-px bg-signal/45 md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />
            {experiences.map((exp, i) => (
              <motion.article
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: Math.min(i, 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid gap-x-10 gap-y-3 border-b border-accent/10 py-8 transition-colors duration-200 hover:border-accent/30 md:grid-cols-[14rem_1fr] md:py-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[14rem] top-12 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-signal shadow-[0_0_0_4px_rgb(var(--c-bg))] md:block"
                />
                <div className="flex md:flex-col flex-wrap items-baseline gap-x-3 gap-y-2 md:pt-2">
                  <span className="label text-accent/80 tabular-nums">{exp.period}</span>
                  <span className="label text-muted">{exp.location}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl leading-tight text-accent transition-transform duration-300 ease-out group-hover:translate-x-2">{exp.role}</h3>
                  <p className="mt-1 mb-0 text-sm md:text-base font-semibold text-fg/80">{exp.company}</p>
                  <p className="mt-4 mb-0 text-accent/70 text-base md:text-lg leading-relaxed max-w-3xl">{exp.desc}</p>
                  {exp.highlights ? (
                    <ul className="marker-list mt-4 text-sm md:text-base text-accent/70 max-w-3xl">
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
