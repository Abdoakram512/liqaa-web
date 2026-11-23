"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-10 lg:pt-8 lg:pb-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Right Column in RTL: Content and Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-right z-10 w-full min-w-0">
          {/* Age Tag Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#EBF0FC] text-[#385BB1] font-bold text-xs sm:text-sm mb-4 shadow-sm border border-[#D5E1F9]">
            <span>أنشطة للأطفال من ٤ - ١٢ سنة</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black text-[#273141] leading-[1.25] tracking-tight mb-4 break-words">
            نلعب، نتعلّم،
            <br />
            <span className="relative inline-block mt-1">
              ونكبر سوا
              {/* Hand-drawn clean SVG brush underline */}
              <svg
                className="absolute -bottom-2 md:-bottom-2.5 right-0 w-full h-3 md:h-4 pointer-events-none"
                viewBox="0 0 160 14"
                fill="none"
              >
                <path
                  d="M4 8.5C42 12.5 114 11.5 156 4.5"
                  stroke="#F69820"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#596375] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg font-medium">
            منصة أنشطة عربية بتحوّل وقت الفراغ لمغامرة
            <br />
            فنون، علوم، رياضة، وفصحى — مع شخصيات بيحبوها
          </p>

          {/* CTA Buttons - Stacks on small mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-6 w-full sm:w-auto">
            {/* Primary Action Button */}
            <button className="w-full sm:w-auto bg-[#F6B828] hover:bg-[#F69820] text-[#273141] font-extrabold text-sm md:text-base px-8 py-3 rounded-full shadow-[0_4px_14px_rgba(246,184,40,0.4)] transition-all hover:scale-105 active:scale-95 text-center">
              اكتشف الأنشطة
            </button>

            {/* Video Action with play icon next to yellow button */}
            <button className="flex items-center justify-center gap-3 text-[#273141] hover:text-[#FD4F0A] font-extrabold text-sm md:text-base transition-colors group py-1">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#273141] group-hover:bg-[#FD4F0A] flex items-center justify-center text-white transition-all group-hover:scale-110 shadow-sm flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              <span>شوف كيف بنشتغل</span>
            </button>
          </div>
        </div>

        {/* Left Column in RTL: Playful Characters Composition */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none w-full min-w-0 mt-4 lg:mt-0">
          <div className="relative w-[270px] sm:w-[340px] h-[270px] sm:h-[320px] max-w-full">
            {/* 1. Yellow Pill Card with Owl Head inside */}
            <div className="absolute top-0 right-6 sm:right-10 w-22 sm:w-28 h-48 sm:h-56 bg-[#F6B828] rounded-full overflow-hidden shadow-sm flex flex-col items-center pt-2 sm:pt-2.5 z-10 border-2 border-[#FFF7EA]">
              <div className="w-18 sm:w-24 h-18 sm:h-24 rounded-full bg-[#FFE1A8] flex items-center justify-center overflow-hidden p-1">
                <img
                  src="/assets/hero_owl_head_clean.png"
                  alt="بومة نشاطي"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Overlapping Green Pill Badge (+120 نشاط) */}
            <div className="absolute top-24 sm:top-28 -right-2 sm:right-1 z-20 bg-[#42A86B] text-white font-black text-[11px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md border-2 border-[#FFF7EA] whitespace-nowrap">
              +120 نشاط
            </div>

            {/* Pink 8-Point Starburst with speech bubble "يلا نلعب!" */}
            <div className="absolute -top-2 left-12 sm:left-20 z-20 transition-transform hover:rotate-6">
              <img
                src="/assets/hero_play_badge.png"
                alt="يلا نلعب!"
                className="w-18 sm:w-24 h-auto object-contain"
              />
            </div>

            {/* Floating pink solid decorative dot */}
            <div className="absolute -top-4 right-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#EB6383]" />

            {/* Purple 4-point sparkle star */}
            <div className="absolute top-32 sm:top-36 left-20 sm:left-28 z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#564B95]">
              <img src="/assets/sparkle.svg" alt="" className="w-full h-full" />
            </div>

            {/* 2. Green Circle with Alligator in Red Hoodie */}
            <div className="absolute bottom-3 sm:bottom-4 left-2 sm:left-6 w-22 sm:w-28 h-22 sm:h-28 rounded-full shadow-md z-15 overflow-hidden flex items-center justify-center">
              <img
                src="/assets/hero_alligator_circle.png"
                alt="تمساح نشاطي"
                className="w-full h-full object-contain"
              />
            </div>

            {/* 3. Blue Dome Arch with Lion Mascot */}
            <div className="absolute bottom-0 right-10 sm:right-16 w-28 sm:w-36 h-18 sm:h-22 z-10 flex items-end justify-center">
              <img
                src="/assets/hero_lion_clean.png"
                alt="أسد نشاطي"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Orange 4-point sparkle star near lion */}
            <div className="absolute bottom-14 sm:bottom-16 right-4 sm:right-6 z-20 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F69820]">
              <img src="/assets/sparkle.svg" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
