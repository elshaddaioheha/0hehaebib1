import { motion } from "framer-motion";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";
import { SectionMark } from "./SectionMark";
import { Decoration } from "./Decoration";
import {
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GoIcon,
  JavaScriptIcon,
  MongoDbIcon,
  NextIcon,
  NodeIcon,
  ReactIcon,
  RedisIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./TechIcons";

const skills = [
  { label: "TypeScript", Icon: TypeScriptIcon },
  { label: "JavaScript", Icon: JavaScriptIcon },
  { label: "React.js", Icon: ReactIcon },
  { label: "Next.js", Icon: NextIcon },
  { label: "Tailwind CSS", Icon: TailwindIcon },
  { label: "Node.js", Icon: NodeIcon },
  { label: "Express", Icon: ExpressIcon },
  { label: "React Native", Icon: ReactIcon },
  { label: "MongoDB", Icon: MongoDbIcon },
  { label: "Supabase", Icon: SupabaseIcon },
  { label: "Firebase", Icon: FirebaseIcon },
  { label: "Redis", Icon: RedisIcon },
  { label: "Docker", Icon: DockerIcon },
  { label: "Figma", Icon: FigmaIcon },
  { label: "Go (learning)", Icon: GoIcon },
] as const;

export function SkillsSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="skills" className="relative py-16 md:py-24 bg-bg-dark border-t border-accent/5 overflow-hidden">
      <Decoration
        className="absolute inset-x-0 bottom-0 h-[300px] w-full"
        color="--c-accent"
        fade="bottom"
        intensity={0.3}
        speed={0.7}
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:gap-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full overflow-hidden">
            <div className="flex-1 min-w-0">
              <SectionMark index="02" kicker="Stack" />
              <AnimatedHeading title="skills" direction="right-to-left" className="text-[18vw] md:text-[10vw] leading-[0.9]" />
            </div>
            <p className="max-w-xl text-accent/70 text-base md:text-lg mb-0">
              My everyday stack: React, Tailwind CSS and Next.js on the frontend, Node.js on the backend, React Native for mobile, and Docker to ship it. Currently learning Go, and leaning into site reliability engineering and cloud infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.045, ease: [0.22, 1, 0.36, 1] }}
                className="inside-border spotlight press group flex items-center gap-3 rounded-xl bg-surface px-3.5 py-3 font-semibold text-accent tint-hover md:rounded-2xl md:px-4"
              >
                <skill.Icon className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12" aria-hidden />
                <span className="truncate text-xs uppercase tracking-wide md:text-sm">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
