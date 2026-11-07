import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrentYear from "@/components/CurrentYear";
import Link from "next/link";
import { Scale, ShieldAlert, CheckCircle, Lock, ShieldCheck, Zap, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Terms of Service | removebg - Powered by HyperLogics InfoTech",
  description: "Worldwide Legal Terms and Real-Time Non-Storage Conditions for removebg SaaS platform operated by HyperLogics InfoTech.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 z-10">
        {/* Header Title */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Scale className="w-4 h-4 text-cyan-600" /> Worldwide Legal Terms & Real-Time Storage Policy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm font-semibold text-slate-600">
            Effective Date: March <CurrentYear fallback="2025" /> • Operating Entity:{" "}
            <a href="https://hyperlogics.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-extrabold hover:underline">
              HyperLogics InfoTech
            </a>
          </p>
        </div>

        {/* Executive Real-Time Guarantee Box */}
        <div className="p-5 rounded-2xl bg-white border border-cyan-200 text-slate-800 text-sm space-y-2 shadow-lg shadow-cyan-500/10">
          <h3 className="font-black text-cyan-700 text-base flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-cyan-600" /> Real-Time Processing & ZERO Server Storage Rules
          </h3>
          <p className="leading-relaxed font-bold text-slate-900">
            Uploaded photos are NEVER stored or saved on any server disk or database. Editing happens in real-time in your browser session, and all image data is IMMEDIATELY REMOVED & DELETED as soon as you close the browser tab or refresh the page!
          </p>
        </div>

        {/* Main Terms Document Container */}
        <div className="glass-card bg-white/95 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xl">

          {/* Section 1: User Responsibility & Content Ownership */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <CheckCircle className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>1. Your Photo Copyright & 100% User Responsibility</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 pl-2 font-semibold text-slate-800">
              <li>
                <strong>You Own Your Photos:</strong> You retain 100% full copyright, ownership, and commercial rights over all photos you upload and all transparent PNG cutouts generated.
              </li>
              <li>
                <strong>ZERO Server Storage:</strong> Your photos are NOT stored on any server disk or database. They are edited in real-time during your session and deleted immediately when you close or refresh the tab.
              </li>
              <li>
                <strong>You Take 100% Legal Blame:</strong> You must own or have legal permission for every photo you upload. You are strictly prohibited from uploading copyrighted images without permission, illegal content, non-consensual images, or harmful material.
              </li>
              <li>
                <strong>Company Immunity:</strong> HyperLogics InfoTech acts strictly as an automated processing service. We take zero legal responsibility for what users upload. If you violate copyright or laws, you alone are legally liable.
              </li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* Section 2: "AS IS" & No Guarantee of Perfection */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0" />
              <h2>2. "AS IS" Service & No Guarantee of Uptime or 100% Perfection</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 pl-2 font-semibold text-slate-800">
              <li>
                <strong>Provided "AS IS":</strong> The AI background removal tool, server pipeline, and website are provided strictly on an "AS IS" and "AS AVAILABLE" basis.
              </li>
              <li>
                <strong>No Perfection Guarantee:</strong> While our AI engine is highly accurate, we do not guarantee a 100% perfect cutout on every image, as result quality depends on photo contrast, lighting, and resolution.
              </li>
              <li>
                <strong>No Downtime Claims:</strong> We do not guarantee 100% continuous 24/7 server availability. We are not liable if the website undergoes maintenance or temporary downtime.
              </li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* Section 3: Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <ShieldAlert className="w-6 h-6 text-red-600 shrink-0" />
              <h2>3. Limitation of Liability & Exclusion of Damages</h2>
            </div>
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-slate-800 space-y-2">
              <p className="font-extrabold text-red-600 text-sm uppercase">
                Important Worldwide Liability Limit:
              </p>
              <p className="leading-relaxed font-semibold">
                To the maximum extent permitted by applicable law worldwide, HyperLogics InfoTech, its directors, employees, and partners shall NOT be liable for any indirect damages, lost profits, business losses, or data loss resulting from your use of removebg.
              </p>
            </div>
          </section>

          <hr className="border-slate-200" />

          {/* Section 4: Prohibited Uses & Hacking Ban */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <Lock className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>4. Prohibited Activities & Anti-Hacking Rules</h2>
            </div>
            <p className="font-semibold text-slate-800">To protect our infrastructure and users, you agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 font-semibold text-slate-800">
              <li>Use automated bots, web scrapers, or scripts to overload our processing servers;</li>
              <li>Attempt to reverse engineer, hack, or breach our private internal API endpoints;</li>
              <li>Upload malware, viruses, or malicious files; or</li>
              <li>Use the service for any fraudulent or illegal activities under any local or international law.</li>
            </ul>
          </section>

          <hr className="border-slate-200" />

          {/* Section 5: Worldwide User Indemnification */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <ShieldCheck className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>5. Worldwide User Indemnification Shield</h2>
            </div>
            <p className="font-semibold text-slate-800">
              If a third party files a claim, lawsuit, or demand against <strong>HyperLogics InfoTech</strong> due to an image you uploaded or your violation of these terms, you agree to defend, indemnify, and hold harmless HyperLogics InfoTech, paying all legal fees, court costs, and financial damages.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Section 6: Right to Modify or Discontinue */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-slate-900 font-black text-lg sm:text-xl">
              <Scale className="w-6 h-6 text-cyan-600 shrink-0" />
              <h2>6. Right to Update Terms or Change Service</h2>
            </div>
            <p className="font-semibold text-slate-800">
              HyperLogics InfoTech reserves the right to modify, update, pause, or discontinue any feature of removebg at any time without prior notice or financial liability.
            </p>
          </section>

          <hr className="border-slate-200" />

          {/* Section 7: Operating Entity & Contact Info */}
          <section className="space-y-3">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              7. Official Service Provider & Contact
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
