import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Image as ImageIcon, Sparkles, Building2, Trees, Footprints } from 'lucide-react';

interface FallbackImageProps {
  src: string;
  alt: string;
  type: 'before' | 'after';
  category?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  type,
  category = 'عمارة وتخطيط',
  className = '',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  const isBefore = type === 'before';

  if (hasError) {
    return (
      <div
        className={`relative w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center transition-all ${
          isBefore
            ? 'bg-gradient-to-br from-amber-950/80 via-slate-900 to-amber-900/60 border-amber-500/30 text-amber-200'
            : 'bg-gradient-to-br from-emerald-950/80 via-slate-900 to-emerald-900/60 border-emerald-500/30 text-emerald-200'
        } ${className}`}
      >
        {/* Subtle SVG Grid Background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Status Badge */}
        <div
          className={`z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-sm border ${
            isBefore
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
          }`}
        >
          {isBefore ? (
            <>
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>صورة المشكلة</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>تصور الحل المقترح</span>
            </>
          )}
        </div>

        {/* Icon representation */}
        <div className="z-10 relative my-2 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 shadow-lg text-slate-300">
          {category.includes('الأرصفة') ? (
            <Footprints className="w-8 h-8 opacity-90 text-amber-400" />
          ) : category.includes('الفراغات') || category.includes('واجهات') ? (
            <Building2 className="w-8 h-8 opacity-90 text-emerald-400" />
          ) : category.includes('تشجير') ? (
            <Trees className="w-8 h-8 opacity-90 text-emerald-400" />
          ) : (
            <ImageIcon className="w-8 h-8 opacity-90 text-slate-300" />
          )}
        </div>

        {/* Category label */}
        <span className="z-10 text-xs tracking-wide text-slate-400 font-medium mt-1">
          {category}
        </span>

        {/* Descriptive message */}
        <p className="z-10 text-sm font-semibold text-slate-200 mt-1 max-w-[220px] line-clamp-2">
          {alt}
        </p>

        {/* AI Graphic Badge */}
        <div className="z-10 mt-3 inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900/60 px-2.5 py-0.5 rounded-full border border-slate-800">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>معالجة بصرية بالذكاء الاصطناعي</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
};
