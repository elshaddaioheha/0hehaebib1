import { useEffect, useRef } from "react";

type DecorationProps = {
  /** RGB triplet, e.g. "28 27 33". Alpha is controlled by `intensity`. */
  color?: string;
  /** Glyphs from faintest to strongest. */
  glyphs?: string;
  /** Grid cell size in CSS px. */
  cell?: number;
  /** Peak alpha of the strongest glyph. Keep it low: this is texture, not content. */
  intensity?: number;
  /** Where the field is densest. */
  fade?: "bottom" | "top" | "center" | "none";
  /** Animation speed multiplier. */
  speed?: number;
  className?: string;
};

/**
 * Sparse, slowly drifting character field drawn on a canvas.
 * Only animates while on screen and renders a single static frame under prefers-reduced-motion.
 */
export function Decoration({
  color = "12 22 35",
  glyphs = " .·:+*#",
  cell = 14,
  intensity = 0.22,
  fade = "bottom",
  speed = 1,
  className = "",
}: DecorationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext?.("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let t = Math.random() * 100;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${cell - 2}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";
    };

    const envelope = (y: number) => {
      const v = y / Math.max(height, 1);
      if (fade === "bottom") return v;
      if (fade === "top") return 1 - v;
      if (fade === "center") return 1 - Math.abs(v - 0.5) * 2;
      return 1;
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < height; y += cell) {
        const env = envelope(y);
        if (env <= 0.05) continue;
        for (let x = 0; x < width; x += cell) {
          // Two interfering waves give a cheap, organic-looking noise field.
          const n =
            Math.sin(x * 0.018 + t) * Math.cos(y * 0.027 - t * 0.7) +
            Math.sin((x + y) * 0.011 - t * 0.4) * 0.5;
          const v = ((n + 1.5) / 3) * env * env; // 0..1, biased to the dense edge
          const idx = Math.floor(v * glyphs.length);
          if (idx <= 0) continue;
          ctx.fillStyle = `rgb(${color} / ${(v * intensity).toFixed(3)})`;
          ctx.fillText(glyphs[Math.min(idx, glyphs.length - 1)], x, y);
        }
      }
    };

    const loop = () => {
      t += 0.006 * speed;
      frame();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    frame();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { resize(); frame(); }) : null;
    ro?.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), {
      rootMargin: "100px",
    });
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro?.disconnect();
    };
  }, [color, glyphs, cell, intensity, fade, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
