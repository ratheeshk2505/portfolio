import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { profile } from "../../content";

function About() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-28">
      <Container>
        <SectionTitle
          title="About"
          subtitle="A little about how I got here and what I focus on now."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            {profile.about?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            {profile.strengths?.map((item) => (
              <div key={item.title} className="border-l border-border pl-5">
                <h3 className="text-text-primary">{item.title}</h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
