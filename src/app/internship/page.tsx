import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, FileText, Gauge, GitBranch, Layers3, Lightbulb, Network, Wrench } from "lucide-react";

const work = [
  {
    period: "Weeks 1–2",
    title: "Machine familiarisation & assembly",
    description: "Worked on conveyor assembly, machine start-up routines and component checks. Built familiarity with the equipment, safe working practices and the sequence of a production task.",
    tags: ["Assembly", "Machine checks", "Workplace safety"],
    icon: Wrench,
  },
  {
    period: "Weeks 3–4",
    title: "3D modelling & prototyping",
    description: "Created and refined a cap model, then used 3D printing to turn the design into a physical part. Learnt to check fit and make adjustments between design and fabrication.",
    tags: ["CAD", "3D printing", "Iteration"],
    icon: Layers3,
  },
  {
    period: "Weeks 5–6",
    title: "PLC & control-system work",
    description: "Started working with PLC logic and TIA Portal tags. This was less familiar than the topics covered in class, so I had to learn the project structure, trace signals and verify behaviour instead of relying on assumptions.",
    tags: ["PLC", "TIA Portal", "Signal tracing"],
    icon: Cpu,
  },
  {
    period: "Weeks 7–8",
    title: "Troubleshooting & technical documentation",
    description: "Helped investigate conveyor and station issues, checked suspected faults before recording them, and prepared task instructions and a user manual for different audiences.",
    tags: ["Troubleshooting", "Technical writing", "Testing"],
    icon: FileText,
  },
  {
    period: "Weeks 9–10",
    title: "System support & handover preparation",
    description: "Supported laptop and exercise-guide preparation, organised parts and followed up on outstanding technical checks. Focused on making work repeatable and clear for the next person using the equipment.",
    tags: ["Setup", "Organisation", "Documentation"],
    icon: Network,
  },
];

const skills = [
  { name: "PLC & automation", detail: "Building confidence with PLC logic, tags and signal tracing.", icon: Cpu },
  { name: "Control & testing", detail: "Applying systematic checks before deciding what has failed.", icon: Gauge },
  { name: "CAD & prototyping", detail: "Moving from a digital model to a tested physical part.", icon: Layers3 },
  { name: "Technical communication", detail: "Writing clear instructions for both internal and external users.", icon: FileText },
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen">
      <section className="container pt-10 pb-16 md:pt-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Internship / Interim showcase</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Learning by building, testing and solving.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              A midpoint look at my engineering internship at Festo — the work I have contributed to, the systems I have been exposed to, and the skills I am developing along the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Explore my work <ArrowDownRight className="h-4 w-4" />
              </a>
              <a href="#reflection" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                What I have learnt
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/20" />
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-primary/20" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">At a glance</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-semibold tracking-tight text-foreground">10</p>
                <p className="mt-1 text-sm text-muted-foreground">Weeks reflected</p>
              </div>
              <div>
                <p className="text-4xl font-semibold tracking-tight text-foreground">4</p>
                <p className="mt-1 text-sm text-muted-foreground">Technical areas</p>
              </div>
              <div className="col-span-2 border-t border-border pt-5">
                <p className="text-sm font-medium text-foreground">Diploma in Mechatronics & Robotics</p>
                <p className="mt-1 text-sm text-muted-foreground">Ngee Ann Polytechnic · Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-border/70 bg-card/40 py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">01 / Work log</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Ten weeks of hands-on work</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted-foreground">A selection of tasks and responsibilities from the first half of the internship. The work moved between the workshop, engineering software and documentation.</p>
          </div>

          <div className="mt-10 space-y-4">
            {work.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.period} className="grid gap-5 rounded-xl border border-border bg-background p-5 md:grid-cols-[120px_1fr] md:p-7">
                  <div className="flex items-start justify-between md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.period}</p>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:mt-5"><Icon className="h-5 w-5" /></span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs text-muted-foreground">0{index + 1}</span>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reflection" className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">02 / Skills in progress</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Connecting classroom knowledge to the workplace</h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground">My mechatronics background gave me a starting point, but the internship has shown me how much depends on understanding the actual machine, its signals, its users and its operating conditions.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-semibold text-foreground">{skill.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{skill.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-2 md:p-8">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><CheckCircle2 className="h-4 w-4 text-primary" /> What is going well</div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">I am becoming more comfortable moving between practical tasks and engineering software. I have also learnt to document steps clearly and check evidence before concluding that a component or signal is faulty.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Lightbulb className="h-4 w-4 text-primary" /> What I am working on</div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">I want to become more independent with PLC troubleshooting, improve how I trace unfamiliar systems, and ask more focused questions when I need guidance.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 py-14">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">03 / Next steps</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">The second half is about building independence.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">My next focus is to take greater ownership of assigned tasks, strengthen my PLC knowledge and keep improving the quality of my testing and documentation.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary hover:underline">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
