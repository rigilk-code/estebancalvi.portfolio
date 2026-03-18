import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Case Studies", href: "#cases" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground transition-all duration-500 ease-out"
      style={{ padding: scrolled ? undefined : undefined }}
    >
      <div
        className="flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out"
        style={{ paddingTop: scrolled ? '1rem' : '2.5rem', paddingBottom: scrolled ? '1rem' : '2.5rem' }}
      >
        <a href="#home" className="flex items-center gap-2">
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
        </nav>
      )}
    </header>
  );
};

export default Header;
