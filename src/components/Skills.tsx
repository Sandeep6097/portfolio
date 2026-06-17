"use client";

import React, { useState } from "react";
import { Terminal, Database, ShieldCheck, Cpu } from "lucide-react";

export default function Skills() {
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks & Frontend" },
    { id: "databases", name: "Databases & Tools" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = [
    // Languages
    { name: "PHP", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "JavaScript", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "Python", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, status: "Proficient" },
    { name: "Core Java", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, status: "Proficient" },
    { name: "C / C++", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, status: "Prior Exposure" },
    { name: "HTML5 & CSS3", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },

    // Frameworks & Frontend
    { name: "Laravel", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "CodeIgniter", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, status: "Proficient" },
    { name: "React", category: "frameworks", icon: <Cpu className="w-4 h-4 text-accent-gold animate-pulse" />, status: "Learning" },
    { name: "Next.js", category: "frameworks", icon: <Cpu className="w-4 h-4 text-accent-gold animate-pulse" />, status: "Learning" },
    { name: "jQuery & Ajax", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "Bootstrap", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },

    // Databases & Tools
    { name: "MySQL / SQL", category: "databases", icon: <Database className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "MongoDB", category: "databases", icon: <Database className="w-4 h-4 text-accent-gold" />, status: "Proficient" },
    { name: "PHPMyAdmin", category: "databases", icon: <Database className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "Git", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, status: "Core Expertise" },
    { name: "Postman", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, status: "Proficient" },
    { name: "cPanel & Deployments", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, status: "Proficient" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Core Expertise":
        return "bg-primary-green/10 text-primary-green border-primary-green/20 dark:bg-primary-green/20 dark:border-primary-green/30";
      case "Proficient":
        return "bg-accent-gold/15 text-accent-gold border-accent-gold/25";
      case "Learning":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20 dark:text-amber-400";
      default:
        return "bg-card-border/40 text-text-muted border-card-border/60";
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-card-bg/30">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            Technical <span className="text-gradient-green-gold">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            My Toolbox & Competencies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary-green text-white dark:text-background border-primary-green shadow-md scale-105"
                  : "bg-card-bg text-foreground/80 border-card-border hover:border-primary-green/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-card-border bg-card-bg hover:border-primary-green/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <div className="p-3 rounded-lg bg-card-border/30 text-foreground">
                {skill.icon}
              </div>

              <div className="space-y-2 w-full">
                <p className="font-bold text-xs xs:text-sm text-foreground/90 font-sans truncate">
                  {skill.name}
                </p>
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusStyle(skill.status)}`}>
                  {skill.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
