"use client";

import React from "react";

export default function WeeklyAdventure() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-14 md:my-18">
      <div className="relative rounded-[32px] overflow-hidden shadow-lg h-[280px] sm:h-[320px] md:h-[360px] flex items-center justify-start select-none">
        {/* Clean Background Artwork with seamless dark tent gradient on the right */}
        <img
          src="/assets/adventure_banner_perfect.png"
          alt="مغامرة الأسبوع"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Content on the Right */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-md text-right flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-2 tracking-tight">
            كل أسبوع
            <br />
            <span className="text-[#F6B828]">مغامرة جديدة</span>
          </h2>

          <p className="text-white/90 text-xs sm:text-sm md:text-base font-semibold leading-relaxed mb-6 max-w-xs sm:max-w-sm">
            أنشطة تفاعلية وجديدة تنمي مهارات طفلك كل أسبوع في بيئة آمنة وممتعة
          </p>

          <button className="bg-[#F69820] hover:bg-[#FD4F0A] text-white font-extrabold text-xs sm:text-sm px-7 py-2.5 sm:py-3 rounded-full shadow-md transition-all hover:scale-105 active:scale-95">
            ابدأ المغامرة
          </button>
        </div>
      </div>
    </section>
  );
}
