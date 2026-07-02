"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Backend", "Design"];

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
    technologies: ["Vue.js", "Node.js", "MongoDB"],
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
    technologies: ["Next.js", "SpringBoot", "MyQl"],
    category: "Design",
    demo: "https://www.figma.com/design/whXPb23YVk3aIZ4FP2buIm/Document---Media-Portal?node-id=346-4911&t=rERQ0XJyIYCsQioz-0",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

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
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-lg text-sm font-medium transition",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="portfolio-card group bg-card border border-border rounded-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary text-xs rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
