"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Lightbulb,
  PenTool,
  Code,
};

export default function Process() {
  return (
    <section className="bg-[#f4f0fa] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: sticky heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">My Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            High&#8209;quality work,<br />delivered thoughtfully.
          </h2>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#111827", color: "#ffffff" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border-2 border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right: steps list */}
        <div className="flex flex-col gap-10">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Code;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 items-start"
              >
                {/* Faded number */}
                <span className="text-6xl font-bold text-gray-200 leading-none select-none shrink-0 mt-1">
                  ({step.number})
                </span>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                      <Icon size={15} className="text-gray-700" />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-base">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
