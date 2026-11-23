import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ياسر — منصة مِقياس الوعي الصوتي والفونولوجي (مشروع تخرج)",
  description: "رحلة قصصية تفاعلية يقودها ياسر لتحويل مقياس الوعي الصوتي والفونولوجي المصور (أ.د. عادل عبدالله محمد) إلى منصة رقمية متكاملة للأطفال والأخصائيين.",
  icons: {
    icon: "/assets/yasser/welcome.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#FFF7EA] text-[#273141] font-sans antialiased selection:bg-[#F69820] selection:text-white overflow-x-hidden max-w-full">
        {children}
      </body>
    </html>
  );
}
