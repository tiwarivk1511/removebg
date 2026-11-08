"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import DropzoneUploader from "@/components/DropzoneUploader";
import ImageProcessor from "@/components/ImageProcessor";
import BulkProcessor from "@/components/BulkProcessor";
import AdBanner from "@/components/AdBanner";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { CheckCircle2, Lock, Zap, Sparkles, FolderArchive } from "lucide-react";

export default function Home() {
  const [processingMode, setProcessingMode] = useState<"single" | "bulk">("single");
  const [activeImage, setActiveImage] = useState<{
    file: File | null;
    url: string;
    filename: string;
  } | null>(null);

  const handleImageSelected = (file: File | null, url: string, filename: string) => {
    setActiveImage({ file, url, filename });
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setActiveImage(null);
  };

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

        {/* Hero Headline Section with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-5 pt-2 px-2"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-cyan-600 text-[11px] sm:text-xs font-black tracking-wide shadow-md shadow-cyan-500/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AI EDGE CLOUD OPERATIONAL • ZERO SERVER STORAGE</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.12]"
          >
            Remove Image Backgrounds{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              In Seconds
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-xl text-slate-700 leading-relaxed font-semibold max-w-2xl mx-auto"
          >
            Upload any PNG, JPG, or WebP photo for sub-pixel AI background removal.
            100% private, real-time processing powered by{" "}
            <a
              href="https://hyperlogics.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 font-extrabold underline underline-offset-4 hover:text-cyan-700 inline-flex items-center gap-1.5"
            >
              <span className="w-4 h-4 rounded bg-white border border-slate-200 p-0.5 inline-flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="https://hyperlogics.web.app/favicon.ico"
                  alt="HyperLogics Logo"
                  className="w-3.5 h-3.5 object-contain"
                />
              </span>
              HyperLogics InfoTech
            </a>.
          </motion.p>

          {/* Key Stat Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-1 text-xs font-bold text-slate-800"
          >
            <span className="flex items-center gap-1.5 text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-cyan-600" /> Free 8K HD Downloads
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
              <Lock className="w-4 h-4 text-emerald-600" /> Instant Tab-Close Deletion
            </span>
            <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200 shadow-sm">
              <Zap className="w-4 h-4 text-amber-600" /> Sub-Second Speed
            </span>
          </motion.div>
        </motion.div>

        {/* Studio Mode Switcher: Responsive Single Image vs Bulk Processing Tab */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex items-center justify-center p-1 bg-slate-200/80 rounded-2xl border border-slate-300 max-w-xl w-full mx-auto shadow-inner space-x-1"
        >
          <button
            onClick={() => setProcessingMode("single")}
            className={`flex-1 py-2.5 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              processingMode === "single"
                ? "bg-white text-cyan-600 shadow-md border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600 shrink-0" />
            <span className="hidden sm:inline">Single Image Studio</span>
            <span className="sm:hidden">Single Studio</span>
          </button>
          <button
            onClick={() => setProcessingMode("bulk")}
            className={`flex-1 py-2.5 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 transition-all ${
              processingMode === "bulk"
                ? "bg-white text-cyan-600 shadow-md border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FolderArchive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600 shrink-0" />
            <span className="hidden sm:inline">Bulk Batch (500 → ZIP)</span>
            <span className="sm:hidden">Bulk (500 ZIP)</span>
          </button>
        </motion.div>

        {/* Core Tool Interface & Sticky Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start pt-2">
          <div className="lg:col-span-3 space-y-6">
            <AnimatePresence mode="wait">
              {processingMode === "single" ? (
                <motion.div
                  key="single"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {!activeImage ? (
                    <DropzoneUploader onImageSelected={handleImageSelected} />
                  ) : (
                    <ImageProcessor
                      originalUrl={activeImage.url}
                      filename={activeImage.filename}
                      rawFile={activeImage.file}
                      onReset={handleReset}
                    />
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="bulk"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BulkProcessor />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
            {/* Google AdSense Sidebar Ad Slot */}
            <AdBanner slot="1002" format="sidebar" />
          </div>
        </div>

        {/* Google AdSense Native In-Feed Ad Slot */}
        <AdBanner slot="1003" format="native" className="max-w-5xl mx-auto" />

        {/* Features */}
        <FeaturesSection />

        {/* How It Works */}
        <HowItWorks />

        {/* Competitor Superiority Comparison */}
        <ComparisonSection />

        {/* Google AdSense Bottom Leaderboard Ad Slot */}
        <AdBanner slot="1004" format="leaderboard" className="max-w-5xl mx-auto" />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
