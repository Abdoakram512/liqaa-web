"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#FFF7EA] text-[#273141] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">عذراً، حدث خطأ غير متوقع!</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-[#F69820] text-white font-bold text-sm"
        >
          إعادة المحاولة
        </button>
      </body>
    </html>
  );
}
