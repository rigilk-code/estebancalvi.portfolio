export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; text: string; variant?: "info" | "success" | "warning" }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "divider" };

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  body: ContentBlock[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "recargapay-design-system",
    title: "RecargaPay Design System",
    category: "Design Systems",
    description:
      "Led the design and implementation of a company-wide UI component library used across multiple core products, including the mobile app.",
    tags: ["React", "React Native", "TypeScript"],
    body: [
      {
        type: "paragraph",
        text: "RecargaPay, one of Brazil's leading fintech companies, needed a unified design language across web and mobile platforms. The existing codebase suffered from inconsistent UI patterns, duplicated components, and slow feature delivery.",
      },
      {
        type: "paragraph",
        text: "I led the creation of a cross-platform component library built on React and React Native, powered by TypeScript for type safety and developer confidence. The system included atomic design tokens for color, spacing, and typography — ensuring visual consistency from Figma to production.",
      },
      {
        type: "callout",
        text: "The library was adopted across four product teams, reducing UI-related bugs by 40% and cutting new feature development time by an estimated 30%.",
        variant: "success",
      },
      {
        type: "paragraph",
        text: "It became the foundation for all new product initiatives at RecargaPay.",
      },
    ],
  },
  {
    id: 2,
    slug: "fintech-ux-overhaul",
    title: "Fintech UX Overhaul",
    category: "Product Design",
    description:
      "Redesigned core financial product flows for improved usability and conversion in a fast-paced fintech environment.",
    tags: ["Figma", "React", "User Research"],
    body: [
      {
        type: "paragraph",
        text: "The existing financial product flows had grown organically over several years, resulting in high drop-off rates and frequent support tickets. Users struggled with complex multi-step processes for payments, transfers, and account management.",
      },
      {
        type: "paragraph",
        text: "Through extensive user research — including interviews, session recordings, and A/B testing — I identified critical friction points and redesigned the core flows with a focus on clarity, progressive disclosure, and trust signals.",
      },
      {
        type: "callout",
        text: "The redesigned flows achieved a 25% improvement in task completion rates and a significant reduction in customer support volume.",
        variant: "success",
      },
      {
        type: "paragraph",
        text: "The new patterns were documented and became the standard for all future product design at the company.",
      },
    ],
  },
  {
    id: 3,
    slug: "ecommerce-ui-modernization",
    title: "E-Commerce UI Modernization",
    category: "Frontend Architecture",
    description:
      "Refactored and modernized a major retailer's CSS library, improving UI consistency and enabling faster deployment across projects.",
    tags: ["SCSS", "React", "PWA"],
    body: [
      {
        type: "paragraph",
        text: "A major retail client operated multiple storefronts sharing a legacy CSS framework that had become unwieldy — with over 12,000 lines of unstructured styles, no naming conventions, and rampant specificity conflicts.",
      },
      {
        type: "paragraph",
        text: "I architected a modern SCSS-based design system with BEM methodology, CSS custom properties for theming, and a modular build pipeline. The migration was executed incrementally to avoid disrupting active development.",
      },
      {
        type: "list",
        items: [
          "Reduced stylesheet size by 60%",
          "Enabled theme switching for seasonal campaigns",
          "Supported PWA rollout improving mobile conversion by 18%",
        ],
      },
      {
        type: "paragraph",
        text: "The new system supported the rollout of a Progressive Web App experience that improved mobile conversion by 18%.",
      },
    ],
  },
];
