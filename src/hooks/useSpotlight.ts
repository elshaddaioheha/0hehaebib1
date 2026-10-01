import { useEffect } from "react";

/**
 * Feeds the pointer position to whichever `.spotlight` surface is under it, as --mx/--my in px.
 * One delegated listener for the whole page; skipped on touch screens and under reduced motion.
 */
export function useSpotlight() {
  useEffect(() => {
    const canHover = window.matchMedia?.("(hover: hover)").matches ?? false;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (!canHover || reduced) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = (last.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      target.style.setProperty("--my", `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
}
