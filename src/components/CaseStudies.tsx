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
    <section id="cases" className="py-24 px-8 md:px-16 lg:px-40 relative">
      {/* Geometric miscellanies */}
      <div className="absolute top-12 right-16 w-10 h-10 bg-foreground hidden md:block" />
      <div className="absolute bottom-12 left-16 w-6 h-6 bg-accent hidden md:block" />

      <p className="text-label-large text-accent mb-2">Selected Work</p>
      <h2 className="text-display-small mb-16">Case Studies</h2>

      <div className="space-y-0">
        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            className="border-t-2 border-foreground py-8 group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-baseline gap-6">
                <span className="text-headline-medium text-accent font-heading">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-body-medium text-muted-foreground mb-1">
                    {study.category}
                  </p>
                  <h3 className="text-headline-small group-hover:text-accent transition-none">
                    {study.title}
                  </h3>
                </div>
              </div>
              <p className="text-body-large max-w-md md:text-right">
                {study.description}
              </p>
            </div>
            <div className="flex gap-3 mt-4 ml-16 md:ml-20">
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
        ))}
        <div className="border-t-2 border-foreground" />
      </div>
    </section>
  );
};

export default CaseStudies;
