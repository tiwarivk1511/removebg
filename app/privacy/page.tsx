import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentYear from "@/components/CurrentYear";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, CheckCircle, Zap, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | removebg - Powered by HyperLogics InfoTech",
  description: "Worldwide Zero Server Storage Policy for removebg operated by HyperLogics InfoTech.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 z-10">
        {/* Header Title */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-cyan-600" /> Zero Server Storage & Real-Time Privacy Guarantee
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm font-semibold text-slate-600">
            Last Updated: March <CurrentYear fallback="2025" /> • Operating Entity:{" "}
            <a href="https://hyperlogics.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-extrabold hover:underline">
              HyperLogics InfoTech
            </a>
          </p>
        </div>

        {/* Executive Real-Time Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-white border border-cyan-200 text-slate-800 text-sm space-y-3 shadow-lg shadow-cyan-500/10">
          <h3 className="font-black text-cyan-700 text-base flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-cyan-600" /> Real-Time Editing & Instant Tab Close Deletion
          </h3>
          <p className="leading-relaxed font-bold text-slate-900">
            Your uploaded photos are NEVER stored or saved on any server disk or database. Photos are edited in real-time during your session and are IMMEDIATELY REMOVED & DELETED the moment you close the browser tab or refresh the page!
          </p>
        </div>

        {/* Glassmorphism Privacy Document Container */}
        <div className="glass-card bg-white/95 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xl">

          {/* Section 1: Real-Time Processing & Zero Storage */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <Lock className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>1. ZERO Server Storage & Instant Tab-Close Auto-Deletion</h2>
            </div>
            <p className="font-medium">
              At <strong>removebg</strong> (operated by <strong>HyperLogics InfoTech</strong> -{" "}
              <a href="https://hyperlogics.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-extrabold hover:underline">
                https://hyperlogics.web.app/
              </a>
              ), we guarantee complete privacy over your visual media:
            </p>
            <ul className="list-disc list-inside space-y-2.5 pl-2 font-semibold text-slate-800">
              <li>
                <strong>NO Server Disk Storage:</strong> Your uploaded photos are NEVER saved or stored on any server hard drive, database, or cloud disk.
              </li>
              <li>
                <strong>Real-Time Live Editing:</strong> Background removal occurs strictly in real time in your active browser session.
              </li>
              <li>
                <strong>Instant Tab-Close / Refresh Deletion:</strong> As soon as you close the browser tab or refresh the page, all image data, previews, and memory buffers are immediately and permanently deleted from the portal.
              </li>
              <li>
                <strong>NO AI Model Training:</strong> Your images are NEVER used to train public AI models, machine learning datasets, or third-party algorithms.
              </li>
              <li>
                <strong>NO Search Engine Indexing:</strong> Your images remain 100% private and are NEVER indexed, crawled, or made visible to web search engines.
              </li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* Section 2: 100% User Copyright Ownership */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <CheckCircle className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>2. You Retain 100% Ownership & Copyright</h2>
            </div>
            <p className="font-semibold text-slate-800">
              You retain <strong>100% full copyright and ownership</strong> over all original images you upload, as well as the processed transparent PNG cutouts you download. You are completely free to use your exported cutouts for commercial, personal, e-commerce, or marketing projects.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Section 3: Cookies & Ad Networks */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <Eye className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>3. Advertising Cookies & Analytics (GDPR / CCPA)</h2>
            </div>
            <p className="font-semibold text-slate-800">
              To keep removebg 100% free for users worldwide, we display non-intrusive banner advertisements and measure site performance:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 font-semibold text-slate-800">
              <li>
                <strong>Google AdSense & Cookies:</strong> Third-party ad networks (like Google AdSense) may use cookies to serve relevant ads based on general website traffic.
              </li>
              <li>
                <strong>Opt-Out Standards:</strong> Users in the EU (GDPR) and California (CCPA) can manage or opt out of personalized ad tracking anytime via Google's official Ad Settings page.
              </li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* Section 4: Operating Entity & Contact */}
          <section className="space-y-3">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              4. Service Provider & Contact Info
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
              <span className="font-black text-slate-900 text-base">HyperLogics InfoTech</span><br />
              <span className="text-slate-700 font-semibold">SaaS Platform Operator for removebg</span><br />
              Official Portal:{" "}
              <a href="https://hyperlogics.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-extrabold">
                https://hyperlogics.web.app/
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
