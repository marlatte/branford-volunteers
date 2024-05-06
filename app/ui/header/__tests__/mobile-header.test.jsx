import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { routes } from '../nav-links';
import MobileHeader from '../mobile';

function setup() {
  return render(<MobileHeader />);
}

test('search button has accessible name, correct href', () => {
  setup();
  const searchButton = screen.getByRole('link', { name: /search/i });
  expect(searchButton).toHaveAccessibleName('Search Volunteer Opportunities');
  expect(searchButton).toHaveAttribute('href', '/search');
});

test('header logo has descriptive name', () => {
  setup();
  expect(screen.getByRole('img')).toHaveAccessibleName(
    /branford volunteers logo/i,
  );
});

test('menu button has accessible name', () => {
  setup();
  expect(screen.getByRole('button')).toHaveAccessibleName(/menu/i);
});

test('clicking menu button opens nav-links, changes bg color & name', async () => {
  const user = userEvent.setup();
  setup();
  const linksNum = routes.length + 2;
  const header = screen.getByRole('banner');
  const menuBtn = screen.getByRole('button', { name: /menu/i });

  await user.click(menuBtn);

  expect(menuBtn).toHaveAccessibleName(/close menu/i);
  expect(header.classList.value).toMatch('bg-volunteer-950');
  expect(header.children[1].childElementCount).toBe(routes.length);
  expect(screen.getAllByRole('link').length).toBe(linksNum);
});

test('clicking menu button TWICE reverts its state', async () => {
  const user = userEvent.setup();
  setup();
  const header = screen.getByRole('banner');
  const menuBtn = screen.getByRole('button', { name: /menu/i });

  await user.click(menuBtn);
  await user.click(menuBtn);

  expect(menuBtn).toHaveAccessibleName(/menu/i);
  expect(header.classList.value).not.toMatch('bg-volunteer-950');
  expect(header.childElementCount).toBe(1);
  expect(screen.getAllByRole('link').length).toBe(2);
});
