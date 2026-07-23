import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { CategoryFilters } from './CategoryFilters';

describe('CategoryFilters', () => {
  it('announces and changes the selected category', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <CategoryFilters
        categories={['الكل', 'الأرصفة']}
        selectedCategory="الكل"
        onChange={onChange}
      />,
    );

    expect(screen.getByRole('button', { name: 'الكل' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );

    await user.click(screen.getByRole('button', { name: 'الأرصفة' }));

    expect(onChange).toHaveBeenCalledWith('الأرصفة');
  });
});
