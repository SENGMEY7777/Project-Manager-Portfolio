"use client";

import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 95 },
  {name: "Bootstrap", level: 90 },
  {name: "Tailwind CSS", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "Vue.js", level: 70 },
  {name: "Node.js & Express", level: 75 },
  { name: "Java", level: 65 },
  { name: "Spring Boot", level: 60 },
  { name: "UX/UI Design", level: 75 },
];

const tools = [
  "Spring Boot",
  "XAMPP",
  "Git",
  "VS Code",
  "Figma",
  "MySQL",
  "MongoDB",
  "Docker",
  "Node.js & Express",
  "Vue.js",
  "JavaScript",
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWidth(level), 200);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            What I Can Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="w-10 h-1 bg-primary rounded-full" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          {/* Tools & Soft Skills */}
          <div className="space-y-12">
            {/* Tools */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-10 h-1 bg-primary rounded-full" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="portfolio-card inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-10 h-1 bg-primary rounded-full" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border text-foreground text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
