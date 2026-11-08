import { motion } from "framer-motion";
import Container from "../../common/Container";
import Button from "../../common/Button";
import { assetUrl, profile, skills } from "../../../content";
import { scrollTo } from "./scrollTo";

// A small "profile.json" shown in the code window, built from the content files.
function codeLines() {
  const stack = skills
    .flatMap((group) => group.items)
    .slice(0, 6)
    .map((item) => `"${item}"`);
  return [
    { key: "name", value: `"${profile.name}"` },
    { key: "role", value: `"${profile.role}"` },
    profile.location && { key: "location", value: `"${profile.location}"` },
    { key: "stack", value: `[${stack.join(", ")}]` },
    { key: "openToWork", value: "true" },
  ].filter(Boolean);
}

function HeroTerminal() {
  const lines = codeLines();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center border-b border-border pt-16 md:pt-20"
    >
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="font-mono text-sm text-text-secondary">
              <span className="text-accent">~/portfolio</span> $ whoami
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-text-primary sm:text-5xl md:text-6xl">
              {profile.name}
              <span className="caret" aria-hidden="true" />
            </h1>
            <p className="mt-3 font-mono text-sm text-accent">
              {"// "}
              {profile.role}
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
              {profile.heroIntro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects" onClick={scrollTo("projects")}>
                ./view-work
              </Button>
              <Button href="#contact" onClick={scrollTo("contact")} variant="secondary">
                ./contact
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center gap-2 border-b border-border bg-surface-alt px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-3 font-mono text-xs text-text-secondary">profile.json</span>
            </div>

            <div className="flex gap-5 p-5 md:p-6">
              {profile.photo && (
                <img
                  src={assetUrl(profile.photo)}
                  alt={profile.name}
                  className="hidden h-20 w-20 flex-shrink-0 rounded-md border border-border object-cover sm:block"
                />
              )}
              <pre className="min-w-0 whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-text-secondary">
                <code>
                  {"{\n"}
                  {lines.map((line, index) => (
                    <span key={line.key}>
                      {"  "}
                      <span className="text-accent">"{line.key}"</span>
                      {": "}
                      <span className="text-text-primary">{line.value}</span>
                      {index < lines.length - 1 ? ",\n" : "\n"}
                    </span>
                  ))}
                  {"}"}
                </code>
              </pre>
            </div>

            {profile.heroDetails?.length > 0 && (
              <div className="border-t border-border px-5 py-3 font-mono text-xs text-text-secondary md:px-6">
                {profile.heroDetails.map((line) => (
                  <p key={line}>
                    <span className="text-accent">$</span> {line}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroTerminal;
