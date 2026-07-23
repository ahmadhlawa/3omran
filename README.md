# حلول عمرانية ذكية

واجهة عربية RTL لمعماري وصانع محتوى فلسطيني يوثّق مشكلات المكان، يعرض
تصورات بصرية أولية، ويشرح أثرها عبر الفيديو.

## التشغيل

يتطلب المشروع Node.js 24 LTS وnpm.

```bash
npm ci
npm run dev
```

أوامر التحقق:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## المحتوى القابل للاستبدال

- رابط واتساب الحالي يفتح رسالة جاهزة ويترك للزائر اختيار المستلم. يمكن إضافة
  رقم مباشر في `src/components/home/CommunitySection.tsx`.
- روابط الحسابات: استبدل `null` بالرابط الفعلي وحدّث اسم المستخدم في
  `src/data/socialLinks.ts`.
- روابط الفيديو: استبدل `null` برابط الفيديو الفعلي في
  `src/data/solutions.ts`.
- صورة المشاركة: أضف `public/images/og-cover.webp` بمقاس `1200×630`.

## صور الحالات المطلوبة

أضف الصور التالية بصيغة WebP داخل `public/images/solutions/`. المقاس الموصى
به لكل صورة `1600×1067` (نسبة `3:2`) وبجودة تحفظ تفاصيل المكان:

```text
sidewalk-before.webp   sidewalk-after.webp
lighting-before.webp  lighting-after.webp
fences-before.webp    fences-after.webp
kiosks-before.webp    kiosks-after.webp
entrance-before.webp  entrance-after.webp
space-before.webp     space-after.webp
drainage-before.webp  drainage-after.webp
parking-before.webp   parking-after.webp
```

إلى أن تتوفر الصور، تعرض الواجهة مساحة محايدة تصف الصورة المطلوبة بوضوح،
من دون الادعاء بأنها حالة منفذة أو صورة مشروع حقيقي.
