export default function TechChain() {
  const chain = {
    tech: [
      {
        img: "/networksChain/solana.svg",
        alt: "Solana",
      },
      {
        img: "/networksChain/near.svg",
        alt: "Near",
      },
      {
        img: "/networksChain/fantom.svg",
        alt: "Fantom",
      },
      {
        img: "/networksChain/ethereum.svg",
        alt: "Ethereum",
      },
      {
        img: "/networksChain/binance-smart-chain.svg",
        alt: "Binance Smart Chain",
      },
      {
        img: "/networksChain/avalanche-avax-logo.svg",
        alt: "Avalanche Avax",
      },
    ],
  };

  return (
    <div className="relative flex justify-center items-center flex-col py-10 pb-16 bg-gradient-to-t from-indigo-500 via-primary to-secondary">
      <h1
        data-aos="fade-right"
        className="text-3xl text-center sm:text-4xl text-grayHack font-semibold m-5 sm:m-10 lg:text-5xl"
      >
        We're up to any challenge!
      </h1>
      <div
        data-aos="zoom-in"
        className="flex flex-wrap justify-center items-center py-8"
      >
        {chain.tech.map((item, index) => (
          <div
            key={index}
            className={`h-32 w-32 bg-gray-100 shadow-xl ml-2 rounded-full flex justify-center items-center p-5 px-1 m-2 cursor-pointer ${
              index % 2 !== 0 ? "animate-bounce" : "animate-bounceFirst"
            }`}
            title={item.alt}
          >
            <img
              className="w-40 h-16 transition duration-500 ease-in-out"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
