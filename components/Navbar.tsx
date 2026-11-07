"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full backdrop-blur-2xl bg-white/95 border-b border-slate-200/90 shadow-md shadow-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - Responsive sizing from 200px down to smartwatch */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <Image
              src="/removebg.png"
              alt="removebg logo"
              width={320}
              height={180}
              className="w-[180px] xs:w-[220px] sm:w-[280px] md:w-[320px] h-auto max-h-10 sm:max-h-16 object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>

        {/* HyperLogics InfoTech Partner Badge (Desktop) */}
        <div className="hidden xl:flex items-center">
          <a
            href="https://hyperlogics.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all duration-200 text-xs font-bold text-slate-800 hover:text-slate-950 shadow-sm"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white border border-slate-200 p-0.5 shadow-sm shrink-0">
              <img
                src="https://hyperlogics.web.app/favicon.ico"
                alt="HyperLogics InfoTech Logo"
                className="w-4 h-4 object-contain"
              />
            </span>
            <span>Powered by <strong className="text-cyan-600 font-extrabold">HyperLogics InfoTech</strong></span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-bold">
          <Link
            href="/#how-it-works"
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/#features"
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-slate-700 hover:text-cyan-600 transition-colors"
          >
            Terms
          </Link>

          <a
            href="https://hyperlogics.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all duration-200"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-md bg-white p-0.5 shadow-sm shrink-0">
              <img
                src="https://hyperlogics.web.app/favicon.ico"
                alt="HyperLogics InfoTech"
                className="w-4 h-4 object-contain"
              />
            </span>
            <span>HyperLogics InfoTech</span>
          </a>
        </nav>

        {/* Mobile / Smartwatch Hamburger Button */}
        <div className="flex items-center lg:hidden space-x-2">
          <a
            href="https://hyperlogics.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700"
            title="HyperLogics AI"
          >
            <img
              src="https://hyperlogics.web.app/favicon.ico"
              alt="HyperLogics AI"
              className="w-4 h-4 object-contain"
            />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl px-4 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-bold text-sm text-slate-800">
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 hover:text-cyan-600 transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 hover:text-cyan-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 hover:text-cyan-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 hover:text-cyan-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href="https://hyperlogics.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <img
                src="https://hyperlogics.web.app/favicon.ico"
                alt="HyperLogics AI"
                className="w-4 h-4 rounded bg-white p-0.5"
              />
              <span>Visit HyperLogics AI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
