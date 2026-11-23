"use client";

import React, { useState } from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene05ScientificCore() {
  const [activeTab, setActiveTab] = useState<"subscales" | "items" | "engines">("subscales");

  return (
    <section
      id="scientific-core"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF0FC] text-[#385BB1] font-heading font-black text-xs">
          الفصل 05 • الهيكل العلمي المعتمد
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          الهيكل العلمي للمقياس: 4 مقاييس و16 مهارة
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          استناداً إلى مقياس الوعي الصوتي المصور للأطفال العاديين وذوي الإعاقات — أ.د. عادل عبدالله محمد
        </p>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTab("subscales")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeTab === "subscales"
              ? "bg-[#385BB1] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          المقاييس الفرعية الـ 4 والمهارات الـ 16
        </button>
        <button
          onClick={() => setActiveTab("items")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeTab === "items"
              ? "bg-[#385BB1] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          مكتبة الـ 103 صورة (12 فئة)
        </button>
        <button
          onClick={() => setActiveTab("engines")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeTab === "engines"
              ? "bg-[#385BB1] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          محرك الأسئلة المرن (6 صيغ)
        </button>
      </div>

      {/* Tab 1: 4 Subscales */}
      {activeTab === "subscales" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROJECT_INFO.subscales.map((sub) => (
            <div
              key={sub.id}
              className="bg-white rounded-[28px] p-6 shadow-[0_12px_35px_rgba(39,49,65,0.06)] border-2 border-transparent hover:border-[#F69820] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-10 h-10 rounded-2xl text-white font-heading font-black text-base flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: sub.color }}
                  >
                    {sub.number}
                  </span>
                  <span className="font-heading font-black text-sm px-3 py-1 rounded-full bg-[#FFE8D1] text-[#FD4F0A]">
                    {sub.maxScore} درجة
                  </span>
                </div>

                <h3 className="font-heading font-black text-xl text-[#273141] mb-4 leading-snug">
                  {sub.title}
                </h3>

                <div className="space-y-2.5 pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-heading font-black text-[#8C95A6] block mb-1">
                    المهارات التفصيلية:
                  </span>
                  {sub.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F69820] mt-2 flex-shrink-0" />
                      <span className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#8C95A6]">
                <span>عدد المهارات: {sub.skills.length}</span>
                <span className="text-[#385BB1] font-heading font-black">مقنن ومعتمد ✓</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 103 items across 12 categories */}
      {activeTab === "items" && (
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-lg border border-[#F3E7DC] mb-12">
          <div className="max-w-2xl text-right mb-6">
            <span className="text-[#F69820] font-heading font-black text-xs mb-1 block">
              محتوى الصور المعتمد بالدليل
            </span>
            <h3 className="text-2xl font-heading font-black text-[#273141] mb-2">
              103 صورة وبطاقة موزعة على 12 فئة مألوفة للطفل
            </h3>
            <p className="font-body text-sm text-[#596375]">
              تم اختيار الصور بعناية فائقة لتكون قريبة من البيئة الثقافية واليومية للأطفال، بما يضمن دقة قياس الوعي الصوتي دون عائق بصري أو لغوي خارجي.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PROJECT_INFO.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#FFF7EA] hover:bg-[#FFE8D1] border border-[#E3C7A9]/60 rounded-2xl p-4 text-center transition-all hover:scale-105"
              >
                <span className="text-lg mb-1 block">📁</span>
                <span className="font-heading font-black text-sm text-[#273141]">
                  {cat}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] font-bold text-[#8C95A6] text-center mt-6">
            * تنويه: عدد الصور لا يساوي بالضرورة عدد أسئلة الاختبار، حيث ترتبط الصور ببنود القياس المقننة.
          </p>
        </div>
      )}

      {/* Tab 3: Flexible Question Engine (6 types) */}
      {activeTab === "engines" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {PROJECT_INFO.questionEngines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white rounded-[26px] p-6 shadow-sm border border-[#F3E7DC] hover:border-[#F69820] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-[#385BB1] text-white font-heading font-black text-sm flex items-center justify-center">
                  {engine.id}
                </span>
                <h4 className="font-heading font-black text-lg text-[#273141]">
                  {engine.title}
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed">
                {engine.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Scientific Distinction & Yasser Presenter Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#273141] to-[#161211] text-white rounded-[32px] p-6 sm:p-10 shadow-2xl">
        <div className="lg:col-span-8 text-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CB3C48] text-white font-heading font-black text-xs mb-3">
            تنبيه علمي إكلينيكي صارم • من دليل المقياس
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black mb-3">
            الفرق الجوهري بين الدرجة الخام والمؤشر المعياري
          </h3>
          <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
            تُحسب <strong className="text-[#F6B828]">الدرجة الخام (حتى 80 درجة)</strong> آلياً وفورياً من واقع استجابات الطفل المدخلة. أما <strong className="text-white">المؤشر المعياري</strong> (<span className="text-red-400">أقل من 98 منخفض</span>، <span className="text-yellow-400">98–110 متوسط</span>، <span className="text-green-400">111 فأكثر مرتفع</span>) فهو خطوة مستقلة تتطلب توفر جداول التحويل الرسمية المعتمدة ولا يجوز استنتاجها آلياً بنسبة عشوائية.
          </p>
          <div className="flex items-center gap-3 text-xs font-heading font-bold text-[#F6B828]">
            <span>✓ أمانة علمية تامة</span>
            <span>•</span>
            <span>✓ التزام بمحددات الدليل المقنن</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <YasserCharacter
            pose="presenter"
            speechText="الدقة العلمية أهم أولوياتنا: الدرجة الخام تُحسب بدقة 100%، بدون أي ادعاء غير مقنن!"
            size="md"
          />
        </div>
      </div>
    </section>
  );
}
