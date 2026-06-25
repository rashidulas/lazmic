"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAFooter() {
  return (
    <section className="bg-[#1c1c1c] text-white py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Chat bubble icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/10"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <rect
              x="2"
              y="4"
              width="20"
              height="14"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8" cy="11" r="1.2" fill="currentColor" />
            <circle cx="12" cy="11" r="1.2" fill="currentColor" />
            <circle cx="16" cy="11" r="1.2" fill="currentColor" />
            <path
              d="M7 18L5.5 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
        >
          Let&apos;s talk about
          <br />
          your project.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-lg max-w-md mb-14 leading-relaxed"
        >
          Got a project in mind? Let&apos;s create something great. We can transform that
          idea into a real product.
        </motion.p>

        {/* Button + handwritten annotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="relative"
        >
          <Link
            href="/contact"
            className="inline-flex items-center border border-white/60 rounded-full px-10 py-4 text-base font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Get in Touch
          </Link>

          {/* Handwritten annotation (right side) */}
          <div className="hidden sm:block absolute left-full top-1/2 -translate-y-1/2 ml-6 pointer-events-none">
            <svg
              width="64"
              height="48"
              viewBox="0 0 64 48"
              fill="none"
              className="mb-1"
            >
              <path
                d="M 4 44 C 12 28, 36 14, 60 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M 56 2 L 62 8 L 54 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
            <span
              className="block text-white/50 text-sm leading-snug"
              style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "16px" }}
            >
              and make it
            </span>
            <span
              className="block text-white/50 text-sm leading-snug"
              style={{ fontFamily: "var(--font-caveat, cursive)", fontSize: "16px" }}
            >
              real together
            </span>
          </div>
        </motion.div>

        {/* Footer bar */}
        <div className="w-full mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <span>© Lazmi Chowdhury. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/#works" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
