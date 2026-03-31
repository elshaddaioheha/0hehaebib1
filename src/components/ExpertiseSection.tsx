import { motion } from "framer-motion";
import { expertiseItems } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";

export function ExpertiseSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="expertise" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[12vw] font-display leading-[0.8] mb-16 text-right">expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseItems.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[32px] bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-12 h-1 px-4 bg-accent/20 mb-6 group-hover:w-20 transition-all duration-300" />
                <h3 className="text-2xl font-display text-accent mb-4">{item.title}</h3>
                <p className="text-accent/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
