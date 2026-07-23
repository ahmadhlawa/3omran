import { useState } from 'react';
import { CATEGORIES, URBAN_SOLUTIONS } from '../../data/solutions';
import type { SolutionCategory } from '../../types/solution';
import { CategoryFilters } from './CategoryFilters';
import { SolutionCard } from './SolutionCard';

export function SolutionsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<SolutionCategory>('الكل');
  const visibleSolutions =
    selectedCategory === 'الكل'
      ? URBAN_SOLUTIONS
      : URBAN_SOLUTIONS.filter(
          (solution) => solution.category === selectedCategory,
        );

  return (
    <section id="solutions" className="solutions-section" aria-labelledby="solutions-title">
      <div className="container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">مشاهدات من الشارع</p>
            <h2 id="solutions-title">المشكلة كما هي، والفكرة كما يمكن أن تكون.</h2>
          </div>
          <p>
            تصورات أولية تقارن المشكلة بمعالجة معمارية ممكنة. التنفيذ يحتاج إلى
            دراسة هندسية وموافقات الجهات المختصة.
          </p>
        </div>

        <CategoryFilters
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onChange={(category) => {
            setSelectedCategory(category);
          }}
        />

        <p className="sr-only" aria-live="polite">
          عدد المقترحات المعروضة: {visibleSolutions.length}
        </p>
        <div className="solutions-grid">
          {visibleSolutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
