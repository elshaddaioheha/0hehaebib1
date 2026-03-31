import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Twitter } from "lucide-react";
import { useRevealInView } from "../hooks/useRevealInView";

export function ContactSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="contact" className="py-24 bg-bg-dark">
      <div className="container">
        <motion.div
          className="accent-pattern rounded-[40px] md:rounded-[80px] p-12 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-[12vw] md:text-[8vw] font-display leading-[0.8] text-bg-dark mb-8 md:mb-0">
                hire me
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-bg-dark text-xl md:text-2xl font-medium leading-[1.4] mb-8">
                  I am currently available for new opportunities. Let&apos;s build the next generation
                  of digital infrastructure together.
                </p>
                <div className="flex flex-col gap-8">
                  <a
                    href="mailto:elshaddaioheha@gmail.com"
                    className="group flex items-center gap-4 text-bg-dark font-bold text-2xl md:text-4xl hover:opacity-70 transition-opacity break-all"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-bg-dark flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    elshaddaioheha@gmail.com
                  </a>
                  <div className="flex flex-wrap gap-6 mt-4">
                    <a
                      href="https://github.com/elshaddaioheha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <Github size={28} />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/ojeka-ebibi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <ArrowUpRight size={28} />
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/0hehaebib1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <Twitter size={28} />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-bg-dark/20 bg-bg-dark">
                  <img src="/profile.png" alt="Elshaddai Oheha" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
