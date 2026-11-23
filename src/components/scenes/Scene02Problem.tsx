"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene02Problem() {
  return (
    <section
      id="problem"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      {/* Chapter Indicator */}
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#FFE8D1] text-[#CB3C48] font-heading font-black text-xs">
          الفصل 02 • التحديات الميدانية
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          لماذا نحول المقياس إلى تطبيق؟
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          من أوراق الاختبار المتناثرة والجهد اليدوي الشاق.. إلى دورة تقييم منظمة وقابلة للمتابعة المستمرة
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Right side in RTL: Yasser in Thinking Pose */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <YasserCharacter
            pose="thinking"
            speechText="تخيلوا فاحص معاه 103 بطاقة بيقلبهم قدام طفل.. الموضوع كان محتاج حل تقني فوري!"
            size="lg"
          />
        </div>

        {/* Left side in RTL: 3 Problem Cards from PDF Page 2 */}
        <div className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2">
          {PROJECT_INFO.problems.map((p, idx) => (
            <div
              key={p.id}
              className="bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(39,49,65,0.06)] border border-[#F3E7DC] hover:border-[#F69820] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                {/* Red Problem Counter Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#CB3C48]/10 text-[#CB3C48] font-heading font-black text-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>

                <div className="flex-1 text-right">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-heading font-black text-xl text-[#273141]">
                      {p.title}
                    </h3>
                    <span className="text-[11px] font-heading font-extrabold px-3 py-1 rounded-full bg-[#FFE8D1] text-[#FD4F0A]">
                      {p.tag}
                    </span>
                  </div>
                  <p className="font-body text-sm sm:text-base text-[#596375] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Solution Promise Bar from PDF */}
          <div className="bg-gradient-to-r from-[#F69820]/15 via-[#385BB1]/10 to-transparent p-5 rounded-2xl border border-[#F69820]/30 text-right">
            <span className="font-heading font-black text-xs text-[#FD4F0A] block mb-1">
              الهدف الأساسي للمشروع:
            </span>
            <p className="font-heading font-extrabold text-sm sm:text-base text-[#273141]">
              تحويل التقييم من عبء ورقي إلى منظومة ذكية تدعم الأخصائي وتحفز الطفل وتوثق النتائج رقمياً بدقة 100%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
