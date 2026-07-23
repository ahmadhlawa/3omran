import React from 'react';
import { ArrowDown, Sparkles, Compass, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FallbackImage } from './FallbackImage';

export const HeroSection: React.FC = () => {
  const scrollToSolutions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('solutions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden hero-gradient text-white pt-8 pb-12 sm:pt-14 sm:pb-16 lg:py-20 border-b border-slate-800">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-6 space-y-5 text-right">
            
            {/* Identity Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>مبادرة معمارية فلسطينية</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              نحو بيئة عمرانية أفضل
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#10B981] tracking-wide">
              حلول هندسية بسيطة لواقعنا
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              أستعمل الذكاء الاصطناعي لتقديم مقترحات بصرية واقعية لمشاكل شوارعنا وأحيائنا. تصفح المشاكل واكتشف كيف يمكن للتغييرات البسيطة أن تصنع فرقاً حقيقياً.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                onClick={scrollToSolutions}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-[#10B981] hover:bg-[#0da673] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-900/20 active:scale-95 focus-ring"
              >
                <span>تصفح الحلول</span>
                <ArrowDown className="w-5 h-5 text-white animate-bounce" />
              </a>

              <a
                href="#community"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-all focus-ring"
              >
                <Compass className="w-5 h-5 text-slate-300" />
                <span>أرسل مشكلة في حارتك</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#10B981]" />
                <span>رؤى بصرية واقعية</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#E67E22]" />
                <span>رصد مشاكل الأحياء</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>أفكار قابلة للتطبيق</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Before & After Preview Split Card */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="relative rounded-2xl bg-slate-800/60 p-2 sm:p-3 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-700/60 mb-2 text-xs font-bold">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#10B981]" />
                  نموذج للتغيير المعماري
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  قبل / بعد
                </span>
              </div>

              {/* Split Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 rounded-xl overflow-hidden min-h-[260px] sm:min-h-[300px]">
                
                {/* BEFORE SIDE */}
                <div className="relative group rounded-lg overflow-hidden border border-[#E67E22]/30 bg-slate-900 min-h-[200px] sm:min-h-[280px]">
                  <FallbackImage
                    src="/images/hero-before.webp"
                    alt="الشارع الحالي قبل التدخل المعماري - عوائق وضيق في الرصيف"
                    type="before"
                    category="مشكلة الشارع الحالي"
                    loading="eager"
                    className="w-full h-full min-h-[200px] sm:min-h-[280px]"
                  />
                  {/* Before Badge */}
                  <div className="absolute top-3 right-3 bg-[#E67E22] text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow-md z-20 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>قبل</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-3 text-right">
                    <p className="text-xs font-bold text-amber-200">الوضع الحالي:</p>
                    <p className="text-[11px] text-slate-300 line-clamp-1">عشوائية في الأرصفة وقلة المساحة الآمنة</p>
                  </div>
                </div>

                {/* AFTER SIDE */}
                <div className="relative group rounded-lg overflow-hidden border border-[#10B981]/30 bg-slate-900 min-h-[200px] sm:min-h-[280px]">
                  <FallbackImage
                    src="/images/hero-after.webp"
                    alt="الرؤية المقترحة بعد المعالجة بالذكاء الاصطناعي - رصيف واسع وتشجير محلي"
                    type="after"
                    category="المقترح المعماري"
                    loading="eager"
                    className="w-full h-full min-h-[200px] sm:min-h-[280px]"
                  />
                  {/* After Badge */}
                  <div className="absolute top-3 right-3 bg-[#10B981] text-slate-950 font-black text-xs px-3 py-1 rounded-md shadow-md z-20 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>بعد</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-3 text-right">
                    <p className="text-xs font-bold text-emerald-300">الرؤية الجديدة:</p>
                    <p className="text-[11px] text-slate-300 line-clamp-1">إعادة تنظيم ذكية بلمسة معمارية إنسانية</p>
                  </div>
                </div>

              </div>

              {/* Caption */}
              <div className="mt-2.5 px-2 text-center text-xs text-slate-400 font-medium">
                💡 اسحب أو اضغط على الكروت أدناه لرؤية تحول باقي المشاكل المعمارية
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
