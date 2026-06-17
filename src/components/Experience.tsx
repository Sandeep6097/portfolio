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

  // Keep track of which experiences are expanded (all expanded by default)
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 xs:px-6 md:px-8">
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

        {/* Timeline Container */}
        <div className="relative border-l border-card-border/70 dark:border-card-border ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Icon Node */}
              <div className="absolute -left-[53px] md:-left-[69px] top-1.5 p-2 rounded-full border border-card-border bg-card-bg text-primary-green group-hover:text-accent-gold group-hover:border-accent-gold transition-all duration-300 shadow-md">
                <Briefcase className="w-5 h-5 stroke-[2]" />
              </div>

              {/* Card Container */}
              <div className="glassmorphism border border-glass-border rounded-2xl p-6 md:p-8 hover:shadow-xl dark:hover:shadow-primary-green/5 transition-all duration-300">
                {/* Heading details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-card-border/30">
                  <div className="space-y-1.5">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground/95 font-sans leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary-green">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-text-muted font-medium">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-accent-gold" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-accent-gold" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Collapsible toggle for details */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-text-muted hover:text-primary-green transition-colors cursor-pointer"
                  >
                    <span>{expanded[idx] ? "Hide Details" : "Show Details"}</span>
                    {expanded[idx] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Bullets lists */}
                {expanded[idx] && (
                  <ul className="mt-4 space-y-3 pl-5 list-disc text-sm text-text-muted leading-relaxed transition-all duration-500 animate-fade-in-up">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="hover:text-foreground/90 transition-colors">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Badges footer */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-md border border-card-border/50 bg-card-bg/60 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
