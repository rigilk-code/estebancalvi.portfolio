import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, switchLang, localePath } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.caseStudies, href: "#cases" },
    { label: t.nav.resume, href: "#resume" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground transition-all duration-500 ease-out"
    >
      <div
        className="flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out"
        style={{ paddingTop: scrolled ? '1rem' : '2.5rem', paddingBottom: scrolled ? '1rem' : '2.5rem' }}
      >
        <a href={localePath("/")} className="flex items-center gap-2">
          <span className="w-[0.7em] h-[0.7em] rounded-full bg-foreground inline-block" style={{ fontSize: '0.875rem' }} />
          <span className="text-label-large text-accent">Esteban Calvi</span>
        </a>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-label-large text-foreground pb-0 transition-none"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1.5 h-[2px] w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}

          <span className="w-[2px] h-5 bg-foreground/30" />

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-label-large">
            <button
              onClick={() => switchLang("en")}
              className={`transition-colors duration-200 ${lang === "en" ? "text-accent" : "text-foreground/50 hover:text-foreground"}`}
            >
              EN
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => switchLang("es")}
              className={`transition-colors duration-200 ${lang === "es" ? "text-accent" : "text-foreground/50 hover:text-foreground"}`}
            >
              ES
            </button>
          </div>

          {/* GitHub link */}
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
      {open && (
        <nav className="md:hidden border-t-2 border-foreground bg-background px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-label-large text-foreground hover:text-accent transition-none"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-foreground/20">
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
      )}
    </header>
  );
};

export default Header;
