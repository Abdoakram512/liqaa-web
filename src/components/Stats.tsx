"use client";

import React from "react";

export default function Stats() {
  const stats = [
    {
      value: "+8,000",
      label: "طفل وعائلة",
      color: "text-[#273141]",
    },
    {
      value: "+120",
      label: "نشاط تفاعلي",
      color: "text-[#F69820]",
    },
    {
      value: "35",
      label: "مدرب ومعلم",
      color: "text-[#42A86B]",
    },
    {
      value: "4.9",
      label: "تقييم الأهالي",
      color: "text-[#EB6383]",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 -mt-2 mb-14 md:mb-20">
      <div className="bg-white rounded-3xl sm:rounded-full shadow-[0_12px_45px_rgba(39,49,65,0.06)] border border-[#F3E7DC] px-4 sm:px-10 py-3.5 sm:py-5 grid grid-cols-2 sm:flex sm:items-center sm:justify-between divide-y sm:divide-y-0 sm:divide-x-reverse sm:divide-x divide-gray-100">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center justify-center text-center p-2.5 sm:p-0"
          >
            <span
              dir="ltr"
              className={`text-2xl sm:text-3xl lg:text-4xl font-black ${item.color} leading-none mb-1 inline-block`}
            >
              {item.value}
            </span>
            <span className="text-xs sm:text-xs md:text-sm font-semibold text-[#8C95A6]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
