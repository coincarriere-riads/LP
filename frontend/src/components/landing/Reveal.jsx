import { useEffect, useRef } from "react";

/**
 * Reveal — IntersectionObserver-driven scroll reveal wrapper.
 * Adds `is-visible` once the element enters the viewport.
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, once = true, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, once]);

  return (
    <Tag ref={ref} className={`scroll-reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
