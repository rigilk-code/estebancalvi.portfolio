import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import ContentRenderer from "@/components/ContentRenderer";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, localePath } = useLanguage();
  const study = t.cases.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-medium mb-4">Case study not found</h1>
          <Link to={localePath("/")} className="text-accent text-label-large hover:underline">
            {t.caseStudyPage.backLink}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 md:px-16 lg:px-40 py-16 max-w-4xl">
        <ScrollReveal>
          <Link
            to={`${localePath("/")}#cases`}
            className="text-label-large text-muted-foreground hover:text-accent transition-colors duration-200 inline-block mb-12"
          >
            {t.caseStudyPage.backLink}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-label-large text-accent mb-2">{study.category}</p>
          <h1 className="text-display-large mb-6">{study.title}</h1>
          <p className="text-headline-small text-muted-foreground mb-8">
            {study.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-body-medium border border-foreground px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="border-t-2 border-foreground pt-12">
          <ContentRenderer blocks={study.body} />
        </div>
      </div>
    </main>
  );
};

export default CaseStudy;
