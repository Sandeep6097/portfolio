import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import LearningAI from "@/components/LearningAI";
import Contact from "@/components/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <LearningAI />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-card-border bg-card-bg/50">
        <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center space-x-2 text-primary-green">
            <Terminal className="w-5 h-5 text-accent-gold" />
            <span className="font-bold text-sm tracking-tight font-sans text-foreground/90">
              Sandeep<span className="text-accent-gold">.dev</span>
            </span>
          </div>

          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Sandeep Choudhary. All rights reserved.
          </p>

          <p className="text-xs text-text-muted">
            Built with Next.js, React, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
