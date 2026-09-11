import { ArrowUp, Mail, Phone } from "lucide-react";
import Container from "../common/Container";
import { LinkedinIcon } from "../common/BrandIcons";

const socials = [
  { label: "Email", href: "mailto:ratheeshk2505@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+918547854804", icon: Phone },
  { label: "LinkedIn", href: "https://linkedin.com/in/ratheeshk2505", icon: LinkedinIcon },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-text-primary">Ratheesh K</p>
          <p className="mt-1 text-xs text-text-secondary">
            © {new Date().getFullYear()} Ratheesh K. All rights reserved.
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
