"use client";

import React from "react";

export default function ParentsSection() {
  const points = [
    "تقارير أداء أسبوعية مفصلة",
    "محتوى آمن 100% بدون إعلانات",
    "تواصل مباشر مع المدرب",
  ];

  return (
    <section id="parents" className="w-full max-w-5xl mx-auto px-4 my-14 md:my-18">
      <div className="bg-[#5D52A1] rounded-[32px] p-6 sm:p-10 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden select-none">
        {/* Right side in RTL: Text and Features */}
        <div className="flex-1 flex flex-col items-start text-right z-10">
          <span className="text-[#F6B828] font-black text-xs sm:text-sm mb-3 tracking-wide">
            للأهالي والمعلمين
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black leading-[1.2] mb-6 tracking-tight">
            تطبيق واحد يتابع
            <br />
            كل إنجاز صغير
          </h2>

          <div className="space-y-3.5">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-[#F6B828] flex items-center justify-center text-[#5D52A1] font-black text-xs flex-shrink-0 shadow-sm">
                  ✓
                </span>
                <span className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left side in RTL: Clean Mother Illustration Artwork */}
        <div className="flex-shrink-0 z-10">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src="/assets/parents_mother_perfect.png"
              alt="تطبيق يتابع كل إنجاز"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
