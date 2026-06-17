"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Avoid hydration mismatch by waiting until client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "AI & Learning", href: "#learning-ai" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism shadow-md transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 text-primary-green transition-transform hover:scale-105">
          <Terminal className="w-6 h-6 stroke-[2.5] text-accent-gold" />
          <span className="font-bold text-lg xs:text-xl tracking-tight font-sans">
            Sandeep<span className="text-accent-gold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm tracking-wide text-foreground/80 hover:text-primary-green dark:hover:text-primary-green transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggler */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-card-border hover:bg-card-border/20 text-foreground transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent-gold animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-primary-green" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navbar Elements */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Theme Toggler for Mobile */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-card-border text-foreground transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-accent-gold" />
              ) : (
                <Moon className="w-5 h-5 text-primary-green" />
              )}
            </button>
          )}

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-foreground hover:bg-card-border/20 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[65px] left-0 right-0 glassmorphism border-t border-glass-border shadow-lg animate-fade-in-up py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium py-2 text-foreground/90 hover:text-primary-green transition-colors border-b border-card-border/30 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
