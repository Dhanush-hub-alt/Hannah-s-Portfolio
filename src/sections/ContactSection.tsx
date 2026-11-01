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

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-black border-t border-white/10">
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
            <div className="p-6 rounded-3xl bg-zinc-950 border border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Reach out directly via email or phone. I prioritize inquiries regarding academic projects, engineering roles, and technical collaborations.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm font-semibold text-white hover:text-zinc-300 transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-black border border-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="block text-sm font-semibold text-white hover:text-zinc-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-black border border-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === "phone" ? (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Location</span>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="p-5 rounded-3xl bg-zinc-950 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Professional Networks
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/40 transition-all"
                  aria-label="Hannah K LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/40 transition-all"
                  aria-label="Hannah K GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Fill in the details below. This form initiates a direct email dispatch to Hannah&apos;s verified inbox.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                      Your Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        formErrors.name
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/10 focus:border-white"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                      Your Email <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. priya@domain.com"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                        formErrors.email
                          ? "border-red-500 focus:border-red-400"
                          : "border-white/10 focus:border-white"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                    Subject <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="e.g. Inquiry regarding Vehicle AI Project / Internship"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors ${
                      formErrors.subject
                        ? "border-red-500 focus:border-red-400"
                        : "border-white/10 focus:border-white"
                    }`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                    Message <span className="text-white">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? "border-red-500 focus:border-red-400"
                        : "border-white/10 focus:border-white"
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-black bg-white hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 active:scale-98 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>

              {/* Notice explaining client mailto integration */}
              <div className="mt-4 p-3 rounded-xl bg-black border border-white/10 flex items-start gap-2.5 text-xs text-zinc-400">
                <AlertCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Dispatch:</strong> Submitting will format your message into an authenticated email addressed to{" "}
                  <code className="text-white font-mono">{personalInfo.email}</code>. No fake success states are shown.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
