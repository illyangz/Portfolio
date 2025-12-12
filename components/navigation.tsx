"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (pathname === "/") {
      // If we're on homepage, just scroll to the section (no hash in URL)
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, use full page navigation to ensure hash is preserved
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-6 text-sm">
          <Link
            href="/#work"
            onClick={(e) => handleNavClick(e, "work")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            work
          </Link>
          <Link
            href="/#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            projects
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            contact
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <a
            href="https://github.com/illyangz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hassan-mango/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:hmango77@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
