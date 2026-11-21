import { motion, useScroll, useSpring } from "framer-motion";

/** A single signal-red hairline that tracks how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.25 });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[10000] h-0.5 origin-left bg-signal"
      style={{ scaleX }}
    />
  );
}
