export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "imageRef"; id: string }
  | { type: "code"; language: string; code: string }
  | { type: "callout"; text: string; variant?: "info" | "success" | "warning" }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "divider" }
  | { type: "cta"; text: string; href: string };

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
    slug: "wenance-design-system",
    title: "Wenance: Same Company, Multiple Brands",
    category: "Design Systems",
    description:
      "Built a modular design system that enabled rapid MVP launches under different brands for a fintech company with multiple product lines.",
    tags: ["Design Systems", "React", "Theming", "Multi-brand"],
    body: [
      {
        type: "heading",
        text: "The Challenge: Rapid MVP Launch",
      },
      {
        type: "paragraph",
        text: "Wenance set out to build a large suite of financial products, starting from scratch. The first lending app had to be up and running in less than two weeks. On top of that, the company needed the ability to switch brands quickly — transforming to digital what had previously been done analogically.",
      },
      {
        type: "callout",
        text: "The launch of the first MVP was successful, and we returned to work on the rest of the financial products suite. But we knew we needed a more scalable approach.",
        variant: "success",
      },
      {
        type: "heading",
        text: "Phase 1: The Brand Object",
      },
      {
        type: "paragraph",
        text: "Our first solution was a set of fixed values — logo, typography, and a limited palette — that allowed us to spin up a quick MVP for a new brand in a matter of hours. It solved the delivery expectations, but at a cost: the UI risked feeling rigid and monotonous.",
      },
      {
        type: "heading",
        text: "Gaining Flexibility: The Theme Layer",
      },
      {
        type: "paragraph",
        text: "To address rigidity, we introduced an intermediate layer: the Brand Theme. This sat between the Brand Object (basic constants) and the Product (the final application), allowing us to make variations on how visual values were assigned and distributed across the app.",
      },
      {
        type: "list",
        items: [
          "Brand Object — stores basic brand constants: logo, typography, limited palette.",
          "Brand Theme — introduces variations on how those values are distributed in the UI.",
          "Product — receives and renders the final visual definitions.",
        ],
      },
      {
        type: "paragraph",
        text: "This three-layer architecture opened the door to more complex and visually interesting patterns while maintaining the speed of brand creation.",
      },
      {
        type: "heading",
        text: "Brand Examples",
      },
      {
        type: "paragraph",
        text: "Welp was the company's flagship product, targeting a higher-income demographic. Its theme leaned into a more premium, polished aesthetic. Mango, on the other hand, targeted a medium-income audience with a tropical, approachable feel — same system, completely different personality.",
      },
      {
        type: "heading",
        text: "Scaling Further",
      },
      {
        type: "paragraph",
        text: "We proceeded to abstract UI responsibilities into separate repositories: Brand Attributes (brand object + theme), a shared UI Library (building blocks that worked in tandem with brand attributes), and the Products themselves as consumers of both.",
      },
      {
        type: "callout",
        text: "The final evolution: we built a Brand Creation CRM that allowed non-technical staff — like marketing — to create MVPs for new brands by assembling their own brand objects. Technical staff would later refine as needed.",
        variant: "info",
      },
      {
        type: "divider",
      },
      {
        type: "cta",
        text: "View the full presentation →",
        href: "https://docs.google.com/presentation/d/10a8UjC9g4OHefRCbkInq8jvuZ5YHjJfdqCw5oNRfh0I/edit?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    slug: "duollar-crypto-platform",
    title: "Duollar: Quick Decisions for Maximal Impact",
    category: "Product Design",
    description:
      "Designed the visual identity and UI for a crypto trading platform under tight budget constraints — every design decision had to count.",
    tags: ["UI Design", "Branding", "Crypto", "Figma"],
    body: [
      {
        type: "heading",
        text: "Context: Budget Restrictions",
      },
      {
        type: "paragraph",
        text: "In 2021, Duollar was intended to be a platform for spot trading between fiat currencies and digital assets, tailored to the Argentine financial market. Being a financial platform meant the backend needed to be robust and secure — and most of the budget went there. The visual design had to be done in a very limited window, laying foundations the dev team could evolve on their own.",
      },
      {
        type: "callout",
        text: "We could make very few choices and decisions. We had to make sure each one counted.",
        variant: "warning",
      },
      {
        type: "heading",
        text: "Decision 1: Typography",
      },
      {
        type: "paragraph",
        text: "We chose Arvo Bold by Anton Koovit as the heading font — an alternative to Rockwell (1934), a slab serif intended to give texts a bold, distinctive voice. It was paired with Montserrat by Julieta Ulanovsky for body text, balancing personality with readability.",
      },
      {
        type: "heading",
        text: "Decision 2: Color Palette",
      },
      {
        type: "paragraph",
        text: "Numbers are cold. A bunch of numbers together feel even colder. We used the color palette as a counterweight — making the platform feel warmer and more approachable. Since the project had no defined branding when we came on board, this palette ultimately became the brand identity.",
      },
      {
        type: "heading",
        text: "Decision 3: Iconography",
      },
      {
        type: "paragraph",
        text: "Icons can make a number-heavy interface feel lighter. Custom icons were out of budget, and using a ubiquitous family like Material Icons risked diluting brand identity. We found a limited but original set of financial icons that struck the right balance.",
      },
      {
        type: "heading",
        text: "Decision 4: Image Processing",
      },
      {
        type: "paragraph",
        text: "Since we'd only be on the project for a limited time, we developed a simple image-processing algorithm that enabled developers to generate on-brand visuals autonomously — ensuring visual consistency would survive our departure.",
      },
      {
        type: "heading",
        text: "Decision 5: Conversational Interface",
      },
      {
        type: "paragraph",
        text: "Everything feels easier when it looks like you're speaking to a real person — especially when dealing with hard numbers. A true conversational interface was out of scope, but we designed the UI to mimic that feel. This was 2021, well before ChatGPT made conversational UIs mainstream.",
      },
      {
        type: "callout",
        text: "With these five decisions locked in, we created a complete set of template screens — landing pages, forms, mobile views, calls to action, and a type system — giving the dev team everything they needed to continue building.",
        variant: "success",
      },
      {
        type: "divider",
      },
      {
        type: "cta",
        text: "View the full presentation →",
        href: "https://docs.google.com/presentation/d/1bbAobDY-hjwaYA-gYO6ZR7dOulbqChINylosvDPbMoY/edit?usp=sharing",
      },
    ],
  },
];
