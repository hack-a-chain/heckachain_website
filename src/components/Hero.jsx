import HeroAnimate from "./HeroAnimate";

export default function Hero() {
  return (
    <div className="pt-10 bg-black sm:pt-24 lg:pb-24 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Blockchain Security </span>
                <span className="block text-primary">& Smart Contract Audits</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <HeroAnimate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
