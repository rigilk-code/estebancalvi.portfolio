import { useEffect } from "react";

export const useScrollToElement = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash; // e.g., "#/home" or "#/#home"
      
      // Extract the section name from various hash formats
      let sectionName = "";
      if (hash.includes("/#")) {
        // Handle "#/#home" format
        sectionName = hash.split("/#").pop() || "";
      } else if (hash.startsWith("#/")) {
        // Handle "#/home" format
        sectionName = hash.slice(2);
      } else if (hash.startsWith("#")) {
        // Handle "#home" format
        sectionName = hash.slice(1);
      }

      if (!sectionName) return;

      // Use setTimeout to ensure DOM has updated before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionName);
        if (element) {
          // Get the header height
          const headerHeight = 100; // Adjust if needed
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 0);

      return () => clearTimeout(timer);
    };

    // Handle initial hash on page load
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
};
