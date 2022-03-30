import HeroAnimate from "./HeroAnimate";
import NavLink from "./NavLink";

export default function Hero() {
  return (
    <div className="relative h-full max-h-170 pt-28 bg-black lg:pb-24 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-20">
              <h1 className="mt-4 mb-6 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span
                  style={{
                    textShadow:
                      "0 0 10px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%)",
                  }}
                  className="block"
                >
                  We are Blockchain Specialists{" "}
                </span>
              </h1>
              <p className="max-w-lg mb-4 text-base text-white md:text-xl">
                More than a software service. All our business and technology
                knowledge working for you.
              </p>
              <NavLink href='#form'>
                <button
                  type="button"
                  className="inline-flex items-center px-5 py-2 border border-transparent  mt-3 text-base sm:mt-8 sm:text-xl lg:text-lg xl:text-xl leading-4 font-semibold rounded text-white bg-primary hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce transition duration-500 ease-in-out"
                >
                  Contact us
                </button>
              </NavLink>
            </div>
          </div>
          <div className="mt-12 pb-5 sm:pb-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <HeroAnimate />
            </div>
          </div>
        </div>
      </div>

      <div class="triangle_vert"></div>
    </div>
  );
}
