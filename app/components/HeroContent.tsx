"use client";

import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto py-2 sm:py-3">
      {/* 1. Eyebrow Pill Badge */}
      <div className="animate-eyebrow inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-3 sm:mb-5 hover:border-white/20 transition-all">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-white/80 uppercase">
          DIGITAL DESIGN &amp; GROWTH STUDIO
        </span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="animate-headline text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.1] mb-3 sm:mb-4 select-none">
        Design. Build. Grow
        <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-[#e52e2e] ml-1 sm:ml-1.5 align-baseline transform -translate-y-0.5 rounded-[1px] shadow-[0_0_12px_rgba(229,46,46,0.85)]" />
      </h1>

      {/* 3. Subtitle / Value Proposition */}
      <p className="animate-subtitle max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-xs sm:text-sm md:text-base text-neutral-400 font-normal leading-relaxed mb-5 sm:mb-6 px-2">
        Premium websites, landing pages and AI-powered systems for businesses that
        want to look more trusted and win better clients.
      </p>

      {/* 4. Dual CTA Pill Buttons */}
      <div className="animate-buttons flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
        {/* Primary CTA Button */}
        <a
          href="#consultation"
          className="group inline-flex items-center justify-between gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.18)] w-full sm:w-auto justify-center"
        >
          <span>Book a consultation</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-900/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
          </div>
        </a>

        {/* Secondary Glass CTA Button */}
        <a
          href="#work"
          className="group inline-flex items-center justify-between gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-md text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
        >
          <span className="text-white/90">View our work</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
          </div>
        </a>
      </div>

      {/* 5. Floating Tech Stack / Trust Badges & Soft Bouncing Scroll Indicator */}
      <div className="animate-indicator mt-6 sm:mt-8 flex flex-col items-center gap-3">
        {/* Subtle Tech Stack Pills */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
          <span className="px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">Next.js</span>
          <span>•</span>
          <span className="px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">Three / Canvas</span>
          <span>•</span>
          <span className="px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">Tailwind CSS</span>
        </div>

        {/* Soft Bouncing Scroll Down Indicator */}
        <div className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 font-mono">Explore</span>
          <div className="animate-bounce">
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
