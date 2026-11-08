import { activeTemplate } from "../../templates";

function SectionTitle({ title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-xl ${alignment} mb-12 md:mb-16`}>
      <h2 className="font-display text-3xl md:text-4xl text-text-primary">
        {activeTemplate.id === "terminal" && (
          <span className="mr-3 text-accent" aria-hidden="true">
            #
          </span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;
