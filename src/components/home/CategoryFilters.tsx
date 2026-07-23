import type { SolutionCategory } from '../../types/solution';

interface CategoryFiltersProps {
  categories: readonly SolutionCategory[];
  selectedCategory: SolutionCategory;
  onChange: (category: SolutionCategory) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onChange,
}: CategoryFiltersProps) {
  return (
    <div
      className="category-filters"
      role="group"
      aria-label="تصفية المقترحات"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="filter-button"
          aria-pressed={selectedCategory === category}
          onClick={() => {
            onChange(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
