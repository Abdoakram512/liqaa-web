"use client";

import React from "react";

export default function ThreeSteps() {
  const steps = [
    {
      num: "1",
      circleBg: "bg-[#385BB1]",
      title: "سجّل طفلك",
      desc: "أنشئ حسابك وحدد عمر واهتمامات طفلك",
    },
    {
      num: "2",
      circleBg: "bg-[#F69820]",
      title: "اختار النشاط",
      desc: "حضوري أو أونلاين في الوقت اللي يناسبك",
    },
    {
      num: "3",
      circleBg: "bg-[#42A86B]",
      title: "تابع تقدّمه",
      desc: "تقارير أسبوعية وشهادات إنجاز",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 my-14 md:my-20">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#273141] text-center mb-14 tracking-tight">
        3 خطوات وبس
      </h2>

      {/* Steps Row */}
      <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
        {/* Decorative Dotted Wavy Connectors for Desktop */}
        <div className="hidden md:block absolute top-7 right-[24%] w-[20%] pointer-events-none">
          <img src="/assets/steps_wave.svg" alt="" className="w-full h-auto" />
        </div>
        <div className="hidden md:block absolute top-7 left-[24%] w-[20%] pointer-events-none">
          <img src="/assets/steps_wave.svg" alt="" className="w-full h-auto" />
        </div>

        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center z-10">
            {/* Step Number Circle */}
            <div
              className={`w-14 h-14 rounded-full ${step.circleBg} text-white font-black text-2xl flex items-center justify-center shadow-md mb-4 border-2 border-white`}
            >
              {step.num}
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-black text-[#273141] mb-2">
              {step.title}
            </h3>

            {/* Step Description */}
            <p className="text-[#8C95A6] text-xs sm:text-sm font-semibold max-w-[210px] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
