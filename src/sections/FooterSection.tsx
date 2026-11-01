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
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Col 1: Identity & Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size={42} />
              <span className="text-xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Computer Science and Engineering Student at Nandha College of Technology (2023–2027). Dedicated to building dependable, intelligent digital and embedded solutions.
            </p>

            <div className="text-xs text-zinc-500 font-mono">
              Erode, Tamil Nadu, India
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
              Explore Portfolio
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Back-to-Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                Connect Directly
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
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
