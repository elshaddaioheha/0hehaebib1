import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { useRef } from "react";
import { useMorphingText } from "../hooks/useMorphingText";
import { useTypingText } from "../hooks/useTypingText";
import { Decoration } from "./Decoration";

function MorphingText({ text }: { text: string }) {
  const morphText = useMorphingText(text);
  return <>{morphText}</>;
}

function TypingText({ text }: { text: string }) {
  const displayedText = useTypingText(text);

  return (
    <span>
      {displayedText}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}

export function Hero() {
  const headerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  return (
    <header ref={headerRef} className="p-3 md:p-6 min-h-[100svh] flex flex-col">
      <div className="flex-1 accent-pattern rounded-[28px] md:rounded-[80px] relative overflow-hidden flex flex-col justify-between p-6 md:p-16">
        <div className="absolute inset-x-0 bottom-0 h-[62%] flex pointer-events-none" aria-hidden="true">
          <Decoration className="h-full w-1/2" color="12 22 35" fade="bottom" intensity={0.5} />
          <Decoration className="h-full w-1/2 -scale-x-100" color="12 22 35" fade="bottom" intensity={0.5} />
        </div>
        <div className="relative z-20 text-ink font-bold tracking-[0.22em] md:tracking-[0.5em] text-[11px] leading-relaxed md:text-sm uppercase text-center pt-2 md:pt-4 px-10 md:px-0 text-balance">
          <TypingText text="SOFTWARE ENGINEER | FULL STACK DEVELOPER | SOUND DESIGNER" />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden"
          style={{
            scale: nameScale,
            opacity: nameOpacity,
            zIndex: 5,
          }}
        >
          <h1 className="text-[18vw] font-display leading-[0.7] text-ink/5 whitespace-nowrap -translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
          <h1 className="text-[18vw] font-display leading-[0.7] text-ink whitespace-nowrap">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
          <h1 className="text-[18vw] font-display leading-[0.7] text-ink/5 whitespace-nowrap translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-[100]">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-ink/25 shadow-[0_24px_48px_-16px_rgb(12_22_35/0.55)]">
              <img
                src="/profile.png"
                alt="Oheha Ebibi, Software Engineer and Full Stack Developer"
                width={503}
                height={496}
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-12 lg:bottom-16 z-20">
          <div className="flex gap-1.5 md:gap-2 justify-center">
            <a
              href="https://github.com/elshaddaioheha"
              target="_blank"
              rel="noopener noreferrer"
              className="halo halo-card w-14 h-14 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.45)] flex items-center justify-center text-ink hover:bg-ink hover:text-card press"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:elshaddaioheha@gmail.com"
              className="halo halo-card w-14 h-14 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.45)] flex items-center justify-center text-ink hover:bg-ink hover:text-card press"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://x.com/0hehaebib1"
              target="_blank"
              rel="noopener noreferrer"
              className="halo halo-card w-14 h-14 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.45)] flex items-center justify-center text-ink hover:bg-ink hover:text-card press"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/0hehaebib1"
              target="_blank"
              rel="noopener noreferrer"
              className="halo halo-card w-14 h-14 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.45)] flex items-center justify-center text-ink hover:bg-ink hover:text-card press"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
