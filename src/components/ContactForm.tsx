"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";

/* ─────────────────────────────────────────
   Floating Illustrations (Stickers)
 ───────────────────────────────────────── */
function RainbowSticker() {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none" className="drop-shadow-sm select-none">
      {/* Cloud Left */}
      <path d="M12 42a7 7 0 0 1 7-7 7 7 0 0 1 6.5 4.5 5 5 0 0 1 4.5-.5 5 5 0 0 1 4 5 5 5 0 0 1-5 5H17a7 7 0 0 1-5-7z" fill="white" stroke="#1c1c1c" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Cloud Right */}
      <path d="M58 42a5 5 0 0 1-1-3 5 5 0 0 1 4-5 5 5 0 0 1 4.5 3 7 7 0 0 1 6.5-1 7 7 0 0 1 5 7 7 7 0 0 1-7 7H63a5 5 0 0 1-5-5z" fill="white" stroke="#1c1c1c" strokeWidth="1.5" strokeLinejoin="round" />
      
      {/* Rainbow Arches */}
      {/* Outer pink */}
      <path d="M 23 35 A 22 22 0 0 1 67 35" fill="none" stroke="#1c1c1c" strokeWidth="11.5" strokeLinecap="round" />
      <path d="M 23 35 A 22 22 0 0 1 67 35" fill="none" stroke="#fca5a5" strokeWidth="8.5" strokeLinecap="round" />
      
      {/* Yellow */}
      <path d="M 28 35 A 17 17 0 0 1 62 35" fill="none" stroke="#1c1c1c" strokeWidth="7.5" strokeLinecap="round" />
      <path d="M 28 35 A 17 17 0 0 1 62 35" fill="none" stroke="#fde047" strokeWidth="4.5" strokeLinecap="round" />
      
      {/* Green */}
      <path d="M 33 35 A 12 12 0 0 1 57 35" fill="none" stroke="#1c1c1c" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 33 35 A 12 12 0 0 1 57 35" fill="none" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PaperAirplane() {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" className="select-none">
      {/* Dotted trail loop */}
      <path
        d="M 90 60 C 85 70, 65 67, 60 55 C 55 40, 75 30, 80 40 C 85 50, 65 55, 45 45"
        stroke="#1c1c1c"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      {/* Paper airplane body */}
      <g transform="translate(22, 22) rotate(-45)">
        {/* Under wing / shadow */}
        <path d="M 0 0 L 28 8 L 10 14 Z" fill="#e5e7eb" stroke="#1c1c1c" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Main wing */}
        <path d="M 0 0 L 28 8 L 6 22 Z" fill="white" stroke="#1c1c1c" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Fold overlap */}
        <path d="M 6 22 L 10 14 L 28 8" fill="none" stroke="#1c1c1c" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────
   Contact Detail Vector Icons
 ───────────────────────────────────────── */
function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#1c1c1c]">
      {/* Pin base stand */}
      <path d="M 4 22 L 20 22 M 6 22 L 12 16 L 18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pin head */}
      <circle cx="12" cy="8" r="4.5" fill="#fca5a5" stroke="currentColor" strokeWidth="1.5" />
      {/* Connecting vertical line */}
      <line x1="12" y1="12.5" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#1c1c1c]">
      {/* Phone shell */}
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Divider for bottom panel */}
      <path d="M 6 17 L 18 17" stroke="currentColor" strokeWidth="1.5" />
      {/* Yellow bottom panel fill */}
      <rect x="7" y="17.7" width="10" height="3.5" fill="#fde047" rx="0.5" />
      {/* Speaker/button bar */}
      <line x1="10" y1="19.5" x2="14" y2="19.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function EnvelopeArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#1c1c1c]">
      {/* Envelope body */}
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Envelope flap lines */}
      <path d="M 3 7 L 12 13 L 21 7" stroke="currentColor" strokeWidth="1.5" />
      {/* Arrow pointing down */}
      <path d="M 12 10 L 12 16 M 9 13 L 12 16 L 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Main ContactForm Component
 ───────────────────────────────────────── */
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
      <div className="relative bg-[#c9c1ee] px-6 pt-40 pb-36 text-center overflow-hidden">
        {/* Floating Rainbow Sticker (Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute left-[8%] top-[55%] -translate-y-1/2 hidden lg:block"
        >
          <RainbowSticker />
        </motion.div>

        {/* Floating Paper Airplane (Right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute right-[10%] top-[45%] -translate-y-1/2 hidden lg:block"
        >
          <PaperAirplane />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6"
          >
            How can I help you with
            <br />
            your next project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-gray-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Whether you have a clear vision or just an idea, I&apos;m
            <br className="hidden sm:inline" />
            here to help shape it into something meaningful.
          </motion.p>
        </div>
      </div>

      {/* Overlapping white card wrapper */}
      <div className="bg-white px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-5xl mx-auto -mt-16 bg-white rounded-[2rem] border border-[#1c1c1c] p-8 md:p-14 shadow-sm relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {sent ? (
            <div className="col-span-12 flex flex-col items-center py-20 gap-4 text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-2xl border border-green-200 text-green-600">
                ✓
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Message sent!</h2>
              <p className="text-gray-500 text-base max-w-sm">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setForm({ name: "", email: "", project: "" });
                  setSent(false);
                }}
                className="mt-6 border border-[#1c1c1c] bg-white text-gray-900 hover:bg-[#1c1c1c] hover:text-white px-8 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              {/* Left Column: Let's get in touch & info stack */}
              <div className="md:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                    Let&apos;s get in touch
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    Feel free to reach out for collaborations, project inquiries, or just to say hello.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <PinIcon />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-tight">Address</h4>
                      <p className="text-gray-500 text-sm mt-1.5 leading-snug">Moonshine St. 14/05, London</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <SmartphoneIcon />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-tight">Phone</h4>
                      <p className="text-gray-500 text-sm mt-1.5 leading-snug">00 (123) 456 78 90</p>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex gap-4 items-start">
                    <EnvelopeArrowIcon />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base leading-tight">E-mail</h4>
                      <p className="text-gray-500 text-sm mt-1.5 leading-snug">info@email.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="md:col-span-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What is your name*"
                      required
                      className="w-full border-b border-gray-300 pb-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email address*"
                      required
                      className="w-full border-b border-gray-300 pb-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your idea*"
                      required
                      className="w-full border-b border-gray-300 pb-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-transparent resize-none text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-fit border border-[#1c1c1c] bg-white text-gray-900 hover:bg-[#1c1c1c] hover:text-white px-8 py-3 rounded-xl font-medium text-sm transition-colors shadow-sm cursor-pointer mt-2"
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}
