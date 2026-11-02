"use client";

import React from "react";
import { personalInfo, navLinks } from "@/data/portfolio";
import { BrandLogo } from "@/components/BrandLogo";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-theme-bg border-t border-theme-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-theme-border items-start">
          
          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <BrandLogo size={40} />
              <span className="text-xl font-extrabold text-theme-primary tracking-tight font-display">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed max-w-sm">
              Computer Science and Engineering Student at Nandha College of Technology (2023–2027). Dedicated to building dependable, applied digital and embedded solutions.
            </p>

            <div className="text-xs text-theme-accent font-mono">
              Erode, Tamil Nadu, India
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-theme-accent mb-4 font-bold">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-theme-secondary">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-theme-accent transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Back-to-Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-theme-accent mb-4 font-bold">
                Connect
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="w-9 h-9 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-colors shadow-sm"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-surface border border-theme-border text-xs font-semibold text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all group shadow-sm"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-theme-accent group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-theme-muted gap-4">
          <p>
            &copy; {new Date().getFullYear()} Hannah K. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
