"use client";

import { motion } from "motion/react";
import { Sparkles, Download, Palette, Cpu, Lock, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Precision Edge Extraction",
    description: "Extract fine hair, fur, and intricate subject contours with sub-pixel CIELAB edge detection algorithms.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lock,
    title: "Zero Server Storage Privacy",
    description: "Uploaded photos are edited in real-time and deleted permanently from memory the moment you close the browser tab.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Download,
    title: "Lossless HD Transparent PNG",
    description: "Export high-resolution transparent PNG cutouts with zero watermarks or quality degradation.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Palette,
    title: "Custom Backdrop Studio",
    description: "Swap background backdrops with solid studio colors, gradient presets, or custom uploaded photos.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Sub-Second Cloud Speed",
    description: "Proprietary cloud edge inference delivers processed background masks in under 800 milliseconds.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "HyperLogics Enterprise AI Engine",
    description: "Powered by HyperLogics InfoTech private infrastructure—zero third-party data sharing or API rate caps.",
    color: "from-cyan-500 to-emerald-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" /> Enterprise AI Features
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Creators Choose <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">removebg</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            Designed by HyperLogics InfoTech for e-commerce, graphic designers, marketing teams, and photographers who demand studio quality.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card bg-white rounded-3xl p-7 border border-slate-200 hover:border-cyan-500 transition-all duration-300 space-y-4 group hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/15"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feat.color} p-0.5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
