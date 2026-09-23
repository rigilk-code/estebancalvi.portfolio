import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToElement = () => {
  const { hash, key } = useLocation();
  useEffect(() => {
    const id = hash.replace(/^#\/?/, "");
    if (!id) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }, 0);
    return () => clearTimeout(timer);
  }, [hash, key]);
};
