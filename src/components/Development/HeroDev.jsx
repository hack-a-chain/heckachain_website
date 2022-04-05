import NavLink from "../NavLink";
import BlockChainAnimate from "./BlockChainAnimate";

export default function HeroDev() {
  return (
    <div className="relative bg-black pt-20 sm:pt-28">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-primary"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative max-w-7xl sm:mx-auto text-center">
          <h2 className="my-8 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none lg:text-5xl">
            <span className="relative px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-secondary" />
              <span className="relative text-grayHack">
                Build your Web 3.0 project from A to Z with us!
              </span>
            </span>
            <span className="inline-block text-2xl max-w-4xl mt-3 font-semibold">
              Our team of experts is here to help you from the sketch until the
              final version of your product is ready to take off!
            </span>
          </h2>

          <div className="relative py-20">
            <BlockChainAnimate />
          </div>

          <div className="relative pt-10">
            <NavLink
              href="#"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white transform border border-gray-400 rounded-full hover:text-primary hover:border-primary hover:shadow hover:scale-110 animate-bounce transition duration-500 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}