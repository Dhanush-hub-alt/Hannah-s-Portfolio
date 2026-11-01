"use client";

import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const currentPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-bg-main/85 backdrop-blur-xl border-b border-border-subtle shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Hannah K Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-[10px] bg-bg-main flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan bg-clip-text text-transparent">
                  {personalInfo.monogram}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-text-primary tracking-tight group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-medium text-text-muted">
                B.E CSE • 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-bg-secondary/70 border border-border-subtle rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-text-primary bg-brand-indigo/25 shadow-sm"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-cyan" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-text-primary bg-gradient-to-r from-brand-indigo to-brand-violet hover:from-brand-indigo/90 hover:to-brand-violet/90 transition-all shadow-indigo-glow hover:shadow-lg active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-bg-secondary border border-border-subtle text-text-secondary hover:text-text-primary focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-brand-cyan" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-bg-main/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-bg-elevated border border-border-subtle p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-text-muted px-3 py-2">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-brand-indigo/20 text-brand-cyan border border-brand-indigo/30"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-border-subtle">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-bold text-center text-white bg-gradient-to-r from-brand-indigo to-brand-violet flex items-center justify-center gap-2 shadow-indigo-glow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
