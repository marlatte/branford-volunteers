import Image from 'next/image';
import Link from 'next/link';
// eslint-disable-next-line import/no-unresolved
import logo from '@/public/logo.png';

export default function LogoLink() {
  return (
    <Link
      href="/"
      className="relative h-11 w-60 flex-shrink lg:mr-auto lg:h-14 lg:w-64"
    >
      <Image
        src={logo}
        fill
        alt="Branford Volunteers logo"
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}
