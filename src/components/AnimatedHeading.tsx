import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

  // Slide left-to-right or right-to-left based on scroll progress
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left-to-right" ? [-60, 60] : [60, -60] // slightly smaller range for subheadings
  );

  // motion[tag] is a union of motion components; all accept the style/className we pass
  const MotionTag = motion[tag] as typeof motion.h2;

  return (
    <div ref={containerRef} className="overflow-hidden select-none pointer-events-none w-full">
      <MotionTag
        style={isMobile ? {} : { x }}
        className={`font-display ${className.includes("whitespace-") ? "" : "whitespace-nowrap"} ${className}`}
      >
        {title}
      </MotionTag>
    </div>
  );
}
