import type { ContentBlock } from "./caseStudies";

type ImageBlock = Extract<ContentBlock, { type: "image" }>;

export const images: Record<string, ImageBlock> = {
  "welp-hero": { type: "image", src: "/images/cases/welp-hero.png", alt: "Welp hero screen showing the flagship brand's premium visual identity", caption: "Welp — hero screen with blue overlay and Nunito typography" },
  "welp-typography": { type: "image", src: "/images/cases/welp-typography.png", alt: "Welp typography system using Nunito font", caption: "Welp typography scale — Nunito" },
  "welp-palette-primary": { type: "image", src: "/images/cases/welp-palette-primary.png", alt: "Welp primary color palette — Azure blue", caption: "Welp primary palette — Azure" },
  "welp-palette-secondary": { type: "image", src: "/images/cases/welp-palette-secondary.png", alt: "Welp secondary color palette — Medium Orchid", caption: "Welp secondary palette — Medium Orchid" },
  "mango-typography": { type: "image", src: "/images/cases/mango-typography.png", alt: "Mango typography system using Maven Pro font", caption: "Mango typography scale — Maven Pro" },
  "mango-palette-primary": { type: "image", src: "/images/cases/mango-palette-primary.png", alt: "Mango primary color palette — Crayola orange", caption: "Mango primary palette — Crayola Orange" },
  "mango-palette-green": { type: "image", src: "/images/cases/mango-palette-green.png", alt: "Mango primary green color palette — Pastel green", caption: "Mango green palette — Pastel Green" },
  "mango-gradient": { type: "image", src: "/images/cases/mango-gradient.png", alt: "Mango main gradient from red to orange to green", caption: "Mango main gradient" },
  "mango-dialog": { type: "image", src: "/images/cases/mango-dialog.png", alt: "Mango dialog component documentation with spacing specs", caption: "Mango — dialog component documentation" },
  "mango-screen": { type: "image", src: "/images/cases/mango-screen.png", alt: "Mango sample screen showing the dialog in context", caption: "Mango — dialog screen implementation" },
  "mango-hero": { type: "image", src: "/images/cases/mango-hero.png", alt: "Mango hero screen showing the tropical and approachable visual identity", caption: "Mango — hero screen with orange-to-green gradient" },
  "duollar-ctas": { type: "image", src: "/images/cases/duollar-ctas.png", alt: "Duollar CTA components", caption: "Duollar — CTA components" },
  "duollar-type-01": { type: "image", src: "/images/cases/duollar-type-01.png", alt: "Duollar typography system", caption: "Duollar — typography scale" },
  "duollar-forms": { type: "image", src: "/images/cases/duollar-forms.png", alt: "Duollar form components", caption: "Duollar — form components" },
  "duollar-type-02": { type: "image", src: "/images/cases/duollar-type-02.png", alt: "Duollar secondary typography system", caption: "Duollar — secondary typography scale" },
  "duollar-icons": { type: "image", src: "/images/cases/duollar-icons.png", alt: "Duollar icon components", caption: "Duollar — icon components" },
  "duollar-images": { type: "image", src: "/images/cases/duollar-images.png", alt: "Duollar image components", caption: "Duollar — image components" },
  "duollar-inputs": { type: "image", src: "/images/cases/duollar-inputs.png", alt: "Duollar input components", caption: "Duollar — input components" },
  "duollar-landing-pages": { type: "image", src: "/images/cases/duollar-landing-pages.png", alt: "Duollar landing page components", caption: "Duollar — landing page components" },
  "duollar-model-forms": { type: "image", src: "/images/cases/duollar-model-forms.png", alt: "Duollar model form components", caption: "Duollar — model form components" },
  "duollar-palette": { type: "image", src: "/images/cases/duollar-palette.png", alt: "Duollar color palette", caption: "Duollar — color palette" },
};
