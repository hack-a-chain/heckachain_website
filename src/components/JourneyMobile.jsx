export default function JourneyMobile() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Idea</p>
              <p className="text-white">
                Participating in the ideation phase is surely something we’ll be
                happy to be with you. We can help you to better understand your
                business and see the different approaches you can have to it.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Conception</p>
              <p className="text-white">
                When you already have your idea, it’s time to understand
                technologically how it will be built. And that’s what we are
                specialized at.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  3
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Development</p>
              <p className="text-white">
                We have a talented team of engineers who can develop your
                project with the best security and coding practices. The
                technology development is at our own risk, and you can trust
                we’ll deliver a high-quality product.
              </p>
            </div>
          </div>
          {/* <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  4
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Auditing</p>
              <p className="text-white">
                If you have already developed your project and just need some
                good eyes to review it and make sure everything is correct, we
                are at your disposal to audit your smart contracts.
              </p>
            </div>
          </div> */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  4
                </div>
              </div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Improvement</p>
              <p className="text-white">
                Thinking about building a new version for your project? That’s
                for sure something we can help you with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
