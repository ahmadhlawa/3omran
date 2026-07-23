import React from 'react';
import { Compass, MessageCircle, Layers, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-[#0F172A] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded-lg p-1"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shadow-md group-hover:bg-slate-800 transition-colors">
            <Compass className="w-6 h-6 text-white stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0F172A] group-hover:text-[#10B981] transition-colors">
                حلول عمرانية ذكية
              </span>
              <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                <Sparkles className="w-3 h-3 ml-1" />
                رؤية فلسطينية
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium hidden sm:block">
              عمارة · مجتمع · ذكاء اصطناعي
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a
            href="#"
            className="text-[#0F172A] border-b-2 border-[#10B981] pb-1 py-1 font-bold"
          >
            الرئيسية
          </a>
          <a
            href="#solutions"
            className="hover:text-[#0F172A] transition-colors py-1 flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-[#10B981]" />
            <span>الحلول المعمارية</span>
          </a>
          <a
            href="#community"
            className="hover:text-[#0F172A] transition-colors py-1"
          >
            شارِك مشكلتك
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#community"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 focus-ring"
          >
            <MessageCircle className="w-4 h-4 text-[#10B981]" />
            <span>تواصل معنا</span>
          </a>
        </div>
      </div>
    </header>
  );
};
