const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-text-primary text-background hover:bg-accent hover:text-background",
  secondary:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
  ghost: "text-text-secondary hover:text-accent",
};

function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  onClick,
  className = "",
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (as === "a" || href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
