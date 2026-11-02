"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-3 sm:pt-4 md:pt-5 animate-nav">
      <nav className="flex items-center justify-between border border-white/10 bg-[#0d0d0f]/80 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 shadow-xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white flex items-center justify-center text-black font-extrabold text-[11px] sm:text-xs tracking-tighter">
            f
          </div>
          <span className="text-white font-semibold tracking-tight text-sm sm:text-base md:text-lg">
            frax<span className="text-white/90">BIT</span>
          </span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-white/70">
          <a
            href="#services"
            className="hover:text-white transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#work"
            className="hover:text-white transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#pricing"
            className="hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="hover:text-white transition-colors duration-200"
          >
            FAQ
          </a>
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-full hover:bg-neutral-200 transition-all duration-200 group shadow-md"
          >
            <span>Book a call</span>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
            </div>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center gap-1 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-black bg-white rounded-full"
          >
            <span>Call</span>
            <ArrowUpRight className="w-2.5 h-2.5 text-black" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/80 hover:text-white p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl border border-white/10 bg-[#0d0d0f]/95 backdrop-blur-xl flex flex-col gap-3 text-center shadow-2xl z-30">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/75 hover:text-white text-xs py-1"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/75 hover:text-white text-xs py-1"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/75 hover:text-white text-xs py-1"
          >
            About
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/75 hover:text-white text-xs py-1"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/75 hover:text-white text-xs py-1"
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
}
