import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, localePath } = useLanguage();
  const a = t.about;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="px-6 md:px-16 lg:px-40 py-16 max-w-4xl">
        <ScrollReveal>
          <Link
            to={localePath("/")}
            className="text-label-large text-muted-foreground hover:text-accent transition-colors duration-200 inline-block mb-12"
          >
            {a.backLink}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-label-large text-accent mb-2">{a.label}</p>
          <h1 className="text-display-large mb-8">{a.heading1} <span className="text-accent">{a.heading2}</span></h1>
        </ScrollReveal>

        <div className="border-t-2 border-foreground pt-12 space-y-6">
          {a.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className={`text-body-large leading-relaxed ${i === 0 ? "font-semibold" : ""}`}>
                {p}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
