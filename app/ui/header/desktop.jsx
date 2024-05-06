import LogoLink from './logo-link';
import NavLinks from './nav-links';

export default function DesktopHeader() {
  return (
    <header className="hidden gap-16 lg:flex">
      <LogoLink />
      <NavLinks />
    </header>
  );
}
