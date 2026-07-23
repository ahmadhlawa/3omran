import { useState } from 'react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface SolutionComparisonProps {
  title: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  priority?: boolean;
}

export function SolutionComparison({
  title,
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  priority = false,
}: SolutionComparisonProps) {
  const [view, setView] = useState<'before' | 'after'>('before');
  const isBefore = view === 'before';

  return (
    <div className="comparison">
      <div
        className="comparison-controls"
        role="group"
        aria-label={`مقارنة ${title}`}
      >
        <button
          type="button"
          aria-pressed={isBefore}
          onClick={() => {
            setView('before');
          }}
        >
          الوضع الحالي
        </button>
        <button
          type="button"
          aria-pressed={!isBefore}
          onClick={() => {
            setView('after');
          }}
        >
          التصور المقترح
        </button>
      </div>
      <div className="comparison-media" data-state={view}>
        <ImageWithFallback
          src={isBefore ? beforeImage : afterImage}
          alt={isBefore ? beforeAlt : afterAlt}
          width={1200}
          height={800}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </div>
    </div>
  );
}
