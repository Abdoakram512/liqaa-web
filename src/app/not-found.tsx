import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF7EA] text-[#273141] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-black text-[#F69820] mb-3">404</h1>
      <h2 className="text-2xl font-bold mb-4">الصفحة المطلوبة غير موجودة</h2>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#273141] text-white font-bold text-sm hover:bg-[#F69820] transition-colors"
      >
        العودة إلى حكاية ياسر الرئيسية
      </Link>
    </div>
  );
}
