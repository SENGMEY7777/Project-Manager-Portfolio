import { Code2, Lightbulb, Users, Briefcase } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Learning" },
  { value: "10+", label: "Projects Done" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const highlights = [
  {
    icon: Code2,
    title: "Technology Explorer",
    description:
      "Passionate about exploring new technologies and staying updated with the latest trends in IT.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description:
      "Committed to self-improvement and constantly expanding my knowledge through projects.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Strong communication skills with the ability to collaborate effectively in team environments.",
  },
  {
    icon: Briefcase,
    title: "Project Builder",
    description:
      "Hands-on experience building practical web applications using modern technologies.",
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
              {"I'm"} <span className="text-primary">Vann Sengmey</span>, an
              Aspiring IT Professional
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web.
              Currently in my third year at The University of Cambodia, I
              dedicate my time to learning new technologies and building
              practical projects that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology started with curiosity about how things
              work on the web. This curiosity has evolved into a deep passion
              for creating digital experiences that are both functional and
              visually appealing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When {"I'm"} not coding, you can find me exploring new
              technologies, reading about the latest industry trends, or working
              on personal projects to sharpen my skills.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-colors"
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
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
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
