const MAX_SVG_WIDTH = 684;

const steps = [
  {
    id: "write",
    title: "Write",
    subtitle: "Start with words before pixels",
    description:
      "Through guided dialogue — ChatGPT to pressure-test ideas, Claude to synthesise them — the positioning, structure, and copy are validated. The result is a single Master Brief that locks the foundation and anchors every downstream decision.",
    svg: "/flow-write.svg",
    svgWidth: 660,
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Translate the brief into a visual language",
    description:
      "Lovable explores full-page directions while Claude Design distils what works into colours and typography. After several iterations, the Design System locks the look.",
    svg: "/flow-design.svg",
    svgWidth: 502,
  },
  {
    id: "deploy",
    title: "Deploy",
    subtitle: "Assemble the infrastructure",
    description:
      "Claude Code turns the brief and design system into a working Next.js app. GitHub hosts the source code, and Vercel ships the site live on every push.",
    svg: "/flow-deploy.svg",
    svgWidth: 684,
  },
];

export function FlowSteps() {
  return (
    /*
      Outer grid: 3 cols, 2 explicit rows [text | diagram].
      Each card spans both rows and uses grid-rows-subgrid so its
      two children participate in the outer grid's shared row heights.
      This guarantees all diagram tops land on the same horizontal axis.
    */
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-4">
      {steps.map((step) => {
        const widthPct = `${((step.svgWidth / MAX_SVG_WIDTH) * 100).toFixed(1)}%`;
        return (
          <div
            key={step.id}
            className="border border-rule bg-paper md:row-span-2 md:grid md:grid-rows-subgrid"
          >
            {/* Row 1 — text */}
            <div className="px-6 pt-6 pb-5">
              <span className="font-serif font-semibold text-[18px] tracking-tight text-ink block mb-3">
                {step.title}
              </span>
              <p className="font-serif font-semibold text-[13px] text-ink mb-2 leading-snug">
                {step.subtitle}
              </p>
              <p className="text-[13px] text-body leading-[1.55]">
                {step.description}
              </p>
            </div>

            {/* Row 2 — diagram, padded on all sides, scaled to consistent visual size */}
            <div className="px-6 pb-6 pt-2 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={step.svg}
                alt={`${step.title} flow diagram`}
                style={{ width: widthPct }}
                className="h-auto block"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
