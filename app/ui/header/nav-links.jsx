import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

export const routes = [
  { name: 'Volunteer', href: '/search' },
  { name: 'Organizations', href: '/organizations' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'About', href: '/about' },
  { name: 'Register', href: '/register' },
  { name: 'Log In', href: '/login' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {routes.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx('flex-[0] text-xl xl:flex-initial', {
            'underline underline-offset-4': pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
