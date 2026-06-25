"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

/* ══════════════════════════════════════════════════════════
   ProjectCard — sticky positioning + scroll-linked scale
══════════════════════════════════════════════════════════ */
interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

function ProjectCard({ project, index, totalCards, scrollYProgress }: CardProps) {
  /**
   * Scale this card down from 1 → 0.95 while the NEXT card
   * slides over it.  The "coverage window" for card i is:
   *   start: i / totalCards
   *   end:   (i + 1) / totalCards
   * The last card never gets covered, so its scale stays 1.
   */
  const isLast = index === totalCards - 1;
  const scaleStart = index / totalCards;
  const scaleEnd   = (index + 1) / totalCards;

  const scale = useTransform(
    scrollYProgress,
    [scaleStart, scaleEnd],
    isLast ? [1, 1] : [1, 0.95]
  );

  return (
    <motion.div
      style={{
        position: "sticky",
        /* Each card sticks a little lower than the previous one,
           creating the layered-folder look at the top of the screen. */
        top: `calc(10vh + ${index * 32}px)`,
        zIndex: index + 1,
        scale,
        transformOrigin: "top center",
      }}
      className="w-full mb-6"
    >
      {/* ── Card shell ── */}
      <div className="bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* ── Left column: text ── */}
          <div className="flex flex-col justify-center gap-5 p-10 lg:p-14">

            {/* Category badges */}
            <div className="flex flex-wrap gap-2">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 border border-gray-200 rounded-full px-3 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm">
              {project.description}
            </p>

            {/* CTA button */}
            <button className="mt-2 w-fit flex items-center gap-2 border border-gray-900 text-gray-900 rounded-full px-6 py-3 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              View Project <ArrowUpRight size={15} />
            </button>
          </div>

          {/* ── Right column: media ── */}
          <div className={`${project.color} flex items-center justify-center rounded-r-[2rem] min-h-[280px] lg:min-h-full`}>
            <div className="flex flex-col items-center gap-3 opacity-40">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="4" y="8" width="40" height="28" rx="4" />
                <path d="M4 16 H44" />
                <path d="M16 36 L12 44 M32 36 L36 44 M10 44 H38" />
              </svg>
              <span className="text-xs font-medium tracking-wide">Project Preview</span>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   SelectedWorks — parent that owns the scroll container
══════════════════════════════════════════════════════════ */
export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Track progress from the moment the container's top edge
   * hits the top of the viewport ('start start') all the way
   * until its bottom edge leaves the bottom ('end end').
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="works" className="bg-white">

      {/* ── Section header (normal flow, outside sticky zone) ── */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Selected Works
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Projects that matter.
        </h2>
      </div>

      {/* ── Sticky card container ──────────────────────────────
          Height must be tall enough so each card gets its own
          scroll window before the next one slides over it.
          Formula: totalCards × 80 vh gives a comfortable pace.
      ─────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative px-6 max-w-6xl mx-auto"
        style={{ minHeight: `${projects.length * 80}vh` }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            totalCards={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Bottom padding so the last sticky card clears before the next section */}
      <div style={{ paddingBottom: `calc(10vh + ${projects.length * 32}px)` }} />
    </section>
  );
}
