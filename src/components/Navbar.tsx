"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  Trophy,
  Languages,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: "Languages", href: "#languages", icon: Languages },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", href);
      setActiveSection("home");
      return;
    }

    const navbarHeight = 64;
    const viewportHeight = window.innerHeight;
    const targetTop = targetEl.offsetTop;
    const targetHeight = targetEl.offsetHeight;

    // For sections that fit within or match the viewport, scrolling to targetTop aligns
    // the 100vh section with the viewport, placing the content directly in the vertical center.
    // For tall sections (e.g. #projects with multiple cards), scroll so section header starts just below navbar:
    let scrollPos = targetTop;
    if (targetHeight > viewportHeight * 1.1) {
      scrollPos = targetTop - navbarHeight;
    } else {
      scrollPos = targetTop;
    }

    window.scrollTo({
      top: Math.max(0, scrollPos),
      behavior: "smooth",
    });
    history.pushState(null, "", href);
    setActiveSection(targetId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Track active section
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
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 border-none ${
          isScrolled
            ? "py-3 bg-theme-bg/95 backdrop-blur-md shadow-subtle"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Most Left: Logo + Title "Hannah K" */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Hannah's Portfolio Home"
          >
            <BrandLogo size={42} />
            <span className="font-extrabold text-xl sm:text-2xl text-theme-primary tracking-tight group-hover:text-theme-accent transition-colors">
              Hannah <span className="text-theme-accent">K</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-theme-surface/70 backdrop-blur-md rounded-full px-3 py-1.5 shadow-none border-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-transparent transition-colors duration-200 ${
                    isActive
                      ? "text-theme-accent font-bold"
                      : "text-theme-secondary hover:text-theme-accent"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-125 group-hover:rotate-6 group-hover:text-theme-accent ${
                      isActive
                        ? "text-theme-accent scale-110"
                        : "text-theme-muted group-hover:text-theme-accent"
                    }`}
                  />
                  <span>{item.name}</span>

                  {/* Clean Blue Underline Indicator only */}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] bg-theme-accent rounded-full transition-all duration-300 origin-center ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Top Most Right: Icon-only Navigation */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Only: GitHub, LinkedIn, Mail, Contact (Hidden on mobile) */}
            <div className="hidden xl:flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-theme-surface text-theme-secondary hover:text-theme-accent transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-none"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-theme-surface text-theme-secondary hover:text-theme-accent transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-none"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 sm:p-2.5 rounded-full bg-theme-surface text-theme-secondary hover:text-theme-accent transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-none"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="p-2 sm:p-2.5 rounded-full bg-theme-surface text-theme-secondary hover:text-theme-accent transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-none"
                aria-label="Contact Section"
                title="Contact Me"
              >
                <MessageSquare className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
              </a>
            </div>

            {/* Theme Toggle Button (Light/Dark Mode) */}
            <ThemeToggle />

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full bg-theme-surface text-theme-primary hover:text-theme-accent transition-colors focus:outline-none"
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
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar rounded-3xl bg-theme-surface p-6 shadow-card flex flex-col justify-between border-none">
            <div className="flex flex-col space-y-1">
              <div className="text-xs uppercase tracking-wider text-theme-accent px-3 py-2 font-bold">
                Navigation
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? "text-theme-accent font-bold"
                        : "text-theme-secondary hover:text-theme-accent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Mobile Drawer Connect & Contact Tab Buttons */}
            <div className="mt-6 pt-5 border-t border-theme-border/40 space-y-4">
              <div className="text-xs uppercase tracking-wider text-theme-accent px-1 font-bold">
                Connect & Contact
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {/* GitHub Button */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-theme-surfaceSecondary text-theme-primary hover:text-theme-accent flex items-center gap-2.5 text-xs font-semibold transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn Button */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-theme-surfaceSecondary text-theme-primary hover:text-theme-accent flex items-center gap-2.5 text-xs font-semibold transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>LinkedIn</span>
                </a>

                {/* Mail Button */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-2xl bg-theme-surfaceSecondary text-theme-primary hover:text-theme-accent flex items-center gap-2.5 text-xs font-semibold transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>Mail</span>
                </a>

                {/* Contact Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="p-3 rounded-2xl bg-theme-surfaceSecondary text-theme-primary hover:text-theme-accent flex items-center gap-2.5 text-xs font-semibold transition-colors"
                  aria-label="Contact Section"
                >
                  <MessageSquare className="w-4 h-4 text-theme-accent shrink-0" />
                  <span>Contact</span>
                </a>
              </div>

              {/* Theme Toggle in Drawer */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-theme-muted font-medium">Appearance</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
