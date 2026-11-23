"use client";

import React from "react";
import YasserCharacter from "@/components/character/YasserCharacter";
import { TEAM_MEMBERS } from "@/data/teamMembers";

export default function Scene08Team() {
  return (
    <section
      id="team"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-center">
        <span className="px-3.5 py-1 rounded-full bg-[#EBF0FC] text-[#385BB1] font-heading font-black text-xs">
          الفصل 08 • فريق العمل وصنّاع المشروع
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#273141] mb-3 tracking-tight">
          فريق العمل: شغف الهندسة في خدمة الأطفال
        </h2>
        <p className="text-[#596375] font-body text-sm sm:text-base md:text-lg">
          طلاب جامعيون ومهندسون جمعهم الإيمان بأهمية توظيف البرمجيات الحديثة لدعم ذوي الإعاقات والاحتياجات
        </p>
      </div>

      {/* Top Banner with Yasser Presenting */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white rounded-[32px] p-6 sm:p-8 shadow-sm border border-[#FFE8D1]">
        <div className="text-right">
          <span className="text-[#F69820] font-heading font-black text-xs block mb-1">
            مشروع تخرج جامعي متميز 🎓
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-black text-[#273141]">
            وراء كل شاشة وسطر كودي، فريق شغوف ومتكامل
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#596375] mt-1 max-w-xl">
            تم توزيع الأدوار الهندسية بدقة بين تطوير تطبيقات الموبايل، هندسة الواجهة الخلفية، تصميم تجربة الطفل، وتدقيق المحتوى السيكومتري لضمان أعلى معايير الجودة الأكاديمية والمهنية.
          </p>
        </div>

        <div className="flex-shrink-0">
          <YasserCharacter
            pose="presenter"
            speechText="أنا فخور جداً بفريقنا اللي اشتغل بقلبه عشان يطلع المشروع بالجمال ده!"
            size="sm"
          />
        </div>
      </div>

      {/* 6 Team Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-[28px] p-6 shadow-[0_10px_35px_rgba(39,49,65,0.06)] border border-[#F3E7DC] hover:border-[#F69820] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
          >
            <div>
              {/* Member Top Row: Initials Avatar + Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${member.avatarColor} text-white font-heading font-black text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                >
                  {member.initials}
                </div>
                <span className="text-[11px] font-heading font-black px-3 py-1 rounded-full bg-[#FFE8D1] text-[#FD4F0A]">
                  {member.badge}
                </span>
              </div>

              {/* Member Name & Arabic Role */}
              <h3 className="font-heading font-black text-xl text-[#273141] mb-1">
                {member.name}
              </h3>
              <p className="font-heading font-extrabold text-xs text-[#385BB1] mb-3">
                {member.arabicRole}
              </p>

              {/* Contribution Description */}
              <p className="font-body text-xs sm:text-sm text-[#596375] leading-relaxed">
                {member.contribution}
              </p>
            </div>

            {/* Bottom Row: English Title & Social Links */}
            <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#8C95A6]">
              <span className="font-mono text-[11px]">{member.role}</span>
              <div className="flex items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-[#FFF7EA] hover:bg-[#F69820] hover:text-white transition-colors flex items-center justify-center font-bold text-xs"
                  title="LinkedIn Profile"
                >
                  in
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-[#FFF7EA] hover:bg-[#273141] hover:text-white transition-colors flex items-center justify-center font-bold text-xs"
                  title="GitHub Profile"
                >
                  git
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
