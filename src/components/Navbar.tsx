"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Home II", href: "#" },
  { label: "Home III", href: "#" },
  { label: "Work I", href: "#" },
  { label: "Work II", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-4xl"
    >
      <nav className="flex items-center justify-between bg-white border border-gray-300 rounded-2xl px-6 py-3.5 shadow-sm">
        {/* Logo */}
        <Link
          href="/"
          className="text-gray-900 font-bold text-lg tracking-tight shrink-0"
        >
          Meeko
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icon buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* X / Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
            </svg>
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.74a9.31 9.31 0 0 0-4.908-1.282 17.5 17.5 0 0 0-2.454.195 18.732 18.732 0 0 1 3.513 5.485c2.474-1.127 3.978-3.514 3.849-4.398zm-1.89-6.38a9.418 9.418 0 0 0-3.69-3.328 17.065 17.065 0 0 0-3.14 5.926c3.21-.29 5.86.326 6.83.732zm-12.825-.398a15.228 15.228 0 0 1 2.875-5.592A9.458 9.458 0 0 0 3.013 9.4c1.173-.082 2.685.034 4.407.422zM2.08 13.88a9.435 9.435 0 0 0 5.498 7.64c-.33-2.616-1.558-5.333-3.626-7.85-.236.035-.47.078-.71.127-.4.07-.8.15-1.162.246V13.88zm8.685 8.01a15.828 15.828 0 0 0 1.258-5.467 17.653 17.653 0 0 0-5.836-1.042c1.785 2.502 2.923 5.178 3.32 6.51zm3.844-.993c-.495-1.745-1.79-4.57-3.606-7.14a19.78 19.78 0 0 1 2.378-.17 10.976 10.976 0 0 1 4.542 1.135c-.93 2.766-3.32 6.175-3.314 6.175z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
            </svg>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
