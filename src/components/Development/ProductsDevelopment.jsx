export default function ProductsDevelopment() {
  const products = [
    {
      img: "/productIcons/nft-logo.png",
      alt: "NFT",
    },
    {
      img: "/productIcons/token.png",
      alt: "Token",
    },
    {
      img: "/productIcons/nft-logo.png",
      alt: "DeFi",
    },
    {
      img: "/productIcons/nft-logo.png",
      alt: "DEXs",
    },
    {
      img: "/productIcons/nft-logo.png",
      alt: "DAOs",
    },
  ];

  return (
    <div className="relative flex justify-center items-center flex-col py-10 bg-gradient-to-t from-secondary via-primary to-primary">
      <div className="m-5 max-w-5xl sm:mx-10 flex flex-col items-center justify-center">
        <h1
          data-aos="fade-right"
          className="text-3xl text-center sm:text-4xl  mb-4 text-white font-semibold  lg:text-5xl"
        >
          Work experience with all kinds of projects in the crypto world.
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-wrap justify-center items-center py-8"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className={`bg-transparent ml-2 px-4 flex justify-center items-center m-2 cursor-pointer ${
              index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
            }`}
            title={item.alt}
          >
            <img
              className="h-28 transition duration-500 ease-in-out"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
