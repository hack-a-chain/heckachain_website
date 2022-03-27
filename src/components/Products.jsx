export default function Products() {
  return (
    <div className="bg-grayHack">
      <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2
            data-aos="fade-right"
            className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span className="inline-block mb-1 sm:mb-4">Our Services</span>
            <div className="h-1 ml-auto duration-500 origin-left transform bg-primary scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p data-aos="zoom-in-down" className="text-gray-100 lg:max-w-md">
            "All In One Solution".
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid gap-8 row-gap-5 md:grid-cols-2"
        >
          <div className="relative p-px overflow-hidden transition-all duration-500 transform border-none rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:animate-bounce delay-150 ease-in-out">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-500 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-500 origin-bottom transform scale-y-0 bg-primary group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-500 origin-right transform scale-x-0 bg-primary group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-500 origin-top transform scale-y-0 bg-primary group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 rounded-sm lg:items-center lg:flex-row">
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-2xl font-bold leading-5 text-primary">
                    Smart Contract Audiits
                  </h6>
                  <p className="mb-2 text-lg text-white">
                    Cheese on toast airedale the big cheese. Danish fontina
                    cheesy grin airedale danish fontina taleggio the big cheese
                    macaroni cheese port-salut.
                  </p>
                </div>
                <a
                  href="/plataforma"
                  className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-primary"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="relative p-px overflow-hidden transition-all duration-500 transform border-none rounded shadow-sm hover:scale-105 group hover:shadow-xl hover:animate-bounce delay-150 ease-in-ou"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 duration-500 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-500 origin-bottom transform scale-y-0 bg-primary group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-500 origin-right transform scale-x-0 bg-primary group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-500 origin-top transform scale-y-0 bg-primary group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0"></div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-2xl font-bold leading-5 text-primary">
                    Blockchain Development
                  </h6>
                  <p className="mb-2 text-lg text-white">
                    Cheese on toast airedale the big cheese. Danish fontina
                    cheesy grin airedale danish fontina taleggio the big cheese
                    macaroni cheese port-salut.
                  </p>
                </div>
                <a
                  href="/plataforma"
                  className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-primary"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
