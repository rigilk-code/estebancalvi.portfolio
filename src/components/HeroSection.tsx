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
      <div className="relative z-10 w-full lg:absolute lg:left-8 lg:top-0 lg:bottom-0 lg:w-80 flex flex-row lg:flex-col items-center justify-center py-4 lg:py-0">
        {(() => {
          const colors = ["#F71735", "#FB5B28", "#FF9F1C", "#F6D21E"];
          const circleSize = "clamp(7rem, 22vw, 10rem)";
          const lgSize = "11rem";
          const overlap = 0.55; // fraction of circle that overlaps

          return (
            <>
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="rounded-full border-4 border-foreground flex-shrink-0"
                  style={{
                    width: circleSize,
                    height: circleSize,
                    backgroundColor: color,
                    zIndex: i,
                    marginRight: `calc(${circleSize} * -${overlap})`,
                    marginBottom: 0,
                  }}
                />
              ))}
              {/* Portrait on top */}
              <div
                className="rounded-full overflow-hidden border-4 border-foreground flex-shrink-0"
                style={{
                  width: circleSize,
                  height: circleSize,
                  zIndex: colors.length,
                }}
              >
                <img
                  src={portrait}
                  alt="Esteban Calvi"
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          );
        })()}
      </div>

      {/* Desktop: offset content to the right of the circle stripe */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 px-6 md:px-16 lg:pl-[22rem] lg:pr-40 py-4 lg:py-24">

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
