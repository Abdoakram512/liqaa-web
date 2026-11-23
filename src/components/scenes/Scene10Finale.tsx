"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";

export default function Scene10Finale() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="finale"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 pb-24 overflow-hidden"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#FFE8D1] text-[#F69820] font-heading font-black text-xs">
          الفصل 10 • ختام الحكاية والبداية المستمرة
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-[#273141] mb-4 tracking-tight">
          ودي كانت حكايتنا..
          <br />
          <span className="text-[#F69820]">والأجمل إن دي مجرد البداية! ✨</span>
        </h2>
        <p className="text-[#596375] font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          مشروع تخرج يجسد قوة الهندسة البرمجية والتصميم التفاعلي في خدمة التعليم الخاص والتقييم السيكومتري للأطفال
        </p>
      </div>

      {/* Heroic Celebration Card with Warm Orange Background */}
      <div className="bg-[#FF952F] text-white rounded-[36px] p-8 sm:p-12 md:p-16 shadow-2xl relative select-none overflow-hidden mb-16">
        {/* Decorative Floating Sparkles */}
        <div className="absolute top-6 right-8 text-3xl opacity-80 animate-pulse">
          ✨
        </div>
        <div className="absolute bottom-8 left-12 text-4xl opacity-70 animate-bounce">
          🌟
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Right side in RTL: Celebratory Message & CTAs */}
          <div className="lg:col-span-7 text-right">
            <span className="text-[#FFE1A8] font-heading font-black text-sm tracking-wider uppercase block mb-2">
              شكراً لوقتكم واهتمامكم
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-4 leading-tight">
              معاً نصنع تجربة تقييم
              <br />
              يحبها الطفل ويثق بها الفاحص
            </h3>
            <p className="text-white/95 font-body text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              نتمنى أن تكون جولة ياسر قد ألهمتكم كما ألهمتنا فكرة المشروع أثناء رحلة البحث والتصميم والتطوير. نرحب بأي استفسارات أو ملاحظات إكلينيكية وتقنية!
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToTop}
                className="bg-[#273141] hover:bg-[#161211] text-white font-heading font-black text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>ابدأ الجولة من جديد</span>
                <span>↺</span>
              </button>

              <a
                href="#team"
                className="bg-white/20 hover:bg-white/30 text-white font-heading font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full border border-white/40 transition-all text-center"
              >
                تواصل مع فريق العمل ✉
              </a>
            </div>
          </div>

          {/* Left side in RTL: Yasser in Celebration Pose */}
          <div className="lg:col-span-5 flex justify-center">
            <YasserCharacter
              pose="celebration"
              speechText="عاش يا أبطال! 🎉 فخور بيكم وسعيد إني كنت معاكم في الرحلة دي!"
              size="xl"
            />
          </div>
        </div>
      </div>

      {/* Professional Project Footer */}
      <footer className="border-t border-[#E3C7A9]/70 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-heading font-bold text-[#8C95A6]">
        {/* Right side in RTL: Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#F69820] text-white flex items-center justify-center font-black text-sm">
            ي
          </div>
          <span className="text-[#273141] font-black text-sm">
            ياسر — منصة مِقياس الوعي الصوتي والفونولوجي
          </span>
        </div>

        {/* Center: Academic attribution */}
        <div className="text-center text-[#596375]">
          مشروع تخرج جامعي • مستند إلى مقياس أ.د. عادل عبدالله محمد (الإصدار الثاني)
        </div>

        {/* Left side in RTL: Copyright */}
        <div className="text-center md:text-left text-[11px]" dir="ltr">
          © 2026 Yasser Project Team — All Rights Reserved
        </div>
      </footer>
    </section>
  );
}
