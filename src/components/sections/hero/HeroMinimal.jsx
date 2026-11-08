import { motion } from "framer-motion";
import Container from "../../common/Container";
import Button from "../../common/Button";
import { assetUrl, profile } from "../../../content";
import { scrollTo } from "./scrollTo";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

function HeroMinimal() {
  return (
    <section
      id="home"
      className="flex min-h-[88vh] items-center border-b border-border pt-16 md:pt-20"
    >
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center md:py-28">
          {profile.photo && (
            <motion.img
              {...fadeUp(0)}
              src={assetUrl(profile.photo)}
              alt={profile.name}
              className="h-24 w-24 rounded-full border border-border object-cover md:h-28 md:w-28"
            />
          )}

          <motion.p {...fadeUp(0.1)} className="mt-8 text-sm font-medium text-accent">
            {profile.greeting}
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-3 font-display text-5xl leading-[1.02] text-text-primary sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-3 text-lg text-text-secondary md:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {profile.heroIntro}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#projects" onClick={scrollTo("projects")}>
              View my work
            </Button>
            <Button href="#contact" onClick={scrollTo("contact")} variant="secondary">
              Contact me
            </Button>
          </motion.div>

          {profile.heroDetails?.length > 0 && (
            <motion.ul
              {...fadeUp(0.5)}
              className="mt-12 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-text-secondary"
            >
              {profile.heroDetails.map((line, index) => (
                <li key={line} className="flex items-center gap-3">
                  {index > 0 && <span aria-hidden="true">·</span>}
                  {line}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </Container>
    </section>
  );
}

export default HeroMinimal;
