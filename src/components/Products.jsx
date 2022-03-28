import NavLink from "./NavLink";

export default function Products() {
  return (
    <div className="bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              We can build and audit all types of projects in the crypto world
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-200">
              We pride ourselves in offering best-in-class auditing services
              suited for the needs of new startup blockchain projects, at
              accessible prices.
            </p>
            <div className="mt-6">
              <NavLink href="#">
                <button
                  type="button"
                  className="inline-flex items-center px-5 py-2 border border-transparent  mt-3 text-base sm:mt-8 sm:text-xl lg:text-lg xl:text-xl leading-4 font-semibold rounded text-white bg-primary hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce transition duration-500 ease-in-out"
                >
                  Learn more
                </button>
              </NavLink>
            </div>
          </div>

          <div className=" mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <img
              src="/graphics/grafismo-03.png"
              alt="grafismo"
              className="absolute opacity-40 -top-5 right-5"
            />
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-4">
              <img
                className="max-h-20"
                src="/networksChain/nft-logo.png"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
