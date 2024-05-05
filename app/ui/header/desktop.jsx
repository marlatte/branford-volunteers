import LogoLink from './logo-link';
import NavLinks from './nav-links';

export default function DesktopHeader() {
  return (
    <header className="hidden lg:block">
      <LogoLink />
      <NavLinks />
    </header>
  );
}
