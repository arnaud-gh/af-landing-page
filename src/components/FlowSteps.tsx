const MAX_SVG_WIDTH = 684;

const steps = [
  {
    id: "write",
    title: "Write",
    subtitle: "Start with words before pixels",
    description:
      "Using a mix of ChatGPT to pressure-test ideas and Claude to guide the discussion and lock the positioning, structure and copy of the site.",
    svg: "/flow-write.svg",
    svgWidth: 660,
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Translate the brief into a visual language",
    description:
      "Iterating with Claude Design and Lovable to ideate, then generate and lock a full design system.",
    svg: "/flow-design.svg",
    svgWidth: 502,
  },
  {
    id: "deploy",
    title: "Deploy",
    subtitle: "Assemble the infrastructure",
    description:
      "Claude Code turns the brief and design system into a working app. GitHub hosts the source, and Vercel ships it live on every push.",
    svg: "/flow-deploy.svg",
    svgWidth: 684,
  },
];

export function FlowSteps() {
  return (
    <>
      {/* Desktop: full-width single visual, no boxes */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Fullflowdesktop.svg"
        alt="Write, Design, Deploy flow"
        className="hidden lg:block w-full h-auto"
      />

      {/* Tablet / mobile: individual cards with per-step diagrams */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-4">
        {steps.map((step) => {
          const widthPct = `${((step.svgWidth / MAX_SVG_WIDTH) * 100).toFixed(1)}%`;
          return (
            <div
              key={step.id}
              className="border border-rule bg-paper md:row-span-2 md:grid md:grid-rows-subgrid"
            >
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
    </>
  );
}
