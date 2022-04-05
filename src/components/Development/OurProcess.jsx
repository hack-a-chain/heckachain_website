export default function OurProcess() {
  const process = {
    architecture: [
      {
        id: 1,
        title: (
          <ul className="divide-y divide-primary">
            <li className="py-1">Requirements debriefing</li>
            <li className="pt-1">Process sharing</li>
          </ul>
        ),
        desc: "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
      },
      {
        id: 2,
        title: "Smart Contract Interface",
        desc: "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
      },
      {
        id: 3,
        title: "Data Structure",
        desc: "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
      },
    ],
    coding: [
      {
        id: 1,
        title: (
          <ul className="divide-y divide-primary">
            <li className="py-1">Smart Contract development</li>
            <li className="pt-1">Automated tests</li>
          </ul>
        ),
        desc: "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
      },
      {
        id: 2,
        // title: "Smart Contract Implementation",
        title: (
          <ul className="divide-y divide-primary">
            <li className="py-1">Smart Contract development</li>
            <li className="pt-1">Iterative process</li>
          </ul>
        ),
        desc: "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
      },
    ],
    deployment: [
      {
        id: 1,
        title: "Testnet deployment",
        desc: "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
      },
      {
        id: 2,
        title: "Front-end testing",
        desc: "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
      },
      {
        id: 3,
        title: "External security Audit",
        desc: "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
      },
      {
        id: 4,
        title: "Mainnet Deployment",
        desc: "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
      },
    ],
  };

  return (
    <div className="relative bg-grayHack px-4 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/graphics/grafismo-05.png"
          alt="background"
        />
        <div
          className="absolute inset-0 bg-secondary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="  mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl md:mx-auto">
          Our Development Process
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary  hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              1
            </p>
            <p className="text-2xl font-bold leading-5">Architecture</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="mt-2 w-full">
              <ul className="divide-y divide-primary">
                {process.architecture.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="text-base font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <button className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-primary">
                View all<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              2
            </p>
            <p className="text-2xl font-bold leading-5">Coding</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="mt-2 w-full">
              <ul className="divide-y divide-primary">
                {process.coding.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="text-base font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <button className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-primary">
                View all<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              3
            </p>
            <p className="text-2xl font-bold leading-5">Deployment</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="mt-2 w-full">
              <ul className="divide-y divide-primary">
                {process.deployment.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="text-base font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <button className="cursor-pointer text-base font-semibold transition-colors duration-200 text-white hover:text-primary">
                View all<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-secondary sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-grayHack w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
