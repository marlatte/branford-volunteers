'use client';

import {
  MagnifyingGlassIcon as SearchIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import LogoLink from './logo-link';
import NavLinks from './nav-links';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((curr) => !curr);
  }

  return (
    <header
      className={clsx('fixed z-50 lg:hidden', {
        'bg-volunteer-950': isOpen,
      })}
    >
      <div>
        <Link
          href="/search"
          className="flex w-16 items-center px-4 py-2 lg:hidden"
          aria-label="Search Volunteer Opportunities"
        >
          <SearchIcon className="stroke-2" />
        </Link>
        <LogoLink />
        <button
          aria-label={isOpen ? 'Close Menu' : 'Menu'}
          onClick={handleClick}
          type="button"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div>
          <NavLinks />
        </div>
      )}
    </header>
  );
}
