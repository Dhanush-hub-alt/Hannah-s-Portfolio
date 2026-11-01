"use client";

import React from "react";
import { personalInfo, navLinks } from "@/data/portfolio";
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg-secondary border-t border-border-subtle pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle items-start">
          
          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-cyan p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-bg-main flex items-center justify-center">
                  <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
                    {personalInfo.monogram}
                  </span>
                </div>
              </div>
              <span className="text-xl font-extrabold text-text-primary tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              Computer Science and Engineering Student at Nandha College of Technology (2023–2027). Dedicated to building dependable, intelligent digital and embedded solutions.
            </p>

            <div className="text-xs text-text-muted font-mono">
              Erode, Tamil Nadu, India
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
              Explore Portfolio
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-text-secondary">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-cyan transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Back-to-Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
                Connect Directly
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-indigo hover:border-brand-indigo/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-violet hover:border-brand-violet/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="w-9 h-9 rounded-xl bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-card border border-border-subtle text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-brand-indigo transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>
            &copy; {new Date().getFullYear()} Hannah K. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Engineered with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
