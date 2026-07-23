import { UrbanSolution } from '../types/solution';

export const URBAN_SOLUTIONS: UrbanSolution[] = [
  {
    id: 1,
    title: "رصيف متضرر وغير صالح للمشاة",
    category: "الأرصفة",
    beforeImage: "/images/solutions/sidewalk-before.webp",
    beforeAlt: "رصيف متضرر ومليء بالعوائق والمواد التالفة في حارة محلية",
    afterImage: "/images/solutions/sidewalk-after.webp",
    afterAlt: "رصيف معاد تنظيمه مع مسار مشاة آمن وأحواض شجرية محلية",
    solution: "إعادة تنظيم الرصيف باستخدام مواد محلية، وإزالة العوائق، وإضافة مسار آمن وواضح للمشاة.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 2,
    title: "شارع سكني يفتقر إلى الإنارة",
    category: "الإنارة العامة",
    beforeImage: "/images/solutions/lighting-before.webp",
    beforeAlt: "شارع فرعي مظلم في المساء يفتقر للإنارة الكافية لسلامة المشاة",
    afterImage: "/images/solutions/lighting-after.webp",
    afterAlt: "شارع مضاء بوحدات إنارة حديثة بالطاقة الشمسية مع تحسين المظهر العمراني",
    solution: "إضافة وحدات إنارة موفرة للطاقة وتوزيعها بطريقة تقلل المناطق المظلمة وتحسن سلامة المشاة.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 3,
    title: "أسوار مرتفعة تعزل المنازل عن الشارع",
    category: "واجهات الأحياء",
    beforeImage: "/images/solutions/fences-before.webp",
    beforeAlt: "جدار خرساني مرتفع ومصمت يعزل المنزل عن المحيط العمراني",
    afterImage: "/images/solutions/fences-after.webp",
    afterAlt: "سور منخفض مدمج مع حجر مقدسي ونباتات متسلقة تعزز المشهد الجمالي",
    solution: "استبدال الأجزاء المصمتة بعناصر أخف وتشجير بسيط يحافظ على الخصوصية ويعزز التواصل البصري.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 4,
    title: "أكشاك عشوائية تعيق حركة المشاة",
    category: "تنظيم الشوارع",
    beforeImage: "/images/solutions/kiosks-before.webp",
    beforeAlt: "أكشاك تجارية عشوائية تتعدى على ممر المشاة وتسبب ازدحاماً",
    afterImage: "/images/solutions/kiosks-after.webp",
    afterAlt: "وحدات بيع موحدة التصميم ومحددة النطاق تضمن استمرارية الممر",
    solution: "إنشاء وحدات بيع موحدة ومحددة المواقع تحافظ على مصدر الرزق دون تعطيل الرصيف أو الشارع.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 5,
    title: "مدخل حي غير واضح وغير منظم",
    category: "مداخل البلدات",
    beforeImage: "/images/solutions/entrance-before.webp",
    beforeAlt: "تقاطع مدخل بلدة يفتقر إلى العنونة والافتات التنظيمية والجماليات",
    afterImage: "/images/solutions/entrance-after.webp",
    afterAlt: "مدخل بلدة مصمم بلافتة ترحيبية حجرية وتنسيق زراعي وزيتون محلي",
    solution: "تصميم مدخل واضح باستخدام تشجير محلي، وإضاءة، ولافتة تعريفية تعكس هوية المكان.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 6,
    title: "مساحة مهملة يمكن تحويلها إلى مكان عام",
    category: "الفراغات العامة",
    beforeImage: "/images/solutions/space-before.webp",
    beforeAlt: "أرض مهملة في وسط الحي تتجمع فيها النفايات والأتربة",
    afterImage: "/images/solutions/space-after.webp",
    afterAlt: "حديقة جيبية صغيرة مع مقاعد خشبية ومظلة ومساحة لعب آمنة للأطفال",
    solution: "تحويل المساحة إلى منطقة جلوس صغيرة وآمنة باستخدام مظلات وتشجير ومقاعد منخفضة التكلفة.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 7,
    title: "تجمع مياه الأمطار في تقاطع سكني",
    category: "تصريف المياه",
    beforeImage: "/images/solutions/drainage-before.webp",
    beforeAlt: "تجمع كبير لمياه الأمطار يقطع الطريق أمام المشاة والسيارات",
    afterImage: "/images/solutions/drainage-after.webp",
    afterAlt: "مجرى تصريف حيوي مع حوض تجميع نباتي يغذي المياه الجوفية",
    solution: "إنشاء مسارات حيوية لتصريف المياه واستغلالها في ري الأحواض الزراعية المجاورة للشارع.",
    videoUrl: "https://example.com/video-placeholder"
  },
  {
    id: 8,
    title: "مواقف سيارات عشوائية في ساحة البلدة",
    category: "تنظيم الشوارع",
    beforeImage: "/images/solutions/parking-before.webp",
    beforeAlt: "سيارات متوقفة بشكل عشوائي تلغي المساحة المخصصة للناس",
    afterImage: "/images/solutions/parking-after.webp",
    afterAlt: "تحديد مسارات السيارات وإعادة الساحة المركزية للمشاة والأنشطة الاجتماعية",
    solution: "إعادة توزيع مواقف السيارات في أطراف الساحة وتهيئة المساحة المركزية للأنشطة الاجتماعية والمشاة.",
    videoUrl: "https://example.com/video-placeholder"
  }
];

export const CATEGORIES = [
  "الكل",
  "الأرصفة",
  "الإنارة العامة",
  "واجهات الأحياء",
  "تنظيم الشوارع",
  "مداخل البلدات",
  "الفراغات العامة",
  "تصريف المياه"
];
