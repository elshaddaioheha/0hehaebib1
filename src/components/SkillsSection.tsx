import { motion } from "framer-motion";
import { useRevealInView } from "../hooks/useRevealInView";
import { AnimatedHeading } from "./AnimatedHeading";
import {
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  HederaIcon,
  JavaScriptIcon,
  MongoDbIcon,
  NodeIcon,
  ReactIcon,
  SupabaseIcon,
} from "./TechIcons";

const skills = [
  { label: "JavaScript", Icon: JavaScriptIcon },
  { label: "React.js", Icon: ReactIcon },
  { label: "Figma", Icon: FigmaIcon },
  { label: "Node.js", Icon: NodeIcon },
  { label: "Express", Icon: ExpressIcon },
  { label: "Supabase", Icon: SupabaseIcon },
  { label: "Firebase", Icon: FirebaseIcon },
  { label: "MongoDB", Icon: MongoDbIcon },
  { label: "Docker", Icon: DockerIcon },
  { label: "Hedera SDK", Icon: HederaIcon },
] as const;

export function SkillsSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="skills" className="py-16 md:py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:gap-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full overflow-hidden">
            <div className="flex-1 min-w-0">
              <AnimatedHeading title="skills" direction="right-to-left" className="text-[18vw] md:text-[10vw] leading-[0.9]" />
            </div>
            <p className="max-w-xl text-accent/70 text-base md:text-lg mb-0">
              Core software engineering stack: developing scalable frontend applications, robust backend services, multi-database management, containerized deployments, and blockchain integrations.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill.label}
                className={`inside-border flex items-center gap-3 px-3.5 md:px-4 py-3 rounded-xl md:rounded-2xl bg-accent/5 text-accent font-semibold hover:bg-accent/10 transition-colors duration-200 group ${
                  isInView ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <skill.Icon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110" aria-hidden />
                <span className="text-xs md:text-sm uppercase tracking-wide truncate">{skill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
