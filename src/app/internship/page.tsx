import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, Cpu, FileText, Gauge, Printer, Wrench } from "lucide-react";

const work = [
  { period: "Weeks 1–2", title: "Conveyor assembly & testing", icon: Wrench, detail: "Assembled and tested conveyor sections, checked motor operation and became familiar with the MPS and CP Lab learning systems." },
  { period: "Weeks 2–3", title: "3D modelling & printing", icon: Printer, detail: "Learned the 3D-printing workflow and worked on a cap model, checking the physical result against the intended design." },
  { period: "Weeks 3–5", title: "Station repairs & maintenance", icon: Gauge, detail: "Helped investigate faults and restore stations for demonstrations and classes, including belt work and a drill-station replacement." },
  { period: "Weeks 3–6", title: "Technical documentation", icon: FileText, detail: "Prepared two manuals: a task-focused guide for daily work and a user manual for Ngee Ann Polytechnic staff and students." },
  { period: "Weeks 6–8", title: "Air supply & station support", icon: Wrench, detail: "Worked on the air supply for the stations and supported practical setup and maintenance tasks, following safe isolation and pressure-release steps." },
  { period: "Weeks 9–10", title: "PLC tags & test code", icon: Cpu, detail: "Started creating PLC tags and test code in Siemens TIA Portal V15.1, developing familiarity with the project structure and signal behaviour." },
];

const results = [
  ["Station readiness", "Equipment restored for demonstrations and classes"],
  ["Air supply", "Air supply set up for the learning stations"],
  ["CP Lab testing", "Testing process made faster"],
  ["Documentation", "Two manuals prepared, including one for NP"],
  ["Class preparation", "10 laptops prepared for a class"],
];

export default function InternshipPage() {
  return (
    <main className="min-h-screen">
      <div className="container max-w-6xl py-10 md:py-14">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4"/> Back to portfolio</Link>
        <section className="mt-8 overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Festo Pte Ltd / Internship interim showcase</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Learning by building, testing and solving.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">A midpoint look at the first ten weeks of my 22-week internship, supporting the MPS, CP Lab and CP Factory learning systems. The work has taken me from conveyor assembly and 3D printing to station maintenance, documentation and PLC testing.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Explore my work <ArrowDown className="h-4 w-4"/></a>
                <a href="#next" className="rounded-full border border-border px-5 py-3 text-sm hover:bg-muted/50">What comes next</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-background/60 p-6">
              <div><p className="text-4xl font-semibold">10</p><p className="mt-1 text-xs text-muted-foreground">Weeks completed</p></div>
              <div><p className="text-4xl font-semibold">22</p><p className="mt-1 text-xs text-muted-foreground">Weeks total</p></div>
              <div className="col-span-2 border-t border-border pt-4"><p className="text-sm font-medium">Diploma in Mechatronic & Robotics</p><p className="mt-1 text-sm text-muted-foreground">Ngee Ann Polytechnic · 7 Sep 2026 – 6 Feb 2027</p></div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">01 / The placement</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Engineering support for technical education.</h2></div>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground"><p>At Festo Pte Ltd, I support the team looking after the MPS, CP Lab and CP Factory learning systems. These systems are used to demonstrate and teach industrial automation concepts.</p><p>My mechatronics background gave me a foundation in mechanical systems, sensors and control. The internship has let me apply that knowledge in practical work while learning unfamiliar areas, particularly PLC programming and troubleshooting.</p></div>
        </section>

        <section id="work" className="scroll-mt-24 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">02 / Work log</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Ten weeks of hands-on work.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {work.map((item,i) => { const Icon=item.icon; return <article key={item.title} className="rounded-2xl border border-border bg-card p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">{String(i+1).padStart(2,"0")} / {item.period}</span><Icon className="h-5 w-5 text-primary"/></div><h3 className="mt-7 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p></article>; })}
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">03 / Contributions</p>
            <div className="mt-4 grid gap-8 md:grid-cols-[0.8fr_1.2fr]"><div><h2 className="text-3xl font-semibold tracking-tight">Keeping equipment ready for learning.</h2><p className="mt-4 text-sm leading-7 text-muted-foreground">Maintenance, testing and clear documentation all contribute to making the learning systems more reliable and easier to use.</p></div><div className="divide-y divide-border">{results.map(([a,b])=><div key={a} className="flex gap-3 py-4 first:pt-0 last:pb-0"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary"/><div><p className="text-sm font-medium">{a}</p><p className="mt-1 text-sm text-muted-foreground">{b}</p></div></div>)}</div></div>
          </div>
        </section>

        <section className="py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">04 / Learning & reflection</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">A better process matters as much as the fix.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-muted/40 p-6"><h3 className="font-semibold">Troubleshoot systematically</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Isolate faults one part at a time and check simple causes before assuming a major failure.</p></div>
            <div className="rounded-2xl bg-muted/40 p-6"><h3 className="font-semibold">Work safely</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Prioritise safe steps such as isolating power and releasing pressure before maintenance.</p></div>
            <div className="rounded-2xl bg-muted/40 p-6"><h3 className="font-semibold">Document for the reader</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Use clear steps, consistent names and checklists so another person can repeat the task.</p></div>
          </div>
          <div className="mt-6 rounded-2xl border border-border p-6"><div className="flex items-center gap-2 font-semibold"><Cpu className="h-4 w-4 text-primary"/> Current development area: PLC programming</div><p className="mt-3 text-sm leading-7 text-muted-foreground">PLC programming is less familiar to me than the mechanical work. I am working on my confidence with ladder logic, understanding how inputs and outputs control equipment, and troubleshooting more independently.</p></div>
        </section>

        <section id="next" className="scroll-mt-24 py-12">
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><Clock3 className="h-4 w-4"/> 05 / The second half</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Still in progress.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">The remaining twelve weeks are an opportunity to close open tasks, strengthen my technical confidence and take on new work with a more structured approach.</p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">{["Reconnect the iDrill signal connection", "Complete the belt replacement procedure and other SOPs", "Practise PLC ladder logic, I/O and troubleshooting"].map((t,i)=><div key={t} className="rounded-xl border border-border bg-background/70 p-4"><span className="text-xs font-mono text-primary">NEXT 0{i+1}</span><p className="mt-3 text-sm leading-6">{t}</p></div>)}</div>
            <p className="mt-7 text-sm text-muted-foreground">This page is a midpoint snapshot and will be updated as the internship progresses.</p>
          </div>
        </section>
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground"><span>Internship midpoint · Festo Pte Ltd</span><Link href="/" className="inline-flex items-center gap-2 hover:text-foreground">Back to main portfolio <ArrowUpRight className="h-4 w-4"/></Link></footer>
      </div>
    </main>
  );
}
