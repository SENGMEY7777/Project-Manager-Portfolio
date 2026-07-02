import { Code2, Database, Sparkles } from "lucide-react";

const focusAreas = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete web solutions with strong frontend experiences and reliable backend logic.",
    icon: Code2,
  },
  {
    title: "Database & APIs",
    description:
      "Improving data handling, API design, and integration for practical application development.",
    icon: Database,
  },
  {
    title: "Continuous Growth",
    description:
      "Strengthening technical skills through projects, self-learning, and real-world problem solving.",
    icon: Sparkles,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Development Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Where I am growing right now
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="portfolio-card rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-card to-secondary/40 p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Professional direction
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">
            Building practical skills through focused learning and hands-on projects
          </h3>
        </div>
      </div>
    </section>
  );
}
