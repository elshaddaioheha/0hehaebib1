import { useRef } from "react";
import { useInView } from "framer-motion";

export function useRevealInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
}
