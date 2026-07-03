"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Wrench,
  FolderOpen,
  Mail,
  Moon,
  Sun,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Wrench },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Resume", href: "#resume", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Load initial collapse state
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved === "true") {
      setIsCollapsed(true);
      document.body.setAttribute("data-sidebar-collapsed", "true");
    } else {
      document.body.setAttribute("data-sidebar-collapsed", "false");
    }

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

  const toggleCollapse = () => {
    const nextState = !isCollapsed;
    setIsCollapsed(nextState);
    localStorage.setItem("sidebar-collapsed", String(nextState));
    document.body.setAttribute("data-sidebar-collapsed", nextState ? "true" : "false");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav
        className={cn(
          "hidden lg:flex fixed left-0 top-0 bottom-0 bg-sidebar border-r border-sidebar-border flex-col items-center py-8 z-50 transition-all duration-300 ease-in-out",
          isCollapsed ? "w-20" : "w-72"
        )}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleCollapse}
          className="absolute top-8 -right-3 w-6 h-6 rounded-full bg-sidebar border border-sidebar-border text-sidebar-foreground flex items-center justify-center hover:bg-sidebar-accent hover:text-primary transition-colors cursor-pointer z-50 shadow-sm"
          aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </button>

        {/* Profile Section */}
        <div className={cn("flex flex-col items-center mb-6 px-4 w-full transition-all duration-300", isCollapsed ? "gap-2" : "gap-1")}>
          <div className={cn("relative transition-all duration-300 ease-in-out", isCollapsed ? "w-10 h-10 mb-2" : "w-32 h-32 mb-4")}>
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
          
          {!isCollapsed && (
            <div className="text-center overflow-hidden transition-all duration-300 animate-fadeIn">
              <h2 className="text-xl font-bold text-sidebar-foreground mb-1 whitespace-nowrap">
                Vann Sengmey
              </h2>
              <p className="text-sm text-sidebar-foreground/70 whitespace-nowrap">
                Aspiring IT Professional
              </p>
            </div>
          )}

          <button
            onClick={toggleTheme}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-sidebar-border/70 text-sm text-sidebar-foreground/80 transition-colors hover:border-primary hover:text-sidebar-foreground",
              isCollapsed ? "p-2 border-none mt-1" : "mt-4 px-3 py-2"
            )}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {!isCollapsed && <span>{mounted && theme === "dark" ? "Light mode" : "Dark mode"}</span>}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full px-3 gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left w-full cursor-pointer",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground dark:text-white"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent",
                  isCollapsed && "justify-center px-0"
                )}
                aria-label={item.name}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium whitespace-nowrap animate-fadeIn">{item.name}</span>}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 pt-6 border-t border-sidebar-border w-full">
          <p className="text-xs text-sidebar-foreground/50 text-center">
            {isCollapsed ? "©" : "© 2025 Vann Sengmey"}
          </p>
        </div>
      </nav>

      {/* Mobile Header Navigation */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 py-3">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src="/profile2.jpg"
                alt="Vann Sengmey"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-foreground">Vann Sengmey</span>
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity duration-300 bg-black/50 backdrop-blur-sm",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Sidebar */}
      <nav
        className={cn(
          "lg:hidden fixed top-0 bottom-0 left-0 w-72 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-8 z-50 transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6 px-6 w-full">
          <div className="relative w-28 h-28 mb-4">
            <div className="absolute inset-0 rounded-full bg-sidebar-primary/20" />
            <div className="absolute inset-1 rounded-full bg-sidebar overflow-hidden border-2 border-sidebar-primary">
              <Image
                src="/profile2.jpg"
                alt="Vann Sengmey"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-sidebar-foreground mb-1">Vann Sengmey</h2>
          <p className="text-sm text-sidebar-foreground/70 text-center mb-4">Aspiring IT Professional</p>
          
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-sidebar-border/70 px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:border-primary hover:text-sidebar-foreground"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{mounted && theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
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
                    ? "bg-sidebar-primary text-sidebar-primary-foreground dark:text-white"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                )}
                aria-label={item.name}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
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
    </>
  );
}
