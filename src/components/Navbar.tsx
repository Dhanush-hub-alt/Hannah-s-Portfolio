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
    { name: "Languages", href: "#languages", icon: Languages },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Smart hide on scroll down, show on scroll up
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

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
  }, [lastScrollY, mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out border-none ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "py-2.5 bg-theme-bg/90 backdrop-blur-md shadow-subtle border-b border-theme-border/60"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Most Left: Logo + Title "Hannah K" */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Hannah K Home"
          >
            <BrandLogo size={42} />
            <span className="font-extrabold text-xl sm:text-2xl text-theme-primary tracking-tight font-display group-hover:text-theme-accent transition-colors">
              Hannah <span className="text-theme-accent">K</span>
            </span>
          </a>

          {/* Center Navigation Links: Icons + Exact Labels */}
          <nav className="hidden 2xl:flex items-center gap-1 bg-theme-surface/80 backdrop-blur-md rounded-full px-4 py-1.5 border border-theme-border/70 shadow-sm">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-theme-accent bg-theme-surfaceSecondary font-bold"
                      : "text-theme-secondary hover:text-theme-primary hover:bg-theme-surfaceSecondary/60"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 transition-all duration-200 group-hover:-translate-y-0.5 ${
                      isActive
                        ? "text-theme-accent"
                        : "text-theme-muted group-hover:text-theme-accent"
                    }`}
                  />
                  <span>{item.name}</span>

                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-theme-accent rounded-full transition-all duration-300 origin-left ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Top Most Right: Icon-only Navigation (GitHub, LinkedIn, Mail, Contact, ThemeToggle) */}
          <div className="flex items-center gap-2 shrink-0">
            {/* GitHub Icon Only */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Icon Only */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Mail Icon Only */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 sm:p-2.5 rounded-full bg-theme-surface border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Contact Icon Only */}
            <a
              href="#contact"
              className="p-2 sm:p-2.5 rounded-full bg-theme-accent text-white hover:bg-theme-accentHover transition-all flex items-center justify-center active:scale-95 shadow-sm"
              aria-label="Contact Section"
              title="Contact Me"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Theme Toggle Button (Light/Dark Mode) */}
            <ThemeToggle />

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="2xl:hidden p-2 rounded-full bg-theme-surface text-theme-primary border border-theme-border hover:border-theme-accent transition-colors focus:outline-none"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-theme-surface p-6 shadow-2xl flex flex-col justify-between border border-theme-border">
            <div className="flex flex-col space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-theme-accent px-3 py-2 font-bold">
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
                    className={`px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-theme-accent text-white font-bold"
                        : "text-theme-secondary hover:text-theme-primary hover:bg-theme-surfaceSecondary"
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

            <div className="mt-6 pt-5 border-t border-theme-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-accent"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-accent"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-full bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-accent"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
