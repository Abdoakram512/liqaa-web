"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene01Hero() {
  return (
    <section
      id="welcome"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Right Column in RTL: Narrative Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-right z-10 w-full min-w-0">
          {/* Chapter & Target Audience Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE8D1] text-[#FD4F0A] font-heading font-black text-xs sm:text-sm mb-4 shadow-sm border border-[#F69820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FD4F0A] animate-ping" />
            <span>مشروع تخرج • مقياس الوعي الصوتي المصور</span>
          </div>

          {/* Main Hero Headline with Hand-Drawn Brush Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-heading font-black text-[#273141] leading-[1.22] tracking-tight mb-5">
            أهلًا بك في حكاية
            <br />
            <span className="text-[#F69820]">مشروع ياسر</span>
            <br />
            <span className="relative inline-block mt-1">
              من الأوراق للمنصة الرقمية
              {/* Hand-drawn clean SVG brush underline */}
              <svg
                className="absolute -bottom-2 md:-bottom-3 right-0 w-full h-3 md:h-4 pointer-events-none"
                viewBox="0 0 200 14"
                fill="none"
              >
                <path
                  d="M4 8.5C52 12.5 144 11.5 196 4.5"
                  stroke="#F69820"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle explaining the project based on the PDF */}
          <p className="text-[#596375] text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl font-body font-medium">
            رحلة تفاعلية يقودها <strong className="text-[#273141]">ياسر</strong> لتحويل{" "}
            <span className="text-[#385BB1] font-bold">
              مقياس الوعي الصوتي والفونولوجي المصور (للأطفال العاديين وذوي الإعاقات)
            </span>{" "}
            إلى منصة رقمية متكاملة للموبايل والتابلت تربط دقة التقييم بالتقارير المعتمدة ومكتبة التدريب.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              href="#problem"
              className="bg-[#F69820] hover:bg-[#FD4F0A] text-white font-heading font-black text-sm md:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(246,152,32,0.35)] transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <span>تعالوا نبدأ الحكاية</span>
              <span className="text-lg">←</span>
            </a>

            <a
              href="#scientific-core"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FFE8D1]/40 text-[#273141] font-heading font-extrabold text-sm md:text-base border-2 border-[#E3C7A9] transition-all hover:border-[#F69820] shadow-sm text-center"
            >
              <span>استكشف الهيكل العلمي (16 مهارة)</span>
            </a>
          </div>

          {/* Quick Stat Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-10 pt-6 border-t border-[#FFE8D1]/80">
            {PROJECT_INFO.stats.map((st, i) => (
              <div key={i} className="flex flex-col items-start bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-[#FFE8D1]">
                <span className={`text-2xl sm:text-3xl font-heading font-black ${st.color}`}>
                  {st.value}
                </span>
                <span className="text-xs font-heading font-bold text-[#273141] mt-0.5">
                  {st.label}
                </span>
                <span className="text-[10px] text-[#8C95A6] font-body mt-0.5">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Column in RTL: Yasser in Welcome Pose with Live Speech Bubble */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative select-none w-full min-w-0 mt-6 lg:mt-0">
          <div className="relative">
            {/* Background Organic Floating Shapes */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#FFE1A8]/60 rounded-full filter blur-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#385BB1]/10 rounded-full filter blur-2xl -z-10" />

            {/* Yasser Welcome Character with Narration */}
            <YasserCharacter
              pose="welcome"
              speechText="أهلًا بيكم! أنا ياسر 👋 تعالوا أحكيلكم إزاي حوّلنا مقياس الوعي الصوتي لتطبيق مبهر!"
              size="xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
