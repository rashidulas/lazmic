"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

/* ─────────────────────────────────────────
   Inline SVG: spinning "I AM AVAILABLE
   FOR FREELANCE" circular badge
 ───────────────────────────────────────── */
function FreelanceBadge() {
  return (
    <div className="relative w-[96px] h-[96px] select-none drop-shadow-sm">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        aria-hidden
      >
        {/* 1. Outermost circle with soft blue fill & black stroke */}
        <circle cx="50" cy="50" r="48.5" fill="#cbdcf7" stroke="#1c1c1c" strokeWidth="1.3" />
        
        {/* 2. Text path circle definition */}
        <defs>
          <path
            id="fc-circle-path"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>

        {/* 3. Spinning text path */}
        <g className="animate-spin-slow origin-center">
          <text fill="#1c1c1c" fontSize="6.8" fontWeight="600" letterSpacing="1.8">
            <textPath href="#fc-circle-path" startOffset="0%">
              - I AM AVAILABLE - FOR FREELANCE{" "}
            </textPath>
          </text>
        </g>

        {/* 4. Innermost circle outlining the white center */}
        <circle cx="50" cy="50" r="21" fill="white" stroke="#1c1c1c" strokeWidth="1.3" />
      </svg>

      {/* Static center envelope icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="#1c1c1c"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M2 4l10 9 10-9" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Torn-edge Washi Tape component
 ───────────────────────────────────────── */
function WashiTape() {
  const triangles = [
    { x: 20, y: 8 },
    { x: 48, y: 18 },
    { x: 76, y: 7 },
    { x: 104, y: 16 },
    { x: 130, y: 6 },
    { x: 158, y: 18 },
    { x: 186, y: 9 },
    { x: 34, y: 28 },
    { x: 62, y: 27 },
    { x: 90, y: 26 },
    { x: 118, y: 28 },
    { x: 146, y: 27 },
    { x: 174, y: 28 },
  ];

  return (
    <div className="relative w-56 h-10 -rotate-[4deg] drop-shadow-sm select-none">
      <svg
        viewBox="0 0 200 36"
        className="w-full h-full"
        aria-hidden
      >
        <path
          d="M 8 2 
             L 192 2 
             L 190 8 L 194 14 L 189 20 L 193 26 L 188 32 L 191 34
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
   Yellow organic scalloped blob (responsive)
 ───────────────────────────────────────── */
function YellowBlob() {
  const scallopPath =
    "M 105 30 A 190 190 0 0 1 295 30 A 72 72 0 0 1 350 100 A 72 72 0 0 1 350 220 A 72 72 0 0 1 350 340 A 72 72 0 0 1 350 460 A 72 72 0 0 1 295 500 A 190 190 0 0 1 105 500 A 72 72 0 0 1 50 460 A 72 72 0 0 1 50 340 A 72 72 0 0 1 50 220 A 72 72 0 0 1 50 100 A 72 72 0 0 1 105 30 Z";

  return (
    <div className="relative w-[280px] h-[370px] sm:w-[340px] sm:h-[450px] lg:w-[380px] lg:h-[505px] select-none transition-all duration-300">
      <svg
        viewBox="0 0 400 530"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <clipPath id="scallop-clip">
            <path d={scallopPath} />
          </clipPath>
        </defs>
        {/* Yellow background and outline stroke */}
        <path
          d={scallopPath}
          fill="#f5ca38"
          stroke="#1c1c1c"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Clipped image */}
        <image
          href="/images/lazmi-photo.jpg"
          width="400"
          height="530"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#scallop-clip)"
        />
      </svg>
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
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
              <WashiTape />
            </div>

            {/* Yellow blob SVG + image */}
            <YellowBlob />

            {/* Spinning freelance badge — bottom-left of blob */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 z-20"
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
            className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight"
          >
            Hey<span className="italic">!</span> That’s me.
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
