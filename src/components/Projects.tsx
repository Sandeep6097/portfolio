"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, CreditCard, Users, Star, Award, Sparkles } from "lucide-react";

export default function Projects() {
  const projectsData = [
    {
      id: "ccavenue",
      title: "CCAvenue Payment Gateway Integration",
      icon: <CreditCard className="w-6 h-6 text-accent-gold" />,
      tagline: "Transactional automation & dynamic ticket verification",
      bullets: [
        "Integrated CCAvenue gateway (UAT/Production stages) to enable secure online registrations with instant verification.",
        "Programmed a dynamic coupon schema with real-time validation and custom discounts.",
        "Generated unique validation QR codes embedded into automated client check-in confirmation emails.",
        "Maintained structured schemas to optimize high-volume database reads during registration peaks.",
      ],
      tech: ["Laravel", "CCAvenue", "QR Codes", "MySQL", "Postman"],
      highlight: true,
    },
    {
      id: "recruitment",
      title: "Recruitment Form & Backend Access System",
      icon: <Users className="w-6 h-6 text-primary-green" />,
      tagline: "Secure evaluation portal & candidate manager",
      bullets: [
        "Engineered custom forms and automated reviewer scoring boards with precise role checks.",
        "Provided advanced Excel/CSV data exports and comprehensive monitoring charts for recruitment administrators.",
        "Optimized processing layers to secure candidate details and credentials.",
      ],
      tech: ["CodeIgniter", "MySQL", "Excel Export", "Bootstrap"],
      highlight: false,
    },
    {
      id: "jury",
      title: "Jury Scoring System - Waves Reelmaking",
      icon: <Star className="w-6 h-6 text-accent-gold" />,
      tagline: "Jury panel and live entry voting backend",
      bullets: [
        "Structured a secure role-based dashboard for single or bulk additions of academic judges.",
        "Designed short reel assignment logic matching candidates to jury fields under a unified rating portal.",
        "Implemented real-time scoring trackers and dynamic shortlisting algorithms.",
      ],
      tech: ["Laravel", "CodeIgniter", "SweetAlerts", "Ajax"],
      highlight: false,
    },
    {
      id: "awards",
      title: "Awards Backend Dashboard System",
      icon: <Award className="w-6 h-6 text-primary-green" />,
      tagline: "Multi-user entry tracking & event administration",
      bullets: [
        "Developed custom dashboard with multi-role access controls for participants and awards teams.",
        "Programmed dual scoring logic (normal and special weights) tracking cumulative scoring results.",
        "Aggregated transaction receipts, coupon redemptions, and screening statuses inside admin panels.",
      ],
      tech: ["Laravel", "CCAvenue", "Admin Panels", "Select2"],
      highlight: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card-bg/30 relative">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            Core <span className="text-gradient-green-gold">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            My Built Solutions & Integrations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between p-6 xs:p-8 rounded-2xl border transition-all duration-300 ${
                project.highlight
                  ? "border-primary-green/30 dark:border-primary-green/20 bg-primary-green/[0.02] dark:bg-primary-green/[0.01] shadow-lg"
                  : "border-card-border bg-card-bg"
              } hover:border-primary-green hover:shadow-2xl dark:hover:shadow-primary-green/5 hover:-translate-y-1`}
            >
              {/* Top Accent line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary-green to-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-card-border/30 dark:bg-card-border/10 rounded-xl group-hover:bg-primary-green/10 group-hover:text-primary-green transition-all duration-300">
                    {project.icon}
                  </div>
                  {project.highlight && (
                    <span className="flex items-center space-x-1 text-[10px] font-bold tracking-widest uppercase bg-accent-gold/15 text-accent-gold px-2.5 py-1 rounded-full border border-accent-gold/25">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-xl xs:text-2xl font-bold font-sans text-foreground/95 leading-snug group-hover:text-primary-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-text-muted italic tracking-wide">
                    {project.tagline}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs text-text-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary-green mr-2 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / Tech list */}
              <div className="pt-6 mt-6 border-t border-card-border/50 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-background/80 border border-card-border/40 text-foreground/70"
                    >
                      {t}
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
