"use client";

import React, { useState, useEffect } from "react";
import { STORY_CHAPTERS, StoryChapter } from "@/data/storyChapters";

export default function StoryProgress() {
  const [activeChapterId, setActiveChapterId] = useState<string>("welcome");
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      setProgressPercent(progress);

      // Determine active chapter by section offset
      for (let i = STORY_CHAPTERS.length - 1; i >= 0; i--) {
        const chapter = STORY_CHAPTERS[i];
        const el = document.getElementById(chapter.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveChapterId(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeChapter = STORY_CHAPTERS.find((c) => c.id === activeChapterId) || STORY_CHAPTERS[0];

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Floating Story Progress Tracker (Left side in RTL) */}
      <aside
        aria-label="مؤشر فصول القصة"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-3 bg-white/90 backdrop-blur-md px-3.5 py-4 rounded-3xl shadow-[0_12px_40px_rgba(39,49,65,0.1)] border border-[#FFE8D1]"
      >
        <div className="flex items-center gap-2 mb-1 px-1">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F69820]" />
          <span className="font-heading font-black text-xs text-[#273141]">
            الفصل {activeChapter.number} من {STORY_CHAPTERS.length}
          </span>
        </div>

        {/* Vertical Chapter Dots */}
        <div className="flex flex-col gap-2 w-full">
          {STORY_CHAPTERS.map((chapter) => {
            const isActive = chapter.id === activeChapterId;
            return (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className="group flex items-center gap-2.5 text-right w-full py-0.5 focus:outline-none"
                title={chapter.title}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "bg-[#F69820] scale-125 shadow-[0_0_8px_rgba(246,152,32,0.6)]"
                      : "bg-[#E3C7A9] group-hover:bg-[#F69820]/60"
                  }`}
                />
                <span
                  className={`text-[11px] font-heading font-bold transition-all duration-200 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs ${
                    isActive ? "max-w-xs text-[#273141]" : "text-[#8C95A6]"
                  }`}
                >
                  {chapter.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vertical Scroll Progress Line */}
        <div className="w-full bg-[#FFE8D1] h-1.5 rounded-full overflow-hidden mt-1">
          <div
            className="bg-[#F69820] h-full transition-all duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </aside>

      {/* Mobile / Tablet Compact Bottom Story Pill */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_10px_35px_rgba(39,49,65,0.15)] border border-[#FFE8D1] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F69820] animate-ping" />
          <span className="font-heading font-black text-xs text-[#273141]">
            الفصل {activeChapter.number}: {activeChapter.shortTitle}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-16 bg-[#FFE8D1] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#F69820] h-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="font-bold text-[10px] text-[#8C95A6]">
            {Math.round(progressPercent)}%
          </span>
        </div>
      </div>
    </>
  );
}
