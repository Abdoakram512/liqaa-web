"use client";

import React from "react";

export type YasserPose = "welcome" | "thinking" | "presenter" | "guide" | "celebration";

interface YasserCharacterProps {
  pose: YasserPose;
  speechText?: string;
  speechPosition?: "top" | "top-right" | "top-left" | "right" | "left";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export default function YasserCharacter({
  pose,
  speechText,
  speechPosition = "top",
  size = "lg",
  className = "",
  animate = true,
}: YasserCharacterProps) {
  const poseImages: Record<YasserPose, { src: string; alt: string }> = {
    welcome: {
      src: "/assets/yasser/welcome.png",
      alt: "ياسر يلوح مرحباً بالزائرين",
    },
    thinking: {
      src: "/assets/yasser/thinking.png",
      alt: "ياسر يفكر ولديه فكرة ملهمة بمصباح متوهج",
    },
    presenter: {
      src: "/assets/yasser/presenter.png",
      alt: "ياسر يشير ويشرح محتوى الشاشة",
    },
    guide: {
      src: "/assets/yasser/guide.png",
      alt: "ياسر يقود الزائر في رحلة الاستخدام",
    },
    celebration: {
      src: "/assets/yasser/celebration.png",
      alt: "ياسر يحتفل بنجاح المشروع ورفع الإبهام",
    },
  };

  const sizeClasses: Record<string, string> = {
    sm: "w-44 sm:w-52 h-auto",
    md: "w-56 sm:w-64 md:w-72 h-auto",
    lg: "w-64 sm:w-80 md:w-96 lg:w-[420px] h-auto",
    xl: "w-72 sm:w-96 md:w-[440px] lg:w-[500px] h-auto",
  };

  const current = poseImages[pose] || poseImages.welcome;

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble / Narration */}
      {speechText && (
        <div
          className={`z-20 mb-3 px-5 py-3 rounded-2xl bg-white shadow-[0_10px_30px_rgba(39,49,65,0.12)] border-2 border-[#FFE8D1] max-w-xs sm:max-w-sm text-right transition-transform duration-300 hover:scale-105 ${
            animate ? "animate-soft-float" : ""
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F69820] animate-ping" />
            <span className="font-heading font-black text-xs text-[#F69820]">
              ياسر يتحدث
            </span>
          </div>
          <p className="font-heading text-sm sm:text-base font-extrabold text-[#273141] leading-snug">
            {speechText}
          </p>
          {/* Triangular Tail pointing to Yasser */}
          <div className="absolute -bottom-2.5 right-8 w-4 h-4 bg-white border-b-2 border-r-2 border-[#FFE8D1] transform rotate-45" />
        </div>
      )}

      {/* Character Image Container */}
      <div
        className={`relative ${sizeClasses[size]} transition-all duration-500 ${
          animate ? "hover:scale-[1.02]" : ""
        }`}
      >
        {/* Glow Accent behind character */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F69820]/15 via-[#385BB1]/5 to-transparent rounded-full filter blur-2xl transform scale-90 -z-10" />

        {/* The Approved 2.5D High-Res Yasser Asset */}
        <img
          src={current.src}
          alt={current.alt}
          className="w-full h-auto object-contain drop-shadow-[0_16px_30px_rgba(39,49,65,0.18)]"
          loading="eager"
        />

        {/* Soft Oval Ground Contact Shadow */}
        <div className="w-3/4 h-5 mx-auto bg-[#273141]/20 rounded-full filter blur-md -mt-4" />
      </div>
    </div>
  );
}
