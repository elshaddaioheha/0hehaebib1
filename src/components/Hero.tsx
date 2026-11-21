import { motion, useScroll, useTransform } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowUpRight, Github, Instagram, Mail, Twitter } from "lucide-react";
import { useRef } from "react";
import { useMorphingText } from "../hooks/useMorphingText";
import { site } from "../data/site";
import { useTypingText } from "../hooks/useTypingText";
import { Decoration } from "./Decoration";
import { OrbitFrame } from "./OrbitFrame";

const EASE = [0.22, 1, 0.36, 1] as const;

const socials = [
  { href: "https://github.com/elshaddaioheha", label: "GitHub", Icon: Github },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  { href: "https://x.com/0hehaebib1", label: "Twitter", Icon: Twitter },
  { href: "https://instagram.com/0hehaebib1", label: "Instagram", Icon: Instagram },
] as const;

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
          <div aria-hidden="true" className="text-[18vw] font-display leading-[0.7] text-ink/5 whitespace-nowrap -translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </div>
          {/* The scramble effect is decorative; crawlers and screen readers get the plain name and role */}
          <h1 className="text-[18vw] font-display leading-[0.7] text-ink whitespace-nowrap">
            <span className="sr-only">{`${site.name}, ${site.jobTitle}`}</span>
            <span aria-hidden="true">
              <MorphingText text="OHEHA EBIBI" />
            </span>
          </h1>
          <div aria-hidden="true" className="text-[18vw] font-display leading-[0.7] text-ink/5 whitespace-nowrap translate-y-12">
            <MorphingText text="OHEHA EBIBI" />
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[100] grid place-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              scale: { type: "spring", stiffness: 460, damping: 34, mass: 0.55 },
              opacity: { duration: 0.22, ease: EASE },
            }}
          >
          <OrbitFrame className="w-48 md:w-64 lg:w-80">
            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-ink/25 shadow-[0_24px_48px_-16px_rgb(12_22_35/0.55)] md:h-64 md:w-64 lg:h-80 lg:w-80">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Oheha Ebibi, Software Engineer and Full Stack Developer"
                  width={503}
                  height={496}
                  // React 18 only passes the lowercase attribute through to the DOM
                  {...{ fetchpriority: "high" }}
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </picture>
            </div>
          </OrbitFrame>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-12 lg:bottom-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.04, delayChildren: 0.12 } },
          }}
        >
          <motion.a
            href="#contact"
            onClick={() => track("cta_click", { location: "hero" })}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
            }}
            className="btn-pill btn-solid halo halo-card whitespace-nowrap bg-ink text-card"
          >
            Start a project <ArrowUpRight size={18} />
          </motion.a>
          <motion.div
            className="flex justify-center gap-1.5 md:gap-2"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {socials.map(({ href, label, Icon }) => {
              const external = !href.startsWith("mailto:");
              return (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                }}
                className="halo halo-card press flex h-14 w-14 items-center justify-center rounded-full bg-frosted_blue-700 text-ink shadow-[inset_0_0_0_1px_rgb(12_22_35/0.45)] hover:bg-ink hover:text-card"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
