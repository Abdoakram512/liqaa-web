export interface StoryChapter {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  yasserPose: 'welcome' | 'thinking' | 'presenter' | 'guide' | 'celebration';
  yasserQuote: string;
  themeColor: string;
  badgeText: string;
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'welcome',
    number: 1,
    title: 'أهلًا بك في عالم ياسر',
    shortTitle: 'البداية',
    yasserPose: 'welcome',
    yasserQuote: 'أهلًا! أنا ياسر 👋.. تعالوا أحكيلكم حكاية مشروعنا!',
    themeColor: '#F69820',
    badgeText: 'المقدمة التفاعلية',
  },
  {
    id: 'problem',
    number: 2,
    title: 'لماذا نحول المقياس إلى تطبيق؟',
    shortTitle: 'المشكلة',
    yasserPose: 'thinking',
    yasserQuote: 'بس قبل ما أوريكم الحل.. خلوني أحكيلكم المشكلة بدأت منين!',
    themeColor: '#CB3C48',
    badgeText: 'تحديات الواقع الميداني',
  },
  {
    id: 'idea',
    number: 3,
    title: 'الفكرة الكبيرة: منصة رقمية متكاملة',
    shortTitle: 'الحل المقترح',
    yasserPose: 'thinking',
    yasserQuote: 'ومن هنا بدأت فكرتنا.. تحويل الأوراق لمنظومة تقييم ذكية!',
    themeColor: '#385BB1',
    badgeText: 'رؤية المشروع',
  },
  {
    id: 'workflow',
    number: 4,
    title: 'مسار الاستخدام: من البداية للنهاية',
    shortTitle: 'رحلة الجلسة',
    yasserPose: 'guide',
    yasserQuote: 'تعالوا نشوف إزاي الأخصائي والطفل بيعيشوا التجربة في 6 خطوات!',
    themeColor: '#42A86B',
    badgeText: 'دورة التقييم المنظمة',
  },
  {
    id: 'scientific-core',
    number: 5,
    title: 'الهيكل العلمي والقدرات الأساسية',
    shortTitle: 'الهيكل العلمي',
    yasserPose: 'presenter',
    yasserQuote: 'المشروع مبني على أساس علمي دقيق: 4 مقاييس و16 مهارة تفصيلية!',
    themeColor: '#385BB1',
    badgeText: 'التقنين والشمولية',
  },
  {
    id: 'app-showcase',
    number: 6,
    title: 'تجربة التطبيق المزدوجة',
    shortTitle: 'واجهات النظام',
    yasserPose: 'presenter',
    yasserQuote: 'واجهة مبهجة للطفل تشجعه، ولوحة متقدمة للأخصائي تحفظ كل تفصيلة!',
    themeColor: '#5D52A1',
    badgeText: 'واجهات الموبايل والتابلت',
  },
  {
    id: 'journey',
    number: 7,
    title: 'رحلة التنفيذ المرحلية',
    shortTitle: 'خطة العمل',
    yasserPose: 'guide',
    yasserQuote: 'مشينا خطوة بخطوة من البحث والتحليل حتى الاختبار والتسليم!',
    themeColor: '#F69820',
    badgeText: 'الجدول الزمني للإنتاج',
  },
  {
    id: 'team',
    number: 8,
    title: 'فريق العمل المبدع',
    shortTitle: 'فريق العمل',
    yasserPose: 'presenter',
    yasserQuote: 'وراء كل سطر برمجي وتصميم فني، فريق شغوف آمن بالفكرة!',
    themeColor: '#385BB1',
    badgeText: 'صنّاع المشروع',
  },
  {
    id: 'future',
    number: 9,
    title: 'الآفاق المستقبلية',
    shortTitle: 'المستقبل',
    yasserPose: 'thinking',
    yasserQuote: 'طموحنا لا يتوقف هنا.. شوفوا الميزات المخطط إضافتها مستقبلاً!',
    themeColor: '#42A86B',
    badgeText: 'التوسع والتطوير',
  },
  {
    id: 'finale',
    number: 10,
    title: 'ختام الحكاية.. وبداية الأثر',
    shortTitle: 'الخاتمة',
    yasserPose: 'celebration',
    yasserQuote: 'ودي كانت حكايتنا.. والأجمل إن دي مجرد البداية لصنع فرق حقيقي!',
    themeColor: '#F69820',
    badgeText: 'نلتقي في المستقبل',
  },
];
