import type React from "react";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { useRevealInView } from "../hooks/useRevealInView";
import { site } from "../data/site";
import { AnimatedHeading } from "./AnimatedHeading";
import { Decoration } from "./Decoration";

export function ContactSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setStatus("success");
      track("lead_submitted", { channel: "contact_form" });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setError(message);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-16 md:py-24 bg-bg-dark">
      <div className="container">
        <motion.div
          className="accent-pattern rounded-[28px] md:rounded-[80px] px-5 py-10 sm:p-10 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Decoration className="absolute inset-x-0 bottom-0 h-1/2 w-full" color="12 22 35" fade="bottom" intensity={0.42} speed={1} />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 w-full overflow-hidden">
              <div className="w-full">
                <AnimatedHeading
                  title="hire me"
                  direction="right-to-left"
                  className="text-[16vw] md:text-[8vw] leading-[0.9] text-ink"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2.5 mb-5 md:mb-6 px-3 py-1.5 rounded-full bg-ink text-card label">
                  <span className="live-dot" aria-hidden="true" />
                  Available for work
                </span>
                <p className="text-ink text-lg md:text-2xl font-medium leading-[1.4] mb-8">
                  I am currently available for new opportunities. Let&apos;s build the next generation
                  of digital infrastructure together.
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-3 md:gap-4 text-ink font-bold text-lg sm:text-2xl md:text-4xl min-w-0">
                    <div className="w-11 h-11 md:w-16 md:h-16 rounded-full border-2 border-ink flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <a
                      href={`mailto:${site.email}`}
                      onClick={() => track("email_click", { location: "contact" })}
                      className="link-underline hover:opacity-80 break-words min-w-0 py-2"
                    >
                      {site.email}
                    </a>
                  </div>

                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    {/* Honeypot for spam bots; hidden from people and screen readers. */}
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />
                    <div className="grid gap-2">
                      <label className="label text-ink/75" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-ink/20 bg-honeydew px-4 py-3 text-ink text-base placeholder:text-ink/40 transition-[border-color,box-shadow] duration-200 hover:border-ink/40 focus:outline-none focus:border-ink focus:shadow-[0_0_0_4px_rgb(12_22_35/0.14)]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="label text-ink/75" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-ink/20 bg-honeydew px-4 py-3 text-ink text-base placeholder:text-ink/40 transition-[border-color,box-shadow] duration-200 hover:border-ink/40 focus:outline-none focus:border-ink focus:shadow-[0_0_0_4px_rgb(12_22_35/0.14)]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="label text-ink/75" htmlFor="message">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-2xl border border-ink/20 bg-honeydew px-4 py-3 text-ink text-base placeholder:text-ink/40 transition-[border-color,box-shadow] duration-200 hover:border-ink/40 focus:outline-none focus:border-ink focus:shadow-[0_0_0_4px_rgb(12_22_35/0.14)]"
                        placeholder="Tell me about your project, timeline, and goals."
                      />
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill btn-solid halo halo-card bg-ink text-card flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                        <ArrowUpRight size={20} />
                      </button>
                      {status === "success" && (
                        <span role="status" className="text-ink font-semibold animate-fade-in">Message sent! I&apos;ll reply soon.</span>
                      )}
                      {status === "error" && error && (
                        <span role="alert" className="text-punch_red-300 font-semibold animate-fade-in">{error}</span>
                      )}
                    </div>
                  </form>

                  <div className="flex flex-wrap gap-1.5 mt-2 md:mt-4">
                    <a
                      href="https://github.com/elshaddaioheha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="halo halo-card inline-flex items-center gap-2 min-h-[56px] px-4 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.2)] text-ink font-bold text-sm md:text-base nudge press hover:bg-ink hover:text-card"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/ojeka-ebibi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="halo halo-card inline-flex items-center gap-2 min-h-[56px] px-4 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.2)] text-ink font-bold text-sm md:text-base nudge press hover:bg-ink hover:text-card"
                    >
                      <ArrowUpRight size={18} />
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/0hehaebib1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="halo halo-card inline-flex items-center gap-2 min-h-[56px] px-4 rounded-full bg-frosted_blue-700 shadow-[inset_0_0_0_1px_rgb(12_22_35/0.2)] text-ink font-bold text-sm md:text-base nudge press hover:bg-ink hover:text-card"
                    >
                      <Twitter size={18} />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-ink/20 bg-ink">
                  <img src="/profile.png" alt="Oheha Ebibi" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
