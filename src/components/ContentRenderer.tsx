import { ContentBlock } from "@/data/caseStudies";
import { images } from "@/data/caseImages";
import ScrollReveal from "@/components/ScrollReveal";

const calloutStyles: Record<string, string> = {
  info: "border-foreground bg-secondary",
  success: "border-accent bg-accent/10",
  warning: "border-foreground bg-background",
};

function resolveBlocks(blocks: ContentBlock[]): ContentBlock[] {
  return blocks.flatMap((block) =>
    block.type === "imageGroup" ? (imageGroups[block.id] ?? []) : [block]
  );
}

const ContentRenderer = ({ blocks }: { blocks: ContentBlock[] }) => {
  const resolved = resolveBlocks(blocks);
  return (
    <div className="space-y-6">
      {resolved.map((block, i) => (
        <ScrollReveal key={i} delay={0.1 + i * 0.04}>
          {renderBlock(block)}
        </ScrollReveal>
      ))}
    </div>
  );
};

function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-body-large leading-relaxed">{block.text}</p>;

    case "heading":
      return <h2 className="text-headline-small mt-4">{block.text}</h2>;

    case "image":
      return (
        <figure className="my-8">
          <div className="border-2 border-foreground overflow-hidden">
            <img
              src={block.src}
              alt={block.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {block.caption && (
            <figcaption className="text-body-medium text-muted-foreground mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <div className="border-2 border-foreground bg-foreground text-background p-6 overflow-x-auto my-4">
          <pre className="text-body-medium font-mono whitespace-pre">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "callout":
      return (
        <aside
          className={`border-l-4 p-6 my-4 ${calloutStyles[block.variant ?? "info"]}`}
        >
          <p className="text-body-large leading-relaxed">{block.text}</p>
        </aside>
      );

    case "list":
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`text-body-large leading-relaxed pl-6 space-y-2 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );

    case "divider":
      return <hr className="border-t-2 border-foreground my-8" />;

    case "cta":
      return (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-foreground bg-accent text-accent-foreground px-6 py-3 text-label-large hover:shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:scale-[1.02] focus:scale-[1.02] transition-all duration-200"
        >
          {block.text}
        </a>
      );

    default:
      return null;
  }
}

export default ContentRenderer;
