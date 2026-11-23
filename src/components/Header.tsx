"use client";

import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between relative z-50">
      {/* Right side in RTL: Brand Logo */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <a href="#" className="flex items-center group">
          <img
            src="/assets/logo_clean.png"
            alt="نشاطي - nashaty"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-[#273141] font-bold text-sm lg:text-base">
        <a
          href="#activities"
          className="hover:text-[#F69820] transition-colors relative py-1"
        >
          الأنشطة
        </a>
        <a
          href="#programs"
          className="hover:text-[#F69820] transition-colors relative py-1"
        >
          البرامج
        </a>
        <a
          href="#parents"
          className="hover:text-[#F69820] transition-colors relative py-1"
        >
          للأهالي
        </a>
        <a
          href="#teachers"
          className="hover:text-[#F69820] transition-colors relative py-1"
        >
          المعلمين
        </a>
      </nav>

      {/* Left side in RTL: Actions */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
        <button className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#273141] text-[#273141] font-bold text-xs md:text-sm hover:bg-[#273141] hover:text-white transition-all shadow-sm">
          سجّل طفلك
        </button>
        <button
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F69820] hover:bg-[#FD4F0A] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm transition-transform hover:scale-105"
          aria-label="الحساب"
        >
          ع
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#273141] hover:text-[#F69820]"
          aria-label="قائمة التصفح"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-5 border border-[#F5EADF] flex flex-col gap-4 text-center md:hidden">
          <a
            href="#activities"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-[#273141] py-2 border-b border-gray-100"
          >
            الأنشطة
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-[#273141] py-2 border-b border-gray-100"
          >
            البرامج
          </a>
          <a
            href="#parents"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-[#273141] py-2 border-b border-gray-100"
          >
            للأهالي
          </a>
          <a
            href="#teachers"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-[#273141] py-2 border-b border-gray-100"
          >
            المعلمين
          </a>
          <button className="w-full py-2.5 rounded-full border border-[#273141] text-[#273141] font-bold text-sm hover:bg-[#273141] hover:text-white transition">
            سجّل طفلك
          </button>
        </div>
      )}
    </header>
  );
}
