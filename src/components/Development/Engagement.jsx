export default function Engagement() {
  return (
    <div className="relative py-16 bg-grayHack bg-[url('/graphics/textura.png')] bg-center bg-no-repeat bg-cover overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-secondary"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-primary"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-secondary font-semibold tracking-wide uppercase">
              How we work
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-primary sm:text-5xl">
              Engagement Model
            </span>
          </h1>
          <p className="mt-8 text-xl text-white leading-8">
            Hack-a-Chain works with Closed and Customized Scope Projects. That
            means that you’ll hire us to work at your idea (not a pre-engineered
            product) and the project will have a beginning and an end. But don’t
            worry about maintenance! The thing about blockchain projects is that
            the Smart Contracts are immutable, so you can’t make any changes at
            the back-end.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-white mx-auto">
          <p>
            That’s why we are specialized in conducting as much test as it’s
            needed to make sure it works perfectly before we deploy it. You’ll
            mostly make changes at the front-end to keep improving user
            experience, and we’ll help you all the way throw the process of
            finding the right partners.
          </p>
          <p>
            When you decide to improve your back-end, it’s time to create a
            Version 2 of your project, and we’ll be completely available to do
            that!
          </p>
        </div>
      </div>
    </div>
  );
}
