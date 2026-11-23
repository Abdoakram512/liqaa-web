"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene03Solution() {
  const cardColors = [
    { bg: "bg-[#4A7FE8]", badge: "text-[#4A7FE8]", border: "border-[#4A7FE8]" },
    { bg: "bg-[#42A86B]", badge: "text-[#42A86B]", border: "border-[#42A86B]" },
    { bg: "bg-[#EB6383]", badge: "text-[#EB6383]", border: "border-[#EB6383]" },
    { bg: "bg-[#F6B828]", badge: "text-[#F6B828]", border: "border-[#F6B828]" },
  ];

  return (
    <section
      id="idea"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF0FC] text-[#385BB1] font-heading font-black text-xs">
          الفصل 03 • فكرة المشروع
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          الفكرة الكبيرة: منصة مِقياس الرقمية
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          تجربة موحدة للموبايل والتابلت تجمع بين بساطة واجهة الطفل واحترافية أدوات الأخصائي
        </p>
      </div>

      {/* Top Narration with Yasser in Thinking Pose */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 bg-white rounded-[32px] p-6 sm:p-10 shadow-[0_12px_40px_rgba(39,49,65,0.07)] border border-[#FFE8D1]">
        <div className="flex-1 text-right">
          <span className="text-[#F69820] font-heading font-black text-xs sm:text-sm tracking-wide block mb-2">
            رؤية الحل المتكامل
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#273141] leading-snug mb-4">
            تطبيق يربط التقييم الدقيق
            <br />
            بالمتابعة المستمرة ومكتبة التدريب
          </h3>
          <p className="text-[#596375] font-body text-sm sm:text-base leading-relaxed mb-4">
            بدلًا من الاعتماد على البطاقات الورقية المعرضة للتلف والتشتت، يقدم المشروع تطبيقاً قائماً على Flutter لأجهزة أندرويد وتابلت يتيح للأخصائي إدارة الجلسة في ثوانٍ، بينما يستمتع الطفل ببيئة تفاعلية محفزة وخالية من الإجهاد النفسي.
          </p>
          <div className="flex items-center gap-2 text-xs font-heading font-extrabold text-[#385BB1]">
            <span className="w-2 h-2 rounded-full bg-[#385BB1]" />
            <span>نظام درجات مستقل • 16 مهارة تفصيلية • تقارير PDF معتمدة</span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <YasserCharacter
            pose="thinking"
            speechText="المفتاح كان في الفصل الذكي بين شاشة الطفل ولوحة الأخصائي!"
            size="md"
          />
        </div>
      </div>

      {/* 4 Pillars Grid (Nashaty Playful Card Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROJECT_INFO.solutionPillars.map((pillar, idx) => {
          const col = cardColors[idx % cardColors.length];
          return (
            <div
              key={idx}
              className={`${col.bg} text-white rounded-[28px] p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 select-none group min-h-[300px]`}
            >
              <div>
                {/* Sparkle Icon */}
                <div className="w-full flex justify-start mb-4">
                  <svg
                    className="w-5 h-5 fill-white opacity-80 group-hover:rotate-45 transition-transform duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                  </svg>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white font-heading font-black text-xs mb-3 shadow-sm">
                  <span className={col.badge}>{pillar.badge}</span>
                </div>

                <h4 className="font-heading font-black text-xl leading-tight mb-2">
                  {pillar.title}
                </h4>
              </div>

              <p className="text-white/90 font-body text-xs sm:text-sm leading-relaxed mt-4">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
