import Hero from './ui/home/hero';
import Images from './ui/home/images';
// import SearchBtn from './ui/search-button';

export default async function Page() {
  const categories = [
    'food insecurity',
    'education',
    'disabilities',
    'environment',
    'seniors',
    'health care',
    'public safety',
    'child advocacy',
    'housing',
    'arts & culture',
    'veterans',
  ];

  return (
    <main className="flex flex-1 flex-col text-white">
      <Hero />
      <section className="flex flex-col items-center">
        <div id="did-you-know" className="pb-6 pt-14">
          <h2 className="mb-1 text-3xl text-volunteer-100 underline md:text-4xl">
            Did You Know?
          </h2>
          <p className="flex flex-col text-center text-lg md:text-xl">
            <span>There are more than 100</span>
            <span>Branford-based</span>
            <span>nonprofits.</span>
          </p>
        </div>
      </section>
      <Images />
      <section className="flex flex-col items-center px-5 py-12">
        <div className="flex-1 rounded-xl border-2 p-3">
          <ul className="h-50 grid list-disc grid-cols-2 gap-x-7 gap-y-2 pl-5 text-lg sm:grid-cols-3 sm:gap-x-12 sm:text-xl md:text-2xl">
            {categories.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>and more...</li>
          </ul>
        </div>
      </section>
      <section className="bg-white p-6 text-volunteer-600">
        <div className="mx-auto max-w-sm sm:max-w-xl">
          <div className="flex gap-1 pl-2 text-5xl font-semibold">
            <p>&ldquo;</p>
            <p className="w-52 text-3xl font-medium sm:w-5/6">
              Service to others is the rent you pay for your room here on Earth.
            </p>
            <p className="self-end">&rdquo;</p>
          </div>
          <p className="mt-2 text-right text-2xl font-medium">- Muhammad Ali</p>
        </div>
      </section>
      <section className="flex justify-center  p-10">
        <div className="flex flex-col justify-evenly gap-8 font-semibold sm:flex-row">
          <p className="w-72">
            Whether you can give an hour, a&nbsp;day, or a lifetime, find your
            opportunity to&nbsp;give back to your community.
          </p>
          {/* <SearchBtn /> */}
        </div>
      </section>
    </main>
  );
}
