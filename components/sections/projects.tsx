"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Backend", "Design"];

const categoryColorMap: Record<string, string> = {
  Web: "category-web",
  Backend: "category-backend",
  Design: "category-design",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A responsive commerce experience designed for intuitive product browsing, smooth cart interaction, and a streamlined checkout flow.",
    image:
      "/image.png",
    technologies: ["HTML", "CSS", "Javascript"],
    category: "Web",
    github: "https://github.com/Nara-7085/Cambo-Construction-",
    demo: "https://cambo-contruction.netlify.app/",
  },
  {
    title: "Smart Commerce Platform",
    description:
      "A full-stack commerce solution focused on reliable product workflows, clear user interaction, and a polished online shopping experience.",
    image:
      "/imag2.jpg",
    technologies: ["Vue.js", "JavaScript", "Node.js", "MongoDB"],
    category: "Web",
    github: "https://github.com/e-commerce-fullstack",
    demo: "https://e-smart-shop.vercel.app/",
  },
  {
    title: "Document Media Portal",
    description:
      "A content-focused portal designed to present information clearly with strong usability, accessible structure, and a modern interface.",
    image:
      "https://i.pinimg.com/1200x/51/87/d4/5187d40953f86b0a778716e1ff083e76.jpg",
    // technologies: ["Next.js", "SpringBoot", "MySQL"],
    category: "Design",
    demo: "https://www.figma.com/design/whXPb23YVk3aIZ4FP2buIm/Document---Media-Portal?node-id=346-4911&t=rERQ0XJyIYCsQioz-0",
  },
  {
    title: "CamboPhoneStore",
    description: "is an online e-commerce platform for selling mobile phones. It allows users to browse products, view details, and purchase phones through a simple and user-friendly interface, integrated with Bakong for secure digital payments.",
    image:
      "/cambophone.png",
    technologies: ["Node.js", "Tailwind CSS", "Next.js", "MySQL"],
    category: "Web",
    github: "https://github.com/SENGMEY7777/Backend-Phone-Store",
    demo: "https://cambo.phonestore.rith.codes/",
  },
  {
    title: "AlumniNet System",
    description: "this project contributors with scholarship MPTC/ANT and more projects done in class with teamwork (classmate)",
    image:
      "/alumni.png",
    technologies: ["Vue.js", "Node.js", "Express.js", "MySQL"],
    category: "Web",
    github: "https://github.com/Sourcedevkh/alumniNet-web",
    demo: "https://web.alumninet.linkpc.net/",
  },
  {
    title: "DevTech Journal",
    description: "this project contributors with scholarship MPTC/ANT and more projects done in class with teamwork (classmate).",
    image:
      "/devtech.png",
    technologies: ["Vue.js", "Node.js", "Express.js", "MySQL"],
    category: "Web",
    github: "https://github.com/DevTech-Journal/devtech-journal",
    demo: "https://devtech-journal.vercel.app/",
  },
  {
    title: "SourceDev",
    description: "is an open-source fullstack web application for managing and reviewing developer resources, featuring authentication, a dashboard, and a structured UI for a better user experience.",
    image:
      "/sourcedev_multi_device_mockup.png",
    technologies: ["Vue.js", "Node.js", "Express.js", "MySQL"],
    category: "Web",
    github: "https://github.com/khonchanphearaa/Sourcedev",
    demo: "https://sourcedev.vercel.app/",
  },
  {
    title: "Phone Store",
    description: "is an online e-commerce platform for selling mobile phones. It allows users to browse products, view details, and purchase phones through a simple and user-friendly interface, integrated with Bakong for secure digital payments.",
    category: "Backend",
    image:
      "/phone-store.png",
    technologies: ["Node.js", "Express.js", "JavaScript", "MySQL"],
    github: "https://github.com/SENGMEY7777/Backend-Phone-Store",
  }
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase text-sm tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Selected Work
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-md"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <article
              key={project.title}
              className="project-card group"
            >
              {/* Image */}
              <div className="project-card-image">
                {/* Category Ribbon */}
                <span
                  className={cn(
                    "project-card-category",
                    categoryColorMap[project.category]
                  )}
                >
                  {project.category}
                </span>

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />

                {/* Glassmorphism Overlay */}
                <div className="project-card-overlay">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-action bg-primary text-primary-foreground hover:bg-primary/90"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-action bg-foreground text-background hover:bg-foreground/90"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="project-card-tech px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              See More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
