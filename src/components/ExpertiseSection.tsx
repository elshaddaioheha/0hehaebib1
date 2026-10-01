import { motion } from "framer-motion";
import { expertiseItems } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";

export function ExpertiseSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="expertise" className="py-16 md:py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedHeading
            title="expertise"
            direction="left-to-right"
            className="text-[18vw] md:text-[12vw] leading-[0.9] mb-8 md:mb-16 md:text-right"
          />
          <ol className="border-t border-accent/10">
            {expertiseItems.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative spotlight grid grid-cols-[2.25rem_1fr] md:grid-cols-[5rem_minmax(0,24rem)_1fr] gap-x-3 md:gap-x-10 gap-y-2 py-6 md:py-8 border-b border-accent/10 transition-colors duration-200 hover:bg-accent/[0.03] before:content-[''] before:absolute before:left-0 before:top-6 before:bottom-6 before:w-0.5 before:bg-signal before:origin-top before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100"
              >
                <span className="label text-signal tabular-nums pt-1.5 md:pl-4 transition-transform duration-300 group-hover:translate-x-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-3xl leading-tight text-accent transition-transform duration-200 group-hover:translate-x-2">
                  {item.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-accent/60 leading-relaxed mb-0 md:pt-1">
                  {item.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
