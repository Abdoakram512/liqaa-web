"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene07Journey() {
  return (
    <section
      id="journey"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#FFE8D1] text-[#F69820] font-heading font-black text-xs">
          الفصل 07 • مراحل التنفيذ والإنتاج
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          خطة التنفيذ المرحلية: من الفكرة للتسليم
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          مدة تقديرية من 8 إلى 10 أسابيع بعد تدقيق المحتوى والمتطلبات العلمية
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
        {/* Right side in RTL: Yasser in Guide Pose */}
        <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
          <YasserCharacter
            pose="guide"
            speechText="كل مرحلة كانت محسوبة بدقة عشان نضمن الجودة البرمجية والتوافق التام مع المعيار العلمي!"
            size="md"
          />
        </div>

        {/* Left side in RTL: 4 Milestones Timeline */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2">
          {PROJECT_INFO.milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgba(39,49,65,0.06)] border border-[#F3E7DC] hover:border-[#F69820] transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3.5 py-1 rounded-full bg-[#FFE8D1] text-[#FD4F0A] font-heading font-black text-xs">
                  {m.period}
                </span>
                <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#F69820] group-hover:text-white transition-colors flex items-center justify-center font-heading font-black text-xs text-[#273141]">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-heading font-black text-xl text-[#273141] mb-2">
                {m.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Proposed Technical Stack Architecture from PDF Page 16 */}
      <div className="bg-[#273141] text-white rounded-[32px] p-6 sm:p-10 shadow-2xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[#F6B828] font-heading font-black text-xs mb-1 block">
            البنية البرمجية المقترحة
          </span>
          <h4 className="text-2xl sm:text-3xl font-heading font-black">
            تكامل ثلاثي الأبعاد بين Flutter و Laravel و MySQL
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <span className="w-8 h-8 rounded-lg bg-[#385BB1] text-white font-heading font-black text-sm flex items-center justify-center mb-3">
              UI
            </span>
            <h5 className="font-heading font-black text-lg mb-1 text-white">
              تطبيق المستخدم (Flutter)
            </h5>
            <p className="font-body text-xs text-gray-300 leading-relaxed mb-3">
              موبايل وتابلت أندرويد • واجهة الطفل المشجعة • لوحة الأخصائي • حفظ الجلسة المؤقت محلياً
            </p>
            <span className="text-[11px] font-bold text-[#F6B828]">أداء سلس 60 FPS ✓</span>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <span className="w-8 h-8 rounded-lg bg-[#CB3C48] text-white font-heading font-black text-sm flex items-center justify-center mb-3">
              API
            </span>
            <h5 className="font-heading font-black text-lg mb-1 text-white">
              خدمات المنصة (Laravel API)
            </h5>
            <p className="font-body text-xs text-gray-300 leading-relaxed mb-3">
              إدارة الجلسات • محرك تصحيح الدرجات الخام • صلاحيات المستخدمين • مولد تقارير PDF
            </p>
            <span className="text-[11px] font-bold text-[#F6B828]">منطق أعمال آمن ومقنن ✓</span>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <span className="w-8 h-8 rounded-lg bg-[#42A86B] text-white font-heading font-black text-sm flex items-center justify-center mb-3">
              DB
            </span>
            <h5 className="font-heading font-black text-lg mb-1 text-white">
              البيانات والأصول (MySQL)
            </h5>
            <p className="font-body text-xs text-gray-300 leading-relaxed mb-3">
              ملفات وسائط محمية • بيانات الأطفال المشفرة • بنك الـ 103 صور • تاريخ الجلسات والنتائج
            </p>
            <span className="text-[11px] font-bold text-[#F6B828]">حفظ ومزامنة موثوقة ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
