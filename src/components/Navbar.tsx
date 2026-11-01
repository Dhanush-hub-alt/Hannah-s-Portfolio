"use client";

import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { BrandLogo } from "@/components/BrandLogo";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
            ? "py-3 bg-[#080B0E]/90 backdrop-blur-xl border-b border-[#00EA64]/20 shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with modern "H" */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Hannah K Home"
          >
            <BrandLogo size={40} />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-tight group-hover:text-[#00EA64] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-[#00EA64]">
                B.E CSE • 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0D1217]/85 border border-[#00EA64]/20 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-[#080B0E] bg-[#00EA64] shadow-[0_0_15px_rgba(0,234,100,0.4)] font-bold"
                      : "text-slate-300 hover:text-[#00EA64] hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#080B0E] bg-[#00EA64] hover:bg-[#1ED760] transition-all active:scale-95 shadow-green-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#080B0E]" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#080B0E]/80 group-hover:text-[#080B0E]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-[#0D1217] border border-[#00EA64]/20 text-slate-300 hover:text-[#00EA64] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#00EA64]" />
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
          <div
            className="fixed inset-0 bg-[#080B0E]/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-[#0D1217] border border-[#00EA64]/30 p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00EA64] px-3 py-2 font-bold">
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
                        ? "bg-[#00EA64] text-[#080B0E] font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-[#00EA64]/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-bold text-center text-[#080B0E] bg-[#00EA64] hover:bg-[#1ED760] flex items-center justify-center gap-2 shadow-green-btn"
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
