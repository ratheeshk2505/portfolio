import { ArrowUp, Mail } from "lucide-react";
import Container from "../common/Container";
import { GithubIcon, LinkedinIcon } from "../common/BrandIcons";
import { profile } from "../../content";

const socials = [
  profile.email && { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  profile.linkedin && { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  profile.github && { label: "GitHub", href: profile.github, icon: GithubIcon },
].filter(Boolean);

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-text-primary">{profile.name}</p>
          <p className="mt-1 text-xs text-text-secondary">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="text-text-secondary transition-colors duration-200 hover:text-accent"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <ArrowUp size={16} strokeWidth={1.75} />
        </button>
      </Container>
    </footer>
  );
}

export default Footer;
