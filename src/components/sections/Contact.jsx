import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { LinkedinIcon } from "../common/BrandIcons";

const contactLinks = [
  { label: "ratheeshk2505@gmail.com", href: "mailto:ratheeshk2505@gmail.com", icon: Mail },
  { label: "8547854804", href: "tel:+918547854804", icon: Phone },
  { label: "linkedin.com/in/ratheeshk2505", href: "https://linkedin.com/in/ratheeshk2505", icon: LinkedinIcon },
  { label: "Kottayam, Kerala", href: undefined, icon: MapPin },
];

const inputClasses =
  "w-full border-b border-border bg-transparent py-2 text-text-primary placeholder:text-text-secondary focus-visible:border-accent focus-visible:outline-none";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ratheeshk2505@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionTitle
          title="Let's talk"
          subtitle="Open to new roles and interesting problems. The fastest way to reach me is email."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            {contactLinks.map(({ label, href, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 text-text-secondary transition-colors duration-200 hover:text-accent"
                >
                  <Icon size={17} strokeWidth={1.75} />
                  <span>{label}</span>
                </a>
              ) : (
                <div key={label} className="flex items-center gap-3 text-text-secondary">
                  <Icon size={17} strokeWidth={1.75} />
                  <span>{label}</span>
                </div>
              )
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="What are you working on?"
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </div>
            <Button as="button" type="submit">
              Send message
            </Button>
            {sent && (
              <p className="text-sm text-text-secondary" role="status">
                Opening your email client to send this along.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
