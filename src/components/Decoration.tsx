import { useEffect, useRef } from "react";

type DecorationProps = {
  /**
   * RGB triplet, e.g. "12 22 35", or the name of a CSS custom property holding one (e.g. "--c-accent"),
   * which is re-read whenever the theme changes. Alpha is controlled by `intensity`.
   */
  color?: string;
  /** Colour for the few glyphs at the crest of the cursor/sweep highlight. Same format as `color`. */
  hot?: string;
  /** Glyphs from faintest to strongest. */
  glyphs?: string;
  /** Grid cell size in CSS px. */
  cell?: number;
  /** Peak alpha of the strongest glyph. */
  intensity?: number;
  /** Where the field is densest. */
  fade?: "bottom" | "top" | "center" | "none";
  /** Animation speed multiplier. */
  speed?: number;
  className?: string;
};

const POINTER_RADIUS = 150; // px of "heat" around the cursor
const SWEEP_PERIOD = 7000; // ms for the light band to cross the field once
const SWEEP_WIDTH = 70; // px, half-width of the band

/**
 * Drifting character field drawn on a canvas. Glyphs heat up around the cursor (on devices that can hover)
 * and under a slow light sweep, so the field reads as alive on touch screens too.
 * Only animates while on screen and renders a single static frame under prefers-reduced-motion.
 */
export function Decoration({
  color = "12 22 35",
  hot = "--c-signal",
  glyphs = " .·:+*#",
  cell = 14,
  intensity = 0.4,
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
    const canHover = window.matchMedia?.("(hover: hover)").matches ?? false;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let t = Math.random() * 100;
    const start0 = performance.now() - Math.random() * SWEEP_PERIOD;

    // Pointer state, in canvas-local px; `heat` eases in and out so the highlight never pops.
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, heat: 0, inside: false };

    const resolve = (value: string) =>
      value.startsWith("--")
        ? getComputedStyle(document.documentElement).getPropertyValue(value).trim() || "0 0 0"
        : value;
    let rgb = resolve(color);
    let hotRgb = resolve(hot);

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

    const frame = (now = performance.now()) => {
      ctx.clearRect(0, 0, width, height);

      const sweepX = reduced
        ? -9999
        : (((now - start0) % SWEEP_PERIOD) / SWEEP_PERIOD) * (width + 4 * SWEEP_WIDTH) - 2 * SWEEP_WIDTH;

      for (let y = 0; y < height; y += cell) {
        const env = Math.pow(Math.max(envelope(y), 0), 1.4);
        for (let x = 0; x < width; x += cell) {
          // Two interfering waves give a cheap, organic-looking noise field.
          const n =
            Math.sin(x * 0.018 + t) * Math.cos(y * 0.027 - t * 0.7) +
            Math.sin((x + y) * 0.011 - t * 0.4) * 0.5;
          const base = ((n + 1.5) / 3) * env; // 0..1

          // Heat from the cursor and from the sweeping band (slanted so it reads as light, not a wipe).
          let boost = 0;
          if (pointer.heat > 0.01) {
            const d = Math.hypot(x - pointer.x, y - pointer.y);
            if (d < POINTER_RADIUS) boost = (1 - d / POINTER_RADIUS) ** 2 * pointer.heat;
          }
          const sd = Math.abs(x + (y - height / 2) * 0.35 - sweepX);
          if (sd < SWEEP_WIDTH * 2) boost = Math.max(boost, Math.exp(-((sd / SWEEP_WIDTH) ** 2)) * 0.55);

          const v = Math.min(1, base + boost * (0.45 + base));
          const idx = Math.floor(v * glyphs.length);
          if (idx <= 0) continue;

          const isHot = boost > 0.5 && v > 0.62 && ((x * 7 + y * 13) % 5 === 0);
          ctx.fillStyle = isHot
            ? `rgb(${hotRgb} / ${Math.min(1, v * intensity * 2.2).toFixed(2)})`
            : `rgb(${rgb} / ${(v * intensity).toFixed(3)})`;
          ctx.fillText(glyphs[Math.min(idx, glyphs.length - 1)], x, y);
        }
      }
    };

    const loop = (now: number) => {
      t += 0.01 * speed;
      // Ease the highlight toward the pointer and fade it in/out with presence.
      pointer.x += (pointer.tx - pointer.x) * 0.18;
      pointer.y += (pointer.ty - pointer.y) * 0.18;
      pointer.heat += ((pointer.inside ? 1 : 0) - pointer.heat) * 0.08;
      frame(now);
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

    const onPointerMove = (e: PointerEvent) => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const pad = POINTER_RADIUS * 0.5;
      pointer.inside = x > -pad && y > -pad && x < rect.width + pad && y < rect.height + pad;
      if (pointer.heat < 0.02) {
        // Start the ease from where the pointer entered rather than from far away.
        pointer.x = x;
        pointer.y = y;
      }
      pointer.tx = x;
      pointer.ty = y;
    };
    const onPointerLeave = () => {
      pointer.inside = false;
    };

    resize();
    frame();

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { resize(); frame(); }) : null;
    ro?.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), {
      rootMargin: "100px",
    });
    io.observe(canvas);

    if (canHover && !reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    // Theme switches flip data-theme on <html>; pick up the new colours and repaint once.
    const themeObserver =
      color.startsWith("--") || hot.startsWith("--")
        ? new MutationObserver(() => {
            rgb = resolve(color);
            hotRgb = resolve(hot);
            frame();
          })
        : null;
    themeObserver?.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      stop();
      io.disconnect();
      ro?.disconnect();
      themeObserver?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [color, hot, glyphs, cell, intensity, fade, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
