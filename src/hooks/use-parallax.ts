import { useEffect, useRef, useState } from "react";

export function useParallax() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      // Only compute when section is in view
      if (rect.bottom > 0 && rect.top < windowH) {
        // Normalized: 0 when section enters bottom, 1 when it leaves top
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * rect.height);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, offset };
}
