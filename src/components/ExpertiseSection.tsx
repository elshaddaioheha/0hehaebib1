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
              <li
                key={item.title}
                className="group grid grid-cols-[2.25rem_1fr] md:grid-cols-[5rem_minmax(0,24rem)_1fr] gap-x-3 md:gap-x-10 gap-y-2 py-6 md:py-8 border-b border-accent/10 transition-colors duration-200 hover:bg-accent/[0.03]"
              >
                <span className="label text-punch_red-600 tabular-nums pt-1.5 md:pl-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl md:text-3xl leading-tight text-accent transition-transform duration-200 group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-accent/60 leading-relaxed mb-0 md:pt-1">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
