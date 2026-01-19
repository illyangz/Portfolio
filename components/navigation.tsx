"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PixelTransition } from "./pixel-transition";

export function Navigation() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTheme, setTargetTheme] = useState<"light" | "dark">("dark");
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
    if (isTransitioning) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTargetTheme(newTheme);
    setIsTransitioning(true);
  };

  const handleTransitionMidpoint = () => {
    // Switch theme when pixels fully cover the screen
    setTheme(targetTheme);
    document.documentElement.classList.toggle("dark", targetTheme === "dark");
    localStorage.setItem("theme", targetTheme);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    // Special case for home - scroll to top or navigate to /
    if (sectionId === "top") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
      return;
    }

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

  const navLinks = [
    { href: "/", label: "home", sectionId: "top" },
    { href: "/#work", label: "work", sectionId: "work" },
    { href: "/#projects", label: "projects", sectionId: "projects" },
    { href: "/#contact", label: "contact", sectionId: "contact" },
    { href: "/music", label: "music", sectionId: null },
  ];

  const socialLinks = [
    { href: "https://github.com/illyangz", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/hassan-mango/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:hmango77@gmail.com", icon: Mail, label: "Email" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Mobile burger menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={
                link.sectionId
                  ? (e) => handleNavClick(e, link.sectionId)
                  : undefined
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
              style={{ top: "57px" }}
            />

            {/* Slide-out menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed left-0 top-[57px] h-[calc(100vh-57px)] w-64 bg-background border-r border-border md:hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.sectionId) {
                          handleNavClick(e, link.sectionId);
                        }
                        setIsMenuOpen(false);
                      }}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PixelTransition
        isAnimating={isTransitioning}
        onMidpoint={handleTransitionMidpoint}
        onComplete={handleTransitionComplete}
        targetTheme={targetTheme}
        gridSize={7}
        duration={0.4}
      />
    </nav>
  );
}
