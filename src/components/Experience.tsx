"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Executive (Web PHP Developer)",
      company: "Internet and Mobile Association of India",
      location: "Mumbai, India",
      duration: "April 2024 – Present",
      bullets: [
        "Specializing in dynamic web platforms and client submission form workflows.",
        "Engineered Laravel-based dashboards with advanced configurations including Excel/CSV data export, dynamic QR code generators, and administrative access control systems.",
        "Built secure, scalable jury scoring and screening platforms using Laravel and CodeIgniter, facilitating fast and objective evaluations.",
        "Integrated secure CCAvenue payment gateway endpoints (UAT and Production environments) supporting coupon codes and real-time transaction validations.",
        "Automated transactional email triggers, payment confirmations, and on-site check-in ticket delivery.",
      ],
      tags: ["PHP", "Laravel", "CodeIgniter", "CCAvenue", "MySQL", "QR Codes", "Git"],
    },
    {
      role: "PHP Developer Intern",
      company: "Impact Guru",
      location: "Mumbai, India",
      duration: "November 2023 – February 2024",
      bullets: [
        "Worked in a fast-paced product-based environment developing features for medical crowdfunding modules.",
        "Built and optimized API integrations serving mobile applications, improving overall application latency and connection reliability.",
        "Contributed to the development of a claim assistance portal, increasing administrative verification throughput.",
        "Collaborated with QA engineers to diagnose code defects, debug database schema locks, and push hotfixes.",
      ],
      tags: ["PHP", "jQuery", "REST APIs", "MySQL", "Postman", "Git"],
    },
  ];

  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" className="py-20 relative bg-card-bg/10">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            Work <span className="text-gradient-green-gold">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            My Professional Timeline
          </p>
        </div>

        {/* Mockup Timeline Structure */}
        <div className="relative space-y-10 md:space-y-0">
          {/* Vertical Center Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-card-border/80 dark:bg-card-border -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative grid grid-cols-1 md:grid-cols-11 gap-4 md:gap-8 items-start group">
              {/* Left Column (Dates & Location) */}
              <div className="md:col-span-5 md:text-right pl-8 md:pl-0 space-y-1 md:py-2">
                <span className="text-xs font-mono font-bold text-accent-gold uppercase tracking-wider block">
                  {exp.duration}
                </span>
                <p className="text-xs font-semibold text-text-muted flex items-center md:justify-end">
                  <MapPin className="w-3.5 h-3.5 mr-1 md:mr-0 md:ml-1 text-primary-green flex-shrink-0" />
                  {exp.location}
                </p>
              </div>

              {/* Middle Column (Visual Node) */}
              <div className="absolute left-4 md:left-1/2 top-1.5 md:col-span-1 flex items-center justify-center -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-card-bg border-4 border-primary-green group-hover:border-accent-gold transition-colors duration-300 shadow-md animate-glow-pulse" />
              </div>

              {/* Right Column (Role & Details Card) */}
              <div className="md:col-span-5 pl-8 md:pl-0">
                <div className="glassmorphism border border-glass-border rounded-2xl p-5 xs:p-6 hover:shadow-xl dark:hover:shadow-primary-green/5 transition-all duration-300 relative">
                  <h3 className="text-lg xs:text-xl font-extrabold text-foreground/95 font-sans leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-bold text-primary-green mt-1">
                    {exp.company}
                  </p>

                  {/* Collapse Toggle */}
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="inline-flex items-center space-x-1 text-[11px] font-semibold text-text-muted hover:text-primary-green transition-colors cursor-pointer"
                    >
                      <span>{expanded[idx] ? "Hide Details" : "Show Details"}</span>
                      {expanded[idx] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Description bullets */}
                  {expanded[idx] && (
                    <ul className="mt-4 space-y-2.5 pl-4 list-disc text-xs text-text-muted leading-relaxed transition-all duration-300 animate-fade-in-up">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="hover:text-foreground/90 transition-colors">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Pill Badges */}
                  <div className="mt-5 pt-4 border-t border-card-border/30 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded bg-background/80 border border-card-border/40 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
