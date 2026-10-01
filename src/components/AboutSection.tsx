import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";

export function AboutSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-bg-dark overflow-hidden">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="md:w-1/3">
            <AnimatedHeading title="about" direction="left-to-right" className="text-[18vw] md:text-[12vw] leading-[0.9]" />
            <div className="mt-4 md:mt-8 label text-accent/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
              <span>Nigeria / Remote</span>
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-6 md:gap-8 md:pl-20">
            <p className="text-2xl md:text-3xl text-fg leading-[1.25] font-medium max-w-[55ch] mb-0">
              I engineer <span className="text-highlight">scalable JavaScript architectures</span> and{" "}
              <span className="text-highlight">blockchain integrations</span>.
            </p>
            <p className="text-base md:text-lg text-fg/75 leading-relaxed max-w-[60ch] mb-0">
              I specialize in building robust, high-performance ecosystems using React, Node.js, and
              Express. Beyond standard web development, I have worked on blockchain development, specifically
              integrating the Hedera Hashgraph SDK to build secure, decentralized applications.
            </p>
            <p className="text-base md:text-lg text-fg/75 leading-relaxed max-w-[60ch] mb-0">
              My background in data analytics (Google and Telus AI) drives a commitment to data integrity and
              system optimization. This analytical mindset balances my work as a sound designer.
            </p>
            <p className="text-base md:text-lg text-fg/75 leading-relaxed max-w-[60ch] mb-0">
              A proactive engineer grounded in rigorous CS fundamentals from Harvard CS50, I continue evolving
              through open source contributions and real-world product delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <h4 className="label text-muted mb-3">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inside-border label px-2.5 py-1.5 bg-accent/5 rounded-md text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
