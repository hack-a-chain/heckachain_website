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
    <div className="relative flex justify-center items-center flex-col py-10 bg-gradient-to-t from-secondary via-primary to-primary">
      <div className="m-5 max-w-5xl sm:mx-10 flex flex-col items-center justify-center">
        <h1
          data-aos="fade-right"
          className="text-3xl text-center sm:text-4xl  mb-4 text-white font-semibold  lg:text-5xl"
        >
          Products we have experience building
        </h1>
      </div>

      <div
        data-aos="zoom-in"
        className="flex flex-wrap justify-center items-center py-8"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className={`h-28 w-28 bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-xl ml-2 rounded-full flex justify-center items-center p-5 px-1 m-2 cursor-pointer ${
              index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
            }`}
            title={item.alt}
          >
            <img
              className="max-h-20 transition duration-500 ease-in-out"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
