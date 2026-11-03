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
  Loader2,
  AlertCircle,
  RotateCcw,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Send directly to hannahk78711@gmail.com via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/hannahk78711@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject}`,
          message: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormErrors({});
      } else {
        throw new Error("Failed to deliver message via primary gateway.");
      }
    } catch {
      // Fallback: trigger mailto if network or adblocker interrupts the request
      setSubmitStatus("error");
      setErrorMessage(
        "Could not deliver via network API. Click below to launch your email app and send to hannahk78711@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:hannahk78711@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-12 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Exact Section Title Centered Matching Navbar */}
        <SectionHeader title="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-theme-surface border border-theme-border space-y-4 shadow-card">
              <h3 className="text-xl font-bold text-theme-primary">
                Direct Channels
              </h3>
              <p className="text-sm text-theme-secondary leading-relaxed">
                Reach out directly via email or phone for academic projects, engineering roles, and technical collaborations.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-theme-surfaceSecondary border border-theme-border flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 shadow-subtle font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase text-theme-accent font-bold">Email</span>
                    <a
                      href="mailto:hannahk78711@gmail.com"
                      className="block text-sm font-semibold text-theme-primary hover:text-theme-accent transition-colors truncate"
                    >
                      hannahk78711@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("hannahk78711@gmail.com", "email")}
                  className="p-2 rounded-lg bg-theme-surface border border-theme-border text-theme-muted hover:text-theme-accent transition-colors"
                  title="Copy Email"
                >
                  {copiedType === "email" ? (
                    <CheckCircle2 className="w-4 h-4 text-theme-accent" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-theme-surfaceSecondary border border-theme-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 shadow-subtle font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-theme-accent font-bold">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="block text-sm font-semibold text-theme-primary hover:text-theme-accent transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-theme-surface border border-theme-border text-theme-muted hover:text-theme-accent transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === "phone" ? (
                    <CheckCircle2 className="w-4 h-4 text-theme-accent" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-theme-surfaceSecondary border border-theme-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-theme-surface border border-theme-border text-theme-accent flex items-center justify-center shrink-0 shadow-subtle font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-theme-accent font-bold">Location</span>
                  <div className="text-sm font-semibold text-theme-primary">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-3xl bg-theme-surface border border-theme-border flex items-center justify-between shadow-card">
              <span className="text-xs uppercase tracking-wider text-theme-muted font-bold">
                Professional Networks
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all"
                  aria-label="Hannah K LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-theme-surfaceSecondary border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent transition-all"
                  aria-label="Hannah K GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-theme-surface border border-theme-border shadow-card min-h-[460px] flex flex-col justify-center">
              {submitStatus === "success" ? (
                /* Success State */
                <div className="py-8 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-theme-accent/10 border-2 border-theme-accent text-theme-accent mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-theme-primary">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-sm text-theme-secondary max-w-md mx-auto leading-relaxed">
                    Your message has been delivered directly to <strong className="text-theme-accent">hannahk78711@gmail.com</strong>. Hannah will get back to you as soon as possible.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-theme-accent hover:bg-theme-accentHover transition-all shadow-subtle hover:scale-105"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form State */
                <>
                  <h3 className="text-xl font-bold text-theme-primary">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-secondary mt-1">
                    Send a direct email message to <span className="text-theme-accent font-semibold">hannahk78711@gmail.com</span>.
                  </p>

                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-600 dark:text-amber-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        onClick={handleMailtoFallback}
                        className="px-3 py-1.5 rounded-lg bg-theme-accent text-white font-bold text-[11px] hover:bg-theme-accentHover shrink-0"
                      >
                        Open Email App
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-theme-secondary mb-1.5">
                          Your Name <span className="text-theme-accent">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          disabled={isSubmitting}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="eg. Hannah"
                          className={`w-full px-4 py-3 rounded-xl bg-theme-surfaceSecondary border text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors disabled:opacity-60 ${
                            formErrors.name
                              ? "border-red-500 focus:border-red-400"
                              : "border-theme-border focus:border-theme-accent"
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-theme-secondary mb-1.5">
                          Your Email <span className="text-theme-accent">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          disabled={isSubmitting}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="eg. hannah@domain.com"
                          className={`w-full px-4 py-3 rounded-xl bg-theme-surfaceSecondary border text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors disabled:opacity-60 ${
                            formErrors.email
                              ? "border-red-500 focus:border-red-400"
                              : "border-theme-border focus:border-theme-accent"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-[11px] text-red-500 mt-1 block">
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-theme-secondary mb-1.5">
                        Subject <span className="text-theme-accent">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        disabled={isSubmitting}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Inquiry regarding Project Collaboration / Internship"
                        className={`w-full px-4 py-3 rounded-xl bg-theme-surfaceSecondary border text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors disabled:opacity-60 ${
                          formErrors.subject
                            ? "border-red-500 focus:border-red-400"
                            : "border-theme-border focus:border-theme-accent"
                        }`}
                      />
                      {formErrors.subject && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-theme-secondary mb-1.5">
                        Message <span className="text-theme-accent">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        disabled={isSubmitting}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Write your message here..."
                        className={`w-full px-4 py-3 rounded-xl bg-theme-surfaceSecondary border text-sm text-theme-primary placeholder:text-theme-muted focus:outline-none transition-colors resize-none disabled:opacity-60 ${
                          formErrors.message
                            ? "border-red-500 focus:border-red-400"
                            : "border-theme-border focus:border-theme-accent"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[11px] text-red-500 mt-1 block">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-theme-accent hover:bg-theme-accentHover transition-all flex items-center justify-center gap-2 active:scale-98 shadow-subtle hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message to hannahk78711@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
