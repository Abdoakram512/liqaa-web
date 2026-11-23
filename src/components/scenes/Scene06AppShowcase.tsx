"use client";

import React, { useState } from "react";
import YasserCharacter from "@/components/character/YasserCharacter";

export default function Scene06AppShowcase() {
  const [activeScreen, setActiveScreen] = useState<"child" | "specialist" | "report" | "training">("child");
  const [selectedChildOption, setSelectedChildOption] = useState<string | null>("ball");
  const [specialistScore, setSpecialistScore] = useState<string>("correct");

  return (
    <section
      id="app-showcase"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#FFE8D1] text-[#FD4F0A] font-heading font-black text-xs">
          الفصل 06 • واجهات المنصة التفاعلية
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          تجربة التطبيق المزدوجة: للطفل والأخصائي
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          بيئة متكاملة تفصل شاشة الطفل المشجعة عن لوحة تحكم الأخصائي الإكلينيكية
        </p>
      </div>

      {/* Screen Selector Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
        <button
          onClick={() => setActiveScreen("child")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeScreen === "child"
              ? "bg-[#42A86B] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          🎮 واجهة الطفل (دون كشف الإجابة)
        </button>
        <button
          onClick={() => setActiveScreen("specialist")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeScreen === "specialist"
              ? "bg-[#385BB1] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          📋 لوحة تحكم الأخصائي
        </button>
        <button
          onClick={() => setActiveScreen("report")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeScreen === "report"
              ? "bg-[#5D52A1] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          📊 التقرير والتحليل البصري
        </button>
        <button
          onClick={() => setActiveScreen("training")}
          className={`px-5 py-2.5 rounded-full font-heading font-black text-xs sm:text-sm transition-all ${
            activeScreen === "training"
              ? "bg-[#F69820] text-white shadow-md scale-105"
              : "bg-white text-[#273141] hover:bg-[#FFE8D1]/40 border border-[#F3E7DC]"
          }`}
        >
          📚 مكتبة التدريب (12 نشاط)
        </button>
      </div>

      {/* The Interactive Dual Interface Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Right side in RTL: The Active Screen Mockup */}
        <div className="lg:col-span-8 w-full">
          {/* Screen 1: Child Interface Mockup */}
          {activeScreen === "child" && (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border-4 border-[#42A86B]/20 select-none">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                <span className="font-heading font-black text-sm text-[#42A86B] bg-[#EAF7EE] px-3.5 py-1 rounded-full">
                  واجهة الطفل • بدون كشف الإجابة
                </span>
                <span className="text-xs font-bold text-[#8C95A6]">
                  اسمع واختر الصورة
                </span>
              </div>

              <div className="text-center my-6">
                <span className="inline-block p-3 rounded-full bg-[#FFE8D1] text-2xl mb-2">
                  🔊
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#273141]">
                  ورّيني صورة: <span className="text-[#FD4F0A]">الكرة</span>
                </h3>
              </div>

              {/* 4 Cards from PDF Page 8 */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
                <button
                  onClick={() => setSelectedChildOption("ball")}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedChildOption === "ball"
                      ? "border-[#42A86B] bg-[#EAF7EE] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#42A86B]/50 bg-[#FFF7EA]/30"
                  }`}
                >
                  <span className="text-4xl">⚽</span>
                  <span className="font-heading font-black text-base text-[#273141]">
                    كرة
                  </span>
                </button>

                <button
                  onClick={() => setSelectedChildOption("book")}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedChildOption === "book"
                      ? "border-[#42A86B] bg-[#EAF7EE] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#42A86B]/50 bg-[#FFF7EA]/30"
                  }`}
                >
                  <span className="text-4xl">📖</span>
                  <span className="font-heading font-black text-base text-[#273141]">
                    كتاب
                  </span>
                </button>

                <button
                  onClick={() => setSelectedChildOption("pencil")}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedChildOption === "pencil"
                      ? "border-[#42A86B] bg-[#EAF7EE] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#42A86B]/50 bg-[#FFF7EA]/30"
                  }`}
                >
                  <span className="text-4xl">✏️</span>
                  <span className="font-heading font-black text-base text-[#273141]">
                    قلم
                  </span>
                </button>

                <button
                  onClick={() => setSelectedChildOption("cup")}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                    selectedChildOption === "cup"
                      ? "border-[#42A86B] bg-[#EAF7EE] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#42A86B]/50 bg-[#FFF7EA]/30"
                  }`}
                >
                  <span className="text-4xl">☕</span>
                  <span className="font-heading font-black text-base text-[#273141]">
                    كوب
                  </span>
                </button>
              </div>

              <p className="text-[11px] font-bold text-[#8C95A6] text-center">
                * واجهة مبسطة خالية من الأزرار الإدارية حتى لا يتشتت انتباه الطفل
              </p>
            </div>
          )}

          {/* Screen 2: Specialist Panel Mockup */}
          {activeScreen === "specialist" && (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border-4 border-[#385BB1]/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 flex-wrap gap-2">
                <span className="font-heading font-black text-sm text-[#385BB1] bg-[#EBF0FC] px-3.5 py-1 rounded-full">
                  لوحة الأخصائي • سؤال 03 / 18
                </span>
                <span className="text-xs font-heading font-bold text-[#273141]">
                  المقياس 01: تعرف الكلمة وتمييز الأصوات
                </span>
              </div>

              <div className="bg-[#FFF7EA] p-4 rounded-2xl border border-[#E3C7A9]/60 mb-6">
                <span className="text-xs font-heading font-black text-[#FD4F0A] block mb-1">
                  تعليمات الفاحص المعتمدة:
                </span>
                <p className="font-body text-xs sm:text-sm text-[#273141]">
                  اعرض الصور على شاشة الطفل، ثم اقرأ نص السؤال المعتمد بدليل الاختبار وسجّل استجابة الطفل فورياً بنقرة زر.
                </p>
              </div>

              <div className="mb-6">
                <span className="text-xs font-heading font-black text-[#8C95A6] block mb-2">
                  تسجيل الاستجابة:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setSpecialistScore("correct")}
                    className={`py-3 rounded-2xl font-heading font-black text-sm transition-all ${
                      specialistScore === "correct"
                        ? "bg-[#42A86B] text-white shadow-md scale-102"
                        : "bg-gray-100 text-[#273141] hover:bg-gray-200"
                    }`}
                  >
                    صحيح (+1) ✓
                  </button>
                  <button
                    onClick={() => setSpecialistScore("wrong")}
                    className={`py-3 rounded-2xl font-heading font-black text-sm transition-all ${
                      specialistScore === "wrong"
                        ? "bg-[#CB3C48] text-white shadow-md scale-102"
                        : "bg-gray-100 text-[#273141] hover:bg-gray-200"
                    }`}
                  >
                    خطأ (0) ✗
                  </button>
                  <button
                    onClick={() => setSpecialistScore("no-response")}
                    className={`py-3 rounded-2xl font-heading font-black text-sm transition-all ${
                      specialistScore === "no-response"
                        ? "bg-[#F69820] text-white shadow-md scale-102"
                        : "bg-gray-100 text-[#273141] hover:bg-gray-200"
                    }`}
                  >
                    لم يستجب ⏱
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-xs font-heading font-bold text-[#8C95A6] block mb-1">
                  ملاحظة إكلينيكية للحالة (اختياري):
                </label>
                <input
                  type="text"
                  placeholder="استجاب الطفل بعد تردد بسيط وأشار مباشرة للكرة..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-body text-[#273141] focus:border-[#385BB1] focus:outline-none"
                  readOnly
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="px-5 py-2 rounded-xl text-xs font-heading font-bold text-[#8C95A6] hover:text-[#273141]">
                  السابق
                </button>
                <button className="px-6 py-2.5 rounded-full bg-[#385BB1] text-white font-heading font-black text-xs sm:text-sm hover:bg-[#273141] transition-colors shadow-sm">
                  حفظ والتالي ←
                </button>
              </div>
            </div>
          )}

          {/* Screen 3: Report & Visual Analytics Mockup */}
          {activeScreen === "report" && (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border-4 border-[#5D52A1]/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <div>
                  <span className="font-heading font-black text-sm text-[#5D52A1] bg-[#F1EFFB] px-3.5 py-1 rounded-full">
                    تقرير الطفل النهائي المعتمد
                  </span>
                  <h4 className="font-heading font-black text-lg text-[#273141] mt-2">
                    ملف الطفل: كود (0042) • العمر: 6 سنوات
                  </h4>
                </div>
                <div className="text-center bg-[#FFE8D1] px-4 py-2 rounded-2xl">
                  <span className="text-[10px] font-bold text-[#FD4F0A] block">الدرجة الخام</span>
                  <span className="text-2xl font-heading font-black text-[#FD4F0A]">45 / 80</span>
                </div>
              </div>

              {/* Progress Bars for 4 Subscales from PDF Page 12 */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-heading font-black mb-1">
                    <span>1. تعرف الكلمة وتمييز الأصوات</span>
                    <span className="text-[#385BB1]">14 / 18</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#385BB1] h-full rounded-full" style={{ width: "77%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-heading font-black mb-1">
                    <span>2. الوعي بالمقاطع الصوتية</span>
                    <span className="text-[#42A86B]">9 / 18</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#42A86B] h-full rounded-full" style={{ width: "50%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-heading font-black mb-1">
                    <span>3. الوعي بالسجع والجناس</span>
                    <span className="text-[#EB6383]">12 / 18</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#EB6383] h-full rounded-full" style={{ width: "66%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-heading font-black mb-1">
                    <span>4. الوعي الفونيمي المتقدم</span>
                    <span className="text-[#F6B828]">10 / 26</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#F6B828] h-full rounded-full" style={{ width: "38%" }} />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between text-xs font-bold text-[#596375]">
                <span>✓ قابل للتصدير كـ PDF رسمي معتمد بختم الفاحص</span>
                <span className="text-[#5D52A1] font-heading font-black">تحميل التقرير 📄</span>
              </div>
            </div>
          )}

          {/* Screen 4: Post-Assessment Training Library */}
          {activeScreen === "training" && (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border-4 border-[#F69820]/20">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                <span className="font-heading font-black text-sm text-[#F69820] bg-[#FFE8D1] px-3.5 py-1 rounded-full">
                  مكتبة التدريب بعد التقييم (12 نشاط)
                </span>
                <span className="text-xs font-bold text-[#8C95A6]">
                  أنشطة مستقلة لدعم المهارة
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#FFF7EA] p-5 rounded-2xl border border-[#E3C7A9]/60 text-right">
                  <span className="text-xs font-heading font-black text-[#385BB1] block mb-1">
                    الإدراك السمعي
                  </span>
                  <h5 className="font-heading font-black text-base text-[#273141] mb-2">
                    أسمع وأميّز
                  </h5>
                  <p className="font-body text-xs text-[#596375] mb-3">
                    الانتباه للكلمات، التمييز، التذكر، واختيار الكلمة المناسبة.
                  </p>
                  <span className="text-[11px] font-heading font-black text-[#F69820]">
                    استمع ثم اختر ←
                  </span>
                </div>

                <div className="bg-[#FFF7EA] p-5 rounded-2xl border border-[#E3C7A9]/60 text-right">
                  <span className="text-xs font-heading font-black text-[#EB6383] block mb-1">
                    الإغلاق والسجع
                  </span>
                  <h5 className="font-heading font-black text-base text-[#273141] mb-2">
                    أكمّل وأربط
                  </h5>
                  <p className="font-body text-xs text-[#596375] mb-3">
                    إكمال الجمل والكلمات، الربط بالصورة، والتشابه الصوتي.
                  </p>
                  <span className="text-[11px] font-heading font-black text-[#F69820]">
                    الجملة الناقصة ←
                  </span>
                </div>

                <div className="bg-[#FFF7EA] p-5 rounded-2xl border border-[#E3C7A9]/60 text-right">
                  <span className="text-xs font-heading font-black text-[#42A86B] block mb-1">
                    الوعي الفونولوجي
                  </span>
                  <h5 className="font-heading font-black text-base text-[#273141] mb-2">
                    أحدد الصوت
                  </h5>
                  <p className="font-body text-xs text-[#596375] mb-3">
                    الصوت الأول والثاني والأخير، وعزل الأصوات وتحديدها.
                  </p>
                  <span className="text-[11px] font-heading font-black text-[#F69820]">
                    حدّد بداية الكلمة ←
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#EBF0FC] rounded-xl text-[11px] font-bold text-[#385BB1] text-center">
                فصل إلزامي: أنشطة التدريب مستقلة تماماً عن درجات المقياس الرسمي لضمان الحيادية والنزاهة الإكلينيكية.
              </div>
            </div>
          )}
        </div>

        {/* Left side in RTL: Yasser in Presenter Pose */}
        <div className="lg:col-span-4 flex justify-center">
          <YasserCharacter
            pose="presenter"
            speechText="اضغطوا على الأزرار فوق وشوفوا إزاي التطبيق بيفصل شاشة الطفل المبهجة عن لوحة الأخصائي!"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
