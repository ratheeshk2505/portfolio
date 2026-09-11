import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SkillBadge from "../cards/SkillBadge";
import skills from "../../data/skills";

const badgeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function Skills() {
  return (
    <section id="skills" className="relative border-b border-border py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="The tools and technologies I reach for most."
        />

        <div className="grid gap-10 sm:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3 className="font-display text-lg text-text-primary">
                {group.category}
              </h3>
              <motion.div
                variants={badgeContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.div key={item} variants={badgeItem} transition={{ duration: 0.35 }}>
                    <SkillBadge label={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
