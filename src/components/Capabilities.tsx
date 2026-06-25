"use client";

import { motion } from "framer-motion";
import { skills, serviceTags } from "@/lib/data";

export default function Capabilities() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* ── Left: arched image + spinning badge ── */}
      <div className="bg-[#fdfbf5] flex items-center justify-center py-24 px-8 relative">
        <div className="relative w-56 md:w-64">
          {/* Arched pill-shaped image frame */}
          <div className="rounded-[9999px] overflow-hidden aspect-[3/5] bg-purple-100 flex items-center justify-center">
            {/* Replace with <Image> once a real photo is available */}
            <span className="text-gray-400 text-xs text-center px-4 leading-relaxed">
              Your photo goes here
            </span>
          </div>

          {/* Spinning freelance badge */}
          <div className="absolute -right-10 top-1/3 w-28 h-28">
            <div className="relative w-full h-full">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin-slow"
              >
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  fill="#6b21a8"
                  fontSize="8.5"
                  fontWeight="600"
                  letterSpacing="2.2"
                >
                  <textPath href="#badge-circle">
                    I AM AVAILABLE FOR FREELANCE •{" "}
                  </textPath>
                </text>
              </svg>
              {/* Centre star */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-9 h-9 bg-purple-700 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-sm leading-none">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: skills + service tags ── */}
      <div className="bg-white py-24 px-8 lg:px-16 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 leading-tight">
          Tools &amp; skills I bring.
        </h2>

        {/* Skill progress bars */}
        <div className="flex flex-col gap-6 mb-12">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-2 bg-gray-900 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-2">
          {serviceTags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.04 }}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
