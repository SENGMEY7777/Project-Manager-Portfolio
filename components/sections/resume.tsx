"use client";

import { ArrowRight, BadgeCheck, BriefcaseBusiness, Code2, GraduationCap, Layers3 } from "lucide-react";

const highlights = [
  {
    title: "Education",
    description: "Third-year Information Technology student at The University of Cambodia with a strong academic foundation in computing and digital systems.",
    icon: GraduationCap,
  },
  {
    title: "Development Focus",
    description: "Specialized in responsive web development, UI implementation, and building practical user-facing applications.",
    icon: Code2,
  },
  {
    title: "Project Delivery",
    description: "Experience translating ideas into polished, functional solutions with attention to usability, structure, and maintainability.",
    icon: BriefcaseBusiness,
  },
];

const competencies = [
  "Full-Stack Development",
  "Backend Development",
  "Responsive UI Design",
  "Modern Web Technologies",
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
];

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Resume Snapshot
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Professional profile and core strengths
            </h2>
          </div>
          <a
            href="/vann-sengmey-resume.txt"
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Download Resume
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="portfolio-card rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Summary
                </p>
                <h3 className="text-2xl font-semibold text-foreground">
                  Full-stack developer & platform engineer
                </h3>
              </div>
            </div>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                I study developer tools and end-to-end web applications to understand and improve operational efficiency and developer productivity. I graduated from the University of Cambodia (UC) and bring over 4 years of industry experience across startups and large-scale enterprises, delivering maintainable systems, APIs, and user-focused interfaces.
              </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {competencies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-card rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-secondary/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Career Direction
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">
              Building toward impactful technical roles
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Interested in opportunities where strong development fundamentals, design awareness, backend understanding, and collaborative execution can contribute to meaningful digital products.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Web application development",
                "User-focused product design",
                "Reliable, maintainable code",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/70 px-4 py-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="portfolio-card rounded-2xl border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
