import React, { useState } from 'react';
import { UrbanSolution } from '../types/solution';
import { FallbackImage } from './FallbackImage';
import { AlertTriangle, CheckCircle2, Video, RotateCw, ExternalLink } from 'lucide-react';

interface SolutionFlipCardProps {
  solution: UrbanSolution;
}

export const SolutionFlipCard: React.FC<SolutionFlipCardProps> = ({ solution }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle card flip state on tap/click or key press
  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleFlip();
    }
  };

  // Ensure clicking the video button doesn't trigger card flipping on mobile
  const handleVideoButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="group relative h-[420px] w-full perspective-1000 cursor-pointer select-none"
      onClick={handleToggleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`بطاقة حل معماري: ${solution.title}. اضغط للتنقل بين المشكلة والحل المقترح.`}
    >
      {/* 3D Inner Container */}
      <div
        className={`relative w-full h-full duration-700 transition-transform transform-style-3d rounded-2xl shadow-md group-hover:shadow-xl ${
          isFlipped ? 'flipped-card' : ''
        } group-hover:[transform:rotateY(-180deg)] group-focus:[transform:rotateY(-180deg)]`}
      >
        {/* ==================== FRONT FACE: THE PROBLEM ==================== */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden border border-slate-200 bg-white flex flex-col justify-between shadow-sm">
          
          {/* Problem Image Container */}
          <div className="relative w-full h-52 overflow-hidden bg-slate-900">
            <FallbackImage
              src={solution.beforeImage}
              alt={solution.beforeAlt}
              type="before"
              category={solution.category}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Orange Badge */}
            <div className="absolute top-3 right-3 bg-[#E67E22] text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>المشكلة</span>
            </div>

            {/* Category Pill */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700">
              {solution.category}
            </div>
          </div>

          {/* Front Content Area */}
          <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/30 border-t border-amber-100/80">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#E67E22] transition-colors leading-snug">
                {solution.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {solution.beforeAlt}
              </p>
            </div>

            {/* Interaction Hint for Touch/Desktop */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#E67E22] font-semibold">
              <span className="flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                <span>اضغط لرؤية الحل</span>
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                قبل التدخل المعماري
              </span>
            </div>
          </div>

        </div>

        {/* ==================== BACK FACE: THE PROPOSED SOLUTION ==================== */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden rotate-y-180 border border-emerald-200 bg-white flex flex-col justify-between shadow-md">
          
          {/* Solution Image Container */}
          <div className="relative w-full h-44 overflow-hidden bg-slate-900">
            <FallbackImage
              src={solution.afterImage}
              alt={solution.afterAlt}
              type="after"
              category={solution.category}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Emerald Badge */}
            <div className="absolute top-3 right-3 bg-[#10B981] text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>الحل المقترح</span>
            </div>

            {/* Category Pill */}
            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-emerald-300 text-xs px-2.5 py-1 rounded-md border border-emerald-800">
              {solution.category}
            </div>
          </div>

          {/* Back Content Area */}
          <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-emerald-50/40 via-white to-emerald-50/20 border-t border-emerald-100">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#10B981] block">
                التصور والتصميم المعماري:
              </span>
              <p className="text-sm text-slate-800 font-semibold leading-relaxed">
                {solution.solution}
              </p>
            </div>

            {/* Action Video Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <a
                href={solution.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleVideoButtonClick}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 focus-ring"
                aria-label={`شاهد فيديو الشرح لمشكلة ${solution.title}`}
              >
                <Video className="w-4 h-4 text-slate-950" />
                <span>شاهد فيديو الشرح</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
