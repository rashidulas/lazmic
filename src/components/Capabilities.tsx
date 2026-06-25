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
    <div className="relative w-[120px] h-[120px] rounded-full bg-[#cbdcf7] border border-[#1c1c1c] flex items-center justify-center shadow-sm select-none">
      {/* Spinning ring of text */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow"
        aria-hidden
      >
        <defs>
          <path
            id="fc-circle"
            d="M 50,50 m -36.5,0 a 36.5,36.5 0 1,1 73,0 a 36.5,36.5 0 1,1 -73,0"
          />
        </defs>
        {/* Inner circle line behind/below the text */}
        <circle cx="50" cy="50" r="28.5" fill="none" stroke="#1c1c1c" strokeWidth="0.8" />
        <text fill="#1c1c1c" fontSize="7.6" fontWeight="600" letterSpacing="1.5">
          <textPath href="#fc-circle">
            I AM AVAILABLE · FOR FREELANCE ·{" "}
          </textPath>
        </text>
      </svg>

      {/* Static centre — envelope icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50px] h-[50px] rounded-full bg-white border border-[#1c1c1c] shadow flex items-center justify-center">
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#1c1c1c"
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
   Torn-edge Washi Tape component
 ───────────────────────────────────────── */
function WashiTape() {
  // A list of scattered triangles pointing upwards
  const triangles = [
    { x: 18, y: 8 },
    { x: 42, y: 18 },
    { x: 68, y: 7 },
    { x: 92, y: 16 },
    { x: 114, y: 6 },
    { x: 138, y: 18 },
    { x: 162, y: 9 },
    { x: 30, y: 28 },
    { x: 55, y: 27 },
    { x: 80, y: 26 },
    { x: 104, y: 28 },
    { x: 128, y: 27 },
    { x: 152, y: 28 },
  ];

  return (
    <div className="relative w-48 h-9 -rotate-[4deg] drop-shadow-sm select-none">
      <svg
        viewBox="0 0 180 36"
        className="w-full h-full"
        aria-hidden
      >
        {/* Torn tape body path */}
        <path
          d="M 8 2 
             L 172 2 
             L 170 8 L 174 14 L 169 20 L 173 26 L 168 32 L 171 34
             L 8 34 
             L 10 28 L 6 22 L 11 16 L 7 10 L 11 4 Z"
          fill="#cbdcf7"
          stroke="#1c1c1c"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Triangles pattern */}
        {triangles.map((t, idx) => (
          <polygon
            key={idx}
            points={`${t.x},${t.y} ${t.x + 3.5},${t.y + 7} ${t.x - 3.5},${t.y + 7}`}
            fill="#1c1c1c"
          />
        ))}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   Yellow 6-lobe organic scalloped blob
 ───────────────────────────────────────── */
function YellowBlob({ children }: { children: React.ReactNode }) {
  const scallopPath =
    "M 70 15 L 200 15 A 35 35 0 0 1 235 50 A 45 45 0 0 1 235 130 A 45 45 0 0 1 235 210 A 45 45 0 0 1 235 290 A 35 35 0 0 1 200 325 L 70 325 A 35 35 0 0 1 35 290 A 45 45 0 0 1 35 210 A 45 45 0 0 1 35 130 A 45 45 0 0 1 35 50 A 35 35 0 0 1 70 15 Z";

  return (
    <div className="relative w-[270px] h-[340px] select-none">
      {/* Hidden SVG with clip path for image clipping */}
      <svg className="absolute w-0 h-0" aria-hidden>
        <defs>
          <clipPath id="scallop-clip" clipPathUnits="userSpaceOnUse">
            <path d={scallopPath} />
          </clipPath>
        </defs>
      </svg>

      {/* SVG background and border outline */}
      <svg
        viewBox="0 0 270 340"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden
      >
        <path
          d={scallopPath}
          fill="#f5ca38"
          stroke="#1c1c1c"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Clipped image content container */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: "url(#scallop-clip)",
          WebkitClipPath: "url(#scallop-clip)",
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

            {/* Washi tape sits at the very top of the blob */}
            <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 z-20">
              <WashiTape />
            </div>

            {/* Yellow blob + photo */}
            <YellowBlob>
              <Image
                src="/images/lazmi-image.jpg"
                alt="Meeko"
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
              className="absolute bottom-[-16px] left-[-36px] z-20"
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
            Hey! That’s me.
          </motion.h2>

          {/* Bio paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 leading-relaxed text-sm md:text-base"
          >
            I am Meeko, a multidisciplinary designer and blogger based in the
            vibrant city of Los Angeles. With a keen eye for aesthetics and a
            knack for innovative solutions, I thrive in the dynamic intersection
            of design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-gray-500 leading-relaxed text-sm md:text-base"
          >
            My journey in this dynamic and ever-evolving field has been a
            testament to my unwavering passion for meticulously crafting
            meaningful user experiences, leveraging cutting-edge technologies,
            and fearlessly pushing the boundaries of digital creativity.
          </motion.p>

          {/* Skill bars — 2 column grid */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-2">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-baseline mb-1.5">
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                  <span className="text-sm font-semibold text-gray-700">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-white border border-[#1c1c1c] rounded-full h-2.5 overflow-hidden">
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
