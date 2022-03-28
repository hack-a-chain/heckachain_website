/* This example requires Tailwind CSS v2.0+ */
export default function Customers() {
  return (
    <div className="bg-primary  ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2
            data-aos="zoom-in-down"
            className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left"
          >
            Projects that already trust us
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div
                data-aos="fade-up"
                className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
              >
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"
                  alt="Workcation"
                />
              </div>
              <div
                data-aos="fade-up"
                className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
              >
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg"
                  alt="Tuple"
                />
              </div>
              <div
                data-aos="fade-up"
                className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4"
              >
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                  alt="Level"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
