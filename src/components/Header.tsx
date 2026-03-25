import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, switchLang, localePath } = useLanguage();

  const navItems = [
    { label: t.nav.home, hash: "home" },
    { label: t.nav.caseStudies, hash: "cases" },
    { label: t.nav.resume, hash: "resume" },
    { label: t.nav.contact, hash: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    window.location.hash = lang === "es" ? `#/es/#${hash}` : `#/#${hash}`;
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground transition-all duration-500 ease-out">
      <div
        className="flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out"
        style={{ paddingTop: scrolled ? '1rem' : '2.5rem', paddingBottom: scrolled ? '1rem' : '2.5rem' }}
      >
        <a href={localePath("/")} className="flex items-center gap-2">
          <span className="w-[0.7em] h-[0.7em] rounded-full bg-foreground inline-block" style={{ fontSize: '0.875rem' }} />
          <span className="text-label-large text-accent">Esteban Calvi</span>
        </a>
        {/* Hamburger / X with animated lines */}
        <button
          className="md:hidden text-foreground relative w-7 h-7 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-foreground rounded transition-all duration-300 ease-out ${
              open ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-foreground rounded transition-all duration-300 ease-out ${
              open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-foreground rounded transition-all duration-300 ease-out ${
              open ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          />
        </button>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="group relative text-label-large text-foreground pb-0 transition-none bg-none border-none p-0 cursor-pointer"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
          <div className="flex items-center gap-3 text-label-large px-4">
            <button
              onClick={() => switchLang("en")}
              className={`transition-colors duration-200 ${lang === "en" ? "text-accent" : "text-foreground/50 hover:text-foreground"}`}
            >
              EN
            </button>
            <span className="w-[2px] h-5 bg-foreground/30" />
            <button
              onClick={() => switchLang("es")}
              className={`transition-colors duration-200 ${lang === "es" ? "text-accent" : "text-foreground/50 hover:text-foreground"}`}
            >
              ES
            </button>
          </div>
          <a
            href="https://github.com/rigilk-code/estebancalvi.portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent transition-colors duration-200"
            aria-label="GitHub repository"
          >
            <Github size={20} />
          </a>
        </nav>
      </div>
      {/* Mobile dropdown with animated transition */}
      <div
        className={`md:hidden border-t-2 border-foreground bg-background overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <button
              key={item.hash}
              onClick={() => handleNavClick(item.hash)}
              className="text-label-large text-foreground hover:text-accent transition-all duration-200 bg-none border-none p-0 text-left w-full cursor-pointer"
              style={{
                transform: open ? "translateX(0)" : "translateX(-20px)",
                opacity: open ? 1 : 0,
                transition: `transform 300ms ease-out ${i * 60}ms, opacity 300ms ease-out ${i * 60}ms`,
              }}
            >
              {item.label}
            </button>
          ))}
          <div
            className="flex items-center gap-3 pt-2 border-t border-foreground/20"
            style={{
              transform: open ? "translateX(0)" : "translateX(-20px)",
              opacity: open ? 1 : 0,
              transition: `transform 300ms ease-out ${navItems.length * 60}ms, opacity 300ms ease-out ${navItems.length * 60}ms`,
            }}
          >
            <div className="flex items-center gap-1 text-label-large">
              <button
                onClick={() => { switchLang("en"); setOpen(false); }}
                className={lang === "en" ? "text-accent" : "text-foreground/50"}
              >
                EN
              </button>
              <span className="text-foreground/30">|</span>
              <button
                onClick={() => { switchLang("es"); setOpen(false); }}
                className={lang === "es" ? "text-accent" : "text-foreground/50"}
              >
                ES
              </button>
            </div>
            <a
              href="https://github.com/rigilk-code/estebancalvi.portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors duration-200"
              aria-label="GitHub repository"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
