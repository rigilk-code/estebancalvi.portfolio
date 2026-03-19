import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ResumeSection = () => {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <section id="resume" className="py-24 px-6 md:px-16 lg:px-40 bg-secondary relative">
      {/* Geometric miscellanies — desktop only */}
      <div className="absolute top-8 left-8 w-12 h-[2px] bg-accent hidden md:block" />
      <div className="absolute top-8 left-8 w-[2px] h-12 bg-accent hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 bg-foreground hidden md:block" />

      <ScrollReveal>
        <h2 className="text-display-medium md:text-display-large mb-16">{r.sectionTitle}</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Experience column */}
        <div className="lg:col-span-2">
          <h3 className="text-headline-small mb-8 pb-4 border-b-2 border-foreground">
            {r.workExperience}
          </h3>
          <div className="space-y-10">
            {r.experience.map((job, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h4 className="text-title-large">{job.role}</h4>
                  <span className="text-body-medium text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-title-medium text-accent mb-3">
                  {job.company}
                </p>
                <ul className="space-y-2 mb-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-body-medium flex gap-2">
                      <span className="text-accent mt-1 flex-shrink-0">■</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="text-body-medium text-muted-foreground">
                  <span className="font-semibold">Tech:</span> {job.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-headline-small mb-6 pb-4 border-b-2 border-foreground">
              {r.education}
            </h3>
            <p className="text-title-large mb-1">{r.educationData.degree}</p>
            <p className="text-body-large">{r.educationData.institution}</p>
            <p className="text-body-medium text-muted-foreground">{r.educationData.period}</p>
          </div>

          <div>
            <h3 className="text-headline-small mb-6 pb-4 border-b-2 border-foreground">
              {r.languages}
            </h3>
            <div className="space-y-2">
              {r.languagesData.map((l) => (
                <div key={l.name} className="flex justify-between text-body-large">
                  <span>{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-headline-small mb-6 pb-4 border-b-2 border-foreground">
              {r.coreSkills}
            </h3>
            <div className="flex flex-wrap gap-2">
              {r.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-body-medium border border-foreground px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollReveal>
        <div className="mt-16 pt-8 border-t-2 border-foreground">
          <a
            href="/Esteban-Calvi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-foreground bg-accent text-accent-foreground px-6 py-3 text-label-large hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:scale-[1.02] focus:scale-[1.02] transition-all duration-200"
          >
            {r.downloadResume}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ResumeSection;
