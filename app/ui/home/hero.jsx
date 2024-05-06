import Link from 'next/link';
import { ChevronDownIcon as DownArrow } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative flex h-[min(93svh,_1000px)] w-full flex-col">
      <div
        data-name="mobile background"
        className="absolute h-full w-full bg-home-hero-vert bg-cover bg-[30%] opacity-[20%] brightness-75 md:hidden"
      />
      <div
        data-name="desktop background"
        className="hidden w-full grow-[3] opacity-90 md:flex"
      >
        <div className="bg-home-hero-wide-1 flex-1 bg-cover bg-[center_top_32%]" />
        <div className="bg-home-hero-wide-2 flex-1 bg-cover bg-[center_top_32%]" />
      </div>
      <div
        data-name="content"
        className="relative mx-auto flex flex-1 grow-[5] flex-col justify-between px-4 pb-4 md:p-0"
      >
        <div
          data-name="hero-text"
          className="flex flex-1 flex-col items-center justify-center gap-[7vh]"
        >
          <h1 className=" flex flex-col items-start justify-center gap-2 text-5xl font-black max-[370px]:text-4xl md:my-0 md:flex-row md:items-center md:gap-4 lg:text-6xl xl:text-8xl">
            <span>The </span>
            <span className="rounded bg-white px-2 py-1 leading-none text-red-600 md:py-0 lg:px-3">
              Branford{' '}
            </span>
            <span>volunteer&nbsp;hub</span>
          </h1>
          <p className="text-pretty text-center font-semibold md:text-2xl md:font-normal">
            <span>With dozens of organizations&nbsp;in Branford, </span>
            <span className="block lg:inline">
              it can be hard to know where to start.{' '}
            </span>
            <span className="block">
              We&apos;re here to help you find the perfect fit.
            </span>
          </p>
          <div className="md:w flex w-[min(100%,_440px)] flex-wrap justify-center gap-x-6 gap-y-5 text-center text-xl font-semibold lg:text-2xl">
            <Link
              className="grid flex-grow place-content-center rounded-lg border-2 border-white px-4 py-3"
              href="/about"
            >
              Learn More
            </Link>
            <Link
              className="grid flex-grow place-content-center rounded-lg border bg-white px-4 py-3 text-volunteer-600"
              href="/search"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Link
          href="#did-you-know"
          className="size-12 self-center"
          aria-label="Read More Below"
        >
          <DownArrow className="stroke-white stroke-2 drop-shadow-[0_4px_2px_rgb(0,0,0,0.25)]" />
        </Link>
      </div>
    </section>
  );
}
