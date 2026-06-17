"use client";

import React from "react";
import { Download, ArrowRight, Mail, Sparkles } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative background grid and glowing shapes */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-primary-green/5 dark:bg-primary-green/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-accent-gold/5 dark:bg-accent-gold/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-float [animation-delay:2s]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 md:px-8 xl:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading and intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-primary-green/10 dark:bg-primary-green/20 border border-primary-green/20 dark:border-primary-green/30 text-primary-green px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase max-w-max">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
            <span>Crafting Modern Fullstack Solutions</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl xs:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] font-sans">
              Hi, I'm <br />
              <span className="text-gradient-green-gold font-sans select-all">Sandeep Choudhary</span>
            </h1>
            <p className="text-xl xs:text-2xl md:text-3xl font-semibold text-foreground/90 font-sans">
              Web PHP Laravel Developer
            </p>
            <p className="text-base md:text-lg text-text-muted max-w-[620px] leading-relaxed">
              Passionate developer specializing in secure Laravel dashboards, payment gateways, and custom admin platforms. Actively expanding horizons by mastering modern frontend technologies like <strong>Next.js</strong>, <strong>React</strong>, and integrating cutting-edge <strong>AI capabilities</strong>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sc6097591@gmail.com"
              className="p-3 rounded-full border border-card-border hover:border-primary-green bg-card-bg hover:bg-primary-green/5 text-foreground hover:text-primary-green transition-all duration-300 hover:scale-110"
              title="Email sc6097591@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-choudhary-081b601b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-card-border hover:border-accent-gold bg-card-bg hover:bg-accent-gold/5 text-foreground hover:text-accent-gold transition-all duration-300 hover:scale-110"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Sandeep6097?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-card-border hover:border-primary-green bg-card-bg hover:bg-primary-green/5 text-foreground hover:text-primary-green transition-all duration-300 hover:scale-110"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="/CV Sandeep Choudhary.pdf"
              download="CV Sandeep Choudhary.pdf"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary-green hover:bg-primary-green-hover text-white dark:text-background font-semibold tracking-wide transition-all duration-300 hover:shadow-lg shadow-primary-green/20 hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-card-border hover:border-primary-green bg-card-bg text-foreground font-semibold tracking-wide transition-all duration-300 hover:bg-primary-green/5 hover:scale-105 active:scale-95"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Tech Display / Editor Mockup */}
        <div className="lg:col-span-5 relative animate-fade-in-up [animation-delay:0.3s]">
          {/* Glass Card 1: Code editor */}
          <div className="relative z-10 glassmorphism border border-glass-border rounded-2xl shadow-2xl p-6 md:p-8 animate-glow-pulse">
            <div className="flex items-center justify-between pb-4 border-b border-card-border/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-text-muted font-mono tracking-widest uppercase">
                sandeep_portfolio.tsx
              </span>
            </div>

            <div className="pt-4 font-mono text-sm leading-relaxed overflow-x-auto select-none">
              <p className="text-pink-500">const<span className="text-blue-500"> Developer</span> = &#123;</p>
              <p className="pl-4 text-foreground/80">name: <span className="text-emerald-500">"Sandeep Choudhary"</span>,</p>
              <p className="pl-4 text-foreground/80">coreStack: [<span className="text-emerald-500">"PHP"</span>, <span className="text-emerald-500">"Laravel"</span>],</p>
              <p className="pl-4 text-foreground/80">transition: &#123;</p>
              <p className="pl-8 text-foreground/80">framework: <span className="text-amber-500">"Next.js"</span>,</p>
              <p className="pl-8 text-foreground/80">library: <span className="text-amber-500">"React.js"</span>,</p>
              <p className="pl-8 text-foreground/80">aiFocus: <span className="text-amber-500">"Gemini APIs & LLMs"</span></p>
              <p className="pl-4 text-foreground/80">&#125;,</p>
              <p className="pl-4 text-blue-500">hasGoal: <span className="text-pink-500">() =&gt;</span> &#123;</p>
              <p className="pl-8 text-foreground/80">return <span className="text-emerald-500">"Build robust, intelligent fullstack apps"</span>;</p>
              <p className="pl-4 text-blue-500">&#125;</p>
              <p className="text-pink-500">&#125;;</p>
            </div>
          </div>

          {/* Decorative tech badge 1 */}
          <div className="absolute -top-6 -left-6 z-20 glassmorphism border border-accent-gold/20 rounded-xl px-4 py-2 flex items-center space-x-2 shadow-lg scale-90 md:scale-100 animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-gold animate-ping" />
            <span className="text-xs font-mono font-semibold text-foreground/90">PHP & Laravel Expert</span>
          </div>

          {/* Decorative tech badge 2 */}
          <div className="absolute -bottom-6 -right-6 z-20 glassmorphism border border-primary-green/20 rounded-xl px-4 py-2 flex items-center space-x-2 shadow-lg scale-90 md:scale-100 animate-float [animation-delay:3s]">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-green" />
            <span className="text-xs font-mono font-semibold text-foreground/90">Learning React & AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
