"use client";

import React from "react";
import { Sparkles, GraduationCap, BrainCircuit, ArrowRight, Lightbulb, Code2 } from "lucide-react";

export default function LearningAI() {
  const learningFocus = [
    {
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      title: "React & Next.js App Router",
      bullets: [
        "React Server Components (RSC) vs Client Components architecture.",
        "Static Site Generation (SSG) & Incremental Static Regeneration (ISR).",
        "Next.js API Routing, dynamic layouts, and metadata engines.",
      ],
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-accent-gold" />,
      title: "AI Integrations & LLMs",
      bullets: [
        "Connecting frontend interfaces to Large Language Models (Gemini APIs, OpenAI).",
        "Constructing robust, custom system prompts and structuring JSON returns.",
        "Developing agentic assistants for automation workflows.",
      ],
    },
  ];

  return (
    <section id="learning-ai" className="py-20 bg-card-bg/50 border-y border-card-border/50 relative overflow-hidden">
      {/* Decorative Blur Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-green/5 dark:bg-primary-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            AI & Modern <span className="text-gradient-green-gold">Learning Zone</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            Expanding Capabilities & Future Tech
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent-gold/10 text-accent-gold px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Skills Evolution</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground/95 leading-tight font-sans">
              Expanding from Laravel to Next.js, React, and Agentic AI
            </h3>

            <p className="text-base text-text-muted leading-relaxed">
              With a solid foundation in backend database structures and MVC patterns using Laravel and CodeIgniter, I am proactively evolving my professional capabilities.
            </p>

            <p className="text-base text-text-muted leading-relaxed">
              I am building modern, interactive frontends using <strong>React</strong> and <strong>Next.js</strong>, applying Tailwind CSS for clean styling, and connecting these structures to LLM APIs to build intelligent web applications.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center text-sm font-bold text-primary-green hover:text-primary-green-hover transition-colors group"
              >
                <span>View project integrations</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-6">
            {learningFocus.map((item, index) => (
              <div
                key={index}
                className="glassmorphism border border-glass-border p-6 rounded-2xl shadow-md space-y-4 hover:shadow-lg hover:border-primary-green/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-card-border/30 dark:bg-card-border/10 rounded-xl group-hover:bg-primary-green/10 group-hover:text-primary-green transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-base text-foreground/90 font-sans">
                    {item.title}
                  </h4>
                </div>

                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-xs text-text-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2.5 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
