import DesktopHeader from './desktop';
import MobileHeader from './mobile';

export default function Header() {
  return (
    <div className="mx-auto flex h-16 w-[min(100%,_1280px)] items-center text-volunteer-50">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}
