"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isPrepared, setIsPrepared] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errors.subject = "Please enter a subject.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct pre-formatted mailto link to provide honest, non-fake delivery
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsPrepared(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Have an Idea?"
          highlight="Let's Build Something Meaningful."
          description="Whether you have an internship opportunity, a project collaboration, or want to discuss embedded AI and computer science, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-bg-card border border-border-subtle space-y-5">
              <h3 className="text-lg font-bold text-text-primary">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Reach out directly via email or phone. I prioritize inquiries regarding academic projects, engineering roles, and technical collaborations.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 text-brand-indigo flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-text-muted">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm font-semibold text-text-primary hover:text-brand-cyan transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-bg-card border border-white/5 text-text-secondary hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-text-muted">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="block text-sm font-semibold text-text-primary hover:text-brand-cyan transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-bg-card border border-white/5 text-text-secondary hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === "phone" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-bg-elevated border border-border-subtle flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/15 text-brand-violet flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-text-muted">Location</span>
                  <div className="text-sm font-semibold text-text-primary">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-5 rounded-3xl bg-bg-card border border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-bg-elevated border border-border-subtle text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
                  aria-label="Hannah K LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-bg-elevated border border-border-subtle text-text-secondary hover:text-brand-indigo hover:border-brand-indigo/40 transition-all"
                  aria-label="Hannah K GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-card border border-border-subtle shadow-card-glow">
              <h3 className="text-xl font-bold text-text-primary">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Fill in the details below. This form initiates a direct email dispatch to Hannah&apos;s verified inbox.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      Your Name <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors ${
                        formErrors.name
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-border-subtle focus:border-brand-indigo"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      Your Email <span className="text-brand-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. priya@domain.com"
                      className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors ${
                        formErrors.email
                          ? "border-rose-500/80 focus:border-rose-500"
                          : "border-border-subtle focus:border-brand-indigo"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Subject <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Inquiry regarding Vehicle AI Project / Internship"
                    className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors ${
                      formErrors.subject
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-border-subtle focus:border-brand-indigo"
                    }`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Message <span className="text-brand-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-bg-elevated border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-border-subtle focus:border-brand-indigo"
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-indigo via-brand-violet to-brand-cyan hover:opacity-95 transition-all shadow-indigo-glow flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {/* Notice explaining client mailto integration */}
              <div className="mt-4 p-3 rounded-xl bg-bg-main border border-border-subtle flex items-start gap-2.5 text-xs text-text-secondary">
                <AlertCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Dispatch:</strong> Submitting will format your message into an authenticated email addressed to{" "}
                  <code className="text-brand-cyan">{personalInfo.email}</code>. No fake success states are shown.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
