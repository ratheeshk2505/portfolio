import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import FloatingShapes from "../common/FloatingShapes";
import TiltCard from "../common/TiltCard";

function Hero() {
  const scrollTo = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-16 md:pt-20"
    >
      <FloatingShapes />

      <Container className="relative">
        <div className="grid gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-sm text-accent"
            >
              Hi, I'm
            </motion.p>
            <h1 className="mt-3 font-display text-5xl leading-[1.05] text-text-primary sm:text-6xl md:text-7xl">
              {"Ratheesh K".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.03,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
              className="mt-6 max-w-lg text-lg text-text-secondary leading-relaxed"
            >
              Senior Software Engineer with 3.8+ years in frontend
              development, specializing in Angular and React. I build
              scalable, high-performance web applications with a strong
              focus on clean architecture and usability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#projects" onClick={scrollTo("projects")}>
                View my work
              </Button>
              <Button
                href="#contact"
                onClick={scrollTo("contact")}
                variant="secondary"
              >
                Contact me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-12 font-mono text-xs text-text-secondary"
            >
              <p>Senior Software Engineer, ex-Beinex Consulting</p>
              <p className="mt-1">Based in Kottayam, Kerala</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="group relative mx-auto w-full max-w-sm md:mx-0"
          >
            <TiltCard className="group surface-3d rounded-2xl border border-border bg-surface p-2">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-xl"
                style={{
                  background:
                    "linear-gradient(160deg, var(--accent-soft) 0%, var(--surface-alt) 55%, var(--surface) 100%)",
                }}
              >
                <svg
                  viewBox="0 0 320 400"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="230" cy="120" r="140" fill="url(#heroGrad)" />
                  <g stroke="var(--border)" strokeWidth="1" opacity="0.6">
                    <path d="M0 320 C 80 260, 240 380, 320 300" fill="none" />
                    <path d="M0 260 C 100 200, 220 320, 320 240" fill="none" />
                  </g>
                  <rect
                    x="40"
                    y="60"
                    width="90"
                    height="90"
                    rx="16"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle cx="250" cy="330" r="8" fill="var(--accent)" />
                </svg>
                <div className="absolute top-[15%] left-[12.5%] w-[28%] aspect-square rounded-[10px] overflow-hidden">
                  <img
                    src="/Ratheesh-K.jpg"
                    alt="Ratheesh K"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute bottom-4 left-4 font-mono text-[11px] text-text-secondary">
                  web developer ~ 2026
                </span>
              </div>
            </TiltCard>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-border md:-bottom-6 md:-right-6"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
