import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  const MotionTag = motion[tag] as any;

  return (
    <div ref={containerRef} className="overflow-hidden select-none pointer-events-none w-full">
      <MotionTag
        style={{ x }}
        className={`font-display whitespace-nowrap ${className}`}
      >
        {title}
      </MotionTag>
    </div>
  );
}
