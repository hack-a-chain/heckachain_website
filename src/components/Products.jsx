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
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl z-50 font-extrabold text-white sm:text-4xl xl:text-5xl">
              Work experience with all kinds of projects in the crypto world.
            </h2>
          </div>

          <img
            src="/graphics/grafismo-03.png"
            alt="grafismo"
            className="absolute opacity-40 sm:-top-5 right-5"
          />

          <div
            data-aos="zoom-in-up"
            className="flex items-center justify-evenly"
          >
            <div className="mt-8 lg:mt-0 flex flex-col">
              {logos.splice(0, 3).map((logo, index) => (
                <div
                  className={`py-4 z-40 h-28 w-28 bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-xl ml-2 rounded-full flex justify-center items-center p-5 px-1 m-2 cursor-pointer ${"animate-bounceFirst"}`}
                  key={index}
                >
                  <img
                    className="max-h-20 transition duration-500 ease-in-out"
                    src={logo.img}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 lg:mt-0 flex flex-col">
              {logos.map((logo, index) => (
                <div
                  className={`py-4 z-40 h-28 w-28 bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-xl ml-2 rounded-full flex justify-center items-center p-5 px-1 m-2 cursor-pointer ${"animate-bounce"}`}
                  key={index}
                >
                  <img
                    className="max-h-20 transition duration-500 ease-in-out"
                    src={logo.img}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
