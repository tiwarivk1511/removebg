"use client";

import Link from "next/link";
import Image from "next/image";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="mt-auto glass-panel border-t border-slate-200 bg-slate-100/90 py-8 sm:py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* Brand Logo & Description */}
          <div className="space-y-2 flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/removebg.png"
                alt="removebg"
                width={320}
                height={180}
                className="w-[180px] xs:w-[220px] sm:w-[280px] h-auto max-h-12 sm:max-h-16 object-contain"
              />
            </Link>
            <p className="text-xs font-semibold text-slate-600 max-w-sm px-2 sm:px-0">
              Ultra High Precision AI Background Remover. Instant transparent PNG cutouts powered by state-of-the-art edge detection.
            </p>
          </div>

          {/* HyperLogics Official Partner Card */}
          <div className="glass-card bg-white p-3.5 rounded-2xl border border-slate-200 flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-3 text-xs shadow-md w-full max-w-md lg:w-auto">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
              <img
                src="https://hyperlogics.web.app/favicon.ico"
                alt="HyperLogics InfoTech Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="text-center xs:text-left">
              <div className="font-extrabold text-slate-900 text-xs sm:text-sm">
                Operated by <a href="https://hyperlogics.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">HyperLogics InfoTech</a>
              </div>
              <p className="text-[11px] font-medium text-slate-600">
                100% Private Cloud Architecture & Enterprise AI Solutions
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
            <Link href="/" className="hover:text-cyan-600 transition-colors">
              Home
            </Link>
            <Link href="#how-it-works" className="hover:text-cyan-600 transition-colors">
              How it Works
            </Link>
            <Link href="#features" className="hover:text-cyan-600 transition-colors">
              Features
            </Link>
            <Link href="/privacy" className="hover:text-cyan-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-semibold text-slate-600">
          <p>
            © <CurrentYear fallback="2025" /> removebg. All rights reserved. Powered by{" "}
            <a
              href="https://hyperlogics.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline font-extrabold"
            >
              HyperLogics InfoTech
            </a>
          </p>
          <div className="flex items-center justify-center space-x-1 text-slate-600 text-[11px] sm:text-xs">
            <span>Built with ultra HD edge detection & 100% privacy standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
