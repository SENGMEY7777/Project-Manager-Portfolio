"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, GraduationCap, Wrench, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-sidebar border-r border-sidebar-border flex-col items-center py-8 z-50">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 px-6">
          <div className="relative w-32 h-32 mb-4">
            <div className="absolute inset-0 rounded-full bg-sidebar-primary/20" />
            <div className="absolute inset-1 rounded-full bg-sidebar overflow-hidden border-2 border-sidebar-primary">
              <Image
                src="/profile2.jpg"
                alt="Vann Sengmey"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-sidebar-foreground mb-1">Vann Sengmey</h2>
          <p className="text-sm text-sidebar-foreground/70 text-center">Aspiring IT Professional</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full px-4 gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left w-full",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                )}
                aria-label={item.name}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 pt-6 border-t border-sidebar-border w-full">
          <p className="text-xs text-sidebar-foreground/50 text-center">
            © 2025 Vann Sengmey
          </p>
        </div>
      </nav>

      {/* Mobile Header Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/profile.jpg"
                alt="Vann Sengmey"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-foreground">Vann Sengmey</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
