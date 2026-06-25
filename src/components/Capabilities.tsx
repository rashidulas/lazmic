"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data";

/* ─────────────────────────────────────────
   Inline SVG: spinning "I AM AVAILABLE
   FOR FREELANCE" circular badge
───────────────────────────────────────── */
function FreelanceBadge() {
  return (
    <div className="relative w-[88px] h-[88px]">
      {/* Spinning ring of text */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow"
        aria-hidden
      >
        <defs>
          <path
            id="fc-circle"
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <text fill="#1c1c1c" fontSize="8.2" fontWeight="600" letterSpacing="2">
          <textPath href="#fc-circle">
            I AM AVAILABLE · FOR FREELANCE ·{" "}
          </textPath>
        </text>
      </svg>

      {/* Static centre — envelope icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center">
          <svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="#374151"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="M2 4l10 9 10-9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Zigzag / triangle banner decoration
   (sits at the top of the yellow blob)
───────────────────────────────────────── */
function ZigzagBanner() {
  return (
    <div className="relative flex items-center justify-center w-44 h-9 bg-white rounded-sm shadow-sm overflow-hidden">
      {/* Row of small triangles */}
      <svg viewBox="0 0 176 32" className="absolute inset-0 w-full h-full">
        {Array.from({ length: 11 }).map((_, i) => (
          <polygon
            key={i}
            points={`${i * 16},0 ${i * 16 + 8},20 ${i * 16 + 16},0`}
            fill="#1c1c1c"
          />
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   Yellow 4-lobe organic blob (photo frame)
   Built by stacking 4 corner-circle bumps
   on top of a rounded-square base.
───────────────────────────────────────── */
function YellowBlob({ children }: { children: React.ReactNode }) {
  const yellow = "#f5ca38";
  const W = 270;  // blob width
  const H = 340;  // blob height
  const lobe = 72; // corner lobe circle diameter

  return (
    <div className="relative" style={{ width: W, height: H }}>
      {/* Base rounded-rectangle fills the center */}
      <div
        className="absolute"
        style={{
          background: yellow,
          inset: lobe / 2,
          borderRadius: "20px",
        }}
      />

      {/* Four corner-lobe circles */}
      {[
        { top: 0,         left: 0          }, // top-left
        { top: 0,         left: W - lobe   }, // top-right
        { top: H - lobe,  left: 0          }, // bottom-left
        { top: H - lobe,  left: W - lobe   }, // bottom-right
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  lobe,
            height: lobe,
            background: yellow,
            top:  pos.top,
            left: pos.left,
          }}
        />
      ))}

      {/* Photo clipped to the same blob shape via clip-path */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: 0,
          clipPath: `
            path('
              M ${lobe / 2} 0
              H ${W - lobe / 2}
              Q ${W} 0 ${W} ${lobe / 2}
              V ${H - lobe / 2}
              Q ${W} ${H} ${W - lobe / 2} ${H}
              H ${lobe / 2}
              Q 0 ${H} 0 ${H - lobe / 2}
              V ${lobe / 2}
              Q 0 0 ${lobe / 2} 0
              Z
            ')
          `,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Capabilities section
───────────────────────────────────────── */
export default function Capabilities() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ══ LEFT — yellow blob photo ══ */}
        <div className="flex items-center justify-center">
          <div className="relative">

            {/* Zigzag banner sits at the very top of the blob */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
              <ZigzagBanner />
            </div>

            {/* Yellow blob + photo */}
            <YellowBlob>
              {/* Swap src for /images/lazmi-photo.jpg once you have it */}
              <div className="w-full h-full bg-[#f5ca38] flex items-end justify-center">
                <div
                  className="w-full h-[95%] relative"
                  style={{ backgroundSize: "cover", backgroundPosition: "center top" }}
                >
                  {/* Placeholder gradient — replace with <Image> */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                      stroke="#1c1c1c" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    <span className="text-xs text-gray-700 font-medium">Add your photo</span>
                  </div>
                </div>
              </div>
            </YellowBlob>

            {/* Spinning freelance badge — bottom-left of blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-8 z-20 bg-white rounded-full shadow-md border border-gray-100"
            >
              <FreelanceBadge />
            </motion.div>

          </div>
        </div>

        {/* ══ RIGHT — bio + skill bars ══ */}
        <div className="flex flex-col gap-6">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Hey! That&apos;s me.
          </motion.h2>

          {/* Bio paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 leading-relaxed text-sm md:text-base"
          >
            I am Lazmi, a multidisciplinary designer and developer based in a vibrant city.
            With a keen eye for aesthetics and a knack for innovative solutions, I thrive in
            the dynamic intersection of design and code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-gray-500 leading-relaxed text-sm md:text-base"
          >
            My journey in this dynamic and ever-evolving field has been a testament to my
            unwavering passion for meticulously crafting meaningful user experiences,
            leveraging cutting-edge technologies, and fearlessly pushing the boundaries
            of digital creativity.
          </motion.p>

          {/* Skill bars — 2 column grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-2">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-700">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-[6px] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.25 + i * 0.08, ease: "easeOut" }}
                    className={`h-full rounded-full ${skill.barColor}`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
