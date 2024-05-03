import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-branford-950 p-5 text-center text-branford-100">
      <p className="flex flex-wrap justify-center gap-x-1">
        <Link className="underline underline-offset-2" href="/">
          BranfordVolunteers.Org
        </Link>{' '}
        <span>is a free service of</span>
      </p>
      <p className="flex flex-wrap justify-center gap-x-1">
        <Link
          target="_blank"
          className="underline underline-offset-2"
          href="https://www.branfordcommunityfoundation.org/"
        >
          The Branford Community Foundation,
        </Link>
        <span> a 501(C)(3) Organization.</span>
      </p>
    </footer>
  );
}
