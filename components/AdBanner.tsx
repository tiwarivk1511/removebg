"use client";

import { useEffect, useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface AdBannerProps {
  slot?: string;
  format?: "leaderboard" | "rectangle" | "native" | "sidebar";
  forceHyperlogics?: boolean;
  className?: string;
}

export default function AdBanner({
  slot = "default",
  format = "leaderboard",
  forceHyperlogics = false,
  className = "",
}: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (forceHyperlogics) return;

    try {
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch (e) {
      console.log("AdSense initialization check:", e);
    }
  }, [forceHyperlogics]);

  const isVertical = format === "sidebar" || format === "rectangle";

  const formatStyles = {
    leaderboard: "w-full min-h-[100px] h-auto",
    rectangle: "w-full min-h-[300px] h-auto",
    sidebar: "w-full min-h-[560px] h-full",
    native: "w-full min-h-[110px] h-auto",
  };

  const hyperlogicsAd = isVertical ? (
    /* Vertical / Sidebar Card Layout for HyperLogics (Tall Height) */
    <div className="w-full h-full flex flex-col justify-between gap-5 p-2 text-left">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 rounded-2xl bg-white border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-md">
            <img
              src="https://hyperlogics.web.app/favicon.ico"
              alt="HyperLogics Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <h4 className="text-xs font-black text-cyan-600 uppercase tracking-wider">
              HyperLogics InfoTech
            </h4>
            <span className="text-[11px] font-bold text-slate-500">Enterprise Web & AI Studio</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-base font-black text-slate-900 leading-snug">
            Need Custom Software & Web App Solutions for Your Business?
          </h4>
          <p className="text-xs font-semibold text-slate-600 leading-relaxed">
            HyperLogics InfoTech builds high-performance web applications, AI integration, mobile apps, and scalable cloud architecture.
          </p>
        </div>

        <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>Full-Stack Web & Mobile Apps</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>AI Edge & Cloud Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>Custom SaaS & Platform Build</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
            <span>High Speed & Scalability</span>
          </div>
        </div>
      </div>

      <a
        href="https://hyperlogics.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs font-black shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all mt-auto"
      >
        <span>Visit HyperLogics InfoTech</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  ) : (
    /* Horizontal Banner Layout for HyperLogics */
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-left">
      <div className="flex items-center space-x-3.5">
        <div className="w-10 h-10 rounded-xl bg-white border border-cyan-500/40 flex items-center justify-center shrink-0 shadow-md">
          <img
            src="https://hyperlogics.web.app/favicon.ico"
            alt="HyperLogics InfoTech Logo"
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-black text-cyan-600 tracking-wider uppercase">
            HyperLogics InfoTech
          </h4>
          <h4 className="text-xs sm:text-sm font-black text-slate-900">
            Need Custom Software, Website, or Mobile App Solutions for Your Business?
          </h4>
          <p className="text-[11px] sm:text-xs font-semibold text-slate-600">
            HyperLogics InfoTech builds high-performance web applications, AI integration, and custom cloud architecture.
          </p>
        </div>
      </div>

      <a
        href="https://hyperlogics.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs font-black shadow-md transition-all duration-200"
      >
        <span>Visit HyperLogics</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );

  return (
    <div
      className={`relative glass-card rounded-2xl overflow-hidden border border-slate-200 bg-white/95 ${formatStyles[format]} ${className} flex flex-col items-center justify-center p-4 text-left shadow-lg`}
    >
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[10px] uppercase font-extrabold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm z-10">
        <span>Sponsored</span>
      </div>

      {forceHyperlogics ? (
        hyperlogicsAd
      ) : (
        <>
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%", height: "100%" }}
            data-ad-client="ca-pub-8719202935652940"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          {!adLoaded && hyperlogicsAd}
        </>
      )}
    </div>
  );
}
