"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene04Workflow() {
  return (
    <section
      id="workflow"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#42A86B] font-heading font-black text-xs">
          الفصل 04 • دورة الاستخدام
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          مسار الاستخدام من البداية للنهاية
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          تجربة واحدة موحدة تربط ملف الطفل بالتقييم والتقرير المعتمد ومكتبة التدريب
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
        {/* Right side in RTL: 6 Steps Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {PROJECT_INFO.userJourney.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-[26px] p-5 shadow-[0_8px_30px_rgba(39,49,65,0.06)] border border-[#F3E7DC] hover:border-[#F69820] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="w-10 h-10 rounded-full text-white font-heading font-black text-lg flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: step.color }}
                  >
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-heading font-bold text-[#8C95A6]">
                    خطوة {step.step} من 6
                  </span>
                </div>

                <h3 className="font-heading font-black text-lg text-[#273141] mb-2 leading-tight">
                  {step.title}
                </h3>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Left side in RTL: Yasser in Guide Pose */}
        <div className="lg:col-span-4 flex justify-center">
          <YasserCharacter
            pose="guide"
            speechText="المسار مرن جداً.. الأخصائي يقدر يوقف الجلسة ويستكملها في أي وقت دون فقدان الاستجابات!"
            size="md"
          />
        </div>
      </div>

      {/* Persistence Guarantee Banner from PDF Page 5 */}
      <div className="bg-[#5D52A1] text-white rounded-[28px] p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-right">
          <span className="text-[#F6B828] font-heading font-black text-xs sm:text-sm mb-1 block">
            ميزة جوهرية في المنظومة
          </span>
          <h4 className="text-xl sm:text-2xl font-heading font-black mb-1">
            جلسة آمنة وقابلة للاستكمال في أي لحظة
          </h4>
          <p className="text-white/90 font-body text-xs sm:text-sm leading-relaxed max-w-2xl">
            نفس ملف الطفل يجمع كل جلساته ونتائجه التاريخية. يمكن وقف الجلسة واستكمالها مع الاحتفاظ التلقائي بسجل الاستجابات وتوقيت التعديل الدقيق لكل بند.
          </p>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#42A86B] text-white font-heading font-extrabold text-xs sm:text-sm shadow-md">
            <span>جلسة قابلة للاستكمال ⏱</span>
          </span>
        </div>
      </div>
    </section>
  );
}
