import DesktopHeader from './desktop';
import MobileHeader from './mobile';

export default function Header() {
  return (
    <div className="h-24 text-branford-50">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}
