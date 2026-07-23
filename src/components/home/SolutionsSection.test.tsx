import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SolutionsSection } from './SolutionsSection';

describe('SolutionsSection', () => {
  it('filters the editorial project list by category', async () => {
    const user = userEvent.setup();
    render(<SolutionsSection />);

    expect(
      screen.getByRole('heading', { name: 'رصيف آمن بدل مسار متقطّع' }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'الإنارة العامة' }));

    expect(
      screen.getByRole('heading', { name: 'ضوء أوضح لشارع سكني' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'رصيف آمن بدل مسار متقطّع' }),
    ).not.toBeInTheDocument();
  });
});
