import { Code2, Lightbulb, Users, Briefcase } from "lucide-react";

const stats = [
  { value: "3+", label: "Years of Growth" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Core Technologies" },
  { value: "100%", label: "Commitment" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Focused on building complete web solutions with responsive interfaces, backend logic, and connected data flow.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Approach challenges with analytical thinking, adaptability, and a strong desire to learn.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Communicate clearly and work effectively with teams to deliver dependable digital solutions.",
  },
  {
    icon: Briefcase,
    title: "Product Delivery",
    description:
      "Translate product ideas into practical web applications with attention to performance, reliability, and maintainability.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Know Me More
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About Content */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {"I'm"} <span className="text-primary">Vann Sengmey</span> — Full-stack developer & platform engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
                I study developer tooling and full-stack web applications to understand and improve operational workflows. My work covers frontend implementation, API design, and reliable backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I graduated from the University of Cambodia (UC) and have over 4 years of industry experience across agile startups and large-scale enterprises. I focus on clean architecture, maintainability, and delivering practical value.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="portfolio-card p-6 bg-card border border-border rounded-xl text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="portfolio-card group p-6 bg-card border border-border rounded-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
