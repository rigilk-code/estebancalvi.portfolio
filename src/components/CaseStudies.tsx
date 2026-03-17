import ScrollReveal from "@/components/ScrollReveal";

const caseStudies = [
  {
    id: 1,
    title: "RecargaPay Design System",
    category: "Design Systems",
    description:
      "Led the design and implementation of a company-wide UI component library used across multiple core products, including the mobile app.",
    tags: ["React", "React Native", "TypeScript"],
  },
  {
    id: 2,
    title: "Fintech UX Overhaul",
    category: "Product Design",
    description:
      "Redesigned core financial product flows for improved usability and conversion in a fast-paced fintech environment.",
    tags: ["Figma", "React", "User Research"],
  },
  {
    id: 3,
    title: "E-Commerce UI Modernization",
    category: "Frontend Architecture",
    description:
      "Refactored and modernized a major retailer's CSS library, improving UI consistency and enabling faster deployment across projects.",
    tags: ["SCSS", "React", "PWA"],
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 px-6 md:px-16 lg:px-40 relative">
      {/* Geometric miscellanies — desktop only */}
      <div className="absolute top-12 right-16 w-10 h-10 bg-foreground hidden md:block" />
      <div className="absolute bottom-12 left-16 w-6 h-6 bg-accent hidden md:block" />

      <ScrollReveal>
        <h2 className="text-display-medium md:text-display-large mb-16">Case Studies</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.id} delay={index * 0.1}>
            <article className="border-2 border-foreground bg-secondary p-6 flex flex-col h-full group cursor-pointer hover:shadow-[6px_6px_0px_0px_hsl(var(--accent))] transition-shadow duration-200">
              <span className="text-display-small text-accent font-heading mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-label-large text-muted-foreground mb-1">
                {study.category}
              </p>
              <h3 className="text-headline-small mb-4 group-hover:text-accent transition-colors duration-200">
                {study.title}
              </h3>
              <p className="text-body-large flex-grow mb-6">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-body-medium border border-foreground px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
