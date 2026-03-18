import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 md:px-16 lg:px-40 py-16 max-w-4xl">
        <ScrollReveal>
          <Link
            to="/"
            className="text-label-large text-muted-foreground hover:text-accent transition-colors duration-200 inline-block mb-12"
          >
            ← Back home
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-label-large text-accent mb-2">About</p>
          <h1 className="text-display-large mb-8">My name is <span className="text-accent">Esteban Calvi</span></h1>
        </ScrollReveal>

        <div className="border-t-2 border-foreground pt-12 space-y-6">
          <ScrollReveal>
            <p className="text-body-large leading-relaxed font-semibold">
              I'm a Sr. Product Designer and UX Engineer with 10+ years of experience building scalable digital
              products.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="text-body-large leading-relaxed">
              Background in Graphic Design (University of Buenos Aires) with
              deep expertise in UI architecture, design systems, and frontend
              development.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-body-large leading-relaxed">
              Specialized in fintech and enterprise environments, working across
              design and engineering to deliver robust, accessible, and visually
              refined interfaces. Strong focus on component libraries, animated
              micro-interactions, and developer-friendly UI systems. Experienced
              collaborating with cross-functional teams and leveraging modern
              tooling, including AI-assisted development workflows.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-body-large leading-relaxed">
              In parallel to my engineering work, I'm an active and published
              comic book artist. This background informs my approach to visual
              composition, storytelling, and detail-oriented UI design.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
};

export default About;
