import { FlowSteps } from "@/components/FlowSteps";

const capabilities = [
  {
    code: "[CAP_01]",
    name: "Model",
    lead: "The shape of the work.",
    items: [
      "BPMN process maps",
      "Capability views",
      "Lifecycle frameworks",
      "Governance structures",
    ],
  },
  {
    code: "[CAP_02]",
    name: "Visualize",
    lead: "The future, made tangible.",
    items: [
      "Figma prototypes",
      "Design workshops",
      "Roadmap visualisations",
      "Stakeholder alignment material",
    ],
  },
  {
    code: "[CAP_03]",
    name: "Document",
    lead: "Knowledge people can use.",
    items: [
      "Templates",
      "Manuals",
      "PM-facing guides",
      "Lifecycle guidance",
    ],
  },
  {
    code: "[CAP_04]",
    name: "Design & Enable",
    lead: "The operating layer.",
    items: [
      "SharePoint structures",
      "Power Automate workflows",
      "Power BI dashboards",
    ],
  },
];

const principles = [
  {
    title: "Start from the intent, not the artefact.",
    body: "A request often arrives as a dashboard, workflow, template, prototype, or process map. I work back from it to the underlying goal — what the team is actually trying to make possible, clarify, unblock, or deliver — before deciding what the artefact should be.",
  },
  {
    title: "Make the current reality visible.",
    body: "I map how the work actually happens — the decisions, handovers, responsibilities, workarounds, and friction points that shape day-to-day reality, beyond what the official process says.",
  },
  {
    title: "Structure the moving parts.",
    body: "I help turn scattered information into something coherent — a lifecycle, process, governance model, roadmap, set of requirements, or delivery structure.",
  },
  {
    title: "Design artefacts people can use.",
    body: "The output should help people work better — a guide, template, prototype, workflow, dashboard, SharePoint structure, or decision log that the team can actually pick up and use.",
  },
  {
    title: "Keep the next step practical.",
    body: "In complex environments, progress often comes from the next useful artefact, decision, or alignment moment — not from trying to solve the whole system at once.",
  },
];

const cases = [
  {
    ref: "WORK_01",
    name: "PMO Framework Implementation",
    situation:
      "A project delivery framework needed to become easier to apply consistently across teams and governance touchpoints, while strengthening portfolio visibility across the delivery lifecycle.",
    action:
      "I helped translate the framework into a practical operating layer — phase-by-phase delivery guidance, PM-facing documentation, SharePoint tracking structures, Power Automate-supported review flows, and Power BI portfolio dashboards.",
    outcome:
      "The framework became more usable in day-to-day project delivery. Project managers gained clearer lifecycle guidance, leadership gained a more consistent portfolio view, and repetitive PM administration was reduced through automation.",
  },
  {
    ref: "WORK_02",
    name: "IT Landscape Modernization",
    situation:
      "A business division needed a clearer view of its current IT landscape — applications, processes, and dependencies — before defining the next stage of modernization.",
    action:
      "I supported the discovery and structuring work — current-state analysis, BPMN process maps, capability views, gap analysis, a phased modernization roadmap, and a Figma prototype to make the target solution tangible.",
    outcome:
      "The work moved the modernization discussion from abstract ambition to a shared direction. Senior business and IT stakeholders aligned on a target vision, and the prototype shifted the future from concept to something they could see, challenge, and validate.",
  },
  {
    ref: "WORK_03",
    name: "Enterprise Application Redesign",
    situation:
      "A critical enterprise application, used by internal teams and external partners, needed to evolve, with business and delivery teams requiring a clearer view of the future experience.",
    action:
      "I helped structure the redesign through requirements clarification, design workshops, a Figma prototype of the future experience, and coordination across UAT, production testing, and go-live.",
    outcome:
      "The work turned unclear business needs into a tangible future experience and gave the delivery team clearer input to move features through implementation across multiple production releases.",
  },
];

type ToolItem = { name: string; icon: string };
const toolkit: { label: string; mobileLabel?: string; items: ToolItem[] }[] = [
  {
    label: "Education & Certifications",
    mobileLabel: "Bckgrnd & Certifications",
    items: [
      { name: "Solvay", icon: "/SOLVAY.svg" },
      { name: "Le Wagon", icon: "/LEWAGON.svg" },
      { name: "IIBA", icon: "/IIBA.svg" },
      { name: "PRINCE2", icon: "/PRINCE2.svg" },
      { name: "SCRUM", icon: "/SCRUMINC.svg" },
    ],
  },
  {
    label: "M365",
    items: [
      { name: "Excel", icon: "/EXCEL.svg" },
      { name: "Visio", icon: "/VISIO.svg" },
      { name: "SharePoint", icon: "/SHAREPOINT.svg" },
      { name: "Power BI", icon: "/POWERBI.svg" },
      { name: "Power Automate", icon: "/POWERAUTOMATE.svg" },
    ],
  },
  {
    label: "Agile",
    items: [
      { name: "Confluence", icon: "/CONFLUENCE.svg" },
      { name: "Jira", icon: "/JIRA.svg" },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Figma", icon: "/FIGMA.svg" },
      { name: "Affinity", icon: "/AFFINITY.svg" },
    ],
  },
  {
    label: "AI",
    items: [
      { name: "Claude", icon: "/CLAUDE.svg" },
      { name: "ChatGPT", icon: "/CHATGPT.svg" },
      { name: "Claude Code", icon: "/CLAUDECODE.svg" },
      { name: "Github", icon: "/GITHUB.svg" },
      { name: "Vercel", icon: "/VERCEL.svg" },
    ],
  },
];

function ToolGroup({ group }: { group: { label: string; mobileLabel?: string; items: ToolItem[] } }) {
  return (
    <div>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted block mb-4">
        <span className="lg:hidden">{group.mobileLabel ?? group.label}</span>
        <span className="hidden lg:inline">{group.label}</span>
      </span>
      <ul className="space-y-2">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="group flex items-center gap-2.5 px-3 py-2 bg-paper hover:bg-paper-2 hover:scale-105 transition-all duration-300 ease-out"
          >
            <span className="flex items-center justify-center h-6 w-6 shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.icon}
                alt={item.name}
                loading="lazy"
                className="h-5 w-5 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
              />
            </span>
            <span className="font-mono text-[11px] tracking-[0.04em] text-muted leading-tight">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif">
      {/* Header */}
      <header className="border-b border-rule sticky top-0 z-40 bg-paper/85 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-[11px] tracking-[0.18em] uppercase"
          >
            Arnaud Fiora{" "}
            <span className="text-muted">/ Business Analyst</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <a href="#work" className="hover:text-ink transition-colors">
              Work
            </a>
            <a href="#approach" className="hover:text-ink transition-colors">
              Approach
            </a>
            <a href="#toolkit" className="hover:text-ink transition-colors">
              Toolkit
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm font-medium hover:text-muted transition-colors"
            >
              Contact →
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* 01 Hero */}
        <section className="py-24 lg:py-36 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.05] tracking-[-0.02em] mb-10">
              I help enterprise IT teams turn<br />
              complex transformation work into<br />
              clear processes, tools, and decisions.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[58ch] mb-12">
              At the intersection of business analysis, governance, process
              design, visual modelling, and M365 tooling.
            </p>
            <a
              href="#contact"
              className="bg-ink text-paper py-3 px-[18px] border border-ink text-sm font-medium hover:opacity-90 active:scale-95 transition-opacity inline-flex items-center gap-3"
            >
              Get in touch about a mission
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* 02 What I do — Capabilities */}
        <section id="work" className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                ■ What I do
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium text-balance leading-[1.12] tracking-[-0.015em] mt-4 max-w-[44ch]">
                Four kinds of work, applied together across a transformation.
              </h2>
              <p className="mt-4 text-muted max-w-[60ch]">
                The differentiator is the combination. Model, Visualize,
                Document, Design &amp; Enable — applied end-to-end inside a
                single engagement, not handed off between specialists.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 ring-1 ring-rule">
              {capabilities.map((c, i) => (
                <div
                  key={c.code}
                  className={[
                    "p-8 flex flex-col gap-8 bg-paper",
                    i < capabilities.length - 1 ? "lg:border-r border-rule" : "",
                    i < 2 ? "md:border-b lg:border-b-0 border-rule" : "",
                    i % 2 === 0 ? "md:border-r border-rule" : "",
                  ].join(" ")}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium tracking-tight">
                      {c.name}
                    </h3>
                    <p className="text-sm text-muted">{c.lead}</p>
                  </div>
                  <ul className="mt-auto min-h-[8.5rem] space-y-2 pt-6 border-t border-rule">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm flex items-baseline gap-3 text-ink/85"
                      >
                        <span className="font-mono text-[10px] text-muted">
                          —
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 How I work — Principles */}
        <section id="approach" className="py-24 bg-paper-2 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                  ■ How I work
                </span>
                <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium mt-6 text-balance leading-[1.12] tracking-[-0.015em]">
                  Depth inside one complex environment.
                </h2>
                <div className="mt-8 space-y-5 text-muted leading-relaxed">
                  <p>
                    Rather than moving from short assignment to short assignment,
                    I have built depth inside one complex enterprise IT
                    environment — supporting different teams, programmes, tools,
                    and governance challenges over multiple years.
                  </p>
                  <p>
                    That shaped the way I work. Five principles now guide most
                    of my engagements — whether the starting point is a problem,
                    an opportunity, or simply something unclear.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="divide-y divide-rule">
                  {principles.map((p, i) => (
                    <div key={p.title} className="py-8">
                      <div>
                        <h4 className="font-medium mb-3 text-lg tracking-tight">
                          {p.title}
                        </h4>
                        <p className="text-[15px] text-body text-pretty max-w-[64ch] leading-[1.55]">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Selected Work */}
        <section className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                ■ Selected Work
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.015em] text-balance mt-4 mb-3 max-w-[44ch]">
                Selected examples from six years embedded in a large European
                enterprise IT environment.
              </h2>
              <p className="font-mono text-[11px] text-muted uppercase tracking-[0.14em]">
                Described at a high level to respect client confidentiality.
              </p>
            </div>

            <div className="space-y-8">
              {cases.map((c, i) => (
                <article key={c.ref} className="border border-rule bg-paper">
                  {/* Header: ref + title */}
                  <div className="px-6 pt-6 pb-2 lg:px-8 lg:pt-7">
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] leading-snug">
                      {c.name}
                    </h3>
                  </div>
                  {/* Three columns — no vertical dividers */}
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="px-6 py-5 lg:px-8 lg:py-6">
                      <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
                        Situation
                      </span>
                      <p className="text-[13px] text-body leading-[1.55]">{c.situation}</p>
                    </div>
                    <div className="px-6 py-5 lg:px-8 lg:py-6">
                      <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
                        Contribution
                      </span>
                      <p className="text-[13px] text-body leading-[1.55]">{c.action}</p>
                    </div>
                    <div className="px-6 py-5 lg:px-8 lg:py-6">
                      <span className="text-[11px] font-mono uppercase text-muted mb-2 block tracking-[0.16em]">
                        Outcome
                      </span>
                      <p className="text-[13px] text-body leading-[1.55]">{c.outcome}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Methods & Toolkit */}
        <section id="toolkit" className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div>
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                ■ Methods &amp; Toolkit
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium mt-4 text-balance leading-[1.12] tracking-[-0.015em] max-w-[44ch]">
                Credentials and toolset behind the work.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-10">
              <ToolGroup group={toolkit[0]} />
              <ToolGroup group={toolkit[1]} />
              <div className="flex flex-col justify-between">
                <ToolGroup group={toolkit[2]} />
                <ToolGroup group={toolkit[3]} />
              </div>
              <ToolGroup group={toolkit[4]} />
            </div>

            <div className="mt-20">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Built with this stack
              </span>
              <p className="text-[15px] text-muted leading-relaxed max-w-[80ch] mt-4 mb-10">
                The AI category above is an experimental toolset I rely on
                across my personal projects — pairing reasoning models, coding
                assistants, and rapid deployment platforms to move from idea
                to live product in hours rather than weeks. This very website
                was designed, built, and deployed using that exact stack.
              </p>
              <FlowSteps />
            </div>
          </div>
        </section>

        {/* 06 Contact */}
        <section id="contact" className="py-24 lg:py-40 bg-ink text-paper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-[11px] text-paper/55 uppercase tracking-[0.18em]">
                  ■ Contact
                </span>
              </div>
              <div className="lg:col-span-8">
                <p className="text-2xl md:text-3xl font-medium leading-snug text-balance max-w-[36ch] mb-16">
                  Most of my work is embedded inside transformation teams. I
                  take on focused engagements when the fit is right.
                </p>

                <div className="grid sm:grid-cols-2 gap-px bg-paper/15 border border-paper/30">
                  <a
                    href="mailto:arnaud.fiora@gmail.com"
                    className="bg-ink p-8 group block hover:bg-paper/5 transition-colors"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/55 block mb-3">
                      Get in touch about a mission
                    </span>
                    <span className="text-lg font-medium inline-flex items-center gap-3">
                      arnaud.fiora@gmail.com
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      >
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/arnaudfiora"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-ink p-8 group block hover:bg-paper/5 transition-colors"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/55 block mb-3">
                      LinkedIn
                    </span>
                    <span className="text-lg font-medium inline-flex items-center gap-3">
                      linkedin.com/in/arnaudfiora
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Arnaud Fiora · Freelance Business Analyst · © 2026
          </span>
          <nav className="flex gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <a
              href="mailto:arnaud.fiora@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/arnaudfiora"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
