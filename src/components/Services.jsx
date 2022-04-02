import NavLink from "./NavLink";

export default function Services() {
  return (
    <div id="services" className="bg-grayHack relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/graphics/grafismo-01.png"
          alt=""
        />
        <div className="absolute inset-0 bg-grayHack mix-blend-multiply" aria-hidden="true" />
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2
            data-aos="fade-right"
            className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 xl:text-5xl group"
          >
            <span className="inline-block ">Our Services</span>
            {/* <div className="h-1 ml-auto duration-500 origin-left transform bg-secondary scale-x-30 group-hover:scale-x-100" /> */}
            <div className="-mt-4">
              <span className="inline-block w-40 h-1 rounded-full bg-secondary"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-secondary"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-secondary"></span>
            </div>
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="grid gap-8 row-gap-5 md:grid-cols-2 items-start"
        >
          <div className="relative p-px overflow-hidden transition-all duration-500 transform border-none rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-500 origin-left transform scale-x-0 bg-secondary group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-500 origin-bottom transform scale-y-0 bg-secondary group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-500 origin-right transform scale-x-0 bg-secondary group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-500 origin-top transform scale-y-0 bg-secondary group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 rounded-sm lg:items-center lg:flex-row">
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-xl font-semibold leading-5 text-secondary">
                    Build your project: Blockchain Development
                  </h6>
                  <p className="mb-2 text-base sm:text-lg text-white">
                    From A to Z, whether at the idea, conception, development or
                    improvement stage, our team of blockchain specialists is
                    here to help you with all our technology and business
                    knowledge!
                  </p>
                </div>
                <NavLink
                  href="/Development"
                  className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-secondary"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="relative p-px overflow-hidden transition-all duration-500 transform border-none rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-500 origin-left transform scale-x-0 bg-secondary group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-500 origin-bottom transform scale-y-0 bg-secondary group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-500 origin-right transform scale-x-0 bg-secondary group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-500 origin-top transform scale-y-0 bg-secondary group-hover:scale-y-100" />
            <div className="relative flex flex-col h-full p-5 rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0"></div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h6 className="mb-2 text-xl font-semibold leading-5 text-secondary">
                    Protect your project: Security Audit
                  </h6>
                  <p className="mb-2 text-base sm:text-lg text-white">
                    Make sure your project is secure with our full white-box
                    review of smart contract code to detect any security
                    vulnerabilities, including statical and dynamical analysis
                    with an extra manual analysis. At the end, you'll receive a
                    certification of security!
                  </p>
                </div>
                <NavLink
                  href="/Development"
                  className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-secondary"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
