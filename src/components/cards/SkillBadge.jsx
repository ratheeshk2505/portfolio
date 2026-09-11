import { motion } from "framer-motion";

function SkillBadge({ label }) {
  return (
    <motion.span
      whileHover={{ y: -3, rotate: -1, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="surface-3d inline-flex items-center rounded-sm border border-border bg-surface px-3 py-1.5 text-sm text-text-secondary transition-colors duration-200 hover:border-accent hover:text-text-primary"
    >
      {label}
    </motion.span>
  );
}

export default SkillBadge;
