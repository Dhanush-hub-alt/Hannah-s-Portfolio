"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { BrandLogo } from "@/components/BrandLogo";
import {
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  Trophy,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  Github,
  Linkedin,
} from "lucide-react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Training", href: "#training", icon: Cpu },
    { name: "Achievements", href: "#achievements", icon: Trophy },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine background state
      setIsScrolled(currentScrollY > 20);

      // Dynamic smart hide/reveal on scroll: navbar is not static while scrolling
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down -> hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up -> show navbar
          setIsVisible(true);
        }
      } else {
        // Near top -> always visible
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Active section highlight tracking
      const sections = navItems.map((link) => link.href.replace("#", ""));
      const currentPos = currentScrollY + 220;

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
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out border-none ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "py-2.5 bg-black/95 backdrop-blur-md shadow-2xl"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Most Left Corner: Logo & Enlarged Title "Hannah K" (No B.E subtitle, No circle border) */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Hannah K Home"
          >
            <BrandLogo size={46} />
            <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight group-hover:text-[#00EA64] transition-colors">
              Hannah <span className="text-[#00EA64]">K</span>
            </span>
          </a>

          {/* Center Navigation Links: Individual Icons, Hover Underline, No Border */}
          <nav className="hidden 2xl:flex items-center gap-1 bg-black/95 rounded-full px-5 py-2 border-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#00EA64]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {/* Hovering / Animating Icon */}
                  <Icon
                    className={`w-3.5 h-3.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:scale-110 ${
                      isActive
                        ? "text-[#00EA64]"
                        : "text-slate-400 group-hover:text-[#00EA64]"
                    }`}
                  />
                  <span>{item.name}</span>

                  {/* Animated Hover Line Underneath the Navbar Item */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] bg-[#00EA64] rounded-full transition-all duration-300 origin-left ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Top Most Right Corner: GitHub, LinkedIn, Mail & Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black border border-[#00EA64]/40 text-slate-200 hover:text-[#00EA64] hover:border-[#00EA64] transition-all flex items-center gap-1.5 text-xs font-semibold active:scale-95"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5 text-[#00EA64]" />
              <span className="hidden xl:inline">GitHub</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black border border-[#00EA64]/40 text-slate-200 hover:text-[#00EA64] hover:border-[#00EA64] transition-all flex items-center gap-1.5 text-xs font-semibold active:scale-95"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#00EA64]" />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>

            {/* Mail Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-black border border-[#00EA64]/40 text-slate-200 hover:text-[#00EA64] hover:border-[#00EA64] transition-all flex items-center gap-1.5 text-xs font-semibold active:scale-95"
              aria-label="Send Email"
              title="Mail"
            >
              <Mail className="w-3.5 h-3.5 text-[#00EA64]" />
              <span className="hidden xl:inline">Mail</span>
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold text-black bg-[#00EA64] hover:bg-[#10E56A] transition-all flex items-center gap-1.5 active:scale-95 border-none shadow-btn"
              title="Contact Section"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" />
              <span>Contact</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-full bg-black text-[#00EA64] border border-[#00EA64]/30 hover:bg-[#00EA64] hover:text-black transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 2xl:hidden">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-black p-6 shadow-2xl flex flex-col justify-between border border-[#00EA64]/30">
            <div className="flex flex-col space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00EA64] px-3 py-2 font-bold">
                Navigation
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-[#00EA64] text-black font-bold"
                        : "text-slate-300 hover:text-white hover:bg-black/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-5 border-t border-[#00EA64]/20 flex flex-col gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-black border border-[#00EA64]/40 text-xs font-semibold text-center text-slate-200 hover:text-[#00EA64] flex items-center justify-center gap-1"
                >
                  <Github className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-black border border-[#00EA64]/40 text-xs font-semibold text-center text-slate-200 hover:text-[#00EA64] flex items-center justify-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="py-2.5 rounded-xl bg-black border border-[#00EA64]/40 text-xs font-semibold text-center text-slate-200 hover:text-[#00EA64] flex items-center justify-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00EA64]" />
                  <span>Mail</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-sm font-bold text-center text-black bg-[#00EA64] hover:bg-[#10E56A] flex items-center justify-center gap-2 border-none shadow-btn"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
