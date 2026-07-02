"use client";

import { Github, Linkedin, Facebook, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "Telegram", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/17xNCmvNwc/?mibextid=wwXIfr" },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary blur-3xl" />
      </div>
      <div className="hero-gradient" />

      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 portfolio-card">
                <Image
                  src="/banner.jpg"
                  alt="Vann Sengmey"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-full h-full border border-primary/10 rounded-2xl -z-20" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-semibold tracking-wider uppercase text-sm">
                Full-Stack Developer • IT Student
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {"Vann Sengmey building"}{" "}
                <span className="text-primary">modern web experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Frontend • Backend • Database Design • APIs
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              I am a full-stack developer in training focused on building responsive web applications with strong frontend experiences, reliable backend logic, and efficient database integration. I enjoy turning complex requirements into practical digital products.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-transparent"
              >
                Let&apos;s Connect
              </Button>
              <a
                href="/vann-sengmey-resume.txt"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-95 transition-all duration-200"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
