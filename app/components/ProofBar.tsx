"use client";

import React from "react";

const stats = [
  { value: "190+", label: "Projects delivered" },
  { value: "16", label: "Countries reached" },
  { value: "5+", label: "Years in business" },
];

export default function ProofBar() {
  return (
    <footer className="animate-stats relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 md:pb-5">
      <div className="border-t border-white/10 pt-2.5 sm:pt-3.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 text-neutral-400">
        {/* Left Stats Grid */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start">
              <span className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-[11px] md:text-xs text-neutral-400 font-normal mt-1 leading-none">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Social Proof Text */}
        <div className="text-center md:text-right max-w-xs sm:max-w-md">
          <p className="text-[10px] sm:text-[11px] md:text-xs text-neutral-400/90 leading-tight sm:leading-relaxed font-normal">
            Trusted by brands across{" "}
            <span className="text-white/90 font-medium">Europe</span> ·{" "}
            <span className="text-white/90 font-medium">United States</span> ·{" "}
            <span className="text-white/90 font-medium">UAE</span> ·{" "}
            <span className="text-white/90 font-medium">Mauritius</span> and beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
