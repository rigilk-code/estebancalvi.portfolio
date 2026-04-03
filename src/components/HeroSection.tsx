import { Link } from "react-router-dom";
import portrait from "@/assets/esteban-portrait.png";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParallax } from "@/hooks/use-parallax";

const HeroSection = () => {
  const { t, localePath } = useLanguage();
  const { ref, offset } = useParallax();

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{ backgroundColor: "#bceeb5" }}
    >
      {/* Red sidebar — hidden on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-24 bg-accent z-0 hidden md:block" />

      {/* Geometric miscellanies — hidden on mobile, parallax */}
      <div
        className="absolute top-32 right-12 w-16 h-16 bg-muted-foreground hidden md:block"
        style={{ transform: `translateY(${offset * 0.25}px)` }}
      />
      <div
        className="absolute bottom-24 right-1/4 w-8 h-8 bg-accent hidden md:block"
        style={{ transform: `translateY(${offset * -0.2}px)` }}
      />
      <div
        className="absolute top-1/2 right-8 w-[2px] h-32 bg-foreground hidden md:block"
        style={{ transform: `translateY(${offset * 0.4}px)` }}
      />
      <div
        className="absolute bottom-48 left-40 w-12 h-[2px] bg-foreground hidden lg:block"
        style={{ transform: `translateY(${offset * -0.25}px)` }}
      />
      <div
        className="absolute top-40 left-40 w-6 h-6 bg-accent hidden lg:block"
        style={{ transform: `translateY(${offset * 0.36}px)` }}
      />

      {/* Circle stripe — horizontal on mobile/tablet, vertical on desktop */}
      <style>{`
        .circle-stripe { display: flex; align-items: center; justify-content: center; }
        .circle-stripe .circle-item { flex-shrink: 0; border-radius: 9999px; border: 4px solid hsl(var(--foreground)); }
        /* Mobile/tablet: horizontal */
        @media (max-width: 1023px) {
          .circle-stripe { flex-direction: row; width: 100%; padding: 1.5rem 0; }
          .circle-stripe .circle-item { width: clamp(6rem, 20vw, 9rem); height: clamp(6rem, 20vw, 9rem); margin-right: clamp(-3.5rem, -11vw, -5rem); }
          .circle-stripe .circle-item:last-child { margin-right: 0; }
        }
        /* Desktop: vertical, full height, bottom to top */
        @media (min-width: 1024px) {
          .circle-stripe { flex-direction: column-reverse; position: absolute; left: 2rem; top: 0; bottom: 0; width: 12rem; }
          .circle-stripe .circle-item { width: 11rem; height: 11rem; margin-bottom: -4rem; }
          .circle-stripe .circle-item:first-child { margin-bottom: 0; }
        }
      `}</style>
      <div className="circle-stripe relative z-10">
        {["#F71735", "#FB5B28", "#FF9F1C", "#F6D21E"].map((color, i) => (
          <div
            key={i}
            className="circle-item"
            style={{ backgroundColor: color, zIndex: i }}
          />
        ))}
        <div
          className="circle-item overflow-hidden"
          style={{ zIndex: 4 }}
        >
          <img src={portrait} alt="Esteban Calvi" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-start gap-8 px-6 md:px-16 lg:pl-[16rem] lg:pr-40 py-4 lg:py-24">

        {/* Typographic play */}
        <ScrollReveal className="max-w-2xl" delay={0.15}>
          <p className="text-label-large text-accent mb-4">{t.hero.label}</p>
          <h1 className="text-display-large md:text-display-xlarge mb-8 leading-tight">
            {t.hero.heading1} <br /><span className="text-accent">{t.hero.heading2}</span>,
          </h1>
          <div className="w-24 h-[3px] bg-foreground mb-8" />
          <div className="space-y-4 text-body-large leading-relaxed">
            <p>{t.hero.description}</p>
          </div>
          <Link
            to={localePath("/about")}
            className="inline-block mt-6 border-2 border-foreground bg-accent text-accent-foreground px-6 py-3 text-label-large hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:scale-[1.02] focus:scale-[1.02] transition-all duration-200"
          >
            {t.hero.cta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
