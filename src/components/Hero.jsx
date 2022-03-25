import HeroAnimate from "./HeroAnimate";

export default function Hero() {
  return (
    <div className="relative pt-10 bg-black sm:pt-24 lg:pb-24 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1
                style={{
                  textShadow:
                    "0 0 80px rgb(192 219 255 / 48%), 0 0 32px rgb(65 120 255 / 24%)",
                }}
                className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
              >
                <span className="block">Blockchain Security </span>
                <span className="block text-primary">
                  & Smart Contract Audits
                </span>
              </h1>
              <button
                type="button"
                className="inline-flex items-center px-5 py-2 border border-transparent mt-3 text-base sm:mt-8 sm:text-xl lg:text-lg xl:text-xl leading-4 font-medium rounded text-white bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce transition duration-500 ease-in-out"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:relative">
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
