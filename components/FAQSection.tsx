"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is removebg completely free to use?",
    a: "Yes! removebg provides 100% free background removal for high-resolution images. There are no hidden fees, subscriptions, or forced watermarks on your downloaded photos.",
  },
  {
    q: "Are my uploaded photos stored on any server?",
    a: "NO! We enforce a strict Zero Server Storage Policy. Your uploaded photos are NEVER stored or saved on any server disk or database. Photos are edited in real time during your session and are IMMEDIATELY REMOVED & DELETED as soon as you close the browser tab or refresh the page!",
  },
  {
    q: "Are my photos used to train AI models or shared with anyone?",
    a: "ABSOLUTELY NOT! Your images are 100% private. We NEVER sell, share, or publish your photos, and we NEVER use them to train public AI models or algorithms.",
  },
  {
    q: "Who owns the copyright of the processed images?",
    a: "You retain 100% ownership and full copyright of all your original photos and exported cutout PNGs. You are free to use your output assets for personal, commercial, marketing, or e-commerce purposes without restriction.",
  },
  {
    q: "What image file formats and resolution limits are supported?",
    a: "We support PNG, JPG, JPEG, and WebP file formats up to 15MB in file size. We preserve your original image aspect ratio and resolution so you get crisp HD results.",
  },
  {
    q: "How does the background removal technology work?",
    a: "removebg utilizes proprietary AI edge detection algorithms operated on HyperLogics InfoTech's private cloud engine. It analyzes color contrast, depth cues, and hair/edge contours to generate a pixel-precise alpha channel mask.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-black text-cyan-700 uppercase tracking-widest bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200 inline-flex items-center gap-1.5 shadow-sm">
            <HelpCircle className="w-4 h-4 text-cyan-600" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-sm font-semibold text-slate-600">
            Everything you need to know about removebg and HyperLogics InfoTech image processing.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-md hover:border-cyan-500"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between space-x-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-slate-900 pr-2">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-2 text-sm font-medium text-slate-700 leading-relaxed border-t border-slate-200 bg-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
