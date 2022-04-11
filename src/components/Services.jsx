import BlockChainAnimate from "./Development/BlockChainAnimate";
import NavLink from "./NavLink";

export default function Services() {
  return (
    <div id="services" className="bg-black relative">
      <img
        src="/graphics/grafismo-03-invert.png"
        alt="grafismo"
        className="absolute opacity-10 sm:-top-10 left-5"
      />
      <div className="px-4 py-16 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 text-center sm:mb-0">
            <div
              data-aos="fade-down"
              className="mb-6 mx-auto"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                <BlockChainAnimate />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            >
              <h2 className="max-w-xl my-6 font-sans text-3xl font-bold leading-none tracking-tight text-secondary sm:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">Blockchain</span>
                </span>{" "}
                Development
              </h2>
              <p className="text-lg text-white md:text-2xl font-anonymous">
                From A to Z, whether at the idea, conception, development or
                improvement stage, our team of blockchain specialists is here to
                help you with all our technology and business knowledge!
              </p>
            </div>
            <div data-aos="fade-left">
              <NavLink
                href="#form"
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-grayHack transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-secondary hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                Build your project
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
