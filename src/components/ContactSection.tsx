import type React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { useRevealInView } from "../hooks/useRevealInView";

export function ContactSection() {
  const { ref, isInView } = useRevealInView<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setError(null);

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email is not configured. Add EmailJS env vars.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setError(message);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-24 bg-bg-dark">
      <div className="container">
        <motion.div
          className="accent-pattern rounded-[40px] md:rounded-[80px] p-12 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-[12vw] md:text-[8vw] font-display leading-[0.8] text-bg-dark mb-8 md:mb-0">
                hire me
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-bg-dark text-xl md:text-2xl font-medium leading-[1.4] mb-8">
                  I am currently available for new opportunities. Let&apos;s build the next generation
                  of digital infrastructure together.
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-4 text-bg-dark font-bold text-2xl md:text-4xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-bg-dark flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <a
                      href="mailto:elshaddaioheha@gmail.com"
                      className="hover:opacity-70 transition-opacity break-all"
                    >
                      elshaddaioheha@gmail.com
                    </a>
                  </div>

                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                      <label className="text-bg-dark/70 text-sm font-semibold" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-bg-dark/20 bg-white px-4 py-3 text-bg-dark focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-bg-dark/70 text-sm font-semibold" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-bg-dark/20 bg-white px-4 py-3 text-bg-dark focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-bg-dark/70 text-sm font-semibold" htmlFor="message">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-2xl border border-bg-dark/20 bg-white px-4 py-3 text-bg-dark focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Tell me about your project, timeline, and goals."
                      />
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-pill bg-bg-dark text-accent border-bg-dark flex items-center gap-2 disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                        <ArrowUpRight size={20} />
                      </button>
                      {status === "success" && (
                        <span className="text-bg-dark font-semibold">Message sent! I&apos;ll reply soon.</span>
                      )}
                      {status === "error" && error && (
                        <span className="text-red-800 font-semibold">{error}</span>
                      )}
                    </div>
                  </form>

                  <div className="flex flex-wrap gap-6 mt-4">
                    <a
                      href="https://github.com/elshaddaioheha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <Github size={28} />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/ojeka-ebibi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <ArrowUpRight size={28} />
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/0hehaebib1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-bg-dark font-bold text-lg hover:underline decoration-2 underline-offset-4"
                    >
                      <Twitter size={28} />
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-bg-dark/20 bg-bg-dark">
                  <img src="/profile.png" alt="Elshaddai Oheha" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
