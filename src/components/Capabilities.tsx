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

   Built from the UNION of 4 equal circles:
     r = 85px
     TL centre: (85, 90)   TR: (185, 90)
     BL centre: (85, 250)  BR: (185, 250)

   Outer-boundary intersection points:
     Top    TL∩TR: (135, 30)
     Right  TR∩BR: (214, 170)
     Bottom BL∩BR: (135, 310)
     Left   TL∩BL:  (56, 170)

   The path traces one arc per lobe (clockwise,
   small-arc = 0, sweep = 1).
───────────────────────────────────────── */
const BLOB_PATH =
  "M 135 30 A 85 85 0 0 1 214 170 A 85 85 0 0 1 135 310 A 85 85 0 0 1 56 170 A 85 85 0 0 1 135 30 Z";

function YellowBlob({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 270,
        height: 340,
        background: "#f5ca38",
        clipPath: `path('${BLOB_PATH}')`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
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
              <Image
                src="/images/lazmi-photo.jpg"
                alt="Lazmi Chowdhury"
                fill
                className="object-cover"
                style={{ objectPosition: "center 10%" }}
                priority
              />
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
