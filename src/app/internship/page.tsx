import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Package, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Learning {
  title: string;
  detail: string;
}

interface Internship {
  company: string;
  role: string;
  period: string;
  summary: string;
  icon: LucideIcon;
  skills: string[];
  learnings: Learning[];
}

const internships: Internship[] = [
  {
    company: "Festo Pte Ltd",
    role: "Didactic Intern",
    period: "2026 — 2027",
    summary:
      "Current internship on Festo Didactic training systems. Day to day work is around 3D modeling and CIROS Studio for industrial automation labs.",
    icon: Cog,
    skills: ["CIROS Studio", "3D modeling", "Didactic systems", "Industrial automation"],
    learnings: [
      {
        title: "CIROS Studio",
        detail:
          "Building and walking through virtual automation scenes so hardware trainers and software match what students actually see on the lab floor.",
      },
      {
        title: "3D modeling",
        detail:
          "Modeling parts and layouts for training setups, with an eye on how a station is assembled and how it will be used.",
      },
      {
        title: "Didactic engineering",
        detail:
          "Learning how training systems are designed so people can pick up PLC, pneumatics, and mechatronics without guessing the intent of the kit.",
      },
    ],
  },
  {
    company: "Mindox Techno",
    role: "Intern",
    period: "Apr 2024 — Aug 2024",
    summary:
      "ITE diploma internship. Work sat between logistics, assembly, and Microsoft Office so production and paperwork stayed in sync.",
    icon: Package,
    skills: ["Logistics", "Assembly", "Microsoft Office", "Operations"],
    learnings: [
      {
        title: "Logistics",
        detail:
          "Tracking parts, handling inbound and outbound flow, and seeing how delays on the floor show up in the rest of the process.",
      },
      {
        title: "Assembly",
        detail:
          "Putting units together to spec, checking fit, and understanding why a small assembly mistake becomes a quality issue later.",
      },
      {
        title: "Microsoft software",
        detail:
          "Using Excel and the rest of the Office suite to log work, keep records, and share status without losing the thread.",
      },
    ],
  },
];

export default function InternshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">internship</h1>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            What I picked up on internship — Festo Didactic now, and Mindox
            Techno during my ITE diploma. Mechatronics on the floor, not only
            in class.
          </p>

          <div className="space-y-8">
            {internships.map((internship) => (
              <Card
                key={internship.company}
                className="border-border/50 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6 md:p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <internship.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h2 className="text-2xl font-semibold">
                          {internship.company}
                        </h2>
                        <span className="text-sm text-muted-foreground">
                          {internship.period}
                        </span>
                      </div>
                      <p className="text-primary/80 mt-1">{internship.role}</p>
                      <p className="text-sm text-foreground/80 mt-3">
                        {internship.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-4">
                    {internship.learnings.map((item) => (
                      <li
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur mt-8">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    How this sits with school
                  </h2>
                  <p className="text-sm text-foreground/80 mb-4">
                    Diploma in Mechatronics &amp; Robotics (ITE, then Ngee Ann
                    Polytechnic). Internship is where those modules meet real
                    stations, parts, and software.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mechatronics",
                      "Robotics",
                      "PLC",
                      "3D CAD",
                      "Assembly",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-muted/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
