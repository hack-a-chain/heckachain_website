import NavLink from "./NavLink";

export default function Products() {
  const logos = [
    {
      img: "/productIcons/nft-logo.png",
      alt: "NFT",
    },
    {
      img: "/productIcons/token.png",
      alt: "Token",
    },
    {
      img: "/productIcons/defi.png",
      alt: "DeFi",
    },
    {
      img: "/productIcons/dex.png",
      alt: "DEXs",
    },
    {
      img: "/productIcons/dao.png",
      alt: "DAOs",
    },
  ];

  return (
    <div className="bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 md:py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl xl:text-5xl">
              Work experience with all kinds of projects in the crypto world.
            </h2>
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

          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <img
              src="/graphics/grafismo-03.png"
              alt="grafismo"
              className="absolute opacity-40 sm:-top-5 right-5"
            />
            {logos.map((logo, index) => (
              <div
                data-aos="zoom-in-left"
                className={`col-span-1 flex justify-center py-4 z-40 ${
                  index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
                }`}
                key={index}
              >
                <img
                  className="max-h-24 transition duration-500 ease-in-out"
                  src={logo.img}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
