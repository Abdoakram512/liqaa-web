"use client";

import React from "react";

export default function CtaBanner() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-10 md:my-14">
      <div className="bg-[#FF952F] rounded-[28px] p-6 sm:p-8 md:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative select-none">
        {/* Right side in RTL: Content */}
        <div className="flex-1 text-right flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-black mb-2 tracking-tight">
            أول أسبوع علينا!
          </h2>
          <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold">
            جرّب نشاطي مجاناً لمدة ٧ أيام، بدون التزام
          </p>
        </div>

        {/* Center / Action Button */}
        <div className="flex-shrink-0 order-last md:order-none">
          <button className="bg-[#273141] hover:bg-[#161211] text-white font-black text-xs sm:text-sm px-8 py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95">
            سجّل مجاناً
          </button>
        </div>

        {/* Left side in RTL: Clean 3 Mascots */}
        <div className="flex-shrink-0">
          <div className="w-24 sm:w-28 h-auto flex items-center justify-center">
            <img
              src="/assets/cta_mascots_perfect.png"
              alt="شخصيات نشاطي"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
