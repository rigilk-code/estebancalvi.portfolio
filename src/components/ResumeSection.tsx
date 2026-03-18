import ScrollReveal from "@/components/ScrollReveal";


const experience = [
  {
    role: "UI Developer",
    company: "RecargaPay (Brazil)",
    period: "Jul 2019 – Nov 2025",
    bullets: [
      "Led the design and implementation of a company-wide UI component library now used across multiple core products, including the mobile app.",
      "Collaborated closely with product, design, and engineering teams to standardize interaction patterns and improve development velocity.",
      "Contributed to scalable frontend architecture supporting React and React Native platforms.",
    ],
    tech: "TypeScript, React, React Native, Node.js, Android, iOS",
  },
  {
    role: "UX Lead / Frontend Developer",
    company: "Wenance",
    period: "Apr 2018 – Jun 2019",
    bullets: [
      "Developed and maintained frontend features for financial products in a fast-paced fintech environment.",
      "Worked closely with designers to translate UX definitions into scalable UI implementations.",
    ],
    tech: "Figma, Adobe XD, JavaScript, React, CSS, SASS, Node.js",
  },
  {
    role: "UI Developer",
    company: "Garbarino",
    period: "Feb 2017 – Apr 2018",
    bullets: [
      "Refactored and modernized the company's CSS library, improving UI consistency and enabling faster deployment.",
      "Collaborated with development teams to streamline frontend workflows and reduce time spent on UI updates.",
    ],
    tech: "JavaScript, SCSS, Sass, CSS, React, PWA, Node.js",
  },
  {
    role: "UI Developer",
    company: "Avenida.com",
    period: "Feb 2015 – Sept 2016",
    bullets: [
      "Contributed to the initial product launch, building the product's style library and foundational UI structure.",
    ],
    tech: "SCSS, Sass, CSS, PostCSS, Bootstrap",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6 md:px-16 lg:px-40 bg-secondary relative">
      {/* Geometric miscellanies — desktop only */}
      <div className="absolute top-8 left-8 w-12 h-[2px] bg-accent hidden md:block" />
      <div className="absolute top-8 left-8 w-[2px] h-12 bg-accent hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 bg-foreground hidden md:block" />

      <ScrollReveal>
        <h2 className="text-display-medium md:text-display-large mb-16">Resume</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Experience column */}
        <div className="lg:col-span-2">
          <h3 className="text-headline-small mb-8 pb-4 border-b-2 border-foreground">
            Work Experience
          </h3>
          <div className="space-y-10">
            {experience.map((job, i) => (
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
              Education
            </h3>
            <p className="text-title-large mb-1">Graphic Designer</p>
            <p className="text-body-large">Universidad de Buenos Aires</p>
            <p className="text-body-medium text-muted-foreground">2000 – 2009</p>
          </div>

          <div>
            <h3 className="text-headline-small mb-6 pb-4 border-b-2 border-foreground">
              Languages
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-body-large">
                <span>English</span>
                <span className="text-muted-foreground">Advanced</span>
              </div>
              <div className="flex justify-between text-body-large">
                <span>Portuguese</span>
                <span className="text-muted-foreground">Intermediate</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-headline-small mb-6 pb-4 border-b-2 border-foreground">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "UI Architecture",
                "Design Systems",
                "React",
                "TypeScript",
                "Figma",
                "Accessibility",
                "Micro-interactions",
                "React Native",
              ].map((skill) => (
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
            className="inline-block border-2 border-foreground bg-accent text-accent-foreground px-6 py-3 text-label-large hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200"
          >
            Download full resume (PDF) →
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ResumeSection;
