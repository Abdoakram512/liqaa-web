export interface TeamMember {
  id: string;
  name: string;
  role: string;
  arabicRole: string;
  contribution: string;
  avatarColor: string;
  initials: string;
  badge: string;
  github?: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lead-engineer",
    name: "عمر أحمد عبد السلام",
    role: "Project Lead & System Architect",
    arabicRole: "قائد المشروع ومهندس النظم",
    contribution: "قيادة الهيكلية المعمارية، تصميم بنية الـ API، وضمان تكامل المعايير العلمية مع النظم التقنية.",
    avatarColor: "bg-[#385BB1]",
    initials: "ع.أ",
    badge: "قيادة وهندسة النظم",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "flutter-dev",
    name: "سارة محمود إبراهيم",
    role: "Flutter Mobile & Tablet Specialist",
    arabicRole: "مطورة تطبيقات الموبايل والتابلت",
    contribution: "بناء واجهة الطفل المبهجة ولوحة الأخصائي بـ Flutter، وإدارة حالة الجلسة والتخزين المحلي.",
    avatarColor: "bg-[#F69820]",
    initials: "س.م",
    badge: "تطوير Flutter",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "uiux-designer",
    name: "يوسف حسن النجار",
    role: "UI/UX Product & Child Experience Designer",
    arabicRole: "مصمم تجربة المستخدم والطفل",
    contribution: "ابتكار واجهة مبهجة تناسب الأطفال ذوي الإعاقات والاحتياجات، وهندسة تجربة استخدام الأخصائي.",
    avatarColor: "bg-[#42A86B]",
    initials: "ي.ح",
    badge: "تصميم UI/UX للأطفال",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "backend-dev",
    name: "كريم شريف الزيات",
    role: "Backend & Database Architect",
    arabicRole: "مطور الواجهة الخلفية وقواعد البيانات",
    contribution: "تطوير خدمات Laravel API السحابية، منطق جودة البيانات، حماية ملفات الأطفال، ومحرك تقارير PDF.",
    avatarColor: "bg-[#5D52A1]",
    initials: "ك.ش",
    badge: "الواجهة الخلفية Laravel",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "phonetics-researcher",
    name: "مريم خالد رضوان",
    role: "Phonological Content & Psychometrics",
    arabicRole: "باحثة المحتوى الصوتي والقياس النفسي",
    contribution: "تدقيق البنود الـ 16 علمياً، مواءمة بنك الـ 103 صور، وضبط معادلات حساب الدرجة الخام بدقة تامة.",
    avatarColor: "bg-[#CB3C48]",
    initials: "م.خ",
    badge: "القياس والمحتوى العلمي",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    id: "motion-artist",
    name: "طارق زياد القاضي",
    role: "Creative Motion & Frontend Interactive Specialist",
    arabicRole: "مهندس التحريك وتجربة الويب التفاعلية",
    contribution: "إخراج التجربة القصصية التفاعلية لشخصية ياسر، ضبط تسلسل التحريك بالـ GSAP والقص عبر التمرير.",
    avatarColor: "bg-[#F6B828]",
    initials: "ط.ز",
    badge: "التحريك والتفاعل الإبداعي",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];
