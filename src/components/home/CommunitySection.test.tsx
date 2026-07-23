import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CommunitySection } from './CommunitySection';

describe('CommunitySection', () => {
  it('opens the prepared community message in WhatsApp', () => {
    render(<CommunitySection />);

    const link = screen.getByRole('link', { name: 'أرسل الصورة عبر واتساب' });

    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/'));
    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining(encodeURIComponent('اسم الحي أو البلدة')),
    );
  });
});
