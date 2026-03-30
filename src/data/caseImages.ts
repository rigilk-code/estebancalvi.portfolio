import type { ContentBlock } from "./caseStudies";

type ImageBlock = Extract<ContentBlock, { type: "image" }>;

export const imageGroups: Record<string, ImageBlock[]> = {
  "welp-brand": [
    { type: "image", src: "/images/cases/welp-hero.png", alt: "Welp hero screen showing the flagship brand's premium visual identity", caption: "Welp — hero screen with blue overlay and Nunito typography" },
    { type: "image", src: "/images/cases/welp-typography.png", alt: "Welp typography system using Nunito font", caption: "Welp typography scale — Nunito" },
    { type: "image", src: "/images/cases/welp-palette-primary.png", alt: "Welp primary color palette — Azure blue", caption: "Welp primary palette — Azure" },
    { type: "image", src: "/images/cases/welp-palette-secondary.png", alt: "Welp secondary color palette — Medium Orchid", caption: "Welp secondary palette — Medium Orchid" },
  ],
  "mango-brand": [
    { type: "image", src: "/images/cases/mango-typography.png", alt: "Mango typography system using Maven Pro font", caption: "Mango typography scale — Maven Pro" },
    { type: "image", src: "/images/cases/mango-palette-primary.png", alt: "Mango primary color palette — Crayola orange", caption: "Mango primary palette — Crayola Orange" },
    { type: "image", src: "/images/cases/mango-palette-green.png", alt: "Mango primary green color palette — Pastel green", caption: "Mango green palette — Pastel Green" },
    { type: "image", src: "/images/cases/mango-gradient.png", alt: "Mango main gradient from red to orange to green", caption: "Mango main gradient" },
    { type: "image", src: "/images/cases/mango-dialog.png", alt: "Mango dialog component documentation with spacing specs", caption: "Mango — dialog component documentation" },
    { type: "image", src: "/images/cases/mango-screen.png", alt: "Mango sample screen showing the dialog in context", caption: "Mango — dialog screen implementation" },
  ],
};
