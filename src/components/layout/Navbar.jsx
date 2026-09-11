import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-200 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="font-display text-lg text-text-primary"
          >
            Ratheesh K
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                  className={`text-sm transition-colors duration-200 ${
                    activeSection === link.id
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-text-primary"
            >
              {menuOpen ? (
                <X size={18} strokeWidth={1.75} />
              ) : (
                <Menu size={18} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <Container>
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className={`block py-3 text-sm ${
                      activeSection === link.id
                        ? "text-accent"
                        : "text-text-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;
