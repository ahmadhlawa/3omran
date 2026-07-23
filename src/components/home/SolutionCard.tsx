import { ArrowUpLeft, Play } from 'lucide-react';
import type { UrbanSolution } from '../../types/solution';
import { SolutionComparison } from './SolutionComparison';

interface SolutionCardProps {
  solution: UrbanSolution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="solution-card">
      <SolutionComparison
        title={solution.title}
        beforeImage={solution.beforeImage}
        beforeAlt={solution.beforeAlt}
        afterImage={solution.afterImage}
        afterAlt={solution.afterAlt}
      />
      <div className="solution-copy">
        <p className="solution-category">{solution.category}</p>
        <h3>{solution.title}</h3>
        <p className="solution-summary">{solution.problem}</p>
        {solution.videoUrl ? (
          <a
            className="video-link"
            href={solution.videoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Play aria-hidden="true" />
            شاهد شرح الفكرة
            <ArrowUpLeft aria-hidden="true" />
          </a>
        ) : (
          <span className="video-link video-link-disabled" aria-disabled="true">
            <Play aria-hidden="true" />
            فيديو الشرح قيد الإضافة
          </span>
        )}
      </div>
    </article>
  );
}
