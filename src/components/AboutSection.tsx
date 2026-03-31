import { motion } from "framer-motion";
import { coreSkills, web3Skills } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";

export function AboutSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-24 bg-bg-dark overflow-hidden">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="md:w-1/3">
            <h2 className="text-[12vw] font-display leading-[0.8] mb-12 md:mb-0">about</h2>
            <div className="mt-8 text-accent/60 font-bold uppercase tracking-widest text-sm flex flex-col gap-2">
              <span>Jos, Plateau, Nigeria</span>
              <span>+234 703 660 5065</span>
            </div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-8 md:pl-20">
            <p className="text-xl md:text-3xl text-white leading-[1.3] font-medium max-w-[55ch]">
              I engineer <span className="text-accent">scalable MERN architectures</span> and{" "}
              <span className="text-accent">decentralized Web3 solutions</span>.
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-[60ch]">
              I specialize in building robust, high-performance ecosystems using MongoDB, Express, React,
              and Node.js. Beyond standard web development, I bridge the gap between Web2 and Web3 by
              architecting trustless financial systems using Solidity and Hedera Hashgraph.
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-[60ch]">
              My background in data analytics (Google and Telus AI) drives a commitment to data integrity and
              system optimization. This analytical mindset balances my work as a sound designer.
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-[60ch]">
              A proactive engineer grounded in rigorous CS fundamentals from Harvard CS50, I continue evolving
              through open source contributions and real-world product delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Core Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-md text-[10px] font-bold uppercase tracking-wider text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                  Web3 & Specialized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {web3Skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-md text-[10px] font-bold uppercase tracking-wider text-accent/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
