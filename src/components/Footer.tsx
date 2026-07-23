import React from 'react';
import { SocialLinks } from './SocialLinks';
import { Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#10B981] flex items-center justify-center text-slate-950 font-black shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                حلول عمرانية ذكية
              </span>
            </div>

            <p className="text-sm text-slate-300 font-normal max-w-md leading-relaxed">
              مقترحات بصرية وهندسية لبيئة عمرانية أكثر إنسانية. منصة تهدف لرصد مشاكل شوارعنا وأحيائنا وتقديم حلول معمارية واقعية باستخدام الذكاء الاصطناعي.
            </p>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-6 space-y-3 md:text-left">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              تواصل وتابع المنصة
            </h4>
            <div className="flex md:justify-start">
              <SocialLinks />
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Quote */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 حلول عمرانية ذكية - كافة الحقوق محفوظة</p>
          
          <p className="flex items-center gap-1.5 text-slate-400 font-semibold">
            <span>صُمم لخدمة المكان والإنسان</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block" />
          </p>
        </div>

      </div>
    </footer>
  );
};
