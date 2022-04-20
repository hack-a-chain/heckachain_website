export default function Team() {
  return (
    <section id="team" className="bg-grayHack">
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto max-w-7xl">
        <div data-aos="zoom-in-down">
          <h1 className="text-3xl font-semibold text-center capitalize lg:text-5xl text-white">
            Our <span className="text-primary">Executive Team</span>
          </h1>
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
            We are a quality over quantity company. Our team is composed by top
            world talents that will work hard for you.
          </p>
        </div>

        <div
          data-aos="zoom-in-down"
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-3"
        >
          <div className="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-primary border-primary">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-2 ring-gray-300"
                src="/team/joao.jpg"
                alt="CTO"
              />
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold  capitalize md:text-2xl text-gray-300 group-hover:text-white">
                  João Antônio da Veiga
                </h1>
                <p className="mt-2  capitalize text-gray-300 group-hover:text-white">
                  CTO
                </p>
              </div>
            </div>
            <p className="mt-4  text-base sm:text-lg text-gray-300 group-hover:text-white">
              Technology and Business specialist. "I decided to fully dedicate
              myself to create Web 3.0 when I saw that this is the biggest
              revolution of our time"
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl group hover:bg-primary border-primary hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-2 ring-gray-300"
                src="/team/rafael.jpeg"
                alt="CMO"
              />
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold capitalize md:text-2xl text-gray-300 group-hover:text-white">
                  Rafael Krás Borges
                </h1>
                <p className="mt-2  capitalize text-gray-300 group-hover:text-white">
                  CMO
                </p>
              </div>
            </div>
            <p className="mt-4  text-base sm:text-lg text-gray-300 group-hover:text-white">
              Marketing and Business specialist. "Web 3.0 is more than a hyped
              technology. We are actually building the infrastucture to a
              sustainable social paradigm change."
            </p>
          </div>

          <div className="px-12 py-8 transition-colors duration-200 transform border cursor-pointer rounded-xl group hover:bg-primary border-primary hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-2 ring-gray-300"
                src="/team/pedro.jpeg"
                alt="CMO"
              />
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold capitalize md:text-2xl text-gray-300 group-hover:text-white">
                  Pedro Destri
                </h1>
                <p className="mt-2  capitalize text-gray-300 group-hover:text-white">
                  Project Manager
                </p>
              </div>
            </div>
            <p className="mt-4  text-base sm:text-lg text-gray-300 group-hover:text-white">
              We are seeing the next generation of web borning in front of
              ourselves and we can be part of it right now."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
