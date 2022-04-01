import NavLink from "./NavLink";

export default function Customers() {
  return (
    <div id="customers" className="bg-gradient-to-t from-indigo-500 via-primary to-secondary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-grayHack">
          Projects that already trust us
        </h2>
        <div data-aos="zoom-in" className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <NavLink href="https://www.classykangaroos.com/" target="blank">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="max-h-20" src="/customers/classy.png" alt="logo" />
              </div>
            </NavLink>

            <NavLink href="https://metafighter.com/" target="blank">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="max-h-20" src="/customers/meta.png" alt="logo" />
              </div>
            </NavLink>

            <NavLink href="https://cryptomonkeys.me/" target="blank">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="max-h-20" src="/customers/monkeys.png" alt="logo" />
              </div>
            </NavLink>

            <NavLink href="https://deliqfinance.com/" target="blank">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="max-h-20" src="/customers/deliq.png" alt="logo" />
              </div>
            </NavLink>

            <NavLink href="https://projectmerge.org/" target="blank">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img className="max-h-20" src="/customers/merge.webp" alt="logo" />
              </div>
            </NavLink>

            <NavLink
              href="https://mobile.twitter.com/TokonamiNFT/photo"
              target="blank"
            >
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img
                  className="max-h-20"
                  src="/customers/Tokonami.jpg"
                  alt="logo"
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
