"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { PROJECT_INFO } from "@/data/projectContent";

export default function Scene09Future() {
  return (
    <section
      id="future"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#EAF7EE] text-[#42A86B] font-heading font-black text-xs">
          الفصل 09 • الآفاق المستقبلية
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          ما بعد النسخة الأولى: الآفاق المستقبلية
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          ميزات مستقبلية مقترحة لتوسيع نطاق الأثر ومساعدة مراكز ومدارس أكثر (مفصولة بوضوح عن النطاق المعتمد حالياً)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
        {/* Right side in RTL: Yasser in Thinking Pose */}
        <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
          <YasserCharacter
            pose="thinking"
            speechText="طموحنا لا يتوقف هنا.. الذكاء الاصطناعي ودعم آبل هيخلوا التطبيق متاح لكل طفل في الوطن العربي!"
            size="md"
          />
        </div>

        {/* Left side in RTL: 4 Future Cards from PDF Page 18 */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2">
          {PROJECT_INFO.futureEnhancements.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgba(39,49,65,0.06)] border border-[#F3E7DC] hover:border-[#42A86B] transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🚀</span>
                <span className="text-[11px] font-heading font-black px-3 py-1 rounded-full bg-[#EAF7EE] text-[#42A86B]">
                  تطوير مستقبلي مخطط
                </span>
              </div>

              <h3 className="font-heading font-black text-lg text-[#273141] mb-2">
                {feat.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scope Disclaimer Banner */}
      <div className="bg-[#FFF7EA] border-2 border-[#E3C7A9] rounded-2xl p-4 text-center max-w-2xl mx-auto text-xs font-bold text-[#8C95A6]">
        * التزام بالأمانة العلمية: هذه الميزات هي رؤى للتطوير المستقبلي والتوسع الإقليمي، وليست ميزات مفعلة في النسخة التشغيلية الأولى.
      </div>
    </section>
  );
}
