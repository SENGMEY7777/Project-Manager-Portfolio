import { GraduationCap, Calendar, BookOpen, Award, Medal, Clock, Users } from "lucide-react";

const education = [
  {
    institution: "The University of Cambodia",
    degree: "Bachelor of Arts",
    field: "Information Technology",
    year: "Year 4 (Current)",
    period: "2023 - Present",
    highlights: [
      "Focusing on Information Technology and Computer Science",
      "Active participation in tech workshops and seminars",
      "Building practical projects alongside coursework",
      "Developing strong foundation in programming",
    ],
  },
];

const scholarship = {
  institution: "ANT Technology Training Center",
  role: "Scholarship Trainee",
  duration: "16 June 2025 – 17 July 2026",
  schedule: "Monday – Friday",
  hours: "700 hours",
  funding: "Sponsored by Ministry of Post and Telecommunications and CBRD Fund",
  courses: [
    {
      label: "Frontend",
      items: "HTML, CSS, Bootstrap, JavaScript, Vue.js, API Consumption",
    },
    {
      label: "Backend",
      items: "Node.js, Express.js, API Design, JWT Authentication, MVC Architecture",
    },
    {
      label: "Extra Courses",
      items: "C++, UX/UI Advanced Concepts, Cyber Security Fundamentals",
    },
    {
      label: "Tools",
      items: "Git, GitHub, Version Control, Team Collaboration",
    },
    {
      label: "Methodology",
      items: "Software Development Life Cycle (SDLC)",
    },
  ],
};

const achievements = [
  {
    icon: BookOpen,
    title: "Self-Learning",
    description: "Completed online courses in web development and programming",
  },
  {
    icon: Award,
    title: "Project Work",
    description: "Built multiple personal projects using modern technologies",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column: University + Scholarship */}
          <div className="lg:col-span-2 space-y-8">
            {/* University Card */}
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="portfolio-card p-8 bg-card border border-border rounded-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.institution}
                        </h3>
                        <p className="text-primary font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground text-sm">
                          {edu.field}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary text-sm font-medium">
                        {edu.year}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Scholarship Card */}
            <div className="portfolio-card p-8 bg-card border border-border rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Medal className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {scholarship.institution}
                      </h3>
                      <p className="text-primary font-semibold mt-0.5">
                        {scholarship.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">
                        {scholarship.duration}
                      </span>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-sm">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      <span className="text-primary font-medium">
                        {scholarship.hours}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-sm">
                      <Users className="h-3.5 w-3.5 text-primary" />
                      <span className="text-primary font-medium">
                        {scholarship.schedule}
                      </span>
                    </div>
                  </div>

                  {/* Funding */}
                  <div className="mb-5 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold text-primary">Funding: </span>
                      {scholarship.funding}
                    </p>
                  </div>

                  {/* Course label */}
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Web Development Course:
                  </p>

                  {/* Course items */}
                  <ul className="space-y-2.5">
                    {scholarship.courses.map((course) => (
                      <li
                        key={course.label}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>
                          <span className="font-semibold text-foreground">
                            {course.label}:{" "}
                          </span>
                          {course.items}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Achievements */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Professional Growth
            </h3>
            {achievements.map((item) => (
              <div
                key={item.title}
                className="portfolio-card p-6 bg-card border border-border rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
