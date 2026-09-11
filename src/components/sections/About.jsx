import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const strengths = [
  {
    title: "Angular-first, framework-fluent",
    detail:
      "Primary depth in Angular (12 through 20) with hands-on React experience, so I can move into whichever stack a project already runs on.",
  },
  {
    title: "Performance-minded",
    detail:
      "Lazy loading, OnPush change detection, and reusable component libraries are default habits, not afterthoughts — they've cut load times and dev time on past projects.",
  },
  {
    title: "Agile collaboration",
    detail:
      "Comfortable working inside Scrum teams — sprint planning, code reviews, and release cycles — alongside designers and backend engineers.",
  },
];

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
            <p>
              I'm a Senior Software Engineer with 3.8+ years in frontend
              development, specializing in Angular with secondary depth in
              React. Most of my work has been building scalable,
              high-performance web applications — from role-based dashboards
              to enterprise assessment platforms — with a strong focus on
              TypeScript, RxJS, and REST API integration.
            </p>
            <p>
              I hold a B.Tech in Electronics &amp; Communication Engineering
              from CUSAT University, and moved into frontend engineering
              early in my career. I care about responsive, maintainable UI
              and about building components other engineers can actually
              reuse.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-8"
          >
            {strengths.map((item) => (
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
