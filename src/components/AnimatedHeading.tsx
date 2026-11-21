import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface AnimatedHeadingProps {
  title: string;
  direction?: "left-to-right" | "right-to-left";
  className?: string;
  tag?: "h2" | "h3" | "h4" | "h5" | "span";
}

export function AnimatedHeading({
  title,
  direction = "left-to-right",
  className = "",
  tag = "h2",
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -8% 0px" });
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // A short drift. The old ±60px range pushed display words out of narrow columns.
  const x = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    direction === "left-to-right" ? [-12, 12] : [12, -12],
  );

  // motion[tag] is a union of motion components; all accept the style/className we pass
  const MotionTag = motion[tag] as typeof motion.h2;

  return (
    <div ref={containerRef} className="overflow-hidden select-none pointer-events-none w-full">
      <motion.div
        initial={{ y: "18%" }}
        animate={isInView ? { y: "0%" } : { y: "18%" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <MotionTag
          style={isMobile ? {} : { x }}
          className={`font-display ${className.includes("whitespace-") ? "" : "whitespace-nowrap"} ${className}`}
        >
          {title}
        </MotionTag>
      </motion.div>
    </div>
  );
}
