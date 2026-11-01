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
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((link) => link.href.replace("#", ""));
      const currentPos = window.scrollY + 220;

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-none ${
          isScrolled
            ? "py-3 bg-black/90 backdrop-blur-md shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Circular Border */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Hannah K Home"
          >
            <BrandLogo size={42} />
            <div className="flex flex-col">
              <span className="font-extrabold text-sm text-white tracking-tight group-hover:text-[#00EA64] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-[#00EA64] font-semibold">
                B.E CSE • 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Individual Icons, Animated Underline & No Border */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0A120D]/90 backdrop-blur-md rounded-full px-5 py-2 border-none shadow-lg">
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

          {/* Right Action: Let's Talk CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-[#00EA64] hover:bg-[#10E56A] transition-all active:scale-95 border-none shadow-btn"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full bg-[#122018] text-[#00EA64] hover:bg-[#00EA64] hover:text-black transition-colors focus:outline-none border-none"
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
        <div className="fixed inset-0 z-30 xl:hidden">
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 right-4 left-4 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl bg-[#080F0B] p-6 shadow-2xl flex flex-col justify-between border-none">
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
                        : "text-slate-300 hover:text-white hover:bg-[#122018]"
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

            <div className="mt-6 pt-5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-sm font-bold text-center text-black bg-[#00EA64] hover:bg-[#10E56A] flex items-center justify-center gap-2 border-none shadow-btn"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
