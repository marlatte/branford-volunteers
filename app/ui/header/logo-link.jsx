import Image from 'next/image';
import Link from 'next/link';

export default function LogoLink() {
  return (
    <Link href="/" className="flex items-center lg:mr-auto">
      <Image
        src="/logo.png"
        fill
        alt="Branford Volunteers logo"
        className="w-60 lg:w-80"
      />
    </Link>
  );
}
