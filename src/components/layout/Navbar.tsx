"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "حكاية ياسر", href: "#welcome" },
    { label: "المشكلة", href: "#problem" },
    { label: "الحل المقترح", href: "#idea" },
    { label: "الهيكل العلمي", href: "#scientific-core" },
    { label: "واجهات النظام", href: "#app-showcase" },
    { label: "خطة العمل", href: "#journey" },
    { label: "فريق العمل", href: "#team" },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between relative z-50">
      {/* Right side in RTL: Yasser & Miqyas Brand Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <a href="#welcome" className="flex items-center gap-2.5 group">
          {/* Playful Orange Yasser Pill Logo Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-[#FD4F0A] to-[#F69820] flex items-center justify-center text-white font-heading font-black text-xl shadow-md transition-transform group-hover:scale-105">
            ي
          </div>
          <div className="flex flex-col text-right">
            <span className="font-heading font-black text-xl sm:text-2xl text-[#273141] leading-none">
              يـاسـر
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#F69820] leading-tight">
              منصة مِقياس الوعي الصوتي
            </span>
          </div>
        </a>
      </div>

      {/* Center: Story Chapter Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#273141] font-heading font-bold text-sm xl:text-base">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#F69820] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#F69820] hover:after:w-full after:transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Left side in RTL: Project Badge & Action */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-[#EBF0FC] text-[#385BB1] font-heading font-extrabold text-xs border border-[#D5E1F9]">
          مشروع تخرج 🎓
        </span>

        <a
          href="#welcome"
          className="bg-[#F69820] hover:bg-[#FD4F0A] text-white font-heading font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 text-center"
        >
          ابدأ الحكاية ✨
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#273141] hover:text-[#F69820] focus:outline-none"
          aria-label="قائمة التصفح"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 bg-white/98 backdrop-blur-lg shadow-2xl rounded-3xl p-6 border border-[#FFE8D1] flex flex-col gap-3 text-center lg:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading font-bold text-base text-[#273141] py-2 border-b border-gray-100 hover:text-[#F69820]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <span className="text-xs font-bold text-[#8C95A6]">
              مقياس الوعي الصوتي المصور — الإصدار الثاني
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
