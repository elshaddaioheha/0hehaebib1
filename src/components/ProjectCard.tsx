import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import type { ProjectItem } from "../types";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className={`work-item ${project.featured ? "featured" : ""} group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: project.featured ? 1.01 : 1.005 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-1 text-lg font-bold opacity-60">{project.year}</div>
        <div className="md:col-span-8 flex flex-col gap-4">
          <div>
            <h4 className="text-3xl md:text-5xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h4>
            <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-2xl">{project.desc}</p>
          </div>

          {project.techStack?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-md text-[10px] font-bold uppercase tracking-wider text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          {project.achievements?.length ? (
            <ul className="list-disc list-inside text-accent/70 text-sm space-y-2">
              {project.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {project.media ? (
            <div className="mt-4 rounded-3xl overflow-hidden border border-accent/15 bg-black/5">
              <img src={project.media.src} alt={project.media.alt} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </div>
        <div className="md:col-span-3 flex flex-col items-end gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-pill w-full md:w-auto justify-center ${
              project.featured
                ? "bg-bg-dark text-accent border-bg-dark"
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
                ? "text-accent border-accent/30 hover:border-accent"
                : "text-accent/40 border-accent/10 cursor-not-allowed"
            }`}
            aria-disabled={!project.repo}
          >
            <Github size={18} /> {project.repo ? "View GitHub" : "GitHub (soon)"}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
            >
              Watch Video Demo <ArrowRight size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
