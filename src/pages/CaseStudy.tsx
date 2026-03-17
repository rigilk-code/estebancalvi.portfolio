import { useParams, Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const caseStudyContent: Record<string, {
  title: string;
  category: string;
  description: string;
  tags: string[];
  body: string[];
}> = {
  "recargapay-design-system": {
    title: "RecargaPay Design System",
    category: "Design Systems",
    description: "Led the design and implementation of a company-wide UI component library used across multiple core products, including the mobile app.",
    tags: ["React", "React Native", "TypeScript"],
    body: [
      "RecargaPay, one of Brazil's leading fintech companies, needed a unified design language across web and mobile platforms. The existing codebase suffered from inconsistent UI patterns, duplicated components, and slow feature delivery.",
      "I led the creation of a cross-platform component library built on React and React Native, powered by TypeScript for type safety and developer confidence. The system included atomic design tokens for color, spacing, and typography — ensuring visual consistency from Figma to production.",
      "The library was adopted across four product teams, reducing UI-related bugs by 40% and cutting new feature development time by an estimated 30%. It became the foundation for all new product initiatives at RecargaPay.",
    ],
  },
  "fintech-ux-overhaul": {
    title: "Fintech UX Overhaul",
    category: "Product Design",
    description: "Redesigned core financial product flows for improved usability and conversion in a fast-paced fintech environment.",
    tags: ["Figma", "React", "User Research"],
    body: [
      "The existing financial product flows had grown organically over several years, resulting in high drop-off rates and frequent support tickets. Users struggled with complex multi-step processes for payments, transfers, and account management.",
      "Through extensive user research — including interviews, session recordings, and A/B testing — I identified critical friction points and redesigned the core flows with a focus on clarity, progressive disclosure, and trust signals.",
      "The redesigned flows achieved a 25% improvement in task completion rates and a significant reduction in customer support volume. The new patterns were documented and became the standard for all future product design at the company.",
    ],
  },
  "ecommerce-ui-modernization": {
    title: "E-Commerce UI Modernization",
    category: "Frontend Architecture",
    description: "Refactored and modernized a major retailer's CSS library, improving UI consistency and enabling faster deployment across projects.",
    tags: ["SCSS", "React", "PWA"],
    body: [
      "A major retail client operated multiple storefronts sharing a legacy CSS framework that had become unwieldy — with over 12,000 lines of unstructured styles, no naming conventions, and rampant specificity conflicts.",
      "I architected a modern SCSS-based design system with BEM methodology, CSS custom properties for theming, and a modular build pipeline. The migration was executed incrementally to avoid disrupting active development.",
      "The new system reduced stylesheet size by 60%, enabled theme switching for seasonal campaigns, and supported the rollout of a Progressive Web App experience that improved mobile conversion by 18%.",
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyContent[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-medium mb-4">Case study not found</h1>
          <Link to="/" className="text-accent text-label-large hover:underline">
            ← Back home
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
            to="/#cases"
            className="text-label-large text-muted-foreground hover:text-accent transition-colors duration-200 inline-block mb-12"
          >
            ← Back to case studies
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

        <div className="border-t-2 border-foreground pt-12 space-y-6">
          {study.body.map((paragraph, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.05}>
              <p className="text-body-large leading-relaxed">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CaseStudy;
