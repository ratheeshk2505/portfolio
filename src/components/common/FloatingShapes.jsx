import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Shape({ className, style, delay = 0, floatClass = "animate-float-slow" }) {
  return (
    <div
      className={`absolute rounded-2xl border border-border ${floatClass} ${className}`}
      style={{ animationDelay: `${delay}s`, opacity: 0.6, ...style }}
    />
  );
}

function FloatingShapes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 40, damping: 20 });
  const springY = useSpring(y, { stiffness: 40, damping: 20 });
  const rotateX = useTransform(springY, [-40, 40], [8, -8]);
  const rotateY = useTransform(springX, [-40, 40], [-8, 8]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left - bounds.width / 2);
    y.set(event.clientY - bounds.top - bounds.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-container pointer-events-auto absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <Shape
          className="right-[6%] top-[14%] h-40 w-40 bg-gradient-to-br from-accent-soft to-transparent md:h-56 md:w-56"
          style={{ boxShadow: "0 30px 60px -20px rgba(168,103,42,0.35)" }}
          delay={0}
        />
        <Shape
          className="right-[24%] top-[52%] h-24 w-24 rotate-12 bg-surface md:h-32 md:w-32"
          delay={1.2}
          floatClass="animate-float-slower"
        />
        <Shape
          className="right-[2%] top-[58%] h-16 w-16 -rotate-6 border-2 border-accent bg-transparent md:h-20 md:w-20"
          style={{ opacity: 0.4 }}
          delay={0.6}
        />
        <div
          className="absolute right-[14%] top-[6%] h-2 w-2 rounded-full bg-accent md:right-[16%]"
          style={{ boxShadow: "0 0 24px 6px rgba(168,103,42,0.45)" }}
        />
      </motion.div>
    </div>
  );
}

export default FloatingShapes;
