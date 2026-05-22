import { FlowSteps } from "@/components/FlowSteps";
import { CaseCard } from "@/components/CaseCard";

const capabilities = [
  {
    name: "Clarify complex situations",
    lead: "For teams dealing with scattered information, unclear ownership, messy processes, or too many moving parts.",
    items: [
      "Process, data and stakeholder analysis",
      "Current-state mapping",
      "Pain point synthesis",
      "Root-cause clarification",
    ],
  },
  {
    name: "Structure ways of working",
    lead: "For teams that need a clearer process, governance model, delivery approach, or operating rhythm.",
    items: [
      "Delivery and governance frameworks",
      "Roles, responsibilities, and handovers",
      "Decision points and approval flows",
      "Templates, guides, and routines",
    ],
  },
  {
    name: "Make work visible & usable",
    lead: "For teams that need artefacts people can understand, align on, and use without needing another meeting to explain them.",
    items: [
      "Visual models and diagrams",
      "Figma prototypes and wireframes",
      "Workshop and alignment material",
      "Executive-ready synthesis views",
    ],
  },
  {
    name: "Support with practical tools",
    lead: "For teams that need the process to become easier to run, track, improve, or explain to others.",
    items: [
      "SharePoint structures and lists",
      "Power Automate workflows",
      "Power BI dashboards",
      "Jira / Confluence workspaces",
      "Excel-based analysis and tracking",
    ],
  },
];

const principles = [
  {
    title: "I start from intent, not templates.",
    body: "Before producing an artefact, I clarify what the work needs to support: a decision, a behaviour, an approval, a handover, a discussion, or a practical next step.",
  },
  {
    title: "I make reality visible.",
    body: "I map how things actually work, including informal workarounds, unclear ownership, duplicated effort, hidden dependencies, and friction points.",
  },
  {
    title: "I structure without overcomplicating.",
    body: "I like clear structure, but not bureaucracy for its own sake. The goal is to help people move forward, not to create another layer of process nobody wants to use.",
  },
  {
    title: "I design artefacts people can use.",
    body: "I care about wording, layout, hierarchy, and usability. A deliverable only matters if people understand it, trust it, and actually use it.",
  },
  {
    title: "I stay close to execution.",
    body: "I do not stop at recommendations when the work needs something more practical. I can help translate the process into trackers, workflows, dashboards, prototypes, or working documentation.",
  },
];

const cases = [
  {
    ref: "WORK_01",
    name: "PMO Framework Implementation",
    situation:
      "An enterprise IT environment needed a clearer way to guide initiatives from early idea to delivery and follow-up, while strengthening portfolio visibility across the entire lifecycle.",
    action:
      "I helped translate the framework into a practical operating layer: phase-by-phase delivery guidance, PM-facing documentation, SharePoint tracking structures, Power Automate-supported review flows, and Power BI portfolio dashboards.",
    outcome:
      "The framework became more usable in day-to-day project delivery. Project managers gained clearer lifecycle guidance, leadership gained a more consistent portfolio view, and repetitive PM administration was reduced through automation.",
  },
  {
    ref: "WORK_02",
    name: "IT Landscape Modernization",
    situation:
      "A business division needed a clearer view of its current IT landscape (applications, processes, and dependencies) before defining the next stage of modernization.",
    action:
      "I led the discovery and structuring work (current-state analysis, BPMN process maps, capability mapping, gap analysis), defined a phased modernization roadmap, and delivered a Figma prototype to make the target solution tangible.",
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

const tools = [
  { name: "Figma", icon: "/FIGMA.svg" },
  { name: "Visio", icon: "/VISIO.svg" },
  { name: "Excel", icon: "/EXCEL.svg" },
  { name: "SharePoint", icon: "/SHAREPOINT.svg" },
  { name: "Power Automate", icon: "/POWERAUTOMATE.svg" },
  { name: "Power BI", icon: "/POWERBI.svg" },
  { name: "Jira", icon: "/JIRA.svg" },
  { name: "Confluence", icon: "/CONFLUENCE.svg" },
];

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
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted ml-auto">
            <a href="#work" className="hover:text-ink transition-colors">
              Work
            </a>
            <a href="#approach" className="hover:text-ink transition-colors">
              Approach
            </a>
            <a href="#contact" className="hover:text-ink transition-colors">
              Contact
            </a>
            <a href="#about" className="hover:text-ink transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* 01 Hero */}
        <section className="py-24 lg:py-36 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-[clamp(40px,4.4vw,56px)] font-medium leading-[1.05] tracking-[-0.02em] mb-10 lg:max-w-[34ch]">
              I help enterprise IT teams turn complex transformation work into
              clear processes, tools, and decisions.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[58ch] mb-12">
              I work where business needs, delivery processes, governance, and
              practical tooling meet.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="bg-ink text-paper py-3 px-[18px] border border-ink text-sm font-medium hover:opacity-90 active:scale-95 transition-opacity inline-flex items-center gap-3"
              >
                Let&apos;s talk
                <span aria-hidden>→</span>
              </a>
              <a
                href="#selected-work"
                className="bg-paper text-ink py-3 px-[18px] border border-rule text-sm font-medium hover:bg-paper-2 active:scale-95 transition-colors inline-flex items-center gap-3"
              >
                View selected work
              </a>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Belgium &amp; Luxembourg — Available from 1 June 2026
            </p>
          </div>
        </section>

        {/* 02 What I do */}
        <section id="work" className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                ■ What I do
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium text-balance leading-[1.12] tracking-[-0.015em] mt-4 max-w-[44ch]">
                Four kinds of work, applied together across a transformation.
              </h2>
              <p className="mt-4 text-muted max-w-[52rem]">
                My role is to make complexity easier to understand, easier to
                discuss, and easier to run. I help teams clarify what is
                happening, structure the way forward, create artefacts people
                can actually use, and support the work with practical tools when
                needed. The differentiator is the combination; I provide the
                following expertise end-to-end in a single engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-[auto_auto_auto_auto] lg:grid-rows-[auto_auto] gap-4 md:gap-0 md:ring-1 md:ring-rule">
              {capabilities.map((c, i) => (
                <div
                  key={c.name}
                  className={[
                    "bg-paper md:row-span-2 md:grid md:grid-rows-subgrid",
                    "max-md:border max-md:border-rule",
                    i < capabilities.length - 1 ? "lg:border-r border-rule" : "",
                    i < 2 ? "md:border-b lg:border-b-0 border-rule" : "",
                    i % 2 === 0 ? "md:border-r border-rule" : "",
                  ].join(" ")}
                >
                  <div className="p-8 space-y-3">
                    <h3 className="text-xl font-medium tracking-tight">
                      {c.name}
                    </h3>
                    <p className="text-sm text-muted">{c.lead}</p>
                  </div>
                  <ul className="mx-8 pb-8 pt-6 space-y-2 border-t border-rule">
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

        {/* 03 How I work */}
        <section id="approach" className="py-24 bg-paper-2 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                  ■ How I work
                </span>
                <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium mt-6 text-balance leading-[1.12] tracking-[-0.015em]">
                  I am most useful when there is ambiguity, complexity, or too
                  much information spread across too many places.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="divide-y divide-rule">
                  {principles.map((p) => (
                    <div key={p.title} className="py-8">
                      <h4 className="font-medium mb-3 text-lg tracking-tight">
                        {p.title}
                      </h4>
                      <p className="text-[15px] text-body text-pretty leading-[1.55]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools I often use */}
            <div className="mt-16 pt-12 border-t border-rule">
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em] block mb-6">
                Tools I often use
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex items-center gap-2 px-3 py-2 bg-paper border border-rule hover:bg-paper hover:scale-105 transition-all duration-300 ease-out"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      loading="lazy"
                      className="h-4 w-4 object-contain sm:grayscale sm:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                    />
                    <span className="font-mono text-[11px] tracking-[0.04em] text-muted leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 Selected Work */}
        <section id="selected-work" className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
                ■ Selected Work
              </span>
              <h2 className="text-[clamp(26px,3.4vw,42px)] font-medium leading-[1.12] tracking-[-0.015em] text-balance mt-4 mb-3 max-w-[44ch]">
                Selected work from my experience inside the European HQs of one
                of the world&apos;s largest automotive manufacturers.
              </h2>
              <p className="font-mono text-[11px] text-muted uppercase tracking-[0.14em]">
                Details are intentionally kept high-level for confidentiality.
              </p>
            </div>

            <div className="space-y-8">
              {cases.map((c) => (
                <CaseCard key={c.ref} c={c} />
              ))}
            </div>
          </div>
        </section>

        {/* 05 Contact */}
        <section id="contact" className="py-24 lg:py-40 bg-ink text-paper">
          <div className="max-w-7xl mx-auto px-6">
            <span className="font-mono text-[11px] text-paper/55 uppercase tracking-[0.18em]">
              ■ Contact
            </span>
            {/* Wrapper sets the font-size context so ch units are consistent across all children */}
            <div className="text-[1.875rem] max-w-[56ch] mt-6">
              <p className="text-2xl md:text-3xl font-medium leading-snug text-balance mb-8">
                If your team is dealing with unclear processes, scattered
                information, governance friction, or transformation work that
                needs to become more usable, I would be happy to talk.
              </p>
              <p className="text-lg text-paper/70 leading-relaxed mb-10">
                Let&apos;s keep it simple: send me a message, and we can see
                if there is a fit.
              </p>
              <div className="grid sm:grid-cols-2 gap-px bg-paper/15 border border-paper/30">
                <a
                  href="mailto:arnaud.fiora@gmail.com"
                  className="bg-ink p-8 group block hover:bg-paper/5 transition-colors"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/55 block mb-3">
                    Get in touch
                  </span>
                  <span className="text-lg font-medium">
                    arnaud.fiora@gmail.com
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
                  <span className="text-lg font-medium">
                    linkedin.com/in/arnaudfiora
                  </span>
                </a>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/40 mt-8">
                Based in Belgium · Available for Consulting, Business Analysis,
                Process Design, and Transformation support roles
              </p>
            </div>
          </div>
        </section>

        {/* 06 About */}
        <section id="about" className="py-24 border-b border-rule">
          <div className="max-w-7xl mx-auto px-6">
            <span className="font-mono text-[11px] text-muted uppercase tracking-[0.18em]">
              ■ About
            </span>
            <div className="max-w-[52rem] mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                I am a Business Analyst working in Enterprise IT and Digital
                Transformation environments, with a strong focus on process
                clarity, governance, visual thinking, and practical tooling.
              </p>
              <p>
                I enjoy the space between structure and execution:
                understanding how work really happens, making it visible, and
                turning it into something teams can use.
              </p>
              <p>
                My background combines Business Analysis, Process Design, PMO
                and Governance work, UX/UI Thinking, and hands-on experience
                with the Microsoft 365 ecosystem.
              </p>
              <p>
                Outside of client work, I experiment with ways to combine
                strategy, design, automation, and AI-assisted prototyping to
                build clearer, faster, and more useful digital artefacts. Here
                is how I built this website:
              </p>
            </div>
            <div className="mt-12">
              <FlowSteps />
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
