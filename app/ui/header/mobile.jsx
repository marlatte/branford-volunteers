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

  const toggleOpen = () => {
    setIsOpen((curr) => !curr);
  };

  const closeMenu = () => {
    setIsOpen(() => false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 z-10 h-screen w-screen bg-black bg-opacity-25 backdrop-blur-[2px]"
          onClick={closeMenu}
          aria-hidden
        />
      )}
      <header
        className={clsx('fixed top-0 z-20 flex w-screen lg:hidden', {
          'flex-col bg-volunteer-950': isOpen,
          'bg-volunteer-600': !isOpen,
        })}
      >
        <div className="flex w-full flex-1 items-center justify-between">
          <Link
            href="/search"
            className="flex w-16 items-center px-4 py-2 lg:hidden"
            aria-label="Search Volunteer Opportunities"
            onClick={closeMenu}
          >
            <SearchIcon className="stroke-2" />
          </Link>
          <LogoLink onClick={closeMenu} />
          <button
            aria-label={isOpen ? 'Close Menu' : 'Menu'}
            onClick={toggleOpen}
            type="button"
            className="w-16 p-2"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {isOpen && (
          <div className="mx-3 mb-6 flex flex-col gap-7 bg-volunteer-950">
            <NavLinks />
          </div>
        )}
      </header>
    </>
  );
}
