import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const { t, localePath } = useLanguage();
  const studies = t.cases;

  return (
    <section id="cases" className="py-24 px-6 md:px-16 lg:px-40 relative">
      <div className="absolute top-12 right-16 w-10 h-10 bg-foreground hidden md:block" />
      <div className="absolute bottom-12 left-16 w-6 h-6 bg-accent hidden md:block" />

      <ScrollReveal>
        <h2 className="text-display-medium md:text-display-large mb-16">{t.caseStudies.sectionTitle}</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studies.map((study, index) => (
          <ScrollReveal key={study.slug} delay={index * 0.1}>
            <Link to={localePath(`/case/${study.slug}`)} className="block h-full">
              <article className="border-2 border-foreground bg-secondary p-6 flex flex-col h-full group cursor-pointer hover:shadow-[6px_6px_0px_0px_hsl(var(--accent))] hover:scale-[1.02] focus:scale-[1.02] transition-all duration-200">
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
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
