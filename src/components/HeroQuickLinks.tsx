"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Floating hero decorations ─── */
function PenNibIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
      stroke="#6b6b8a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 6 L38 20 L28 44 L24 44 L14 20 Z" />
      <path d="M14 20 L38 20" />
      <path d="M26 44 L26 48" />
      <circle cx="26" cy="48" r="2" fill="#6b6b8a" stroke="none" />
      <path d="M20 28 L26 44 L32 28" />
    </svg>
  );
}

function CupIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
      stroke="#6b6b8a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="16" width="28" height="26" rx="4" />
      <path d="M10 22 L6 22 Q2 22 2 27 Q2 32 6 32 L10 32" />
      <path d="M17 16 L17 10 Q17 6 24 6 Q31 6 31 10 L31 16" />
      <path d="M20 10 L28 10" />
    </svg>
  );
}

function HandCursorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11V5a2 2 0 0 1 4 0v6" />
      <path d="M13 10V4a2 2 0 0 1 4 0v6" />
      <path d="M17 10a2 2 0 0 1 4 0v4a8 8 0 0 1-8 8H9a8 8 0 0 1-8-8V9a2 2 0 0 1 4 0v3" />
    </svg>
  );
}

/* ─── Card-specific line-art icons ─── */
function PortfolioIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
      stroke="#5a5a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Monitor frame */}
      <rect x="4" y="8" width="44" height="30" rx="4" />
      {/* Three header dots */}
      <circle cx="12" cy="15" r="1.5" fill="#5a5a8a" stroke="none" />
      <circle cx="18" cy="15" r="1.5" fill="#5a5a8a" stroke="none" />
      <circle cx="24" cy="15" r="1.5" fill="#5a5a8a" stroke="none" />
      <path d="M4 20 H48" />
      {/* Globe inside */}
      <circle cx="26" cy="31" r="6" />
      <path d="M20 31 H32" />
      <path d="M26 25 Q22 31 26 37 Q30 31 26 25" />
      {/* Stand */}
      <path d="M20 38 L18 44" />
      <path d="M32 38 L34 44" />
      <path d="M14 44 H38" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
      stroke="#5a5a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Clipboard body */}
      <rect x="10" y="10" width="30" height="36" rx="3" />
      {/* Clip */}
      <path d="M20 10 H30 V14 H20 Z" />
      {/* Lines */}
      <path d="M16 22 H35" />
      <path d="M16 28 H35" />
      <path d="M16 34 H26" />
      {/* Pencil */}
      <path d="M30 34 L36 28 L39 31 L33 37 Z" />
      <path d="M36 28 L38 26 L40 28 L38 30" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
      stroke="#5a5a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Envelope */}
      <rect x="6" y="14" width="40" height="28" rx="4" />
      <path d="M6 14 L26 30 L46 14" />
      {/* Small letter lines inside */}
      <path d="M14 22 L22 22" strokeWidth="1" />
      <path d="M14 26 L20 26" strokeWidth="1" />
    </svg>
  );
}

/* ─── Card data ─── */
const cards = [
  {
    icon: PortfolioIcon,
    title: "My Portfolio",
    description: "Explore selected projects and my approach to design.",
    href: "/#works",
    btnColor: "border-blue-300 text-blue-500",
  },
  {
    icon: AboutIcon,
    title: "About Me",
    description: "A closer look at my background, skills, and creative journey.",
    href: "/about",
    btnColor: "border-amber-300 text-amber-500",
  },
  {
    icon: ContactIcon,
    title: "Contact Me",
    description: "Let's work together to bring your ideas and vision to life.",
    href: "/contact",
    btnColor: "border-blue-300 text-blue-500",
  },
];

/* ─── Single card UI ─── */
function CardUI({ card }: { card: typeof cards[number] }) {
  const Icon = card.icon;
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center gap-4 h-full">
      <div className="text-gray-600">
        <Icon />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-900 font-bold text-base">{card.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
      </div>
      <a
        href={card.href}
        className={`mt-auto w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:bg-gray-50 ${card.btnColor}`}
        aria-label={`Go to ${card.title}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

/* ─── Scroll-linked fan-out cards section ─── */
function FanOutCards() {
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * Tie card positions strictly to scrollYProgress.
   * 0 = section top just entered viewport bottom (cards stacked)
   * 1 = section top reached 25% from top of viewport (cards fully fanned)
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.25"],
  });

  /* Left card: tucked right → fans to its column */
  const leftX      = useTransform(scrollYProgress, [0, 1], [150,  0]);
  const leftY      = useTransform(scrollYProgress, [0, 1], [30,   0]);
  const leftRot    = useTransform(scrollYProgress, [0, 1], [5,    0]);

  /* Right card: tucked left → fans to its column */
  const rightX     = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const rightY     = useTransform(scrollYProgress, [0, 1], [30,   0]);
  const rightRot   = useTransform(scrollYProgress, [0, 1], [-5,   0]);

  return (
    /**
     * Split background:
     *   top 52 %  → same purple as the hero  (#c9c1ee)
     *   bottom 48 % → white (leading into the works section)
     * Cards are centered vertically, so they straddle the colour boundary.
     */
    <section
      ref={sectionRef}
      className="relative px-6 py-20 overflow-visible"
      style={{
        background: "linear-gradient(to bottom, #c9c1ee 52%, #ffffff 52%)",
      }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 overflow-visible">

        {/* LEFT — fans outward from behind center */}
        <motion.div
          style={{ x: leftX, y: leftY, rotate: leftRot, zIndex: 10, position: "relative" }}
          whileHover={{ y: -5 }}
        >
          <CardUI card={cards[0]} />
        </motion.div>

        {/* CENTER — stays on top */}
        <motion.div
          style={{ zIndex: 20, position: "relative" }}
          whileHover={{ y: -5 }}
        >
          {/* Slightly elevated shadow to show it's on top */}
          <div className="rounded-2xl shadow-lg h-full">
            <CardUI card={cards[1]} />
          </div>
        </motion.div>

        {/* RIGHT — fans outward from behind center */}
        <motion.div
          style={{ x: rightX, y: rightY, rotate: rightRot, zIndex: 10, position: "relative" }}
          whileHover={{ y: -5 }}
        >
          <CardUI card={cards[2]} />
        </motion.div>

      </div>
    </section>
  );
}

/* ─── Main export ─── */
export default function HeroQuickLinks() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO  —  full-screen lavender
      ══════════════════════════════════ */}
      <section className="relative bg-[#c9c1ee] min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 pt-28 pb-16">

        {/* Floating: sparkle + "Web Development" badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute left-[6%] top-[38%] -rotate-[14deg] flex flex-col items-center gap-2"
        >
          <span className="text-yellow-400 text-xl leading-none">✦</span>
          <div className="flex items-center gap-1.5 bg-white/90 border border-white rounded-full px-4 py-1.5 shadow-sm">
            <span className="text-xs font-semibold text-gray-700 tracking-tight">Web Development</span>
          </div>
        </motion.div>

        {/* Floating: pen nib icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute left-[12%] bottom-[32%] opacity-70"
        >
          <PenNibIcon />
        </motion.div>

        {/* Floating: cup icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute right-[8%] top-[32%] opacity-70"
        >
          <CupIcon />
        </motion.div>

        {/* Floating: "No-code Design" badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="absolute right-[5%] top-[52%] rotate-[10deg]"
        >
          <div className="flex items-center gap-1.5 bg-white/90 border border-white rounded-full px-4 py-1.5 shadow-sm">
            <HandCursorIcon />
            <span className="text-xs font-semibold text-gray-700 tracking-tight">No-code Design</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <div className="text-center max-w-3xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold text-gray-900 leading-[1.1] tracking-tight"
          >
            Hello!{" "}
            <span
              className="inline-block align-middle mx-2 rounded-full bg-pink-200 border-2 border-pink-300"
              style={{
                width: "clamp(3rem,7vw,5rem)",
                height: "clamp(3rem,7vw,5rem)",
              }}
            />
            {" "}I&apos;m Lazmi,
            <br />
            a product designer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-7 text-gray-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            I specialize in{" "}
            <strong className="font-bold text-gray-900">HTML, CSS, WordPress</strong>, and{" "}
            <strong className="font-bold text-gray-900">Framer</strong>, with a strong track record
            of converting designs into responsive websites.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAN-OUT CARDS  —  spans purple → white
      ══════════════════════════════════════════ */}
      <FanOutCards />
    </>
  );
}
