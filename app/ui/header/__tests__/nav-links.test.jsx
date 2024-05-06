import { render, screen } from '@testing-library/react';
import 'next/navigation';
import { expect, test, vi } from 'vitest';
import NavLinks from '../nav-links';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn().mockReturnValue('/search'),
}));

function setup() {
  return render(<NavLinks />);
}

test('nav links are underlined when on that page', () => {
  setup();
  expect(
    screen.getByRole('link', { name: /volunteer/i }).classList.value,
  ).toMatch(/underline/i);
});
