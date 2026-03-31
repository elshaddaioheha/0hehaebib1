import { motion } from "framer-motion";
import {
  Boxes,
  CloudCog,
  Code2,
  Cpu,
  Database,
  GitBranch,
  HardDrive,
  Hexagon,
  Layers,
  Network,
  ShieldCheck,
  Server,
} from "lucide-react";
import { useRevealInView } from "../hooks/useRevealInView";

const skills = [
  { label: "MERN", Icon: Layers },
  { label: "Next.js", Icon: Hexagon },
  { label: "Hedera", Icon: Network },
  { label: "Solana", Icon: GitBranch },
  { label: "Rust", Icon: Cpu },
  { label: "Docker", Icon: Server },
  { label: "PostgreSQL", Icon: Database },
  { label: "Solidity", Icon: ShieldCheck },
  { label: "Kubernetes", Icon: Boxes },
  { label: "Express", Icon: CloudCog },
  { label: "Python", Icon: HardDrive },
  { label: "JavaScript", Icon: Code2 },
] as const;

export function SkillsSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();

  return (
    <section ref={ref} id="skills" className="py-24 bg-bg-dark border-t border-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h2 className="text-[12vw] md:text-[10vw] font-display leading-[0.8]">skills</h2>
            <p className="max-w-xl text-accent/70 text-base md:text-lg">
              Tooling across Web2 and Web3 delivery: performant frontends, secure smart contracts, and
              production-grade infra.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-accent/15 bg-accent/5 text-accent font-semibold"
              >
                <skill.Icon className="w-5 h-5" aria-hidden />
                <span className="text-sm uppercase tracking-wide">{skill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
