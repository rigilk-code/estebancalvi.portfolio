import { Link } from "react-router-dom";
import portrait from "@/assets/esteban-portrait.png";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Red sidebar — hidden on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-accent z-0 hidden md:block" />

      {/* Geometric miscellanies — hidden on mobile */}
      <div className="absolute top-32 right-12 w-16 h-16 bg-foreground hidden md:block" />
      <div className="absolute bottom-24 right-1/4 w-8 h-8 bg-accent hidden md:block" />
      <div className="absolute top-1/2 right-8 w-[2px] h-32 bg-foreground hidden md:block" />
      <div className="absolute bottom-48 left-40 w-12 h-[2px] bg-foreground hidden lg:block" />
      <div className="absolute top-40 left-40 w-6 h-6 bg-accent hidden lg:block" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 px-6 md:px-16 lg:px-40 py-16 lg:py-24">
        {/* Portrait */}
        <ScrollReveal className="flex-shrink-0 md:ml-8 lg:ml-0">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--accent))]">
            <img
              src={portrait}
              alt="Esteban Calvi"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Typographic play */}
        <ScrollReveal className="max-w-2xl" delay={0.15}>
          <p className="text-label-large text-accent mb-4">Portfolio</p>
          <h1 className="text-display-medium md:text-display-large mb-8 leading-tight">
            My name is{" "}
            <span className="text-accent">Esteban Calvi</span>, I'm a Sr.
            Senior Product Designer and UI Architect with 10+ years of
            experience building scalable digital products.
          </h1>
          <div className="w-24 h-[3px] bg-foreground mb-8" />
          <div className="space-y-4 text-body-large leading-relaxed">
            <p>
              Background in Graphic Design (University of Buenos Aires) with
              deep expertise in UI architecture, design systems, and frontend
              development.
            </p>
            <p>
              Specialized in fintech and enterprise environments, working across
              design and engineering to deliver robust, accessible, and visually
              refined interfaces.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-6 border-2 border-foreground bg-accent text-accent-foreground px-6 py-3 text-label-large hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200"
          >
            Read full presentation letter →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
