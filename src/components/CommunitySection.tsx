import React from 'react';
import { MessageCircle, Camera, Send, Sparkles, MapPin } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const whatsappUrl = "https://wa.me/PHONE_NUMBER?text=مرحبا،%20لدي%20صورة%20لمشكلة%20هندسية%20في%20حارتي";

  return (
    <section id="community" className="relative py-16 sm:py-20 lg:py-28 bg-[#0F172A] text-white overflow-hidden border-t border-slate-800">
      
      {/* Subtle Architectural CSS Grid Line Pattern */}
      <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />
      
      {/* Glow highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-700/80 shadow-2xl backdrop-blur-md text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs sm:text-sm font-bold shadow-sm">
            <Camera className="w-4 h-4" />
            <span>مبادرة التغيير التشاركي</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
            هل تعاني من مشكلة هندسية في حارتك؟
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            التقط صورة للشارع، الرصيف، المدخل، أو المساحة المهملة، وأرسلها لي. قد تكون المشكلة التي ترسلها موضوع أحد التصاميم والفيديوهات القادمة.
          </p>

          {/* Step Highlights */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-slate-300 font-medium">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center gap-2">
              <Camera className="w-5 h-5 text-amber-400" />
              <span>١. التقط صورة المشكلة</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>٢. حدد موقع الحي والبلدة</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span>٣. نعد لها حلاً بالذكاء الاصطناعي</span>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-slate-950 font-black text-base sm:text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#10B981]/25 focus-ring"
            >
              <MessageCircle className="w-6 h-6 text-slate-950" />
              <span>أرسل صورة حارتك</span>
              <Send className="w-5 h-5 text-slate-950 rotate-180" />
            </a>

            {/* Supporting Note */}
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>سيتم التواصل وإرسال الصورة عبر واتساب</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
