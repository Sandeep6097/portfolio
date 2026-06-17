"use client";

import React from "react";
import { GraduationCap, Award, Target, Brain } from "lucide-react";

export default function About() {
  const qualities = [
    {
      icon: <Target className="w-6 h-6 text-accent-gold" />,
      title: "Goal-Driven Development",
      description: "Aiming to build scalable backend architectures and dynamic responsive user interfaces.",
    },
    {
      icon: <Brain className="w-6 h-6 text-primary-green" />,
      title: "Problem Solving",
      description: "Skilled in diagnosing system bugs, optimizing API pipelines, and scripting automated workflows.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card-bg/50 border-y border-card-border/50 relative">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            About <span className="text-gradient-green-gold">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            My Background & Drive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Career Focus */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-sans text-foreground/90">
              Transforming Ideas into Functional Fullstack Applications
            </h3>
            <p className="text-base text-text-muted leading-relaxed">
              I am an experienced Web PHP Developer with a strong background in structuring database relations, integrating secure third-party payment modules like <strong>CCAvenue</strong>, and writing workflows for automated check-ins. My professional focus centers on building dynamic, user-friendly dashboards.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              To keep pace with the evolving web ecosystem, I am actively expanding my skillset. I have been deeply engaged in learning modern frameworks like <strong>Next.js</strong> and <strong>React</strong>, utilizing <strong>TypeScript</strong> for type safety, and developing interfaces integrated with <strong>AI tools</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {qualities.map((item, index) => (
                <div
                  key={index}
                  className="flex space-x-4 p-4 rounded-xl border border-card-border/50 bg-card-bg/80 hover:border-primary-green/30 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm text-foreground/90 font-sans">{item.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Stats & Education */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Education Card */}
            <div className="glassmorphism border border-glass-border rounded-2xl p-6 md:p-8 space-y-6 shadow-lg">
              <div className="flex items-center space-x-4 pb-4 border-b border-card-border/50">
                <div className="p-3 bg-primary-green/10 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground/95 font-sans">Education</h4>
                  <p className="text-xs text-text-muted">Academic Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-sm text-foreground/90 font-sans">Graduation (BSc-IT)</h5>
                    <p className="text-xs text-text-muted font-medium">M L Dahanukar College Of Commerce</p>
                    <p className="text-xs text-text-muted">Mumbai, India</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary-green/10 text-primary-green rounded-full">
                    Class of 2021
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl border border-card-border/50 bg-background/55">
                  <Award className="w-6 h-6 text-accent-gold flex-shrink-0" />
                  <div>
                    <p className="text-xs text-text-muted">Graduated with distinction</p>
                    <p className="text-sm font-bold text-foreground/90 font-sans">CGPA: 8.14 / 10.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-card-border bg-card-bg text-center space-y-1 hover:border-primary-green/30 transition-all duration-300">
                <p className="text-3xl font-extrabold text-primary-green font-sans">2+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Years Experience</p>
              </div>
              <div className="p-4 rounded-2xl border border-card-border bg-card-bg text-center space-y-1 hover:border-accent-gold/30 transition-all duration-300">
                <p className="text-3xl font-extrabold text-accent-gold font-sans">10+</p>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Systems Deployed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
