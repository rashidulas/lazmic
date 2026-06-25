"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />

      {/* Purple hero header */}
      <div className="bg-[#f4f0fa] px-6 pt-36 pb-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-widest text-gray-400 mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight"
        >
          How can I help you with your next project?
        </motion.h1>
      </div>

      {/* Overlapping white card */}
      <div className="bg-white px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto -mt-14 bg-white rounded-3xl shadow-md border border-gray-100 p-10"
        >
          {sent ? (
            <div className="flex flex-col items-center py-12 gap-4 text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-2xl">
                ✓
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Message sent!</h2>
              <p className="text-gray-500 text-sm">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-sm text-gray-400 underline underline-offset-2 hover:text-gray-700 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-8">
                Send me a message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-b border-gray-200 pb-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full border-b border-gray-200 pb-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent text-sm"
                  />
                </div>

                {/* Project details */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-3">
                    Project Details
                  </label>
                  <textarea
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals…"
                    required
                    className="w-full border-b border-gray-200 pb-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-fit rounded-full bg-gray-900 text-white px-10 py-3 text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Send Message →
                </motion.button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}
