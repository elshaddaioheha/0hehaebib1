import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import type { ProjectItem } from "../types";
import { AnimatedHeading } from "./AnimatedHeading";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Alternate blue contrast (even index) and black contrast (odd index)
  const isBlue = index % 2 === 0;

  return (
    <motion.div
      className={`work-item ${isBlue ? "featured" : ""} group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: isBlue ? 1.01 : 1.005 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-1 text-lg font-bold opacity-60">{project.year}</div>
        <div className="md:col-span-8 flex flex-col gap-4">
          <div>
            <div className="overflow-hidden mb-3">
              <AnimatedHeading
                title={project.title}
                direction={isBlue ? "left-to-right" : "right-to-left"}
                tag="h4"
                className={`text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-300 whitespace-normal ${
                  isBlue ? "text-bg-dark" : "text-accent"
                }`}
              />
            </div>
            <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-2xl">{project.desc}</p>
          </div>

          {project.techStack?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    isBlue
                      ? "bg-bg-dark/10 border border-bg-dark/20 text-bg-dark"
                      : "bg-accent/5 border border-accent/20 text-accent"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {project.achievements?.length ? (
            <ul className={`list-disc list-inside text-sm space-y-2 ${
              isBlue ? "text-bg-dark/80" : "text-accent/70"
            }`}>
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {project.media ? (
            <div className={`mt-4 rounded-3xl overflow-hidden border bg-black/5 ${
              isBlue ? "border-bg-dark/10" : "border-accent/15"
            }`}>
              <img
                src={project.media.src}
                alt={project.media.alt}
                width={project.media.width}
                height={project.media.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}
        </div>
        <div className="md:col-span-3 flex flex-col items-end gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-pill w-full md:w-auto justify-center ${
              isBlue
                ? "bg-bg-dark text-accent border-bg-dark hover:bg-bg-dark/90"
                : "text-accent border-accent/30 hover:border-accent"
            }`}
          >
            View Live <ArrowUpRight size={18} />
          </a>
          <a
            href={project.repo ?? "#"}
            target={project.repo ? "_blank" : undefined}
            rel={project.repo ? "noopener noreferrer" : undefined}
            className={`btn-pill w-full md:w-auto justify-center gap-2 ${
              project.repo
                ? isBlue
                  ? "text-bg-dark border-bg-dark/30 hover:bg-bg-dark hover:text-accent"
                  : "text-accent border-accent/30 hover:border-accent"
                : "text-accent/40 border-accent/10 cursor-not-allowed"
            }`}
            aria-disabled={!project.repo}
          >
            <Github size={18} /> {project.repo ? "View GitHub" : "GitHub (soon)"}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 ${
                isBlue ? "text-bg-dark/60 hover:text-bg-dark" : "opacity-40 hover:opacity-100"
              }`}
            >
              Watch Video Demo <ArrowRight size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
