import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/site";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";

/** Answers to what prospective clients ask before getting in touch. Mirrored as FAQPage structured data. */
export function FaqSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
            <div className="flex-1 min-w-0">
              <AnimatedHeading title="faq" direction="left-to-right" className="text-[18vw] md:text-[12vw] leading-[0.9]" />
            </div>
            <p className="max-w-[400px] text-accent/60 font-medium leading-[1.5] mb-0">
              Quick answers before we talk. For anything else, ask through the form below.
            </p>
          </div>

          <div className="border-t border-accent/10">
            {faqs.map((item, i) => (
              <details key={item.q} className="group border-b border-accent/10">
                <summary className="spotlight flex items-center gap-3 md:gap-10 py-5 md:py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden transition-colors duration-200 hover:bg-accent/[0.03]">
                  <span className="label text-signal tabular-nums w-8 md:w-12 md:pl-4 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 font-display text-xl md:text-3xl leading-tight text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="inside-border grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface text-accent shrink-0 transition-transform duration-300 ease-out group-open:rotate-45"
                  >
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="animate-fade-in pl-11 md:pl-[5.5rem] pr-4 md:pr-24 pb-6 md:pb-8 text-base md:text-lg text-accent/70 leading-relaxed max-w-4xl mb-0">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
