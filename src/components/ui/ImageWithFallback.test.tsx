import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ImageWithFallback } from './ImageWithFallback';

describe('ImageWithFallback', () => {
  it('shows an honest labelled fallback when a local image is missing', () => {
    render(
      <ImageWithFallback
        src="/missing.webp"
        alt="رصيف متضرر في الحي"
        width={1200}
        height={800}
      />,
    );

    fireEvent.error(screen.getByRole('img', { name: 'رصيف متضرر في الحي' }));

    expect(
      screen.getByRole('img', { name: 'رصيف متضرر في الحي' }),
    ).toHaveTextContent('مساحة الصورة');
  });

  it('tries a new source after the previous source failed', () => {
    const { rerender } = render(
      <ImageWithFallback
        src="/missing-before.webp"
        alt="الوضع الحالي"
        width={1200}
        height={800}
      />,
    );

    fireEvent.error(screen.getByRole('img', { name: 'الوضع الحالي' }));

    rerender(
      <ImageWithFallback
        src="/available-after.webp"
        alt="التصور المقترح"
        width={1200}
        height={800}
      />,
    );

    expect(
      screen.getByRole('img', { name: 'التصور المقترح' }),
    ).toHaveAttribute('src', '/available-after.webp');
  });
});
