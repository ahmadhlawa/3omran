import React, { useState } from 'react';
import { URBAN_SOLUTIONS, CATEGORIES } from '../data/solutions';
import { SolutionFlipCard } from './SolutionFlipCard';
import { Filter, Layers, Info } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const filteredSolutions = selectedCategory === 'الكل'
    ? URBAN_SOLUTIONS
    : URBAN_SOLUTIONS.filter((item) => item.category === selectedCategory);

  return (
    <section id="solutions" className="py-12 sm:py-16 lg:py-24 bg-[#F8FAFC] architectural-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-[#10B981]" />
              <span>معرض الحلول المعمارية</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              مشاكل نعيشها.. وحلول يمكن تنفيذها
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
              مقارنات بصرية توضح كيف يمكن لمعالجة هندسية مدروسة أن تحسن مساحاتنا العامة.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 px-1 max-w-full no-scrollbar shrink-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all focus-ring ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-sm font-bold'
                      : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Helpful User Instruction Bar */}
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium shadow-sm">
            <Info className="w-4 h-4 text-[#E67E22] shrink-0" />
            <span>
              مرر المؤشر فوق البطاقة (أو اضغط عليها بالأجهزة الكفية) لاستكشاف الحل المعماري المقترح.
            </span>
          </div>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredSolutions.map((solution) => (
            <SolutionFlipCard key={solution.id} solution={solution} />
          ))}
        </div>

        {/* Empty state if filtered */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
            <p className="text-slate-500 font-bold text-sm">
              لا توجد أفكار معمارية حالياً في هذا التصنيف.
            </p>
            <button
              onClick={() => setSelectedCategory('الكل')}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-bold hover:bg-slate-800"
            >
              عرض جميع التصنيفات
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
