"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

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

// Replace this with your Google Web App URL once deployed
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzNnZYkUQP-kXhN-ukucWHOd809pjjiw9rus9FQXXGtYqoatUA4YF8TbKZmbq6J7kbG5w/exec";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");

    const scriptUrl = GOOGLE_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      // Fallback simulation if no script URL is configured
      setTimeout(() => {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }, 1500);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary-green" />,
      label: "Email Me",
      value: "sc6097591@gmail.com",
      href: "mailto:sc6097591@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-gold" />,
      label: "Call Me",
      value: "+91 8369991331",
      href: "tel:+918369991331",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-green" />,
      label: "Address",
      value: "MIDC, Andheri East, Mumbai, India",
      href: "https://maps.google.com/?q=Maheshwari+nagar,+MIDC,+Andheri+East,+Road+No+19,+Mumbai-400093",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card-bg/30 relative">
      <div className="max-w-[1400px] mx-auto px-4 xs:px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            Get In <span className="text-gradient-green-gold">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto rounded-full" />
          <p className="text-sm font-semibold tracking-widest text-text-muted uppercase font-sans">
            Let's Build Something Great Together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-stretch">
          {/* Left Column: Contact details & cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-sans text-foreground/95">
                Have a project idea or employment opportunity?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I am open to fullstack roles, contract work, or discussing how PHP, Next.js, and AI can help automate your organization's digital procedures. Reach out directly!
              </p>
            </div>

            {/* Contact list cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-card-border bg-card-bg hover:border-primary-green hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 bg-card-border/30 dark:bg-card-border/10 rounded-lg">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-bold text-foreground/90 font-mono">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* LinkedIn footer banner */}
            <div className="p-5 rounded-2xl border border-primary-green/20 bg-primary-green/[0.02] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <LinkedinIcon className="w-6 h-6 text-primary-green" />
                <div>
                  <h4 className="font-extrabold text-sm text-foreground/90 font-sans">LinkedIn Connect</h4>
                  <p className="text-xs text-text-muted">Professional networking profile</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/sandeep-choudhary-081b601b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold px-4 py-2 rounded-xl bg-primary-green text-white dark:text-background hover:bg-primary-green-hover transition-colors"
              >
                Connect
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism border border-glass-border rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none text-sm transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none text-sm transition-all duration-300"
                    placeholder="johndoe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground/90 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none text-sm transition-all duration-300 resize-none"
                    placeholder="Hey Sandeep, let's discuss a project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary-green hover:bg-primary-green-hover text-white dark:text-background font-semibold tracking-wide transition-all duration-300 hover:shadow-lg shadow-primary-green/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Status Message popup */}
              {status === "success" && (
                <div className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 flex items-center space-x-2 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-semibold">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 flex items-center space-x-2 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 rotate-180" />
                  <span className="text-xs font-semibold">
                    Oops! Something went wrong. Please check your network and try again.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
