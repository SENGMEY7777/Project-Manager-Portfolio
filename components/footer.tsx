import { Github, Linkedin, Facebook, Mail, Heart } from "lucide-react";

const socialLinks = [
   { icon: Github, label: "GitHub", href: "https://github.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/17xNCmvNwc/?mibextid=wwXIfr" },
  { icon: Mail, label: "Email", href: "mailto:vannsengmey748@email.com" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold text-primary">
            VS
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Vann Sengmey
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
