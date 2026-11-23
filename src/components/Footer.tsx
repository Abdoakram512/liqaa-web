"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mx-auto px-4 py-8 mt-12 border-t border-[#E8D9CB]/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#8C95A6]">
      {/* Right side in RTL: Brand Logo */}
      <div className="flex items-center">
        <img
          src="/assets/logo_clean.png"
          alt="نشاطي"
          className="h-7 md:h-8 w-auto object-contain"
        />
      </div>

      {/* Center: Description */}
      <div className="text-center font-bold text-[#717C8E]">
        نشاطي منصة عربية لتعليم الأطفال
      </div>

      {/* Left side in RTL: Copyright */}
      <div className="text-center md:text-left text-[11px] text-[#A0AAB8]" dir="ltr">
        © 2024 Nashaty — Concept by Sandouka Studio
      </div>
    </footer>
  );
}
