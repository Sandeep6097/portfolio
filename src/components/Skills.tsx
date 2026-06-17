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
    { name: "PHP", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, level: 90 },
    { name: "JavaScript", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, level: 85 },
    { name: "Python", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, level: 70 },
    { name: "Core Java", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, level: 65 },
    { name: "C / C++", category: "languages", icon: <Terminal className="w-4 h-4 text-accent-gold" />, level: 60 },
    { name: "HTML5 & CSS3", category: "languages", icon: <Terminal className="w-4 h-4 text-emerald-500" />, level: 90 },

    // Frameworks & Frontend
    { name: "Laravel", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, level: 92 },
    { name: "CodeIgniter", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, level: 80 },
    { name: "React (Learning)", category: "frameworks", icon: <Cpu className="w-4 h-4 text-accent-gold animate-pulse" />, level: 65 },
    { name: "Next.js (Learning)", category: "frameworks", icon: <Cpu className="w-4 h-4 text-accent-gold animate-pulse" />, level: 60 },
    { name: "jQuery & Ajax", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, level: 88 },
    { name: "Bootstrap", category: "frameworks", icon: <Cpu className="w-4 h-4 text-emerald-500" />, level: 85 },

    // Databases & Tools
    { name: "MySQL / SQL", category: "databases", icon: <Database className="w-4 h-4 text-emerald-500" />, level: 88 },
    { name: "MongoDB", category: "databases", icon: <Database className="w-4 h-4 text-accent-gold" />, level: 65 },
    { name: "PHPMyAdmin", category: "databases", icon: <Database className="w-4 h-4 text-emerald-500" />, level: 90 },
    { name: "Git", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, level: 85 },
    { name: "Postman", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, level: 80 },
    { name: "cPanel & Deployments", category: "databases", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, level: 75 },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl border border-card-border bg-card-bg hover:border-primary-green/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-lg bg-card-border/30">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-sm text-foreground/90 font-sans">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-primary-green/90">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-card-border/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-green to-accent-gold rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
