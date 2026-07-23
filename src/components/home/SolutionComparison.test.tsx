import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SolutionComparison } from './SolutionComparison';

describe('SolutionComparison', () => {
  it('switches from the existing condition to the proposed visual by keyboard', async () => {
    const user = userEvent.setup();

    render(
      <SolutionComparison
        title="رصيف الحارة"
        beforeImage="/before.webp"
        beforeAlt="رصيف متضرر"
        afterImage="/after.webp"
        afterAlt="تصور لرصيف منظم"
      />,
    );

    expect(screen.getByRole('img', { name: 'رصيف متضرر' })).toBeInTheDocument();

    await user.tab();
    await user.tab();
    await user.keyboard('{Enter}');

    expect(
      screen.getByRole('img', { name: 'تصور لرصيف منظم' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'التصور المقترح' }),
    ).toHaveAttribute('aria-pressed', 'true');
  });
});
