import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import DesktopHeader from '../desktop';
import { routes } from '../nav-links';

function setup() {
  return render(<DesktopHeader />);
}

test('header has correct num of links', () => {
  setup();
  const linksNum = routes.length + 1;
  expect(screen.getByRole('banner').childElementCount).toBe(linksNum);
  expect(screen.getAllByRole('link').length).toBe(linksNum);
});

test('header logo has descriptive name', () => {
  setup();
  expect(screen.getByRole('img')).toHaveAccessibleName(
    /branford volunteers logo/i,
  );
});

test('links display correct text', () => {
  setup();
  const linksText = routes.reduce((acc, curr) => acc + curr.name, '');
  expect(screen.getByRole('banner')).toHaveTextContent(linksText);
});
