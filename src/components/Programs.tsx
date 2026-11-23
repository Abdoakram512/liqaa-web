"use client";

import React from "react";

export default function Programs() {
  const programs = [
    {
      title: "المستكشفين",
      subtitle: "الصغار",
      age: "٤ - ٥ سنوات",
      bgColor: "bg-[#4A7FE8]",
      badgeColor: "text-[#4A7FE8]",
      textColor: "text-white",
      avatarImg: "/assets/program_duckling_circle.png",
      alt: "المستكشفين الصغار",
    },
    {
      title: "الفنانين",
      subtitle: "المبدعين",
      age: "٦ - ٧ سنوات",
      bgColor: "bg-[#42A86B]",
      badgeColor: "text-[#42A86B]",
      textColor: "text-white",
      avatarImg: "/assets/program_sheep_circle.png",
      alt: "الفنانين المبدعين",
    },
    {
      title: "العلماء",
      subtitle: "الفضوليين",
      age: "٨ - ٩ سنوات",
      bgColor: "bg-[#EB6383]",
      badgeColor: "text-[#EB6383]",
      textColor: "text-white",
      avatarImg: "/assets/program_wolf_circle.png",
      alt: "العلماء الفضوليين",
    },
    {
      title: "القادة",
      subtitle: "الواثقين",
      age: "١٠ - ١٢ سنة",
      bgColor: "bg-[#F6B828]",
      badgeColor: "text-[#F6B828]",
      textColor: "text-[#273141]",
      avatarImg: "/assets/program_bear_circle.png",
      alt: "القادة الواثقين",
    },
  ];

  return (
    <section id="programs" className="w-full max-w-5xl mx-auto px-4 my-14 md:my-18">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#273141] mb-2 tracking-tight">
          برامج لكل عمر
        </h2>
        <p className="text-[#8C95A6] text-sm sm:text-base font-semibold">
          اختار البرنامج المناسب لعمر طفلك واهتماماته
        </p>
      </div>

      {/* 4 Program Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bgColor} ${card.textColor} rounded-[28px] p-5 h-[340px] flex flex-col justify-between items-center relative shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 select-none overflow-hidden group`}
          >
            {/* Top Row: 4-Point Star Sparkle Icon */}
            <div className="w-full flex justify-start">
              <svg
                className="w-4 h-4 fill-white opacity-85 transition-transform group-hover:rotate-45 duration-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
              </svg>
            </div>

            {/* Title & Age Badge */}
            <div className="flex flex-col items-center text-center -mt-2">
              <h3 className="text-2xl font-black leading-tight">
                {card.title}
                <br />
                {card.subtitle}
              </h3>
              <div
                className={`mt-3 px-4 py-1 rounded-full bg-white ${card.badgeColor} font-black text-xs shadow-sm`}
              >
                {card.age}
              </div>
            </div>

            {/* Circular Avatar at Bottom */}
            <div className="relative mb-2">
              <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                <img
                  src={card.avatarImg}
                  alt={card.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
