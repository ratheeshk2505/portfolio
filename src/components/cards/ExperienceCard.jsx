import { motion } from "framer-motion";

function ExperienceCard({ role, company, duration, location, description, achievements }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8"
    >
      <div className="font-mono text-xs text-text-secondary md:pt-1">
        {duration}
      </div>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative border-l border-border pl-6 pb-10 md:pb-12"
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-accent"
          style={{ boxShadow: "0 0 0 4px var(--accent-soft)" }}
        />
        <h3 className="font-display text-xl text-text-primary">
          {role}
          <span className="text-text-secondary"> · {company}</span>
        </h3>
        <p className="mt-1 font-mono text-xs text-text-secondary">{location}</p>
        <p className="mt-4 text-text-secondary leading-relaxed">{description}</p>
        {achievements?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {achievements.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-sm text-text-secondary leading-relaxed"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ExperienceCard;
