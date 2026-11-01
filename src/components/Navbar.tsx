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
            ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
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
            <BrandLogo size={38} />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                B.E CSE • 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-950/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? "text-black bg-white shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-black" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/15 p-6 shadow-2xl flex flex-col justify-between">
            <div className="flex flex-col space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 px-3 py-2">
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
                        ? "bg-white text-black font-bold"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-bold text-center text-black bg-white flex items-center justify-center gap-2"
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
