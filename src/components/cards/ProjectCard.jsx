import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../common/BrandIcons";
import TiltCard from "../common/TiltCard";

function ProjectCard({ title, description, technologies, github, demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <TiltCard
        tiltAmount={6}
        whileHover={{ y: -4 }}
        className="group surface-3d flex h-full flex-col justify-between rounded-md border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent"
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl text-text-primary">{title}</h3>
            <div className="flex items-center gap-3 pt-1">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} source code on GitHub`}
                  className="text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  <GithubIcon size={17} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${title} live demo`}
                  className="text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  <ArrowUpRight size={18} strokeWidth={1.75} />
                </a>
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
        {technologies?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </TiltCard>
    </motion.div>
  );
}

export default ProjectCard;
