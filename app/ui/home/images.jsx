export default function Images() {
  const layers2 = {
    first: {
      content: [
        { img: 1, width: 'w-1/5' },
        { img: 2, width: 'w-2/5' },
        { img: 3, width: 'w-2/5' },
      ],
      styling: {
        start: 'ml-auto flex min-w-80', // last part necessary??
        breaks: '',
      },
    },
    second: {
      content: [
        { img: 3, width: 'w-2/5' },
        { img: 2, width: 'w-2/5' },
        { img: 1, width: 'w-1/5' },
      ],
      styling: {
        start: 'ml-auto mr-auto hidden',
        breaks: 'md:flex lg:mr-[22%]',
      },
    },
    middle: {
      content: [
        { img: 1, width: 'w-1/6' },
        { img: 2, width: 'w-2/3' },
        { img: 3, width: 'w-1/6' },
      ],
      styling: {
        start: 'mx-auto hidden',
        breaks: '2xl:flex',
      },
    },
    secondLast: {
      content: [
        { img: 1, width: 'w-1/3' },
        { img: 2, width: 'w-1/3' },
        { img: 3, width: 'w-1/3' },
      ],
      styling: {
        start: 'ml-[22%] mr-auto hidden',
        breaks: 'xl:flex',
      },
    },
    last: {
      content: [
        { img: 1, width: 'w-1/2' },
        { img: 2, width: 'w-1/2' },
      ],
      styling: {
        start: 'mr-auto flex',
        breaks: '',
      },
    },
  };

  return (
    <section>
      {Object.entries(layers2).map(([name, details]) => (
        <div
          key={name}
          className={` ${details.styling.start} w-[min(100%,_550px)] ${details.styling.breaks}`}
        >
          {details.content.map(({ img, width }) => (
            <div key={img} className={`h-28 ${width}`}>
              <div className={`h-full bg-${img} bg-cover bg-center`} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
