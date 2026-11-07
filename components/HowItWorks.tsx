"use client";

import { motion } from "motion/react";
import { Upload, Sparkles, Download } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description: "Drag and drop any PNG, JPG, JPEG, or WebP photo up to 15MB. No registration or account setup required.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Edge Extraction",
    description: "Our proprietary HyperLogics AI engine detects subjects, fine hair filaments, and edge contours in under 1 second.",
  },
  {
    step: "03",
    icon: Download,
    title: "Download HD & Customize",
    description: "Save your HD transparent PNG cutout instantly or replace backdrops with custom photos and studio colors.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-black text-cyan-700 uppercase tracking-widest bg-cyan-50 px-4 py-1.5 rounded-full border border-cyan-200 shadow-sm">
            3 Simple Steps
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm font-semibold text-slate-600">
            Extract background cutouts effortlessly in seconds directly in your web browser.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card bg-white rounded-3xl p-8 border border-slate-200 hover:border-cyan-500 relative flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/15"
              >
                <div className="absolute top-5 right-6 text-4xl font-black text-cyan-600/20 group-hover:text-cyan-600/40 transition-colors">
                  {step.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
