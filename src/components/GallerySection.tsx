import { motion } from "framer-motion";
import { galleryItems } from "../data/portfolioData";
import { useRevealInView } from "../hooks/useRevealInView";

export function GallerySection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="gallery" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-[400px]">
            <p className="text-accent/60 font-medium leading-[1.6] mb-4 md:mb-0">
              Driving digital innovation for non-profits and biotech startups. A glimpse into the
              architecture and execution of high-impact digital products.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <h2 className="text-[12vw] md:text-[10vw] font-display leading-[0.8] text-left md:text-right mb-4 md:mb-0">
              gallery
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {galleryItems.map((item) => (
            <div
              key={item.name}
              className="group aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border border-accent/10 relative gallery-mockup"
            >
              <img src={item.src} className="gallery-img" alt={item.alt} />
              <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-accent font-display text-2xl">{item.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
