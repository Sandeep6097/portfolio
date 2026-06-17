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

const DeveloperAvatar = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full object-cover"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-accent-gold/40" />
    <circle cx="100" cy="100" r="85" fill="currentColor" className="text-primary-green/10 dark:text-primary-green/20" />
    
    <path
      d="M45 160 C 45 130, 70 120, 100 120 C 130 120, 155 130, 155 160 Z"
      fill="currentColor"
      className="text-primary-green dark:text-primary-green/80"
    />
    
    <path d="M85 120 L100 140 L115 120 Z" fill="currentColor" className="text-accent-gold" />
    
    <rect x="88" y="105" width="24" height="20" fill="#fcd34d" rx="2" />
    
    <circle cx="100" cy="80" r="32" fill="#fef08a" />
    
    <path d="M68 80 C 68 55, 132 55, 132 80 C 132 75, 120 62, 100 62 C 80 62, 68 75, 68 80 Z" fill="#1e293b" />
    <path d="M68 80 L75 90 L80 80 Z" fill="#1e293b" />
    <path d="M132 80 L125 90 L120 80 Z" fill="#1e293b" />

    <rect x="78" y="76" width="18" height="10" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
    <rect x="104" y="76" width="18" height="10" rx="2" fill="none" stroke="#1e293b" strokeWidth="2" />
    <line x1="96" y1="81" x2="104" y2="81" stroke="#1e293b" strokeWidth="2" />
    
    <circle cx="87" cy="81" r="1.5" fill="#1e293b" />
    <circle cx="113" cy="81" r="1.5" fill="#1e293b" />

    <path d="M92 92 Q100 98 108 92" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

    <path d="M60 150 L140 150 L150 175 L50 175 Z" fill="currentColor" className="text-slate-700 dark:text-slate-800" />
    <rect x="68" y="153" width="64" height="20" rx="1" fill="#0f172a" />
    <path d="M90 163 L110 163" stroke="currentColor" className="text-emerald-500" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/4 w-[200px] xs:w-[350px] h-[200px] xs:h-[350px] bg-primary-green/5 dark:bg-primary-green/10 rounded-full blur-[80px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] xs:w-[350px] h-[200px] xs:h-[350px] bg-accent-gold/5 dark:bg-accent-gold/10 rounded-full blur-[80px] pointer-events-none animate-float [animation-delay:2s]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8 w-full flex flex-col items-center text-center space-y-8 animate-fade-in-up">
        {/* Hello badge in a speech bubble format */}
        <div className="relative bg-primary-green text-white dark:text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse max-w-max">
          Hello!
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary-green" />
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-[800px]">
          <h1 className="text-4xl xs:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] font-sans">
            I'm <span className="text-gradient-green-gold select-all font-sans">Sandeep Choudhary</span>,<br />
            Web PHP Laravel Developer
          </h1>
          <p className="text-base xs:text-lg text-text-muted max-w-[650px] mx-auto leading-relaxed">
            Passionate developer building secure Laravel dashboards, payment gateways, and backend architectures. Currently expanding frontend expertise in <strong>React</strong>, <strong>Next.js</strong>, and building <strong>AI-integrated workflows</strong>.
          </p>
        </div>

        {/* Central Portrait & Floating Statistics */}
        <div className="relative w-full max-w-[700px] min-h-[280px] xs:min-h-[360px] flex items-center justify-center py-6">
          {/* Circular Frame for Avatar */}
          <div className="relative w-[180px] xs:w-[260px] h-[180px] xs:h-[260px] rounded-full overflow-hidden border border-primary-green/20 dark:border-primary-green/30 bg-card-bg shadow-2xl p-1">
            <DeveloperAvatar />
          </div>

          {/* Left Stat Box */}
          <div className="absolute left-0 xs:left-4 top-1/2 -translate-y-1/2 glassmorphism border border-glass-border p-3 xs:p-4 rounded-2xl shadow-xl space-y-1 text-left max-w-[120px] xs:max-w-[160px] hover:scale-105 transition-transform duration-300">
            <p className="text-xl xs:text-3xl font-extrabold text-primary-green font-sans leading-none">10+</p>
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider leading-tight">
              Systems Deployed
            </p>
            <div className="w-8 h-[2px] bg-accent-gold mt-1.5" />
          </div>

          {/* Right Stat Box */}
          <div className="absolute right-0 xs:right-4 top-1/2 -translate-y-1/2 glassmorphism border border-glass-border p-3 xs:p-4 rounded-2xl shadow-xl space-y-1 text-left max-w-[120px] xs:max-w-[160px] hover:scale-105 transition-transform duration-300">
            <p className="text-xl xs:text-3xl font-extrabold text-accent-gold font-sans leading-none">2+</p>
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider leading-tight">
              Years Experience
            </p>
            <div className="w-8 h-[2px] bg-primary-green mt-1.5" />
          </div>
        </div>

        {/* Social Links Row */}
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

        {/* Action Call buttons */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 pt-2">
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
            Hire Me
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
