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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
        <div className="md:col-span-1 label tabular-nums opacity-70 md:pt-2">{project.year}</div>
        <div className="md:col-span-8 flex flex-col gap-4">
          <div>
            <div className="overflow-hidden mb-3 -mx-1 px-1">
              <AnimatedHeading
                title={project.title}
                direction={isBlue ? "left-to-right" : "right-to-left"}
                tag="h4"
                className={`text-[2rem] leading-[1] md:text-5xl group-hover:translate-x-1 transition-transform duration-200 whitespace-normal ${
                  isBlue ? "text-bg-dark" : "text-accent"
                }`}
              />
            </div>
            <p className="text-[0.9375rem] md:text-base opacity-75 leading-relaxed max-w-2xl mb-0">{project.desc}</p>
          </div>

          {project.techStack?.length ? (
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`label px-2.5 py-1.5 rounded-md ${
                    isBlue
                      ? "bg-bg-dark/[0.08] text-bg-dark"
                      : "inside-border bg-accent/5 text-accent"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {project.achievements?.length ? (
            <ul className={`marker-list text-sm md:text-[0.9375rem] leading-relaxed ${
              isBlue ? "text-bg-dark/85" : "text-accent/70"
            }`}>
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {project.media ? (
            <div className={`mt-2 md:mt-4 rounded-2xl md:rounded-3xl overflow-hidden border bg-black/5 ${
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
        <div className="md:col-span-3 grid grid-cols-2 md:flex md:flex-col md:items-end gap-2 md:gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-pill px-3 md:px-7 text-xs md:text-[0.8125rem] w-full md:w-auto justify-center ${
              isBlue
                ? "btn-solid bg-bg-dark text-accent border-bg-dark"
                : "text-accent border-accent/30 hover:border-accent"
            }`}
          >
            View Live <ArrowUpRight size={16} />
          </a>
          <a
            href={project.repo ?? "#"}
            target={project.repo ? "_blank" : undefined}
            rel={project.repo ? "noopener noreferrer" : undefined}
            className={`btn-pill px-3 md:px-7 text-xs md:text-[0.8125rem] w-full md:w-auto justify-center gap-2 ${
              project.repo
                ? isBlue
                  ? "text-bg-dark border-bg-dark/30 hover:bg-bg-dark hover:text-accent"
                  : "text-accent border-accent/30 hover:border-accent"
                : "text-accent/40 border-accent/10 cursor-not-allowed"
            }`}
            aria-disabled={!project.repo}
          >
            <Github size={16} /> {project.repo ? "GitHub" : "GitHub (soon)"}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className={`nudge press label col-span-2 min-h-[44px] flex items-center justify-center md:justify-end gap-2 ${
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
