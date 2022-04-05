export default function DevelopmentProcess() {
  return (
    <div className="relative bg-grayHack px-4 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/graphics/grafismo-05.png"
          alt=""
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
        //   bg-primary 
          aria-hidden="true"
        />
      </div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          Our Development Process
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              1
            </p>
            <p className="text-xl font-bold leading-5">Architecture</p>
          </div>
          <p className="text-base text-white">
            Bro ipsum dolor sit amet gaper backside single track, manny Bike
            epic clipless.
          </p>
        </div>
        <div className="p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              2
            </p>
            <p className="text-xl font-bold leading-5">Coding</p>
          </div>
          <p className="text-base text-white">
            Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
            flail 180 berm.
          </p>
        </div>
        <div className="relative p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              3
            </p>
            <p className="text-xl font-bold leading-5">Deployment</p>
          </div>
          <p className="text-base text-white">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped.
          </p>
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
