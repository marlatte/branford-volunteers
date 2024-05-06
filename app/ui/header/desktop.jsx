import LogoLink from './logo-link';
import NavLinks from './nav-links';

export default function DesktopHeader() {
  return (
    <header className="mx-3 hidden flex-1 items-center gap-8 lg:flex">
      <LogoLink />
      <NavLinks />
    </header>
  );
}
