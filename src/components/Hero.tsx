import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { useRef } from "react";
import { useMorphingText } from "../hooks/useMorphingText";
import { useTypingText } from "../hooks/useTypingText";

function MorphingText({ text }: { text: string }) {
  const morphText = useMorphingText(text);
  return <>{morphText}</>;
}

function TypingText({ text }: { text: string }) {
  const displayedText = useTypingText(text);

  return (
    <span className="inline-block border-r-2 border-bg-dark pr-1 animate-pulse">
      {displayedText}
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
    <header ref={headerRef} className="p-4 md:p-6 min-h-screen flex flex-col">
      <div className="flex-1 accent-pattern rounded-[40px] md:rounded-[80px] relative overflow-hidden flex flex-col justify-between p-8 md:p-16">
        <div className="relative z-20 text-bg-dark font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase text-center pt-2 md:pt-4">
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
          <h1 className="text-[18vw] font-display leading-[0.7] text-bg-dark/5 whitespace-nowrap -translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
          <h1 className="text-[18vw] font-display leading-[0.7] text-bg-dark whitespace-nowrap">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
          <h1 className="text-[18vw] font-display leading-[0.7] text-bg-dark/5 whitespace-nowrap translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </h1>
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-[100]">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-dark/30 shadow-2xl">
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

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 lg:bottom-16 z-20">
          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/elshaddaioheha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:elshaddaioheha@gmail.com"
              className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://x.com/0hehaebib1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com/0hehaebib1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-bg-dark flex items-center justify-center text-bg-dark hover:bg-bg-dark hover:text-accent transition-colors"
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
