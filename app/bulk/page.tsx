"use client";

import Navbar from "@/components/Navbar";
import BulkProcessor from "@/components/BulkProcessor";
import AdBanner from "@/components/AdBanner";
import Footer from "@/components/Footer";
import { FolderArchive, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function BulkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 relative overflow-hidden bg-grid-pattern">
      {/* Light Background Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Global Brand Header */}
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 z-10">
        {/* Permanent Top HyperLogics Advertisement Banner */}
        <AdBanner forceHyperlogics={true} format="leaderboard" className="max-w-5xl mx-auto" />

        {/* Hero Title Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-cyan-600 text-xs font-black tracking-wide shadow-md shadow-cyan-500/10">
            <FolderArchive className="w-4 h-4 text-cyan-600" />
            <span>BULK AI PROCESSING • UP TO 500 IMAGES → ZIP DOWNLOAD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Batch Remove Backgrounds{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              In Bulk
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold max-w-2xl mx-auto">
            Upload up to 500 product photos, e-commerce images, or portraits. Process all cutouts simultaneously and download as a single organized ZIP folder.
          </p>
        </div>

        {/* Bulk Processor Tool Component */}
        <BulkProcessor />

        {/* Native Ad Banner */}
        <AdBanner slot="2001" format="native" className="max-w-5xl mx-auto" />
      </main>

      <Footer />
    </div>
  );
}
