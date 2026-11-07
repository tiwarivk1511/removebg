"use client";

import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Full HD / 8K Ultra HD Export",
    removebg: "100% Free (8K Ultra HD)",
    traditional: "Paid Credits ($0.20+/img)",
    others: "Low Res / Watermarked",
  },
  {
    feature: "Cost & Subscriptions",
    removebg: "100% Free Forever",
    traditional: "Monthly Paid Subscription",
    others: "Limited Free Trial",
  },
  {
    feature: "Data Privacy & Storage",
    removebg: "Zero Server File Storage",
    traditional: "Stored on Cloud Server",
    others: "Stored on Server",
  },
  {
    feature: "Instant Tab-Close Auto-Deletion",
    removebg: "Yes (Immediate Purge)",
    traditional: "No",
    others: "No",
  },
  {
    feature: "Watermark on Cutout",
    removebg: "Zero Watermarks",
    traditional: "Watermarked Free Tier",
    others: "Watermarked",
  },
  {
    feature: "Real-Time Touch-Up Brush Studio",
    removebg: "Included Free (Eraser & Restore)",
    traditional: "Basic Brush Only",
    others: "Paid Add-on",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" /> Superior AI Edge Technology
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">removebg</span> Beats Traditional Removers
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            See why creators, e-commerce stores, and photographers are switching to removebg by HyperLogics InfoTech.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="glass-card bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200 text-xs uppercase tracking-wider font-black text-slate-700">
                  <th className="p-4 sm:p-5">Feature & Capabilities</th>
                  <th className="p-4 sm:p-5 text-cyan-700 bg-cyan-50/80 border-x border-cyan-200 font-extrabold text-sm">
                    removebg (HyperLogics)
                  </th>
                  <th className="p-4 sm:p-5 text-slate-600">Traditional Paid Removers</th>
                  <th className="p-4 sm:p-5 text-slate-600">Standard Free Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 bg-cyan-50/40 border-x border-cyan-100 font-black text-cyan-700 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.removebg}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-600">{row.traditional}</td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
