"use client";

import { motion } from "motion/react";
import { Upload, Sparkles, Palette, Download } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: Upload,
    title: "Upload, Drag & Drop, or Paste URL",
    description: "Choose a file from your device, drag & drop, pick from sample photos, or paste an image web URL.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Deep Neural Segmentation",
    description: "Our proprietary HyperLogics AI engine detects subjects, fine hair filaments, and edge contours in under 1 second.",
  },
  {
    step: "03",
    icon: Palette,
    title: "Customize & Touch-Up Studio",
    description: "Refine edges with Magic Eraser, add 3D drop shadows, or swap backdrops with custom colors, gradients, and photos.",
  },
  {
    step: "04",
    icon: Download,
    title: "Export 8K Ultra HD or Batch ZIP",
    description: "Save crisp 8K Ultra HD transparent PNGs instantly or batch process up to 500 images into a single ZIP file.",
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
            4 Simple Steps
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm font-semibold text-slate-600">
            Extract background cutouts effortlessly in seconds directly in your web browser.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-cyan-500 relative flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/15"
              >
                <div className="absolute top-4 right-5 text-3xl font-black text-cyan-600/20 group-hover:text-cyan-600/40 transition-colors">
                  {step.step}
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-slate-600 leading-relaxed">
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
