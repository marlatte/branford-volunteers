import Link from 'next/link';
import { ChevronDownIcon as DownArrow } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative flex h-[min(92svh,_1000px)] w-full flex-col">
      <div className="bg-size absolute h-full w-full bg-home-hero-vert bg-cover bg-[70%] opacity-[15%] brightness-75 md:hidden" />
      <div className="hidden h-96 w-full bg-home-hero-wide bg-cover bg-top md:block" />
      <div className="relative mx-auto flex max-w-[600px] flex-1 flex-col justify-between px-4 pt-10">
        <h1 className="my-14 flex flex-col flex-wrap items-start gap-2 text-4xl font-medium md:my-0 md:flex-row">
          <span>The </span>
          <span className="rounded bg-white px-1 text-red-600">Branford </span>
          <span>volunteer&nbsp;hub</span>
        </h1>
        <p className="max-w-[322px] text-pretty text-center font-semibold md:self-center">
          With dozens of organizations in Branford, <br />
          it can be hard to know where to start. <br />
          We&apos;re here to help you find the perfect fit.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 text-center text-xl font-semibold">
          <Link
            className="flex-grow rounded-lg border-2 border-white px-5 py-3"
            href="/about"
          >
            Learn More
          </Link>
          <Link
            className="text-branford-600 flex-grow rounded-lg border bg-white px-5 py-3"
            href="/search"
          >
            Get Started
          </Link>
        </div>
        <Link href="#did-you-know" className="size-12 self-center">
          <DownArrow className="stroke-white" />
        </Link>
      </div>
    </section>
  );
}
